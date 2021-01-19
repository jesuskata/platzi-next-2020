// Dependencies
// import React from 'react';
import { NextApiRequest, NextApiResponse } from 'next';

// Database
import DB from '../../../database/db';

const allAvos = async (request = NextApiRequest, response = NextApiResponse) => {
  const db = new DB();

  const { query: { id } } = request;

  const avo = await db.getById(id);

  response.status(200).json(avo);
};

export default allAvos;
