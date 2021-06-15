//converted from typescript_html.ts
'use strict';
//exports.__esModule = true;
// Import stylesheets
//require('./style.css');
// Write TypeScript code!
var textToWrite = '';
var appDiv = document.getElementById('app');
textToWrite = '<h1>TypeScript Starter</h1>\n';
function greeter(person) {
  return 'Hello ' + person;
}
var user = 'Jane User';
textToWrite = textToWrite + greeter(user) + '<br>';
textToWrite = textToWrite + greeter(20) + '<br>';
function greeterPerson(person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var greeterUser = { firstName: 'Jane', lastName: 'Smile' };
textToWrite = textToWrite + greeterPerson(greeterUser) + '<br>';
var Student = /** @class */ (function() {
  var that = this;
  function Student(firstName, middleInitial, lastName) {
    this.firstName = firstName;
    this.middleInitial = middleInitial;
    this.lastName = lastName;
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
  }
  return Student;
})();
var studentUser = new Student('Jane', 'M', 'Smith');
document.writeln('t=' + studentUser.firstName);
textToWrite = textToWrite + greeterPerson(studentUser) + '<br>';
appDiv.innerHTML = textToWrite;

var StudentX = function(firstName, middleName, lastName) {
  var that = {};
  var fnm = 'LOCALVAR'; //can't access directly as .fnm since it is local
  mdm = middleName; // can access directly as .mdm since on that
  that.getFnm = function() {
    return fnm;
  };
  that.getFirstNameArg = function() {
    return firstName;
  };
  that.getMdm = function() {
    return that.mdm;
  };
  that.getMiddleNameArg = function() {
    return middleName;
  };
  that.getLastName = function() {
    return lastName;
  };

  return that;
};
//var jbj = new StudentX({ firstName: 'FIRST', middleName:'MIDDLE', lastName: 'LAST' });
var jbj = new StudentX('FIR', 'MID', 'LST');
document.writeln('<br>jbj.fnm=' + jbj.fnm + '=jbj.mdm=' + jbj.mdm);
document.writeln(
  '<br>jbj.getFnm=' +
    jbj.getFnm() +
    '=jbj.getFirstNameArg()=' +
    jbj.getFirstNameArg() +
    '=jbj.getMdm=' +
    jbj.getMdm() +
    '=jbj.getMiddleNameArg()' +
    jbj.getMiddleNameArg() +
    '=jbj.getLastName()=' +
    jbj.getLastName()
);
