angular
  .module('jobsApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .state('jobsIndex', {
    url: '/jobs',
    templateUrl: '/js/views/jobs/index.html',
    controller: 'JobsIndexCtrl',
    controllerAs: 'jobsIndex'
  })
  .state('jobsNew', {
    url: '/jobs/new',
    templateUrl: '/js/views/jobs/new.html',
    controller: 'JobsNewCtrl',
    controllerAs: 'jobsNew'
  })
  .state('jobsShow', {
    url: '/jobs/:id',
    templateUrl: '/js/views/jobs/show.html',
    controller: 'JobsShowCtrl',
    controllerAs: 'jobsShow'
  })
  .state('jobsEdit', {
    url: '/jobs/:id/edit',
    templateUrl: '/js/views/jobs/edit.html',
    controller: 'JobsEditCtrl',
    controllerAs: 'jobsEdit'
  })
  .state('usersShow', {
    url: '/users/:id',
    templateUrl: 'js/views/users/show.html',
    controller: 'UsersShowCtrl',
    controllerAs: 'usersShow'
  })
  .state('usersEdit', {
    url: '/users/:id',
    templateUrl: 'js/views/users/edit.html',
    controller: 'UsersEditCtrl',
    controllerAs: 'usersEdit'
  })
  .state('jobApplications', {
    url: '/jobs/:id/applications',
    templateUrl: 'js/views/applications/job-applications.html',
    controller: 'JobApplicationsCtrl',
    controllerAs: 'jobApplications'
  })
  .state('myApplications', {
    url: '/users/:id/applications',
    templateUrl: 'js/views/applications/my-applications.html',
    controller: 'MyApplicationCtrl',
    controllerAs: 'myApplications'
  })
  .state('dashboard', {
    url: '/dashboard',
    templateUrl: 'js/views/dashboard/jobs.html',
    controller: 'MyJobsCtrl',
    controllerAs: 'myJobs'
  });

}
