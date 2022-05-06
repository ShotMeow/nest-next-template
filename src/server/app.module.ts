import { Module } from '@nestjs/common';
import Next from 'next';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RenderModule } from 'nest-next';

@Module({
  imports: [RenderModule.forRootAsync(Next({ dev: true }), { viewsDir: null })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
