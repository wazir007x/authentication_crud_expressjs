const jwt = require("jsonwebtoken");
const secret = "abhidalydfalwdgglwgadgw";

function setUser(user) {
 
  const payload = {
    _id: user._id,
    email: user.email,
    username: user.username,
  };
  return jwt.sign(payload, secret);
}
function getUser(token) {
  if (!token) return null;
  return jwt.verify(token, secret);
}

module.exports = {
  setUser,
  getUser,
};
