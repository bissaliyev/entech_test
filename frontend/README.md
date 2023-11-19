1. Follow instruction on the website to install it Poetry package management [Poetry](https://python-poetry.org/docs/#installation). 
2. Install dependencies
```bash
poetry install
```
3. Run migration to create DB schemas in SQLite and spin up the backend server
```bash
poetry run python manage.py migrate
poetry run python manage.py runserver 0.0.0.0:8000
```
Backend will be serving data on http://localhost:8000

4. Open another terminal and run the frontend app
```bash
npm install
npm run start
```

Frontend will be running on http://localhost:3000

Swagger will be available on http://localhost:8000/swagger