// Classes departament d'educació

// Classe Escola
class Escola {
  constructor(nom, nivell, nombreEstudiants) {
    this._nom = nom;
    this._nivell = nivell;
    this._nombreEstudiants = nombreEstudiants;
  }

  get nom() {
    return this._nom;
  }

  get nivell() {
    return this._nivell;
  }

  get nombreEstudiants() {
    return this._nombreEstudiants;
  }

  set nombreEstudiants(nouNombreEstudiants) {
    if (typeof nouNombreEstudiants === 'number') {
      this._nombreEstudiants = nouNombreEstudiants;
    } else {
      console.error("El nombre d'estudiants ha de ser un número.");
    }
  }

  informacioRapida = () => {
    console.log(
      `L'escola ${this.nom} educa a ${this.nombreEstudiants} estudiants al nivell escolar ${this.nivell}.`
    );
  };

  static professorSubstitut = (professorsSuplents) => {
    const professorAleatori = Math.floor(
      Math.random() * professorsSuplents.length
    );
    return professorsSuplents[professorAleatori];
  };
}

class Primaria extends Escola {
  constructor(nom, nombreEstudiants, politicaMenjador) {
    super(nom, 'primaria', nombreEstudiants);
    this._politicaMenjador = politicaMenjador;
  }

  get politicaMenjador() {
    return this._politicaMenjador;
  }

  set politicaMenjador(novaPoliticaMenjador) {
    if (typeof novaPoliticaMenjador === 'string') {
      this._politicaMenjador = novaPoliticaMenjador;
    } else {
      console.error('La política del menjador ha de ser un text.');
    }
  }
}

class Batxillerat extends Escola {
  constructor(nom, nombreEstudiants, equipsEsportius) {
    super(nom, 'batxillerat', nombreEstudiants);
    this._equipsEsportius = equipsEsportius;
  }

  get equipsEsportius() {
    for (let i = 0; i < this._equipsEsportius.length; i++) {
      console.log(this._equipsEsportius[i]);
    }
    return this._equipsEsportius;
  }

  set equipsEsportius(nousEquipsEsportius) {
    if (Array.isArray(nousEquipsEsportius)) {
      this._equipsEsportius = nousEquipsEsportius;
    } else {
      console.error('Els equips esportius han de ser un array.');
    }
  }
}

// Instanciació d'una escola de primaria

const escolaFortiaSola = new Primaria(
  'Fortià Solà',
  200,
  'Menjador propi. Menú vegetarià opcional.'
);

escolaFortiaSola.informacioRapida();

Escola.professorSubstitut(['Joan', 'Maria', 'Pep']);

// Instanciació d'una escola de batxillerat

const insCirvianum = new Batxillerat('INS Cirviànum', 120, [
  'Futbol',
  'Basquet',
  'Escacs',
  'Tennis Taula',
]);

insCirvianum.equipsEsportius;
