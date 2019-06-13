# tipos de dados:
a = None
if a is None:
    print("Nada!")

b = list(i for i in range(5))
b = None
if not (b is None):
    print(b)

lista = [2,3,4,5]
tupla = tuple() #tupla vazia
tupla = (2,3,4,5)
print(lista, tupla)

dic = dict() #dicionário vazio
dic = {
    'zero' : 0,
    'um' : 1,
    'dois' : 2,
    'três' : 3,
} 
print(dic['dois'])
msg = 'Custa dois reais'
novamsg = []
for palavra in msg.split():
    if palavra in dic.keys():
        novamsg.append(str(dic[palavra]))
    else:
        novamsg.append(palavra)
novamsg = ' '.join(novamsg)
print(novamsg)

dic = {
    "I'm" : "Eu estou",
    "green" : "verde",
    "apple" : "maçã",
    "eating" : "comendo",
    "a" : "uma"
}
msg = "I'm eating a green apple"
traducao = []
for palavra in msg.split():
    if palavra in dic.keys():
        traducao.append(dic[palavra])
    else:
        traducao.append(palavra)
print(' '.join(traducao))
print(dic.values())
print(dic.items())




def mapear(funcao, lista):
    """
    aplica funcao em cada elemento de lista;
    retorna lista com resultados
    """
    return list(funcao(elemento) for elemento in lista)

def quadrado(x):
    """
    retorna quadrado de x
    """
    return x**2

def raiz(x):
    """
    retorna raiz de x
    """
    return x**0.5

lista = list(i for i in range(11))
print(lista)
print(mapear(quadrado, lista))
print(mapear(raiz, lista))
