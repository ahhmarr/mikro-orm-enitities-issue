import type { EntityManager, RequiredEntityData } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';

import Addon from '../../entity/addon.entity';

const DEFAULT_ADDONS: RequiredEntityData<Addon>[] = [
  {
    name: 'ADD_ONE',
    description: 'ADD_ONE',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export class AddonSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    for (const addon of DEFAULT_ADDONS) {
      await em.persistAndFlush(em.create(Addon, addon));
    }
  }
}
