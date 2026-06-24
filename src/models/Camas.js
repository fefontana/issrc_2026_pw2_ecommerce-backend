import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Camas = sequelize.define('Camas',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    numero: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
   estado: {
    type: DataTypes.ENUM('libre', 'ocupada', 'en_mantenimiento'),
    defaultValue: 'libre',
  }, 
    fechaOcupacion: {
        type:DataTypes.DATEONLY,
        allowNull: true
    },

    salaId:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    pacienteId:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},
{
    tableName: 'Camas',
    timestamps: true
})

export default Camas