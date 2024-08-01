# Use the official Python image
FROM python:3.11-slim

ARG USERNAME=vscode

# Set the working directory in the container to be the same as the host
WORKDIR /server

# Copy the requirements file
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . .

# Create a non-root user and group
RUN groupadd -r $USERNAME && useradd -r -g $USERNAME $USERNAME

# Change ownership of the app directory to the non-root user
RUN chown -R $USERNAME:$USERNAME .

# Switch to the non-root user
USER $USERNAME

# Expose the port FastAPI runs on
EXPOSE 8000

# Command to run the FastAPI application using Python
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]

