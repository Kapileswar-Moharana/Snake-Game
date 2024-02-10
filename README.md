1.#include <stdio.h>
int main() {    

    int number1, number2, sum;
    
    printf("Enter two integers: ");
    scanf("%d %d", &number1, &number2);

    // calculate the sum
    sum = number1 + number2;      
    
    printf("%d + %d = %d", number1, number2, sum);
    return 0;
}
2.
#include <stdio.h>      
int main() {
  short a;
  long b;
  long long c;
  long double d;

  printf("size of short = %d bytes\n", sizeof(a));
  printf("size of long = %d bytes\n", sizeof(b));
  printf("size of long long = %d bytes\n", sizeof(c));
  printf("size of long double= %d bytes\n", sizeof(d));
  return 0;
}
3.
#include <stdio.h>

int main() {

    double num;
    printf("Enter a number: ");
    scanf("%lf", &num);
    if (num <= 0.0) {
        if (num == 0.0)
            printf("You entered 0.");
        else
            printf("You entered a negative number.");
    } 
    else
        printf("You entered a positive number.");

    return 0;
}
6.
#include <stdio.h>  
#include <conio.h>  
int main ()  
{  
    char upr, lwr; // declare variables  
    int ascii;  
      
    // convert in lower case  
    printf (" Enter the Upper Case Character: ");  
    scanf (" %c", &upr);  
    ascii = upr + 32;  
    printf (" %c character in Lower case is: %c", upr, ascii);  
      
    // convert in upper case  
    printf (" \n Enter the Lower Case Character: ");  
    scanf (" %c", &lwr);  
    ascii = lwr - 32;  
    printf (" %c character in the Upper case is: %c", lwr, ascii);  
      
    return 0;  
}  
4.
#include <stdio.h>

int main() {

  double n1, n2, n3;

  printf("Enter three different numbers: ");
  scanf("%lf %lf %lf", &n1, &n2, &n3);

  // if n1 is greater than both n2 and n3, n1 is the largest
  if (n1 >= n2 && n1 >= n3)
    printf("%.2f is the largest number.", n1);

  // if n2 is greater than both n1 and n3, n2 is the largest
  if (n2 >= n1 && n2 >= n3)
    printf("%.2f is the largest number.", n2);

  // if n3 is greater than both n1 and n2, n3 is the largest
  if (n3 >= n1 && n3 >= n2)
    printf("%.2f is the largest number.", n3);

  return 0;
}
5.
#include<stdio.h>
int main(){
   float fahrenheit, celsius;
   //get the limit of fibonacci series
   printf("Enter Fahrenheit: ");
   scanf("%f",&fahrenheit);
   celsius = (fahrenheit - 32)*5/9;
   printf("Celsius: %f ", celsius);
   return 0;
}
