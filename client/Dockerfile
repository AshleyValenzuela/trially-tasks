# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory inside the container
WORKDIR /client

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Ensure that the `node_modules/.bin` directory is in the PATH
ENV PATH /client/node_modules/.bin:$PATH

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 3000 to the host
EXPOSE 3000

# Start the application using the 'dev' script from package.json
CMD ["npm", "run", "dev"]
