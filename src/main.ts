// import { closeSync, openSync, unlinkSync } from "node:fs";

// class TempFile implements Disposable {
//   #path: URL;
//   #fd: number;

//   constructor(path: string) {
//     this.#path = new URL(import.meta.dirname, path);
//     this.#fd = openSync(this.#path, "w+");
//   }

//   [Symbol.dispose](): void {
//     closeSync(this.#fd);
//     unlinkSync(this.#path);
//   }
// }

// const myTmp = new TempFile("./asdf");
console.log("before scope");
{
  using disposableStack = new DisposableStack();
  disposableStack.defer(() => {
    console.log("1 defer");
  });
  disposableStack.defer(() => {
    console.log("2 defer");
  });
}

console.log("after scope");
