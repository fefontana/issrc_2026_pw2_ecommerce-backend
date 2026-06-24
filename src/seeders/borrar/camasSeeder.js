import { sequelize } from '../config/database.js';

export default {
  up: async () => {
    const queryInterface = sequelize.getQueryInterface();
    const camas = [
      { numero: 'C-01', estado: 'libre', salaNombre: 'Sala A - Piso 1', pacienteDni: 12345678 },
      { numero: 'C-02', estado: 'ocupada', salaNombre: 'Sala A - Piso 1', pacienteDni: 87654321 },
    ];

    for (const c of camas) {
      const [sala] = await sequelize.query(
        'SELECT id FROM Salas WHERE nombre = :nombre',
        { replacements: { nombre: c.salaNombre }, type: sequelize.QueryTypes.SELECT }
      );
      const [paciente] = await sequelize.query(
        'SELECT id FROM Pacientes WHERE dni = :dni',
        { replacements: { dni: c.pacienteDni }, type: sequelize.QueryTypes.SELECT }
      );

      if (sala && paciente) {
        const [exists] = await sequelize.query(
          'SELECT id FROM Camas WHERE numero = :numero',
          { replacements: { numero: c.numero }, type: sequelize.QueryTypes.SELECT }
        );

        if (!exists) {
          await queryInterface.bulkInsert('Camas', [{
            numero: c.numero,
            estado: c.estado,
            salaId: sala.id,
            pacienteId: paciente.id,
            createdAt: new Date(),
            updatedAt: new Date()
          }]);
        }
      }
    }
  },

  down: async () => {
    const queryInterface = sequelize.getQueryInterface();
    await queryInterface.bulkDelete('Camas', null, {});
  }
};
