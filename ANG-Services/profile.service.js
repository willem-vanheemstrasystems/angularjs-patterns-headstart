export default class Profile {
    constructor(AppConstants, $http) {
        'ngInject';
        // Create references
        this._AppConstants = AppConstants;
        this._$http = $http;
    }

    // Retrieve a user's profile
    get(username) {
        return this._$http({
                url: this._AppConstants.api + '/profiles/' + username,
                method: 'GET'
            }).then((res) => res.data.profile);
    }

    // Follow a user
    follow(username) {
        console.log('services: profile.service - follow(username) called, username = ' + username);
        return this._$http({
                url: this._AppConstants.api + '/profiles/' + username + '/follow',
                method: 'POST'
            }).then((res) => res.data);
    }

    // Unfollow a user
    unfollow(username) {
        console.log('services: profile.service - unfollow(username) called, username = ' + username);
        return this._$http({
                url: this._AppConstants.api + '/profiles/' + username + '/follow',
                method: 'DELETE'
            }).then((res) => res.data);
    }

}
