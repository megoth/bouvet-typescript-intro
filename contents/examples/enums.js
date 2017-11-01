var SomeEnum;
(function (SomeEnum) {
    SomeEnum[SomeEnum["Foo"] = 0] = "Foo";
    SomeEnum[SomeEnum["Bar"] = 1] = "Bar";
    SomeEnum[SomeEnum["Baz"] = 2] = "Baz";
})(SomeEnum || (SomeEnum = {}));
var SomeEnumWithSetValues;
(function (SomeEnumWithSetValues) {
    SomeEnumWithSetValues["Foo"] = "foo";
    SomeEnumWithSetValues["Bar"] = "bar";
    SomeEnumWithSetValues["Baz"] = "baz";
})(SomeEnumWithSetValues || (SomeEnumWithSetValues = {}));
