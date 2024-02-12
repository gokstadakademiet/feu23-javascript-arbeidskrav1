export function reverse(number) {
    // number et er vilkårlig helt tall som sendes inn som parameter fra testen.
    // eks: 1,  586, 123456, osv

    // Skriv koden her

    // konverter tallet til en streng så vi kan håndtere hver siffer separat
    // 123456789 (number) -> "123456789" (string)
    const tallSomStreng = number.toString();

    // lag en array med sifrene fra det hele tallet
    // "123456789" -> ["1","2","3","4","5","6","7","8","9"]
    const tallStrengSomListeMedKarakterer = tallSomStreng.split("");

    // bruk reverse() metoden for arrays for å reversere rekke følgen på arrayet
    // ["1","2","3","4","5","6","7","8","9"] -> ["9","8","7","6","5","4","3","2","1"]
    const tallListeReversert = tallStrengSomListeMedKarakterer.reverse();

    // slå sammen sifferene tilbake til en streng
    // ["9","8","7","6","5","4","3","2","1"] -> "987654321"
    const reversertListeSattSammenIgjenTilStreng = tallListeReversert.join("");

    // konverter den reverserte strengen tilbake til et tall
    // "987654321" (string) -> 987654321 (number)
    const reversertStrengSomTall = parseInt(
        reversertListeSattSammenIgjenTilStreng
    );

    // retuner det reverserte tallet tilbake til testen
    return reversertStrengSomTall;
}
