class BookmarksController {
  constructor() {
    this.name = 'bookmarks';

    // ----- TODO: these need to be passed in through root scope -----
    this.organisations = [{ _id: 'someId', name: 'Super Awesome Company', tags: 'carrots' }, { _id: 'someOtherId', name: 'A Company', tags: 'beans' }, { _id: 'someMoreId', name: 'Another Company', tags: 'HTML' }, { _id: 'someAlternateId', name: 'Yet Another Company', tags: 'Lamb' }];
  }
}

export default BookmarksController;
