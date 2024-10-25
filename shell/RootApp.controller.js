sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/f/Avatar",
  "sap/ui/unified/Menu",
], function(Controller, Avatar, Menu) {
  "use strict";
  var base;
  return Controller.extend("BNetSapUI5.RootApp", {
    onInit: function() {
      base = this;
      // base.getView().byId("appSearch-button").attachBrowserEvent("click", function() {
      //   base.onShowGlobalAppSearchDialog();
      // });
      base.getView().setModel(oModel);
    },
    // onShowGlobalAppSearchDialog: function(oEvent) {
    //   if (!base.notificationDialog) {
    //     base.notificationDialog = sap.ui.xmlfragment(
    //       "BNetSapUI5.Application.Main.fragments.GlobalAppSearch",
    //       this
    //     );
    //   }
    //   base.notificationDialog.open();
    // },
    // onTriggerNotifyDialogEvent: function() {
    //   base.notificationDialog.close();
    //   base.notificationDialog.destroy();
    //   base.notificationDialog = undefined;
    // },
    // onShowSettingsDialog: function(oEvent) {
    //   if (!base.settingsDialog) {
    //     base.settingsDialog = sap.ui.xmlfragment(
    //       "BNetSapUI5.Application.Main.fragments.Settings",
    //       this
    //     );
    //   }
    //   base.settingsDialog.open();
    // },
    // onTriggerSettingsDialogEvent: function(oEvent) {
    //   const currentButtonKey = oEvent.getSource().data("key");
    //   if (currentButtonKey === "cancelButton") {
    //     base.settingsDialog.close();
    //     base.settingsDialog = undefined;
    //   } else {
    //   }
    // },
    // onShowSideBarView:function(oEvent) {
    //   let leftSideViewId = base.getView().byId("leftSideView");
    //   if(leftSideViewId.getVisible() === true)
    //       leftSideViewId.setVisible(false);
    //   else
    //       leftSideViewId.setVisible(true);
    // },
    // deleteNotificationItem:function(oEvent){
    //   const notifyItem = oEvent.getSource();
    //   const currentNotifyItem = oEvent.getSource().getBindingContext().getPath();
    //   var currentUserData = oModel.getProperty(currentNotifyItem);
    //   alert("User Mail: "+currentUserData.email+"\n\n"+"User Photo: "+currentUserData.photo+"\n\n"+"Message Body: "+currentUserData.body);
    // },
    // openUserProfilePopover:function(oEvent){
    //   var oButton = oEvent.getSource();
    //   if(!base.popupMenu){
    //     base.popupMenu = new Menu({
    //       items:[
    //         new sap.ui.unified.MenuItem({
    //           text:"Dashboard'a Dön"
    //         }),
    //         new sap.ui.unified.MenuItem({
    //           text:"Ayarlar",
    //           select:function(){
    //             base.onShowSettingsDialog();
    //           }
    //         }),
    //         new sap.ui.unified.MenuItem({
    //           text:"Oturumu Kapat"
    //         }),
    //         new sap.ui.unified.MenuItem({
    //           text:"Çıkış Yap"
    //         })
    //       ]
    //     })
    //     base.getView().addDependent(base.popupMenu);
    //   }
    //   var eDock = sap.ui.core.Popup.Dock;
    //   base.popupMenu.open(false, oButton, eDock.BeginTop, eDock.BeginBottom, oButton);
    // }
  });
});
