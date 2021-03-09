import SessionManager from "./component/auth/SessionManager";

export default class AppContext {
    constructor(
        public sessionManager: SessionManager
    ) {
        this.sessionManager = sessionManager;
    }
}