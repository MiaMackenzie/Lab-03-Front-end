import { artists } from './best-selling-music-artists';
import React from 'react';
import ArtistDetails from './ArtistDetails';

function App() {

  return (
    <div>
      <h1 style={{ fontFamily: 'DM Serif Display, serif' }}>Best Selling Artists</h1>
      <div className="artist-list">
        {artists.map((artist, index) => (
          <ArtistDetails key={index} artist={artist} />
        ))}
      </div>
    </div>
  );
}

export default App;