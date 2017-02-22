angular
  .module('jobsApp')
  .factory('Request', requestFactory);

requestFactory.$inject = ['API', '$resource'];

function requestFactory(API, $resource) {
  return $resource(`${API}/requests/:id`, { id: '@_id'},{
    update: { method: 'PUT', url: `${API}/requests/:id` }
  });
}
