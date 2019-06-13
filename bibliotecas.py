import math
import random as rnd
from hashlib import sha256
import boba

alpha = list((a/10)*2*math.pi for a in range(11))
print(alpha)
print(list(map(math.cos, alpha)))
print(math.sin(2*math.pi))

def dado():
    """
    Simula dado de seis faces
    """
    return rnd.randint(1, 6)

for i in range(10):
    print(dado())

print(sha256(b'Luigi Negrini').hexdigest())

print(boba.quadrado(2))