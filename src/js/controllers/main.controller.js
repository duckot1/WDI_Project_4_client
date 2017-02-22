angular
.module('jobsApp')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state'];
function MainCtrl($rootScope, CurrentUserService, $state) {
  const vm = this;

  vm.user = CurrentUserService.getUser();

  $rootScope.$on('loggedIn', () => {
    console.log('Inside MainCtrl');
    vm.user = CurrentUserService.currentUser;
  });

  vm.logout = () => {
    CurrentUserService.removeUser();
  };

  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('login');
  });

}
