const User = require("../models/User");

async function login(req, res) {
  // const { username, password } = req.query;
  // console.log(req.query)

  // const found = data.find((user) => user.username === username && user.password === password);

  // found
  //   ? res.status(200).json({ access: true })
  //   : res.status(400).json({ access: false });

  const { username, password } = req.query;

  try {
    if (!username || !password) {
      return res.status(400).send("Faltan datos");
    }

    const usuario = await User.findOne({
      where: { username },
    });

    if (!usuario) {
      return res.status(404).send("Usuario no encontrado");
    }

    usuario.password === password
      ? res.status(200).json({ access: true })
      : res.status(403).send("Contraseña incorrecta");
  } catch (error) {
    res.status(500).json({error:error.message})
  }
}

module.exports = login;
