#! /bin/bash

set -o errexit

command -v npm >/dev/null || echo "Npm is not installed. Please install nodejs with npm."

echo "Installing ember"
npm install ember -g

echo "Installing dependencies"
npm install

echo " - - - - - - - - - - - - - - - - - - - - - - - - - - - -"
echo "Configured! Please run npm start to start the application"

