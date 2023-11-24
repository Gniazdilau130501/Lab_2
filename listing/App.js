import React from "react";
import Info from "./components/info"; //импорт компонента текста
import Form from "./components/form"; //компонент с формой
import Wheather from "./components/Wheather"; //компонент с информацией

const API_KEY = "efb99e2eebcfda230b7c66d7cbdb9826"; //ключ
//создание компонента
class App extends React.Component{

//состояние
state = {
  temp: undefined,
  city: undefined,
  country: undefined,
  speed: undefined,
  humidity: undefined,
  pressure: undefined,
  sunrise: undefined,
  sunset: undefined,
  error: undefined
}
//Ассинхронный метод получения информации о погоде
  gettingWeather = async (event) => {
    event.preventDefault(); //отключаем перезагрузку странички
    var city = event.target.elements.city.value;

  /*Проверка на запись какого-либо текста в поле*/
    if(city){
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`); /*получение данных*/
      const data = await api_url.json();
      console.log(data);
/*Вывод захода и восхода солнца в нормальном формате*/
var sunrise = new Date(data.sys.sunrise*1000);
var sunset = new Date(data.sys.sunset*1000);

var sunrise_date = sunrise.toLocaleTimeString();
var sunset_date = sunset.toLocaleTimeString();

  this.setState({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      speed: data.wind.speed,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      sunrise: sunrise_date,
      sunset: sunset_date,
      error: undefined
    });
  } else {
    this.setState({
      temp: undefined,
      city: undefined,
      country: undefined,
      speed: undefined,
      humidity: undefined,
      pressure: undefined,
      sunrise: undefined,
      sunset: undefined,
      error: "Некорректный ввод. Введите название города!"
    });

  }
}
  //HTML РАЗМЕТКА
  render(){
    return(
      <div className = "wrapper">
      <div className = "main">
<div className = "container">
<div className = "row">
<div className = "col-sm-5 info">
<Info />
</div>
<div className = "col-sm-7 form">
<Form weatherMethod={this.gettingWeather}/>
<Wheather
temp={this.state.temp}
city ={this.state.city}
country={this.state.country}
speed={this.state.speed}
humidity ={this.state.humidity}
pressure ={this.state.pressure}
sunrise ={this.state.sunrise}
sunset={this.state.sunset}
error ={this.state.error}
 />
 </div>
</div>
</div>
</div>
</div>
    );
  }
}

export default App; //экспорт компонентов
