angular
  .module('jobsApp')
  .controller('MyJobsCtrl', MyJobsCtrl);

MyJobsCtrl.$inject = [];
function MyJobsCtrl() {
  const vm = this;

  vm.active  = true;
  vm.applied = false;
  vm.booked = false;

  vm.showActive = () => {
    vm.active   = true;
    vm.applied  = false;
    vm.booked   = false;
  };

  vm.showApplied = () => {
    vm.active    = false;
    vm.applied   = true;
    vm.booked    = false;
  };

  vm.showBooked = () => {
    vm.active    = false;
    vm.applied   = false;
    vm.booked    = true;
  };
}
