import RestApi from "./RestApi";
import HttpMethod from "./common/HttpMethod";
import {AxiosResponse} from "axios";
import UserDto from "../dto/UserDto";

export default class AuthApi extends RestApi {

    public static logout(userId: number): Promise<AxiosResponse> {
        return this.call(
            '/logout?userId='.concat(userId.toString()),
            HttpMethod.GET
        );
    }


}