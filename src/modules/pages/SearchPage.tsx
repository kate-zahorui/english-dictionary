import React, { useEffect } from 'react';
import rapidapiService from '../../services/api/rapidapi.service';

const SearchPage = () => {
  useEffect(() => {
    rapidapiService.getWordInfo('example');
  }, []);

  return <div>SearchPage</div>;
};

export default SearchPage;
