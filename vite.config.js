import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// Auto-copy assets during startup
try {
  const srcCover = "C:\\Users\\Informatics\\.gemini\\antigravity-ide\\brain\\f0a732fb-f6ad-4a44-92e6-7d34352faf2d\\clean_book_cover_1783187496321.png";
  const srcPortrait = "C:\\Users\\Informatics\\.gemini\\antigravity-ide\\brain\\f0a732fb-f6ad-4a44-92e6-7d34352faf2d\\media__1783189679428.jpg";
  const srcInside = "C:\\Users\\Informatics\\.gemini\\antigravity-ide\\brain\\f0a732fb-f6ad-4a44-92e6-7d34352faf2d\\media__1783189682355.jpg";
  
  const destDir = "a:\\Website\\Portfolio\\Book\\public";
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  if (fs.existsSync(srcCover)) {
    fs.copyFileSync(srcCover, path.join(destDir, "book_cover.png"));
    console.log("Copied book cover asset");
  }
  if (fs.existsSync(srcPortrait)) {
    fs.copyFileSync(srcPortrait, path.join(destDir, "author_portrait.jpg"));
    console.log("Copied author portrait asset");
  }
  if (fs.existsSync(srcInside)) {
    fs.copyFileSync(srcInside, path.join(destDir, "book_inside.jpg"));
    console.log("Copied book inside page asset");
  }
} catch (e) {
  console.error("Asset copy failed:", e);
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
