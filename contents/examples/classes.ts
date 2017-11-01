class SomeClass {
  constructor() {
    console.log('INITIALIZING STUFF');
  }

  public static someStaticMethod() {
    return 42;
  }
}

console.log(SomeClass.someStaticMethod()); // static methods, yay!

interface ISomeInterface {
  foo: boolean;
  bar: number;
}

class SomeClassThatImplementsAnInterface implements ISomeInterface{
  foo: true;
  bar: 42;
}