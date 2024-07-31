import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';

import { MikroORM } from '@mikro-orm/postgresql';

import { getMikroORMConfig } from '../database/mikro-orm.config';
import { DatabaseSeeder } from '../database/seeders/DatabaseSeeder';

declare module 'fastify' {
  interface FastifyInstance {
    someDb: MikroORM;
  }
}

async function initDB(instance: FastifyInstance): Promise<void> {
  const orm = await MikroORM.init(getMikroORMConfig());

  instance.decorate('someDb', orm);

  const migrator = instance.someDb.getMigrator();

  await migrator.up();

  // this seeder runs ¯\_(ツ)_/¯

  // const seeder = instance.someDb.getSeeder();
  // await seeder.seed(DatabaseSeeder);
}

export default fp(initDB, {
  name: 'database-orm',
});
