# Use Node.js 18 with Alpine Linux
FROM node:18-alpine

# Set the working directory
WORKDIR /dashboard_app

# Copy package.json and package-lock.json (if exists)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install


# Copy the rest of the application files
COPY . .

EXPOSE 5173

# Start the development server
CMD ["npm", "run", "dev", "--", "--host","0.0.0.0"]
