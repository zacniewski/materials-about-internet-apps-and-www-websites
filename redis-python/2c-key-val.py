from redis import Redis

redis_connection = Redis(decode_responses=True)

key = "some-key"
value = 55

key2 = "some-key2"
value2 = 123

redis_connection.set(key, value)
redis_connection.set(key2, value2)

print(redis_connection.get(key))

print(redis_connection.incr(key, 50))

print(redis_connection.decr(key, 23))