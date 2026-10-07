import users from "./data.mjs";

const index = () => {
  console.log("\n--- Menampilkan Data ---");
  // Tampilkan data menggunakan map
  users.map((user, i) => {
    console.log(`${i + 1}. Nama: ${user.nama} | Umur: ${user.umur} | Alamat: ${user.alamat} | Email: ${user.email}`);
  });
}

const store = (user) => {
  // Menambahkan data baru
  users.push(user);
  console.log(`\n[Sukses] Data ${user.nama} berhasil ditambahkan!`);
}

const destroy = () => {
  // Menghapus data
  const deleted = users.pop();
  console.log(`\n[Sukses] Data ${deleted.nama} berhasil dihapus!`);
}

export { index, store, destroy };