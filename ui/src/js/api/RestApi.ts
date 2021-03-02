import Axios, {AxiosRequestConfig, AxiosResponse, Method} from "../../../node_modules/axios/index";
import HttpMethod from "./common/HttpMethod";
import Request from "./common/Request";
import UserDto from "../dto/UserDto";

export default class RestApi {
    private static readonly apiUrl = "/api";

    protected static call(methodUrl: string, method: HttpMethod, data?: Request): Promise<any> {
        const targetUrl = window.location.origin.concat(RestApi.apiUrl).concat(methodUrl);
        const config: AxiosRequestConfig = !data ? {
            url: targetUrl,
            method: method.value as Method
        } : {
            url: targetUrl,
            method: method.value as Method,
            data: data.toJson()
        };
        return Axios.request(config);
    }

    public static getAllUsers(): Promise<AxiosResponse<UserDto[]>> {
        return RestApi.call(
            '/users',
            HttpMethod.GET
        );
    }
}