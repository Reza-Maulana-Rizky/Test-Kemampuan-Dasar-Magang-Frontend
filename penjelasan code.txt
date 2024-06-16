Penjelasan Struktur Kode:

1. index.html
- Menggunakan template dasar HTML5.
- Memuat Tailwind CSS dari CDN untuk styling.
- Struktur utama halaman termasuk container responsif untuk menampilkan postingan.
- Elemen div dengan id="posts" sebagai kontainer untuk postingan yang akan diisi melalui JavaScript.

2. script.js
- Menggunakan DOMContentLoaded event listener untuk memastikan script dijalankan setelah seluruh konten halaman dimuat.
- fetchPosts adalah fungsi async yang melakukan fetch data dari JSONPlaceholder API.
- Menggunakan fetch API untuk mengambil data postingan dan kemudian mem-parsing-nya sebagai JSON.
- Looping melalui setiap post dan membuat elemen HTML menggunakan JavaScript, kemudian menambahkan elemen tersebut ke dalam kontainer posts.
- Menangani error fetch dengan menampilkan pesan error di console.


link github Test-Kemampuan-Dasar-Magang-Frontend: 