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

// Function to check if number num is prime
function isPrime(num) {
    if (num===2) {
        return true;
    } else if (num % 2===0) {
        return false;
    } else {
        return PRIMESIEVE[parseInt((num-3)/2)];
    }
}

// Function to Get Limit Information (including Invalid Input)
function getLimitInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mylimit").value;
    // Check if the input is valid
    if (isNaN(num) || num.length == 0 || num<100 || num>1000000 || (num.length > 1 && num[0] == "0") || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 100 and 1000000.  Do not include leading zeros.`;
    } else {
        txt += `You have entered the limit ${num}. <p>`;
        txt += `Prime below ${num} is ${consecutivePrimeSum(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("limitinfo").innerHTML = txt;
}

/*
    Function to return the biggest prime below the limit that can be written
    as the sum of the most consecutive primes

    consecutivePrimeSum(1000)    returns 953
    consecutivePrimeSum(1000000) returns 997651
*/
function consecutivePrimeSum(limit) {
    let bestPrime = 41;
    let bestI = 0;
    let bestJ = 5;
    let sumCurrRange = 41;
    let i=0, j=5;
    while (sumCurrRange < limit) {
        let currSum = sumCurrRange;
        while (currSum < limit) {
            if (isPrime(currSum)) {
                bestPrime = sumCurrRange = currSum;
                bestI = i;
                bestJ = j;
            }
            j++;
            currSum += PRIMES[j];
        }
        i++;
        j = i + (bestJ - bestI);
        sumCurrRange -= PRIMES[i-1];
        sumCurrRange += PRIMES[j];
    }
    return bestPrime;
}