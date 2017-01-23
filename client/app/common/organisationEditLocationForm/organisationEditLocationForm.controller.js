class OrganisationEditLocationFormController {
  constructor() {
    this.name = 'organisationEditLocationForm';
    this.daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    this.newAddress = { placeId: '', address: '', lat: '', lng: '', mapLink: '' };
  }

  $onInit() {
    if (this.location.index === undefined || this.location.index === null) {
      this.isNew = true;
    }
  }

  save(location, index) {
    const stateChange = 'locations';
    const newLocation = location;

    if (this.newAddress.placeId !== '') {
      newLocation.placeId = this.newAddress.placeId;
      newLocation.address = this.newAddress.address;
      newLocation.lat = this.newAddress.lat;
      newLocation.lng = this.newAddress.lng;
      newLocation.mapLink = this.newAddress.mapLink;
    }

    if (this.isNew) {
      const modifyDetails = { type: 'insert', field: 'locations', value: newLocation };
      this.modifyLocation({ modifyDetails, stateChange });
    } else {
      const modifyDetails = { type: 'update', field: 'locations', index, value: newLocation };
      this.modifyLocation({ modifyDetails, stateChange });
    }
  }
}

export default OrganisationEditLocationFormController;
