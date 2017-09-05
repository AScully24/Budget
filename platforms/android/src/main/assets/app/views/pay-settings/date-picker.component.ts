import {Component} from "@angular/core";
import {DatePicker} from "ui/date-picker";
import { EventData } from "data/observable";

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
}