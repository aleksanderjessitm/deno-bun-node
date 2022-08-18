// Code is from https://stackoverflow.com/a/51111896

function fib(n) {

    const result = [0, 1];
    for (var i = 2; i < n; i++) {
        result.push(result[i - 2] + result[i - 1]);
    }
    return result; // or result[n-1] if you want to get the nth term

}