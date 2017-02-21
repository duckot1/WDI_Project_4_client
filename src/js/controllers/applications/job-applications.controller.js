angular
  .module('jobsApp')
  .controller('JobApplicationsCtrl', JobApplicationsCtrl);

JobApplicationsCtrl.$inject = ['Job', '$stateParams'];

function JobApplicationsCtrl(Job, $stateParams) {
  const vm = this;
  Job
    .jobApplications($stateParams)
    .$promise
    .then(data => {
      console.log(data);
      vm.applications = data;
    }, err => {
      console.log(err);
    });
}
