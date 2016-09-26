from flask import Flask
from garage import Garage

app = Flask(__name__)

garage = Garage()

@app.route('/')
def index():
	return garage.sayHello()

@app.route('/pressGarageDoorButton')
def openGarage():
	garage.PressGarageDoorButton()

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=80)
