> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Serverside Performance Optimalisatie - Chippr.dev 
Beschrijf de website die je hebt geoptimaliseerd, voeg screenshots van de performance audit voor en na het uitvoeren en beschrijf de verbeterde performance. Met andere woorden, welke winst heb je behaald door dit allemaal te doen! Voeg de url en een screenshot van de geoptimaliseerde website toe. 

### Serverside Performance Optimization 
Het toepassen van Minifying, Code Splitting, Caching en Compressie op de Chippr.dev overzichtspagina (van Sprint 9).
In Sprint 9 ging het over "The Web is for everyone". Ik heb daarin gewerkt met Express en Node.JS. 

 Hieronder vindt u de Lighthouse testresultaten:
 
### Performance audit
Voor de optimization:

<img width="700" alt="image" src="https://user-images.githubusercontent.com/90447045/168989700-48dfc77c-4505-485d-a70f-9eb9d77582a7.png">

Hierboven ziet u de resultaten van de lighthouse test op de landingspagina. De resultaten worden positief aangegeven, maar er is altijd wel plaats voor verbeteringen.

<img width="700" alt="image" src="https://user-images.githubusercontent.com/90447045/168989753-c601bcdf-9f7c-4b38-89b9-8e988d552f4a.png">


### Minifying
Beschrijf welke bestanden je _minified_ hebt en waarom je dat gedaan hebt. Als je er bewust voor kiest bepaalde bestanden niet te minify-en dan beschrijf je ook waarom je dat niet gedaan hebt.

Ik ben begonnen met een stukje van mijn CSS te minifyen. Dit heb ik kunnen doen met het gebruik van post CSS. 
 <img width="220" alt="image" src="https://user-images.githubusercontent.com/90447045/168990035-f60ca15f-db30-42b1-8d47-805275609902.png">


Door het minifyen van de CSS-code zie je meteen het verschil in de grootte. Zelf vind ik dat het voordelen als nadelen heeft:
- Voordeel: Grootte verbeterd.
- Nadeel: Onoverzichtelijke CSS code.



### Code splitting
Beschrijf welke front-end javascript bestanden je gesplit hebt en waarom je dat gedaan hebt. Schrijf vanuit het idee van daadwerkelijk gebruikte code per pagina.

### Caching
Beschrijf welke caching opties je gekozen hebt en waarom je dat op deze manier doet.

### Compressie
Beschrijf hoe je compressie hebt ingezet en waarom je die keuze hebt gemaakt.

## Bronnen
Beschrijf de door jou gebruikte bronnen om bovenstaande stappen uit te voeren.

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
