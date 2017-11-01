var SomeClass = (function () {
    function SomeClass() {
        console.log('INITIALIZING STUFF');
    }
    SomeClass.someStaticMethod = function () {
        return 42;
    };
    return SomeClass;
}());
console.log(SomeClass.someStaticMethod()); // static methods, yay!
var SomeClassThatImplementsAnInterface = (function () {
    function SomeClassThatImplementsAnInterface() {
    }
    return SomeClassThatImplementsAnInterface;
}());
