import ReactComponent from "../react/common/ReactComponent";
import Template from "../react/common/ReactUtil";
import React from "react";


@Template(function (this: MainView) {
    return (
        <div className="Main-view" id={this.getBlockName()}>
            <h1>ASpdkadasd</h1>
        </div>
    )
})
class MainView extends ReactComponent<any, any> {

    protected getClassName(): string {
        return MainView.name;
    }
}

export default MainView;