import { index, store, destroy } from "./controller.mjs";

const main = () => {
  // 1. Tambah 2 data
  store({ nama: 'Noval', umur: 22, alamat: 'Jl. Anggrek 11', email: 'noval@mail.com' });
  store({ nama: 'Alivia', umur: 21, alamat: 'Jl. Mawar 12', email: 'alivia@mail.com' });

  // 2. Menampilkan data menggunakan map
  index();

  // 3. Menghapus data
  destroy();
  index(); 
}

main();