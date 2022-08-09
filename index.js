// const postNodes = document.querySelectorAll(".user-info");
// const postImagesNodes = document.querySelectorAll(".post-image");
// console.log(postImagesNodes);

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

// postNodes.forEach((postNode, i) => {
//   posts.forEach((el) => {
//     if (postNode.classList[1] === el.username) {
//       postNode.childNodes[1].style.background = `url(${el.avatar})`;
//       postNode.childNodes[1].style.backgroundSize = "cover";

//       postNode.childNodes[3].childNodes[1].textContent = el.name;
//       postNode.childNodes[3].childNodes[3].textContent = el.location;

//       console.log(postNode.childNodes);
//     }
//   });
// });
