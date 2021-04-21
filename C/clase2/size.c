#include <stdio.h>

int main(void)
{
    int nota;
    float nota2 = 9.7;
    double pi = 3.14159;
    char inicial = 'l';

    printf("El tamaño de un entero es %lu bytes\n", sizeof(nota));
    printf("El tamaño de un float es %lu bytes\n", sizeof(nota2));
    printf("El tamaño de un double es %lu bytes\n", sizeof(pi));
    printf("El tamaño de un char es %lu bytes\n", sizeof(inicial));

}