# Server
docker build -t server .

docker run -dit --rm --name server1 -p 3001:3000 --network clocks server
