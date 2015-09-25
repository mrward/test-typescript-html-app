abstract class A {
  foo(): number { return this.bar(); }
  abstract bar(): number;
}

var a = new A();  // error, Cannot create an instance of the abstract class 'A'

class B extends A {
  bar() { return 1; }
}

var b = new B();  // success, all abstracts are defined