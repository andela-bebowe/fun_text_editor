document.getElementById('heading').innerHTML = localStorage['title'] || "Your Heading goes here....";
document.getElementById('content').innerHTML = localStorage['content'] || "Your content goes here...";

document.getElementById('heading').addEventListener("keyup", function () {
  localStorage['title'] = document.getElementById('heading').innerHTML;
})

document.getElementById('content').addEventListener("keyup", function () {
  localStorage['content'] = document.getElementById('content').innerHTML;
})
