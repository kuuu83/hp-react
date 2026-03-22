import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = './src/assets';
const files = fs.readdirSync(assetsDir);

async function convertToWebP() {
  console.log('--- 画像変換・最適化を開始します ---');
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      const inputPath = path.join(assetsDir, file);
      const outputName = path.parse(file).name + '.webp';
      const outputPath = path.join(assetsDir, outputName);

      try {
        let image = sharp(inputPath);
        const metadata = await image.metadata();

        // 巨大な画像（横幅2500px以上）は、2000px程度にリサイズ
        if (metadata.width > 2500) {
          image = image.resize(2000); 
        }

        // WebPに変換 (画質 85% : 見た目はほぼ変わらず、容量を劇的に削減)
        await image
          .webp({ quality: 85 })
          .toFile(outputPath);

        const oldSize = fs.statSync(inputPath).size / 1024;
        const newSize = fs.statSync(outputPath).size / 1024;
        
        console.log(`✓ 変換完了: ${file} -> ${outputName}`);
        console.log(`  サイズ削減: ${oldSize.toFixed(1)}KB -> ${newSize.toFixed(1)}KB (${Math.round((1 - newSize / oldSize) * 100)}% 削減)`);
        
      } catch (err) {
        console.error(`✗ 失敗: ${file}`, err);
      }
    }
  }
  console.log('--- すべての画像処理が完了しました ---');
}

convertToWebP();
