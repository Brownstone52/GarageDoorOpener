import RPi.GPIO as GPIO
import time

class Garage:

	GPIO.setmode(GPIO.BCM)
	GPIO.setup(21, GPIO.OUT)
	GPIO.output(21, GPIO.LOW)
	
	def PressGarageDoorButton(self):
		GPIO.output(21, GPIO.HIGH)
		time.sleep(2)
		GPIO.output(21, GPIO.LOW)
