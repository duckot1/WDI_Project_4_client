angular
  .module('jobsApp')
  .controller('JobsEditCtrl', JobsEditCtrl);

JobsEditCtrl.$inject = ['Job', '$stateParams'];

function JobsEditCtrl(Job, $stateParams) {
  const vm = this;
  vm.job = Job.get($stateParams);

  vm.updateJob = () => {
    Job
      .update($stateParams, vm.job)
      .$promise
      .then(data => {
        console.log(data);
      }, err => {
        console.log(err);
      });
  };

}
