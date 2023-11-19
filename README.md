# Task 1

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

# Task 2

To run and check the code for task 2, please run the following command
```bash
python task2.py
```
Here, I have used the following test cases:
```python
assert count_areas("1,0,1;0,1,0") == 3
assert count_areas("1,0,1;1,1,0") == 2
assert count_areas("1,1,1,0;0,1,0,0") == 1
```
If it does not print anything then it works fine. If it prints something then it means that the code is not working as expected.
