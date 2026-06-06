import sharp from "sharp";

const images = [
  "public/images/AuctionHouse.webp",
  "public/images/hashtagSocial.webp",
  "public/images/littleshop.webp",
  "public/images/hero.webp",
];

for (const image of images) {
  await sharp(image)
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 70 })
    .toFile(image.replace(".webp", "-optimized.webp"));
}

console.log("Images optimized.");
