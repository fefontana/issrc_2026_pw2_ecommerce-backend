import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Departamentos = sequelize.define('Departamentos',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    tableName: 'Departamentos',
    timestamps: true
})

export default Departamentos