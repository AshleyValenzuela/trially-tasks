# Use the official Node.js image as the base image
FROM --platform=linux/amd64 node:18 AS builder

# Create a non-root user
RUN useradd -m vscode

# Set the working directory
WORKDIR /

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY src /app

# Build the Next.js application
RUN npm run build

# Change ownership of the app directory to the vscode user
RUN chown -R vscode:vscode /

# Use a smaller image for the final stage
FROM node:18

# Create a non-root user
RUN useradd -m vscode

# Set the working directory
WORKDIR /

# Copy the built files from the previous stage
COPY --from=builder /public public
COPY --from=builder /package*.json ./
COPY --from=builder /next.config.mjs ./
COPY --from=builder /src src

# Install production dependencies
RUN npm install --only=production

# Change ownership of the app directory to the vscode user
RUN chown -R vscode:vscode /

# Switch to the non-root user
USER vscode

# Expose port 3000 for the application
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]