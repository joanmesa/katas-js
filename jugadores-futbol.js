// Camisetas de futbol con recursividad.  Dos amigos juegan en el mismo equipo de fútbol americano. Cada uno de ellos tiene su propio número dorsal en su camiseta. Un día, su entrenador observa el sorprendente hecho de que el cuadrado de la suma de sus respectivos números es, precisamente, el número de 4 cifras que se ve cuando esta uno junto al otro. Por ejemplo: estos números no pueden ser 17+23=40 y 40^2 es diferente de 1723. ¿Cuales pueden ser sus números dorsales?

const joinNumbers = (num1, num2) => {
    return num1 * (10 ** 2) + num2;
}

const playerNumber = (start, final) => {
    if (start > final) return "";
    if (lookUpNumbers(start, final, 1) === "")
        return playerNumber((start + 1), final);
    return `${lookUpNumbers(start, final, 1)}` +
        playerNumber((start + 1), final);
}

const lookUpNumbers = (start, final, i) => {
    if (i > final) return "";
    if (joinNumbers(start, i) === (start + i) ** 2)
        return `${start} y ${i} juntados ${joinNumbers(start, i)} al cuadrado es ${(start + i) ** 2} \n` + lookUpNumbers(start, final, (i + 1));
    return lookUpNumbers(start, final, (i + 1));
}

const players = playerNumber(1, 99);
console.log(players);