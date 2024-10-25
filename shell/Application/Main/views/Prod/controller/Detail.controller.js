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

    var oModel, sDetailId, sDetailId2, sDetailText,value,value2, oRouter;

    return Controller.extend(
      "BNetSapUI5.Application.Main.views.Prod.controller.Detail",
      {
        onInit: function () {
          oModel = new sap.ui.model.json.JSONModel();
          this.getView().setModel(oModel);

          oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter
            .getRoute("Detail")
            .attachPatternMatched(this._onObjectMatched, this);

          this.data2 = {
            basket: [],
            check: [],
            check2: [],
          };

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

          var alanAdiData = [
            {
              id: 8,
              
              alan: [{ alanAd: "WERKS" }, { alanAd: "FABKL" }],
            },
            {
              id: 7,
              
              alan: [{ alanAd: "MATNR" }, { alanAd: "WERKS" }],
            },
            {
              id: 6,
              
              alan: [
                {
                  alanAd: "MATNR",
                },
                {
                  alanAd: "WERKS",
                },
              ],
            },
            {
              id: 5,
              
              alan: [
                {
                  alanAd: "MATNR",
                },
              ],
            },
            {
              id: 4,
              
              alan: [
                {
                  alanAd: "MATNR",
                },
                {
                  alanAd: "SPRAS",
                },
                {
                  alanAd: "MAKTX",
                },
                {
                  alanAd: "MAKTG",
                },
              ],
            },
            {
              id: 3,
              
              alan: [
                {
                  alanAd: "EBELN",
                },
                {
                  alanAd: "EBELP",
                },
              ],
            },
            {
              id: 2,
              
              alan: [
                {
                  alanAd: "EBELN",
                },
              ],
            },
            {
              id: 1,
              
              alan: [
                {
                  alanAd: "EBELN",
                },
                {
                  alanAd: "EBELP",
                },
                {
                  alanAd: "BELNR",
                },
              ],
            },
            {
              id: 0,
              
              alan: [
                {
                  alanAd: "BANFN",
                },
                {
                  alanAd: "BNFPO",
                },
              ],
            },
          ];
          oModel.setProperty("/alanAdi", alanAdiData);
        },
        _onObjectMatched: function (oEvent) {
          var oViewData = this.getView().getModel().getData();
          // Rotadan gelen parametreyi alın (detailId)
          sDetailId2 = oEvent.getParameter("arguments").detailId;

          //ilk rotadan gelen id
          sDetailId = oEvent.getParameter("arguments").detailText;

          for (let i = 0; i < oViewData.Lists.length; i++) {
            if (oViewData.Lists[i].id == sDetailId) {
              oModel.setProperty("/obj", oViewData.Lists[i].text);
            }
            if (oViewData.Lists[i].id == sDetailId2) {
              oModel.setProperty("/obj2", oViewData.Lists[i].text);
            }
          }

          for (let x = 0; x < oViewData.alanAdi.length; x++) {
            for(let y = 0; y < oViewData.alanAdi[x].alan.length; y++){
              if (oViewData.alanAdi[x].id == sDetailId) {
                this.data2.check.push(oViewData.alanAdi[x].alan[y]);
              }
              if (oViewData.alanAdi[x].id == sDetailId2) {
                this.data2.check2.push(oViewData.alanAdi[x].alan[y]);
              }
            }
          }
          oModel.setProperty("/Check",this.data2.check);
          this.data2.check = [];
          oModel.setProperty("/Check2",this.data2.check2);
          this.data2.check2 = [];

        },
        comboLoad1:function(oEvent){
          value=oEvent.getParameter("value")
        },
        comboLoad2:function(oEvent){
          value2=oEvent.getParameter("value")
        },
        push:function(){
          var product={
            iliski:oModel.getProperty("/obj"),
            alanIliski:value,
            iliski2:oModel.getProperty("/obj2"),
            alanIliski2:value2
          }
          this.data2.basket.push(product)
          oModel.setProperty("/basket",this.data2.basket)
        },
        basketOpen: function (oEvent) {
          var oButton = oEvent.getSource(),
            oView = this.getView();

          // create popover
          if (!this._pPopover) {
            this._pPopover = Fragment.load({
              id: oView.getId(),
              name: "BNetSapUI5.Application.Main.views.Prod.fragment.Popover",
              controller: this,
            }).then(function (oPopover) {
              oView.addDependent(oPopover);
              return oPopover;
            });
          }
          this._pPopover.then(function (oPopover) {
            oPopover.openBy(oButton);
          });
        },
      }
    );
  }
);
