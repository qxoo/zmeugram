class UserController {
  async CreateUser(req, res) {
    const { name, surname } = req.body
    console.log(name, surname)
    res.json('ok')
  }
  async getUser(req, res) {}
  async getAllUsers(req, res) {}
  async UpdateUser(req, res) {}
  async DeleteUser(req, res) {}
}
module.exports = new UserController()
