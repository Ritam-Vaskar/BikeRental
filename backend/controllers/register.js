const handleRegister = (req, res, db, bcrypt) => {
  const { email, phone, name, dl, password} = req.body;
  if (!email || !phone || !name || !password || !dl) {
    return res.status(400).json('incorrect form submission');
  }

  const hash = bcrypt.hashSync(password);
  
  db.create({
    email:email,
    phone:phone,
    name:name,
    image:dl,
    password:hash,
    isadmin:false
  })
  .then(() => res.status(200).json("Created"))
  .catch((e) => res.status(400).json(e));
    
  }

export default handleRegister;