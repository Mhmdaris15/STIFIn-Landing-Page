import React from "react";
import { Accordion } from "flowbite-react";

const FAQ = () => {
  const questionAnswers = [
    {
      q: "Apakah tes STIFIn bisa dilakukan secara online?",
      a: [
        "Tidak bisa, karena diperlukan untuk melakukan scan pada kesepuluh sidik jari Anda (genetik)",
      ],
    },
    {
      q: "Apa yang perlu disiapkan saat mau tes STIFIn?",
      a: [
        "Tidak perlu banyak persiapan yang dibutuhkan seperti pada tes lainnya. Melainkan hanya membutuhkan scan kesepuluh sidik jari untuk diambil datanya.",
      ],
    },
    {
      q: "Berapa lama proses tes STIFIn?",
      a: [
        "1. Proses pemindaian sidik jari sekitar 2-3 menit",
        "2. Setelah itu, butuh sekitar 5-10 menit untuk memproses sidik jari yang dikirim ke server pusat",
        "3. Selanjutnya penjelasan sekitar 30-60 menit",
      ],
    },
    {
      q: "Kenapa harga tes STIFIn bisa berbeda?",
      a: [
        "1. Beberapa Promotor STIFIn memiliki jam terbang dan latar belakang pendidikan yang berbeda.",
        "2. Sehingga harga tes STIFIn + Sesi Privat (nilai dari setiap promotor bisa berbeda)",
      ],
    },
    {
      q: "Berapa tingkat akurasi Tes STIFIn?",
      a: [
        "Akurasi yang dimiliki STIFIn memiliki tingkat Validitas (Paper & Pencil) dan Reliabilitas (Finggerprint) yang sangat tinggi yaitu 95% saat dilakukan uji coba tesnya.",
      ],
    },
    {
      q: "Apakah data sidik jari tersimpan?",
      a: [
        "Data sidik jari yang diambil tidak tersimpan di laptop atau sever STIFIn. Setelah hasil tes STIFIn keluar sidik jari yang diinput otomatis terhapus.",
      ],
    },
    {
      q: "Berapa minimal usia bisa tes STIFIn?",
      a: [
        "Rekomendasi usia min. 2,5 tahun sudah bisa melakukan tes STIFIn. Untuk maksimal tak terbatas usia",
      ],
    },
    {
      q: "Apakah ada sesi tanya jawab setelah tes STIFIn?",
      a: [
        "1. Setelah penjelasan hasil tes STIFIn, anda bisa bertanya/konsultasi terkait hasilnya",
        "2. Anda bisa juga bertanya via Whatsapp promotor yang melakukan tes STIFIn ke Anda",
      ],
    },
  ];

  return (
    <div
      id="faq"
      className="bg-white">
      <h1 className="text-5xl text-gray-900 text-center mb-3 font-extrabold py-5">
        Hal Yang Sering Ditanyakan
      </h1>
      <h2 className="text-2xl text-center mb-5 font-bold text-gray-700">FAQ</h2>
      <div className="lg:w-3/4 lg:mx-auto mx-10">
        <Accordion alwaysOpen={true}>
          {questionAnswers.map((qa, idx) => (
            <Accordion.Panel
              className="bg-gray-100"
              key={idx}>
              <Accordion.Title className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                {qa.q}
              </Accordion.Title>
              <Accordion.Content className="bg-gray-50">
                {qa.a.map((ans, i) => (
                  <p
                    className="text-gray-800"
                    key={i}>
                    {ans}
                  </p>
                ))}
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>
    </div>
  );
  
};

export default FAQ;
