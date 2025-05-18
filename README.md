# 📇 Aplikasi Manajemen Kontak Terminal (Node.js)

Aplikasi ini merupakan program terminal berbasis Node.js untuk manajemen kontak sederhana. Dengan antarmuka berbasis CLI (Command Line Interface), kamu bisa dengan mudah menambahkan, melihat, dan menghapus data kontak langsung dari terminal.

## ✨ Fitur

- `add` – Menambahkan kontak baru (nama, email, dan nomor telepon)
- `list` – Menampilkan semua daftar kontak (hanya nama & nomor)
- `detail <nama>` – Menampilkan detail lengkap dari sebuah kontak
- `hapus <nama>` – Menghapus kontak berdasarkan nama

## 🚀 Cara Menjalankan

1. Clone repositori ini:
   ```bash
   git clone https://github.com/username/nama-repo.git
   cd nama-repo

2. Command
   
npm install
node app.js add --nama="<nama_kontak>" --email="<email(optional)>" --noHP="<noHP>"
node app.js list
node app.js detail --nama="nama_kontak"
node app.js hapus="<nama_kontak>"


📌 Catatan
- Pastikan nama kontak unik agar tidak tertimpa.
- Kontak disimpan secara lokal di file contacts.json.

  🧑‍💻 Kontribusi
Pull request selalu diterima! Jangan ragu untuk fork dan mengembangkan proyek ini.


Project Inspired By Sandhika Galih (WEB PROGAMMING UNPAS)
