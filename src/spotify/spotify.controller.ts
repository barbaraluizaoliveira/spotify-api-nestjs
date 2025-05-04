import { Controller, Get, Query, Param } from '@nestjs/common';
import { SpotifyService } from './spotify.service';
import axios from 'axios';  

interface SpotifyArtist {
  name: string;
  genres: string[];
  popularity: number;
  external_urls: { spotify: string };
  images: { url: string }[];
}

interface SpotifyTracks {
  name: string;
  artists: { name: string; external_urls: { spotify: string } }[];
  external_urls: { spotify: string };
  id: string;
  duration_ms: number;
  track_number: number;
}

interface SpotifyResponse {
  artists: {
    items: SpotifyArtist[];
  };
  tracks: {
    items: SpotifyTracks[];
  }
}

@Controller('spotify')
export class SpotifyController {
  constructor(private spotifyService: SpotifyService) {}

  @Get('search')
  async search(@Query('query') query: string) {
    const token = await this.spotifyService.getAccessToken();
    const response = await axios.get<SpotifyResponse>(  
      `https://api.spotify.com/v1/search`,
      {
        headers: { Authorization: `Bearer ${token}` },
        params: { q: query, type: 'artist' },
      },
    );

    console.log('Artista encontrado:', response.data.artists.items);
    return response.data;
  }

  @Get('artists/:id')
  async getArtistDetails(@Param('id') id: string) {
    const token = await this.spotifyService.getAccessToken();
    const response = await axios.get<SpotifyResponse>(
      `https://api.spotify.com/v1/artists/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log('Detalhes do artista:', response.data);
    return response.data;
  }

  @Get('artists/:id/albums')
  async getArtistAlbums(
    @Param('id') id: string,
    @Query('limit') limit = 10,
    @Query('offset') offset = 0
  ) {
    const token = await this.spotifyService.getAccessToken();
    const response = await axios.get<SpotifyResponse>(
      `https://api.spotify.com/v1/artists/${id}/albums`,
      {
        headers: { Authorization: `Bearer ${token}` },
        params: { limit, offset },
      }
    );
    console.log('Álbuns do artista:', response.data);
    return response.data;
  }

  @Get('albums/:id')
  async getAlbumDetails(@Param('id') id: string) {
    const token = await this.spotifyService.getAccessToken();
    const response = await axios.get<SpotifyResponse>(
      `https://api.spotify.com/v1/albums/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log('Detalhes do álbum:', response.data.tracks.items);
   
    return response.data;
  }
}










