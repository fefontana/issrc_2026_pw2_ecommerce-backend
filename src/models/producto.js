import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
const Categoria = require('./categoria');

const Producto = sequelize.define('Producto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  categoria_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Categoria,
      key: 'id',
    },
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  imagen_url: {
    type: DataTypes.STRING,
  },
  activo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  tableName: 'productos',
  timestamps: false,
});

// Relaciones
Categoria.hasMany(Producto, { foreignKey: 'categoria_id' });
Producto.belongsTo(Categoria, { foreignKey: 'categoria_id' });

module.exports = Producto;

/* OTRAS PROPIEDADES... EJEMPLO... TIPOS: TEXT, DATEONLY.... OTRAS:


    turno: {
      type: DataTypes.ENUM("mañana", "tarde", "noche"),
      allowNull: false,
    },

        horaInicio: {
      type: DataTypes.TIME,
      allowNull: false,
    },

*/