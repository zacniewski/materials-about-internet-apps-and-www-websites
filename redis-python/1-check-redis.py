from redis import Redis
redis_connection = Redis()
print("Connected to Redis server: ", redis_connection.ping())

# można też w konsoli: redis-cli ping (PONG w odpowiedzi, jeśli OK)

# ps aux | grep redis (sprawdzenie danych o procesie Redisa)

# uruchomienie na innym porcie (6379 to nr domyślny): redis-server --port 6360
