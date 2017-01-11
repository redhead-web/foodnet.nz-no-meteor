class LogInController {
  constructor() {
    this.name = 'logIn';
    this.authentication = { email: '', password: '' };
    this.message = false;
    this.recover = false;

    // ----- TODO: these need to be passed in through root scope -----
    this.userActive = false;
  }

  logIn() {
    // log in
  }

  recoveryEmail() {
    // send reovery email
    this.message = 'Recovery email sent';
  }
}

export default LogInController;
