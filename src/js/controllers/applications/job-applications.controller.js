angular
.module('jobsApp')
.controller('JobApplicationsCtrl', JobApplicationsCtrl);

JobApplicationsCtrl.$inject = ['Job', 'Request', '$stateParams', '$state'];

function JobApplicationsCtrl(Job, Request, $stateParams, $state) {
  const vm = this;
  Job
  .jobApplications($stateParams)
  .$promise
  .then(data => {
    console.log(data);
    vm.applications = data;
    vm.stars = [];
    vm.blanks = [];
    var ratingCount = vm.applications.user.rating;
    ratingCount = Math.round(ratingCount);

    for (var i = 0; i < ratingCount; i++) {
      vm.stars.push('star');
    }

  }, err => {
    console.log(err);
  });

  vm.accept = function(application) {
    const id = { id: application.id };
    Request
    .update(id, application)
    .$promise
    .then(data => {
      $state.go('dashboard');
    }, err => {
      console.log(err);
    });
  };

  vm.hideOnAccept = hideOnAccept;
  function hideOnAccept(y){
    console.log(y);
    if(y === 'pending'){
      return true;
    } else {
      return false;
    }
  }
}
