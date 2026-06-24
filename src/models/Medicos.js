import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Medicos = sequelize.define('Medicos',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    matricula:{
        type: DataTypes.STRING,
        allowNull:false,
        unique: true,

    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    especialidad: {
        type: DataTypes.STRING,
        allowNull:false
    },
    telefono : {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    tableName: 'Medicos',
    timestamps: true
})

export default Medicos