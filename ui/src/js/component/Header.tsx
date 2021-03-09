import ReactComponent from "../react/common/ReactComponent";
import Template from "../react/common/ReactUtil";
import React from "react";
import SessionManager from "./auth/SessionManager";


@Template(function (this: Header) {
    return (
        <div className="Header" id={this.getBlockName()}>
            <div className="Header__logo"/>
            {true
                ? (
                    <div className="Header__auth">
                        <i className="Header__auth-icon fas fa-user-circle"/>
                        <div className="Header__login">Login</div>
                        |
                        <div className="Header__register">Register</div>
                    </div>
                )
                : (
                    <div className="Header__auth">
                        <i className="Header__auth-icon fas fa-user-circle"/>
                        <div className="Header__logout"/>
                    </div>
                )
            }
        </div>
    )
})
class Header extends ReactComponent<any, any> {

    constructor(props) {
        super(props);

    }

    private isAuthorized(): boolean {
        console.log(this.context);
        return this.context.sessionManager.isAuthorized;
    }

    protected getClassName(): string {
        return Header.name;
    }
}


export default Header;