const fs = require('fs');
const https = require('https');
const url = 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2NmZDI2NDA1ZjFmMTQ5Njc5YzRkNjdmMjc1ZjI5ZjFiEgsSBxCMoJXk0BkYAZIBIwoKcHJvamVjdF9pZBIVQhM1NjYyMjQyNzM5ODY3ODIyNDYw&filename=&opi=89354086';

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    fs.writeFileSync('c:/elsinal_website/new_stitch.html', data);
    console.log('done');
  });
});
