// Array: estructura de datos en la cual se pueden almacenar
// varios elementos del mismo tipo.
// {15, 16, 15, 16, 18, 20, 13, 12}

#include <stdio.h>
#include <cs50.h>

int main(void){
    // tipo nombre[tamaño]
    //integer: entero
    int edades[20];// espacio para guardar 20 números enteros

    // Puedo guardar los valores en el array uno por uno
    edades[0] = 15;// Esto guarda el número 15 en la primera posición
    edades[1] = 14;// Esto guarda el número 14 en la segunda posición
    //...

    printf("La primera edad es %d\n", edades[0]);
    printf("La segunda edad es %d\n", edades[1]);
    // estas edades no han sido establecidas, el valor que está allí
    // guardado es aleatorio, depende del programa anterior que haya
    // usado esa posición en la memoria ram.
    printf("La tercera edad es %d\n", edades[2]);
    printf("La cuarta edad es %d\n", edades[3]);
    printf("La quinta edad es %d\n", edades[4]);
    printf("La sexta edad es %d\n", edades[5]);
    printf("La septima edad es %d\n", edades[6]);
    printf("La edad numero 20 es %d\n", edades[19]);

    // Vamos a tratar de acceder a la edad numero 21
    // printf("La edad numero 21 es %d\n", edades[20]);

    // Vamos a preguntarle al usuario cuál edad quiere ver:
    int pos = get_int("Ingrese la posición de la edad que quiere ver: ");
    printf("La edad solicitada es %d\n", edades[pos]);

    // Vamos a ver las direcciones de memoria.
    // Para ver la posición en la cual está guardada una variable
    // se utiliza el operador &
    // Por ejemplo, vamos a ver dónde está guardada la variable pos.
    printf("La posición de memoria es de la variable pos es %p\n", &pos);
    // 0x indica que lo que sigue es un número en base 16

    // vamos a ver a qué hace referencia el nombre del array
    printf("El nombre del array hace referencia a %p\n", edades);
    // Puedo ver qué cosa está guardada en una posición de memoria usando
    // el operador *
    printf("El valor guardado en esa posición de memoria es %d\n", *edades);
    printf("El valor guardado en la siguiente posición es %d\n", *(edades+1));

}
