from flask import Flask
from flask import render_template
from flask import jsonify
from garage import Garage

from tornado.wsgi import WSGIContainer
from tornado.httpserver import HTTPServer
from tornado.ioloop import IOLoop
import os

app = Flask(__name__)

garage = Garage()

temperature_feature_flag = os.environ.get('TEMPERATURE_FEATURE_FLAG') is not None

@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/pressGarageDoorButton', methods=['POST'])
def openGarage():
	garage.PressGarageDoorButton()
	return ""

@app.route('/featureFlags', methods=['GET'])
def getFeatureFlags():
	return jsonify(temperature=temperature_feature_flag)

if temperature_feature_flag:
	from Temperature import GarageEnvironment
	garageEnvironment = GarageEnvironment()
	@app.route('/temperatureData', methods=['GET'])
	def getTemperatureData():
		try:
			garageEnvironment.FetchData()
			return jsonify(temperature=garageEnvironment.Temperature, humidity=garageEnvironment.Humidity)
		except Exception as e:
			return str(e)

http_server = HTTPServer(WSGIContainer(app))
http_server.listen(80)  # serving on port 5000
IOLoop.instance().start()
