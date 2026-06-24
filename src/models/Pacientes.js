import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Pacientes = sequelize.define('Pacientes',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    dni: {
        type: DataTypes.INTEGER,
        allowNull:false,
        unique:true,
    },
    nroHistoriaClinica: {
        type: DataTypes.INTEGER,
        allowNull:false,
        unique:true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fechaNacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }, 
    direccion: {
        type:DataTypes.STRING,
        allowNull: true
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    contactoEmergenciaNombre : {
        type: DataTypes.STRING,
        allowNull: true,
    },
    contactoEmergenciaTelefono:{
        type: DataTypes.STRING,
        allowNull: true,
    },
},
{
    tableName: 'Pacientes',
    timestamps: true
})

export default Pacientes