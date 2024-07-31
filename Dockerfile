# Use the official Node.js 20 Alpine base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json file to the working directory
COPY package*.json ./

COPY .npmrc ./

# Install dependencies using npm
RUN npm install

# Copy the TypeScript configuration file (tsconfig.json) to the container
COPY tsconfig.json ./tsconfig.json

# Copy the source code from the host to the container
COPY src ./src

# Define the default command to run when the container starts
CMD ["npm", "run", "start"]