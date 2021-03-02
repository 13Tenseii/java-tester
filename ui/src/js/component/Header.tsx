import ReactComponent from "../react/common/ReactComponent";
import Template from "../react/common/ReactUtil";
import React from "react";


@Template(function (this: Header) {
    return (
        <div className="Header" id={this.getBlockName()}>
        </div>
    )
})
class Header extends ReactComponent<any, any> {

    constructor(props) {
        super(props);
    }

    protected getClassName(): string {
        return Header.name;
    }
}

interface Props {

}

export default Header;