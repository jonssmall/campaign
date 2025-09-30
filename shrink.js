import sharp from "sharp";

sharp("public/images/bay.JPG")
  .resize(1920)               // max width 1920px
  .webp({ quality: 85 })      // compress to WebP with higher quality
  .toFile("output.webp")
  .then(() => console.log("✅ Image optimized: output.webp"))
  .catch(err => console.error(err));