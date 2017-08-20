var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = { 
'article-one' :{
    title : 'article-one | venugopal',
    heading : 'Article one',
    date : 'Oct 5, 2017',
    content : `
    <p>
                this is the content for my  first article.  this is the content for my  first article.  this is the content for my  first article. 
                 this is the content for my  first article.  this is the content for my  first article. 
                  this is the content for my  first article.  this is the content for my  first article.  this is the content for my  
                  first article. 
            </p>
            
            <p>
                This is the content for my first article..Second Paragraph.. This is the content for my first article..Second Paragraph..
                 This is the content for my first article..Second Paragraph..
                  This is the content for my first article..Second Paragraph.. This is the content for my first article..
                  Second Paragraph..Second paragraph finished.
            </p>`
},
'article-two' : { 
     title : 'article-two | venugopal',
    heading : 'Article two',
    date : 'Oct 10, 2017',
    content : `
    <p>
                this is the content for my  second article. this is the content for my  second article.
                 this is the content for my  second article.
                  this is the content for my  second article. this is the content for my  second article. this is the content for my  second article.
                  First paragraph.
            </p>
            
            <p>
                                  Second Paragraph..Second paragraph finished.
            </p>`
},
'article-three' :{
     title : 'article-three | venugopal',
    heading : 'Article three',
    date : 'Oct 15, 2017',
    content : `
    <p>
                this is the content for my  Third article.  First paragraph
            </p>
            
            <p>
                This is the content for my  Third article.  First paragraph
                  Second Paragraph..Second paragraph finished.
            </p>`
}
};

function createtemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
            var htmltemplate = `
                <html>
                    <head>
                    <title>
                     ${title}
                </title>
                <meta name="viewport" content="width=device-width,initial-scale=1"/>
                <link href="/ui/style.css" rel="stylesheet" />
                </head>
                <body>
                <div class = "container">
                <div>
                <a href = "/"> Home </a>
                </div>
                <hr/>
                <h3>
                ${heading}
                </h3>
                <div>
                ${date}
                </div>
                <div>
                ${content}
                  </div>
                  </div>
                </body>
                </html>`;
return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/:articlename',function (req,res) {
    //articlename==article-one
    //articles[artclename]=={} content object for article -one
    var articlename = req.params.articlename;
     res.send(createtemplate(articles[articlename]));
});
app.get('/article-two',function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three',function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'Article-three.html'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
