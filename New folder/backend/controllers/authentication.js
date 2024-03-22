import { accounts } from "../accounts.js";

export const loginController = async (req, res) => {
  try {
    if (!req.body.password) return res.status(400).send("No password found");
    if (!req.body.username) return res.status(400).send("No username found");

    const user = await accounts.find(
      (account) =>
        account.password === req.body.password &&
        account.username === req.body.username
    );

    if (user) return res.send(`Hello ${user.name}`);

    res.status(401).send("no account found");
  } catch (error) {
    res.status(500).send(new Error(error).message);
  }
};
export const signupController = (req, res) => {
  if (!req.body.password && !req.body.username && !req.body.name)
    return res.status(400).send("Incomplete data");
  accounts.push(req.body);
  res.send("New account created");
};

export const accountController = (req, res) => {
  res.send(accounts);
};
