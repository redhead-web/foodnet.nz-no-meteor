class LogInController {
  constructor(User, $state) {
    'ngInject';

    this.name = 'logIn';

    // set up variables for logIn page
    this.authentication = { username: '', password: '' };
    this.message = false;
    this.recover = false;

    // login handler
    this.logIn = () => User.logIn(this.authentication, (err, user) => {
      if (user) {
        $state.go('home');
      } else {
        this.error = err.data.message;
      }
    });

    // logout handler
    this.logout = () => User.logOut();
  }

  recoveryEmail() {
    // send reovery email
    this.message = 'Recovery email sent';
  }
}

export default LogInController;
