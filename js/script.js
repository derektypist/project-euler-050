// Set Up Prime Sieve
const NUMPRIMES = 1000000;
const PRIMES = [2];
const PRIMESIEVE = Array(Math.floor((NUMPRIMES-1)/2)).fill(true);
(function initPrimes(num) {
    const upper = Math.floor((num-1)/2);
    const sqrtUpper = Math.floor((Math.sqrt(num) - 1)/2);
    for (let i=0;i<=sqrtUpper;i++) {
        if (PRIMESIEVE[i]) {
            const prime = 2 * i + 3;
            PRIMES.push(prime);
            const primeSquaredIndex = 2 * i ** 2 + 6 * i + 3;
            for (let j=primeSquaredIndex;j<upper;j+=i) {
                PRIMESIEVE[j] = false;
            }
        }
    }

    for (let i= sqrtUpper + 1;i<upper;i++) {
        if (PRIMESIEVE[i]) PRIMES.push(2*i+3);
    }
})(NUMPRIMES);