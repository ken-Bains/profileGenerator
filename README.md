# profileGenerator

## Summary 
Using node js, This bundle of joy will create a pdf of a users github profile information. 

## Link to site
https://github.com/ken-Bains/profileGenerator


## Technologies Used
- HTML - used to create elements on the DOM
- CSS - styles html elements on page
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages
- Bootstrap - front-end framework used to create modern websites and web apps.
- NodeJs - backend scripting language

## Code Snippet
```javascript
ipc.on('print-to-pdf', event => {
  const pdfPath = path.join(os.tmpdir(), 'some-ducking-pdf.pdf');
  const win = BrowserWindow.fromWebContents(event.sender);

  
  win.webContents.printToPDF({
    'printBackground': true,
  }, (error, data) => {
    if (error) return console.log(error.message);
    
    fs.writeFile(pdfPath, data, err => {
      if (err) return console.log(err.message);
      shell.openExternal('file://' + pdfPath);
      event.sender.send('wrote-pdf', pdfPath);
    })
    
  })
});


```
- The code snippit above was used to create a pdf file from a generated html.


## Author Links
[LinkedIn](https://www.linkedin.com/in/ken-bains)
[GitHub](https://github.com/ken-Bains)
