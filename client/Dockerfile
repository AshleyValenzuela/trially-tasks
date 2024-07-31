# Use the official Node.js image as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY src ./

# Build the Next.js application
RUN npm run build

# Install production dependencies
RUN npm install --only=production

# Create a non-root user and group
RUN groupadd -r vscode && useradd -r -g vscode vscode

# Change ownership of the app directory to the vscode user
RUN chown -R vscode:vscode ./

# Switch to the non-root user
USER vscode

# Expose port 3000 for the application
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "dev"]