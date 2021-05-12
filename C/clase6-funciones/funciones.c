// En este programa voy a explicar lo que es una función, la sintaxis
// para escribirla, y la manera de usarlas.

#include <stdio.h>
#include <cs50.h>
// Una función es un conjunto de instrucciones que cumple una tarea,
// al cual se le da un nombre. El objetivo es poder realizar esta
// tarea sin tener que escribir de nuevo todas las instrucciones.

// función que dibuje un piso
// Definición de la función:

// tipoResultado nombreFuncion(tipoArgumentos){
    //cuerpo de la funcion
//}
void piso(void){// esta función no da nada como resultado y no
                // recibe nada como argumentos.
    printf("||-------|_|-------|_|-------||\n");
    printf("||---------------------------||\n");
}

// función que dibuje el techo
void techo(void){
    // printf("                   _.-'_'-._\n");
    // printf("                .-'_.-';'-._'-._\n")
    printf("||^^^^^^^^^^^^^^^^^^^^^^^^^^^||\n");
    // printf("   -------------------------\n");
    // printf("  /                         \\\n");
    // printf(" /                           \\\n");
    // printf("/                             \\\n");
}

// función que dibuje el primer piso.

void primerPiso(void)
{
    // printf("||-------------|   |--------------||\n");
    // printf("||-------------__------------||\n");
    // printf("||------------| *|-----------||\n");
    // printf("||------------|__|-----------||\n");

    printf("||------------|  |-----------||\n");
    printf("||------------|_*|-----------||\n");

    // printf("||------------|  |-----------||\n");
    // printf("||------------|  |-----------||\n");

    // printf("||            ___            ||\n");
    // printf("||            |+|            ||\n");
    // printf("||____________| |____________||\n");
}

// Voy a crear una función que cree un edificio del número de pisos
// deseado
void edificio(int nPisos){
    if(nPisos < 1){
    // si el número de pisos es menor a 1, mostrar error
      printf("Error, el número de pisos no puede ser menor a 1.\n");
    }
    else{
        // en otro caso, dibujar el edificio.
        techo();
        // la funcion piso() se debe utilizar nPisos - 1 veces.
        // for, while, do while.
        for (int i = 0; i < nPisos - 1; i++){
            piso();
        }
        primerPiso();
    }
}

// main es un nombre de función reservado.
int main(void)
{
    int pisos = get_int("Ingrese el número de pisos deseados: ");
    edificio(pisos);// Se le debe pasar un dato, un argumento.

    return 0;// esto es opcional en la funcion main
}
//ABSTRACCIÓN:darle un nombre a las cosas para poder ignorar los detalles.