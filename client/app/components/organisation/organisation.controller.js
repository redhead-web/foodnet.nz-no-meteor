class OrganisationController {
  constructor() {
    this.name = 'organisation';

    this.searchFilter = '';
    this.searchActive = false;

    // ----- TODO: these need to be passed in through root scope -----
    this.userActive = true;
    this.user = { _id: 'someId', emails: [{ address: 'admin@admin.co.nz' }] };
    this.organisation = { _id: 'someId',
      name: 'Whangarei Food Co-op',
      tags: 'carrots',
      tagLine: 'Local - Fresh - Affordable',
      description: { short: 'spoon hammer fork', long: 'spoon hammer fork mustard cheese' },
      address: '1 Woods Road',
      openingHours: 'Tuesdays 3-6pm' };
    this.organisationInputs = [{ _id: 'someId', name: 'carots' }, { _id: 'someOtherId', name: 'beatroot' }];
    this.organisationOutputs = [{ _id: 'someId', name: 'carots' }, { _id: 'someOtherId', name: 'beatroot' }];
  }
}

export default OrganisationController;
