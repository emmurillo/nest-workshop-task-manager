import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MikroORM } from '@mikro-orm/core';
import mikroOrmConfig from './mikro-orm.config';

async function bootstrap() {
  const orm = await MikroORM.init(mikroOrmConfig);
  await orm.getMigrator().up();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();