#!/bin/bash

echo "🚀 Building Portfolio for Production..."

# Install dependencies
npm ci

# Build the project
npm run build

echo "✅ Build complete! Files are in the dist/ directory"
echo ""
echo "📁 You can now deploy the contents of the dist/ directory to:"
echo "   • Vercel (drag & drop or Git integration)"
echo "   • Netlify (drag & drop dist/ folder)"
echo "   • GitHub Pages (use the built files)"
echo "   • Any static hosting service"
echo ""
echo "🌐 Local preview: npm run preview"
