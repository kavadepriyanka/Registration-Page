(function () {

    angular.module('UserRegistration', ['ngRoute']).config(configFn);

    configFn.$inject = ['$routeProvider'];

    function configFn($routeProvider) {
        $routeProvider.when('/register', {
            templateUrl: '../app/partials/register.html',
            controller: 'RegistrationCtrl'
        })
        .when('/home', {
            templateUrl: '../app/partials/home.html'
        })
        .otherwise({redirectTo: '/home'});
    }
})();