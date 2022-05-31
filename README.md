> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Serverside Performance Optimalisatie - Chippr.dev 
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
Ik heb voor dit project geen code splitting toegepast.

### Caching
De max-age op 300 staan. Zo ziet de header eruit om de openbare cache van 5 minuten in te schakelen:

<img width="371" alt="image" src="https://user-images.githubusercontent.com/90447045/171162722-1a000193-88af-4691-82d4-d7f0cfc94eb2.png">


### Compressie
Voor Compressie heb ik een package moeten installeren.

<img width="274" alt="image" src="https://user-images.githubusercontent.com/90447045/171162776-3c3e8abd-4cb2-44ad-b420-805e9564267b.png">

### De resultaten 
<img width="302" alt="image" src="https://user-images.githubusercontent.com/90447045/171162872-e5d070f8-928a-405f-8852-1f64e8d02c56.png">

<img width="309" alt="image" src="https://user-images.githubusercontent.com/90447045/171162896-16f986c8-2718-4d30-af69-48fae1f0af1c.png">


## Bronnen
https://github.com/EmonaSantiago/performance-matters-serverside-optimization/blob/main/docs/INSTRUCTIONS.md


## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
