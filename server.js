/* Dependencies */
const express = require('express');
const app = express();
const {ROLE, users} = require('./data');
 //imported function defined in basicAuth.js
const {authUser, authRole} = require('./basicAuth');
const projectRouter = require('./routes/projects');

app.use(express.json());
app.use(setUser); //see setUser below
app.use('/projects', projectRouter);

/* Routes */
app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/dashboard', authUser, (req, res) => {
  res.send('Dashboard Page')
})

app.get('/admin', authUser, authRole(ROLE.ADMIN), (req, res) => {
  res.send('Admin Page')
})

/* set current user definitions*/
function setUser(req, res, next) {
    const userId = req.body.userId
    if (userId) {
      req.user = users.find(user => user.id === userId)
    }
    next();
  }

app.listen(3000);