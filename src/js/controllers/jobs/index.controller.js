angular
  .module('jobsApp')
  .controller('JobsIndexCtrl', JobsIndexCtrl);

JobsIndexCtrl.$inject = [];

function JobsIndexCtrl() {
  const vm = this;
  vm.jobs = 'JOBS';
}
