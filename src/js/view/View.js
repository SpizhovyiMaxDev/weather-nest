
export default class View{
    _data;

    render(data, render = true){
       this._data = data;
       
       const markup = this._generateMarkup();

       if(!render)return markup;

       this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    update(data) {
        this._data = data;
        const newMarkup = this._generateMarkup();
    
        const newDOM = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDOM.querySelectorAll('*'));
        const curElements = Array.from(this._parentElement.querySelectorAll('*'));

        curElements.map(curEl => {
            newElements.map(newEl => {
                if (curEl.dataset.id === newEl.dataset.id &&!newEl.isEqualNode(curEl)){
                    if (curEl.tagName.toLowerCase() === 'button' && newEl.tagName.toLowerCase() === 'button') {
                        Array.from(newEl.attributes).forEach(attr => curEl.setAttribute(attr.name, attr.value));
                        curEl.textContent = newEl.textContent;
                    }       
                }
            })
        })
    }
    
    renderError(err = this._errorMessage){
        alert(err);
    }
}
