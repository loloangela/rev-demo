import { ArtistDao } from './src/main/dao/artist-dao';

let artistDao = new ArtistDao();

artistDao.getAllArtist().then(artArray => console.log(artArray));

// console.log("Hey World!");