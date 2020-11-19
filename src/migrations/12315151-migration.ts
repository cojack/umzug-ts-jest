import {DataTypes} from 'sequelize';
import type { Migration } from '..';

// types will now be available for `queryInterface`
export const up: Migration = ({ context: queryInterface }) => queryInterface.createTable('something', {
  id: DataTypes.BIGINT
});
export const down: Migration = ({ context: queryInterface }) => queryInterface.dropTable('something');
