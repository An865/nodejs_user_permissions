/* Dependencies */
const express = require('express');
const app = express();
const {users} = require('./data');
const projectRouter = require('./routes/projects');
 //imported function defined in basicAuth.js
const {authUser} = require('./basicAuth');

app.use(express.json());
app.use(setUser); //see setUser below
app.use('./projects', projectRouter);

/* Routes */
app.get('/', (req, res)=> {
    res.send('Home Page');
});

app.get('/dashboard', authUser, (req, res) => {
    res.send('Dashboard Page');
});

app.get('/admin', (req, res) => {
    res.send('Admin Page');
});

/* set current user definitions*/
function setUser(req, res, next){
    const userId = req.body.userId;
    if(userId){
        req.user = users.find(user => user.id === user.id)
    }
    next();
}

app.listen(3000);