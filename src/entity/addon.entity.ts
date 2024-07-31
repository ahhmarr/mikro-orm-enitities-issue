import { Property, Entity } from '@mikro-orm/core';

import BaseEntity from './base.entity';

@Entity({
  tableName: 'Addon',
})
export default class Addon extends BaseEntity {
  @Property({ unique: true })
  name!: string;

  @Property({ type: 'text' })
  description!: string;
}
