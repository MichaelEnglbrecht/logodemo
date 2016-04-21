sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.tenpoint.sample.controller.Main", {
			onInit : function() {
			var oI18NModel = this.getOwnerComponent().getModel("i18n");
				document.title = oI18NModel.getProperty("appTitle");
			}
	});

});