console.log("====Tiket Masuk Zoo====")
let peng = [{nama: "Judy", umur: 400}, {nama: "Joko", umur: 6}, {nama: "selo", umur: 43}, {nama: "Pek", umur:1}];

let harga = 50000;

for(let i=0; i<peng.length; i++){
    let namaPeng = peng[i].nama;
    let umur = peng[i].umur;
    let pesan = "";

if(umur<5){
    pesan="Free! Untuk balita";
}else if(umur<=12){
    pesan="Diskon 50% "+(harga/2);
}else if(umur>=60){
    pesan="Harga Diskon 30% "+(harga*0.7);
}else{
    pesan="Harga Normal";
}

console.log("Nama pengunjung: ", namaPeng);
console.log("Umur           : ", umur+"Tahun");
console.log("Keterangan     : ", pesan);
}
