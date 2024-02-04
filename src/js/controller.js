import * as model from './model';
import  RenderUserView from './view/UserView.js';
import View from './view/View';
import CardsView from './view/CardsView';
import UserView from './view/UserView.js';
import RenderCard from './view/RenderCardView';
import UpdateCard from './view/UpdateCard';
import RenderSavedCards from './view/RenderSavedCards';


// import 'regenerator-runtime/runtime';
// import 'core-js/stable';

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

function saveCard(id){
    const card = model.state.allCards.find(card => card.id === id);
    // Update the array of datas
    model.updateCards(card);

    // Update cards in view
    RenderCard.update(card);

    console.log(model.state.allCards)
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

