import * as model from './model';
import  RenderUserView from './view/UserView.js';
import View from './view/View';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';
import UserView from './view/UserView.js';


async function setUsetCity(){
    const data = model.state.userData;
    // // Set City Data
    await model.setUserData();

    // // Set User Info into View
    UserView.render(data);
}

function init(){
   RenderUserView.addHandlerRenderUserCity(setUsetCity)
}

init();


