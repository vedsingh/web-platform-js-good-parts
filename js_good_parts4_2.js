//Adding a method to hide prototype property to augment typeof
Function.prototype.method = function(name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func;
    return this;
  }
  return this;
};
//this avoids having to write Number.prototype.integer
Number.method('integer', function() {
  return Math[this < 0 ? 'ceil' : 'floor'](this);
});

document.writeln('(-10/3).integer()=' + (-10 / 3).integer());

Number.prototype.nextNum = function() {
  var that = this;

  return ++that;
};

document.writeln('(-15).nextNum=' + (-15).nextNum());

//Recursion Hanoi problem - come back again
var hanoi = function(disc, src, aux, dst) {
  if (disc > 0) {
    document.writeln('ds=' + disc);
    hanoi(disc - 1, src, dst, aux);
    document.writeln('Move disc ' + disc + ' from ' + src + ' to ' + dst);
    hanoi(disc - 1, aux, src, dst);
  }
};

document.writeln('hanoi with 2 disks=' + hanoi(2, 'post1', 'post2', 'post3'));

// Make a factorial function with tail
// recursion. It is tail recursive because
// it returns the result of calling itself.
// JavaScript does not currently optimize this form.
var factorial = function factorial(i, a) {
  a = a || 1;
  if (i < 2) {
    return a;
  }
  return factorial(i - 1, a * i);
};
document.writeln('factorial(4)=' + factorial(4)); // 24

//Closure
var quo = function(status) {
  return {
    get_status: function() {
      return status;
    }
  };
};
// Make an instance of quo.
var myQuo = quo('amazed');
document.writeln('myQuo.getStatus()=' + myQuo.get_status());

//another closure example - don't have access to value directly to assign value like in js_good_parts2.js
MYAPP.myObject = (function() {
  var value = 0;
  return {
    increment: function(inc) {
      value += typeof inc === 'number' ? inc : 1;
    },
    getValue: function() {
      return value;
    }
  };
})();

MYAPP.myObject.increment();
document.writeln(
  '\n MYAPP.myObject.value=' +
    MYAPP.myObject.value +
    '\n MYAPP.myObject.getValue()=' +
    MYAPP.myObject.getValue()
);

MYAPP.myObject.increment(2);
document.writeln(
  '\n MYAPP.myObject.value=' +
    MYAPP.myObject.value +
    '\n MYAPP.myObject.getValue()=' +
    MYAPP.myObject.getValue()
);

//Memoization
//how many times it is called
MYAPP.fibonnaciCounter = 0;
MYAPP.fibonacci = function(n) {
  MYAPP.fibonnaciCounter++;
  return n < 2 ? n : MYAPP.fibonacci(n - 1) + MYAPP.fibonacci(n - 2);
};

for (var i = 0; i <= 10; i += 1) {
  document.writeln('// ' + i + ': ' + MYAPP.fibonacci(i));
}
document.writeln(
  'before memoization MYAPP.fibonnaciCounter=' + MYAPP.fibonnaciCounter
);

//use Memoization
MYAPP.fibonnaciCounter = 0;

MYAPP.fibonacci = (function(n) {
  var memo = [0, 1];
  document.writeln('cll'); //this part is being called only once  since it is just initialization of object which is once.
  ++MYAPP.fibonnaciCounter; //it remains one - since it is just initialization of object which is once.

  var fib = function(n) {
    var result = memo[n];
    if (typeof result !== 'number') {
      result = fib(n - 1) + fib(n - 2);
      memo[n] = result;
    }
    return result;
  };
  return fib;
})();

for (var i = 0; i <= 10; i += 1) {
  document.writeln('// ' + i + ': ' + MYAPP.fibonacci(i));
}
document.writeln('MYAPP.fibonnaciCounter=' + MYAPP.fibonnaciCounter);

//MODULE comeback
