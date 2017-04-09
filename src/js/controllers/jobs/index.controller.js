angular
  .module('jobsApp')
  .controller('JobsIndexCtrl', JobsIndexCtrl);

JobsIndexCtrl.$inject = ['Job'];

function JobsIndexCtrl(Job) {
  const vm = this;
  Job
    .query()
    .$promise.
    then(data => {
      vm.jobs = data;
    }, err => {
      console.log(err);
    });
  console.log(vm.jobs);
}
