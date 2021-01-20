import React from "react";
import Template from "./react/common/ReactUtil";
import ReactComponent from "./react/common/ReactComponent";
import MainView from "./view/MainView";

@Template(function (this: App) {
    return (
        <div id={this.getBlockName()}>
            <MainView/>
        </div>
    )
})
class App extends ReactComponent<any, any> {
    constructor(props: any) {
        super(props);
    }

    protected getClassName(): string {
        return App.name;
    }
}

export default App;