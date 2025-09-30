import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "public/images";
const outputDir = "public/images/optimized";

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all image files from the input directory
const imageExtensions = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.jfif', '.JFIF'];
const files = fs.readdirSync(inputDir).filter(file => {
  const ext = path.extname(file);
  return imageExtensions.includes(ext);
});

console.log(`🚀 Found ${files.length} images to optimize...`);

// Process each image
const processImages = async () => {
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const nameWithoutExt = path.parse(file).name;
    const outputPath = path.join(outputDir, `${nameWithoutExt}.webp`);
    
    try {
      await sharp(inputPath)
        .resize(1920, null, { 
          withoutEnlargement: true,  // Don't upscale smaller images
          fit: 'inside'              // Maintain aspect ratio
        })
        .webp({ quality: 90 })
        .toFile(outputPath);
      
      console.log(`✅ Optimized: ${file} → ${nameWithoutExt}.webp`);
    } catch (error) {
      console.error(`❌ Failed to process ${file}:`, error.message);
    }
  }
  
  console.log(`🎉 Finished optimizing ${files.length} images!`);
};

processImages();