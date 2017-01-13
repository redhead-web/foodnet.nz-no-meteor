class LogInController {
  constructor(User, $state) {
    'ngInject';

    this.name = 'logIn';

    // set up variables for logIn page
    this.authentication = { username: '', password: '' };
    this.userInfo = { name: '' };
    this.message = false;
    this.state = 'logIn';

    // login handler
    this.logIn = () => User.logIn(this.authentication, (err, user) => {
      if (user) {
        $state.go('home');
      } else {
        this.message = 'Sorry, check your email and password and try again';
      }
    });

    // logout handler
    this.logout = () => User.logOut();
  }

  recoveryEmail() {
    // send reovery email
    this.message = 'Recovery email sent';
  }

  createAccount() {
    // create account
    this.message = 'Account created';
  }
}

export default LogInController;
