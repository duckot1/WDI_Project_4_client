angular
  .module('jobsApp')
  .controller('JobsShowCtrl', JobsShowCtrl);

JobsShowCtrl.$inject = ['Job', '$stateParams'];

function JobsShowCtrl(Job, $stateParams) {
  const vm = this;
  vm.job = Job.get($stateParams);

}
