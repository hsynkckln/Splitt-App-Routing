"use strict";
jQuery.sap.require("BNetSapUI5.Router");
sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/Router",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView",
  ],
  function (UIComponent, JSONModel, Router, XMLView) {
    return UIComponent.extend("BNetSapUI5.Component", {
      metadata: {
        routing: {
          config: {
            routerClass: "BNetSapUI5.Router",
            viewType: "XML",
            viewPath: "BNetSapUI5.Application.Main.views.Prod.view",
            controlId: "mySplitAppId", // SplitApp'in ID'si
            controlAggregation: "detailPages",
            // SplitApp'in aggregation'ı
            async: true,
          },
          routes: [
            {
              pattern: "",
              name: "Master",
              target: ["Master", "Empty"],
            },
            {
              pattern: "master2/{masterId}",
              name: "Master2",
              target: ["Master2", "Empty"],
            },
            {
              pattern: "detail/{detailText}/{detailId}",
              name: "Detail",
              target: "Detail",
            },
          ],
          targets: {
            Master: {
              viewName: "Master",
              viewLevel: 1,
              controlAggregation: "masterPages",
            },
            Master2: {
              viewName: "Master2",
              viewLevel: 1,
              controlAggregation: "masterPages", // İkinci master view burada
            },
            Detail: {
              viewName: "Detail",
              viewLevel: 2,
              controlAggregation: "detailPages",
            },
            Empty: {
              // Boş view tanımı
              viewName: "Empty",
              viewLevel: 2,
              controlAggregation: "detailPages",
            },
          },
        },
      },
      // metadata: {
      //   routing: {
      //     config: {
      //       routerClass: BNetSapUI5.Router,
      //       viewType: "XML",
      //       targetAggregation: "pages",
      //       clearTarget: false,
      //     },
      //     routes: [
      //       // {
      //       //   pattern: "",
      //       //   viewPath: "BNetSapUI5.Application.Main.views.Prod.view",
      //       //   name: "App",
      //       //   view: "App",
      //       //   targetControl: "masterAppView",
      //       // },
      //       // {
      //       //   pattern: "Master",
      //       //   viewPath: "BNetSapUI5.Application.Main.views.Prod.view",
      //       //   name: "Master",
      //       //   view: "Master",
      //       //   targetControl: "Master",
      //       // },
      //       // {
      //       //   pattern: "Detail",
      //       //   viewPath: "BNetSapUI5.Application.Main.views.Prod.view",
      //       //   name: "Detail",
      //       //   view: "Detail",
      //       //   controlAggregation:"detailPages",
      //       //   targetControl: "Detail",
      //       // }
      //     ],
      //   },
      // },
      init: function () {
        sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

        this.getRouter().initialize();

        // var oRouter = this.getRouter();

        // oRouter.addRoute({
        //   pattern: "",
        //   name: "Master",
        //   view: "Master",
        //   viewPath: "BNetSapUI5.Application.Main.views.Prod.view",
        //   targetAggregation: "masterPages",
        //   controlId: "mySplitAppId",
        // });

        // oRouter.addRoute({
        //   pattern: "detail/{detailId}",
        //   name: "Detail",
        //   view: "Detail",
        //   viewPath: "BNetSapUI5.Application.Main.views.Prod.view",
        //   targetAggregation: "detailPages",
        //   controlId: "mySplitAppId",
        // });

        // oRouter.initialize(); // Router'ı başlatma
      },
      createContent: function () {
        var oSplitApp = new sap.m.SplitApp({
          id: "mySplitAppId",
        });

        // Master View ve Detail View'i ayrı olarak oluşturup SplitApp'e ekliyoruz
        var oMasterView = new XMLView({
          id: this.createId("MasterView"),
          viewName: "BNetSapUI5.Application.Main.views.Prod.view.Master",
        });

        var oDetailView = new XMLView({
          id: this.createId("DetailView"),
          viewName: "BNetSapUI5.Application.Main.views.Prod.view.Detail",
        });

        oSplitApp.addMasterPage(oMasterView);
        oSplitApp.addDetailPage(oDetailView);

        return oSplitApp;

        // var oViewData = {
        //   component: this,
        // };
        // return sap.ui.view({
        //   viewName: "BNetSapUI5.RootApp",
        //   type: sap.ui.core.mvc.ViewType.XML,
        //   id: "app",
        //   viewData: oViewData,
        // });
      },
    });
  }
);
