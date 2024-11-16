import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import logger from '$lib/logger';
// import { config } from 'dotenv';
// config({ path: '.env' });
import { DATABASE_URL } from '$env/static/private';

const sql = neon(DATABASE_URL);
const db = drizzle({ client: sql });

export default db;