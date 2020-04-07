var mongoose = require("mongoose");

var Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const bcrypt = require("bcrypt");
mongoose.promise = Promise;

const userSchema = new Schema({
  local: {
    username: { type: String, unique: true, required: true },
    password: { type: String, unique: false, required: true }
  }
})

userSchema.methods = {
  checkPassword: function(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.local.password)
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
  }
}

const User = mongoose.model("Users", userSchema);
User.plugin(passportLocalMongoose);

module.exports = User;