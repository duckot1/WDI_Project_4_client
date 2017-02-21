angular
 .module('jobsApp')
 .service('CurrentUserService', CurrentUserService);

CurrentUserService.$inject = ['TokenService', 'User'];

function CurrentUserService(TokenService, User) {
  const self = this;

  self.getUser = () => {
    const decoded = TokenService.decodeToken();
    console.log(decoded);

    if (decoded) {
      User
        .get({ id: decoded.id }).$promise
        .then(data => {
          console.log(data);
        });
    }
  };

}
