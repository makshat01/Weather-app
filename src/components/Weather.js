import React from "react";
import Spinner from "./Spinner";

const Weather = props =>(
         <div className="weather__info">
              {
                props.city && props.country && <p className="weather__key">Location:
               <span className="weather__value"> {props.city}, {props.country}</span>
                </p>
              }
         {/*      {
                props.latitude && props.longitude && <p className="weather__key">Latitude->Longitude: 
                <span className="weather__value"> {props.latitude}->{props.longitude}</span>              
                </p>
              } */}
              {
                props.pressure && <p className="weather__key">Pressure:
              <span className="weather__value"> {props.pressure} knots</span>
               </p>


              }
             {
               props.temperature && <p className="weather__key">Temperature:
              <span className="weather__value"> {props.temperature}</span>
               </p>
              }
              {
                 props.humidity && <p className="weather__key">Humidity:
                 <span className="weather__value"> {props.humidity}</span> 
                  </p>
              }
              {
                 props.windSpeed && <p className="weather__key">WindSpeed:
                 <span className="weather__value"> {props.windSpeed}</span>
                 </p>
              }
              {
                props.description && <p className="weather__key">Description:
                  <span className="weather__value"> {props.description}</span>
                </p>
              }
               {
                 props.error && <p className="weather__error">
                 {props.error}
                 </p>
               }
            </div>
);

export default Weather; 