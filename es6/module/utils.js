class BB {
  constructor() { };
  run() {
      console.log("run");
  };
}
console.log('dev');
export default class AA extends BB {
  constructor() {
      super();
  }
  do() {
      console.log("do it");
  };
}