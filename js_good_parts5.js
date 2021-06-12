//Ch 5. inheritance
//by augmenting Function.prototype, we can make a method available to all functions:
Function.prototype.method = function(name, func) {
  this.prototype[name] = func;
  return this;
};
//Inheritance pattern - pseudoclassical
MYAPP.myMammal = {
  name: 'Herb the mammal',
  get_name: function() {
    return this.name;
  },
  says: function() {
    return this.saying || 'NO SAYING';
  }
};
document.writeln(
  '\nmyMammal name=' +
    MYAPP.myMammal.name +
    ' getName=' +
    MYAPP.myMammal.get_name() +
    ' says=' +
    MYAPP.myMammal.says()
);

MYAPP.myCat = Object.create(MYAPP.myMammal);
document.writeln(
  'myCat with no overriding name=' +
    MYAPP.myCat.name +
    ' getName=' +
    MYAPP.myCat.get_name() +
    ' says=' +
    MYAPP.myCat.says()
);
//pseudoclassical myCat constructor function had to duplicate work that was done by the Mammal constructor to set all variables and methods to ovberride differences
MYAPP.myCat.name = 'cat';
MYAPP.myCat.saying = 'Meow';
MYAPP.myCat.get_name = function() {
  return this.says() + ' ' + this.name + ' ' + this.says();
};

document.writeln(
  'myCat name=' +
    MYAPP.myCat.name +
    ' getName=' +
    MYAPP.myCat.get_name() +
    ' says=' +
    MYAPP.myCat.says()
);

//Functional Pattern
//no access to private variable
MYAPP.mammal = function(spec) {
  var that = {};
  that.get_name = function() {
    return spec.name;
  };
  that.says = function() {
    return spec.saying || 'NOSAYING';
  };
  return that;
};

MYAPP.myMammal = MYAPP.mammal({ name: 'cow' });
document.writeln(
  '\nmyMammal name=' +
    MYAPP.myMammal.name +
    ' getName=' +
    MYAPP.myMammal.get_name() +
    ' says=' +
    MYAPP.myMammal.says()
);
//Inheritance - Functional Pattern  - myCat will just need to overrite what it needs to change, rest depend upon myMammal constructor
MYAPP.cat = function(spec) {
  spec.saying = spec.saying || 'Meow';
  var that = MYAPP.mammal(spec);
  that.get_name = function() {
    return that.says() + ' ' + spec.name + ' ' + that.says();
  };
  return that;
};
MYAPP.myCat = MYAPP.cat({ name: 'Henry' });
document.writeln(
  'myCat name=' +
    MYAPP.myCat.name +
    ' getName=' +
    MYAPP.myCat.get_name() +
    ' says=' +
    MYAPP.myCat.says()
);
//support super... method concept
Object.method('superior', function(name) {
  var that = this;
  method = that[name];
  return function() {
    return method.apply(that, arguments);
  };
});

//using coolcat which uses super.get_name to return a cooler get_name
MYAPP.coolcat = function(spec) {
  var that = MYAPP.cat(spec);
  document.writeln('that get_name=' + that.get_name());
  super_get_name = that.superior('get_name');
  document.writeln('super_get_name=' + super_get_name);
  that.get_name = function(n) {
    return 'like ' + super_get_name() + ' baby';
  };
  document.writeln('superior get_name=' + that.get_name());
  return that;
};

MYAPP.mycoolcat = MYAPP.coolcat({ name: 'Bix' });
document.writeln(
  'mycoolcat name=' +
    MYAPP.mycoolcat.name +
    ' getName=' +
    MYAPP.mycoolcat.get_name() +
    ' says=' +
    MYAPP.mycoolcat.says()
);

//Parts Come back
