import template from './bottom-sheet-list-template.html';
import { includes } from 'lodash';

class NavbarController {
  constructor($state, $scope, $rootScope, $mdSidenav, $mdBottomSheet, $transitions, User) {
    'ngInject';

    this.go = $state.go;
    this.bookmarked = false;
    this.$mdBottomSheet = $mdBottomSheet;

    // toggle side menu
    this.toggle = () => {
      $mdSidenav('menu').toggle();
    };

    // watch for state changes
    // $scope.$watch($state.current.name, () => {
    //  $scope.currentNavItem = $state.current.name;
    // });

    this.openMenu = ($mdOpenMenu, ev) => {
      $mdOpenMenu(ev);
    };

    this.logOut = () => {
      User.logOut();
    };

    $transitions.onSuccess({ to: 'organisation' }, (transition) => {
      this.organisationId = transition.params('to').organisationId;
      if ($rootScope.currentUser && $rootScope.currentUser.bookmarks) {
        this.bookmarked = includes($rootScope.currentUser.bookmarks || [], { organisationId: this.organisationId });
      }
    });
    $transitions.onSuccess({ from: 'organisation' }, () => {
      this.organisationId = undefined;
    });

    $transitions.onSuccess({ to: 'profile' }, (transition) => {
      this.userId = transition.params('to').organisationId;
      this.pageOwned = $rootScope.currentUser === this.userId; // disable to edit any profile
    });
    $transitions.onSuccess({ from: 'profile' }, () => {
      this.userId = undefined;
      this.pageOwned = false;
    });

    $transitions.onSuccess({ to: 'organisationEdit' || 'profileEdit' }, () => {
      this.hide = true;
    });
    $transitions.onSuccess({ from: 'organisationEdit' || 'profileEdit' }, () => {
      this.hide = undefined;
    });
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
        organisationId: this.organisationId,
        userId: this.userId,
        pageOwned: this.pageOwned,
      },
      controllerAs: '$ctrl',
      controller($mdBottomSheet, organisationId, userId, pageOwned) {
        'ngInject';

        this.hide = $mdBottomSheet.hide;
        this.organisationId = organisationId;
        this.userId = userId;
        this.pageOwned = pageOwned;
      },
    });
  }
}

export default NavbarController;
