/** @format */

import { DataTypes } from 'sequelize';
import db from '../configs/database.js';
import Vuelo from './vuelo.model.js';
// import Pasaje from './pasaje.model.js';

const PasajeVuelo = db.define(
  'pasaje_vuelo',
  {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_vuelo: {
      field: 'id_vuelo',
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Vuelo,
        key: 'id',
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
    },
    id_pasaje: {
      field: 'id_pasaje',
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        // model: Pasaje,
        key: 'id',
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
    },
    fecha: { field: 'fecha', type: DataTypes.DATEONLY, allowNull: false },
    estado: { field: 'estado', type: DataTypes.STRING(60), allowNull: false },
  },
  { tableName: 'pasaje_vuelo', timestamps: false },
);

export default PasajeVuelo;
