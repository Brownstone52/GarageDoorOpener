class TemperatureView {
	render() {
		$.getJSON("temperatureData", (data)=> {
			let temp = new Temperature(data.temperature).Farenheit.toFixed(2)
 			$("#open").text(temp)

			let rgb = new TemperatureToColorMapper().getColor(temp)
			let rgbCss = `rgba(${Math.round(rgb.r)}, ${Math.round(rgb.g)}, ${Math.round(rgb.b)}, 0.7)`
			$("#open").css({"background-color": rgbCss}).css({"height": "100%"}).css({"font-size": "5em"})
		})

		$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=43.792687&lon=-70.430532&appid=1963a6b41a6c18337d5160732408f58a", (data)=>{
			let temp = Temperature.fromKelvin(data.main.temp).Farenheit.toFixed(2)
			let rgb = new TemperatureToColorMapper().getColor(temp)
			let rgbCss = `rgba(${Math.round(rgb.r)}, ${Math.round(rgb.g)}, ${Math.round(rgb.b)}, 0.7)`

			$("body").css({"background-color": rgbCss})
		})
	}
}
