#!/bin/bash

# This script will setup the project for development and testing of website.
# This is should be run inside of scalesandslumbers directory.

# Define colors for better output formatting
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# Navigate to frontend directory and install dependencies
cd frontend
echo -e "${GREEN}Installing frontend dependencies...${NC}"
npm install

# Start the frontend dev server in the background
echo -e "${GREEN}Starting frontend dev server...${NC}"
npm run dev &

# Navigate to backend directory and install dependencies
cd ../backend
echo -e "${GREEN}Installing backend dependencies...${NC}"
npm install

# Start the backend dev server in the background
echo -e "${GREEN}Starting backend dev server...${NC}"
npm run dev &

# Replace the password in product_insertion.js
echo -e "${GREEN}Updating MySQL password in product_insertion.js...${NC}"
sed -i "s/password: '1010'/password: 'newpassword'/" scalesandslumbers/backend/scripts/db/product_insertion.js

# Initialize the database (this assumes the password has been changed)
cd scripts/db
echo -e "${GREEN}Initializing the database...${NC}"
mysql -u root -p < initialize_database.sql

# Run the product insertion script
echo -e "${GREEN}Running product insertion...${NC}"
node product_insertion.js

# Return to the original directory
cd ../../../

echo -e "${GREEN}Setup complete!${NC}"
