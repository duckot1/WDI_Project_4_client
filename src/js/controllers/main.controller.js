angular
.module('jobsApp')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state', 'User'];
function MainCtrl($rootScope, CurrentUserService, $state, User) {
  const vm = this;

  vm.user = CurrentUserService.getUser();

  $rootScope.$on('loggedIn', () => {
    console.log('Inside MainCtrl');
    vm.user = CurrentUserService.currentUser;
    const id = {id: vm.user.id};

    User
    .userReviews(id)
    .$promise
    .then(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });

    console.log(vm.user);

    vm.stars = [];
    vm.blanks = [];
    var ratingCount = vm.user.rating;
    ratingCount = Math.round(ratingCount);

    for (var i = 0; i < ratingCount; i++) {
      vm.stars.push('star');
    }

    for (var j = 0; j < 5 - ratingCount; j++) {
      vm.blanks.push('blank');
    }

    console.log(vm.stars, vm.blanks, 'hellllllo');

  });

  vm.logout = () => {
    CurrentUserService.removeUser();
  };

  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('login');
  });

}
