import { AJAX, generateRandomId } from "./helper"
import { USER_POSITION_LINK, WEATHER_API_LINK } from "./config"


export const state = {
    userData:{
        city:'',
        coords:[],
        data:{}
    },
    currentCard:{},
    allCards:[],
    savedCards:[],
}

function getUserCoords(){
     return new Promise((res, rej) => {
        if(navigator.geolocation)
             navigator.geolocation.getCurrentPosition(res, rej);
     })    
}

/* User functions */
export async function setUserData(){
    try{
    const data = await getUserCoords();
    const {latitude:lat, longitude:lng} = data.coords;
    state.userData.coords = [lat, lng];
    await setUserWeatherInfo(lat, lng);
    } catch(err){
        throw err;
    }
}

export async function setUserWeatherInfo(lat, lng){
    try{
     const city = await getCityName(lat, lng)
     const weatherInfo = await getCityWeather(city);
     state.userData.city = city;
     state.userData.data = weatherInfo;
     state.userData.data.date = new Date().toDateString();
    } catch(err){
        throw err;
    }
}

/* Cards functions */
export async function setCardData(city){
    try{
        const weatherInfo = await getCityWeather(city);
        weatherInfo.id = generateRandomId();
        weatherInfo.saved = false;
        weatherInfo.date = new Date().toDateString();
        state.currentCard = weatherInfo;
        state.allCards.push(weatherInfo);
    } catch(err){
        throw new Error();
    }
}

export function updateCards(card){
    if(!card.saved){
        card.saved = true;
        state.savedCards.push(card);
        persistData();
    }
    else{
        card.saved = false;
        const index = state.savedCards.findIndex(c => c.id === card.id);
        state.savedCards.splice(index, 1);
        persistData();
    }
}

/* Reausable Functions */
async function getCityName(lat, lng){
    try{
        const dataAboutCity = await AJAX(`${USER_POSITION_LINK}reverse?lat=${lat}&lon=${lng}&format=json`);
        return dataAboutCity.address.city;
    } catch(err){
        throw err
    }
}

async function getCityWeather(city){
    try{
        const weatherInfo = await AJAX(WEATHER_API_LINK.replace('${city}', city));
        return weatherInfo;
    } catch (err){
        throw err;
    }
} 

function persistData(){
    localStorage.setItem('weatherInfo', JSON.stringify(state.savedCards));
}

function init(){
    const data = JSON.parse(localStorage.getItem('weatherInfo'));
    if(!data)return;
    state.savedCards.push(...data);
    state.allCards.push(...data);
}

init()
