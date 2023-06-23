import React from "react";
import { Accordion } from "flowbite-react";

const FAQ = () => {
  const questionAnswers = [
    {
      q: "Apakah tes STIFIn bisa di lakukan secara online?",
      a: [
        "Tidak bisa, karena diperlukan untuk melakukan scan pada kesepuluh sidik jari Anda (genetik)",
      ],
    },
    {
      q: "Apa yang perlu di siapkan saat mau tes STIFIn?",
      a: [
        "Tidak perlu banyak persiapan yang di butuhkan seperti pada tes lainnya. Melainkan hanya membutuhkan scan kesepuluh sidik jari untuk di ambil datanya.",
      ],
    },
    {
      q: "Berapa lama proses tes STIFIn?",
      a: [
        "1.Proses pemindaian sidik jari sekitar 2-3 menit",
        "2.Setelah itu, butuh sekitar 5-10 menit untuk memproses sidik jari yang di kirim ke server pusat",
        "3.Selanjutnya penjelasan sekitar 45-60 menit",
      ],
    },
    {
      q: "Berapa tingkat akurasi Tes STIFIn?",
      a: [
        "Akurasi yang di miliki STIFIn memiliki tingkat Validitas (Paper & Pencil) dan Reliabilitas (Finggerprint) yang sangat tinggi yaitu 95% saat dilakukan uji coba tesnya.",
      ],
    },
    {
      q: "Apakah data sidik jari tersimpan?",
      a: [
        "Data sidik jari yang di ambil tidak tersimpan di laptop atau sever STIFIn. Setelah hasil tes STIFIn keluar sidik jari yang di input otomatis terhapus.",
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
        "1.Setelah penjelasan hasil tes STIFIn, anda bisa bertanya/konsultasi terkait hasilnya",
        "2.Anda bisa juga bertanya via Whatsapp promotor yang melakukan tes STIFIn ke Anda",
        // "3.Juga bisa bergabung kedalam komunitas Grup Diskusi Telegram STIFIn Family khusus bagi Anda yang sudah tes STIFIn",
      ],
    },
  ];

  return (
    <div
      id="faq"
      className="bg-inherit">
      <h1 className="text-5xl text-gray-50 text-center mb-3 font-extrabold">
        Hal Yang Sering Ditanyakan
      </h1>
      <h2 className="text-2xl text-center mb-5 font-bold text-gray-600">FAQ</h2>
      <div className="lg:w-3/4 lg:mx-auto mx-10">
        <Accordion alwaysOpen={true}>
          {questionAnswers.map((qa, idx) => (
            <Accordion.Panel
              className="bg-[#110e18]"
              key={idx}>
              <Accordion.Title className="bg-[#110e18] text-gray-50 hover:bg-[#110e18]">
                {qa.q}
              </Accordion.Title>
              <Accordion.Content className="bg-[#393342]">
                {qa.a.map((ans, i) => (
                  <p
                    className="text-gray-50"
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
