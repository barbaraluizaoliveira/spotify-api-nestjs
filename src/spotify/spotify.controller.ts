import { Controller, Get, Param, Query } from '@nestjs/common';
import { SpotifyService } from './spotify.service';
import axios from 'axios';

@Controller('spotify')
export class SpotifyController {
  constructor(private spotifyService: SpotifyService) {}

  @Get('search')
  async search(@Query('query') query: string) {
    const token = await this.spotifyService.getAccessToken();
    const response = await axios.get(`https://api.spotify.com/v1/search`, {
      headers: { Authorization: `Bearer ${token}` },
      params: { q: query, type: 'artist' },
    });
    return response.data;
  }

  @Get('artists/:id')
  async getArtistDetails(@Param('id') id: string) {
    const token = await this.spotifyService.getAccessToken();
    const response = await axios.get(
      `https://api.spotify.com/v1/artists/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  }

  @Get('artists/:id/albums')
  async getArtistAlbums(
    @Param('id') id: string,
    @Query('limit') limit = 10,
    @Query('offset') offset = 0
  ) {
    const token = await this.spotifyService.getAccessToken();
    const response = await axios.get(
      `https://api.spotify.com/v1/artists/${id}/albums`,
      {
        headers: { Authorization: `Bearer ${token}` },
        params: { limit, offset },
      }
    );
    return response.data;
  }

  @Get('albums/:id')
  async getAlbumDetails(@Param('id') id: string) {
    const token = await this.spotifyService.getAccessToken();
    const response = await axios.get(
      `https://api.spotify.com/v1/albums/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  }
}
