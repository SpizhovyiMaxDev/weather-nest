import View from "./View";
import { weatherEmoji, weatherImages } from "../config";


class RenderUserView extends View{
    _parentElement = document.querySelector('.cards');
    _errorMessage = 'Something wrong with user card geolocation, \n or something happend with our server. \n please visit our website later or check \n if you allowed the browser to get your \n geolocation coordinates'

    _generateMarkup(){
        const data = this._data.data;

        return `
        <figure class = "card"> 
            <div class = "card__img-box">
            <img class="card__img" src="${weatherImages[data.weather[0].icon]}" />
            <p class="card__icon">
              ${weatherEmoji[data.weather[0].icon]}
            </p>
            </div>
            <div class = "card__text-box">
                <div class = "card__main-box">
                    <p class="card__city">
                      ${data.name}
                    </p>
                    <div class = "date">
                        ${data.date}
                    </div>
                </div>
                <ul class = "card__list"> 
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
