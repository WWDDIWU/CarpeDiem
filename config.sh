#! /bin/bash

set -o errexit

command -v npm >/dev/null || echo "Npm is not installed. Please install nodejs with npm."

echo "Installing ember"
npm install ember -g

echo "Installing dependencies"
cd backend
npm install
cd ..

cd frontend
npm install
npm install bower -g
bower install
cd ..

npm install forever -g

echo " - - - - - - - - - - - - - - - - - - - - - - - - - - - -"
echo "Configured! Please run forever start index.js to start the application"
