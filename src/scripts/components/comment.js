const writeSingleComment = item => {
  const commentsWrapper = document.querySelector(".written-comments");
  const singleComment = `<div class="single-comment card">
    <div class="card-header d-flex justify-content-between flex-row">
      <div class="name">${item.name}</div>
      <div class="rating">${item.rating ? item.rating : ""}</div>
    </div>
    <div class="card-body">
      <div class="email">${item.email}</div>
      <div class="comment">${item.comment}</div>
    </div>
  </div>`;
  commentsWrapper.insertAdjacentHTML("afterend", singleComment);
};

export default writeSingleComment;
