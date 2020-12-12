import "./style.less";
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
