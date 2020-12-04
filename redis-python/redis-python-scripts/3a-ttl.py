from redis import Redis
from time import sleep
from datetime import datetime

redis_connection = Redis(db=1, decode_responses=True)

redis_connection.setex("key", 30, "value")

"""
odpowiednik powyższego kodu:
redis_connection.set("key", "value")
redis_connection.expire("key", 30)
"""

print(datetime.now().time(), redis_connection.get("key"))
sleep(10)
print(datetime.now().time(), redis_connection.get("key"))
sleep(25)
print(datetime.now().time(), redis_connection.get("key"))