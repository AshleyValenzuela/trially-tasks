# Use the official Python image
FROM python:3.11-slim

ARG USERNAME=vscode

# Set the working directory
WORKDIR /app

# Copy the requirements file, app code, and install dependencies
COPY requirements.txt .
COPY app .
RUN pip install --no-cache-dir -r requirements.txt

# Create a non-root user and group
RUN groupadd -r $USERNAME && useradd -r -g $USERNAME $USERNAME

# Change ownership of the app directory to the non-root user
RUN chown -R $USERNAME:$USERNAME .

# Switch to the non-root user
USER $USERNAME

# Expose the port FastAPI runs on
EXPOSE 8000

# Command to run the FastAPI application using Python
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]

