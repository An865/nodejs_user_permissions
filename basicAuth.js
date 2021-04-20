//middleware to determine if user exists and if logged in
function authUser(req, res, next) {
    if (req.user == null) {
      res.status(403);
      return res.send('You need to sign in');
    }
  }

// export function
module.exports = {
    authUser
  }