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