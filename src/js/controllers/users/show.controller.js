angular
  .module('jobsApp')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', '$stateParams'];

function UsersShowCtrl(User, $stateParams) {
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
}
