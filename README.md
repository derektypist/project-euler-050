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

As a user, I expect to get an error message, if I do any of:

- Not enter anything in the input field
- Entering text other than a number
- Entering a number less than 100 or greater than 1000000
- Including leading zeros (e.g. 0100)
- Entering a number, but it is not an integer

As a user, I expect the function `consecutivePrimeSum(1000)` to return a number.

As a user, I expect the function `consecutivePrimeSum(1000)` to return 953.

As a user, I expect the function `consecutivePrimeSum(1000000)` to return 997651.

User Stories on function `consecutivePrimeSum(limit)` taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 050](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-50-consecutive-prime-sum)

**Information Architecture**

The function `consecutivePrimeSum(limit)` returns a number, where `limit` is a number.

## Features

Allows the user to enter the limit as well as getting the prime below the limit that can be written as the sum of the most consecutive primes.  Performs checks on valid user input.  If the input is not valid, an error message is displayed.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.2.2 and Google Fonts.

## Testing

Ensure all user stories have been met.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/project-euler-050) at the main branch.

## Credits

### Content

Written by me.

### Acknowledgements

- [Project Euler](https://projecteuler.net)
- [FreeCodeCamp](https://www.freecodecamp.org)

