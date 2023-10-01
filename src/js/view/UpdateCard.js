import View from "./View";

class UpdateCard extends View{
    _parentElement = document.querySelector('.cards');

    addHandlerUpdateCard(handler){
       this._parentElement.addEventListener('click', function(e){
           const btn = e.target.closest('button');
           if(!btn)return;
           const id = btn.dataset.id;
           handler(id);
       })
    }
}

export default new UpdateCard();