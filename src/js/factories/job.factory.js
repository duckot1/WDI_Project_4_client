angular
  .module('jobsApp')
  .factory('Job', jobFactory);

jobFactory.$inject = ['API', '$resource'];

function jobFactory(API, $resource) {
  return $resource(`${API}/jobs/:id`, { id: '@_id'}, {
    update: { method: 'PUT', url: `${API}/jobs/:id` },
    apply: { method: 'POST', url: `${API}/requests`},
    jobApplications: { method: 'GET', url: `${API}/jobs/:id/applications`, isArray: true },
    applied: { method: 'GET', url: `${API}/jobs/applied`, isArray: true },
    myJobs: { method: 'GET', url: `${API}/jobs/myjobs`, isArray: true },
    booked: { method: 'GET', url: `${API}/jobs/booked`, isArray: true }
  });
}
