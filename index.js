const express = require('express');
const app = express();
const fs = require('fs');
const promisify = require('util').promisify
const readFile = promisify(fs.readFile);
const appendFile = promisify(fs.appendFile);

// test

app.get('/write/:text', async (req, res) => {
    const { text } = req.params;
    await appendFile(fileName, `${text}\n`);
    res.send(`Adding '${text}' to ${fileName}`);
});


app.get('/read', async (req, res) => {
    const text = await readFile(fileName, 'utf8');
    res.send(text);
});

app.listen(5000, ()=> {
    console.log('listening on port 5000');
});
