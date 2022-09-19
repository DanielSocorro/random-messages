const messages = [
    "Dan",
    "Mary",
    "Mariana",
    "Carolina",
    "Beatriz",
    "Alberto",
];

const  randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = {randomMsg};