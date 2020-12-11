import "./style.less";
import View from "./view/View";
import Model from "./model/Model";
import Controller from "./controller/Controller";

function init() {
  const model = new Model();
  const view = new View();
  const controller = new Controller(model, view);
}

init();