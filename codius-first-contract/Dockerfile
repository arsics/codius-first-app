# Moneyd requires NodeJS 8.9.0 and above
FROM node:8.9.0

# The working/home directory of our application inside the container
WORKDIR /app

# Add the contents of our current directory into the /app folder of our container
ADD . /app

# Install dependencies from package.json using npm
RUN npm install --only=production

# Make port 1337 available to the outside world
EXPOSE 1337

# Run the command 'npm start' which will start our server.js file
CMD [ "npm", "start" ]