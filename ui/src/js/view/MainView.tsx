import ReactComponent from "../react/common/ReactComponent";
import Template from "../react/common/ReactUtil";
import React from "react";
import RestApi from "../api/RestApi";
import UserDto from "../dto/UserDto";


@Template(function (this: MainView) {
    return (
        <div className="Main-view" id={this.getBlockName()}>
            <h1>{this.getUsers().toString()}</h1>
        </div>
    )
})
class MainView extends ReactComponent<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    protected getClassName(): string {
        return MainView.name;
    }

    private getUsers(): UserDto[] {
        RestApi.getAllUsers()
            .then(it => this.setState({users: it}))
        return this.state.users;
    }
}

export default MainView;