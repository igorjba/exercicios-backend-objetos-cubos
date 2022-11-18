const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
];

for (let i = 0; i < usuarios.length; i++) {
    usuarios[i].maior_idade = false;
    if (usuarios[i].idade > 17) {
        usuarios[i].maior_idade = true;
    }
}
console.log(usuarios);