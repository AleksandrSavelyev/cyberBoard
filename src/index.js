import "./style.less";
import View from "./view";
import Model from "./Model";
import Controller from "./Controller";

function init() {
      const view = new View();
      const model = new Model();
      const controller = new Controller(view, model);
  }
  
init();
 