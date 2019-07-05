import { Pool } from 'pg';

export class SessionFactory {
  static cred = {
    database: process.env.PostgreSQLDB,
    host: process.env.PostgreSQLEndpoint,
    user: process.env.PostgreSQLUser,
    password: process.env.PostgreSQLPass,
    max: 10
  }

  static pool: Pool;

  static created = false;

  // Lazy Loaded function (1st time is slower to connect)
  static getConnectionPool(): Pool{
    if(!this.created){
      this.pool = new Pool(this.cred);
      this.created = true;
    }

    return this.pool;
  }
}