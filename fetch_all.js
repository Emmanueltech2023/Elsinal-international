const fs = require('fs');
const https = require('https');

function download(url, dest) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        fs.writeFileSync(dest, data);
        console.log('done ' + dest);
        resolve();
      });
    });
  });
}

async function run() {
  await download('https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2YwYWFiY2MzMTMyMDRmMTA4YTEwZGJkMGYwMjYzZDEyEgsSBxCMoJXk0BkYAZIBIwoKcHJvamVjdF9pZBIVQhM1NjYyMjQyNzM5ODY3ODIyNDYw&filename=&opi=89354086', 'c:/elsinal_website/services.html');
  await download('https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzhhY2RhNjkyYzQ5ZjRjNjJhMWRhOTAwZDhmMGMxZTRmEgsSBxCMoJXk0BkYAZIBIwoKcHJvamVjdF9pZBIVQhM1NjYyMjQyNzM5ODY3ODIyNDYw&filename=&opi=89354086', 'c:/elsinal_website/about.html');
  await download('https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzdmNDE3OTgwNzNjYTRmYWJiODNlN2MyYzQ0YTBlNzdkEgsSBxCMoJXk0BkYAZIBIwoKcHJvamVjdF9pZBIVQhM1NjYyMjQyNzM5ODY3ODIyNDYw&filename=&opi=89354086', 'c:/elsinal_website/contact.html');
}

run();
