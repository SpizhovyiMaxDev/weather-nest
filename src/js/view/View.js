
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

        // Imperative ways --> we tell computer how to do it.

        // for (let i = 0; i < newElements.length; i++) {
        //     const newEl = newElements[i];
            
        //     for (let j = 0; j < curElements.length; j++) {
        //         const curEl = curElements[j];
                
        //         if (curEl.dataset.id === newEl.dataset.id &&!newEl.isEqualNode(curEl) ) {
        //             // if(!newEl.isEqualNode(curEl)){
                    // if (curEl.tagName.toLowerCase() === 'button' && newEl.tagName.toLowerCase() === 'button') {
                    //     Array.from(newEl.attributes).forEach(attr => curEl.setAttribute(attr.name, attr.value));
                    // }       
        //         } 
        //     }
        // }

        // Decalrative way --> computer do it instead of us

        curElements.map(curEl => {
            newElements.map(newEl => {
                if (curEl.dataset.id === newEl.dataset.id &&!newEl.isEqualNode(curEl)){
                    if (curEl.tagName.toLowerCase() === 'button' && newEl.tagName.toLowerCase() === 'button') {
                        Array.from(newEl.attributes).forEach(attr => curEl.setAttribute(attr.name, attr.value));
                    }       
                }
            })
        })
    }
    

    renderError(err = this._errorMessage){
        alert(err);
    }
}