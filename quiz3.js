// 1. Buat sebuah objek Pesanan
const pesanan = {
  pelanggan: null,
  status: null,
  detail: [],
};

// 2. Isi property pelanggan dengan "Dian Sastra"
pesanan.pelanggan = "Dian Sastra";

// 3. Isi property status dengan "Member"
pesanan.status = "Member";

// 4. Isi property detail dengan objek barang1
const barang1 = {
  kode: "001",
  nama: "Pepsoden",
  qty: 20,
  harga: 50000,
};
pesanan.detail.push(barang1);

// 5. Isi property detail dengan objek barang2
const barang2 = {
  kode: "002",
  nama: "Aqua",
  qty: 10,
  harga: 5000,
};
pesanan.detail.push(barang2);

console.log("\nSetelah ditambahkan..");
console.log(pesanan);

console.log("\n\n\n");
console.log("Nama Pelanggan      : " + pesanan.pelanggan);
console.log("Status              : " + pesanan.status);
console.log("\nDETAIL PESANAN");
console.log(
  "============================================================================"
);
console.log("No \t Kode \t Nama Barang \t Qty \t Harga Satuan \t Sub Total");
console.log(
  "============================================================================"
);

let no = 1;
let totalBelanja = 0;
for (const detail of pesanan.detail) {
  let subTotal = detail.qty * detail.harga;
  console.log(
    no +
      "\t\t" +
      detail.kode +
      "\t" +
      detail.nama +
      "\t" +
      detail.qty +
      "\t" +
      detail.harga +
      "\t" +
      subTotal
  );
  no++;
  totalBelanja += subTotal;
}

console.log(
  "============================================================================"
);
console.log("\t\t\t\t\t\tTOTAL BELANJA : " + totalBelanja);
