angular
  .module('jobsApp')
  .controller('AppliedCtrl', AppliedCtrl);

AppliedCtrl.$inject = ['Job'];

function AppliedCtrl(Job) {
  const vm = this;
  Job
   .applied()
   .$promise
   .then(data => {
     console.log(data);
     vm.jobs = data;
   }, err => {
     console.log(err);
   });
}
