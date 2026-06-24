import { sequelize } from '../config/database.js';

export default {
  up: async () => {
    const queryInterface = sequelize.getQueryInterface();
    const departamentos = [
      'Cardiología', 'Pediatría', 'Urgencias', 'Traumatología'
    ];

    for (const nombre of departamentos) {
      const [exists] = await sequelize.query(
        'SELECT id FROM Departamentos WHERE nombre = :nombre',
        { replacements: { nombre }, type: sequelize.QueryTypes.SELECT }
      );

      if (!exists) {
        await queryInterface.bulkInsert('Departamentos', [{
          nombre,
          createdAt: new Date(),
          updatedAt: new Date()
        }]);
      }
    }
  },

  down: async () => {
    const queryInterface = sequelize.getQueryInterface();
    await queryInterface.bulkDelete('Departamentos', null, {});
  }
};
