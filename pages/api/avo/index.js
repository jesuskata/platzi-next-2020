// Dependencies
import { IncomingMessage, ServerResponse } from 'http';

// Database
import DB from '../../../database/db';

const allAvos = async (request = IncomingMessage, response = ServerResponse) => {
  const db = new DB();
  const allEntries = await db.getAll();
  const { length } = allEntries;

  response.statusCode = 200;
  response.setHeader('Content-type', 'application/json');
  response.end(JSON.stringify({ data: allEntries, length }));
};

export default allAvos;
