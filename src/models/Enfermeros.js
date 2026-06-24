import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Enfermeros = sequelize.define('Enfermeros',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    legajo:{
        type: DataTypes.STRING,
        allowNull:false,
        unique: true,

    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono : {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    tableName: 'Enfermeros',
    timestamps: true
})

export default Enfermeros