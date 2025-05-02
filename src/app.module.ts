import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SpotifyController } from './spotify/spotify.controller';
import { SpotifyService } from './spotify/spotify.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [SpotifyController],
  providers: [SpotifyService],
})
export class AppModule {}
