import "./style.less";
<<<<<<< HEAD
import View from "./view";
import Controller from "./Controller";
import Model from "./Model";

function init() {
  const view = new View();
  // const controller = new Controller();
  // const model = new Model();

  // controller.init();
  // model.init();
  view.init();
  view.addColumnbButton.addEventListener("click", view.createListContainer);
}

init();
=======
import Controller from "./Controller";

function start() {
      //const view = new View();
      //const model = new Model();
      const controller = new Controller();
      console.log(controller);
  }
  
start();
 
>>>>>>> mvc
