// Uso de variables en C

#include<stdio.h>

int main(void)
{
    // Para crear una variable se especifica primero su tipo
    // tipos de variable disponibles:
    // int: numero entero
    // float: numero con decimales. De punto flotante.
    // double: numero con decimales, de doble precisión
    // char: caracter

    int edad = 15;
    float nota = 8.7;
    double radio = 3.123464521341;
    char inicial = 'L';

    // donde aparece %d va a ir el valor de una variable de tipo int
    // \n genera un cambio de linea.
    printf("Mi edad es %d años, mi nota es %f \n", edad, nota);

}