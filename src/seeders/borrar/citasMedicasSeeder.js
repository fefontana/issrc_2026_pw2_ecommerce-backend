import { sequelize } from '../config/database.js';

export default {
  up: async () => {
    const queryInterface = sequelize.getQueryInterface();
    const citas = [
      { fecha: '2024-06-01', hora: '10:00:00', motivo: 'Revision general' },
      { fecha: '2024-05-25', hora: '14:30:00', motivo: 'Dolor de cabeza' },
    ];

    for (const c of citas) {
      const [exists] = await sequelize.query(
        'SELECT id FROM Citas_Medicas WHERE fecha = :fecha AND hora = :hora',
        { replacements: { fecha: c.fecha, hora: c.hora }, type: sequelize.QueryTypes.SELECT }
      );

      if (!exists) {
        await queryInterface.bulkInsert('Citas_Medicas', [{
          fecha: c.fecha,
          hora: c.hora,
          motivoConsulta: c.motivo,
          estado: 'pendiente',
          createdAt: new Date(),
          updatedAt: new Date()
        }]);
      }
    }
  },

  down: async () => {
    const queryInterface = sequelize.getQueryInterface();
    await queryInterface.bulkDelete('Citas_Medicas', null, {});
  }
};
