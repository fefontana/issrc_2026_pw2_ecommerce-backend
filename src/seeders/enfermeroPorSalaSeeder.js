import { sequelize } from '../config/database.js';

export default {
  up: async () => {
    const queryInterface = sequelize.getQueryInterface();
    const asignaciones = [
      { enfLegajo: 'E-001', salaNombre: 'Sala A - Piso 1', turno: 'mañana' },
      { enfLegajo: 'E-002', salaNombre: 'Sala B - Piso 1', turno: 'tarde' },
    ];

    for (const a of asignaciones) {
      const [enf] = await sequelize.query(
        'SELECT id FROM Enfermeros WHERE legajo = :legajo',
        { replacements: { legajo: a.enfLegajo }, type: sequelize.QueryTypes.SELECT }
      );
      const [sala] = await sequelize.query(
        'SELECT id FROM Salas WHERE nombre = :nombre',
        { replacements: { nombre: a.salaNombre }, type: sequelize.QueryTypes.SELECT }
      );

      if (enf && sala) {
        const [exists] = await sequelize.query(
          'SELECT * FROM EnfermeroPorSala WHERE enfermeroId = :eId AND salaId = :sId AND turno = :turno',
          { replacements: { eId: enf.id, sId: sala.id, turno: a.turno }, type: sequelize.QueryTypes.SELECT }
        );

        if (!exists) {
          await queryInterface.bulkInsert('EnfermeroPorSala', [{
            enfermeroId: enf.id,
            salaId: sala.id,
            turno: a.turno,
            horaInicio: '06:00:00',
            horaFin: '14:00:00',
            fechaInicio: '2024-01-01',
            createdAt: new Date(),
            updatedAt: new Date()
          }]);
        }
      }
    }
  },

  down: async () => {
    const queryInterface = sequelize.getQueryInterface();
    await queryInterface.bulkDelete('EnfermeroPorSala', null, {});
  }
};
