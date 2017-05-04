class TemperatureToColorMapper {
	constructor() {
		this._maxTemp = 100
		this._minTemp = 40
	}
	
	getColor(temperature) {
		let red  = (temperature-this._minTemp)/(this._maxTemp-this._minTemp) * 255
		return {'r': red, 'g': 0, 'b': 255 - red}
	}
}
