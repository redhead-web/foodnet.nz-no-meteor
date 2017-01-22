/* globals google */
/* eslint-disable no-param-reassign */
import './gaAutocomplete.scss';

const gaAutocompleteComponent = () => (
  {
    require: 'ngModel',
    scope: {
      ngModel: '=',
      details: '=?',
    },
    link(scope, element, attrs, model) {
      const options = {
        types: [],
        componentRestrictions: { country: 'nz' },
      };
      scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

      google.maps.event.addListener(scope.gPlace, 'place_changed', () => {
        scope.$apply(() => {
          const place = scope.gPlace.getPlace();

          scope.details = {
            placeId: place.place_id,
            address: place.formatted_address,
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            mapLink: place.url,
          };
          model.$setViewValue(element.val());
        });
      });
    },
  }
);

export default gaAutocompleteComponent;
