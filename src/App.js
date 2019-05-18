import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY="74310f94e6ba03a76600aecaaaf00346";

class App extends React.Component{
   state={
      temperature : undefined,
      city : undefined,
      country : undefined,
      humidity :undefined,
      windSpeed : undefined,
      //latitude:undefined,
      //longitude:undefined,
      pressure:undefined,
      description:undefined,
      error : undefined,
    };
  getWeather= async(e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country =  e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if(city && country){
    console.log(data);
    this.setState({
      temperature:data.main.temp,
      city:data.name,
      country:data.sys.country,
      humidity:data.main.humidity,
      windSpeed:data.wind.speed,
      //latitude:data.coord.lat,
      //longitude:data.coord.lon,
      pressure:data.main.pressure,
      description:data.weather[0].description,
      error:""
    });
  }
  else{
    this.setState({
      error:"Please enter the values."
    });
  }
}
  render(){
    return(
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                 <div className="col-xs-4 title-container">
                   <Titles/>
                 </div> 
                 <div className="col-xs-7 form-container">
                    <Form getWeather={this.getWeather}/>
                    <Weather temperature={this.state.temperature}
                     city={this.state.city}
                     country={this.state.country}
                     humidity={this.state.humidity}
                     windSpeed={this.state.windSpeed}
                     latitude={this.state.latitude}
                     longitude={this.state.longitude}
                     description={this.state.description}
                     pressure={this.state.pressure}
                     error={this.state.error}
                     />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;