# Backend Dockerfile
FROM node:16-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose port
EXPOSE 5000

# Command to run the application
CMD ["npm", "start"]
