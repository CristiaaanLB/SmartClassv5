# -*- coding: utf-8 -*-
import paho.mqtt.client as mqttClient
import json
import pymongo
import datetime

institution = "UTT"  #Nombre de la institución

inTopic = "/SmartClass/"+institution+"/#"

def on_connect(client, userdata, flags, rc):
	print("Connected code: " + str(rc))
	client.subscribe(inTopic)

def on_message(client, userdata, message):
	json_data = str(message.payload.decode("utf-8"))

	intopic = str(message.topic) #.decode("utf-8")
	print("Topic: %s , message: %s" % (intopic, json_data))
	try:
		if json_data != "":
			print("Recibido: %s\n" % json_data)
			parsed_data = json.loads(json_data)

			building = parsed_data['Building']
			classroom = parsed_data['Classroom']
			temperature = parsed_data['Temperature']
			RH = parsed_data['RH']
			doorStatus = parsed_data['DoorStatus']
			noiseLevel = parsed_data['NoiseLevel']

			str_Date = datetime.datetime.now().strftime('%Y/%m/%d')
			str_Time = datetime.datetime.now().strftime('%H:%M:%S')
			print("DATE - TIME : %s %s\n" % (str_Date, str_Time))

			print("Building: %s" % building)
			print("Classroom: %s" % classroom)
			print("Temperature: %d" % temperature)
			print("Relative humidity: %d" % RH)
			print("Door Status: %d" % doorStatus)
			print("Noise Level: %d\n" % noiseLevel)

			######## MongoDB
			conn_str = "mongodb://localhost:27017"

			try:
				cluster = pymongo.MongoClient(conn_str, serverSelectionTimeoutMS=5000)
				db = cluster[institution]
				collection = db[building]
				print("Connected to MongoDB")
			except:
				print("MongoDB connection failed")

			document = {
                "classroom":classroom,
                "temperature":temperature,
                "RH":RH,
                "doorStatus":doorStatus,
				"noiseLevel":noiseLevel,
				"timestamp": datetime.datetime.utcnow(),
            }
			print(document)

			try:
				outTopic = "/SmartClass/Readings/"+institution+"/"+building+"/"+classroom

				outTopicTemperature = outTopic+"/temperature"
				outTopicRH = outTopic+"/RH"
				outTopicdoorStatus = outTopic+"/doorStatus"
				outTopicnoiseLevel = outTopic+"/noiseLevel"

				client.publish(outTopicTemperature,temperature)
				client.publish(outTopicRH,RH)
				client.publish(outTopicdoorStatus,doorStatus)
				client.publish(outTopicnoiseLevel,noiseLevel)

				print("Readings published to their individual MQTT topics")
			except:
				print("Error publishing to individual MQTT topics")

			try:
				collection.insert_one(document)
				print("Node "+building+", "+classroom+" : DB storage success!\n")
			except:
				print("Error inserting into MongoDB... \n")

	except Exception:
		print("JSON parsing ERROR...")

broker = "broker.hivemq.com"
port = 1883
client_id     = institution+"PythonClient"
# user_name     = "PythonClient"
# password      = "PythonClientpassword"

client = mqttClient.Client(client_id = client_id)
#client.username_pw_set(user_name, password)

try:
	client.connect(broker,port,60)
except Exception:
	print("Error MQTT connect")

print("MQTT subscriber started...")
client.on_connect = on_connect
client.on_message = on_message
client.loop_forever()