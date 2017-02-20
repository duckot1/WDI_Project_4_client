angular
  .module('jobsApp')
  .factory('Job', jobFactory);

jobFactory.$inject = ['API', '$resource'];

function jobFactory(API, $resource) {
  return $resource(`${API}/jobs/:id`, { id: '@_id'}, {});
}
