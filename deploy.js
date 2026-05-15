#!/usr/bin/env node
const { exec } = require('child_process');
const path = require('path');

const buildDir = path.join(__dirname, 'build');
const repoUrl = 'git@github.com:FlapjackUWINFO2023/FlapJack.git';

const command = `git config --global --add safe.directory "${buildDir}" && cd "${buildDir}" && git init && git remote add origin ${repoUrl} && git config user.email "action@github.com" && git config user.name "GitHub Action" && git add -A && git commit -m "Deploy to GitHub Pages" && git branch -M main && git push -f -u origin main:gh-pages`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error('Deployment failed:');
    console.error(stderr || error.message);
    process.exit(1);
  }
  console.log(stdout);
  console.log('✓ Deployment successful!');
  process.exit(0);
});
