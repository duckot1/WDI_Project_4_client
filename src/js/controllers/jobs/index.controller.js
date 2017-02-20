angular
  .module('jobsApp')
  .controller('JobsIndexCtrl', JobsIndexCtrl);

JobsIndexCtrl.$inject = ['Job'];

function JobsIndexCtrl(Job) {
  const vm = this;
  vm.jobs = Job.query();
  console.log(vm.jobs);
}
