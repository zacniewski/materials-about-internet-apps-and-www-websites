def add_one(number):
    return number + 1


print(add_one(2))


def say_hello(name):
    return f"Hello {name}"


def be_awesome(name):
    return f"Yo {name}, together we are the awesomest!"


def greet_bob(greeter_func):
    return greeter_func("Bob")


print(greet_bob(say_hello))


def parent():
    print("Printing from the parent() function")

    def first_child():
        print("Printing from the first_child() function")

    def second_child():
        print("Printing from the second_child() function")

    second_child()
    first_child()


print(parent())


def parent2(num):
    def first_child():
        return "Hi, I am Emma"

    def second_child():
        return "Call me Liam"

    if num == 1:
        return first_child
    else:
        return second_child


first = parent2(1)
second = parent2(2)

print(first)
print(second)

print(first())
print(second())

# first decorator
def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")

    return wrapper


def say_whee():
    print("Whee!")


say_whee = my_decorator(say_whee)
print(say_whee())
print(say_whee)

from datetime import datetime


def not_during_the_night(func):
    def wrapper():
        if 7 <= datetime.now().hour < 22:
            func()
        else:
            pass  # Hush, the neighbors are asleep

    return wrapper


def say_whee2():
    print("Whee!")


say_whee2 = not_during_the_night(say_whee2)
print(say_whee2())
print(say_whee2)


def my_decorator3(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")

    return wrapper


@my_decorator3
def say_whee3():
    print("Whee3!")


print(say_whee3())


from decorators import do_twice


@do_twice
def say_whee4():
    print("Whee4!")


print(say_whee4())
