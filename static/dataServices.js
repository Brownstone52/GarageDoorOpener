class WeatherApi {
	constructor() {
		this._url = 'http://api.openweathermap.org/data/2.5/weather'
		this._applicationId = '1963a6b41a6c18337d5160732408f58a'
		this._latitude = '43.792687'
		this._longitude = '-70.430532'
	}

	fetchData() {
		return new Promise((resolve)=>{
			$.getJSON(`${this._url}?lat=${this._latitude}&lon=${this._longitude}&appid=${this._applicationId}`, (data)=>{
				resolve({
						'humidity' : data.main.humidity.toFixed(2),
						'temperature' : Temperature.fromKelvin(data.main.temp).Farenheit.toFixed(2)
					})
			})
		})
	}
}

class GarageEnvironmentApi {
	constructor() {
		this._url = 'temperatureData'
	}

	fetchData() {
		return new Promise((resolve)=>{
			$.getJSON("temperatureData", (data)=> {
				resolve({
						'humidity' : data.humidity.toFixed(2),
						'temperature' : new Temperature(data.temperature).Farenheit.toFixed(2)
					})
			})
		})
	}
}

class DataAggregator {
	constructor() {
		this._weatherApi = new WeatherApi()
		this._garageEnvironmentApi = new GarageEnvironmentApi()
		this._weatherData
		this._garageData
	}

	startCollecting() {
		this._fetchData(this._weatherApi, this._garageEnvironmentApi)
		setInterval(this._fetchData, 5000, this._weatherApi, this._garageEnvironmentApi)
	}

	_fetchData(weatherApi, garageEnvironmentApi) {
		weatherApi.fetchData().then((data)=>{
			this._weatherData = data
		})

		garageEnvironmentApi.fetchData().then((data)=>{
			this._garageData = data
		})
	}

	get HasInitialData() { return this._weatherData != null && this._garageData != null }

	get WeatherData() { return this._weatherData }

	get GarageData() { return this._garageData }
}
