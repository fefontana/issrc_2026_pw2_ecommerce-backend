import departamentos from './departamentosSeeder.js';
import salas from './salasSeeder.js';
import pacientes from './pacientesSeeder.js';
import medicos from './medicosSeeder.js';
import enfermeros from './enfermerosSeeder.js';
import camas from './camasSeeder.js';
import citasMedicas from './citasMedicasSeeder.js';
import tratamientos from './tratamientosSeeder.js';
import enfermeroPorSala from './enfermeroPorSalaSeeder.js';

const runSeeds = async () => {
  try {
    console.log('Iniciando seeding (IF NOT EXISTS)...');
    
    console.log('Verificando e insertando datos...');
    
    await departamentos.up();
    await salas.up();
    await pacientes.up();
    await medicos.up();
    await enfermeros.up();
    await camas.up();
    await citasMedicas.up();
    await tratamientos.up();
    await enfermeroPorSala.up();

    console.log('Seeding completado con éxito.');
    process.exit(0);
  } catch (error) {
    console.error('Error durante el seeding:', error);
    process.exit(1);
  }
};

runSeeds();
