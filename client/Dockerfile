# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container to be the same as the host
WORKDIR /client

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .
# Build the Next.js application
RUN npm run build

# Install production dependencies
# (--only=production flag will ingore devdependencies
# but otherwise dev packages and prod are the same)
RUN npm install --only=production

# Create a non-root user and group
RUN groupadd -r vscode && useradd -r -g vscode vscode

# Change ownership of the app directory to the vscode user
RUN chown -R vscode:vscode ./

# Switch to the non-root user
USER vscode

# Expose port 3000 for the application
EXPOSE 3000

# Start the Next.js app (in dev mode for now but should `CMD ["npm", "start"]` for prod set in .env.prod)
CMD ["npm", "run", "dev"]