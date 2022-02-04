//Soal 3
function biji(jumlah) {
    const hasil = jumlah.map((el) => {
      const arrayBaru = '';
  
      return (el += arrayBaru);
    });
    const split = hasil[3].split(',');
    hasil.pop();
    console.log(hasil, split.join(' '));
  }
  biji(['hallo', 'nama', 'saya', ['anggita','siti azahra', ['kelas', ['11', ['rpl', '2']]]]]);
  
  //Soal 4
  const obj = {
    nama: 'anggita',
    kelas: 'RPL 2',
    umur: 17,
    nikah: false,
    Hp: {
      nama: 'oppo A83',
      spesifikasiHp: {
        chipset: 'helio p23',
        ram: '2,0 GB',
        rom: '32,00 GB',
        camera: '13mp',
      },
    },
  };
  console.log(obj.Hp);