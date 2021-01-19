// Dependencies
import React, { useState, useEffect } from 'react';

// Components
import { NavBar } from '../components/NavBar';

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
      <NavBar />
      <p>Esta es la página de Home</p>
      {avoList.map(avo => (
        <div key={avo.id}>{avo.name}</div>
      ))}
    </div>
  );
};

export default Home;
