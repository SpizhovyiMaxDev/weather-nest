import * as model from './model';
import  RenderUserView from './view/UserView.js';
import View from './view/View';
import CardsView from './view/CardsView';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';
import UserView from './view/UserView.js';
import RenderCardView from './view/RenderCardView';
import UpdateCard from './view/UpdateCard';
import RenderSavedCards from './view/RenderSavedCards';


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
        RenderCardView.render(model.state.currentCard);

    } catch(err){
        RenderCardView.renderError();
    }
}

function saveCard(id){
    const card = model.state.allCards.find(card => card.id === id);
    // Update the array of datas
    model.updateCards(card);

    // Update cards in view
    RenderCardView.update(card);
}

function renderSavedCards(){
   RenderSavedCards.render(model.state.allCards)
}

function init(){
   RenderUserView.addHandlerRenderUserCity(setUsetCity);
   CardsView.addHandlerRenderCards(setNewCards);
   UpdateCard.addHandlerUpdateCard(saveCard);
   RenderSavedCards.addHandlerRenderSavedCards(renderSavedCards)
}

init();

