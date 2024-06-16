document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk mengambil data postingan dari API JSONPlaceholder
    async function fetchPosts() {
      try {
        // Melakukan permintaan fetch ke API
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        // Mengubah respons menjadi format JSON
        let posts = await response.json();
  
        // Memilih kontainer untuk postingan
        const postsContainer = document.getElementById('posts');
        
        // Loop melalui setiap post dan membuat elemen HTML
        posts.forEach(post => {
          // Membuat elemen div untuk setiap post
          let postElement = document.createElement('div');
          postElement.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-md');
          
          // Membuat elemen h2 untuk judul post
          let postTitle = document.createElement('h2');
          postTitle.classList.add('text-xl', 'font-semibold', 'mb-2');
          postTitle.textContent = post.title;
          
          // Membuat elemen p untuk isi post
          let postBody = document.createElement('p');
          postBody.classList.add('text-gray-700');
          postBody.textContent = post.body;
  
          // Menambahkan judul dan isi post ke dalam elemen div post
          postElement.appendChild(postTitle);
          postElement.appendChild(postBody);
  
          // Menambahkan elemen div post ke dalam kontainer posts
          postsContainer.appendChild(postElement);
        });
      } catch (error) {
        // Menangani error jika terjadi masalah saat fetch data
        console.error('Error mengambil data postingan:', error);
      }
    }
  
    // Memanggil fungsi fetchPosts ketika halaman selesai dimuat
    fetchPosts();
  });
  