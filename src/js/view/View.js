
export default class View{
    _data;

    render(data){
       this._data = data;
       
       const markup = this._generateMarkup();
       this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

}