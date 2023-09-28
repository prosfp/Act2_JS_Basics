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
