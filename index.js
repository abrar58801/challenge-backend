const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' }));

const port = 5000
const users = [
    {email:'abrar@gmail.com', pass:'123456'},
    {email:'test@gmail.com', pass:'12345'},
];
const apiData = [{ data: [4, 3, 5], label: 'Ranjit' }, { data: [1, 6, 3], label: 'Suresh' }, { data: [2, 5, 6], label: 'Rajan' }];

function checkLogin(data){
  let result = 0;
  users.forEach(user => {
    if(user.email == data.email && user.pass == data.password){
      result = 1;
    }
  });
  return result;
}

app.get('/data', (req,res) => {
  res.json(apiData);
})


app.post('/login', (req, res) => {
  const body = req.body;
  res.json({status:checkLogin(body)});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})