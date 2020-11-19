require('ts-node/register');
import { Sequelize } from 'sequelize';
import { Umzug, SequelizeStorage } from 'umzug';

const sequelize = new Sequelize({ dialect: 'sqlite', storage: './db.sqlite' });

const umzug = new Umzug({
  migrations: { glob: 'src/migrations/*.ts' },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});

// export the type helper exposed by umzug, which will have the `context` argument typed correctly
export type Migration = typeof umzug._types.migration;

describe('test', function () {
  it('should works', async function (done) {
    umzug.up().then(() => done());
  })
});
