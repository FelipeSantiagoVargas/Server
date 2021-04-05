# Server
docker build -t server .

docker run -d --name server1 -p 3001:3000 Server
