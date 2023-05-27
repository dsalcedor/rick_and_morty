const User = require("../models/User");

async function postUser(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send("Faltan datos");
  }

  try {
    const usuario = await User.create({
      username,
      password,
    });
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

}
