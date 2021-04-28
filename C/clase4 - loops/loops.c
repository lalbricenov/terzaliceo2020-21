// Programa que calcule al suma 1 + 4 + 9 + 16 + 25 + ... + 10000

#include<stdio.h>
#include<cs50.h>

int main(void){
    // Necesito una variable para llevar la cuenta del total. Esta
    // variable la podemos llamar variable acumuladora.

    // tipo de variable: entero> integer: int
    int suma = 0;
    int nMax = 100;
    // BUCLE FOR: Usualmente se utiliza cuando sabemos cuantas veces vamos a
    // repetir algo.
    // bucle for> utilizando una variable para contar i.
    // i++ es lo mismo que i = i + 1
    // i < nMax es la condicion que se debe cumplir para que el bucle siga
    // repitiendose
    for( int i = 0; i <= nMax; i++ )
    {
        // printf("La suma actualmente es %d y le voy a sumar %d\n", suma, i*i);
        suma = suma + i*i;
    }

    printf("La suma total es %d\n", suma);

    // BUCLE WHILE: Usualmente se utiliza cuando no se sabe cuantas veces
    // se va a repetir

    // Buscamos un numero que sea divisible por 15 y divisible por 8

    // comienzo con el numero 1
    // pruebo si es divisible por 15 y por 40
    // si lo es, el programa acaba
    // si no lo es, aumento el numero en 1 y vuelvo al primer paso
    int numeroObjetivo = 1;

    // dentro de los parentesis debo escribir la condicion para que siga
    // repitiendose la linea 40
    while( !(numeroObjetivo % 40 == 0 && numeroObjetivo % 15 == 0) ){
        numeroObjetivo = numeroObjetivo + 1;
    }
    printf("El primer numero que es divisible entre 40 y entre 15 es %d\n", numeroObjetivo);
    // operador módulo: %. a%b da como resultado el residuo de dividir a entre
    // b de manera entera. Por ejemplo 15%4 ->

    // BUCLE DO WHILE> Se usa cuando no se sabe cuantas veces se va a repetir, pero
    // se sabe que se ejecutará por lo menos una vez. Es muy usado para recibir datos
    // de un usuario.

    // programa que le pide la edad a un usuario y la imprime.
    int edad;
    do{
        edad = get_int("Ingrese su edad: ");
    }while(edad < 0);// Mientras la edad NO  sea válida, debo pedirla de nuevo.

    printf("Su edad es %d\n", edad);

}