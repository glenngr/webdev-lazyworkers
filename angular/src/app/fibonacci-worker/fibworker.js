addEventListener('message', function (e) {
    console.log('incoming msg', e);
    var data = e.data;
    switch (data.cmd) {
        case 'generate':
            postMessage(generateFibonacciSeries(data.msg));
    }
}, false);
function generate(n) {
    return this.generateFibonacciSeries(n);
}
function calculateNextFibonacciValue(n) {
    var s = 0;
    var returnValue;
    if (n == 0) {
        return (s);
    }
    if (n == 1) {
        s += 1;
        return (s);
    } else {
        return (this.calculateNextFibonacciValue(n - 1) + this.calculateNextFibonacciValue(n - 2));
    }
}
function generateFibonacciSeries(n) {
    var results = [];
    for (var i = 0; i <= n - 1; i++) {
        results.push(this.calculateNextFibonacciValue(i));
    }
    console.log(results);
    return results;
}
