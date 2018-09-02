(function() {
    angular.module('UserRegistration').controller('RegistrationCtrl', RegistrationCtrl);

    RegistrationCtrl.$inject = ['$scope'];

    function RegistrationCtrl($scope) {
        $scope.header = 'Register Here';
        $scope.successAlert = false;
        $scope.user = {
            education: {},
            employment: {}
        };
        $scope.instituteOptions = [{
            value: 'St. Josheph\'s High School'
        }, {
            value: 'Modern English School'
        }, {
            value: 'Sinhagad group of Schools'
        }, {
            value: 'Ryan International School'
        }];

        $scope.cities = [{ //can be fetched from an api
            value: 'Mumbai'
        }, {
            value: 'Pune'
        }, {
            value: 'Nagpur'
        }, {
            value: 'Sangli'
        }];

        $scope.submitted = false;

        $scope.register = function(isValid) {
            $scope.submitted = true;
            if (isValid) {
                $scope.successAlert = true;
               console.log($scope.user);
            }
        }
    }
})();