class OrganisationCreateController {
  constructor($state, $http) {
    'ngInject';

    this.name = 'organisationCreate';
    this.organisationData = {};
    this.organisationData.name = '';
    this.organisationData.type = '';
    this.organisationData.registration = '';
    this.organisationData.gstReg = false;
    this.organisationData.gstNum = '';
    this.go = $state.go;
    this.http = $http;
    this.loading = false;
  }

  createOrganisation() {
    this.http.post('/api/organisations/create', this.organisationData).then((response) => {
      if (!response.data.error) {
        this.go('organisationEdit', { organisationId: response.data._id });
      } else {
        console.log('error');
      }
    }, (err) => console.log(err));
  }
}

export default OrganisationCreateController;
