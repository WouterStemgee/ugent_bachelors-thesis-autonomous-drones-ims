import paho.mqtt.client as mqtt
import time
# from Drone import Drone
import json

class ClientSimpel:

    def __init__(self, d):
        self.drone = d
        def on_connect(client, userdata, flags, rc):
            if rc == 0:
                print("connected oke")
            else:
                print("Bad connection, returned code=", rc)

        def on_disconnect(client, userdata, flags, rc=0):
            print("Disconnected result code " + str(rc))

        def on_message(client, userdata, msg):
            topic = msg.topic
            m_decode = str(msg.payload.decode("utf-8", "ignore"))
            print("message received", m_decode)
            if topic == "drone/moveto":
                # json {x:...,y...}
                d = json.loads(m_decode)
                print(d)
                # coordinaten = m_decode.split(';')
                # xCoord = coordinaten[0]
                # yCoord = coordinaten[1]
                # zCoord = coordinaten[2]
                xCoord = d["x"]
                yCoord = d["y"]
                zCoord = d["z"] # er zit nog geen z-coord in
                self.drone.vliegNaar(xCoord, yCoord, zCoord)

        self.client = mqtt.Client("python1")
        # self.broker = "test.mosquitto.org"
        self.broker = "localhost:1883"
        self.client.on_connect = on_connect
        # self.client.on_disconnect = on_disconnect
        self.client.on_message = on_message

    def stuurPosition(self):
        self.client.loop_start()
        x = {
            "x": self.drone.get_xCoord(),
            "y": self.drone.get_yCoord(),
            "z": self.drone.get_zCoord()
        }
        y = json.dumps(x)
        self.client.publish("drone/position", y)
        self.client.loop_stop()

    def stuurScan(self):
        self.client.loop_start()
        self.client.publish("drone/scan", self.drone.scan())
        self.client.loop_stop()

    def stuurBattery(self):
        # print("connecting to broker ", self.broker)
        # self.client.connect("localhost", 1883)
        self.client.loop_start()  # moet lopen om de callback functies te kunnen verbinden
        # self.client.subscribe("Battery")
        self.client.publish("drone/battery",
                            self.drone.get_battery())  # eerste argument is het topic, 2de is de message
        # time.sleep(4) # even wachten zodat je het result van het subscriben kan zien, mag als alles werkt verwijder worden
        self.client.loop_stop()
        # self.client.disconnect()

    def ontvangWaypoint(self):
        self.client.loop_start()
        self.client.subscribe("drone/moveto")
        self.client.loop_stop()

    def connecteer(self):
        self.client.connect("localhost", 1883)

    def disconnecteer(self):
        self.client.disconnect()