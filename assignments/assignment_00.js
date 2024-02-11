export function reverse(number) {
    // Skriv koden her

    const tallSomStreng = number.toString();
    const tallStrengSomListeMedKarakterer = tallSomStreng.split("");
    const tallListeReversert = tallStrengSomListeMedKarakterer.reverse();
    const reversertListeSattSammenIgjenTilStreng = tallListeReversert.join("");
    const reversertStrengSomTall = parseInt(
        reversertListeSattSammenIgjenTilStreng
    );

    return reversertStrengSomTall;
}
