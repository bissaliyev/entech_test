# Use an official Python runtime as a parent image
FROM python:3.12

# Set environment varibles
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /code

# Copy project files
COPY pyproject.toml poetry.lock /code/

# Install  Poetry and dependencies
RUN pip install poetry &&  \
    poetry config virtualenvs.create false &&  \
    poetry install --no-interaction --no-ansi

# Copy project
COPY . /code/

# Run the application
CMD ["poetry", "run", "python", "manage.py", "runserver", "0.0.0.0:8000"]
