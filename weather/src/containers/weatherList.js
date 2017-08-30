import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'


class WeatherList extends Component {
  renderWeather(cityData) {
    const cityName = cityData.city.name;
    const temps = cityData.list.map(weather => Math.floor(weather.main.temp * (9/5)- 459.67));
    //Use whenever a Celsius values are required
    // const tempsC = Math.floor(currentTempK - 273.15);

    const humidity = cityData.list.map(weather => weather.main.humidity);
    const pressure = cityData.list.map(weather => weather.main.pressure);


    return (
      <tr key={cityName}>
        <td>
          {cityName}
        </td>
        
        <td>
          <Chart color="orange" data={temps} height={85} unit="F˚" />
        </td>
        
        <td>
          <Chart color="blue" data={humidity} height={130} unit = "%"/>
        </td>

        <td>
          <Chart color="green" data={pressure} height={110} unit = "hPa"/>
        </td>

      </tr>
    )
  }
  
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
            {this.props.weather.map(this.renderWeather)}
        </tbody>
        </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList);