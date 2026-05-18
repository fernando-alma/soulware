import pool from '../config/db.js';

const initDb = async () => {
  const createUsersTableQuery = `
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    
    CREATE TYPE user_role AS ENUM ('admin', 'editor');

    CREATE TABLE IF NOT EXISTS users (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      name VARCHAR(100) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      role user_role DEFAULT 'editor',
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    console.log('Initializing database...');
    // Drop enum type if exists to prevent error on re-run, or just skip if we assume it might exist. 
    // Actually PostgreSQL doesn't have CREATE TYPE IF NOT EXISTS until v12, and it's clunky.
    // A better way is catching existing enumerated type error or checking catalogs.
    // For simplicity, we just execute, and if ENUM exists, it'll fail. Let's make it robust:
    
    await pool.query(`
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'user_role') THEN
          CREATE TYPE user_role AS ENUM ('admin', 'editor');
        END IF;
      END
      $$;
    `);

    await pool.query(createUsersTableQuery.replace(/CREATE TYPE user_role AS ENUM \('admin', 'editor'\);/, ''));
    console.log('Users table initialized successfully.');
  } catch (err) {
    console.error('Error initializing database:', err);
  } finally {
    // Close the pool if called directly as a script
    if (process.argv[1] === import.meta.url || process.argv[1].endsWith('init.js')) {
      await pool.end();
    }
  }
};

initDb();
