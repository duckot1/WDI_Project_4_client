angular
  .module('jobsApp')
  .controller('ActiveCtrl', ActiveCtrl);

ActiveCtrl.$inject = ['Job'];

function ActiveCtrl(Job) {
  const vm = this;
  Job
   .myJobs()
   .$promise
   .then(data => {
     console.log(data);
     vm.jobs = data;
   }, err => {
     console.log(err);
   });
}
