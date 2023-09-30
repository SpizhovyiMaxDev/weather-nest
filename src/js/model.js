import AJAX from "./helper"
import { USER_POSITION_LINK, WEATHER_API_LINK } from "./config"


export const state = {
    userData:{
        city:'',
        coords:[],
        data:{}
    },
}

function getUserCoords(){
     return new Promise((res, rej) => {
        if(navigator.geolocation)
             navigator.geolocation.getCurrentPosition(res, rej);
     })    
}


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
     const data = await AJAX(`${USER_POSITION_LINK}reverse?lat=${lat}&lon=${lng}&format=json`);
     state.userData.city = data.address.city;
     const city = data.address.city;
     const weatherInfo = await AJAX(WEATHER_API_LINK.replace('${city}', city));
     state.userData.data = weatherInfo
    } catch(err){
        throw err;
    }
}



