import observable = require("data/observable");
import frameModule = require("ui/frame");
import pages = require("ui/page");
import appSettings = require("application-settings");

var viewModel: observable.Observable;

export function pageLoaded (args: observable.EventData){
    let page : pages.Page = <pages.Page> args.object;
    viewModel = new observable.Observable();
    viewModel.set("currency", appSettings.getString("currency", ""));
    viewModel.set("income", appSettings.getNumber("income", 0));
    
    page.bindingContext = viewModel;
}

export function settings(){
    var topmost = frameModule.topmost();
    topmost.navigate("views/settings/settings")
}