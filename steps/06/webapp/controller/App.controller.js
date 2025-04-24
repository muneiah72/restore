sap.ui.define(["sap/m/MessageToast", "sap/ui/core/mvc/Controller"], function (MessageToast, Controller) {
  "use strict";

  const AppController = Controller.extend("ui5.walkthrough.controller.App", {
    onShowHello: function _onShowHello() {
      MessageToast.show("Hello World");
    }
  });
  ;
  return AppController;
});
