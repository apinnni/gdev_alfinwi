interface User {
  id: number;
  username: string;
  email: string;
}

class UserAcc implements User {
  id: number;
  username: string;
  email: string;

  constructor(id: number, username: string, email: string) {
    this.id = id;
    this.username = username;
    this.email = email;
  }

  Profile(): void {
    console.log("Username: " + this.username);
    console.log("Email: " + this.email);
  }
}

const user1 = new UserAcc(1, "alfin", "alfin@email.com");
user1.Profile();
