var name = prompt("What is your Name? ");
var firstChar = name.slice(0,1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restName = name.slice(1,name.length)
var restName = restName.toLocaleLowerCase()
var capitalisedName = upperCaseFirstChar + restName;
alert("Hello, " + capitalisedName);