build:
    docker build -t react-fastapi-container .

start:
    docker run --rm -it -p 8000:80 react-fastapi-container
