/**
 * Script para gerar ícones PWA a partir do favicon.svg
 * Requer: npm install -D sharp
 */

import sharp from 'sharp';
import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const svgPath = join(rootDir, 'public', 'favicon.svg');
const output192 = join(rootDir, 'public', 'icon-192.png');
const output512 = join(rootDir, 'public', 'icon-512.png');

async function generateIcons() {
  try {
    if (!existsSync(svgPath)) {
      console.error('❌ favicon.svg não encontrado em public/');
      process.exit(1);
    }

    console.log('🎨 Gerando ícones PWA...\n');

    // Gerar ícone 192x192
    await sharp(svgPath)
      .resize(192, 192)
      .png()
      .toFile(output192);
    console.log('✅ icon-192.png gerado');

    // Gerar ícone 512x512
    await sharp(svgPath)
      .resize(512, 512)
      .png()
      .toFile(output512);
    console.log('✅ icon-512.png gerado');

    console.log('\n✨ Ícones gerados com sucesso!');
  } catch (error) {
    if (error.code === 'MODULE_NOT_FOUND') {
      console.error('❌ Erro: sharp não está instalado.');
      console.log('💡 Execute: npm install -D sharp');
    } else {
      console.error('❌ Erro ao gerar ícones:', error.message);
    }
    process.exit(1);
  }
}

generateIcons();

