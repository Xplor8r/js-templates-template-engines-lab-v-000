function postComment() {
  let pageTemplate = _.template(document.getElementById('page-template').innerHTML);
  let postTemplate = _.template(document.getElementById('post-template').innerHTML);
  let postTitle = document.getElementById("postTitle").value;
  let postAuthor = document.getElementById("postAuthor").value;
  let post = document.getElementById("postBody").value;
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
  let section = postTemplate({ 'title': postTitle, 'body': post, 'poster': postAuthor });
}

function createPost() {
  let commentTemplate = _.template(document.getElementById('comment-template').innerHTML);
  let commentsTemplate = _.template(document.getElementById('comments-template').innerHTML);
  let pageTemplate = _.template(document.getElementById('page-template').innerHTML);
  let postTemplate = _.template(document.getElementById('post-template').innerHTML);
  let postTitle = document.getElementById("postTitle").value;
  let postAuthor = document.getElementById("postAuthor").value;
  let post = document.getElementById("postBody").value;
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
  let section = postTemplate({ 'title': postTitle, 'body': post, 'poster': postAuthor });
  let comments = commentsTemplate();
  let postElement = document.getElementById("post");
  postElement.innerHTML = section;
  postElement.getElementsByTagName("footer")[0].innerHTML = comments;
}
