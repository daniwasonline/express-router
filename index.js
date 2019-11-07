const express = require("express");
const app = express();

app.use(express.static("src"));


app.get("/", function(request, response) {
  response.sendFile(__dirname + "/html/index.html");
});

app.get("/route/discord", function(request, response) {
  response.redirect("https://discordapp.com")
});

app.get("/route/twitter", function(request, response) {
  response.redirect("https://twitter.com")
});

app.get("/route/cloudflare", function(request, response) {
  response.redirect("https://cloudflare.com")
});

app.get("/route/apple", function(request, response) {
  response.redirect("https://apple.com")
});

app.get("/route/google", function(request, response) {
  response.redirect("https://google.com")
});

app.get("/route/google/country=GB", function(request, response) {
  response.redirect("https://google.co.uk")
});

app.get("/route/google/country=CA", function(request, response) {
  response.redirect("https://google.ca")
});

app.get("/route/google/country=FR", function(request, response) {
  response.redirect("https://google.fr")
});

app.get("/route/google/country=AU", function(request, response) {
  response.redirect("https://google.com.au")
});

app.get("/route/google/country=GB", function(request, response) {
  response.redirect("https://google.co.uk")
});

app.get("/route/google/country=US", function(request, response) {
  response.redirect("https://google.us")
});

app.get("/route/google/org=EU", function(request, response) {
  response.redirect("https://google.eu")
});

app.get("/route/youtube", function(request, response) {
  response.redirect("https://youtube.com")
});

app.get("/route/youtube/country=CA", function(request, response) {
  response.redirect("https://youtube.ca")
});

app.get("/route/youtube/country=GB", function(request, response) {
  response.redirect("https://youtube.co.uk")
});

app.get("/route/youtube/country=AU", function(request, response) {
  response.redirect("https://youtube.com.au")
});

app.get("/route/youtube/org=EU", function(request, response) {
  response.redirect("https://youtube.co.uk")
});
// Below are additions for v1.0.2


const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

