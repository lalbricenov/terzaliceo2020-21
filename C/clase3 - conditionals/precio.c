#include <stdio.h>
#include <cs50.h>
#include <string.h>

int main(void)
{
    int edad = get_int("Ingrese su edad: ");
    string dia = get_string("Ingrese el dia: ");

    // strcmp sirve para comparar 2 cadenas de caracteres, da 0 si son iguales
    if(strcmp(dia,"lunes") == 0)
    {
        printf("ingresa gratis\n");
    }

}
