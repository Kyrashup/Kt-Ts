class User {
  static count: number = 0;

  protected _name: string;
  protected _login: string;
  protected _password: string;
  protected _grade: number;

  constructor(name: string, login: string, password: string, grade: number) {
    this._name = name;
    this._login = login;
    this._password = password;
    this._grade = grade;
    User.count++;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }

  get login(): string {
    return this._login;
  }

  get password(): string {
    return '********';
  }

  set password(newPassword: string) {
    this._password = newPassword;
  }

  showInfo(): void {
    console.log(`Name: ${this._name}, Login: ${this._login}`);
  }

  eq(otherUser: User): boolean {
    return this._grade === otherUser.getGrade();
  }

  lt(otherUser: User): boolean {
    return this._grade < otherUser.getGrade();
  }

  gt(otherUser: User): boolean {
    return this._grade > otherUser.getGrade();
  }

  getGrade(): number {
    return this._grade;
  }
}

class SuperUser extends User {
  static count: number = 0;

  private _role: string;

  constructor(name: string, login: string, password: string, role: string) {
    super(name, login, password, 0); // SuperUser grade is always 0
    this._role = role;
    SuperUser.count++;
  }

  get role(): string {
    return this._role;
  }

  set role(newRole: string) {
    this._role = newRole;
  }

  showInfo(): void {
    console.log(`Name: ${this._name}, Login: ${this._login}, Role: ${this._role}`);
  }
}

const user1 = new User('Paul McCartney', 'paul', '1234', 3);
const user2 = new User('George Harrison', 'george', '5678', 2);
const user3 = new User('Richard Starkey', 'ringo', '8523', 3);
const admin = new SuperUser('John Lennon', 'john', '0000', 'admin');

user1.showInfo();
admin.showInfo();

const userCount = User.count;
const superUserCount = SuperUser.count;

console.log(`Total regular users: ${userCount}`);
console.log(`Total super users: ${superUserCount}`);

console.log(user1.lt(user2));
console.log(admin.gt(user3));
console.log(user1.eq(user3));

user3.name = 'Ringo Starr';
user1.password = 'Pa$$w0rd';

console.log(user3.name);
console.log(user2.password);
console.log(user2.login);

try {
  throw new Error("Login change is not allowed!");
} catch (error) {
  console.log(error.message);
}

console.log(user3.getGrade());
