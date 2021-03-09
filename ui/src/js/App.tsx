import React from "react";
import Template from "./react/common/ReactUtil";
import ReactComponent from "./react/common/ReactComponent";
import MainView from "./view/MainView";
import Header from "./component/Header";
import AppContext from "./AppContext";
import { ReactContext} from "./react/ReactContext";
import SessionManager from "./component/auth/SessionManager";

@Template(function (this: App) {
    return (
        <div id={this.getBlockName()}>
            <ReactContext.Provider value={this.appContext}>
                <Header/>
                <MainView/>
            </ReactContext.Provider>
        </div>
    )
})
class App extends ReactComponent<any, any> {
    private appContext: AppContext;

    constructor(props: any) {
        super(props);
        this.appContext = new AppContext(
            new SessionManager()
        )
    }

    protected getClassName(): string {
        return App.name;
    }
}

export default App;