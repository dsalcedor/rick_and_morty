const data = require("../utils/users");

function login(req, res) {
  const { email, password } = req.query;

  const found = data.find((user) => {
    user.email === email && user.password === password;
  });

  found
    ? res.status(200).json({ access: true })
    : res.status(400).json({ access: false });
}

module.exports = login;
