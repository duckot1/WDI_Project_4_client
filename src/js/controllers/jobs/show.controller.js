angular
  .module('jobsApp')
  .controller('JobsShowCtrl', JobsShowCtrl);

JobsShowCtrl.$inject = ['Job', '$stateParams', '$state'];

function JobsShowCtrl(Job, $stateParams, $state) {
  const vm = this;
  console.log($stateParams);
  vm.job = Job.get($stateParams);

  vm.delete = function() {
    Job.delete($stateParams).$promise.then(() => {
      $state.go('jobsIndex');
    });
  };

  console.log($stateParams.id);

  vm.application = {
    message: 'I would love to do this!',
    job_id: $stateParams.id
  };

  vm.apply = function() {
    Job
      .apply(vm.application)
      .$promise
      .then((data) => {
        console.log(data);
      }, err => {
        console.log(err);
      });
  };


}
