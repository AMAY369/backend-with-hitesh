import express from 'express';
const app = express();
const port = process.env.PORT || 3000;


app.get('/api/jokes',(req,res)=>{
  const jokes = [
    {
      id:1,
      title: 'joke1',
      content: 'First Joke'
    },
    {
      id:2,
      title: 'joke2',
      content: 'Second Joke'
    },
    {
      id:3,
      title: 'joke3',
      content: 'Third Joke'
    },
    {
      id:4,
      title: 'joke4',
      content: 'Fourth Joke'
    },
    {
      id:5,
      title: 'joke5',
      content: 'Fifth Joke'
    },
  ]
  res.send(jokes)

});

app.listen(port,()=>{
  console.log(`serve at http://localhost:${port}`);
})