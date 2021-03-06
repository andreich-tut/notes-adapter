export default class UserManager {

    constructor(ServiceManager) {
        this._serviceManager = ServiceManager;
        this._userCookieName = 'userData';
        this._userData = null;

        this.syncUserData();
    }

    get isAuthenticated() {
        return this.idToken !== null;
    }

    get email() {
        return this._userData ? this._userData.email : null;
    }

    get idToken() {
        return this._userData ? this._userData.idToken : null;
    }

    getUserData() {
        const data = this._serviceManager.toolManager.getCookie(this._userCookieName);

        return data ? JSON.parse(data) : null;
    }

    setUserData({ email, idToken, expiresIn }) {
        this._serviceManager.toolManager.setCookie(
            this._userCookieName,
            JSON.stringify({ idToken, email }),
            { 'max-age': expiresIn }
        )

        this.syncUserData();
    }

    clearUserData() {
        this._userData = null;
        this._serviceManager.toolManager.deleteCookie(this._userCookieName);
    }

    syncUserData() {
        this._userData = this.getUserData();
    }
}