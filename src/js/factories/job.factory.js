angular
  .module('jobsApp')
  .factory('Job', jobFactory);

jobFactory.$inject = ['API', '$resource'];

function jobFactory(API, $resource) {
  return $resource(`${API}/jobs/:id`, { id: '@_id'}, {
    update: { method: 'PUT', url: `${API}/jobs/:id` },
    apply: { method: 'POST', url: `${API}/requests`},
    jobApplications: { method: 'GET', url: `${API}/jobs/:id/applications`, isArray: true }
  });
}
