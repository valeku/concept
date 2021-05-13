
New Project: concept
1. Create folder concept
2. ..\concept>nest  new back
3. ..\concept>ionic start front
4. ..\back\src\main.ts

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


    await app.listen(process.env.PORT || 5000);

    }
    bootstrap();
5. ..\back>nest build
6. ..\front>ionic build
7. ..\front\www copy to ..\back\dist\www    
8. ..\back>npm run start:prod
9. open url: localhost:3000

FrontEnd:
1. For remove errors on browser  url's + back/forward
    add {provide: LocationStrategy, useClass: HashLocationStrategy} to app module
   


    Deploy to Heroku
1. Docker build:
    >docker build -t concept-image .
2. Docker run:
    >docker run -it -p 3000:3000 concept-image
3. >heroku login
4. List containers:
   >docker ps
5. >heroku container:login   
6. >heroku container:push web --app taki2co
    Error:    "No images to push"
    Solution: rename dockerfile to Dockerfile
7. >heroku container:release web --app taki2co


   Heroku add domain
1. Domain name is need to be full equal as in intenic: www.taki2.co.il
2. Copy DNS Target structural-snapdragon-pd7a....  to https://domain.internic.co.il/admin.php 
   www.taki2.co.il   CNAME



upgrade:
1. build front
2. ..\front\www copy to ..\back\dist\www 
3. >docker build -t concept-image .
3. >heroku login
4. List containers:
   >docker ps
5. >heroku container:login   
6. >heroku container:push web --app taki2co
    Error:    "No images to push"
    Solution: rename dockerfile to Dockerfile
7. >heroku container:release web --app taki2co

https://circleci.com/blog/continuous-deployment-nestjs/