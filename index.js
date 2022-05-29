// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {};
const secondUser = {};

const firstColor = ["Yellow", "Pink", "White", "Purple"];
const firstRestaurant = ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"];
const secondColor = ["Blue", "Black", "Grey"];
const secondRestaurant = ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"];

firstUser.name = "Monica";
firstUser.gender = "Female";
firstUser.age = 17;
firstUser.email = "monica@dingdong.com";
firstUser.favoriteColor = new Set(firstColor);
firstUser.isHavePet = "Yes";
firstUser.education = new Object();
firstUser.favoriteRestaurant = new Set(firstRestaurant);

// firstUser.favoriteColor.add("Yellow").add("Pink").add("White").add("Purple");

firstUser.education = [
    {
        name: "SD 01",
        city: "Jakarta",
        graduate: 2016
    },
    {
        name: "SMP 02",
        city: "Jakarta",
        graduate: 2019
    },
    {
        name: "SMA 03",
        city: "Tangerang"
    }
]

// firstUser.favoriteRestaurant.add("Bento").add("Sushi").add("Pancake").add("Eggy").add("Tempura").add("Bento").add("Eggy").add("Padang").add("Tteok").add("Sushi").add("Sushi");

//=====SEPARATOR==========

secondUser.name = "Wendy";
secondUser.gender = "Male";
secondUser.age = 23;
secondUser.email = "wendy@dingdong.com";
secondUser.favoriteColor = new Set(secondColor);
secondUser.isHavePet = "No";
secondUser.education = new Object();
secondUser.favoriteRestaurant = new Set(secondRestaurant);
// secondUser.favoriteColor.add("Blue").add("Black").add("Grey");
secondUser.education = [
    {
        name: "SD 02",
        city: "Jakarta",
        graduate: 2010
    },
    {
        name: "SMP 03",
        city: "Bogor",
        graduate: 2013
    },
    {
        name: "SMA 01",
        city: "Surabaya",
        city: 2016
    },
    {
        name: "Universitas Maju",
        city: "Tangerang"
    }
];
// secondUser.favoriteRestaurant.add("Tempura").add("Bento").add("Sushi").add("Pancake").add("Padang").add("Katsu").add("Geprek").add("Pancake").add("Eggy");

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser, secondUser);


// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};