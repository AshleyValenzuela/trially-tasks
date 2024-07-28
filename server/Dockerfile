# Use the official Python image
FROM python:3.11-slim

ARG USERNAME=vscode

# Set the working directory
WORKDIR /app

# Copy the requirements file and install dependencies
COPY requirements.txt /app/

# Copy the application code
COPY app /app
RUN pip install --no-cache-dir -r requirements.txt

USER $USERNAME

# Expose the port FastAPI runs on
EXPOSE 8000

# Command to run the FastAPI application
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
