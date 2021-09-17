import Head from "next/head";
function LandingPage() {
  interface user_information {
    username: string;
    password: string;
    balance: number;
  }
  const User_DB: user_information[] = [
    {
      username: "johnDoe",
      password: "john12",
      balance: 399,
    },
    {
      username: "jane-doe",
      password: "jane59",
      balance: 1132,
    },
    {
      username: "unknownUserName",
      password: "unknown",
      balance: 8,
    },
    {
      username: "kevin",
      password: "password",
      balance: 0,
    },
  ];

  function AuthUser(
    username,
    password
  ): { hasUser: boolean; balance: number | null } {
    for (var i = 0; i <= User_DB.length; i++) {
      if (username === User_DB[i].username) {
        if (password === User_DB[i].password) {
          return { hasUser: true, balance: User_DB[i].balance };
        }
      } else {
        return { hasUser: false, balance: null };
      }
    }
  }
  function ProcessTransaction(authResult, transactionAmount) {
    if (authResult.hasUser) {
      if (authResult.balance >= transactionAmount) {
        console.log("transaction completed");
      } else {
        console.log("insufficient fund");
      }
    } else {
      console.log("something went wrong");
    }
  }
  function RequestTransaction(username, password, transactionAmount): void {
    const authResult = AuthUser(username, password);
    console.log(authResult);
    ProcessTransaction(authResult, transactionAmount);
  }
  RequestTransaction("kevin", "john12", 2000);
  return <></>;
}
export default LandingPage;
