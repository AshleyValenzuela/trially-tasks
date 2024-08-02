# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory inside the container
WORKDIR /client

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# # Build the Next.js application (typically only needed in prod environments and not dev where live-reloading happens)
# RUN npm run build

# Install production dependencies
# RUN npm install --only=production

# Create a non-root user and group
RUN groupadd -r vscode && useradd -r -g vscode vscode

# Change ownership of the app directory to the vscode user
RUN chown -R vscode:vscode ./

# Switch to the non-root user
USER vscode

# Expose port 3000 to the host
EXPOSE 3000

# Start the application using the 'dev' script from package.json
CMD ["npm", "run", "dev"]
