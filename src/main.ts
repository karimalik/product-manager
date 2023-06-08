import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //swagger config
  const config = new DocumentBuilder()
        .setTitle('Product Manager')
        .setDescription('API product manager')
        .setVersion('1.0')
        .build();

  const doc = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, doc);

  await app.listen(3000);
}
bootstrap();
