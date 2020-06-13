export default class ServerManager {

    constructor(ServiceProvider) {
        this._userManager = ServiceProvider.userManager;
        this._config = {
            apiKey: 'AIzaSyA1L8KeCHaInvpTtBE0P8OrbXY6CxhuWGo',
            authDomain: 'vk-note-adapter.firebaseapp.com',
            databaseURL: 'https://vk-note-adapter.firebaseio.com',
            authApiUrl: 'https://identitytoolkit.googleapis.com/v1/accounts',
            projectId: 'vk-note-adapter',
            storageBucket: 'vk-note-adapter.appspot.com',
            messagingSenderId: '793517160443',
            appId: '1:793517160443:web:4b58ab9250eecf81f03d5e',
        };
    }

    signIn(email, password) {
        const request = fetch(this._getAuthUrl('signInWithPassword'), {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return request
            .then((res) => res.status === 200 ? res.json() : res.status)
            .then((res) => {
                if (typeof res === 'number') {
                    switch (res) {
                        case 400:
                            alert('Wrong username or password');
                            break;
                    }
                } else {
                    this._userManager.setUserData(res);
                }

                return !(typeof res === 'number');
            });
    }

    signUp(email, password) {
        const request = fetch(this._getAuthUrl('signUp'), {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return request
            .then((res) => res.json())
            .then((res) => this._userManager.setUserData(res));
    }

    signOut() {
        this._userManager.clearUserData();
    }

    fetchHistory() {
        const request = fetch(this._getDatabaseUrl('messages'));

        return request.then((res) => res.json());
    }

    _getAuthUrl(endpoint) {
        return `${ this._config.authApiUrl }:${ endpoint }?key=${ this._config.apiKey }`;
    }

    _getDatabaseUrl(endpoint) {
        return `${ this._config.databaseURL }/${ endpoint }.json?auth=${ this._userManager.idToken }`;
    }
}