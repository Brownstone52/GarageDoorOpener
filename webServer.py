from flask import Flask
from flask import render_template
from flask import jsonify
from garage import Garage
from Temperature import GarageEnvironment

from tornado.wsgi import WSGIContainer
from tornado.httpserver import HTTPServer
from tornado.ioloop import IOLoop

app = Flask(__name__)

garage = Garage()
garageEnvironment = GarageEnvironment()

@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/pressGarageDoorButton', methods=['POST'])
def openGarage():
	garage.PressGarageDoorButton()
	return ""

@app.route('/temperatureData', methods=['GET'])
def getTemperatureData():
	garageEnvironment.FetchData()
	return jsonify(temperature=garageEnvironment.Temperature, humidity=garageEnvironment.Humidity)

http_server = HTTPServer(WSGIContainer(app))
http_server.listen(80)  # serving on port 5000
IOLoop.instance().start()
