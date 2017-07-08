class DefaultView {
	render() {
		$("#open").text("Press")
		$("#open").css({"background-color": "rgb(255, 72, 0)"}).css({"height": "90%"}).css({"font-size": "5em"})
		$("body").css({"background-color": "rgb(0, 72, 0)"})
	}
}

class TemperatureView {
	constructor(dataAggregator) {
		this._dataAggregator = dataAggregator
	}

	render() {
		if(!this._dataAggregator.HasInitialData){
			return
		}

		let temp = this._dataAggregator.GarageData.temperature
 		$("#open").text(`${temp} F`)
		let rgb = new TemperatureToColorMapper().getColor(temp)
		let rgbCss = `rgba(${Math.round(rgb.r)}, ${Math.round(rgb.g)}, ${Math.round(rgb.b)}, 1)`
		$("#open").css({"background-color": rgbCss}).css({"height": "90%"}).css({"font-size": "5em"})

		let localTemp = this._dataAggregator.WeatherData.temperature
		rgb = new TemperatureToColorMapper().getColor(localTemp)
		rgbCss = `rgba(${Math.round(rgb.r)}, ${Math.round(rgb.g)}, ${Math.round(rgb.b)}, 1)`

		$("body").css({"background-color": rgbCss})
	}
}

class HumidityView {
	constructor(dataAggregator) {
		this._dataAggregator = dataAggregator
	}
	render() {
		if(!this._dataAggregator.HasInitialData){
			return
		}

		let humidity = this._dataAggregator.GarageData.humidity
		$("#open").text(`${humidity}%`)

		let rgb = new HumidityToColorMapper().getColor(humidity)
		let rgbCss = `rgba(${Math.round(rgb.r)}, ${Math.round(rgb.g)}, ${Math.round(rgb.b)}, 1)`
		$("#open").css({"background-color": rgbCss}).css({"height": "90%"}).css({"font-size": "5em"})

		let localHumidity = this._dataAggregator.WeatherData.humidity
		rgb = new HumidityToColorMapper().getColor(localHumidity)
		rgbCss = `rgba(${Math.round(rgb.r)}, ${Math.round(rgb.g)}, ${Math.round(rgb.b)}, 1)`

		$("body").css({"background-color": rgbCss})
	}
}
