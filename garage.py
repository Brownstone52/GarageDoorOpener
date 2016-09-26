import RPi.GPIO as GPIO
import time

class Garage:

	GPIO.setmode(GPIO.BCM)
	GPIO.setup(7, GPIO.OUT)
	GPIO.output(7, GPIO.HIGH)
	def sayHello(self):
		return "HELLO WORLD"
	
	def PressGarageDoorButton(self):
		GPIO.output(7, GPIO.LOW)
		time.sleep(2)
		GPIO.output(7, GPIO.HIGH)
