angular
  .module('jobsApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = [];
function MainCtrl() {
  const vm = this;

  vm.hello = 'hello';

}
