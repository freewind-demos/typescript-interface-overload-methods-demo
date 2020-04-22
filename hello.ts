interface User {
  hello(name: number): void;

  hello(name: string): void;

  hello(name: number | string): void;
}

class DefaultUser implements User {
  hello(name: number | string) {
    if (typeof name === 'string') {
      console.log(`Hello, ${name} (string)`);
      return;
    }
    console.log(`Hello, ${name} (number)`);
  }
}


const user: User = new DefaultUser();
user.hello('aaa');
user.hello(111);
