from flask import Flask
from flask import render_template
from garage import Garage

app = Flask(__name__)

garage = Garage()

@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/pressGarageDoorButton', methods=['POST'])
def openGarage():
	garage.PressGarageDoorButton()
	return ""

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=80)
