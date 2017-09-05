import observable = require("data/observable");
import observableArray = require("data/observable-array");
import pages = require("ui/page");
import { SelectedIndexChangedEventData } from "nativescript-drop-down";

import appSettings = require("application-settings");
var frameModule = require("ui/frame");
var viewModel: observable.Observable;


var currencyIndexName= "currencyIndex";
var items = new observableArray.ObservableArray();

export function pageLoaded(args: observable.EventData) {
    let page : pages.Page = <pages.Page> args.object;
    var currencyIndex = 0;
    viewModel = new observable.Observable();
    
    for (var item in items) {
        items.pop();
    }
    items.push("£");
    items.push("$");
    
    viewModel.set("availableCurrencies", items);
    viewModel.set(currencyIndexName,  appSettings.getNumber(currencyIndexName, 0));

    page.bindingContext = viewModel;
}

export function currencyChange(args: SelectedIndexChangedEventData) {
    appSettings.setString("currency", items.getItem(args.newIndex).toString());
    appSettings.setNumber(currencyIndexName, args.newIndex);
}

exports.paySettings= function (){
    var topmost = frameModule.topmost();
    topmost.navigate("views/pay-settings/pay-settings")    
}

exports.monthlyBills = function (){
    var topmost = frameModule.topmost();
    topmost.navigate("views/monthly-bills-settings/monthly-bills-settings")    
}

exports.tagSettings = function (){
    var topmost = frameModule.topmost();
    topmost.navigate("views/tag-settings/tag-settings")    
}

exports.datePicker= function (){
    var topmost = frameModule.topmost();
    topmost.navigate("views/pay-settings/date-picker.component")    
}