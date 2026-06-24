import { sequelize } from '../config/database.js';

export default {
  up: async () => {
    const queryInterface = sequelize.getQueryInterface();
    const enfermeros = [
      {
        legajo: 'E-001',
        nombre: 'Enfermera Joy',
        telefono: '555-JOY1'
      },
      {
        legajo: 'E-002',
        nombre: 'Enfermera Joy 2',
        telefono: '555-JOY2'
      }
    ];

    for (const e of enfermeros) {
      const [exists] = await sequelize.query(
        'SELECT id FROM Enfermeros WHERE legajo = :legajo',
        { replacements: { legajo: e.legajo }, type: sequelize.QueryTypes.SELECT }
      );

      if (!exists) {
        await queryInterface.bulkInsert('Enfermeros', [{
          ...e,
          createdAt: new Date(),
          updatedAt: new Date()
        }]);
      }
    }
  },

  down: async () => {
    const queryInterface = sequelize.getQueryInterface();
    await queryInterface.bulkDelete('Enfermeros', null, {});
  }
};
