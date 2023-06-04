const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs'); 

app.listen(port, () => {
  console.log(`Server running on http://localhost: ` + port);
});

app.get('/', (req, res) => {
  res.render('bmi', { age: '', weight: '', height: '', bmi: '' });
});




app.post('/', (req, res) => {
  const age = parseFloat(req.body.age);
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);
//Formula: weight (kg) / [height (m)]2
  const heightInMeters = height / 100;

  let result = weight / (heightInMeters * heightInMeters);
  let bmi = "Your Result is: " + result.toFixed(2);

  

  res.render('bmi', { age, weight, height, bmi }); 
});

