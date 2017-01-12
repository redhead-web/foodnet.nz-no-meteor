class HomeController {
  constructor() {
    this.name = 'home';

    // set up variables for home page
    this.searchFilter = '';
    this.searchActive = false;
    this.promoText = 'Explore Northland`s Food System';

    // ----- TODO: these need to be passed in through root scope -----
    // this.userActive = 'someId';
    // this.user = { _id: 'someId', emails: [{ address: 'admin@admin.co.nz' }] };

    this.commonSearches = ['Carrots', 'Organic Fertilizer', 'Lamb Mince', 'Tomatoes', 'Websites', 'Packaging', 'HTML', 'Lettuce', 'Organic Sweeteners'];
    this.organisations = [{ _id: 'someId', name: 'Super Awesome Company', tags: 'carrots' }, { _id: 'someOtherId', name: 'A Company', tags: 'beans' }, { _id: 'someMoreId', name: 'Another Company', tags: 'HTML' }, { _id: 'someAlternateId', name: 'Yet Another Company', tags: 'Lamb' }];
    this.organisationsNewest = [{ _id: 'someId', name: 'Super Awesome Company', tags: 'carrots' }, { _id: 'someOtherId', name: 'A Company', tags: 'beans' }, { _id: 'someMoreId', name: 'Another Company', tags: 'HTML' }, { _id: 'someAlternateId', name: 'Yet Another Company', tags: 'Lamb' }];
    this.organisationsPopular = [{ _id: 'someId', name: 'Super Awesome Company', tags: 'carrots' }, { _id: 'someOtherId', name: 'A Company', tags: 'beans' }, { _id: 'someMoreId', name: 'Another Company', tags: 'HTML' }, { _id: 'someAlternateId', name: 'Yet Another Company', tags: 'Lamb' }];
  }
}

export default HomeController;
