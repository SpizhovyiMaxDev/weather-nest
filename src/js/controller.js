import * as model from './model';
import  RenderUserView from './view/UserView.js';
import View from './view/View';
import CardsView from './view/CardsView';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';
import UserView from './view/UserView.js';
import RenderCard from './view/RenderCardView'


async function setUsetCity(){
    try{
    const data = model.state.userData;
    // Set User City Data
    await model.setUserData();

    // Set User Info into View
    UserView.render(data);
    } catch(err){
        UserView.renderError();
    }
}

async function setNewCards(city){
    try{      
        //Set Search City Data
        await model.setCardData(city);
       
        //Set new card weather to the view
        RenderCard.render(model.state.currentCard);

    } catch(err){
        RenderCard.renderError();
    }
}

function init(){
   RenderUserView.addHandlerRenderUserCity(setUsetCity);
   CardsView.addHandlerRenderCards(setNewCards)
}

init();


