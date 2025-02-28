# Use the official Node.js image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (to leverage caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application (if applicable)

# Expose the application's port
EXPOSE 3000

# Run the application
CMD ["node", "index.js"]

