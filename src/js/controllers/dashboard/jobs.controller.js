angular
  .module('jobsApp')
  .controller('MyJobsCtrl', MyJobsCtrl);

MyJobsCtrl.$inject = [];
function MyJobsCtrl() {
  const vm = this;

  vm.active  = true;
  vm.applied = false;

  vm.showActive = () => {
    vm.active   = true;
    vm.applied  = false;
  };

  vm.showApplied = () => {
    vm.active    = false;
    vm.applied   = true;
  };
}
