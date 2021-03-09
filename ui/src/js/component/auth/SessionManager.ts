import RestApi from "../../api/RestApi";
import AuthApi from "../../api/AuthApi";
import UserDto from "../../dto/UserDto";
import HttpStatus from "../../api/common/HttpStatus";
import Notify from "../../util/Notify";

class SessionManager {
    private user: UserDto;
    public isAuthorized: boolean;


    constructor() {
        this.isAuthorized = false;
        this.user = new class implements UserDto {
            id: number = 1;
            name: string = "admin";
            role: string = "admin";
        }
    }

    public logout(): void {
        AuthApi.logout(44)
            .then(it => this.isAuthorized = !this.isAuthorized)
            .catch(it => Notify.error('SUCCESS'))
    }
}

export default SessionManager;