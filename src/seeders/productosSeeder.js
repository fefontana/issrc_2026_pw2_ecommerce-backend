import { sequelize } from '../config/database.js';

export default {
  up: async () => {
    const queryInterface = sequelize.getQueryInterface();
    const productos = [
      {
        id: 1001,
        nombre: 'Miel',
        precio: 9500
      },
      {
        id: 1002,
        nombre: 'Arrope',
        precio: 6600
      }
    ];

    for (const p of productos) {
      const [exists] = await sequelize.query(
        'SELECT id FROM Productos WHERE id = :id',
        { replacements: { id: p.id }, type: sequelize.QueryTypes.SELECT }
      );

      if (!exists) {
        await queryInterface.bulkInsert('Productos', [{
          ...p,
          createdAt: new Date(),
          updatedAt: new Date()
        }]);
      }
    }
  },

  down: async () => {
    const queryInterface = sequelize.getQueryInterface();
    await queryInterface.bulkDelete('Productos', null, {});
  }
};
