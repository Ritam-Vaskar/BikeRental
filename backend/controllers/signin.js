const handleSignin = async (req, res, db, bcrypt) => {
  const { name, password } = req.body;
  if (!name || !password) {
    return res.status(400).json('incorrect form submission');
  }
  let data = await db.findOne().where("name").equals(name).exec();

  if (bcrypt.compareSync(password,data.password)){
    res.status(200).json("Done");
  } else{
    res.status(400).json("Wrong");
  }
}
export default handleSignin;