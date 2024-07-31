-- Create enum type for task status --
DO $$ BEGIN
    CREATE TYPE task_status AS ENUM ('pending', 'in_progress', 'completed');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- Create users table --
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password_hash VARCHAR(100) NOT NULL
);

-- Create tasks table --
CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    due_date DATE,
    status task_status NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Insert users --
INSERT INTO users (first_name, last_name, email, password_hash) VALUES
('John', 'Doe', 'john.doe@example.com', 'hashed_password_1'),
('Jane', 'Smith', 'jane.smith@example.com', 'hashed_password_2');

-- Insert tasks for user1 --
INSERT INTO tasks (user_id, title, description, due_date, status) VALUES
(1, 'Task 1 for John', 'Description for Task 1', '2024-08-01', 'pending'),
(1, 'Task 2 for John', 'Description for Task 2', '2024-08-02', 'completed'),
(1, 'Task 3 for John', 'Description for Task 3', '2024-08-03', 'in_progress'),
(1, 'Task 4 for John', 'Description for Task 4', '2024-08-04', 'pending'),
(1, 'Task 5 for John', 'Description for Task 5', '2024-08-05', 'completed');

-- Insert tasks for user2 --
INSERT INTO tasks (user_id, title, description, due_date, status) VALUES
(2, 'Task 1 for Jane', 'Description for Task 1', '2024-08-06', 'pending'),
(2, 'Task 2 for Jane', 'Description for Task 2', '2024-08-07', 'completed'),
(2, 'Task 3 for Jane', 'Description for Task 3', '2024-08-08', 'in_progress'),
(2, 'Task 4 for Jane', 'Description for Task 4', '2024-08-09', 'pending'),
(2, 'Task 5 for Jane', 'Description for Task 5', '2024-08-10', 'completed');
