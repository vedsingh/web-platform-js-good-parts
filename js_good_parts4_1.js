//Functions
//Method Invocation Pattern
//function stored as property of object = method
MYAPP.myObject = {
  value: 0,
  increment: function(inc) {
    this.value += typeof inc === 'number' ? inc : 1;
  }
};
MYAPP.myObject.increment();
document.writeln(
  '\n result of method invocation without argument=' + MYAPP.myObject.value
);
MYAPP.myObject.increment(2);
document.writeln(
  'Result of method invocation with arg=' + MYAPP.myObject.value
);

//Funntion invocation Pattern
//when not a method i.e. not a property of object
MYAPP.printo = function(o) {
  var name;
  for (name in o) {
    if (typeof o[name] !== 'function') {
      document.writeln('props  ' + name + ': ' + o[name]);
    }
  }
};

MYAPP.sum1 = function(a, b, c) {
  var that = this;
  //this.printo(that);
  return a + b - c;
};
document.writeln('Function invocation=' + MYAPP.sum1(15, 10, 20));

var add = function(a, b) {
  return a + b;
};

//start of why this is to be mapped to that, page 28
MYAPP.myObject.double = function() {
  //Can not access this as this is global
  MYAPP.printo(this);
  JSON.stringify(this);
  var helper = function() {
    this.value = add(this.value, this.value);
  };
  helper(); // Invoke helper as a function.
};

MYAPP.myObject.double();
document.writeln(
  'No that=this, retains original value=3, MYAPP.myObject.value=' +
    MYAPP.myObject.value
);

MYAPP.myObject.double = function() {
  var that = this; // Workaround.
  MYAPP.printo(that);
  JSON.stringify(that);
  var helper = function() {
    that.value = add(that.value, that.value);
  };
  helper(); // Invoke helper as a function.
};

MYAPP.myObject.double();
document.writeln(
  'that=this,Doubles original value=6 MYAPP.myObject.value=' +
    MYAPP.myObject.value
);

//End of why this is to be mapped to that, page 28

//Constructor Invocation Patte
// Create a constructor function called Quo.
// It makes an object with a status property.
Quo = function(string) {
  this.status1 = string;
};
// Give all instances of Quo a public method
Quo.prototype.get_status = function() {
  return this.status1;
};

// Make an instance of Quo.
MYAPP.myQuo = new Quo('confused');
document.writeln('MYAPP.myQuo.get_status())=' + MYAPP.myQuo.get_status()); // confused

//apply invocation Pattern
var array = [3, 4];
var sum = add.apply(null, array);
document.writeln('sm=' + sum);
// Make an object with a status member.
var statusObject = {
  status1: 'A-OK'
};

// statusObject does not inherit from Quo.prototype,
// but we can invoke the get_status method on
// statusObject even though statusObject does not have
// a get_status method.
//document.writeln('bef' + MYAPP.myQuo.prototype.get_status;
var status = Quo.prototype.get_status.apply(statusObject);
document.writeln('prototype getStatus=' + status);
document.writeln(
  'MYAPP.myQuo.get_status()) after apply=' +
    MYAPP.myQuo.get_status.apply(statusObject)
); // status is 'A-OK'

//start with Arguments
MYAPP.sumAny = function() {
  var i,
    sum = 0;
  for (i = 0; i < arguments.length; i += 1) {
    if (typeof arguments[i] !== 'number') {
      document.writeln('need number');
      throw {
        name: 'TypeError',
        message: 'add needs numbers'
      };
    }

    sum += arguments[i];
  }
  return sum;
};

document.writeln('sum of any numbers=' + MYAPP.sumAny(4, 8, 15, 16, 'ved', 42));

document.writeln(
  'sum of any numbers2=' + MYAPP.sumAny(1, 2, 3, 4, 5, 6, 7, 8, 9)
);
