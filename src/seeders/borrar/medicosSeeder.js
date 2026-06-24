import { sequelize } from '../config/database.js';

export default {
  up: async () => {
    const queryInterface = sequelize.getQueryInterface();
    const medicos = [
      {
        matricula: 'M-5544',
        nombre: 'Dr. Gregory House',
        especialidad: 'Diagnóstico',
        telefono: '555-HOUSE'
      },
      {
        matricula: 'M-3322',
        nombre: 'Dra. Lisa Cuddy',
        especialidad: 'Endocrinología',
        telefono: '555-CUDDY'
      }
    ];

    for (const m of medicos) {
      const [exists] = await sequelize.query(
        'SELECT id FROM Medicos WHERE matricula = :matricula',
        { replacements: { matricula: m.matricula }, type: sequelize.QueryTypes.SELECT }
      );

      if (!exists) {
        await queryInterface.bulkInsert('Medicos', [{
          ...m,
          createdAt: new Date(),
          updatedAt: new Date()
        }]);
      }
    }
  },

  down: async () => {
    const queryInterface = sequelize.getQueryInterface();
    await queryInterface.bulkDelete('Medicos', null, {});
  }
};
