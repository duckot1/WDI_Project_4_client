angular
  .module('jobsApp')
  .controller('JobsShowCtrl', JobsShowCtrl);

JobsShowCtrl.$inject = ['Job', '$stateParams', '$state'];

function JobsShowCtrl(Job, $stateParams, $state) {
  const vm = this;
  vm.job = Job.get($stateParams);
  vm.delete = function() {
    Job.delete($stateParams).$promise.then(() => {
      $state.go('jobsIndex');
    });

  };
}
