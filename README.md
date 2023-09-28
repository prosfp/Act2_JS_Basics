# Act2_JS_Basics - Kata de Dojo's

Farem servir aquest repositori per:

1. Dur a terme els propers reptes en forma de "Kata's" en referència a la demostració de moviments del Judo. Són les habilitats, "skills", per poder convertir-nos en programadors web!

2. Instal·larem també els paquets i els "bundlers" (recursos que ens faciliten la vida quan a dependències) necessaris per poder per exemple testejar el nostre codi o dur-lo finalment a producció en etapes posteriors. Això ens permetrà tenir una plantilla sobre la que desenvolupar diferents projectes.

## Comencem!

D'entrada el primer que hauries de fer és tenir aquest repositori en local. Si has acceptat el repte ("assignment") a través de l'enllaç de la tasca, clona'l a local per tal de poder treballar més còmodament.

## Tooling (pendent)

Per poder fer test amb Jest

### Estructura d'arxius

Inicialment ens centrarem en resoldre els problemes plantejats i que tenen per objectiu acabar de veure alguns aspectes bàsics de JS. Seguiu l'estructura proposada amb l'exemple kata0.js.

<!-- prettier-ignore -->
- Act2_JS_Basics/
  - kata0/
    - kata0.js
  - kata1/
    - kata1.js

Podeu anar canviant **l'script JS de l'index.html** per provar les diferents kata's

## Katas

### Kata #1. Suma dels elements positius d’un array

Implementa la funció `sumPositiveElements(Array)` que rep un array d'enters com a argument i retorna la suma total dels elements positius.

```javascript
function sumPositiveElements(arr) {
  // Escriu aquí la teva solució
}
```

Tests:

```javascript
sumPositiveElements([]); // 0
sumPositiveElements([1, 2, 3, 4, 5]); // 15
sumPositiveElements([1, -2, 3, 4, 5]); // 13
sumPositiveElements([-1, 2, 3, 4, -5]); // 9
sumPositiveElements([-1, -2, -3, -4, -5]); // 0
```

### Kata #2. Repeteix un string

Implementa la funció `repeatString(String, Number)` que rep un string i un número com a arguments, i retorna un string que conté l'string argument repetit el número de cops indicat per l'argument numèric.

```javascript
function repeatString(str, num) {
  // Escriu aquí la teva solució
}
```

Tests:

```javascript
repeatString("JavaScript", 0); // ''
repeatString("university", 1); // 'university'
repeatString("hello", 3); // 'hellohellohello'
repeatString("?", 10); // '??????????'
```

### Kata #3. Elimina el primer i l’últim caràcter

Implementa la funció `removeFirstAndLast(String)` que rep un string com a argument i retorna l'string argument però sense el seu primer i últim caràcter, obviant els strings amb 2 o menys caràcters.

```javascript
function removeFirstAndLast(str) {
  // Escriu aquí la teva solució
}
```

Tests:

```javascript
removeFirstAndLast("JavaScript"); // 'avaScrip'
removeFirstAndLast("Alexandria"); // 'lexandri'
removeFirstAndLast("hydrogen"); // 'ydroge'
removeFirstAndLast("ok"); // 'ok'
```

### Kata #4. Elimina els espais en blanc

Implementa la funció `removeSpaces(String)` que rep un string com a argument i retorna l'string argument sense espais en blanc.

```javascript
function removeSpaces(str) {
  // Escriu aquí la teva solució
}
```

Tests:

```javascript
removeSpaces("good morning"); // 'goodmorning'
removeSpaces(" carrot cake "); // 'carrotcake'
removeSpaces("the abbot gave rice to the fox"); // 'theabbotgavericetothefox'
```

### Kata #5. Scope i closure

Ja hem vist el concepte d'Scope i com les principals variables a JS (let i const) son "bloc-scope". Per exemple, si declarem una variable let o const dins d'un bloc de codi (com ara un bucle for o una funció), aquesta variable només serà accessible dins d'aquest bloc de codi i no serà visible fora d'aquest bloc. Això ajuda a evitar errors i a mantenir el codi més net i estructurat.

Un closure és una funció que "envolta" una altra funció i que té accés a les variables locals d'aquesta funció, fins i tot després que la funció original hagi finalitzat l'execució. Això és possible perquè el closure "captura" les variables locals de la funció original i les manté en memòria, de manera que es poden utilitzar en el futur.

En aquesta kata, heu de crear una funció counter que retorna una funció anomenada increment. La funció increment ha de mantenir un comptador intern que s'incrementa cada vegada que es crida, i ha de mostrar el valor del comptador per consola.

Quan lat tingueu, haurieu de poder cridar diverses vegades a la funció counter() i el resultat hauria de ser:

```javascript
const c = counter();
c(); // logs 1
c(); // logs 2
c(); // logs 3
```

### Kata #6. Objectes

Anem a insistir sobre alguns aspectes bàsics de la creació d'objectes i entendre el concepte de "getters" i setters"

#### Kata #6.1

Implementa l'objecte `tree` amb les propietats `species` amb valor "appleTree" i `fruit` amb valor "apple".

```javascript
const tree = {
  species: "appleTree",
  fruit: "apple",
};
```

Tests:

```javascript
tree.species; // 'appleTree'
tree.fruit; // 'apple'
```

#### Kata #6.2

Implementa una funció `getFruit(tree)` que donat un objecte `tree` obtingui el valor de la seva propietat `fruit`. Busca que fa el mètode "hasOwnProperty" propia d'un objecte i fes-la servir:

```javascript
function getFruit(tree) {
  // Escriu aquí la teva solució
}
```

Tests:

```javascript
getFruit(tree); // 'apple'
```

#### Kata #6.3

Modifica la funció anterior perquè estigui implementada dins de l'objecte `tree`, és a dir, esdevingui un mètode.

<!-- prettier-ignore -->
!!! warning **this**
    Revisa [this - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this), integra-ho en el teu codi i explica com funciona.

```javascript
const tree = {
  species: "appleTree",
  fruit: "apple",
  getFruit() {
    // Escriu aquí la teva solució
  },
};
```

Tests:

```javascript
tree.getFruit(); // 'apple'
```

### Kata #7. Factoria d'objectes

#### Kata #7.1

Implementa la funció `plantTree(species, fruit)` que s'invoca passant-li dos arguments (species i fruit) i retorna un objecte amb aquests valors per a aquestes mateixes propietats. Fes les validacions necessàries.

```javascript
function plantTree(species, fruit) {
  // Escriu aquí la teva solució
}
```

Tests:

```javascript
plantTree("pearTree", "pear"); // { species: 'pearTree', fruit: 'pear' }
```

#### Kata #7.2

Modifica la funció anterior per afegir els mètodes `getFruit` i `getSpecies` a l'objecte retornat.

```javascript
function plantTree(species, fruit) {
  // Escriu aquí la teva solució
}
```

Tests:

```javascript
const tree = plantTree("pearTree", "pear");
tree.getFruit(); // 'pear'
tree.getSpecies(); // 'pearTree'
```

#### Kata #7.3

Modifica l'objecte `tree` de manera que les propietats `fruit` i `species` siguin getters.

```javascript
const tree = {
  get species() {
    // Escriu aquí la teva solució
  },
  get fruit() {
    // Escriu aquí la teva solució
  },
};
```

Tests:

```javascript
tree.fruit; // 'pear'
tree.species; // 'pearTree'
```

#### Kata #7.4

Afegeix els setters `setFruit` i `setSpecies` a l'objecte `tree`.

```javascript
const tree = {
  set fruit(value) {
    // Escriu aquí la teva solució
  },
  set species(value) {
    // Escriu aquí la teva solució
  },
  get fruit() {
    // Escriu aquí la teva solució
  },
  get species() {
    // Escriu aquí la teva solució
  },
};
```

Tests:

```javascript
tree.fruit = "apple";
tree.fruit; // 'apple'
tree.species = "appleTree";
tree.species; // 'appleTree'
```

### Kata #8: Prototip

El prototip (en aquest cas d'String) és l'objecte que conté mètodes i propietats que s'apliquen a totes les instàncies de la classe (per ex. String)

Això significa que qualsevol cadena que es crea en JavaScript hereta les propietats i mètodes del prototip d'String.

Volem afegir una funció nova a String. Pots decidir ser una mica original i fer una proposta pròpia. Si no jo et proposo el següent:

Implementa una funció que, donat un string amb diverses frases (separades per punt), que "capitalitzi" la primera lletra de cadascuna de les frases, és a dir, la posi en majúscula.

Un cop la tinguis, afegeix-la com al prototip d'String i comprova que funciona:

```javascript
String.prototype.mevaFuncio = function () {
  // Escriu aquí la teva proposta
};
```

Tests:

```javascript
const frase = "la meva primera frase. la meva segona frase";
tree.mevaFuncio(frase); // Ha de mostrar "La meva primera frase. La meva segona frase."
```

### Kata #9. Gestió d'errors

<!-- prettier-ignore -->
!!! Warning
    La gestió d'errors a JavaScript es fa mitjançant les sentències **try, catch i throw**. Aquestes sentències permeten als desenvolupadors controlar els errors que es produeixen durant l'execució del codi i proporcionar una resposta adequada.

La sentència **try** s'utilitza per envoltar el codi que pot generar un error. Si es produeix un error dins del bloc try, el control es transfereix al bloc catch. El bloc catch conté el codi que s'executa quan es produeix un error.

La sentència **throw** s'utilitza per llançar un error manualment. Això permet als desenvolupadors crear errors personalitzats i proporcionar informació detallada sobre l'error.

```javascript
function divideix(a, b) {
  if (b === 0) {
    throw new Error("No es pot dividir per zero");
  }
  return a / b;
}

try {
  const result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.error(error.message);
}
```

En aquest exemple, definim una funció divide que divideix dos nombres.

- Si el segon nombre és zero, llancem un error utilitzant la sentència throw.
- Envoltem la funció divide amb una sentència try.
- Si es produeix un error dins de la funció divide, el control es transfereix al bloc catch, on mostrem un missatge d'error per consola.

Recupera el codi de la Kata 7. Afegiu la següent línia de codi a la comprovació del tipus en els setters `setFruit` i 'setSpecies per llançar un error.

```javascript
throw new Error();
```

Tests:

```javascript
try {
  tree.setFruit(12);
} catch (error) {
  // Comprovar que es llança un error
}
```

Each kata includes a set of tests that can be run using [Jest](https://jestjs.io/). To run the tests for a specific kata, navigate to the kata's directory and run the following command:

### Kata #10. RegExp

L'ús d’expressions regulars és habitual a JavaScript per tal de detectar patrons dins de cadenes de
text. Als nostres exercicis ens prendrem algunes llicències per a generalitzar el nom de l'espècie i de
la fruta. Abans de validar un canvi mitjançant setters, anem a validar la fruita respecte a l’espècie.

Per ex:

- poma - pomer OK
- pera - perera OK
- taronja - taronger OK
- nou - noguera KO

Dels tres primers casos observem que es repeteixen les 3 primeres lletres de l'espècie també a la
fruita. Aquesta serà la comprovació que farem al nostre setter.

Ha de complir els següents tests:

- Al crear un arbre amb els valors "poma" i "pomer", si invoquem posteriorment setFruit amb el valor "pera", el mètode llança un error i manté el seu valor previ.

- Al crear un arbre amb els valors "perera" i "poma" i invocar posteriorment setFruit amb el valor pera, el mètode modifica el valor de la propietat fruit.

### Kata #11. Objectes de l'entorn del navegador

Fes una ullada al recurs de classe [Interacció amb el navegador de JS](https://prosfp.github.io/DAW_MP06/UF1/UF1.3/UF1.3.7_Browser_Objects/)

A continuació et proposo el següents reptes:

- **Crea una pàgina HTML** senzilla amb un botó que digui "Obre Finestra Emergent". Utilitza l'objecte window per obrir una finestra emergent (popup) quan es fa clic al botó. Personalitza la mida i la posició de la finestra emergent i permet que l'usuari pugui introduir la URL amb que s'obrirà.

- **Alerta amb Window:** Afegeix un altre botó que digui "Mostra Alerta". Utilitza l'objecte window per mostrar una alerta (finestra emergent d'alerta) amb un missatge quan es fa clic al botó. Informació de Navegador amb navigator:

- Crea una secció a la pàgina que mostri **informació sobre el navegador de l'usuari**. Amb **Navigator** pots accedir a propietats com userAgent, platform, language, etc., i mostra aquestes dades a la pàgina. També dona a conèixer les extensions instal·lades a l'ordinador.

- **Canviar el Títol de la Pàgina amb document:** Afegeix un camp d'entrada de text i un botó. Utilitza l'objecte **document** per canviar el títol de la pàgina quan es fa clic al botó. El nou títol ha de ser el text introduït per l'usuari al camp d'entrada. Redireccionar amb location:

- Afegeix un altre botó que digui "Ves a Google". Utilitza l'objecte **location** per redirigir l'usuari a la pàgina d'inici de Google quan es fa clic al botó. Comprova si l'usuari està connectat a Internet abans de redirigir-lo.

### Kata #12. Classes

Les **classes** són plantilles per als objectes.

Javascript crida un **mètode constructor** quan creem una nova instància d'una classe.

**Herència** és quan creem una classe pare amb propietats i mètodes que podem estendre a les classes filles.

Utilitzem la paraula clau **extends** per crear una subclasse.

La paraula clau **super** crida el constructor() d'una classe pare.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} fa un soroll.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} fa guau guau.`);
  }
}

const myDog = new Dog("Bobby");
myDog.speak(); // Output: "Bobby fa guau guau."
```

A DESENVOLUPAR:

### Catàleg Educació

El Departament d'Educació vol un catàleg de referència ràpida per a cada escola del territori.

Hem de crear classes per a escoles primàries i secundàries. Ja que aquestes classes comparteixen propietats i mètodes, cadascuna heretarà de la classe pare "Escola". Les classes pare i els tres fills tenen les següents propietats, getters, setters i mètodes:

**Escola**

- Propietats: nom (string), nivell (string: 'primària', 'secundària' o 'batxillerat') i nombreEstudiants (nombre)
- Getters: totes les propietats tenen getters
- Setters: la propietat nombre d'estudiants té un setter
- Mètodes: .informacioRapida() i .professorSubstitut( (aquest és un mètode estàtic)

**Primaria**

- Inclou tot el que té la classe Escola, més una propietat addicional
- Propietats: politicaMenjador (string)

**Secundària**

- No inclou cap propietat o mètode addicional

**Batxillerat**

- Inclou tot el que té la classe Escola, més una propietat addicional
- Propietats: equipsEsportius (array d'strings)

Crea el constructor() i els getters per a les quatre classes anteriors.

#### 1a Part

1. Crear Classe Escola Mare: Comencem creant una classe mare per a les classes Primària, Secundària i Batxillerat. Crea una classe buida anomenada "Escola".

2. Dins la classe Escola, crea un constructor() buit que accepti tres paràmetres. Els noms d'aquests paràmetres han de coincidir amb les propietats que s'han llistat.

3. Dins el constructor(), estableix les propietats de l'Escola. Afegix un guió baix (\_) davant de totes les propietats.

4. Crea getters per a les propietats nom, nivell i nombre d'estudiants. Cada getter ha de retornar el valor emmagatzemat a la propietat.

5. Crea un setter per a nombre d'estudiants. El mètode ha de comprovar primer si l'entrada (nouNombreEstudiants) és un nombre. Si és un nombre, aleshores estableix la propietat nombre d'estudiants. Si no ho és, registra el missatge 'Entrada no vàlida: el nombre d'estudiants ha de ser un nombre.'

6. Sota els teus getters, crea un mètode anomenat informacioRapida que enregistri la següent cadena al console: "L'ESCOLA NOM educa a NOMBRE D'ESTUDIANTS estudiants al nivell escolar NIVELL".
   (fes les substitucions per variables que toquin)

7. Sota .informacioRapida(), crea un mètode estàtic anomenat professorSubstitut. Aquest mètode rebrà un paràmetre, anomenat professorsSuplents. El paràmetre professorsSuplents acceptarà un array d'Strings. Dins el mètode, genera una manera de triar aleatòriament dins professorsSuplents. Utilitza aquest número per accedir i retornar el professor suplent a l'índex generat aleatòriament.

### 2a Part

1. Crea una classe buida "Primaria" que hereti de "Escola".

2. Dins la classe "Primaria ", crea un constructor() que accepti tres arguments.

3. Fes una crida a "super" a la primera línia del constructor de "Primaria". Passeu-hi qualsevol argument que utilitzi el constructor pare.

4. Ja que aquesta és la classe "Primaria", passa 'primaria' com a argument pel paràmetre "nivell" en el constructor pare.

5. Utilitza l'argument restant per establir la propietat "politicaMenjador".

6. Com que la nostra classe "Primaria" hereta les propietats i getters de "Escola", només hem de crear un nou getter a la classe "Primaria". Afegeix aquest getter a la classe "Primaria". Cada getter ha de retornar el valor emmagatzemat a aquesta propietat.

A continuació, t'atreveixes amb la classe "Secundaira" i "Batxillerat" que hereta de la classe "Escola" també? A més de les propietats, els getters i els mètodes de "Escola", la classe "Secundaria" inclou:

- Propietats: "sportsTeams" (conjunt de cadenes de text).
- Getters: Un getter per al conjunt "sportsTeams". El getter ha de registrar totes les disciplines esportives al console.

### 3a Part
