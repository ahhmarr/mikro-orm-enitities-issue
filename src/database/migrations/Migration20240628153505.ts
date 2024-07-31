import { Migration } from '@mikro-orm/migrations';

export class Migration20240628153505 extends Migration {
	async up(): Promise<void> {
		this.addSql(`
     create table IF NOT EXISTS "Addon" (
        "id" uuid primary key default uuid_generate_v4(), 
        "name" varchar(255) unique, 
        "description" text null, 
        "createdAt" timestamp default current_timestamp, 
        "updatedAt" timestamp default current_timestamp
      );
    `);
	}

	async down(): Promise<void> {
		this.addSql(`drop table "Addon";`);
	}
}
