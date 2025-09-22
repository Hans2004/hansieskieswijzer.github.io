const parties = [ "PvdD", "BBB", "CDA", "CU", "D66", "DENK", "FvD", "GroenLinks-PvdA", "JA21", "PVV", "SP", "NSC", "VVD", "Volt", "SGP" ];

const quizData = [
    {
        "question": "1. Wat is het belangrijkste uitgangspunt voor het klimaatbeleid?",
        "options": {
            "A": "De vervuiler betaalt. Nederland moet zo snel mogelijk klimaatneutraal zijn, met 2030 als uitgangspunt. Fossiele subsidies worden per direct beëindigd.",
            "B": "Het beleid moet vooral haalbaar, uitvoerbaar en betaalbaar zijn. We herzien afspraken als ze leiden tot onrealistische ambities. Wie rood staat, kan niet groen doen.",
            "C": "Het huidige klimaatbeleid is onbetaalbare gekte. We trekken de Klimaatwet in, stappen uit het Klimaatakkoord van Parijs en stoppen met de energietransitie."
        },
        "scores": { "A": ["PvdD", "GroenLinks-PvdA", "Volt", "D66", "SP", "CU", "DENK"], "B": ["BBB", "CDA", "VVD", "NSC", "JA21"], "C": ["FvD", "PVV", "SGP"] }
    },
    {
        "question": "2. Wat is de beste aanpak voor de asielinstroom?",
        "options": {
            "A": "Een totale asielstop en grenzen dicht. We stappen uit internationale verdragen en moedigen remigratie aan.",
            "B": "Het asielbeleid moet strenger en realistischer. Dit omvat snellere procedures, opvang in de regio en het herzien van internationale verdragen om meer grip te krijgen.",
            "C": "We moeten solidair en humaan zijn. Vluchtelingen verdienen een veilige haven en een menswaardige opvang, conform internationale verdragen."
        },
        "scores": { "A": ["PVV", "FvD", "SGP", "JA21"], "B": ["BBB", "VVD", "CDA", "NSC"], "C": ["GroenLinks-PvdA", "D66", "Volt", "PvdD", "SP", "CU", "DENK"] }
    },
    {
        "question": "3. Wat moet er gebeuren met het eigen risico in de zorg?",
        "options": {
            "A": "Het eigen risico moet volledig worden afgeschaft. Zorg is een recht en financiële drempels mogen de toegang niet belemmeren.",
            "B": "Het eigen risico wordt verlaagd of aangepast, bijvoorbeeld door een maximum per behandeling, om de kosten voor chronisch zieken en mensen met hoge zorgkosten te beperken.",
            "C": "Het eigen risico blijft behouden, eventueel met aanpassingen. Het is een instrument voor kostenbewustzijn en het betaalbaar houden van de zorg voor iedereen."
        },
        "scores": { "A": ["PvdD", "GroenLinks-PvdA", "SP", "DENK", "PVV", "FvD"], "B": ["D66", "Volt", "NSC"], "C": ["CDA", "VVD", "BBB", "JA21", "CU", "SGP"] }
    },
    {
        "question": "4. Hoe moet de overheid de woningnood aanpakken?",
        "options": {
            "A": "Door grootschalige publieke investeringen en het bouwen van minstens 100.000 betaalbare woningen per jaar. Wonen is een recht, geen verdienmodel voor speculanten.",
            "B": "Door regels te versimpelen, procedures te versnellen en 'een wijkje erbij' te bouwen. De overheid moet regie nemen, maar samenwerken met marktpartijen om de bouw vlot te trekken.",
            "C": "De focus ligt op bouwen voor Nederlanders en het terugdringen van regels. Voorrang voor statushouders wordt afgeschaft en gemeenten bepalen zelf voor wie ze bouwen."
        },
        "scores": { "A": ["GroenLinks-PvdA", "SP", "PvdD", "D66", "Volt", "CU"], "B": ["CDA", "VVD", "BBB", "NSC", "JA21", "DENK"], "C": ["PVV", "FvD", "SGP"] }
    },
    {
        "question": "5. Welke rol moet de Europese Unie spelen?",
        "options": {
            "A": "We moeten streven naar een Nexit. Nederland moet weer volledig soeverein zijn over eigen wetten, grenzen en geld.",
            "B": "De EU is primair een economisch samenwerkingsverband. We moeten kritisch zijn op de overdracht van soevereiniteit en geen nationale koppen op Europees beleid zetten.",
            "C": "Een sterker, federaal en democratisch Europa is nodig om grote uitdagingen als klimaat, veiligheid en economie gezamenlijk aan te pakken."
        },
        "scores": { "A": ["FvD", "PVV", "SGP"], "B": ["JA21", "BBB", "CDA", "VVD", "NSC", "CU", "SP"], "C": ["Volt", "D66", "GroenLinks-PvdA", "PvdD", "DENK"] }
    },
    {
        "question": "6. Wat is uw visie op de toekomst van de landbouw?",
        "options": {
            "A": "De landbouw moet natuurinclusief en circulair worden, met een veel kleinere veestapel en een einde aan landbouwgif. De focus ligt op biologische en plantaardige productie.",
            "B": "Boeren zijn onmisbaar voor onze voedselvoorziening en landschapsbeheer. We moeten hen perspectief bieden door te investeren in innovatie en een eerlijk verdienmodel, zonder gedwongen krimp.",
            "C": "Het stikstof- en klimaatbeleid moet van tafel. We geven de boer de vrijheid om te ondernemen en schrappen onzinnige regels die de sector schaden."
        },
        "scores": { "A": ["PvdD", "GroenLinks-PvdA", "SP", "Volt", "D66", "CU"], "B": ["CDA", "NSC", "VVD", "BBB", "JA21", "DENK"], "C": ["FvD", "PVV", "SGP"] }
    },
    {
        "question": "7. Hoe moet Nederland omgaan met defensie-uitgaven en de NAVO-norm?",
        "options": {
            "A": "We moeten de uitgaven fors verhogen, ruim boven de huidige norm, naar 3,5% of meer van het BBP. Een sterke krijgsmacht is essentieel voor onze veiligheid.",
            "B": "We moeten voldoen aan de internationale afspraken (de NAVO-norm), maar niet blindelings meegaan in een wapenwedloop. De focus ligt op een moderne, efficiënte en Europese defensiesamenwerking.",
            "C": "We moeten kritisch zijn op de NAVO-norm en toenemende militarisering. Investeringen in diplomatie, vrede en internationale samenwerking zijn belangrijker dan miljarden voor wapens."
        },
        "scores": { "A": ["VVD", "NSC", "BBB", "CDA", "CU", "JA21", "SGP"], "B": ["D66", "Volt", "GroenLinks-PvdA", "PVV"], "C": ["SP", "PvdD", "FvD", "DENK"] }
    },
    {
        "question": "8. Wat is uw houding ten opzichte van het minimumloon?",
        "options": {
            "A": "Het minimumloon moet fors omhoog naar €18 per uur. Werken moet lonen en bestaanszekerheid is een recht voor iedereen.",
            "B": "Het minimumloon kan stapsgewijs omhoog, maar we moeten waken voor de gevolgen voor kleine ondernemers en de werkgelegenheid. Een balans is nodig.",
            "C": "De focus moet liggen op lastenverlaging voor werkenden en ondernemers. Een te hoog minimumloon schaadt de economie en de concurrentiepositie."
        },
        "scores": { "A": ["SP", "GroenLinks-PvdA", "PvdD", "Volt", "DENK", "D66", "CU", "NSC"], "B": ["CDA", "VVD", "BBB"], "C": ["JA21", "FvD", "PVV", "SGP"] }
    },
    {
        "question": "9. Hoe kijkt u naar de rol van de overheid in de economie?",
        "options": {
            "A": "De overheid moet kleiner en zich richten op kerntaken. We moeten de regeldruk verlagen en ruimte geven aan ondernemers en de vrije markt voor economische groei.",
            "B": "De overheid moet een betrouwbare partner zijn die investeert in een toekomstgerichte economie, in samenwerking met bedrijven, met oog voor publieke belangen en een gelijk speelveld.",
            "C": "De overheid moet de regie nemen en actief sturen op een sociale en duurzame economie. Marktwerking in publieke sectoren moet worden teruggedrongen en grote bedrijven moeten eerlijk bijdragen."
        },
        "scores": { "A": ["VVD", "JA21", "FvD", "PVV", "SGP", "BBB"], "B": ["CDA", "NSC", "D66", "CU"], "C": ["GroenLinks-PvdA", "SP", "PvdD", "Volt", "DENK"] }
    },
    {
        "question": "10. Wat is de beste aanpak van criminaliteit?",
        "options": {
            "A": "Strenger straffen is cruciaal. We hebben minimumstraffen, een zerotolerancebeleid en meer blauw op straat nodig. Criminele vreemdelingen worden direct uitgezet.",
            "B": "Een balans tussen preventie en repressie. We investeren in wijkagenten, jeugdwerk en het wegnemen van oorzaken, maar treden ook daadkrachtig op tegen zware criminaliteit en ondermijning.",
            "C": "De focus moet liggen op preventie, herstel en het aanpakken van de maatschappelijke oorzaken van criminaliteit, zoals armoede en ongelijkheid. Korte gevangenisstraffen werken vaak averechts."
        },
        "scores": { "A": ["PVV", "FvD", "JA21", "SGP", "BBB"], "B": ["VVD", "CDA", "NSC", "CU", "D66"], "C": ["GroenLinks-PvdA", "SP", "PvdD", "Volt", "DENK"] }
    },
    {
        "question": "11. Hoe moet het belastingstelsel worden hervormd?",
        "options": {
            "A": "We moeten de belastingen op werk verlagen en op vermogen, winst en vervuiling verhogen. De sterkste schouders dragen de zwaarste lasten en we schaffen fossiele subsidies af.",
            "B": "Het stelsel moet eenvoudiger en voorspelbaarder, met een verschuiving van lasten op arbeid naar consumptie. Het moet lonen om te werken en we moeten het toeslagencircus afbouwen.",
            "C": "Radicale lastenverlaging en versimpeling is nodig. We gaan naar een vlaktaks, schaffen de erf- en schenkbelasting af en verlagen de btw en accijnzen fors."
        },
        "scores": { "A": ["GroenLinks-PvdA", "SP", "PvdD", "Volt", "DENK", "CU"], "B": ["D66", "CDA", "NSC", "VVD", "BBB"], "C": ["FvD", "PVV", "JA21", "SGP"] }
    },
    {
        "question": "12. Hoe kijkt u naar de positie van LHBTIQA+ personen?",
        "options": {
            "A": "We moeten de rechten en veiligheid van LHBTIQA+ personen actief beschermen en bevorderen, met inclusief onderwijs, een verbod op conversietherapie en een moderne transgenderwet.",
            "B": "Iedereen is vrij om te zijn wie die is, maar de overheid moet neutraal zijn. We zijn kritisch op 'regenboogdwang' of ideologische thema's die op scholen worden opgedrongen.",
            "C": "Het traditionele gezin van man en vrouw is de hoeksteen van de samenleving. We verzetten ons tegen 'genderideologie' en de uitholling van het verschil tussen man en vrouw."
        },
        "scores": { "A": ["D66", "Volt", "GroenLinks-PvdA", "PvdD", "SP", "VVD", "CDA", "CU", "NSC"], "B": ["BBB", "JA21", "PVV", "DENK"], "C": ["SGP", "FvD"] }
    },
    {
        "question": "13. Wat is uw standpunt over de maximumsnelheid op snelwegen?",
        "options": {
            "A": "De maximumsnelheid moet permanent 100 km/u zijn, dag en nacht. Dit is beter voor het klimaat, de stikstofuitstoot, de luchtkwaliteit en de verkeersveiligheid.",
            "B": "De maximumsnelheid kan, waar het veilig kan, weer omhoog naar 130 of 140 km/u. De auto is een belangrijk vervoermiddel en de huidige beperking is onnodige betutteling.",
            "C": "Een flexibele snelheid is een optie, afhankelijk van de verkeersdrukte en milieuomstandigheden. We moeten pragmatisch zijn en kijken naar wat werkt."
        },
        "scores": { "A": ["GroenLinks-PvdA", "PvdD", "SP", "CU", "D66", "Volt"], "B": ["PVV", "FvD", "JA21", "BBB"], "C": ["VVD", "CDA", "NSC", "DENK"] }
    },
    {
        "question": "14. Hoe moet de overheid het lerarentekort aanpakken?",
        "options": {
            "A": "Door de werkdruk te verlagen met kleinere klassen, meer ondersteunend personeel en minder administratie. Een hoger salaris is essentieel om het beroep aantrekkelijker te maken.",
            "B": "Door te focussen op de basisvaardigheden en de professionaliteit van de leraar te herstellen. We moeten zij-instromers en praktijkdocenten stimuleren en de PABO verbeteren.",
            "C": "Door de focus terug te brengen naar kerntaken: rekenen, taal en geschiedenis, zonder 'woke-indoctrinatie'. Politiek neutrale leraren en discipline in de klas zijn de oplossing."
        },
        "scores": { "A": ["SP", "GroenLinks-PvdA", "PvdD", "D66", "Volt", "CU", "DENK", "NSC", "VVD"], "B": ["CDA", "BBB", "JA21"], "C": ["FvD", "PVV", "SGP"] }
    },
    {
        "question": "15. Wat is uw visie op het conflict tussen Israël en de Palestijnen?",
        "options": {
            "A": "Nederland moet Israël onvoorwaardelijk steunen. Het is de enige democratie in de regio en heeft het recht zich te verdedigen tegen terreur. De ambassade moet naar Jeruzalem.",
            "B": "We streven naar een tweestatenoplossing met een veilig Israël naast een levensvatbare Palestijnse staat. Het internationaal recht moet worden gerespecteerd en geweld van beide kanten veroordeeld.",
            "C": "Nederland moet de Palestijnse staat erkennen en sancties instellen tegen Israël vanwege de bezetting, apartheid en oorlogsmisdaden. We stoppen de militaire samenwerking."
        },
        "scores": { "A": ["SGP", "PVV", "FvD", "JA21"], "B": ["CDA", "VVD", "NSC", "CU", "BBB"], "C": ["PvdD", "GroenLinks-PvdA", "DENK", "SP", "D66", "Volt"] }
    },
    {
        "question": "16. Hoe moet de overheid de macht van grote techbedrijven (Big Tech) aanpakken?",
        "options": {
            "A": "Door te investeren in Europese alternatieven en digitale autonomie. We moeten onze afhankelijkheid van Amerikaanse en Chinese techreuzen verkleinen en onze data beschermen.",
            "B": "Door strenge regulering, het aanpakken van monopolies en het beboeten van bedrijven die privacy schenden of desinformatie verspreiden. De overheid moet de burger beschermen.",
            "C": "De overheid moet terughoudend zijn met ingrijpen. De vrije markt en innovatie mogen niet worden belemmerd. Focus op cyberveiligheid en het wegnemen van onnodige regels."
        },
        "scores": { "A": ["Volt", "D66", "GroenLinks-PvdA"], "B": ["PvdD", "SP", "CDA", "CU", "NSC", "DENK"], "C": ["VVD", "BBB", "FvD", "PVV", "JA21", "SGP"] }
    },
    {
        "question": "17. Wat is de beste manier om het openbaar vervoer te verbeteren?",
        "options": {
            "A": "Het OV moet (bijna) gratis worden. Het is een publieke basisvoorziening die voor iedereen toegankelijk moet zijn, goed voor sociale verbinding en het klimaat.",
            "B": "Door fors te investeren in nieuwe verbindingen (zoals de Lelylijn), betere frequenties en comfort, zodat het een aantrekkelijk alternatief wordt voor de auto.",
            "C": "De focus moet liggen op efficiëntie en betaalbaarheid. Het streekvervoer moet behouden blijven, maar de auto blijft essentieel."
        },
        "scores": { "A": ["SP", "DENK", "GroenLinks-PvdA", "PvdD"], "B": ["D66", "Volt", "CDA", "CU", "NSC"], "C": ["PVV", "FvD", "BBB", "JA21", "VVD", "SGP"] }
    },
    {
        "question": "18. Hoe moet de overheid omgaan met softdrugs?",
        "options": {
            "A": "We moeten de hele keten, van teelt tot verkoop, reguleren en legaliseren. Dit haalt de handel uit de criminaliteit en maakt controle op kwaliteit mogelijk.",
            "B": "Het gedoogbeleid moet behouden blijven, maar we moeten wel strenger optreden tegen de georganiseerde misdaad en overlast. Het wietexperiment moet zorgvuldig worden geëvalueerd.",
            "C": "Alle coffeeshops moeten dicht en we moeten het gebruik ontmoedigen. Drugsgebruik is schadelijk en de overheid moet een drugsvrije samenleving nastreven."
        },
        "scores": { "A": ["D66", "GroenLinks-PvdA", "PvdD", "Volt", "FvD"], "B": ["CDA", "VVD", "NSC", "JA21", "BBB"], "C": ["CU", "SP", "SGP", "PVV", "DENK"] }
    },
    {
        "question": "19. Wat is uw standpunt over de monarchie?",
        "options": {
            "A": "De monarchie moet worden afgeschaft en Nederland moet een republiek worden. Een erfelijk staatshoofd is ondemocratisch.",
            "B": "De koning moet alleen een ceremoniële rol hebben. De politieke invloed moet verdwijnen en de koninklijke familie moet belasting betalen.",
            "C": "Het Koningshuis is een belangrijk symbool van nationale eenheid en traditie. We koesteren de monarchie en de rol die de Koning speelt, bijvoorbeeld bij de kabinetsformatie."
        },
        "scores": { "A": ["GroenLinks-PvdA", "SP", "DENK"], "B": ["D66", "Volt", "PvdD", "PVV"], "C": ["CDA", "VVD", "BBB", "JA21", "SGP", "NSC", "CU"] }
    },
    {
        "question": "20. Dierenrechten moeten...",
        "options": {
            "A": "...worden verankerd in de Grondwet. De intrinsieke waarde van dieren moet leidend zijn in alle wet- en regelgeving, met een einde aan de bio-industrie en de jacht.",
            "B": "...worden geborgd door goede welzijnsregels en handhaving. We moeten streven naar een dierwaardige veehouderij, maar de rol van dieren in voedselproductie en sport erkennen.",
            "C": "...in balans zijn met de belangen van mensen en de economie. Aanvullende regels zijn niet nodig en het huidige niveau van dierenwelzijn is voldoende."
        },
        "scores": { "A": ["PvdD", "GroenLinks-PvdA", "SP", "Volt", "D66", "DENK", "CU"], "B": ["CDA", "NSC", "VVD", "BBB"], "C": ["JA21", "SGP", "PVV", "FvD"] }
    },
    {
        "question": "21. Wat is uw visie op abortuswetgeving?",
        "options": {
            "A": "Abortus is een recht en moet uit het Wetboek van Strafrecht. De keuzevrijheid en lichamelijke autonomie van de vrouw staan voorop.",
            "B": "De huidige wetgeving biedt een zorgvuldige balans tussen de beschermwaardigheid van het ongeboren leven en de noodsituatie van de vrouw. We handhaven deze wet.",
            "C": "Het ongeboren leven moet beschermd worden. De abortuswet moet worden ingetrokken of fors worden aangescherpt, met als doel het aantal abortussen drastisch te verminderen."
        },
        "scores": { "A": ["D66", "GroenLinks-PvdA", "PvdD", "Volt", "SP", "VVD"], "B": ["CDA", "CU", "NSC", "BBB", "JA21", "DENK", "PVV"], "C": ["SGP", "FvD"] }
    },
    {
        "question": "22. Hoe moet de overheid omgaan met kunst en cultuur?",
        "options": {
            "A": "De overheid moet fors investeren in een diverse en toegankelijke cultuursector. Kunst is geen luxe, maar essentieel voor een vrije en verbonden samenleving.",
            "B": "Cultuur moet geworteld zijn in onze tradities en gemeenschappen. Subsidies moeten meer naar de regio en lokale initiatieven gaan, met waardering voor ons erfgoed.",
            "C": "De financiering van de publieke omroep moet stoppen en de cultuursector moet minder afhankelijk zijn van subsidies. De focus ligt op onze eigen identiteit en geschiedenis, zonder 'woke'."
        },
        "scores": { "A": ["GroenLinks-PvdA", "D66", "Volt", "PvdD", "SP", "CU", "NSC"], "B": ["CDA", "BBB", "VVD", "DENK", "JA21"], "C": ["FvD", "PVV", "SGP"] }
    },
    {
        "question": "23. Wat is de rol van de overheid bij het bestrijden van armoede?",
        "options": {
            "A": "De overheid heeft de plicht om armoede uit te bannen. Dit vereist een forse verhoging van het sociaal minimum, het afschaffen van het toeslagenstelsel en het garanderen van basisvoorzieningen.",
            "B": "De overheid biedt een vangnet voor wie het echt nodig heeft, maar de focus moet liggen op het stimuleren van werk en eigen verantwoordelijkheid. We moeten het stelsel vereenvoudigen en werken lonend maken.",
            "C": "Een kleinere overheid en lagere belastingen zijn de beste manieren om welvaart te creëren. De focus ligt op het stimuleren van de economie, niet op het uitdelen van uitkeringen."
        },
        "scores": { "A": ["SP", "GroenLinks-PvdA", "PvdD", "Volt", "DENK", "CU", "NSC"], "B": ["CDA", "VVD", "D66", "BBB", "JA21"], "C": ["FvD", "PVV", "SGP"] }
    },
    {
        "question": "24. Hoe kijkt u naar de rol van de vrije markt in publieke sectoren zoals zorg en onderwijs?",
        "options": {
            "A": "Marktwerking moet zo veel mogelijk worden teruggedrongen. Zorg, onderwijs en wonen zijn publieke voorzieningen, geen verdienmodel voor private investeerders.",
            "B": "Een gereguleerde markt kan bijdragen aan efficiëntie en keuzevrijheid, maar de overheid moet wel de publieke belangen en toegankelijkheid bewaken. Een goede balans is nodig.",
            "C": "De vrije markt en concurrentie leiden tot betere kwaliteit en lagere kosten. De overheid moet zich zo min mogelijk bemoeien met de inrichting van deze sectoren."
        },
        "scores": { "A": ["SP", "GroenLinks-PvdA", "PvdD", "Volt", "DENK"], "B": ["D66", "CDA", "CU", "NSC", "VVD", "BBB"], "C": ["FvD", "PVV", "JA21", "SGP"] }
    },
    {
        "question": "25. Hoe moet Nederland omgaan met zijn koloniale verleden en slavernijverleden?",
        "options": {
            "A": "Excuses moeten worden ingetrokken. We moeten trots zijn op onze geschiedenis en helden, en stoppen met de 'weg-met-ons' mentaliteit en schaamtecultuur.",
            "B": "Erkenning en excuses zijn belangrijk, maar de focus moet liggen op de toekomst. We moeten investeren in bewustwording en educatie, maar herstelbetalingen gaan te ver.",
            "C": "Na excuses moet herstel volgen. Dit betekent een nationaal slavernijmuseum, Keti Koti als nationale feestdag, herstelbetalingen en het actief bestrijden van de doorwerking van het verleden."
        },
        "scores": { "A": ["FvD", "PVV"], "B": ["JA21", "BBB", "VVD", "CDA", "SGP", "NSC", "CU"], "C": ["DENK", "GroenLinks-PvdA", "PvdD", "Volt", "SP", "D66"] }
    },
    {
        "question": "26. Welke rol ziet u voor burgerinspraak, zoals referenda of burgerberaden?",
        "options": {
            "A": "Directe democratie is essentieel. We moeten bindende referenda naar Zwitsers model invoeren, zodat burgers direct kunnen beslissen over belangrijke kwesties.",
            "B": "Burgerberaden en referenda kunnen een waardevolle aanvulling zijn op de representatieve democratie, om het draagvlak te vergroten en de politiek beter te informeren.",
            "C": "De representatieve democratie is het uitgangspunt. Gekozen volksvertegenwoordigers maken de afwegingen. Referenda kunnen leiden tot polarisatie en simplificatie."
        },
        "scores": { "A": ["FvD", "SP", "PVV", "JA21"], "B": ["PvdD", "GroenLinks-PvdA", "D66", "Volt", "CU", "NSC", "DENK"], "C": ["CDA", "VVD", "BBB", "SGP"] }
    },
    {
        "question": "27. Hoe moet de overheid omgaan met luchtvaart en toerisme?",
        "options": {
            "A": "De luchtvaart moet fors krimpen om klimaatdoelen te halen en overlast te beperken. Dit betekent minder vliegbewegingen, een verbod op korte vluchten en privéjets, en het sluiten van regionale vliegvelden.",
            "B": "Luchtvaart is essentieel voor onze economie en internationale verbinding. Schiphol moet een belangrijke hub blijven en kunnen groeien. Vliegtaksen en andere belemmeringen moeten worden verminderd of afgeschaft.",
            "C": "De economische waarde van de luchtvaart moet in balans zijn met de impact op mens en milieu. We sturen op verduurzaming met CO2-plafonds en een eerlijke vliegbelasting, zonder de sector onnodig te laten krimpen."
        },
        "scores": { "A": ["PvdD", "GroenLinks-PvdA", "SP", "CU"], "B": ["VVD", "PVV", "FvD", "BBB", "JA21", "DENK"], "C": ["CDA", "D66", "NSC", "Volt", "SGP"] }
    },
    {
        "question": "28. Wat is uw visie op belastingen op consumptie, zoals btw en heffingen op suiker of vlees?",
        "options": {
            "A": "De btw op gezonde voeding zoals groente en fruit moet naar 0%. Daarnaast voeren we 'sintaksen' in op ongezonde of vervuilende producten, zoals een suikertaks en een vlees- of slachttaks.",
            "B": "Het huidige systeem is in balans. Een suikertaks is bespreekbaar om gezondheid te stimuleren, maar we zijn terughoudend met andere nieuwe heffingen die de boodschappen duurder maken.",
            "C": "De btw op boodschappen moet worden afgeschaft. We zijn tegen betuttelende belastingen zoals een suiker- of vleestaks. Mensen kunnen zelf verstandige keuzes maken."
        },
        "scores": { "A": ["GroenLinks-PvdA", "PvdD", "SP", "DENK", "D66", "Volt", "CU"], "B": ["VVD", "CDA", "NSC"], "C": ["PVV", "FvD", "BBB", "SGP", "JA21"] }
    },
    {
        "question": "29. Hoe kijkt u naar de belasting op grote vermogens en erfenissen?",
        "options": {
            "A": "De belastingen op zeer grote vermogens en erfenissen moeten fors omhoog. We voeren een miljonairsbelasting in, want de sterkste schouders moeten de zwaarste lasten dragen.",
            "B": "Het huidige systeem is redelijk in balans. We moeten waken voor kapitaalvlucht en het vestigingsklimaat niet schaden met drastische verhogingen.",
            "C": "De erf- en schenkbelasting moet worden afgeschaft. Vermogen is al belast en moet vrij kunnen worden overgedragen. We belasten vermogen zo min mogelijk."
        },
        "scores": { "A": ["GroenLinks-PvdA", "PvdD", "SP", "CU", "D66", "Volt", "DENK"], "B": ["VVD", "CDA", "NSC", "BBB"], "C": ["FvD", "JA21", "PVV", "SGP"] }
    },
    {
        "question": "30. Wat is uw standpunt over de belastingen voor bedrijven en de industrie?",
        "options": {
            "A": "Grote bedrijven moeten meer winstbelasting betalen. Fossiele subsidies en belastingvoordelen voor vervuilende industrie worden afgeschaft. Ook de expatregeling schaffen we af.",
            "B": "Het vestigingsklimaat is belangrijk. We streven naar een gelijk speelveld in Europa en zijn terughoudend met extra nationale heffingen die onze concurrentiepositie schaden.",
            "C": "De winstbelasting en regeldruk moeten omlaag. We schrappen nationale CO₂-heffingen en behouden gunstige regelingen zoals de innovatiebox om ondernemerschap te stimuleren."
        },
        "scores": { "A": ["PvdD", "GroenLinks-PvdA", "SP", "D66", "Volt", "CU", "DENK"], "B": ["VVD", "CDA", "NSC"], "C": ["FvD", "PVV", "JA21", "SGP", "BBB"] }
    }
];
