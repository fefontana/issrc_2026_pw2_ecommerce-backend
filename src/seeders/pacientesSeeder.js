import { sequelize } from '../config/database.js';

export default {
  up: async () => {
    const queryInterface = sequelize.getQueryInterface();
    const pacientes = [
      {
        dni: 12345678,
        nroHistoriaClinica: 1001,
        nombre: 'Juan Pérez',
        fechaNacimiento: '1985-05-20',
        direccion: 'Calle Falsa 123',
        telefono: '555-0101',
        contactoEmergenciaNombre: 'María García',
        contactoEmergenciaTelefono: '555-0202'
      },
      {
        dni: 87654321,
        nroHistoriaClinica: 1002,
        nombre: 'Ana López',
        fechaNacimiento: '1992-08-15',
        direccion: 'Av. Siempreviva 742',
        telefono: '555-0303',
        contactoEmergenciaNombre: 'Carlos López',
        contactoEmergenciaTelefono: '555-0404'
      }
    ];

    for (const p of pacientes) {
      const [exists] = await sequelize.query(
        'SELECT id FROM Pacientes WHERE dni = :dni',
        { replacements: { dni: p.dni }, type: sequelize.QueryTypes.SELECT }
      );

      if (!exists) {
        await queryInterface.bulkInsert('Pacientes', [{
          ...p,
          createdAt: new Date(),
          updatedAt: new Date()
        }]);
      }
    }
  },

  down: async () => {
    const queryInterface = sequelize.getQueryInterface();
    await queryInterface.bulkDelete('Pacientes', null, {});
  }
};
