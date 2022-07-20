import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {EventosModule} from "./eventos/eventos.module";
// funcion
@Module({
  imports: [EventosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
