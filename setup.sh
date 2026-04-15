#!/bin/bash

# Portfolio Next.js Setup Script
# This script automates the setup process

echo "🚀 Starting Portfolio Setup..."
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Create Next.js project
echo -e "${BLUE}Step 1: Creating Next.js project...${NC}"
npx create-next-app@latest portfolio-nextjs \
  --typescript \
  --tailwind \
  --app \
  --eslint \
  --src-dir \
  --no-git

cd portfolio-nextjs

# Step 2: Install dependencies
echo -e "${BLUE}Step 2: Installing dependencies...${NC}"
npm install framer-motion lucide-react clsx tailwind-merge zustand
npm install -D @tailwindcss/typography @tailwindcss/forms

# Step 3: Create directory structure
echo -e "${BLUE}Step 3: Creating directory structure...${NC}"
mkdir -p src/components/providers
mkdir -p src/lib

# Step 4: Display next steps
echo ""
echo -e "${GREEN}✅ Setup Complete!${NC}"
echo ""
echo -e "${YELLOW}📋 Next Steps:${NC}"
echo "1. Copy component files to src/components/"
echo "2. Copy provider files to src/components/providers/"
echo "3. Copy layout.tsx to src/app/"
echo "4. Copy page.tsx to src/app/"
echo "5. Copy globals.css to src/app/"
echo "6. Copy configuration files (next.config.ts, tailwind.config.ts, etc.)"
echo "7. Update personal information in components"
echo "8. Add your resume and project images to public/"
echo ""
echo -e "${BLUE}To start development:${NC}"
echo "npm run dev"
echo ""
echo "Visit: http://localhost:3000"
