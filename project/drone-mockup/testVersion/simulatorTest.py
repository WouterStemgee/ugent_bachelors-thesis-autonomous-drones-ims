from droneTest import DroneTest
from clientTest import ClientTest
from myThreadTest import myThreadTest
import threading
import time
import queue

class Simulator:
    def __init__(self,d):
        self.drone = d
        self.queue = queue.Queue(maxsize=100)
        self.client = ClientTest(self.drone,self.queue)

    def get_queue(self):
        return self.queue

    def simuleer(self):
        self.client.connecteer()
        self.client.ontvangWaypoint()  # hier wordt gewoon gesubscribed op iets dat waypoints door te sturen
        while True:
            if self.queue.qsize() >0 and threading.activeCount() == 0 :
                array = self.queue.get()
                thread = myThreadTest(self.drone,array)
                thread.start()
            self.drone.set_battery(self.drone.get_battery()-1)
            self.client.stuurBattery()
            self.client.stuurPosition()
            time.sleep(0.05)

        self.client.disconnecteer() # hier ga je nooit geraken, het programma moet in een oneindige loop lopen

drone = DroneTest()
drone.set_battery(100)
drone.set_xCoord(2)
drone.set_yCoord(22)
drone.set_zCoord(8)
drone.set_speedX(0)
drone.set_speedY(0)
drone.set_speedZ(0)
simulator = Simulator(drone)
simulator.simuleer()