class NavbarController {
  constructor($state, $scope, $mdSidenav) {
    'ngInject';

    this.go = $state.go;
    this.name = 'navbar';

    // watch for state changes
    // $scope.$watch($state.current.name, () => {
    //  $scope.currentNavItem = $state.current.name;
    // });

    // toggle side menu
    this.toggle = () => {
      $mdSidenav('menu').toggle();
    };

    this.openMenu = ($mdOpenMenu, ev) => {
      $mdOpenMenu(ev);
    };
  }

  goTo(location) {
    this.go(location);
  }
}

export default NavbarController;
