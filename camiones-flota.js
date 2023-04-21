// Flota de Camiones con recursividad. El propietario  de la compañía de transportes “La tortuga” es un matemático amateur. Después de comprar una flota nueva de camiones, decidió identificar a cada vehículo, pintando sobre su cabina un número menor que 500. Solo para ser diferente, escogió todos aquellos números cuyos cuadrados terminaran en el número en cuestión. Así uno de los camines se marcó con el numero 25 ya que 25^2 = 625. ¿Cuántos camiones formaban la flota de la compañía? ¿Cuáles eran sus números?

const digitCounter = number => {

    if (number == 0) return 0;
    return 1 + digitCounter(Math.trunc(number / 10));
}

const theTruks = (start, final, count) => {

    if (start > final) return `Son ${count} camiones`;
    if (start == checkTrucks(0, start, start ** 2))
        return `${start}^2 = ${start ** 2}\n` +
            theTruks((start + 1), final, (count + 1))
    return theTruks((start + 1), final, count)
}

const checkTrucks = (i, number1, number2) => {

    if (i == digitCounter(number1)) return 0;
    return ((number2 % 10) * (10 ** i)) +
        checkTrucks((i + 1), number1, (Math.trunc(number2 / 10)))
}

const trucks = theTruks(1, 500, 0)
console.log(trucks);

console.log(25 % 10);
console.log((10 ** 0));
console.log(Math.trunc(1 / 10));