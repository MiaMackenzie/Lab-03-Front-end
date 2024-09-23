import React from 'react';

const ArtistDetails = ({ artist }) => {
  return (
    <div className="artist-card">
      <img 
        src={artist.photo_url} 
        alt={`${artist.name}'s profile`} 
        className="artist-image" 
      />
      <h2 style={{ fontFamily: 'DM Serif Display, serif' }}>{artist.name}</h2>
      <p style={{ fontFamily: 'DM Serif Display, serif' }}>Country: {artist.country}</p>
      <p style={{ fontFamily: 'DM Serif Display, serif' }}>Years Active: {artist.years_active}</p>
    </div>
  );
};

export default ArtistDetails;
