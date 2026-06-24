import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Salas = sequelize.define('Salas',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    departamentoId:{
        type: DataTypes.INTEGER,
        allowNull: true
    }
},
{
    tableName: 'Salas',
    timestamps: true
})

export default Salas