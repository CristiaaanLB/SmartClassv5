#include <ESP8266WiFi.h>
#include <PubSubClient.h>
#include<EEPROM.h>
#include <DHT.h>

//Variables en la eeprom
char* ssid;                            //<- Nombre de la red WiFi
char* password;                        //<- Contraseña de la red WiFi
char* mqtt_broker;                     //<- Broker de MQTT
char* institution;                     //<- Nombre de la institución       (será la base de datos)
char* building;                        //<-Nombre del edificio/docencia    (será la colección/tabla)
char* classroom;                       //<- Nombre del salon/lab/oficina   (incluído en cada documento insertado)
char OutTopic[50] = "/SmartClass/";    //<-Inicio del topico de MQTT       Ejemplo del topico: /SmartClass/UTT/Docencia1/Salon1/

//WiFi
WiFiClient espClient;

//MQTT
PubSubClient client(espClient);
unsigned long lastMsg = 0;

//EEPROM
#define MAX_LENGTH 30
struct settings{
 char mySSID[MAX_LENGTH]= "";
 char myPW[MAX_LENGTH] = "";
 char myInstitution[MAX_LENGTH] = "";
 char myBuilding[MAX_LENGTH] = "";
 char myClassroom[MAX_LENGTH] = "";
 char myBroker[MAX_LENGTH] = "";
};

struct settings set1;
struct settings set2;

String sMessage;
char received;

//Sensores
int Ts = 5000; // milliseconds sampling rate

//Sensor de Temperatura
#define DHTTYPE DHT11

float temperature = 0;
int humidity = 0;

uint8_t DHTPin = D1;
DHT dht(DHTPin, DHTTYPE);

//Sensor Magnetico
int SMAGN = D4;
int door = 0;

//Sensor de Ruido
int LEDV = D8;
int LEDA = D7;
int LEDR = D6;
int MICDIGI = D0;
int noise_status;
int noise_level;
int repeats = 0;
unsigned long now_noise = 0;

void get_sensor_values(){
  temperature = dht.readTemperature();
  humidity = dht.readHumidity();
  door = digitalRead(SMAGN);
}

void change_wifi(String myPayload){
  int commaIndex = myPayload.indexOf(',');

  if (commaIndex != 0){
    String SSIDins = myPayload.substring(0, commaIndex);
    SSIDins.toCharArray(set1.mySSID, SSIDins.length()+1);
    
    String PASSins = myPayload.substring(commaIndex+1);
    PASSins.toCharArray(set1.myPW, PASSins.length()+1);

    EEPROM.get(0, set2);
    strcpy(set1.myInstitution, set2.myInstitution);
    strcpy(set1.myBuilding, set2.myBuilding);
    strcpy(set1.myClassroom, set2.myClassroom);
    strcpy(set1.myBroker, set2.myBroker);
    
    Serial.println();
    Serial.println("WiFi Settings changed to: ");
    EEPROM.put(0, set1);
    EEPROM.commit();
    EEPROM.get(0, set2);
    Serial.print(set2.mySSID);
    Serial.print('\t');
    Serial.println(set2.myPW);
    Serial.println("\nRestarting...\n\n");
    ESP.reset();
  }else{
    Serial.println("Wrong SSID, PASSWORD format...");
  }
}

void change_mqtt(String myPayload){
  String Brokerins = myPayload;
  Brokerins.toCharArray(set1.myBroker, Brokerins.length()+1);

  EEPROM.get(0, set2);
  strcpy(set1.mySSID, set2.mySSID);
  strcpy(set1.myPW, set2.myPW);
  strcpy(set1.myInstitution, set2.myInstitution);
  strcpy(set1.myBuilding, set2.myBuilding);
  strcpy(set1.myClassroom, set2.myClassroom);
  
  Serial.println();
  Serial.println("MQTT Settings changed to: ");
  EEPROM.put(0, set1);
  EEPROM.commit();
  EEPROM.get(0, set2);
  Serial.print(set2.myBroker);
  Serial.println("\nRestarting...\n\n");
  ESP.reset();
}

void change_location(String myPayload){
  int firstComma = myPayload.indexOf(',');
  int secondComma = myPayload.indexOf(',', firstComma+1);

  if (firstComma != 0){
    String Institutionins = myPayload.substring(0, firstComma);
    Institutionins.toCharArray(set1.myInstitution, Institutionins.length()+1);

    String Buildingins = myPayload.substring(firstComma+1, secondComma);
    Buildingins.toCharArray(set1.myBuilding, Buildingins.length()+1);

    String Classroomins = myPayload.substring(secondComma+1);
    Classroomins.toCharArray(set1.myClassroom, Classroomins.length()+1);

    EEPROM.get(0, set2);
    strcpy(set1.mySSID, set2.mySSID);
    strcpy(set1.myPW, set2.myPW);
    strcpy(set1.myBroker, set2.myBroker);
    
    Serial.println();
    Serial.println("Location Settings changed to: ");
    EEPROM.put(0, set1);
    EEPROM.commit();
    EEPROM.get(0, set2);
    Serial.print(set2.myInstitution);
    Serial.print('\t');
    Serial.print(set2.myBuilding);
    Serial.print('\t');
    Serial.println(set2.myClassroom);
    Serial.println("\nRestarting...\n\n");
    ESP.reset();
  }else{
    Serial.println("Wrong Institution, Building, Classroom format...");
  }
}

void read_eeprom(){
  EEPROM.get(0, set2);
  Serial.println();
  Serial.println("Current settings:");
  Serial.println();
  
  Serial.println("WiFi:");
  Serial.print("SSID: ");
  Serial.println(set2.mySSID);
  Serial.print("Password: ");
  Serial.println(set2.myPW);
  Serial.println();

  Serial.println("Location:");
  Serial.print("Institution: ");
  Serial.println(set2.myInstitution);
  Serial.print("Building: ");
  Serial.println(set2.myBuilding);
  Serial.print("Classroom: ");
  Serial.println(set2.myClassroom);
  Serial.println();

  Serial.println("MQTT:");
  Serial.print("Broker: ");
  Serial.println(set2.myBroker);
  Serial.print("Topic: ");
  Serial.print(OutTopic);
  Serial.println();
}

void setup_wifi() {
  delay(10);
  EEPROM.get(0, set2);

  if (set2.mySSID[0] == '\0' && set2.myPW[0] == '\0'){
    ssid = "UTT-CUERVOS";
    password = "CU3RV@S2022";
  }else{
    ssid = set2.mySSID;
    password = set2.myPW;
  }
  
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
    listentoserial();
  }
  randomSeed(micros());
  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void reconnect() {
  while (!client.connected()) {
    if (WiFi.status() != WL_CONNECTED){
        setup_wifi();
    }
    
    Serial.print("Attempting MQTT connection... ");
    listentoserial();
    if (client.connect(OutTopic)){
      Serial.println("Connected");
      Serial.println();
    } else {
      Serial.print("Connection failed, rc= ");
      Serial.print(client.state());
      Serial.println("\nTrying again in 2 seconds");
      delay(2000); // Wait 2 seconds before retrying
    }
  }
}

void setup() {
  Ts = Ts - 1000;
  Serial.begin(74880);
  pinMode(DHTPin, INPUT);
  dht.begin();
  pinMode(SMAGN, INPUT);
  pinMode(MICDIGI, INPUT);
  pinMode(LEDV, OUTPUT);
  pinMode(LEDA, OUTPUT);
  pinMode(LEDR, OUTPUT);
  EEPROM.begin(sizeof(settings));
  EEPROM.get(0, set2);

  if (set2.myInstitution[0] == '\0' && set2.myBuilding[0] == '\0' && set2.myClassroom[0] == '\0'){
    institution = "UTT";
    building = "Docencia1";
    classroom = "Salon1";
  }else{
    institution = set2.myInstitution;
    building = set2.myBuilding;
    classroom = set2.myClassroom;
  }

  if (set2.myBroker[0] == '\0'){
    mqtt_broker = "broker.hivemq.com";
  }else{
    mqtt_broker = set2.myBroker;
  }
  
  strcat (OutTopic, institution);
  strcat (OutTopic, "/");
  strcat (OutTopic, building);
  strcat (OutTopic, "/");
  strcat (OutTopic, classroom);
  strcat (OutTopic, "/");
  
  setup_wifi();
  client.setServer(mqtt_broker, 1883);
}

void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();
  listentoserial();
  unsigned long now = millis();
  noise_status = digitalRead(MICDIGI);
  if (noise_status == 0){
    digitalWrite(LEDV, HIGH);
    digitalWrite(LEDA, LOW);
    digitalWrite(LEDR, LOW);
    noise_level = 0;
    if(repeats > 0){
      repeats = repeats - 1;
    }
  }else{
    if(repeats < 15){
      digitalWrite(LEDV, LOW);
      digitalWrite(LEDA, HIGH);
      noise_level = 1;
      repeats = repeats + 1;
    }else{
      digitalWrite(LEDA, LOW);
      digitalWrite(LEDR, HIGH);
      noise_level = 2;
    }
  }

  if (now - lastMsg > Ts) {
    get_sensor_values();
    String JSON_msg = "{\"Building\":\""+String(building)+"\",\"Classroom\":\""+String(classroom)+"\",\"Temperature\":" + String(temperature,2) + ",\"RH\":" + String(humidity) + ",\"DoorStatus\":" + String(door) + ",\"NoiseLevel\":" + String(noise_level) +"}"; 
    Serial.print("Published message: ");
    Serial.println(JSON_msg);
    
    // MQTT Publish to topic 
    char JSON_msg_array[150];
    int JSON_msg_length = JSON_msg.length();
    JSON_msg.toCharArray(JSON_msg_array, 150);
    Serial.println(JSON_msg_array);
    
    if (client.connected()) {
      client.publish(OutTopic, JSON_msg_array);
      Serial.print("Published to topic: ");
      Serial.println(String(OutTopic)+"\n");
    }else{
      Serial.print("Not connected to broker, couldn't send MQTT message...");
    }
    lastMsg = millis();
  } //Se repite cada Ts segundos
  delay(1000);
}

void listentoserial(){
  if(Serial.available()>0){
   while(Serial.available()>0){
    received = (char)Serial.read();
    if(received != '\n'){
      sMessage += (char)received; 
    }else{
      break;
    }
   }
  }
  if (received == '\n'){
    process_message(sMessage);
    sMessage = "";
  }
}

void process_message(String message){
  if(sMessage != "" && received == '\n'){
    Serial.println(sMessage);
    int symbolIndex = sMessage.indexOf(':');
    if (symbolIndex != 0){
      String myCommand = sMessage.substring(0, symbolIndex);
      String myPayload = sMessage.substring(symbolIndex+1);
      if(myCommand == "wifi"){
        change_wifi(myPayload);
      }else if(myCommand == "location"){
        change_location(myPayload);
      }else if(myCommand == "mqtt"){
        change_mqtt(myPayload);
      }else if(myCommand == "read eeprom"){
        read_eeprom();
      }else{
        Serial.println("Message could not be decoded...:");
      }
    }
  }
}
