import { MySqlDriver } from '@mikro-orm/mysql';
import { join } from 'path';
import { MikroORMOptions } from '@mikro-orm/core';

export default {
  type: 'mysql',
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: '',
  dbName: 'taskmanager',
  entities: [join(__dirname, '/**/*.entity{.ts,.js}')],
  driver: MySqlDriver,
  debug: process.env.NODE_ENV !== 'production',
  migrations: {
    path: 'dist/migrations',
    pathTs: 'src/migrations',
  },
} as Partial<MikroORMOptions<MySqlDriver>>;