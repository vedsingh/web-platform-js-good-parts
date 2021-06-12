document.writeln('Hello, world Through JS method!');

var empty_object = {};

var stooge = {
  firstName: 'Jerome',
  'last-name': 'Howard'
};

document.writeln('stooge.firstName=' + stooge.firstName);
document.writeln('stooge["last-name"]=' + stooge['last-name']); //since - is reserved, so we need to ""

var x = stooge;
x.nickName = 'Curly'; //variable by reference
document.writeln('stooge.nickName=' + stooge.nickName);

//prototype - used only for property/method retrieval
if (typeof Object.create !== 'function') {
  Object.create = function(o) {
    var F = function() {};
    F.prototype = o;
    return new F();
  };
} // setting protype as old object when creating another object based on an object

MYAPP.another_stooge = Object.create(stooge);

MYAPP.another_stooge['firstName'] = 'Harry';
document.writeln('another_stooge.firstName=' + MYAPP.another_stooge.firstName);
document.writeln(
  'another_stooge.nickName from prototype=' + MYAPP.another_stooge.nickName
);
stooge.profession = 'actor'; //dynamic prototype refers to property even after assigning after object creation
document.writeln(
  'another_stooge.profession from prototype=' + MYAPP.another_stooge.profession
);

//reflection
document.writeln(
  'typeof another_stooge.profession=' + typeof MYAPP.another_stooge.profession
);

document.writeln('stooge.hasOwnProperty=' + stooge.hasOwnProperty('nickName'));
document.writeln(
  'another_stooge.hasOwnProperty doesnot look at protypal chain=' +
    MYAPP.another_stooge.hasOwnProperty('nickName')
);

var name;
for (name in MYAPP.another_stooge) {
  if (typeof MYAPP.another_stooge[name] !== 'function') {
    document.writeln(
      'properties of another_stoodge ' +
        name +
        ': ' +
        MYAPP.another_stooge[name]
    );
  }
}
