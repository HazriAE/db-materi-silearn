const aljabrLinear = {
  "_id": {
    "$oid": "6852ff09a2a90cf8f316a07e"
  },
  "judul": "Aljabar Linear",
  "bab": [
    {
      "judulBab": "Konsep Dasar",
      "urutan": 1,
      "subab": [
        {
          "judulSubab": "Pengertian dan Ruang Lingkup",
          "urutan": 1,
          "konten": [
            {
              "tipe": "teks",
              "data": "# Pengertian\nAljabar Linear adalah cabang matematika yang mempelajari vektor, matriks, dan sistem persamaan linear.",
              "urutan": 1
            },
            {
              "tipe": "teks",
              "data": "## Ruang Lingkup\n- Matriks dan operasinya\n- Transformasi linear\n- Sistem persamaan linear (SPL)",
              "urutan": 2
            }
          ]
        }
      ]
    },
    {
      "judulBab": "Operasi Dasar Matriks",
      "urutan": 2,
      "subab": [
        {
          "judulSubab": "Jenis-Jenis Matriks",
          "urutan": 1,
          "konten": [
            {
              "tipe": "teks",
              "data": "## Matriks Nol\nMatriks nol adalah matriks yang semua elemen penyusunnya nol.",
              "urutan": 1
            },
            {
              "tipe": "gambar",
              "data": "https://res.cloudinary.com/djnxdkqyz/image/upload/v1751025615/matrix-nol_ysu6zu.jpg",
              "urutan": 13
            },
            {
              "tipe": "teks",
              "data": "## Matriks Baris\nMatriks baris yaitu matriks yang elemen penyusunnya terdiri dari satu baris.",
              "urutan": 2
            },
            {
              "tipe": "code",
              "data": "[2 3 4]",
              "urutan": 3
            },
            {
              "tipe": "teks",
              "data": "## Matriks Kolom\nMatriks kolom merupakan matriks yang elemen penyusunnya terdiri dari satu kolom.",
              "urutan": 4
            },
            {
              "tipe": "gambar",
              "data": "https://res.cloudinary.com/djnxdkqyz/image/upload/v1751026062/column-matrix_g75oyx.png",
              "urutan": 14
            },
            {
              "tipe": "teks",
              "data": "## Matriks Persegi\nMatriks persegi adalah matriks yang mempunyai banyak baris sama dengan banyaknya kolom.",
              "urutan": 5
            },
            {
              "tipe": "teks",
              "data": "## Matriks Diagonal\nMatriks diagonal adalah matriks yang mempunyai elemen selain diagonal utamanya nol.",
              "urutan": 6
            },
            {
              "tipe": "teks",
              "data": "## Matriks Identitas\nMatriks identitas adalah matriks skalar yang elemen pada diagonal utamanya sama dengan satu.",
              "urutan": 7
            },
            {
              "tipe": "teks",
              "data": "## Matriks Simetri\nMatriks simetri merupakan matriks persegi yang setiap elemennya selain elemen diagonal adalah simetri terhadap diagonal utama.",
              "urutan": 8
            },
            {
              "tipe": "teks",
              "data": "## Matriks Segitiga Atas\nMatriks segitiga atas adalah matriks persegi yang elemen-elemen di bawah diagonal utamanya adalah nol.",
              "urutan": 9
            },
            {
              "tipe": "teks",
              "data": "## Matriks Segitiga Bawah\nMatriks segitiga bawah adalah matriks persegi yang elemen-elemen di atas diagonal utamanya adalah nol.",
              "urutan": 10
            },
            {
              "tipe": "teks",
              "data": "## Matriks Transpose\nMatriks transpose merupakan matriks yang diperoleh dari memindahkan elemen-elemen baris menjadi elemen pada kolom atau sebaliknya. Transpose matriks A dilambangkan dengan Aᵗ.",
              "urutan": 11
            },
            {
              "tipe": "code",
              "data": "Ordo dari Aᵗ adalah 2×3",
              "urutan": 12
            }
          ]
        },
        {
          "judulSubab": "Penjumlahan dan Pengurangan",
          "urutan": 2,
          "konten": [
            {
              "tipe": "teks",
              "data": "## Penjumlaham Dan Pengurangan\nApa sih syarat matriks bisa dijumlahkan? Syarat matriks agar bisa dijumlahkan adalah dua matriks harus memiliki ordo yang sama. Contohnya seperti matriks di bawah ini.",
              "urutan": 1
            },
            {
              "tipe": "teks",
              "data": "Pada contoh di atas, kamu bisa lihat bahwa operasi penjumlahan di atas memiliki ordo yang sama yaitu 2 x 2, sehingga kedua komponen dapat dijumlahkan. Nah, cara menjumlahkannya pun mudah, lho. Kamu hanya tinggal menjumlahkan masing-masing baris sesuai dengan urutannya.\n\nSyarat pengurangan matriks pun sama dengan penjumlahan, yaitu kedua matriks harus memiliki ordo yang sama sehingga bisa dioperasikan.",
              "urutan": 2
            }
          ]
        },
        {
          "judulSubab": "Perkalian",
          "urutan": 3,
          "konten": [
            {
              "tipe": "teks",
              "data": "## Perkalian Matriks dengan Skalar\nPerkalian matriks dengan skalar dilakukan dengan cara mengalikan setiap elemen matriks dengan skalar tersebut, dan menghasilkan matriks dengan ordo seperti matriks yang dikalikan.\n\nSecara matematis, operasi perkalian matriks dengan skalar dapat diasumsikan sebagai berikut: "
            },
            {
              "tipe": "gambar",
              "data": ""
            },
            {
              "tipe": "teks",
              "data": "## Perkalian matriks dengan matriks\nPerkalian matriks dengan matriks yang kita asumsikan sebagai matriks A dan matriks B memiliki syarat, yaitu kolom matriks A harus sama dengan baris matriks B. Sedangkan ordo dari hasil perkalian matriks tersebut adalah banyaknya baris matriks A dikali dengan banyaknya kolom matriks B.\n\nOperasi perkalian matriks dengan matriks dapat diasumsikan sebagai berikut: "
            }
          ]
        },
        {
          "judulSubab": "Transpose",
          "urutan": 4,
          "konten": [
            {
              "tipe": "teks",
              "data": "## Matriks transpose\nMatriks transpose merupakan matriks yang diperoleh dari memindahkan elemen-elemen baris menjadi elemen pada kolom atau sebaliknya. transpose matriks A dilambangkan dengan AT. Contohnya adalah sebagai berikut, ordo dari AT adalah 2x3."
            }
          ]
        },
        {
          "judulSubab": "Determinan",
          "urutan": 5,
          "konten": [
            {
              "tipe": "teks",
              "data": "Determinan adalah nilai yang dapat dihitung dari unsur-unsur suatu matriks persegi.\n ## Determinan matriks ordo 2x2"
            },
            {
              "tipe": "teks",
              "data": "## Determinan matriks ordo 3x3\nTerdapat dua cara yang bisa dilakukan untuk mencari determinannya, yaitu menggunakan aturan Sarrus dan metode minor-kofaktor.\n\nContoh soal mencari determinan matriks 3 x 3\n\nTentukan determinan matriks berikut ini menggunakan aturan Sarrus dan metode minor-kofaktor!\n\nPembahasan: "
            },
            {
              "tipe": "teks",
              "data": "### Aturan Sarrus\nAgar lebih mudah, kita tulis kembali elemen-elemen pada kolom ke-1 dan ke-2 di sebelah kanan matriks A sebagai berikut: "
            },
            {
              "tipe": "teks",
              "data": "Kemudian, kita tarik garis putus-putus seperti gambar di atas. Kalikan elemen-elemen yang terkena garis putus-putus tersebut. Hasil kali elemen yang terkena garis putus-putus berwarna biru diberi tanda positif (+), sedangkan hasil kali elemen yang terkena garis putus-putus berwarna oranye diberi tanda negatif (-). Ingat urutan penulisannya juga, ya!"
            },
            {
              "tipe": "teks",
              "data": "### Metode Minor-Kofaktor\ndeterminan matriks A dapat dicari dengan menghitung jumlah seluruh hasil kali antara kofaktor matriks bagian dari matriks A dengan elemen-elemen pada salah satu baris atau kolom matriks A. Jadi, pertama, kita pilih salah satu baris atau kolom matriks A untuk mendapatkan nilai determinannya. Misalnya, kita pilih baris ke-1. Elemen-elemen matriks baris ke-1, yaitu a11, a12, dan a13.  "
            },
            {
              "tipe": "teks",
              "data": "Selanjutnya, karena kita pilih elemen-elemen pada baris ke-1, rumus determinan matriks yang kita gunakan adalah sebagai berikut:"
            },
            {
              "tipe": "teks",
              "data": "Langkah kedua, kita cari kofaktor matriks bagian dari matriks A (Cij). Cij = (-1)i+j Mij dan Mij = det Aij dengan Aij merupakan matriks bagian dari matriks A yang diperoleh dengan menghilangkan baris ke-i dan kolom ke-j. Maksudnya bagaimana? Oke, coba kamu perhatikan baik-baik ya.Sebelumnya, kita telah memilih elemen-elemen pada baris ke-1, yaitu a11, a12, dan a13. Oleh karena itu, matriks bagian dari matriks A nya adalah A11, A12, dan A13. "
            }
          ]
        }
      ]
    }
  ]
}