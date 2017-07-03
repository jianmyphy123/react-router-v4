import React from 'react';

const Search = ({location}) => {
  return (
    <div>
      {new URLSearchParams(location.search).get('keyword')}
    </div>
  );
}


export default Search;
