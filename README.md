# Project Euler 050 - Consecutive Prime Sum

The prime 41, can be written as the sum of six consecutive primes:

    2 + 3 + 5 + 7 + 11 + 13 = 41

This is the longest sum of consecutive primes that adds to a prime below one-hundred.

The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.

Which prime, below one-million, can be written as the sum of the most consecutive primes?

Information at [Project Euler 050](https://projecteuler.net/problem=50)

## UX

**Getting Started**

Enter the limit as a whole number between 100 and 1000000 (without leading zeros) and click on the Submit Button.  You will see the prime below the limit that can be written as the sum of the most consecutive primes, unless you have made an invalid input.  For example, if you entered 1000, you would expect the result to be 953.  Click on the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect the function `consecutivePrimeSum(1000)` to return a number.

As a user, I expect the function `consecutivePrimeSum(1000)` to return 953.

As a user, I expect the function `consecutivePrimeSum(1000000)` to return 997651.

User Stories on function `consecutivePrimeSum(limit)` taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 050](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-50-consecutive-prime-sum)

**Information Architecture**

The function `consecutivePrimeSum(limit)` returns a number, where `limit` is a number.

