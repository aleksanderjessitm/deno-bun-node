import { bench, group } from 'https://esm.sh/mitata';

group("Deno.js: Fibonacci", () => {
    bench("5", () => fib(5))
    bench("10", () => fib(10))
    bench("20", () => fib(20))
    bench("40", () => fib(40))
    bench("80", () => fib(80))
})