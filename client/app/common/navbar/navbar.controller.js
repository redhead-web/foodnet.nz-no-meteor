class NavbarController {
  constructor($state, $scope, $mdSidenav, User) {
    'ngInject';

    this.go = $state.go;
    this.name = 'navbar';
    this.bookmarked = false;
    if (this.organisationActive) {
      for (let index = 0; index < this.user.profile.bookmarks.length; index += 1) {
        if (this.user.profile.bookmarks[index] === this.organisationActive) {
          this.bookmarked = true;
        }
      }
    }

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

    this.logOut = () => {
      User.logOut();
    };
  }

  goTo(location) {
    this.go(location);
  }


  toggleBookmark() {
    // call to database
    this.bookmarked = !this.bookmarked;
  }
}

export default NavbarController;
