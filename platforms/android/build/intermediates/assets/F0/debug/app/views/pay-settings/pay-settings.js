"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var observablModule = require("data/observable");
var observableArrayModule = require("data/observable-array");
var ObservableArray = observableArrayModule.ObservableArray;
var appSettings = require("application-settings");
//import {Component} from "@angular/core";
//import {DatePicker} from "ui/date-picker";
var page;
var frameModule = require("ui/frame");
var viewModel;
var PayFrequencyEnum;
(function (PayFrequencyEnum) {
    PayFrequencyEnum[PayFrequencyEnum["MONTHLY"] = 0] = "MONTHLY";
    PayFrequencyEnum[PayFrequencyEnum["WEEKLY"] = 1] = "WEEKLY";
})(PayFrequencyEnum || (PayFrequencyEnum = {}));
var userPaySettings = {
    income: appSettings.getNumber("income", 0),
    payFrequency: appSettings.getString("payFrequency", PayFrequencyEnum[PayFrequencyEnum.MONTHLY])
};
var paySettingsVM = observablModule.fromObject(userPaySettings);
var payFrequencyOptions = new ObservableArray();
function pageLoaded(args) {
    page = args.object;
    for (var item in payFrequencyOptions) {
        payFrequencyOptions.pop();
    }
    payFrequencyOptions.push(PayFrequencyEnum[PayFrequencyEnum.MONTHLY]);
    payFrequencyOptions.push(PayFrequencyEnum[PayFrequencyEnum.WEEKLY]);
    paySettingsVM.set("payFrequencyOptions", payFrequencyOptions);
    paySettingsVM.set("payFrequencyIndex", appSettings.getNumber("payFrequencyIndex", 0));
    page.bindingContext = paySettingsVM;
}
exports.pageLoaded = pageLoaded;
//Saves the incomes on change. Does not handle dropdowns.
paySettingsVM.addEventListener(observable_1.Observable.propertyChangeEvent, function (pcd) {
    console.log(pcd.eventName.toString() + " " + pcd.propertyName.toString() + " " + pcd.value.toString());
    if (pcd.propertyName.toString() == "income" && pcd.value !== undefined && pcd.value !== "") {
        appSettings.setNumber("income", parseFloat(pcd.value));
    }
});
function printDate() {
    console.log("Date box has been closed");
}
function showDate() {
    var moduleName = "./date-picker,component";
    page.showModal(moduleName, "Rando context", printDate, false);
}
exports.showDate = showDate;
// Updates the view models for payfrequency.
function payFrequencyChange(args) {
    var newPayFrequency = payFrequencyOptions.getItem(args.newIndex).toString();
    paySettingsVM.set("payFrequency", newPayFrequency);
    // TODO: Make a class that saves an object to the app settings. Saves the bother of having to if statement when a value changes. Can use reflection for this.
    appSettings.setString("payFrequncy", newPayFrequency);
    appSettings.setNumber("payFrequencyIndex", args.newIndex);
}
exports.payFrequencyChange = payFrequencyChange;
function paySettings() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/settings/pay-settings");
}
exports.paySettings = paySettings;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5LXNldHRpbmdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGF5LXNldHRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQTRJO0FBRzVJLGlEQUFvRDtBQUNwRCw2REFBZ0U7QUFDaEUsSUFBTyxlQUFlLEdBQUcscUJBQXFCLENBQUMsZUFBZSxDQUFDO0FBRS9ELGtEQUFxRDtBQUVyRCwwQ0FBMEM7QUFDMUMsNENBQTRDO0FBRzVDLElBQUksSUFBZ0IsQ0FBQztBQUVyQixJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDdEMsSUFBSSxTQUFxQyxDQUFDO0FBRTFDLElBQUssZ0JBR0o7QUFIRCxXQUFLLGdCQUFnQjtJQUNqQiw2REFBTyxDQUFBO0lBQ1AsMkRBQU0sQ0FBQTtBQUNWLENBQUMsRUFISSxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBR3BCO0FBT0QsSUFBSSxlQUFlLEdBQWtCO0lBQ2pDLE1BQU0sRUFBRSxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDMUMsWUFBWSxFQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0NBQ25HLENBQUE7QUFFRCxJQUFJLGFBQWEsR0FBZ0IsZUFBZSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM3RSxJQUFJLG1CQUFtQixHQUE2QixJQUFJLGVBQWUsRUFBVSxDQUFDO0FBRWxGLG9CQUEyQixJQUErQjtJQUN0RCxJQUFJLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUUvQixHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7UUFDbkMsbUJBQW1CLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELG1CQUFtQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBRXJFLG1CQUFtQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBRXBFLGFBQWEsQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUM5RCxhQUFhLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLFdBQVcsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV0RixJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztBQUN4QyxDQUFDO0FBZkQsZ0NBZUM7QUFFRCx5REFBeUQ7QUFDekQsYUFBYSxDQUFDLGdCQUFnQixDQUFDLHVCQUFVLENBQUMsbUJBQW1CLEVBQUUsVUFBUyxHQUF1QjtJQUMzRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN2RyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLFFBQVEsSUFBSSxHQUFHLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxHQUFHLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekYsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7QUFFTCxDQUFDLENBQUMsQ0FBQztBQUVIO0lBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQzVDLENBQUM7QUFFRDtJQUNJLElBQUksVUFBVSxHQUFHLHlCQUF5QixDQUFBO0lBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDbEUsQ0FBQztBQUhELDRCQUdDO0FBRUQsNENBQTRDO0FBQzVDLDRCQUFtQyxJQUFtQztJQUNsRSxJQUFJLGVBQWUsR0FBWSxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JGLGFBQWEsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ25ELDZKQUE2SjtJQUM3SixXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUN0RCxXQUFXLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM3RCxDQUFDO0FBTkQsZ0RBTUM7QUFFRDtJQUNJLElBQUksT0FBTyxHQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNwQyxPQUFPLENBQUMsUUFBUSxDQUFDLDZCQUE2QixDQUFDLENBQUE7QUFDbkQsQ0FBQztBQUhELGtDQUdDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Q0ciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBmcm9tT2JqZWN0LCBmcm9tT2JqZWN0UmVjdXJzaXZlLCBQcm9wZXJ0eUNoYW5nZURhdGEsIEV2ZW50RGF0YSwgV3JhcHBlZFZhbHVlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XG5cbmltcG9ydCBvYnNlcnZhYmxNb2R1bGUgPSByZXF1aXJlKFwiZGF0YS9vYnNlcnZhYmxlXCIpO1xuaW1wb3J0IG9ic2VydmFibGVBcnJheU1vZHVsZSA9IHJlcXVpcmUoXCJkYXRhL29ic2VydmFibGUtYXJyYXlcIik7XG5pbXBvcnQgT2JzZXJ2YWJsZUFycmF5ID0gb2JzZXJ2YWJsZUFycmF5TW9kdWxlLk9ic2VydmFibGVBcnJheTtcbmltcG9ydCBwYWdlcyA9IHJlcXVpcmUoXCJ1aS9wYWdlXCIpO1xuaW1wb3J0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcImFwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuXG4vL2ltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuLy9pbXBvcnQge0RhdGVQaWNrZXJ9IGZyb20gXCJ1aS9kYXRlLXBpY2tlclwiO1xuXG5cbmxldCBwYWdlOiBwYWdlcy5QYWdlO1xuXG52YXIgZnJhbWVNb2R1bGUgPSByZXF1aXJlKFwidWkvZnJhbWVcIik7XG52YXIgdmlld01vZGVsOiBvYnNlcnZhYmxNb2R1bGUuT2JzZXJ2YWJsZTtcblxuZW51bSBQYXlGcmVxdWVuY3lFbnVte1xuICAgIE1PTlRITFksXG4gICAgV0VFS0xZXG59XG5cbmludGVyZmFjZSBQYXlTZXR0aW5nc1ZNIHtcbiAgICBpbmNvbWU6IG51bWJlcjtcbiAgICBwYXlGcmVxdWVuY3kgOiBzdHJpbmc7XG59XG5cbnZhciB1c2VyUGF5U2V0dGluZ3M6IFBheVNldHRpbmdzVk0gPSB7XG4gICAgaW5jb21lOiBhcHBTZXR0aW5ncy5nZXROdW1iZXIoXCJpbmNvbWVcIiwgMCksXG4gICAgcGF5RnJlcXVlbmN5IDogYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwicGF5RnJlcXVlbmN5XCIsIFBheUZyZXF1ZW5jeUVudW1bUGF5RnJlcXVlbmN5RW51bS5NT05USExZXSlcbn1cblxubGV0IHBheVNldHRpbmdzVk0gOiBPYnNlcnZhYmxlID0gb2JzZXJ2YWJsTW9kdWxlLmZyb21PYmplY3QodXNlclBheVNldHRpbmdzKTtcbmxldCBwYXlGcmVxdWVuY3lPcHRpb25zIDogT2JzZXJ2YWJsZUFycmF5PHN0cmluZz4gPSBuZXcgT2JzZXJ2YWJsZUFycmF5PHN0cmluZz4oKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2VMb2FkZWQoYXJnczogb2JzZXJ2YWJsTW9kdWxlLkV2ZW50RGF0YSkge1xuICAgIHBhZ2UgPSA8cGFnZXMuUGFnZT5hcmdzLm9iamVjdDtcbiAgICBcbiAgICBmb3IgKHZhciBpdGVtIGluIHBheUZyZXF1ZW5jeU9wdGlvbnMpIHtcbiAgICAgICAgcGF5RnJlcXVlbmN5T3B0aW9ucy5wb3AoKTtcbiAgICB9XG4gICAgXG4gICAgcGF5RnJlcXVlbmN5T3B0aW9ucy5wdXNoKFBheUZyZXF1ZW5jeUVudW1bUGF5RnJlcXVlbmN5RW51bS5NT05USExZXSk7XG5cbiAgICBwYXlGcmVxdWVuY3lPcHRpb25zLnB1c2goUGF5RnJlcXVlbmN5RW51bVtQYXlGcmVxdWVuY3lFbnVtLldFRUtMWV0pO1xuICAgIFxuICAgIHBheVNldHRpbmdzVk0uc2V0KFwicGF5RnJlcXVlbmN5T3B0aW9uc1wiLCBwYXlGcmVxdWVuY3lPcHRpb25zKTtcbiAgICBwYXlTZXR0aW5nc1ZNLnNldChcInBheUZyZXF1ZW5jeUluZGV4XCIsIGFwcFNldHRpbmdzLmdldE51bWJlcihcInBheUZyZXF1ZW5jeUluZGV4XCIsIDApKTtcbiAgICBcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gcGF5U2V0dGluZ3NWTTtcbn1cblxuLy9TYXZlcyB0aGUgaW5jb21lcyBvbiBjaGFuZ2UuIERvZXMgbm90IGhhbmRsZSBkcm9wZG93bnMuXG5wYXlTZXR0aW5nc1ZNLmFkZEV2ZW50TGlzdGVuZXIoT2JzZXJ2YWJsZS5wcm9wZXJ0eUNoYW5nZUV2ZW50LCBmdW5jdGlvbihwY2Q6IFByb3BlcnR5Q2hhbmdlRGF0YSkge1xuICAgIGNvbnNvbGUubG9nKHBjZC5ldmVudE5hbWUudG9TdHJpbmcoKSArIFwiIFwiICsgcGNkLnByb3BlcnR5TmFtZS50b1N0cmluZygpICsgXCIgXCIgKyBwY2QudmFsdWUudG9TdHJpbmcoKSk7XG4gICAgaWYgKHBjZC5wcm9wZXJ0eU5hbWUudG9TdHJpbmcoKSA9PSBcImluY29tZVwiICYmIHBjZC52YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHBjZC52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgICBhcHBTZXR0aW5ncy5zZXROdW1iZXIoXCJpbmNvbWVcIiwgcGFyc2VGbG9hdChwY2QudmFsdWUpKTtcbiAgICB9XG4gICAgXG59KTtcblxuZnVuY3Rpb24gcHJpbnREYXRlKCl7XG4gICAgY29uc29sZS5sb2coXCJEYXRlIGJveCBoYXMgYmVlbiBjbG9zZWRcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93RGF0ZSgpe1xuICAgIHZhciBtb2R1bGVOYW1lID0gXCIuL2RhdGUtcGlja2VyLGNvbXBvbmVudFwiXG4gICAgcGFnZS5zaG93TW9kYWwobW9kdWxlTmFtZSwgXCJSYW5kbyBjb250ZXh0XCIsIHByaW50RGF0ZSwgZmFsc2UpO1xufVxuXG4vLyBVcGRhdGVzIHRoZSB2aWV3IG1vZGVscyBmb3IgcGF5ZnJlcXVlbmN5LlxuZXhwb3J0IGZ1bmN0aW9uIHBheUZyZXF1ZW5jeUNoYW5nZShhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xuICAgIGxldCBuZXdQYXlGcmVxdWVuY3kgOiBzdHJpbmcgPSBwYXlGcmVxdWVuY3lPcHRpb25zLmdldEl0ZW0oYXJncy5uZXdJbmRleCkudG9TdHJpbmcoKTtcbiAgICBwYXlTZXR0aW5nc1ZNLnNldChcInBheUZyZXF1ZW5jeVwiLCBuZXdQYXlGcmVxdWVuY3kpO1xuICAgIC8vIFRPRE86IE1ha2UgYSBjbGFzcyB0aGF0IHNhdmVzIGFuIG9iamVjdCB0byB0aGUgYXBwIHNldHRpbmdzLiBTYXZlcyB0aGUgYm90aGVyIG9mIGhhdmluZyB0byBpZiBzdGF0ZW1lbnQgd2hlbiBhIHZhbHVlIGNoYW5nZXMuIENhbiB1c2UgcmVmbGVjdGlvbiBmb3IgdGhpcy5cbiAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJwYXlGcmVxdW5jeVwiLCBuZXdQYXlGcmVxdWVuY3kpO1xuICAgIGFwcFNldHRpbmdzLnNldE51bWJlcihcInBheUZyZXF1ZW5jeUluZGV4XCIsYXJncy5uZXdJbmRleCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXlTZXR0aW5ncygpIHtcbiAgICB2YXIgdG9wbW9zdCA9IGZyYW1lTW9kdWxlLnRvcG1vc3QoKTtcbiAgICB0b3Btb3N0Lm5hdmlnYXRlKFwidmlld3Mvc2V0dGluZ3MvcGF5LXNldHRpbmdzXCIpICAgIFxufVxuXG4vKlxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2RhdGUtcGlja2VyLmNvbXBvbmVudC54bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyQ29tcG9uZW50IHtcblxuICAgIG9uUGlja2VyTG9hZGVkKGFyZ3MpIHtcbiAgICAgICAgbGV0IGRhdGVQaWNrZXIgPSA8RGF0ZVBpY2tlcj5hcmdzLm9iamVjdDtcblxuICAgICAgICBkYXRlUGlja2VyLnllYXIgPSAxOTgwO1xuICAgICAgICBkYXRlUGlja2VyLm1vbnRoID0gMjtcbiAgICAgICAgZGF0ZVBpY2tlci5kYXkgPSA5O1xuICAgICAgICBkYXRlUGlja2VyLm1pbkRhdGUgPSBuZXcgRGF0ZSgxOTc1LCAwLCAyOSk7XG4gICAgICAgIGRhdGVQaWNrZXIubWF4RGF0ZSA9IG5ldyBEYXRlKDIwNDUsIDQsIDEyKTtcbiAgICB9XG5cbiAgICBvbkRhdGVDaGFuZ2VkKGFyZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEYXRlIGNoYW5nZWRcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTmV3IHZhbHVlOiBcIiArIGFyZ3MudmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk9sZCB2YWx1ZTogXCIgKyBhcmdzLm9sZFZhbHVlKTtcbiAgICB9XG5cbiAgICBvbkRheUNoYW5nZWQoYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRheSBjaGFuZ2VkXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyB2YWx1ZTogXCIgKyBhcmdzLnZhbHVlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJPbGQgdmFsdWU6IFwiICsgYXJncy5vbGRWYWx1ZSk7XG4gICAgfVxuXG4gICAgb25Nb250aENoYW5nZWQoYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1vbnRoIGNoYW5nZWRcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTmV3IHZhbHVlOiBcIiArIGFyZ3MudmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk9sZCB2YWx1ZTogXCIgKyBhcmdzLm9sZFZhbHVlKTtcbiAgICB9XG5cbiAgICBvblllYXJDaGFuZ2VkKGFyZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJZZWFyIGNoYW5nZWRcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTmV3IHZhbHVlOiBcIiArIGFyZ3MudmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk9sZCB2YWx1ZTogXCIgKyBhcmdzLm9sZFZhbHVlKTtcbiAgICB9XG59Ki8iXX0=