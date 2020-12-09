import './style.less';
import View from './view'

function init () {
    const view = new View();
    view.init();
    view.addColumnbButton.addEventListener("click", view.createListContainer);
}

init();
