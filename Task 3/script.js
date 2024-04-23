// Parašykite JavaScript kodą, kuris leis vartotojui paspaudus ant mygtuko "Rodyti pranešimus"
// gauti pranešimų duomenis iš JSONPlaceholder API (API endpoint'as pateiktas žemiau).

// Paspaudus mygtuką "Rodyti pranešimus":

//     Pranešimų informacija turi būti pateikta <div id="output"></div> bloke.
//     1.1. Informacija, kuri turi būti pateikta: "title" ir "body" (kortelėje).
//     Žinutė "Paspauskite mygtuką "Rodyti pranešimus" norėdami pamatyti pranešimus" turi išnykti.

// Pastaba: Pranešimų informacija (kortelė) turi turėti bent minimalų stilių.

// API endpoint'as:
// const ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';


document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('btn');
    const output = document.getElementById('output');
    const message = document.getElementById('message');
  
    btn.addEventListener('click', function () {
      fetchPosts();
    });
  
    async function fetchPosts() {
      try {
        const ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
        const response = await fetch(ENDPOINT);
  
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
  
        const posts = await response.json();
        displayPosts(posts);
      } catch (error) {
        console.error('Error fetching posts:', error.message);
      }
    }
  
    function displayPosts(posts) {
      output.innerHTML = ''; // Clear previous content
      message.style.display = 'none'; // Hide the message
  
      posts.forEach(post => {
        const postCard = createPostCard(post);
        output.appendChild(postCard);
      });
    }
  
    function createPostCard(post) {
      const card = document.createElement('div');
      card.classList.add('card');
  
      const title = document.createElement('h2');
      title.textContent = post.title;
  
      const body = document.createElement('p');
      body.textContent = post.body;
  
      card.appendChild(title);
      card.appendChild(body);
  
      return card;
    }
  });
  