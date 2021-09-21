#include <stdio.h>
#include <stdlib.h>

int main() {
    int x,y;

    printf("Enter a number: \n");
    scanf("%d", &x);
    printf("Enter another number here: \n");
    scanf("%d", &y);

    printf("You entered %d and %d!\n", x, y);

    return 0;
}

