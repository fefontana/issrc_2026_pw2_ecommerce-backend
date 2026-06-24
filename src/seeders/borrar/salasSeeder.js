import { sequelize } from '../config/database.js';

export default {
  up: async () => {
    const queryInterface = sequelize.getQueryInterface();
    const salas = [
      { nombre: 'Sala A - Piso 1', depNombre: 'Cardiología' },
      { nombre: 'Sala B - Piso 1', depNombre: 'Cardiología' },
      { nombre: 'Sala Kids - Piso 2', depNombre: 'Pediatría' },
      { nombre: 'Guardia A', depNombre: 'Urgencias' },
    ];

    for (const sala of salas) {
      // Buscar el ID del departamento por nombre
      const [dep] = await sequelize.query(
        'SELECT id FROM Departamentos WHERE nombre = :nombre',
        { replacements: { nombre: sala.depNombre }, type: sequelize.QueryTypes.SELECT }
      );

      if (dep) {
        const [exists] = await sequelize.query(
          'SELECT id FROM Salas WHERE nombre = :nombre',
          { replacements: { nombre: sala.nombre }, type: sequelize.QueryTypes.SELECT }
        );

        if (!exists) {
          await queryInterface.bulkInsert('Salas', [{
            nombre: sala.nombre,
            departamentoId: dep.id,
            createdAt: new Date(),
            updatedAt: new Date()
          }]);
        }
      }
    }
  },

  down: async () => {
    const queryInterface = sequelize.getQueryInterface();
    await queryInterface.bulkDelete('Salas', null, {});
  }
};
