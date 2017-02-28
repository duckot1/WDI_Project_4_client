angular
.module('jobsApp')
.controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', '$stateParams', '$state', 'CurrentUserService', 'Review'];

function UsersShowCtrl(User, $stateParams, $state, CurrentUserService, Review) {
  const vm = this;

  vm.editDeleteHide = false;

  User
  .get($stateParams)
  .$promise
  .then(data => {
    console.log(data);
    vm.user = data;
    if(vm.user.id === CurrentUserService.currentUser.id){
      vm.editDeleteHide = true;
      console.log(vm.editDeleteHide);
    }
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
