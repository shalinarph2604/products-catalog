# 🛒 MagangHub Mini Project

Project ini adalah mini assignment untuk proses rekrutmen MagangHub. Aplikasi dibangun menggunakan **React.js**, **Vite**, dan **Tailwind CSS**, dengan konsumsi data dari API publik **DummyJSON**.

Aplikasi menampilkan katalog produk lengkap dengan gambar, judul, deskripsi, harga, rating, dan status ketersediaan stok.

---

## 🚀 Tech Stack

* **React.js (Vite)** – Frontend framework
* **Tailwind CSS** – Styling utility-first
* **JavaScript / TypeScript (opsional)**
* **DummyJSON API** – Sumber data produk

---

## 📦 Fitur Utama

* Fetch data produk dari API: `https://dummyjson.com/products`
* Menampilkan daftar produk dalam bentuk katalog grid
* UI responsif (mobile & desktop)
* Menampilkan elemen produk:

  * Gambar
  * Judul
  * Deskripsi
  * Harga
  * Rating (bintang)
  * Badge "Low Stock" jika stok menipis
* Hover effect dan tampilan modern menggunakan Tailwind CSS

---

## 🛠 Cara Menjalankan Project

### 1. Clone repository

```
git clone https://github.com/USERNAME/REPO.git
cd REPO
```

### 2. Install dependencies

```
npm install
```

### 3. Jalankan aplikasi

```
npm run dev
```

Aplikasi akan berjalan di:

```
http://localhost:5173/
```

---

## 🌐 API Endpoint

Data diambil dari DummyJSON:

```
GET https://dummyjson.com/products
```

Contoh data produk:

* id
* title
* description
* images
* price
* availabilityStatus
* rating

---

## 🖼 Preview UI

Tampilan sederhana katalog produk dengan kartu responsif dan badge status stok.

Jika deployed, link demo dapat ditambahkan di sini:

```
https://your-domain.vercel.app
```

---

## 📁 Struktur Folder

```
project-folder/
│── src/
│   ├── App.jsx
│   ├── components/
│   ├── index.css
│── public/
│── package.json
│── vite.config.js
│── README.md
```

---

## 🙋‍♀️ Tentang Developer

Project ini dikerjakan oleh **Shalina Arpheliasari** untuk kebutuhan proses rekrutmen MagangHub.

Jika ada catatan, feedback, atau revisi yang diperlukan, saya terbuka untuk melakukan perbaikan.

---

Terima kasih 🙏
