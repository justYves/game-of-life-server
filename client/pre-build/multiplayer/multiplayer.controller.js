app.controller('MultiplayerController', function($rootScope, $scope, $state, users) {
    if ($rootScope.fromState.name === 'game' || $rootScope.fromState.name === 'builder') {
        window.location.reload();
    }
    $scope.users = users;
});