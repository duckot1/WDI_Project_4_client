angular
.module('jobsApp')
.controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', '$stateParams', '$state', 'CurrentUserService', 'Review'];

function UsersShowCtrl(User, $stateParams, $state, CurrentUserService, Review) {
  const vm = this;

  User
  .get($stateParams)
  .$promise
  .then(data => {
    console.log(data);
    vm.user = data;
  }, err => {
    console.log(err);
  });


  User
    .userReviews($stateParams)
    .$promise
    .then(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });


  vm.delete = function() {
    User.delete($stateParams).$promise.then(() => {
      $state.go('login');
      CurrentUserService.removeUser();
    });

  };

}
