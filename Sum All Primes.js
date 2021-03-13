function sumPrimes(num) {
  let store  = [];
  let primes = [];
    for (let i = 2; i <= num; i++) {
        if (!store[i]) {
            primes.push(i);
            for (let j = i * 2; j <= num; j += i) {
                store[j] = true;
            }
        }
    }
    return primes.reduce((a,b) => a+b);
  }
  console.log(sumPrimes(10));

// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself.
// For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
// W pierwowzorze w linii 6 jest for (j = i << 1; j <= num; j+=i)
// i << 1 to bitowe przesuwanie dowolnej wartości x w lewo o y bitów daje x * 2 ** y.
// Tak więc, przykładowo: 9 << 3 można przetłumaczyć jako: 9 * (2 ** 3) = 9 * (8) = 72.
// Pierwszy for robi tak, że leci od 2 do num i jeśli w storze nie ma jakiejś liczby to wrzuca ją do primes.
// Drugi for bierze wartość "i" i wylicza liczbę, która nie jest liczbą pierwszą (2*2 = 4, 4+2 = 6 etc) po czym stwierdza, że taka liczba jest w store (store[j] = true)
// Dlatego store[j] (czyli liczba nie będąca liczbą pierwszą) nie jest pchana do primes.