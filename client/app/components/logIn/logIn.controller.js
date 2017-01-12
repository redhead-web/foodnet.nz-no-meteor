class LogInController {
  constructor(User, $state) {
    'ngInject';

    this.name = 'logIn';
    this.authentication = { username: '', password: '' };
    this.message = false;
    this.recover = false;

    // ----- TODO: these need to be passed in through root scope -----
    this.userActive = false;

    this.logIn = () => User.logIn(this.authentication, (err, user) => {
      if (user) {
        $state.go('home');
      } else {
        this.error = err.data.message;
      }
    });
    this.logout = () => User.logOut();
  }

  recoveryEmail() {
    // send reovery email
    this.message = 'Recovery email sent';
  }
}

export default LogInController;
