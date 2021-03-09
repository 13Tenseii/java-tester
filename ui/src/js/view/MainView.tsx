import ReactComponent from "../react/common/ReactComponent";
import Template from "../react/common/ReactUtil";
import React from "react";
import Header from "../component/Header";
import AuthApi from "../api/AuthApi";
import SessionManager from "../component/auth/SessionManager";


@Template(function (this: MainView) {
    return (
        <div className="Main-view" id={this.getBlockName()}>
        </div>
    )
})
class MainView extends ReactComponent<any, State> {

    constructor(props) {
        super(props);
    }

    protected getClassName(): string {
        return MainView.name;
    }
}

interface State {
    isAuthorized: boolean
}

export default MainView;