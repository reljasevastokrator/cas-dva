/*let osoba = {
  ime: 'darko',
  prezime: 'darkovic',
  godiste: 2000,
  pozdrav: function () {
    console.log(
      `zdravo, ja sam ${this.ime} ${this.prezime}. Imam ${
        2022 - this.godiste
      } godina`
    );
  },
};

console.log(osoba.godiste);
osoba.pozdrav();

osoba.godiste = 1999;
osoba.pozdrav();

osoba.pozdrav = function () {
console.log('zdravo');
};
osoba.pozdrav();

osoba.visina = 175;
console.log(Object.enum(osoba));
*/

/*class Osoba {
  ime;
  prezime;
  godiste;

  constructor (ime, prezime, godiste) {
    this.ime = ime;
    this.prezime = prezime;
    this.godiste = godiste;
  }
  pozdrav() {
    console.log(`zdravo ja sam ${this.ime}. Imam ${2022 - this.godiste} godina`);
  }
}

let ja = new Osoba ('Relja', 'Gardasevic', 2004);
ja.pozdrav();
*/

class nastavnik{
  ime;
  prezime;
  godiste;
  predmet;
  dajemdmu;

  constructor (ime, prezime, godiste, predmet, dajemdmu) {
    this.ime = ime;
    this.prezime = prezime;
    this.godiste = godiste;
    this.predmet = predmet;
    this.dajemdmu = dajemdmu;
  }
  pozdrav() {
    console.log(`Ja sam lola ime mi je ${this.ime} prezime mi ${this.prezime}. Imam ${2022 - this.godiste}. Predmet mi je ${this.predmet}. Dajem ${this.dajemdmu}`)
  }
}

let On = new nastavnik ('Relja', 'gardasevic', 2004, 'kuvanjekreka', 'peticu');
On.pozdrav();