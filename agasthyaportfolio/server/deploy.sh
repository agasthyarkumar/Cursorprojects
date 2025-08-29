#!/bin/bash

echo "🚀 Deploying Portfolio Contact Server..."

# Check if .env file exists
if [ ! -f .env ]; then
    echo "❌ .env file not found! Please create it from .env.example"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Check if installation was successful
if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Start the server
echo "🚀 Starting server..."
npm start
