// This will handle all possible accessing the db for the artist table
// Grab all artists

import { Artist } from '../models/artist';
import { SessionFactory } from '../util/session-factory';

export class ArtistDao {
  // The async ... Promise - the promise is saying you will get something eventually 
  // and it will be an array of Artist 
  public async getAllArtist(): Promise<Artist[]> {
    let pool = SessionFactory.getConnectionPool();

    // Don't know when the connection will be made, so we make a promise
    // The await allow us to wait until the connection is made in order to proceed
    const client = await pool.connect();

    const result = await client.query('SELECT * FROM artist');
    
    return result.rows;
  }
}
