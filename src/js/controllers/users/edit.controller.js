angular
  .module('jobsApp')
  .controller('UsersEditCtrl', UsersEditCtrl);

UsersEditCtrl.$inject = ['User', '$stateParams'];

function UsersEditCtrl(User, $stateParams) {
  const vm = this;
  vm.user = User.get($stateParams);

  vm.updateUser = () => {
    console.log('clicked');
    User
      .update($stateParams, vm.user)
      .$promise
      .then(data => {
        console.log(data);
      }, err => {
        console.log(err);
      });
  };

}
