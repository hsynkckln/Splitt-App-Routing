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

    var oModel, products, oViewData, filters, obj, obj2, oRouter, textId;

    return Controller.extend(
      "BNetSapUI5.Application.Main.views.Prod.controller.Master2",
      {
        onInit: function () {
          oModel = new sap.ui.model.json.JSONModel();
          this.getView().setModel(oModel);

          oRouter = sap.ui.core.UIComponent.getRouterFor(this);

          oRouter
            .getRoute("Master2")
            .attachPatternMatched(this._onObjectMatched, this);

          this.data2 = {
            arrays: [],
          };

          products = [
            {
              id: 0,
              text: "EBAN",
              tanim: "Purchase Requisition",
            },
            {
              id: 1,
              text: "EKBE",
              tanim: "History per Purchasing Document",
            },
            {
              id: 2,
              text: "EKKO",
              tanim: "Purchasing Document Header",
            },
            {
              id: 3,
              text: "EKPO",
              tanim: "Purchasing Document Item",
            },
            {
              id: 4,
              text: "MAKT",
              tanim: "Material Descriptions",
            },
            {
              id: 5,
              text: "MARA",
              tanim: "General Material Data",
            },
            {
              id: 6,
              text: "MARC",
              tanim: "Plant Data for Material",
            },
            {
              id: 7,
              text: "MARD",
              tanim: "Storage Location Data for Material",
            },
            {
              id: 8,
              text: "T001W",
              tanim: "Plants/Branches",
            },
          ];
          oModel.setProperty("/Lists2",products);
        },
        _onObjectMatched: function (oEvent) {
          // Master sayfamdan gelen Id gelen parametreyi alın (detailId)
          textId = oEvent.getParameter("arguments").masterId;
          
          var oBinding = this.byId("orders2").getBinding("items");
          var oFilter = new sap.ui.model.Filter("id", sap.ui.model.FilterOperator.NE, textId);
          oBinding.filter([oFilter]);
        },
        back: function () {
          oRouter.navTo("Master");
        },
        handleLoadItems2: function (oEvent) {
          obj=oEvent.getSource().getBindingContext().getObject();
          
          oRouter.navTo("Detail", {
            detailId: obj.id,
            detailText:textId
          });
        },
      }
    );
  }
);
