import { Observable, fromObject, fromObjectRecursive, PropertyChangeData, EventData, WrappedValue } from "tns-core-modules/data/observable";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";

import observablModule = require("data/observable");
import observableArrayModule = require("data/observable-array");
import ObservableArray = observableArrayModule.ObservableArray;
import pages = require("ui/page");
import appSettings = require("application-settings");

//import {Component} from "@angular/core";
//import {DatePicker} from "ui/date-picker";


let page: pages.Page;

var frameModule = require("ui/frame");
var viewModel: observablModule.Observable;

enum PayFrequencyEnum{
    MONTHLY,
    WEEKLY
}

interface PaySettingsVM {
    income: number;
    payFrequency : string;
}

var userPaySettings: PaySettingsVM = {
    income: appSettings.getNumber("income", 0),
    payFrequency : appSettings.getString("payFrequency", PayFrequencyEnum[PayFrequencyEnum.MONTHLY])
}

let paySettingsVM : Observable = observablModule.fromObject(userPaySettings);
let payFrequencyOptions : ObservableArray<string> = new ObservableArray<string>();

export function pageLoaded(args: observablModule.EventData) {
    page = <pages.Page>args.object;
    
    for (var item in payFrequencyOptions) {
        payFrequencyOptions.pop();
    }
    
    payFrequencyOptions.push(PayFrequencyEnum[PayFrequencyEnum.MONTHLY]);

    payFrequencyOptions.push(PayFrequencyEnum[PayFrequencyEnum.WEEKLY]);
    
    paySettingsVM.set("payFrequencyOptions", payFrequencyOptions);
    paySettingsVM.set("payFrequencyIndex", appSettings.getNumber("payFrequencyIndex", 0));
    
    page.bindingContext = paySettingsVM;
}

//Saves the incomes on change. Does not handle dropdowns.
paySettingsVM.addEventListener(Observable.propertyChangeEvent, function(pcd: PropertyChangeData) {
    console.log(pcd.eventName.toString() + " " + pcd.propertyName.toString() + " " + pcd.value.toString());
    if (pcd.propertyName.toString() == "income" && pcd.value !== undefined && pcd.value !== "") {
        appSettings.setNumber("income", parseFloat(pcd.value));
    }
    
});

function printDate(){
    console.log("Date box has been closed");
}

export function showDate(){
    var moduleName = "./date-picker,component"
    page.showModal(moduleName, "Rando context", printDate, false);
}

// Updates the view models for payfrequency.
export function payFrequencyChange(args: SelectedIndexChangedEventData) {
    let newPayFrequency : string = payFrequencyOptions.getItem(args.newIndex).toString();
    paySettingsVM.set("payFrequency", newPayFrequency);
    // TODO: Make a class that saves an object to the app settings. Saves the bother of having to if statement when a value changes. Can use reflection for this.
    appSettings.setString("payFrequncy", newPayFrequency);
    appSettings.setNumber("payFrequencyIndex",args.newIndex);
}

export function paySettings() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/settings/pay-settings")    
}

/*
@Component({
    moduleId: module.id,
    templateUrl: "./date-picker.component.xml"
})
export class DatePickerComponent {

    onPickerLoaded(args) {
        let datePicker = <DatePicker>args.object;

        datePicker.year = 1980;
        datePicker.month = 2;
        datePicker.day = 9;
        datePicker.minDate = new Date(1975, 0, 29);
        datePicker.maxDate = new Date(2045, 4, 12);
    }

    onDateChanged(args) {
        console.log("Date changed");
        console.log("New value: " + args.value);
        console.log("Old value: " + args.oldValue);
    }

    onDayChanged(args) {
        console.log("Day changed");
        console.log("New value: " + args.value);
        console.log("Old value: " + args.oldValue);
    }

    onMonthChanged(args) {
        console.log("Month changed");
        console.log("New value: " + args.value);
        console.log("Old value: " + args.oldValue);
    }

    onYearChanged(args) {
        console.log("Year changed");
        console.log("New value: " + args.value);
        console.log("Old value: " + args.oldValue);
    }
}*/