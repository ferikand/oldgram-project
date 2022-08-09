const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const header = document.querySelectorAll("header");
const postEl = document.createElement("section");
postEl.classList.add("post-content");
const containerEl = document.querySelector(".container");

posts.forEach((el, i) => {
  postEl.innerHTML += `
    
        <div class="user-info ${el.username}">
          <div class="avatar" style='background-image: url(${el.avatar}' )></div>
          <div class="user-data">
            <p class="name">${el.name}</p>
            <p class="location">${el.location}</p>
          </div>
        </div>
        <div class="post-image" style='background-image: url(${el.post}'></div>
        <div class="body">
            <div class="icons">
                <div class="like"></div>
                <div class="comment"></div>
                <div class="share"></div>
            </div>
            <p class="like-count">${el.likes} likes</p>
            <p class="username-caption">${el.username} <span class="thin-text">${el.comment}</span></p>
        </div>        
    
  `;
});

containerEl.appendChild(postEl);
