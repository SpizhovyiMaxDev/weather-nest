import View from "./View";

class CardsView extends View{
    _parentElement = document.querySelector('.navigation-search');

    addHandlerRenderCards(handler){
        this._parentElement.addEventListener('submit', this._getCityName.bind(this, handler));
    }

    _getCityName(handler, e){
        e.preventDefault();
        let city = e.target.querySelector('.navigation-search_input').value;
        handler(city);
        this._clearInput(e);
    }

    _clearInput(e){
        e.target.querySelector('.navigation-search_input').value = '';
    }
}

export default new CardsView();