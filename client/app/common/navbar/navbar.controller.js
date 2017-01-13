import template from './bottom-sheet-list-template.html';

class NavbarController {
  constructor($state, $scope, $mdSidenav, $mdBottomSheet, User) {
    'ngInject';

    this.go = $state.go;
    this.name = 'navbar';
    this.bookmarked = false;
    this.$mdBottomSheet = $mdBottomSheet;

    if (this.pageId && this.pageType === 'organisation') {
      if (this.userCurrent && this.userCurrent.profile && this.userCurrent.profile.bookmarks) {
        for (let index = 0; index < this.userCurrent.profile.bookmarks.length; index += 1) {
          if (this.userCurrent.profile.bookmarks[index] === this.pageId) {
            this.bookmarked = true;
            break;
          }
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

  openBottomSheet() {
    this.$mdBottomSheet.show({
      template,
      locals: {
        pageType: this.pageType,
        pageId: this.pageId,
        pageOwned: this.pageOwned,
      },
      controllerAs: '$ctrl',
      controller($mdBottomSheet, pageType, pageId, pageOwned) {
        'ngInject';

        this.hide = $mdBottomSheet.hide;
        this.pageType = pageType;
        this.pageId = pageId;
        this.pageOwned = pageOwned;
      },
    });
  }
}

export default NavbarController;
