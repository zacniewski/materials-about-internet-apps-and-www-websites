from redis import Redis

redis_connection = Redis(decode_responses=True,db=1)  # <- tu zmiana!

key4 = "some-key4"
value4 = "some-val4-new"

redis_connection.set(key4, value4)
print(redis_connection.get(key4))