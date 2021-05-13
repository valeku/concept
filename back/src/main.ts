import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {

  const app = await NestFactory.create<NestExpressApplication>(
    AppModule, { cors: true }
  );

  let startpoint = join(__dirname, 'www');

  app.useStaticAssets(startpoint); 
  console.log('startpoint: ' + startpoint);


  await app.listen(process.env.PORT || 3000);

}
bootstrap();
