import { Migration } from '@mikro-orm/migrations';

export class Migration20240619214621 extends Migration {
  async up(): Promise<void> {
    this.addSql(`create extension if not exists "uuid-ossp";`);
  }
}
