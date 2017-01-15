class BookmarksController {
  constructor() {
    this.name = 'bookmarks';
    this.searchFilter = '';
  }

  modifyLists(modifyDetails, stateChange) {
    switch (modifyDetails.type) {
      case 'insert':
        this.bookmarksData[modifyDetails.field].push(modifyDetails.value);
        break;
      case 'update':
        this.bookmarksData[modifyDetails.field][modifyDetails.index] = modifyDetails.value;
        break;
      case 'remove':
        this.bookmarksData[modifyDetails.field].splice(modifyDetails.index, 1);
        break;
      default:
    }
    if (stateChange) {
      this.editType = 'organisation';
    }
  }

  search(query) {
    this.searchFilter = query;
  }
}

export default BookmarksController;
