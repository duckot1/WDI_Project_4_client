angular
  .module('jobsApp')
  .controller('JobApplicationsCtrl', JobApplicationsCtrl);

JobApplicationsCtrl.$inject = ['Job', 'Request', '$stateParams'];

function JobApplicationsCtrl(Job, Request, $stateParams) {
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

  vm.accept = function(application) {
    const id = { id: application.id };
    Request
      .update(id, application)
      .$promise
      .then(data => {
        console.log(data);
      }, err => {
        console.log(err);
      });
  };
}
