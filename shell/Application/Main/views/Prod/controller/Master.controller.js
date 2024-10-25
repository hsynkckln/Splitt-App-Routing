sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/core/Fragment",
    "sap/m/MessageToast",
    "sap/m/Button",
  ],
  function (Controller, Filter, Fragment, MessageToast) {
    "use strict";

    var oModel, product, value1, value2, obj, obj2, oRouter;

    return Controller.extend(
      "BNetSapUI5.Application.Main.views.Prod.controller.Master",
      {
        onInit: function () {
          oModel = new sap.ui.model.json.JSONModel();
          this.getView().setModel(oModel);

          oRouter=sap.ui.core.UIComponent.getRouterFor(this);

          
          this.data = [
            {
              id:0,
              text: "EBAN",
              tanim: "Purchase Requisition",
            },
            {
              id:1,
              text: "EKBE",
              tanim: "History per Purchasing Document",
            },
            {
              id:2,
              text: "EKKO",
              tanim: "Purchasing Document Header",
            },
            {
              id:3,
              text: "EKPO",
              tanim: "Purchasing Document Item",
            },
            {
              id:4,
              text: "MAKT",
              tanim: "Material Descriptions",
            },
            {
              id:5,
              text: "MARA",
              tanim: "General Material Data",
            },
            {
              id:6,
              text: "MARC",
              tanim: "Plant Data for Material",
            },
            {
              id:7,
              text: "MARD",
              tanim: "Storage Location Data for Material",
            },
            {
              id:8,
              text: "T001W",
              tanim: "Plants/Branches",
            },
          ];
          oModel.setProperty("/Lists", this.data);

          
          
        },
        handleLoadItems: function (oEvent) {
          // obj= oEvent.getSource().getSelectedItem().getBindingContext().getProperty("text");
          // this.getOwnerComponent().getModel("tempModel").setProperty("/detailText",obj );

          obj=oEvent.getSource().getBindingContext().getObject()
          
        
          oRouter.navTo("Master2", {
            masterId: obj.id,
          });

        },
      }
    );
  }
);
