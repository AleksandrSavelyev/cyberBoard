import "./style.less";
import Controller from "./Controller";
import View from "./view";
import Model from "./Model";

function start() {
      //const view = new View();
      //const model = new Model();
      const view = new View();
      const model = new Model();
      const controller = new Controller(view, model);
  }
  
start();
 