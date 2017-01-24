class SidebarController {
  constructor($mdSidenav, User) {
    'ngInject';

    // toggle side menu
    this.toggle = () => {
      $mdSidenav('menu').toggle();
    };

    this.logOut = () => {
      User.logOut();
    };
  }
}

export default SidebarController;
