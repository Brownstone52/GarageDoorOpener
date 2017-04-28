from flask import Flask
from flask import render_template
from flask import jsonify
from garage import Garage
from Temperature import GarageEnvironment

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

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=80)
