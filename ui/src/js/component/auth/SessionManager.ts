import RestApi from "../../api/RestApi";
import AuthApi from "../../api/AuthApi";
import UserDto from "../../dto/UserDto";
import HttpStatus from "../../api/common/HttpStatus";
import Notify from "../../util/Notify";

export default class SessionManager {
    private user: UserDto;
    private isAuthorized: boolean;


    constructor(isAuthorized: boolean) {
        this.isAuthorized = isAuthorized;
    }

    public logout(): void {
        AuthApi.logout(44)
            .then(it => this.isAuthorized = !this.isAuthorized)
            .catch(it => Notify.error('SUCCESS'))
    }
}