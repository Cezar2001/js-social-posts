const post = [
    {
     id: 1,
     user: 'Phil Mangione',
     photoUser: 'https://unsplash.it/300/300?image=15',
     time: '6/25/2021',
     text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam ut alias.',
     image: 'https://unsplash.it/600/300?image=171',
     likes: 80, 
    },
    {
    id: 2,
    user: 'Sofia Perlari',
    photoUser: 'https://i.picsum.photos/id/125/300/300.jpg?hmac=R1k4kK1IgxKAFUvlCA1xc9XluTnPdCPj4gXH3zpUPSc',
    time: '3/9/2021',
    text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam ut alias.',
    image: 'https://i.picsum.photos/id/726/300/300.jpg?hmac=Yj8I6sABVPTHMMKzS-ORuF7u4ZfuedIGc3EbPZUY6xg',
    likes: 120, 
    }
]

const container = document.getElementById('container');

function userShare(container, post) {
  
    for (let i = 0; i < post.length; i++) {
      const userMember = post[i];
    
      container.innerHTML += 
      `<div class="post">
      <div class="post__header">
          <div class="post-meta">                    
              <div class="post-meta__icon">
                  <img class="profile-pic" src="${userMember.photoUser}" alt="${userMember.user}">                    
              </div>
              <div class="post-meta__data">
                  <div class="post-meta__author">${userMember.user}</div>
                  <div class="post-meta__time">${userMember.time}</div>
              </div>                    
          </div>
      </div>
      <div class="post__text">${userMember.text}</div>
      <div class="post__image">
          <img src="${userMember.image}" alt="">
      </div>
      <div class="post__footer">
          <div class="likes js-likes">
              <div class="likes__cta">
                  <a class="like-button  js-like-button" href="#" data-postid="1">
                      <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                      <span class="like-button__label">Mi piace</span>
                  </a>
              </div>
              <div class="likes__counter">
                  Piace a <b id="like-counter-1" class="js-likes-counter">${userMember.likes}</b> persone
              </div>
          </div> 
      </div>            
  </div>`
    } 

    let x = 0;
    let likeButton = document.querySelectorAll(".like-button");
    for (let i = 0; i < post.length; i++) {
        likeButton[i].addEventListener("click", function () {
            if (x % 2 == 0) {
                this.classList.add("like-button--liked");
                x++;
            } else {
                this.classList.remove("like-button--liked");
                x--;
            }
        });    
    }
}


userShare(container, post)