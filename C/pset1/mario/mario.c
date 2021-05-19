#include <stdio.h>
#include <cs50.h>

// funcion que recibe dos numeros y dibuja un piso con la cantidad
// de numerales igual al numero, y la correspondiente cantidad de espacios
void piso(int nPiso, int height)
{
    // 1:    # -> nesp = height - nPiso, nAst = nPiso
    // 2:   ##
    // 3:  ###
    // 4: ####
    int nEsp = height - nPiso;
    // Dibujar nEsp espacios
    for (int i = 0; i < nEsp; i++)
    {
        printf(" ");
    }
    // Dibujar nPiso numerales
    for (int i = 0; i < nPiso; i++)
    {
        printf("#");
    }
    printf("\n");
}

int main(void)
{
    // recibir la altura del usuario
    int height;
    do
    {
        height = get_int("Ingrese la altura de la piramide: ");
    }
    while (height < 1 || height > 8);// height debe estar entre 1 y 8.

    for (int i = 1; i <= height; i++)
    {
        // Dibujar el piso i
        piso(i, height);
    }
}