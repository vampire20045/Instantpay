# Use official Node.js image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire project
COPY . .

# Build the frontend
RUN npm run build

RUN npm run dev
# Expose port 80
EXPOSE 5173
CMD ["npm", "run", "dev"]

