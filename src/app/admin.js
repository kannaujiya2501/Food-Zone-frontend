`var app = angular.module('logapp',['toastr']);`
app.factory('authentication', function() {
 return {
 isAuthenticated: false,
 user: null
}
});

app.controller('credientials', function($scope,toastr,authentication) {
$scope.loginform = function (username, password) {
if ($scope.username === 'admin@evol.com' && $scope.password === '123') {
 authentication.isAuthenticated = true;
 $location.path("/home");
} else {
toastr.error('Invalid username and password');
}
};
});
angularjs