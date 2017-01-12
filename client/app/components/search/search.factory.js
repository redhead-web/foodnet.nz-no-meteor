const SearchFactory = ($http) => {
  'ngInject';

  const getCommonData = (id, options = {}) => $http.get('/api/search/common', options).then((response) => response.data);

  return { getCommonData };
};

export default SearchFactory;
