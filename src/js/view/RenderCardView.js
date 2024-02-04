import View from "./View";
import { weatherEmoji, weatherImages } from "../config";

class RenderCard extends View{
 _parentElement = document.querySelector('.cards')
 _errorMessage = 'The city with that name doesn\'t exist'

 _generateMarkup(){
   const data = this._data;
   const saved = data.saved;
  
   return  `
   <figure class = "card"> 
   <div class = "card__img-box">
      <img class="card__img" src = "${weatherImages[data.weather[0].icon]}">
      <p class="card__icon">
          🌅
      </p>
   </div>
   <div class = "card-text-box">
      <div class = "card-main-box">
          <p class="card__city">
             ${data.name}
          </p>
          <div class = "date">
              ${data.date}
          </div>
      </div>

       <ul class = "data__list"> 
          <li>  - 🌡️ Temperature <span>${Math.floor(data.main.temp)} </li>
          <li> - ⚖️ Pressure <span>${data.main.pressure} </li>
          <li>  - 💧 Humidity <span>${data.main.humidity} </li>
          <li>  - 💨 Wind speed <span>${data.wind.speed} m/s </li>
       </ul>
       <button data-id = ${data.id} class = "${saved ? 'btn--lightblue' : 'btn--light'}">
           ${saved ? 'Saved': 'Save'}
       </button>
   </div>
</figure> 
   `
 }
}

export default new RenderCard();
