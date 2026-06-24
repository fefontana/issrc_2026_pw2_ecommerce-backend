import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const EnfermeroPorSala = sequelize.define(
  "EnfermeroPorSala",
  {
    enfermeroId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Enfermeros", key: "id" },
    },
    salaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Salas", key: "id" },
    },
    turno: {
      type: DataTypes.ENUM("mañana", "tarde", "noche"),
      allowNull: false,
    },
    horaInicio: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    horaFin: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    fechaInicio: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    fechaFin: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
  },
  {
    tableName: "EnfermeroPorSala",
    timestamps: true,
  },
);

export default EnfermeroPorSala;
