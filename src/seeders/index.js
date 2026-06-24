import productos from './productosSeeder.js';
import categorias from './categoriasSeeder.js';

const runSeeds = async () => {
  try {
    console.log('Iniciando seeding (IF NOT EXISTS)...');
    
    console.log('Verificando e insertando datos...');
    
    await productos.up();
    await categorias.up();

    console.log('Seeding completado con éxito.');
    process.exit(0);
  } catch (error) {
    console.error('Error durante el seeding:', error);
    process.exit(1);
  }
};

runSeeds();
