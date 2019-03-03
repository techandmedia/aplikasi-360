Pada tombol hijau sebelah kanan yang bertuliskan **Clone or download**, pilih **Download Zip**

Extract file zip yang baru saja di download.

Buka folder tadi hingga tampak 2 folder:
1. client-aplikasi-360
2. server

Klik kanan di area kosong, pilih  `Open with Code`
Visual Studio akan terbuka, dengan 2 folder tampak di panel kiri, area kosong di panel tengah, dan area terminal di panel bawah atau kanan.

Pada area terminal, klik simbol `Split Terminal`
Jika kesulitan, arahkan mouse ke simbol, maka akan muncul keterangan simbol. Simblo `Split Terminal` biasanya berada di posisi sebelah kanan simbol `+`

Jika sudah, maka area terminal akan terbagi menjadi 2 bagian.

Pada area kiri, ketik secara berurutan, tekan enter untuk setiap baris instruksi.
1. `cd client-aplikasi-360` 
2. `npm install` 
3. Tunggu hingga proses selesai. Tanda bahwa proses telah selesai adalah kursor kembali berkedip. 
4. `npm start`
5. Aplikasi sedang coba dijalankan, dan jika telah siap, akan otomatis membuka browser default.
6. Terminal akan memberi tanda `Starting the development server...`
Lalu `Compiled Successfully` dan pesan lainnya. Tanda bahwa aplikasi siap beroperasi
7. Jika browser tidak membuka secara otomatis, buka browser, dan ketik alamat berikut pada address bar: `localhost: 3000`

Pada area kanan:
1. `cd server`
2. `npm install`
3. `npm start`
4. Terminal memberi pesan `Listening on port 5001`, tanda bahwa server telah siap.

