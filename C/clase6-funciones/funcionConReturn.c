#include <stdio.h>
#include <math.h>
#include <cs50.h>
// Programa que calcula la posición de un objeto dada su velocidad y
// posición inicial, y el tiempo.

double pos(double x0, double v0, double t){
    return x0 + v0*t;
}

int main(void){
    double x0 = get_double("Ingrese la posicion inicial: ");
    double v0 = get_double("Ingrese la velocidad: ");
    double t = get_double("Ingrese el tiempo: ");

    printf("La posición actual de la partícula es %f m\n", pos(x0, v0, t));
}