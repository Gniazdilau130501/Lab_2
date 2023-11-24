import React from "react";
//Новый компонент
class Form extends React.Component{
  render() {
    return (
      /*Создаем текст и кнопку*/
      <form className = "form" onSubmit={this.props.weatherMethod}>
      <input type = "text" name = "city" placeholder = "Город"/>
      <button>Получить погоду</button>
      </form>
    );
  }
}

export default Form;
