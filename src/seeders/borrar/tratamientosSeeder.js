import { sequelize } from '../config/database.js';

export default {
  up: async () => {
    const queryInterface = sequelize.getQueryInterface();
    const tratamientos = [
      { descripcion: 'Paracetamol 500mg cada 8hs', fecha: '2024-05-26' },
      { descripcion: 'Reposo absoluto por 48hs', fecha: '2024-05-26' },
    ];

    for (const t of tratamientos) {
      const [exists] = await sequelize.query(
        'SELECT id FROM Tratamientos WHERE descripcion = :desc AND fecha = :fecha',
        { replacements: { desc: t.descripcion, fecha: t.fecha }, type: sequelize.QueryTypes.SELECT }
      );

      if (!exists) {
        await queryInterface.bulkInsert('Tratamientos', [{
          descripcion: t.descripcion,
          fecha: t.fecha,
          createdAt: new Date(),
          updatedAt: new Date()
        }]);
      }
    }
  },

  down: async () => {
    const queryInterface = sequelize.getQueryInterface();
    await queryInterface.bulkDelete('Tratamientos', null, {});
  }
};
