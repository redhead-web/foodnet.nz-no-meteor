const SearchFactory = ($http) => {
  'ngInject';

  const getCommonData = (id, options = {}) => $http.get('/api/search/common', options).then((response) => response.data);

  const autocomplete = ({ searchAPI, dbLabel }, query, organisationId) =>
    $http.get(`/api/search/${searchAPI}`, { params: { query, label: dbLabel, organisationId } })
    .then((response) => response.data);

  return { getCommonData, autocomplete };
};

export default SearchFactory;
