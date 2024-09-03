console.log("before scope");
{
  using disposableStack = new DisposableStack();
  disposableStack.defer(() => {
    console.log("1 defer");
  });
  disposableStack.defer(() => {
    console.log("2 defer");
  });
  console.log("after defers")
}
console.log("after scope");
