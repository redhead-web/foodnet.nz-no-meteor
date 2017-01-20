class SidebarController {
  constructor($mdSidenav) {
    'ngInject';

    // toggle side menu
    this.toggle = () => {
      $mdSidenav('menu').toggle();
    };
  }
}

export default SidebarController;
