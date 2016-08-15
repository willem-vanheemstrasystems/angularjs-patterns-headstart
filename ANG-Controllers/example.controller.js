class ExampleCtrl {
    constructor(AppConstants, $scope) {
        'ngInject';

        this.appName = AppConstants.appName;
        this._$scope = $scope;

        // Set current list to all.
        this.listConfig = {
            type: 'all'
        };
    }
    changeList(newList) {
        this._$scope.$broadcast('setListTo', newList);
    }
}

export default ExampleCtrl;
