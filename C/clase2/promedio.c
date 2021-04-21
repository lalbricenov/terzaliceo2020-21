// Programa que recibe 3 notas del usuario y le muestra el promedio
#include <stdio.h>
#include <cs50.h>

int main(void)
{
    // get_float recibe un numero de tipo float del usuario. Le muestra al usuario un mensaje.
    float nota1 = get_float("Ingrese la primera nota: ");
    float nota2 = get_float("Ingrese la segunda nota: ");
    float nota3 = get_float("Ingrese la tercera nota: ");

    printf(" Su promedio es %f \n", (nota1 + nota2 + nota3)/3);
    printf ("Su promedio es (%f+%f+%f)/3 \n", nota1, nota2, nota3);
    printf("su promedio es %5.1f \n", (nota1 + nota2 + nota3)/3);
    printf("su promedio es %f \n", (nota1+nota2+nota3)/3);
    printf("su promedio es %5.1f", (nota1+nota2+nota3)/3);
    printf(" Su promedio es %f \n", (nota1 + nota2 + nota3)/3);
    printf("promedio: %5.1f", (nota1 + nota2 + nota3)/3);
    printf(" Su promedio es %f\n", (nota1 + nota2 + nota3)/3);
    printf("El promedio es %5.1f %5.1f%5.1f\n", nota1/3, nota2/3, nota3/3);
    printf("Su promedio es %.1f\n", (nota1 + nota2 + nota3)/3);
}