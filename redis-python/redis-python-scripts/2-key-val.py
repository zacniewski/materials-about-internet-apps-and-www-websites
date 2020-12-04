from redis import Redis

redis_connection = Redis(db=1)

key3 = "grupa B2"
value3 = "185IC B2"

redis_connection.set(key3, value3)
print(redis_connection.get(key3))