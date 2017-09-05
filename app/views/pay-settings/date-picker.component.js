"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DatePickerComponent = (function () {
    function DatePickerComponent() {
    }
    DatePickerComponent.prototype.onPickerLoaded = function (args) {
        var datePicker = args.object;
        datePicker.year = 1980;
        datePicker.month = 2;
        datePicker.day = 9;
        datePicker.minDate = new Date(1975, 0, 29);
        datePicker.maxDate = new Date(2045, 4, 12);
    };
    DatePickerComponent.prototype.onDateChanged = function (args) {
        console.log("Date changed");
        console.log("New value: " + args.value);
        console.log("Old value: " + args.oldValue);
    };
    DatePickerComponent.prototype.onDayChanged = function (args) {
        console.log("Day changed");
        console.log("New value: " + args.value);
        console.log("Old value: " + args.oldValue);
    };
    DatePickerComponent.prototype.onMonthChanged = function (args) {
        console.log("Month changed");
        console.log("New value: " + args.value);
        console.log("Old value: " + args.oldValue);
    };
    DatePickerComponent.prototype.onYearChanged = function (args) {
        console.log("Year changed");
        console.log("New value: " + args.value);
        console.log("Old value: " + args.oldValue);
    };
    DatePickerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./date-picker.component.xml"
        })
    ], DatePickerComponent);
    return DatePickerComponent;
}());
exports.DatePickerComponent = DatePickerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0ZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBUXhDO0lBQUE7SUFtQ0EsQ0FBQztJQWpDRyw0Q0FBYyxHQUFkLFVBQWUsSUFBSTtRQUNmLElBQUksVUFBVSxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFekMsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDdkIsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDckIsVUFBVSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDbkIsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsMkNBQWEsR0FBYixVQUFjLElBQUk7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVMLDBDQUFZLEdBQVosVUFBYSxJQUFJO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTCw0Q0FBYyxHQUFkLFVBQWUsSUFBSTtRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUwsMkNBQWEsR0FBYixVQUFjLElBQUk7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQWxDUSxtQkFBbUI7UUFKL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1NBQzdDLENBQUM7T0FDVyxtQkFBbUIsQ0FtQy9CO0lBQUQsMEJBQUM7Q0FBQSxBQW5DRCxJQW1DQztBQW5DWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7RGF0ZVBpY2tlcn0gZnJvbSBcInVpL2RhdGUtcGlja2VyXCI7XG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9kYXRlLXBpY2tlci5jb21wb25lbnQueG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlckNvbXBvbmVudCB7XG5cbiAgICBvblBpY2tlckxvYWRlZChhcmdzKSB7XG4gICAgICAgIGxldCBkYXRlUGlja2VyID0gPERhdGVQaWNrZXI+YXJncy5vYmplY3Q7XG5cbiAgICAgICAgZGF0ZVBpY2tlci55ZWFyID0gMTk4MDtcbiAgICAgICAgZGF0ZVBpY2tlci5tb250aCA9IDI7XG4gICAgICAgIGRhdGVQaWNrZXIuZGF5ID0gOTtcbiAgICAgICAgZGF0ZVBpY2tlci5taW5EYXRlID0gbmV3IERhdGUoMTk3NSwgMCwgMjkpO1xuICAgICAgICBkYXRlUGlja2VyLm1heERhdGUgPSBuZXcgRGF0ZSgyMDQ1LCA0LCAxMik7XG4gICAgfVxuXG4gICAgb25EYXRlQ2hhbmdlZChhcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGF0ZSBjaGFuZ2VkXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyB2YWx1ZTogXCIgKyBhcmdzLnZhbHVlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJPbGQgdmFsdWU6IFwiICsgYXJncy5vbGRWYWx1ZSk7XG4gICAgfVxuXG5vbkRheUNoYW5nZWQoYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRheSBjaGFuZ2VkXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyB2YWx1ZTogXCIgKyBhcmdzLnZhbHVlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJPbGQgdmFsdWU6IFwiICsgYXJncy5vbGRWYWx1ZSk7XG4gICAgfVxuXG5vbk1vbnRoQ2hhbmdlZChhcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTW9udGggY2hhbmdlZFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJOZXcgdmFsdWU6IFwiICsgYXJncy52YWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiT2xkIHZhbHVlOiBcIiArIGFyZ3Mub2xkVmFsdWUpO1xuICAgIH1cblxub25ZZWFyQ2hhbmdlZChhcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiWWVhciBjaGFuZ2VkXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyB2YWx1ZTogXCIgKyBhcmdzLnZhbHVlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJPbGQgdmFsdWU6IFwiICsgYXJncy5vbGRWYWx1ZSk7XG4gICAgfVxufSJdfQ==