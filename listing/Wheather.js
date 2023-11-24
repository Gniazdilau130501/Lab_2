import React from "react";
//Новый компонент
class Wheather extends React.Component{
  render() {
    return (
      /*Вывод информации*/

      <div className = 'weather'>
      { this.props.city &&
        <div className = "infoWeath">
        <p>Местоположение: {this.props.city}, {this.props.country}</p>
        <p>Температура: {this.props.temp} C°</p>
        <p>Скорость ветра: {this.props.speed} м/сек</p>
        <p>Влажность воздуха: {this.props.humidity} %</p>
        <p>Давление: {this.props.pressure} Па</p>
        <p>Восход солнца: {this.props.sunrise}</p>
        <p>Заход солнца: {this.props.sunset}</p>
        </div>
      }
      <p className="error">{this.props.error}</p>
      </div>

    );
  }
}

export default Wheather;
