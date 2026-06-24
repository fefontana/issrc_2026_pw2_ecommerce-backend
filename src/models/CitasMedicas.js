import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const CitasMedicas = sequelize.define('CitasMedicas',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }, 
    hora: {
        type:DataTypes.TIME,
        allowNull: true
    },
    motivoConsulta: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    diagnostico : {
        type: DataTypes.STRING,
        allowNull: true,
    },
   estado: {
    type: DataTypes.ENUM('pendiente', 'realizada', 'cancelada'),
    defaultValue: 'pendiente',
  },
},
{
    tableName: 'Citas_Medicas',
    timestamps: true
})

export default CitasMedicas