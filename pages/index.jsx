// Dependencies
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [avoList, setAvoList] = useState([]);

  useEffect(() => {
    window.fetch('api/avo')
      .then(response => response.json())
      .then(({ data, length }) => {
        setAvoList(data);
      });
  }, []);

  return (
    <div>
      <p>Esta es la página de Home</p>
      {avoList.map(avo => (
        <div key={avo.id}>{avo.name}</div>
      ))}
    </div>
  );
};

export default Home;
