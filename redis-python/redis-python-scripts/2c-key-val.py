from redis import Redis

redis_connection = Redis(db=1, decode_responses=True)

key = "some-key-B2"
value = 100

key2 = "some-key3"
value2 = 123

redis_connection.set(key, value)
redis_connection.set(key2, value2)

print(redis_connection.get(key))

print(redis_connection.incr(key, 50))

print(redis_connection.decr(key, 23))