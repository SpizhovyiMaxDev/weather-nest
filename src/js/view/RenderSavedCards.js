import RenderCardView from "./RenderCardView";
import View from "./View";


 class RenderSavedCards extends View{
    _parentElement = document.querySelector('.cards');

    _generateMarkup(){
        return this._data.map(card => RenderCardView.render(card), false).join('')
    }

    addHandlerRenderSavedCards(handler){
        window.addEventListener('load', handler)
    }
 }

 export default new RenderSavedCards();