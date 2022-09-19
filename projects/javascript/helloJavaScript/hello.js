const sayHello = () => {
  console.log('Hello, World!');
}
let i = 0;
while (i < 10) {
  i++;
  return sayHello();
}
