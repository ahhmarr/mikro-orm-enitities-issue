import { Migrator } from '@mikro-orm/migrations';
import { EntityCaseNamingStrategy, defineConfig } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { SeedManager } from '@mikro-orm/seeder';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';

const config = defineConfig({
  dbName: process.env.DATABASE_DB || 'app-database',
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  namingStrategy: EntityCaseNamingStrategy,
  port: process.env.DATABASE_PORT
    ? parseInt(process.env.DATABASE_PORT, 10)
    : 5432,
  entities: ['dist/entity/*entity.js'],
  entitiesTs: ['./src/entity/*entity.ts'],
  metadataProvider: TsMorphMetadataProvider,
  debug: process.env?.DEBUG === 'true',
  extensions: [Migrator, SeedManager],
  migrations: {
    path: 'dist/database/migrations',
    pathTs: undefined,
    transactional: true,
    allOrNothing: true,
    disableForeignKeys: false,
    snapshot: false,
    tableName: 'mikroOrmMigration',
  },
  seeder: {
    path: 'dist/database/seeders',
    pathTs: 'src/database/seeders',
  },
  pool: {
    min: 5,
  },
  highlighter: process.env.DEBUG ? new SqlHighlighter() : undefined,
});

export function getMikroORMConfig() {
  return defineConfig(config);
}

export default config;
