import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Tratamientos = sequelize.define('Tratamientos',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    }
},
{
    tableName: 'Tratamientos',
    timestamps: true
})

export default Tratamientos