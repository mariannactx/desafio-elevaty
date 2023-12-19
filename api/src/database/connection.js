import pg from 'pg';
import 'dotenv/config';

export default async (query, values = null) => {
  const client = new pg.Client({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
  });

  await client.connect();

  let result;
  if (values) {
    result = await client.query(query, values);
  } else {
    result = await client.query(query);
  }

  await client.end();

  return result;
};
