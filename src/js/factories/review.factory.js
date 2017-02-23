angular
  .module('jobsApp')
  .factory('Review', reviewFactory);

reviewFactory.$inject = ['API', '$resource'];

function reviewFactory(API, $resource) {
  return $resource(`${API}/reviews/:id`, { id: '@_id'},{});
}
