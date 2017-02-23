angular
  .module('jobsApp')
  .controller('JobsNewCtrl', JobsNewCtrl);

JobsNewCtrl.$inject = ['Job', '$state'];

function JobsNewCtrl(Job, $state) {
  const vm = this;
  vm.job = {};

  vm.onTimeSet = function (newDate, oldDate) {
    console.log(newDate);
  };


  vm.addJob = () => {
    Job
    .save(vm.job)
    .$promise
    .then(() => {
      $state.go('jobsIndex');
    }, err => {
      console.log(err);
    });
  };

}
