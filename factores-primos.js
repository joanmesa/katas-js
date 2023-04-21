/* Los factores primos de 230 son [ 2, 5, 23 ]

Los factores primos de un número entero son los 
números primos divisores exactos de ese número 
entero.

¿Cuál es son los factores primos de 666? */

let isPrime = num =>
    (checkPrime(1, num) == 2) ? true : false;

let checkPrime = (i, num) => {

    if (i > num) return 0;
    if (num % i == 0)
        return 1 + checkPrime((i + 1), num);
    return checkPrime((i + 1), num);
}

let primeFactors = num =>
    checkPrimeFactor(1, num);

let factorNumbers = [];

let checkPrimeFactor = (i, num) => {

    if (i > num) return factorNumbers;
    if (isPrime(i) && (num % i == 0)) {
        factorNumbers.push(i);
        return checkPrimeFactor((i + 1), num);
    }
    return checkPrimeFactor((i + 1), num);
}

console.log(primeFactors(666));
