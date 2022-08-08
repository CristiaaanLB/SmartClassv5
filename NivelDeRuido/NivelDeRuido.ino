int LED = D8;
int MICANALOG = A0;
int valorlimite = 0;

void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  Serial.begin(74880);
}

// the loop function runs over and over again forever
void loop() {
  valorlimite = analogRead(MICANALOG);

  Serial.println(valorlimite);
  delay(1000);
}
