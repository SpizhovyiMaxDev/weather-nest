import View from "./View";
import { weatherEmoji, weatherImages } from "../config";
// import * as myImage from '../../img/url_to_broken_clouds_night_image.jpg'


class RenderUserView extends View{
    _parentElement = document.querySelector('.cards');
    _errorMessage = 'Something wrong with user card geolocation, \n or something happend with our server. \n please visit our website later or check \n if you allowed the browser to get your \n geolocation coordinates'

    _generateMarkup(){
        const data = this._data.data;

        return `
        <figure class = "card"> 
            <div class = "card-img-box">
            <img class="card-img" src="${weatherImages[data.weather[0].icon]}" />
            <p class="card-icon">
              ${weatherEmoji[data.weather[0].icon]}
            </p>
            </div>
            <div class = "card-text-box">
                <div class = "card-main-box">
                    <p class="card-city">
                      ${data.name}
                    </p>
                    <div class = "city-date">
                        05/1/2023
                    </div>
                </div>
                <ul class = "data-list"> 
                <li> - 🌡️ Temperature ${Math.floor(data.main.temp)} </li>
                <li> - ⚖️ Pressure ${data.main.pressure} </li>
                <li> - 💧 Humidity ${data.main.humidity} </li>
                <li> - 💨 Wind speed ${data.wind.speed} m/s </li>
                </ul>
            </div>
        </figure>
        `

    }

    addHandlerRenderUserCity(handler){
        window.addEventListener('load', handler);
    }
}

export default new RenderUserView();