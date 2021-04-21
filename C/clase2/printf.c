#include <stdio.h>

int main(void)
{
    float nota = 8.7;
    float nota2 = 9.6;
    float nota3 = 6.5;
    // .1 indica que se presentara con un solo decimal.
    printf("Mis notas son %8.1f %5.1f %5.1f \n", nota, nota2, nota3);
    printf("Mis notas son %8.1f %5.1f %5.1f \n", nota*20000, nota2+3, nota3*7);
    printf("Mis notas son %8.1f %5.1f %5.1f \n", nota-2, nota2*0.5, nota3+5);
}