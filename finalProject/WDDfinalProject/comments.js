let clicked = null;
let comments = [];
comments = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [];


setComment();

function toggleMenu() {
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");  
}

const addNewComment = document.getElementById('openComments');
const newCommentModal = document.getElementById('newComment');
const deleteCommentModal = document.getElementById('deleteComment');
let commentTitle = document.getElementById('commentTitle');

console.log(comments);
//Display the comments

function setComment() {
  if (comments.length > 0) {
    let commentList = document.querySelector('#commentList');
    commentList.innerHTML = '';

    comments.forEach( comment => {
      commentList.innerHTML += `<li>${comment.title}</li>`;

    }
    );
  }
}


  function saveComment() {
    if (commentTitle.value) {
      commentTitle.classList.remove('error');

      let commentText = document.querySelector("#commentTitle");
  
      comments.push({
        comment: Date.now(),
        // Date.now()
        title: commentTitle.value,
      });
      localStorage.setItem('comments', JSON.stringify(comments));
      setComment();
      
      
      // closeComment();
    } else {
      commentTitle.classList.add('error');
    }
  }

  function deleteComment() { //probably pass on comments from sveComment() 
    console.log(comments);
    // comments = comments.filter(e => e.comment !== clicked);
    // if (comments) {
    //   console.log('Comment is already here')
    // }
    localStorage.setItem('comments', JSON.stringify(comments));
    setComment();
    comments = [];
  }

  function initButtons() {
    document.getElementById('saveButton').addEventListener('click', saveComment);
    document.getElementById('deleteButton').addEventListener('click', deleteComment);

  }
  
  initButtons();
//   load();