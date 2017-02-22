angular
  .module('jobsApp')
  .controller('BookedCtrl', BookedCtrl);

BookedCtrl.$inject = ['Job'];

function BookedCtrl(Job) {
  const vm = this;
  Job
   .booked()
   .$promise
   .then(data => {
     console.log(data);
     vm.jobs = data;
   }, err => {
     console.log(err);
   });
}
