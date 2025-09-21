const STAGE_CLASS_MAP = {
  "Lågstadiet (åk 1-3)": "stage-low",
  "Mellanstadiet (åk 4-6)": "stage-mid",
  "Högstadiet (åk 7-9)": "stage-high"
};

const TAGS = [
  "Digitala basfärdigheter",
  "Digital produktion",
  "Källkritik",
  "AI & promptdesign",
  "Datasäkerhet",
  "Etik & ansvar",
  "Samarbete & kommunikation",
  "Programmering & data",
  "Välbefinnande",
  "Analys & visualisering"
];

const competencyData = [
  {
    subject: "Svenska",
    grade: "Lågstadiet (åk 1-3)",
    title: "Skrivprocess med digitalt stöd",
    description: "Eleverna tränar på att producera, spara och dela enkla texter digitalt, förstå filstruktur och använda gemensamma dokument på ett ansvarsfullt sätt.",
    keyActivities: [
      "Skapa ett klassbrev i ett delat dokument där eleverna skriver en mening var och jämför med handskrivna versioner.",
      "Öva på att döpa filer och sortera dem i mappar kopplade till olika mottagare eller syften."
    ],
    aiIntegration: "Testa att tillsammans formulera en prompt till en AI-chatt för att generera idéer till brevets inledning och diskutera vad som blir bra eller missvisande.",
    existingPractice: "Koppla till arbetet med återberättande texter, mottagaranpassning och muntlig respons i skrivprocessen.",
    tools: ["Skolans e-postutkast", "Delade dokument", "Dikteringsfunktion"],
    tags: ["Digitala basfärdigheter", "AI & promptdesign", "Samarbete & kommunikation"]
  },
  {
    subject: "Svenska",
    grade: "Mellanstadiet (åk 4-6)",
    title: "Källkritisk läsning av AI-genererade texter",
    description: "Eleverna jämför AI-genererade sammanfattningar med ursprungstexten, tränar på att hitta fel, luckor och bias och formulerar förbättringsförslag.",
    keyActivities: [
      "Låt AI sammanfatta en faktatext och markera tillsammans i originalet vad som saknas eller vinklats.",
      "Utveckla klassens checklista för källkritik inklusive frågor om träningsdata, hallucinationer och auktoritet."
    ],
    aiIntegration: "Eleverna skriver om sina upptäckter i AI:t med uppföljande prompts för att se hur responsen förändras.",
    existingPractice: "Ansluter till kursplanens krav på informationssökning, källkritik och textrespons.",
    tools: ["AI-chatt", "Digitalt anteckningsverktyg", "Markering i PDF"],
    tags: ["Källkritik", "AI & promptdesign", "Etik & ansvar"]
  },
  {
    subject: "Svenska",
    grade: "Högstadiet (åk 7-9)",
    title: "AI som skrivpartner med ansvar",
    description: "Eleverna använder AI för planering, språklig variation och kamratrespons men dokumenterar processen och reflekterar över människa-maskin-samarbetet.",
    keyActivities: [
      "Skapa promptkort som hjälper eleverna att be AI om struktur, stil och kritisk granskning utan att överlåta kreativiteten.",
      "Genomför kamratrespons där elever jämför AI-stödets förslag med egna förbättringar och diskuterar trovärdighet."
    ],
    aiIntegration: "Eleverna loggar hur AI har använts, motiverar vilka delar som är helt egna och vilka som bygger på maskinellt stöd.",
    existingPractice: "Bygger vidare på skrivprocessen, argumentation och retorik i svenska.",
    tools: ["AI-chatt", "Versionshistorik i dokument", "Språkverktyg"],
    tags: ["AI & promptdesign", "Etik & ansvar", "Samarbete & kommunikation"]
  },
  {
    subject: "Engelska",
    grade: "Lågstadiet (åk 1-3)",
    title: "Multimodal digital storytelling",
    description: "Eleverna producerar korta digitala bildspel med text, ljud och egna bilder för att öva vardagsbegrepp och uttal.",
    keyActivities: [
      "Skapa en bildserie om en vardagssituation, spela in röstberättelse och publicera i klassens skyddade galleri.",
      "Bygg ett bildbibliotek i gemensam mapp där eleverna tränar på att namnge filer på engelska."
    ],
    aiIntegration: "Läraren visar hur AI kan föreslå enkla ordlistor eller bildidéer, och klassen diskuterar vad som är lämpligt att använda.",
    existingPractice: "Stödjer arbetet med muntlig interaktion, ordförråd och digitala verktyg i engelska.",
    tools: ["Bildspelsapp", "Ljudinspelningsverktyg", "Delade mappar"],
    tags: ["Digital produktion", "Digitala basfärdigheter", "Samarbete & kommunikation"]
  },
  {
    subject: "Engelska",
    grade: "Mellanstadiet (åk 4-6)",
    title: "Samarbete i delade dokument",
    description: "Eleverna förbereder ett presentationsmanus i par med kommentarsfunktioner, tränar på netikett och hur man ger konkret feedback digitalt.",
    keyActivities: [
      "Använd kommentarsfältet för att ge förbättringsförslag och följ versionshistoriken för att synliggöra bidrag.",
      "Formulera klassens digitala samarbetsregler och koppla dem till skolans ordningsregler."
    ],
    aiIntegration: "Testa AI-stöd för att få omformuleringar och diskutera vilka variationer som stärker budskapet.",
    existingPractice: "Knuten till muntliga och skriftliga presentationer samt strategier för lärande.",
    tools: ["Delade dokument", "Kommentarsfunktioner", "AI-språkstöd"],
    tags: ["Samarbete & kommunikation", "Digital produktion", "Etik & ansvar"]
  },
  {
    subject: "Engelska",
    grade: "Högstadiet (åk 7-9)",
    title: "AI-stödd översättning och biasanalys",
    description: "Eleverna jämför egna översättningar med AI-genererade alternativ, identifierar fel, kulturella nyanser och bias i uttryck.",
    keyActivities: [
      "Skapa en tabell med typiska fel AI gör i översättningar och utveckla strategier för manuell kontroll.",
      "Analysera hur AI:s ton förändras beroende på prompt och vilka värderingar som synliggörs."
    ],
    aiIntegration: "Eleverna skriver reflektion om när AI-översättning är hjälpsam respektive riskfylld och hur ansvarsfördelningen ser ut.",
    existingPractice: "Ansluter till översättningsstrategier, interkulturell förståelse och muntlig framställning.",
    tools: ["AI-översättare", "Gloslistor", "Digitala ordlistor"],
    tags: ["AI & promptdesign", "Källkritik", "Etik & ansvar"]
  },
  {
    subject: "Matematik",
    grade: "Lågstadiet (åk 1-3)",
    title: "Digitala laborationer med matematiska begrepp",
    description: "Eleverna använder digitala manipulativ och spel för att utforska taluppfattning, mönster och enkel problemlösning.",
    keyActivities: [
      "Samla skärmdumpar i en mapp för att visa hur olika strategier testats och diskutera vilka som fungerar bäst.",
      "Jämför AI-förklaringar av ett mattespel med elevernas egna ord och markera skillnader."
    ],
    aiIntegration: "Testa att fråga AI om flera sätt att förklara en strategi och värdera begreppslig precision.",
    existingPractice: "Kopplat till taluppfattning, problemlösning och resonemang.",
    tools: ["Matteappar", "Skärminspelning", "AI-chatt"],
    tags: ["Digitala basfärdigheter", "Programmering & data", "Analys & visualisering"]
  },
  {
    subject: "Matematik",
    grade: "Mellanstadiet (åk 4-6)",
    title: "Datainsamling och visualisering i kalkylark",
    description: "Eleverna genomför mindre undersökningar, matar in resultat i kalkylark och skapar diagram som tolkas kritiskt.",
    keyActivities: [
      "Bygg en klassdatabas över rörelsevanor och låt AI föreslå rubriker eller diagramtyper att diskutera.",
      "Jämför automatiskt genererade diagram med egenhändigt skapade och resonera om tolkning."
    ],
    aiIntegration: "AI används för att föreslå tydligare rubriker eller beskriva trender, vilket eleverna värderar mot egen analys.",
    existingPractice: "Stödjer arbete med statistik, proportionalitet och resonemang.",
    tools: ["Kalkylark", "Formulär", "AI-assistent"],
    tags: ["Programmering & data", "Analys & visualisering", "Digital produktion"]
  },
  {
    subject: "Matematik",
    grade: "Högstadiet (åk 7-9)",
    title: "AI som problemlösningscoach",
    description: "Eleverna jämför egna lösningar med AI-förslag, identifierar fel och bias i resonemang samt dokumenterar beslutsprocessen.",
    keyActivities: [
      "Låt AI föreslå lösningssteg till ett öppet problem och markera var logiken brister eller behöver precisering.",
      "Bygg kontrollfrågor som alltid ställs till AI för att säkerställa rimlighet och enhetlighet i svaren."
    ],
    aiIntegration: "Eleverna formulerar riktlinjer för när AI-stöd är tillåtet, vilka kontroller som krävs och hur detta redovisas.",
    existingPractice: "Bygger på problemlösning, bevisföring och resonemang i kursplanen.",
    tools: ["AI-chatt", "CAS-verktyg", "Digitala whiteboards"],
    tags: ["AI & promptdesign", "Programmering & data", "Källkritik"]
  },
  {
    subject: "Biologi",
    grade: "Lågstadiet (åk 1-3)",
    title: "Digital naturspaning och artloggar",
    description: "Eleverna dokumenterar närmiljön med foto och ljud, tränar på att beskriva livscykler och gör enkla jämförelser mellan arter.",
    keyActivities: [
      "Skapa en digital loggbok där eleverna laddar upp bilder och ljudklipp från skolgården och skriver korta observationer.",
      "Jämför AI-genererade artbeskrivningar med faktaböcker och resonera om vad som saknas."
    ],
    aiIntegration: "Eleverna testar att be en bildigenkännings-AI om artförslag och diskuterar hur svaren behöver kontrolleras.",
    existingPractice: "Kopplat till dokumentation av växter och djur samt enkla fältstudier.",
    tools: ["Surfplatta", "Digital lärlogg", "AI-bildigenkänning"],
    tags: ["Digitala basfärdigheter", "Analys & visualisering", "Källkritik"]
  },
  {
    subject: "Biologi",
    grade: "Mellanstadiet (åk 4-6)",
    title: "Ekosystem i datastudio",
    description: "Eleverna samlar data om närmiljön, jämför med öppna datakällor och analyserar samband mellan faktorer som temperatur, ljus och artrikedom.",
    keyActivities: [
      "Mät fuktighet och temperatur med sensorer, visualisera resultaten och låt AI föreslå tolkningar som eleverna granskar.",
      "Skapa en digital fältguide med bilder, ljud och korta texter från olika biotoper."
    ],
    aiIntegration: "AI används för att hitta mönster och generera hypoteser om ekosystemet som eleverna testar mot sina data.",
    existingPractice: "Stödjer systematiska undersökningar, ekologi och sambanden i naturen.",
    tools: ["Mikro:bit", "Kalkylark", "AI-analysverktyg"],
    tags: ["Programmering & data", "Analys & visualisering", "AI & promptdesign"]
  },
  {
    subject: "Biologi",
    grade: "Högstadiet (åk 7-9)",
    title: "AI-stödd tolkning av biologiska data",
    description: "Eleverna använder AI för att analysera större datamängder, exempelvis artinventeringar eller folkhälsostatistik, och kopplar resultaten till biologiska teorier.",
    keyActivities: [
      "Bygg en kontrollista för hur AI-genererade diagram ska tolkas och vilka källor som måste anges.",
      "Jämför olika AI-modellers slutsatser om samma dataset och diskutera möjliga bias."
    ],
    aiIntegration: "Eleverna använder AI för att hitta avvikelser i data och formulerar åtgärdsförslag som vägs mot biologisk kunskap.",
    existingPractice: "Bygger på arbetssätt med hypoteser, datakritik och rapportskrivning.",
    tools: ["AI-chatt", "Statistikverktyg", "Laborationsprotokoll"],
    tags: ["AI & promptdesign", "Analys & visualisering", "Etik & ansvar"]
  },
  {
    subject: "Fysik",
    grade: "Lågstadiet (åk 1-3)",
    title: "Kraft och rörelse med digitala experiment",
    description: "Eleverna använder enkel simulering för att se hur lutning, friktion och tyngd påverkar rörelse.",
    keyActivities: [
      "Filma kulbanor och jämför med en digital simulering, diskutera vilka variabler som ändras.",
      "Skapa gemensamma begreppskort med bilder, ljud och symboler för kraft, fart och riktning."
    ],
    aiIntegration: "AI hjälper eleverna att beskriva vad som händer i experimentet med egna ord.",
    existingPractice: "Kopplat till grundläggande fenomen om rörelse och kraft.",
    tools: ["Simuleringsapp", "Videoinspelning", "AI-berättare"],
    tags: ["Digitala basfärdigheter", "Analys & visualisering", "Samarbete & kommunikation"]
  },
  {
    subject: "Fysik",
    grade: "Mellanstadiet (åk 4-6)",
    title: "Sensordata och energiflöden",
    description: "Eleverna mäter ljus, ljud och temperatur med sensorer, jämför energiflöden och tränar på att dra slutsatser.",
    keyActivities: [
      "Skapa diagram över energiförbrukning i klassrummet och låt AI föreslå energismarta förbättringar.",
      "Dokumentera experiment med slowmotionfilm och kommentera vad som händer i olika steg."
    ],
    aiIntegration: "AI analyserar datan och hjälper eleverna att formulera hypoteser som de testar praktiskt.",
    existingPractice: "Knyter an till energi, värme och rörelse.",
    tools: ["Sensorpaket", "Kalkylark", "AI-analysverktyg"],
    tags: ["Programmering & data", "Analys & visualisering", "AI & promptdesign"]
  },
  {
    subject: "Fysik",
    grade: "Högstadiet (åk 7-9)",
    title: "Simulera fysikscenarier med AI",
    description: "Eleverna använder simuleringar och AI för att utforska till exempel kollisioner, elektricitet och astronomi.",
    keyActivities: [
      "Jämför en egen uträkning med AI:ns resultat och analysera avvikelser.",
      "Skapa en checklista för hur simuleringar ska valideras innan de används i redovisningar."
    ],
    aiIntegration: "Eleverna bygger prompts för att få AI att skapa scenarier utifrån givna parametrar och diskuterar rimlighet.",
    existingPractice: "Bygger på problemlösning och laborativt arbete i fysik.",
    tools: ["Simuleringsverktyg", "AI-chatt", "Datajournal"],
    tags: ["AI & promptdesign", "Analys & visualisering", "Etik & ansvar"]
  },
  {
    subject: "Kemi",
    grade: "Lågstadiet (åk 1-3)",
    title: "Blandningar och lösningar i dokumenterad verkstad",
    description: "Eleverna utforskar hur vardagsvätskor blandas, dokumenterar förändringar med foto och ljud och beskriver vad som händer.",
    keyActivities: [
      "Skapa bildserier över olika blandningar och använd AI för att ge rubrikförslag.",
      "Jämför AI:s förklaring av vad som händer med lärarens och leta skillnader."
    ],
    aiIntegration: "AI används som stöd för att beskriva processer och nya ord.",
    existingPractice: "Kopplat till enkla kemiska processer och dokumentation.",
    tools: ["Surfplatta", "Bildredigerare", "AI-berättare"],
    tags: ["Digitala basfärdigheter", "Analys & visualisering", "Källkritik"]
  },
  {
    subject: "Kemi",
    grade: "Mellanstadiet (åk 4-6)",
    title: "Virtuella laborationer och säkerhet",
    description: "Eleverna planerar och genomför enkla kemilabb digitalt innan praktiskt genomförande för att träna riskbedömning och dokumentation.",
    keyActivities: [
      "Använd en labbsimulering för att testa hypoteser och jämför med verkligt resultat.",
      "Skapa en digital säkerhetsaffisch där AI hjälper till att formulera tydliga instruktioner."
    ],
    aiIntegration: "AI ger förslag på risker och skyddsutrustning som eleverna verifierar.",
    existingPractice: "Stödjer laboratoriearbete, kemiska reaktioner och säkert arbetssätt.",
    tools: ["Labsimulator", "Checklista", "AI-chatt"],
    tags: ["Etik & ansvar", "Digital produktion", "Analys & visualisering"]
  },
  {
    subject: "Kemi",
    grade: "Högstadiet (åk 7-9)",
    title: "AI-assisterad labbdesign",
    description: "Eleverna använder AI för att föreslå laborationsupplägg, värdera risker och dokumentera förbättringar efter genomförande.",
    keyActivities: [
      "Skapa en matris för att jämföra AI-förslag med etablerade metoder och motivera valda ändringar.",
      "Analysera var träningsdata kan påverka kemiska resonemang och hur detta kan hanteras."
    ],
    aiIntegration: "Eleverna använder AI för att förutse möjliga produkter och restprodukter och dokumenterar hur detta kontrolleras.",
    existingPractice: "Bygger på laborativa metoder, kemisk jämvikt och analys.",
    tools: ["AI-chatt", "Laborationsprotokoll", "Digital portfölj"],
    tags: ["AI & promptdesign", "Källkritik", "Etik & ansvar"]
  },
  {
    subject: "Teknik",
    grade: "Lågstadiet (åk 1-3)",
    title: "Människa-maskin-samarbete med enkla robotar",
    description: "Eleverna programmerar enkla robotar eller appar för att förstå instruktioner, sekvenser och samspelet mellan människa och maskin.",
    keyActivities: [
      "Planera robotens rörelser i ett rutnät och diskutera vad som händer om instruktionen blir otydlig.",
      "Jämför mänskliga och maskinella styrkor genom korta rollspel."
    ],
    aiIntegration: "Introducera begreppet AI genom att jämföra regelstyrd programmering med verktyg som kan lära sig mönster.",
    existingPractice: "Knyter an till teknikämnets fokus på vardagsteknik och styrning.",
    tools: ["Bee-Bot", "Programmeringsapp", "Illustrationskort"],
    tags: ["Digitala basfärdigheter", "AI & promptdesign", "Etik & ansvar"]
  },
  {
    subject: "Teknik",
    grade: "Mellanstadiet (åk 4-6)",
    title: "Algoritmer, prototyper och felsökning",
    description: "Eleverna arbetar i designprocesser där digitala verktyg används för att skissa, simulera och testa tekniska lösningar.",
    keyActivities: [
      "Dokumentera prototyper i digital portfölj och analysera hur instruktioner förbättras mellan iterationer.",
      "Använd blockprogrammering för att automatisera en vardagsprocess och reflektera över risker."
    ],
    aiIntegration: "AI får föreslå förbättringar på prototyper eller koden, eleverna bedömer vad som är rimligt och säkert.",
    existingPractice: "Stödjer teknikens designprocess, styr- och reglersystem.",
    tools: ["Skissverktyg", "Blockprogrammering", "AI-assistent"],
    tags: ["Programmering & data", "Digital produktion", "Datasäkerhet"]
  },
  {
    subject: "Teknik",
    grade: "Högstadiet (åk 7-9)",
    title: "AI-stödd produktutveckling och etik",
    description: "Eleverna designar lösningar på autentiska problem med stöd av AI för research, idégenerering och riskanalys.",
    keyActivities: [
      "Skapa en matris för att väga för- och nackdelar med AI-förslag utifrån hållbarhet, integritet och funktion.",
      "Simulera användarresor där AI är del av systemet och analysera ansvarsfördelning."
    ],
    aiIntegration: "Eleverna dokumenterar hur mänskliga beslut kompletterar AI-förslagen och hur bias upptäcks.",
    existingPractice: "Kopplat till teknikens samhällsroll, systemtänkande och entreprenörskap.",
    tools: ["AI-idégenerator", "CAD light", "Projektplaneringsverktyg"],
    tags: ["AI & promptdesign", "Etik & ansvar", "Digital produktion"]
  },
  {
    subject: "Geografi",
    grade: "Lågstadiet (åk 1-3)",
    title: "Kartberättelser om närmiljön",
    description: "Eleverna ritar digitala kartor över sin väg till skolan, markerar viktiga platser och kopplar korta ljudberättelser till punkterna.",
    keyActivities: [
      "Skapa en enkel digital karta och jämför med satellitbild, diskutera vad som skiljer.",
      "Låt AI generera väderbeskrivningar för veckan och jämför med egna observationer."
    ],
    aiIntegration: "AI används som väderreporter och språkligt stöd när eleverna berättar om sin plats.",
    existingPractice: "Kopplat till närmiljö, karttecken och väder.",
    tools: ["Kartapp", "Ljudinspelningsverktyg", "AI-chatt"],
    tags: ["Digitala basfärdigheter", "Analys & visualisering", "Samarbete & kommunikation"]
  },
  {
    subject: "Geografi",
    grade: "Mellanstadiet (åk 4-6)",
    title: "Datajournal om klimatzoner",
    description: "Eleverna undersöker olika klimatzoner genom att samla data, använda digitala kartlager och skapa infographics.",
    keyActivities: [
      "Jämför data från SMHI med AI-genererade klimatprofiler och markera skillnader.",
      "Skapa en digital reserapport med bilder, källhänvisningar och reflektioner kring hållbarhet."
    ],
    aiIntegration: "AI hjälper till att formulera hypoteser om hur klimatet påverkar livsvillkor som eleverna granskar.",
    existingPractice: "Kopplat till naturresurser, klimat och hållbar utveckling.",
    tools: ["GIS-lager", "Infographic-verktyg", "AI-chatt"],
    tags: ["Analys & visualisering", "Källkritik", "Etik & ansvar"]
  },
  {
    subject: "Geografi",
    grade: "Högstadiet (åk 7-9)",
    title: "AI-stödd omvärldsanalys",
    description: "Eleverna använder öppna data, satellitbilder och AI för att analysera urbanisering, migration och klimatpåverkan.",
    keyActivities: [
      "Bygg storymaps med interaktiva kartor och AI-genererade texter som granskas kritiskt.",
      "Skapa beslutsunderlag med styrkor/svagheter för olika regioner och presentera i en paneldebatt."
    ],
    aiIntegration: "Eleverna använder AI för att sammanfatta rapporter och identifiera risker men dokumenterar källor och osäkerhet.",
    existingPractice: "Stödjer geografiska analyser, hållbar utveckling och globala samband.",
    tools: ["GIS-plattform", "Öppna data", "AI-sammanfattare"],
    tags: ["Analys & visualisering", "Källkritik", "Etik & ansvar"]
  },
  {
    subject: "Historia",
    grade: "Lågstadiet (åk 1-3)",
    title: "Digitala tidslinjer och begreppsbank",
    description: "Eleverna använder enkla digitala verktyg för att ordna historiska händelser och skapa bildbanker med förklaringar.",
    keyActivities: [
      "Bygg en klassgemensam tidslinje med drag-and-drop och diskutera källor till bilderna.",
      "Skapa etiketter till bilder och jämför med AI-förslag för att se om något blir fel."
    ],
    aiIntegration: "Använd AI för att föreslå kompletterande bilder eller fakta och kontrollera sanningshalten tillsammans.",
    existingPractice: "Kopplar till tidsuppfattning och historiska begrepp.",
    tools: ["Tidslinjeverktyg", "Bildredigerare", "AI-bildsök"],
    tags: ["Digital produktion", "Digitala basfärdigheter", "Källkritik"]
  },
  {
    subject: "Historia",
    grade: "Mellanstadiet (åk 4-6)",
    title: "Granska historiska källor med AI-stöd",
    description: "Eleverna låter AI sammanfatta källtexter, identifierar vad som utelämnas och tränar på att jämföra perspektiv.",
    keyActivities: [
      "Jämför AI:s sammanfattning av ett historiskt brev med klassens egna punkter.",
      "Skapa ett kontrollschema för hur källans ursprung, tendens och tid ska bedömas."
    ],
    aiIntegration: "Eleverna testar att fråga AI efter ursprungskällor och värderar svarens trovärdighet.",
    existingPractice: "Anknyter till historiemedvetande och källkritik.",
    tools: ["AI-chatt", "Digitala arkiv", "Anteckningsmall"],
    tags: ["Källkritik", "AI & promptdesign", "Analys & visualisering"]
  },
  {
    subject: "Historia",
    grade: "Högstadiet (åk 7-9)",
    title: "Narrativ konstruktion och bias",
    description: "Eleverna analyserar hur historiska narrativ förändras när AI omberättar dem, och identifierar vilka perspektiv som osynliggörs.",
    keyActivities: [
      "Låt AI skriva om en historisk händelse från olika aktörers perspektiv och jämför med forskningsbaserade källor.",
      "Skapa en checklista för att avslöja värdeladdade ord eller förenklingar."
    ],
    aiIntegration: "Eleverna producerar egen text med stöd av AI men redovisar hur de säkerställt källkritik och representation.",
    existingPractice: "Stödjer arbete med historiska förklaringar, källkritik och historiebruk.",
    tools: ["AI-textgenerator", "Samarbetsdokument", "Referenshanterare"],
    tags: ["Etik & ansvar", "Källkritik", "Samarbete & kommunikation"]
  },
  {
    subject: "Religionskunskap",
    grade: "Lågstadiet (åk 1-3)",
    title: "Digitala berättelser om högtider",
    description: "Eleverna samlar bilder, symboler och korta filmer om högtider och reflekterar över likheter och skillnader.",
    keyActivities: [
      "Skapa en gemensam digital bok där varje elev bidrar med en bild och en mening.",
      "Låt AI skapa en enkel förklarande text och jämför med elevernas egna ord."
    ],
    aiIntegration: "AI kan föreslå ord och fraser som eleverna granskar för att säkerställa respektfullt språk.",
    existingPractice: "Kopplat till traditioner och livsfrågor i elevernas närmiljö.",
    tools: ["Presentationsverktyg", "AI-textstöd", "Inspelningsapp"],
    tags: ["Digital produktion", "Etik & ansvar", "Samarbete & kommunikation"]
  },
  {
    subject: "Religionskunskap",
    grade: "Mellanstadiet (åk 4-6)",
    title: "Livsfrågor i digital dialog",
    description: "Eleverna undersöker religiösa och sekulära perspektiv genom att skapa intervjuer, poddar och digitala diskussioner.",
    keyActivities: [
      "Planera intervjufrågor tillsammans med AI, genomför samtal och publicera ett kort avsnitt.",
      "Jämför källor om samma ritual och skapa en visuell jämförelse."
    ],
    aiIntegration: "AI används som samtalspartner för att pröva olika argument som eleverna bemöter kritiskt.",
    existingPractice: "Stödjer arbete med etik, identitet och religiösa uttryck.",
    tools: ["Inspelningsverktyg", "Storyboard", "AI-chatt"],
    tags: ["Källkritik", "Etik & ansvar", "Samarbete & kommunikation"]
  },
  {
    subject: "Religionskunskap",
    grade: "Högstadiet (åk 7-9)",
    title: "AI som tolkningspartner",
    description: "Eleverna analyserar hur AI beskriver religiösa traditioner, identifierar stereotyper och skriver egna nyanserade tolkningar.",
    keyActivities: [
      "Jämför AI-genererade svar om etikfrågor med teologiska och filosofiska källor.",
      "Skapa digitala värderingsöversikter där eleverna väger olika perspektiv."
    ],
    aiIntegration: "Eleverna dokumenterar hur de faktagranskar AI-svar och hur de säkerställer ett respektfullt språk.",
    existingPractice: "Bygger på analys av religioners roll i samhället och individens identitet.",
    tools: ["AI-chatt", "Mindmap-verktyg", "Digitala källor"],
    tags: ["Etik & ansvar", "Källkritik", "Analys & visualisering"]
  },
  {
    subject: "Samhällskunskap",
    grade: "Lågstadiet (åk 1-3)",
    title: "Digitalt fotavtryck och integritet",
    description: "Eleverna utforskar hur information sprids online, vad ett digitalt fotavtryck är och hur man beter sig tryggt i digitala miljöer.",
    keyActivities: [
      "Kartlägg tillsammans vilka spår en enkel bilddelning lämnar och hur vi kan begränsa spridningen.",
      "Rollspela scenarier om vänförfrågningar och diskutera känslor kopplade till digitala möten."
    ],
    aiIntegration: "Visa hur AI kan känna igen ansikten eller föremål och prata om varför det kräver samtycke.",
    existingPractice: "Anknyter till värdegrund, rättigheter och skyldigheter online.",
    tools: ["Lärplattform", "Sekretessinställningar", "AI-demonstrationer"],
    tags: ["Datasäkerhet", "Etik & ansvar", "Välbefinnande"]
  },
  {
    subject: "Samhällskunskap",
    grade: "Mellanstadiet (åk 4-6)",
    title: "Faktagranskning och filterbubblor",
    description: "Eleverna analyserar nyhetsflöden, algoritmernas påverkan och tränar på att triangulera källor inklusive AI-genererat innehåll.",
    keyActivities: [
      "Jämför sökresultat i olika webbläsare och dokumentera skillnader.",
      "Låt AI sammanställa argument i en samhällsfråga och granska vinklar och källangivelser."
    ],
    aiIntegration: "Eleverna utvecklar rutiner för att verifiera AI-påståenden innan de sprids vidare.",
    existingPractice: "Kopplar till mediekunskap, demokratibegrepp och kritiskt tänkande.",
    tools: ["Nyhetsaggregator", "Källkritikmatris", "AI-chatt"],
    tags: ["Källkritik", "Etik & ansvar", "AI & promptdesign"]
  },
  {
    subject: "Samhällskunskap",
    grade: "Högstadiet (åk 7-9)",
    title: "Algoritmisk påverkan och demokrati",
    description: "Eleverna undersöker hur rekommendationssystem formar opinion, vilka data som samlas in och hur detta relaterar till rättigheter och makt.",
    keyActivities: [
      "Analysera ett socialt medieflöde över tid och identifiera hur interaktioner påverkar innehåll.",
      "Simulera valpåverkan med hjälp av AI-genererade budskap och diskutera ansvar."
    ],
    aiIntegration: "Eleverna skapar etiska riktlinjer för AI i samhällsinformation och argumenterar för reglering.",
    existingPractice: "Stödjer kursplanens mål om makt, demokrati och informationssamhället.",
    tools: ["Sociala medier-simulator", "Dataexport", "AI-textgenerator"],
    tags: ["Etik & ansvar", "Datasäkerhet", "AI & promptdesign"]
  },
  {
    subject: "Bild",
    grade: "Lågstadiet (åk 1-3)",
    title: "Digitalt bildskapande och filhantering",
    description: "Eleverna övar på att skapa och spara digitala bilder, namnge filer och reflektera över hur bilder kan delas säkert.",
    keyActivities: [
      "Skapa klassens gemensamma bilduppsättning i struktur med mappar per tema.",
      "Diskutera när det är okej att fotografera och hur samtycke fungerar."
    ],
    aiIntegration: "Visa hur AI-bildigenkänning kan identifiera motiv och prata om integritet och felkällor.",
    existingPractice: "Kopplat till bildframställning, verktyg och bildkommunikation.",
    tools: ["Ritapp", "Kamerasurfplatta", "Molnmapp"],
    tags: ["Digital produktion", "Digitala basfärdigheter", "Datasäkerhet"]
  },
  {
    subject: "Bild",
    grade: "Mellanstadiet (åk 4-6)",
    title: "Remixa och referera digitalt bildmaterial",
    description: "Eleverna kombinerar egna och fria bilder, tränar på att ange källor och prövar AI för att ta fram variationer.",
    keyActivities: [
      "Skapa moodboards med fria licenser och dokumentera källor i bildtexter.",
      "Låt AI föreslå bildidéer och diskutera upphovsrättsliga implikationer."
    ],
    aiIntegration: "AI används för att generera kompositionsförslag som eleverna kritiskt granskar.",
    existingPractice: "Ansluter till bildanalys, framställning och upphovsrätt.",
    tools: ["Collageverktyg", "CC-bildbank", "AI-bildgenerator"],
    tags: ["Etik & ansvar", "Digital produktion", "Källkritik"]
  },
  {
    subject: "Bild",
    grade: "Högstadiet (åk 7-9)",
    title: "AI-genererad bildkonst och estetik",
    description: "Eleverna experimenterar med AI-bildgeneratorer, analyserar visuella stilar, bias och etiska dimensioner.",
    keyActivities: [
      "Skapa ett galleri där varje AI-bild kompletteras med redovisning av prompt, källor och tolkning.",
      "Jämför AI-genererad konst med traditionella tekniker och diskutera skillnader."
    ],
    aiIntegration: "Eleverna utvecklar ansvarsfulla prompts och dokumenterar medskapat innehåll.",
    existingPractice: "Kopplat till samtidskonst, bildanalys och digitala tekniker.",
    tools: ["AI-bildgenerator", "Bildredigerare", "Reflektionslogg"],
    tags: ["AI & promptdesign", "Etik & ansvar", "Digital produktion"]
  },
  {
    subject: "Slöjd",
    grade: "Lågstadiet (åk 1-3)",
    title: "Digital inspirationsbank",
    description: "Eleverna samlar foton, färgpaletter och enkla instruktioner i en digital portfölj inför sina slöjdprojekt.",
    keyActivities: [
      "Skapa en gemensam moodboard och diskutera vilka material som passar.",
      "Använd AI för att beskriva arbetssteg och jämför med lärarens genomgång."
    ],
    aiIntegration: "AI ger förslag på mönster och arbetssätt som eleverna värderar utifrån svårighetsgrad och material.",
    existingPractice: "Kopplat till idéutveckling och planering i slöjden.",
    tools: ["Surfplatta", "Fotoapp", "AI-idégenerator"],
    tags: ["Digital produktion", "Samarbete & kommunikation", "Etik & ansvar"]
  },
  {
    subject: "Slöjd",
    grade: "Mellanstadiet (åk 4-6)",
    title: "CAD light och mönsterbank",
    description: "Eleverna skissar i enkla CAD-program eller mönsterverktyg, dokumenterar arbetsplan och delar återkoppling digitalt.",
    keyActivities: [
      "Skapa digitala ritningar som exporteras till laserskärare eller 3D-printer för prototyper.",
      "Låt AI föreslå materialkombinationer och resonera om hållbarhet och ekonomi."
    ],
    aiIntegration: "AI hjälper till att upptäcka risker eller föreslå förbättringar i konstruktionen.",
    existingPractice: "Ansluter till slöjdens designprocess och val av verktyg.",
    tools: ["CAD-verktyg", "3D-printer", "AI-rådgivare"],
    tags: ["Digital produktion", "Programmering & data", "Etik & ansvar"]
  },
  {
    subject: "Slöjd",
    grade: "Högstadiet (åk 7-9)",
    title: "Smart slöjd – dokumentera hållbar design",
    description: "Eleverna kombinerar traditionella tekniker med digital styrning, exempelvis e-textil eller laserskurna detaljer, och utvärderar hållbarhet.",
    keyActivities: [
      "Skapa en digital loggbok med bilder, mätvärden och reflektioner i varje steg.",
      "Använd AI för att beräkna materialåtgång och klimatavtryck, jämför med egna beräkningar."
    ],
    aiIntegration: "Eleverna definierar hur AI får stödja designprocessen och hur arbetsinsatsen redovisas.",
    existingPractice: "Bygger på problemlösning, materialkunskap och dokumentation i slöjd.",
    tools: ["E-textilkit", "Laserskärare", "AI-beräkningsstöd"],
    tags: ["AI & promptdesign", "Digital produktion", "Etik & ansvar"]
  },
  {
    subject: "Musik",
    grade: "Lågstadiet (åk 1-3)",
    title: "Digital rytm och ljudinspelning",
    description: "Eleverna spelar in rytmer och sånger, tränar på att använda mikrofoner och att lyssna kritiskt på inspelningar.",
    keyActivities: [
      "Skapa en enkel klasspodd där eleverna presenterar veckans sång och hur den spelades in.",
      "Diskutera hur man lagrar ljudfiler och vad som får delas."
    ],
    aiIntegration: "Visa hur AI kan transkribera ljud och prata om när det är lämpligt att spela in.",
    existingPractice: "Kopplar till att spela och sjunga i musik samt digitala verktyg.",
    tools: ["Inspelningsapp", "Delad ljudmapp", "AI-transkribering"],
    tags: ["Digitala basfärdigheter", "Digital produktion", "Samarbete & kommunikation"]
  },
  {
    subject: "Musik",
    grade: "Mellanstadiet (åk 4-6)",
    title: "Loop-baserad komposition online",
    description: "Eleverna bygger musik med loopar i molnbaserade verktyg, lär sig delningsetikett och samarbetar kring remixar.",
    keyActivities: [
      "Producera en klasslåt där grupper ansvarar för olika spår och ger respons via kommentarsfunktioner.",
      "Diskutera upphovsrätt, remixkultur och Creative Commons."
    ],
    aiIntegration: "Testa AI som föreslår ackordföljder och låt eleverna bedöma musikalisk kvalitet.",
    existingPractice: "Ansluter till musikskapande och lyssnande analys.",
    tools: ["Loopbaserat musikprogram", "Delade projekt", "AI-ackordgenerator"],
    tags: ["Digital produktion", "Samarbete & kommunikation", "Etik & ansvar"]
  },
  {
    subject: "Musik",
    grade: "Högstadiet (åk 7-9)",
    title: "AI-stödd mixning och upphovsrätt",
    description: "Eleverna använder AI-verktyg för mastring eller ljuddesign och bedömer etiska frågor kring sampling och rättigheter.",
    keyActivities: [
      "Jämför AI-genererad mastering med manuell mixning och diskutera skillnader.",
      "Analysera licensvillkor för AI-verktyg och skapa klassens etiska riktlinjer."
    ],
    aiIntegration: "Eleverna dokumenterar hur AI-inslag påverkar den kreativa processen och vilka beslut som kräver mänsklig kontroll.",
    existingPractice: "Knyter an till musikproduktion, respons och estetiska värden.",
    tools: ["AI-mastering", "DAW", "Licensdatabas"],
    tags: ["AI & promptdesign", "Etik & ansvar", "Digital produktion"]
  },
  {
    subject: "Idrott och hälsa",
    grade: "Lågstadiet (åk 1-3)",
    title: "Digital aktivitetsdagbok och integritet",
    description: "Eleverna registrerar rörelse i enkel digital logg, reflekterar över känslor och lär sig när det inte är lämpligt att dela hälsodata.",
    keyActivities: [
      "Skapa piktogram för aktiviteter och låt eleverna dokumentera hur de kände sig före och efter.",
      "Diskutera med hjälp av exempel vad personliga uppgifter är."
    ],
    aiIntegration: "Visa hur AI kan gissa ålder eller humör från bilder och prata om samtycke.",
    existingPractice: "Stödjer området hälsa och livsstil.",
    tools: ["Digital loggbok", "Bildkort", "AI-demonstration"],
    tags: ["Välbefinnande", "Datasäkerhet", "Digitala basfärdigheter"]
  },
  {
    subject: "Idrott och hälsa",
    grade: "Mellanstadiet (åk 4-6)",
    title: "Pulsmätare och dataanalys",
    description: "Eleverna använder pulsbälte eller klocka för att samla data, analyserar samband mellan aktivitet, återhämtning och välbefinnande.",
    keyActivities: [
      "Samla klassdata under olika aktiviteter och skapa diagram över pulszoner.",
      "Diskutera integritet kring hälsoappar och vilka data som delas vidare."
    ],
    aiIntegration: "Låt AI föreslå träningspass utifrån insamlad data och värdera förslagets rimlighet.",
    existingPractice: "Anknyter till kondition, hälsa och reflektion över levnadsvanor.",
    tools: ["Aktivitetsarmband", "Kalkylark", "AI-träningsapp"],
    tags: ["Analys & visualisering", "Välbefinnande", "Programmering & data"]
  },
  {
    subject: "Idrott och hälsa",
    grade: "Högstadiet (åk 7-9)",
    title: "AI-coachad träningsplan med kritisk blick",
    description: "Eleverna kombinerar egen data med AI-förslag på träningsprogram, väger etiska risker och dokumenterar besluten.",
    keyActivities: [
      "Skapa individuella träningsplaner och markera vilka delar som kommer från AI respektive egna val.",
      "Gör riskanalys kring överträning, kroppsideal och datadelning."
    ],
    aiIntegration: "Eleverna formulerar regler för hur AI-coacher får användas och hur data ska anonymiseras.",
    existingPractice: "Kopplat till hälsa, livsstil och reflektion kring mediernas påverkan.",
    tools: ["AI-träningsapp", "Digital loggbok", "Integritetsguide"],
    tags: ["AI & promptdesign", "Välbefinnande", "Etik & ansvar"]
  },
  {
    subject: "Hem- och konsumentkunskap",
    grade: "Lågstadiet (åk 1-3)",
    title: "Digital inköpslista och planering",
    description: "Eleverna skapar digitala listor, lär sig kategorisera varor och förstår skillnaden mellan privat och delad information.",
    keyActivities: [
      "Bygg veckans inköpslista i gemensamt dokument och diskutera vad som inte ska delas online.",
      "Sortera varor efter hållbarhet eller ursprung."
    ],
    aiIntegration: "Visa hur AI kan föreslå recept utifrån listan och diskutera vad som behöver kontrolleras.",
    existingPractice: "Knyter an till planering, konsumentkunskap och hushållsarbete.",
    tools: ["Delad lista", "Bilder", "AI-receptförslag"],
    tags: ["Digitala basfärdigheter", "Datasäkerhet", "Samarbete & kommunikation"]
  },
  {
    subject: "Hem- och konsumentkunskap",
    grade: "Mellanstadiet (åk 4-6)",
    title: "Prisjämförelse och falska recensioner",
    description: "Eleverna använder digitala verktyg för att jämföra priser, analysera recensioner och identifiera manipulativa mönster.",
    keyActivities: [
      "Granska AI-genererade recensioner och leta efter språkliga tecken på att de inte är mänskliga.",
      "Gör en tabell över pris, hållbarhet och kvalitet för att ta medvetna beslut."
    ],
    aiIntegration: "Eleverna provar att låta AI formulera frågor till kundtjänst och utvärderar svarens kvalitet.",
    existingPractice: "Anknyter till konsumenträtt, reklam och hållbar konsumtion.",
    tools: ["Prisjämförelseverktyg", "Kalkylark", "AI-chatt"],
    tags: ["Källkritik", "Digital produktion", "Etik & ansvar"]
  },
  {
    subject: "Hem- och konsumentkunskap",
    grade: "Högstadiet (åk 7-9)",
    title: "AI-planerade måltider och hållbarhet",
    description: "Eleverna jämför AI-genererade matsedlar med egna, väger näringsinnehåll, klimatpåverkan och ekonomi.",
    keyActivities: [
      "Låt AI föreslå en veckomeny utifrån givna kriterier och granska målkonflikter.",
      "Dokumentera hur besluten påverkar olika hushållstyper och skapa förbättringsförslag."
    ],
    aiIntegration: "Eleverna identifierar vilken data AI behöver för att ge bra råd och hur den ska kontrolleras.",
    existingPractice: "Kopplat till kost, miljö och privatekonomi.",
    tools: ["Näringsdatabas", "AI-menyplanerare", "Jämförelseark"],
    tags: ["AI & promptdesign", "Etik & ansvar", "Analys & visualisering"]
  }

,  {
    subject: "Mentorstid",
    grade: "Lågstadiet (åk 1-3)",
    title: "Molnresan: spara smart i OneDrive",
    description: "Eleverna lär sig vad molnlagring innebär, varför det är säkert och övar på att spara och hitta tillbaka till sina egna filer i OneDrive.",
    keyActivities: [
      "Använd konkreta analogier (ryggsäck, klasshylla) för att jämföra lokala filer med skolans OneDrive och låt eleverna logga in tillsammans med mentor.",
      "Spara veckans bild- eller ljuduppgift i en gemensam molnmapp, stäng ned och öppna filen igen för att visa hur återhämtning fungerar."
    ],
    aiIntegration: "Låt Copilot eller en bildgenererande AI skapa en illustration av hur filer \"resa\" i molnet som underlag för samtalet.",
    existingPractice: "Knyter an till mentorspass om ordning och reda och till att lämna in arbeten i skolplattformen.",
    tools: ["OneDrive", "Office.com", "Digital whiteboard"],
    tags: ["Digitala basfärdigheter", "Datasäkerhet", "Samarbete & kommunikation"]
  },
  {
    subject: "Mentorstid",
    grade: "Mellanstadiet (åk 4-6)",
    title: "OneDrive-struktur och smart delning",
    description: "Eleverna skapar en tydlig mappstruktur, tränar på att döpa om filer och övar på att dela mappar med rätt rättigheter i OneDrive.",
    keyActivities: [
      "Planera en personlig OneDrive-översikt med mappar för ämnen, projekt och delade arbeten och dra-släpp material till rätt plats.",
      "Öva på att dela en mapp med en klasskompis och ställa in skriv- eller visningsbehörighet samt lämna en kort kommentar om syftet."
    ],
    aiIntegration: "Be Copilot föreslå strukturer eller mappteman utifrån elevernas scheman och låt dem värdera förslagen.",
    existingPractice: "Kopplat till mentorsamtal om studieteknik och till varje ämnes digitala inlämningar.",
    tools: ["OneDrive", "Office.com", "Forms"],
    tags: ["Digitala basfärdigheter", "Samarbete & kommunikation", "Etik & ansvar"]
  },
  {
    subject: "Mentorstid",
    grade: "Högstadiet (åk 7-9)",
    title: "Office.com som samarbetshubb",
    description: "Eleverna lär sig hitta OneDrive via Office.com, förstå skillnaden mellan delning via länk och via Teams-kanaler och säkerställa versionsspårning.",
    keyActivities: [
      "Navigera till Office.com, öppna OneDrive, organisera ämnesmappar och fäst dem på startsidan för snabb åtkomst.",
      "Skapa en delningslänk till en projektmapp, justera rättigheter, skriva ett professionellt delningsmeddelande och följa upp i versionshistoriken."
    ],
    aiIntegration: "Låt Copilot föreslå formuleringar för delningsmeddelanden och låt eleverna kvalitetssäkra tonläge och tydlighet.",
    existingPractice: "Stödjer mentorstid, elevens val och större ämnesövergripande projekt med gemensamma filer.",
    tools: ["Office.com", "OneDrive", "Delningsinställningar"],
    tags: ["Digitala basfärdigheter", "Samarbete & kommunikation", "Datasäkerhet"]
  },
  {
    subject: "Mentorstid",
    grade: "Mellanstadiet (åk 4-6)",
    title: "Planera veckan med Outlook och favoriter",
    description: "Eleverna använder Outlook-kalendern för att strukturera läxor och aktiviteter samt organiserar favoriter i webbläsaren för snabb åtkomst till skolresurser.",
    keyActivities: [
      "Skapa en veckokalender i Outlook med färgkodade lektioner, läxor och påminnelser och diskutera realistisk tidsplanering.",
      "Samla skolans viktigaste webbplatser i en favoritmapp i Edge/Chrome och rensa bort länkar som stör fokus."
    ],
    aiIntegration: "Testa att låta Copilot föreslå tidsblock för ett eget projekt och jämför med elevernas manuella planering.",
    existingPractice: "Koppla till mentorsmål kring arbetsro, läxplanering och studieteknik.",
    tools: ["Outlook Kalender", "Microsoft Edge favoriter", "To Do"],
    tags: ["Digitala basfärdigheter", "Välbefinnande", "Samarbete & kommunikation"]
  },
  {
    subject: "Svenska",
    grade: "Mellanstadiet (åk 4-6)",
    title: "Word-verkstad för tydliga texter",
    description: "Eleverna skriver faktatexter i Word Online, tränar grundläggande formatering och lär sig använda stavnings- och grammatikkontroll.",
    keyActivities: [
      "Bygg en gemensam faktatext med rubriker, listor och bildtexter i Word och diskutera när olika format passar.",
      "Använd högläsnings- och stavningskontroll för att förbättra texten och lämna kamratkommentarer direkt i dokumentet."
    ],
    aiIntegration: "Låt Copilot föreslå rubrikvarianter eller sammanfattningar och jämför med elevernas egna idéer.",
    existingPractice: "Stödjer arbetet med faktatexter, språkriktighet och den digitala skrivprocessen.",
    tools: ["Word Online", "Delade dokument", "Stavningskontroll"],
    tags: ["Digitala basfärdigheter", "Digital produktion", "Samarbete & kommunikation"]
  },
  {
    subject: "Engelska",
    grade: "Högstadiet (åk 7-9)",
    title: "Peer feedback i Word",
    description: "Eleverna bearbetar engelska texter genom att ge digital återkoppling med kommentarer, förslag och versionshistorik i Word.",
    keyActivities: [
      "Arbeta i par och ge varandra formativ feedback via kommentarer och @omnämnanden kopplade till lektionsmål.",
      "Jämför olika versioner i versionshistoriken, motivera vilka ändringar som behålls och avsluta med egenreflektion."
    ],
    aiIntegration: "Testa en AI-feedbackgenerator, granska förslagen kritiskt och förbättra dem tillsammans.",
    existingPractice: "Kopplas till argumenterande eller berättande skrivuppgifter i engelska.",
    tools: ["Word Online", "Versionshistorik", "Kommentarer"],
    tags: ["Digital produktion", "Samarbete & kommunikation", "Etik & ansvar"]
  },
  {
    subject: "SO",
    grade: "Mellanstadiet (åk 4-6)",
    title: "Storytelling i PowerPoint",
    description: "Eleverna bygger korta presentationer i PowerPoint med fokus på struktur, bildval och tillgänglighet kring samhällsfrågor.",
    keyActivities: [
      "Skapa en berättelse med tydlig disposition, talmanus och bilder där varje bild får alt-text och källa.",
      "Öva presentationsteknik genom att spela in bildspel med berättarröst och ge kamratrespons på budskapet."
    ],
    aiIntegration: "Låt Designer/Copilot föreslå layout och bilder, granska upphovsrätt och justera till klassens behov.",
    existingPractice: "Knyter an till arbete med samhällsfrågor och muntliga presentationer.",
    tools: ["PowerPoint", "Creative Commons-bildbank", "Presentationsanteckningar"],
    tags: ["Digital produktion", "Källkritik", "Samarbete & kommunikation"]
  },
  {
    subject: "Naturkunskap",
    grade: "Högstadiet (åk 7-9)",
    title: "Datadrivna presentationer i PowerPoint",
    description: "Eleverna presenterar laborationsresultat med diagram, animationer och talmanus i PowerPoint och tränar på att tolka data.",
    keyActivities: [
      "Importera mätdata från Excel, skapa diagram och förklara val av visualisering i PowerPoint.",
      "Använd presentatörsvyn för att hålla en digital genomgång och få återkoppling från klass eller mentorsgrupp."
    ],
    aiIntegration: "Utforska hur PowerPoint Designer eller Copilot kan föreslå layouter och animationer och diskutera vad som behöver justeras.",
    existingPractice: "Kopplas till laborationsrapporter och muntliga redovisningar i NO.",
    tools: ["PowerPoint", "Excel", "Presentatörsvy"],
    tags: ["Analys & visualisering", "Digital produktion", "AI & promptdesign"]
  },
  {
    subject: "Mentorstid",
    grade: "Mellanstadiet (åk 4-6)",
    title: "Outlook-etiquette och inkorgsstruktur",
    description: "Eleverna tränar på att skriva tydliga mejl, organisera inkorgen och använda mappar, regler och flaggor i Outlook.",
    keyActivities: [
      "Skicka ett mejl med tydlig ämnesrad, hälsning och avslut, samt sortera inkommande mejl i ämnesmappar.",
      "Rollspela olika kommunikationsscenarier och koppla dem till klassens netikett och skolans riktlinjer."
    ],
    aiIntegration: "Testa Outlook Copilot för att föreslå svar och låt eleverna förbättra tonen så den matchar netiketten.",
    existingPractice: "Knyter till mentorspass om kommunikation, elevråd och kontakt med vårdnadshavare.",
    tools: ["Outlook", "Regler och aviseringar", "Netikettaffisch"],
    tags: ["Samarbete & kommunikation", "Etik & ansvar", "Digitala basfärdigheter"]
  },
  {
    subject: "Tvärämnesprojekt",
    grade: "Högstadiet (åk 7-9)",
    title: "Teams-sprint med digital återkoppling",
    description: "Elevgrupper planerar, genomför och utvärderar ett projekt i Microsoft Teams med digitala möten och delade arbetsytor.",
    keyActivities: [
      "Skapa en projektkanal med uppgifter, gemensam planeringstavla och tydlig ansvarsfördelning i Teams.",
      "Genomför ett videomöte med inspelning, använd liveundertexter och ge återkoppling via kommenterade dokument eller Loop-komponenter."
    ],
    aiIntegration: "Använd Teams transcript eller Copilot för att sammanfatta möten och skapa att göra-listor som grupperna kvalitetssäkrar.",
    existingPractice: "Kopplas till ämnesövergripande projekt, entreprenörskap eller fördjupningsveckor.",
    tools: ["Microsoft Teams", "Delade filer", "Loop/OneNote"],
    tags: ["Samarbete & kommunikation", "Digitala basfärdigheter", "Etik & ansvar"]
  },
  {
    subject: "Mentorstid",
    grade: "Lågstadiet (åk 1-3)",
    title: "Lösenordsproffs",
    description: "Eleverna lär sig vad ett starkt lösenord är och varför man inte delar det, med fokus på begriplig säkerhet och förtroende.",
    keyActivities: [
      "Bygg lösenord med ordkort och symboler och jämför deras styrka i ett barnvänligt verktyg.",
      "Skapa en klassöverenskommelse om hur man ber en vuxen om hjälp utan att avslöja sitt lösenord."
    ],
    aiIntegration: "Visa hur en AI kan gissa ett svagt lösenord och låt eleverna stärka det tillsammans.",
    existingPractice: "Passar mentorspass om trygghet, trivsel och digital etik.",
    tools: ["Passwordmeter", "Padlet", "Bildstöd"],
    tags: ["Datasäkerhet", "Etik & ansvar", "Digitala basfärdigheter"]
  },
  {
    subject: "Mentorstid",
    grade: "Mellanstadiet (åk 4-6)",
    title: "Säkra vanor och skolans policyer",
    description: "Eleverna tolkar skolans digitala riktlinjer, lär sig grundläggande säkerhetsprinciper och tränar på att känna igen risker online.",
    keyActivities: [
      "Analysera korta scenarier om phishing, delning och fotoetik och koppla dem till skolans policy och GDPR.",
      "Skapa en personlig checklista för säkra vanor med fokus på uppdateringar, backup och meddelandeinställningar."
    ],
    aiIntegration: "Låt en AI ta fram fiktiva elevscenarier som grupperna säkerhetsgranskar och förbättrar.",
    existingPractice: "Stödjer skolans värdegrundsarbete och digitala ordningsregler.",
    tools: ["OneNote Klassanteckningsbok", "Policy-PDF", "Forms"],
    tags: ["Datasäkerhet", "Etik & ansvar", "Samarbete & kommunikation"]
  },
  {
    subject: "Mentorstid",
    grade: "Högstadiet (åk 7-9)",
    title: "Digital balans och välbefinnande",
    description: "Eleverna analyserar sin skärmtid, diskuterar dopaminfällor och planerar strategier för hållbar digital användning.",
    keyActivities: [
      "Samla anonym skärmtidsdata, visualisera i diagram och diskutera mönster kopplade till sömn och koncentration.",
      "Genomför en walk-and-talk om balansstrategier och skriv ett personligt välbefinnandokontrakt."
    ],
    aiIntegration: "Använd en AI för att skapa visualiseringar av klassens skärmtidsdata och resonera om tolkningar.",
    existingPractice: "Knyter till elevhälsa, kuratorsamtal och skolans hälsofrämjande arbete.",
    tools: ["Skärmtidsapp", "Power BI eller Excel", "Mentimeter"],
    tags: ["Välbefinnande", "Etik & ansvar", "Datasäkerhet"]
  },
  {
    subject: "Svenska",
    grade: "Högstadiet (åk 7-9)",
    title: "Referera rätt digitalt",
    description: "Eleverna tränar källhänvisningar och referenshantering i digitala dokument med fokus på upphovsrätt och akademisk hederlighet.",
    keyActivities: [
      "Bygg en källförteckning i Word och använd inbyggda referensverktyg eller ZoteroBib för att skapa korrekta hänvisningar.",
      "Granska exempel på felaktiga citat och diskutera hur Creative Commons och upphovsrätt påverkar det egna arbetet."
    ],
    aiIntegration: "Testa att låta en AI skriva en referenslista och jämför den med etablerade standarder som Harvard eller Oxford.",
    existingPractice: "Kopplas till uppsatsskrivande, muntliga redovisningar och nationella prov.",
    tools: ["Word referenshanterare", "ZoteroBib", "Skolverkets källkritikstöd"],
    tags: ["Källkritik", "Digital produktion", "Etik & ansvar"]
  },
  {
    subject: "SO",
    grade: "Mellanstadiet (åk 4-6)",
    title: "Söksmart och källkritisk",
    description: "Eleverna lär sig att använda avancerade sökstrategier, jämföra träffar och avslöja desinformation i samhällsfrågor.",
    keyActivities: [
      "Testa olika sökoperatorer och filter i en sökmotor och dokumentera hur resultaten förändras.",
      "Använd en källkritik-checklista för att bedöma trovärdighet, bias och syfte i olika nyhetsartiklar."
    ],
    aiIntegration: "Låt en AI sammanfatta två artiklar och jämför med elevernas egna slutsatser om källornas kvalitet.",
    existingPractice: "Kopplas till SO-arbeten med nyheter, demokrati och informationssökning.",
    tools: ["Sökmotor med avancerad sök", "Källkritik-checklista", "Padlet"],
    tags: ["Källkritik", "Digitala basfärdigheter", "AI & promptdesign"]
  },
  {
    subject: "Engelska",
    grade: "Högstadiet (åk 7-9)",
    title: "Trygg i Dugga",
    description: "Eleverna bekantar sig med Dugga som digitalt provverktyg, testar funktioner och skapar strategier för lugn provsituation.",
    keyActivities: [
      "Genomför ett övningsprov i Dugga med fokus på navigering, verktyg för talsyntes och inlämning.",
      "Reflektera över upphovsrätt, fuskrisker och digital studieteknik genom en gemensam diskussion efter provet."
    ],
    aiIntegration: "Använd en AI för att skapa övningsfrågor eller självrättande quiz som laddas upp i Dugga.",
    existingPractice: "Förbereder eleverna inför digitala nationella prov och ämnesprov.",
    tools: ["Dugga", "Lärplattform", "Edge eller Chrome"],
    tags: ["Digitala basfärdigheter", "Etik & ansvar", "Datasäkerhet"]
  }
];

const GRADE_ORDER = [
  "Lågstadiet (åk 1-3)",
  "Mellanstadiet (åk 4-6)",
  "Högstadiet (åk 7-9)"
];

const FEATURED_ACTIVITY_TITLES = [
  "Skrivprocess med digitalt stöd",
  "Källkritisk läsning av AI-genererade texter",
  "AI som skrivpartner med ansvar",
  "Ekosystem i datastudio",
  "AI som problemlösningscoach",
  "Digital naturspaning och artloggar"
];

const FEATURED_ACTIVITIES = (() => {
  const chosen = FEATURED_ACTIVITY_TITLES
    .map(title => competencyData.find(entry => entry.title === title))
    .filter(Boolean);

  if (chosen.length < 5) {
    competencyData.some(entry => {
      if (!chosen.includes(entry)) {
        chosen.push(entry);
      }
      return chosen.length >= 5;
    });
  }

  return chosen;
})();
const PEXELS_SEARCH_ENDPOINT = "https://api.pexels.com/v1/search";
const pexelsApiKey = (document.body && document.body.dataset ? (document.body.dataset.pexelsKey || "").trim() : "");
const pexelsImageCache = new Map();
const usedPexelsPhotoIds = new Set();
let hasHydratedActivityCarouselImages = false;

const FEATURED_ACTIVITY_IMAGE_HINTS = {
  "Skrivprocess med digitalt stöd": {
    queries: [
      "students collaborating on laptops",
      "students writing together digital",
      "classroom creative writing laptops"
    ]
  },
  "Källkritisk läsning av AI-genererade texter": {
    queries: [
      "students fact checking digital",
      "students analyzing information",
      "students discussing online sources"
    ]
  },
  "AI som skrivpartner med ansvar": {
    queries: [
      "students using ai in classroom",
      "students collaborating with laptop",
      "students reviewing text with technology"
    ]
  },
  "Ekosystem i datastudio": {
    queries: [
      "students analyzing data science",
      "students using sensors classroom",
      "students doing science project data"
    ]
  },
  "AI som problemlösningscoach": {
    queries: [
      "students solving math with technology",
      "students discussing math solutions",
      "students using computer for math"
    ]
  },
  "Digital naturspaning och artloggar": {
    queries: [
      "students exploring nature with tablets",
      "students documenting nature",
      "students outdoor learning technology"
    ]
  }
};

const SUBJECT_PEXELS_QUERY_MAP = {
  "Svenska": [
    "students creative writing",
    "students reading together",
    "writing workshop classroom"
  ],
  "Engelska": [
    "english lesson students",
    "language classroom collaboration",
    "students practicing english"
  ],
  "Matematik": [
    "students doing math",
    "math classroom technology",
    "students solving equations"
  ],
  "Biologi": [
    "students science lab",
    "biology class experiment",
    "students studying nature"
  ],
  "Fysik": [
    "physics experiment students",
    "science classroom technology",
    "students building science project"
  ],
  "Teknik": [
    "students coding classroom",
    "robotics workshop students",
    "technology project classroom"
  ],
  "SO": [
    "students discussing society",
    "students collaboration classroom",
    "students using digital tools"
  ],
  "Historia": [
    "students history lesson",
    "students discussing history",
    "students researching history"
  ]
};

const PROGRESSION_MAP = {
  "Tekniska bas- och produktionsfärdigheter": {
    summary: "Skapa robusta arbetssätt för att organisera, producera och dela digitalt material på sätt som skalar mellan årskurser.",
    stages: {
      "Lågstadiet (åk 1-3)": {
        focus: "Trygg hantering av enheter, inloggningar och enkla arbetsflöden.",
        keySkills: [
          "Logga in på lärplattform och stänga ned konton på ett säkert sätt med stöd.",
          "Skapa, döpa och sortera dokument i mappar kopplade till uppgifter.",
          "Använda gemensamma dokument för enkel samproduktion."
        ],
        aiAngles: [
          "Låt AI föreslå checklista för hur ett dokument ska delas och jämför med klassens regler.",
          "Testa diktering eller uppläst text för att göra produktionen tillgänglig."
        ],
        guidingQuestions: [
          "Hur visar eleverna att de hittar tillbaka till sina filer?",
          "Vilka moment behöver kompletteras med analog backup?"
        ],
        checkpoint: "Eleverna kan självständigt öppna, namnge och lämna in digitala arbeten via klassens struktur."
      },
      "Mellanstadiet (åk 4-6)": {
        focus: "Effektiva arbetsflöden med molntjänster, struktur för samarbete och ansvarsfördelning.",
        keySkills: [
          "Använda versionshistorik för att följa hur texter och presentationer utvecklas.",
          "Planera enklare projekt i delade planeringsverktyg med roller och deadlines.",
          "Hålla ordning på notifieringar och inställningar för att minimera störmoment."
        ],
        aiAngles: [
          "Prova AI för att föreslå mallar, dispositioner eller presentationsstruktur och bedöm vad som fungerar.",
          "Jämför olika AI-genererade filnamn och välj det som bäst beskriver innehållet."
        ],
        guidingQuestions: [
          "Vilka begrepp behöver förtydligas för att eleverna ska förstå skillnaden mellan lokalt och molnlagrat material?",
          "Hur synliggörs ansvar och insats vid samarbete?"
        ],
        checkpoint: "Eleverna dokumenterar sitt arbetsflöde och motiverar val av digitalt verktyg för uppgiften."
      },
      "Högstadiet (åk 7-9)": {
        focus: "Självledda, säkra och skalbara digitala produktionsprocesser.",
        keySkills: [
          "Bygga produktionsplaner med deadlines, ansvarsfördelning och versionshantering.",
          "Automatisera delar av arbetet, exempelvis med mallar, formler eller makron.",
          "Anpassa material för olika mottagare, format och tillgänglighetsbehov."
        ],
        aiAngles: [
          "Utveckla riktlinjer för hur AI får stödja produktion och hur källor dokumenteras.",
          "Analysera loggar eller metadata för att förbättra arbetsflöden och återkoppling."
        ],
        guidingQuestions: [
          "Hur använder eleverna digitala verktyg för att lösa hinder i projekt?",
          "Vilka risker behöver hanteras när arbetet skalas upp eller delas offentligt?"
        ],
        checkpoint: "Eleverna kan designa, genomföra och utvärdera en digital produktion med spårbarhet och dokumenterad AI-användning."
      }
    }
  },
  "Informations- och källkompetens": {
    summary: "Stärk elevernas förmåga att söka, granska och reflektera över information, inklusive AI-genererat innehåll.",
    stages: {
      "Lågstadiet (åk 1-3)": {
        focus: "Grundläggande källmedvetenhet i tryckta och digitala miljöer.",
        keySkills: [
          "Identifiera avsändare och syfte i enkla texter och filmer.",
          "Söka efter bilder eller fakta i barnanpassade miljöer och dokumentera vad som hittats.",
          "Skilja vardagliga fakta från åsikter i närmiljöexempel."
        ],
        aiAngles: [
          "Jämför AI:s svar med uppslagsverk eller läromedel och markera skillnader.",
          "Samla elevexempel på när AI gissat fel och formulera vad som saknas."
        ],
        guidingQuestions: [
          "Vilka signaler visar att eleverna reflekterar över vem som ligger bakom en text?",
          "Hur fångar vi upp deras frågor om trovärdighet?"
        ],
        checkpoint: "Eleverna kan beskriva varför de valt en källa och hur de dubbelkollat informationen med vuxen."
      },
      "Mellanstadiet (åk 4-6)": {
        focus: "Strukturerad informationssökning med dokumentation och jämförelse av källor.",
        keySkills: [
          "Använda sökoperatorer, filter och källhänvisningar i digitala texter.",
          "Skapa jämförelsetabeller över källors styrkor, svagheter och perspektiv.",
          "Planera intervjuer eller enkäter som komplement till digitala källor."
        ],
        aiAngles: [
          "Be AI lista frågor att ställa till en källa och värdera vilka som är mest relevanta.",
          "Analysera bias i AI-sammanfattningar genom att jämföra med originaltexten."
        ],
        guidingQuestions: [
          "Hur säkerställer vi att eleverna källhänvisar konsekvent?",
          "Vilka strategier använder de när källor säger olika saker?"
        ],
        checkpoint: "Eleverna motiverar valet av flera källor och visar hur de har kvalitetssäkrat informationen."
      },
      "Högstadiet (åk 7-9)": {
        focus: "Avancerad källkritik, triangulering och metareflektion.",
        keySkills: [
          "Identifiera intressekonflikter, finansiering och data i källmaterial.",
          "Genomföra faktagranskningar med spårbar dokumentation av kontrollsteg.",
          "Kommunicera källkritiska slutsatser med tydligt resonemang och referenser."
        ],
        aiAngles: [
          "Använd AI som debattmotståndare för att testa argument och sakuppgifter.",
          "Bygga prompts som medvetet avslöjar bias eller luckor i en text."
        ],
        guidingQuestions: [
          "Hur hanterar eleverna osäkerhet och motsägelsefull information?",
          "Vilken evidens kräver de innan de delar vidare något?"
        ],
        checkpoint: "Eleverna utvecklar egna kontrollfrågor och redovisar källkedjor i längre arbeten."
      }
    }
  },
  "Digital etik, säkerhet och välbefinnande": {
    summary: "Gör digital etik, integritet och välmående till en del av undervisningens kärna.",
    stages: {
      "Lågstadiet (åk 1-3)": {
        focus: "Trygghet, samtycke och känslor i digitala möten.",
        keySkills: [
          "Känna igen tryggt respektive otryggt beteende online och be vuxen om stöd.",
          "Förklara vad personuppgifter är och när de behöver skyddas.",
          "Visa respekt i digital kommunikation genom klassens netikett."
        ],
        aiAngles: [
          "Utforska hur AI kan känna igen ansikten eller föremål och varför det kräver samtycke.",
          "Diskutera hur digitala assistenter pratar och hur vi svarar respektfullt."
        ],
        guidingQuestions: [
          "Hur ger vi eleverna språk för att beskriva känslor kopplade till digitala händelser?",
          "Vilka rutiner finns för att snabbt stötta vid oro?"
        ],
        checkpoint: "Eleverna använder klassens gemensamma netikett och ber om stöd när något känns fel."
      },
      "Mellanstadiet (åk 4-6)": {
        focus: "Medveten publicering och balans mellan teknik, hälsa och integritet.",
        keySkills: [
          "Hantera sekretessinställningar, starka lösenord och delningsrättigheter.",
          "Resonera kring skärmtid, fokustekniker och återhämtning.",
          "Känna igen design som syftar till att påverka eller manipulera."
        ],
        aiAngles: [
          "Analys av AI-kurerade flöden och vilka känslor de försöker skapa.",
          "Skapa handlingsplaner för hur klassen agerar vid digital kränkning."
        ],
        guidingQuestions: [
          "Vilka vanor hjälper eleverna att värna fokus och sömn?",
          "Hur tränas förmågan att säga nej till oönskad delning?"
        ],
        checkpoint: "Eleverna formulerar egna etiska riktlinjer för hur digitala verktyg och AI används i grupparbeten."
      },
      "Högstadiet (åk 7-9)": {
        focus: "Ansvarsfullt deltagande i digitala samhällen och datadrivna miljöer.",
        keySkills: [
          "Göra riskanalyser för datahantering och digitala projekt.",
          "Applicera upphovsrätt och licenser på eget samt AI-genererat material.",
          "Stötta yngre elever i digital etik genom mentorskap eller ledarskap."
        ],
        aiAngles: [
          "Bedöma konsekvenser av AI-beslutsstöd på individ- och samhällsnivå.",
          "Utveckla etiska dilemman och argumentera utifrån olika perspektiv."
        ],
        guidingQuestions: [
          "Hur väger eleverna olika intressen i svåra digitala beslut?",
          "Kan de beskriva vilka data de vill dela i olika sammanhang och varför?"
        ],
        checkpoint: "Eleverna dokumenterar risker, avvägningar och åtgärder i projekt där AI eller känslig data ingår."
      }
    }
  },
  "AI- och dataförståelse": {
    summary: "Gör AI begripligt genom att koppla begrepp, data, användningsområden och människans roll.",
    stages: {
      "Lågstadiet (åk 1-3)": {
        focus: "Nyfiket utforskande av vad AI och data är i vardagen.",
        keySkills: [
          "Beskriva skillnaden mellan regelstyrda instruktioner och verktyg som lär sig mönster.",
          "Samla och sortera enkel data, exempelvis klassens favoritfrukter.",
          "Pröva enkla AI-tjänster tillsammans med vuxen och reflektera över upplevelsen."
        ],
        aiAngles: [
          "Skapa unplugged-övningar där eleverna agerar AI och tränar på att känna igen mönster.",
          "Gissa vilka data en AI behöver för att svara och testa antaganden."
        ],
        guidingQuestions: [
          "Vilka metaforer hjälper eleverna att förstå hur AI lär sig?",
          "Hur säkerställer vi att datainsamling sker etiskt även i enkla övningar?"
        ],
        checkpoint: "Eleverna kan ge exempel på AI i vardagen och vilka data som krävs för att det ska fungera."
      },
      "Mellanstadiet (åk 4-6)": {
        focus: "Experimentera med AI för att förstå möjligheter och begränsningar.",
        keySkills: [
          "Analysera hur träningsdata påverkar resultat i enkla experiment.",
          "Designa och förbättra prompts för olika syften och jämföra effekter.",
          "Visualisera data och dra rimliga slutsatser tillsammans i grupp."
        ],
        aiAngles: [
          "Jämföra svar från olika AI-modeller och dokumentera skillnader och osäkerheter.",
          "Bygga prototyper med blockprogrammering eller lågtröskel-API:er och utvärdera funktion."
        ],
        guidingQuestions: [
          "Hur synliggör vi osäkerhet och begränsningar i AI-svar?",
          "Vilka principer styr vad som får testas i klassrummet?"
        ],
        checkpoint: "Eleverna beskriver hur de testat, validerat och förbättrat ett AI-stöd i en uppgift."
      },
      "Högstadiet (åk 7-9)": {
        focus: "AI som verktyg för avancerad analys, skapande och kritiskt tänkande.",
        keySkills: [
          "Planera experiment där AI jämförs med manuella metoder och dra slutsatser.",
          "Utföra prompt engineering med tydlig återkopplingsloop och kriterier.",
          "Diskutera samhälleliga effekter och regelverk kring AI utifrån autentiska case."
        ],
        aiAngles: [
          "Utveckla egna kriterier för ansvarfull AI-användning i projekt och testa dem.",
          "Analysera loggar, dataset och fairness-risker i tillgängliga verktyg."
        ],
        guidingQuestions: [
          "Hur dokumenterar eleverna sina val av AI-verktyg och prompts?",
          "På vilket sätt resonerar de kring människans ansvar och kontroll?"
        ],
        checkpoint: "Eleverna redovisar beslutslogg, etiska avvägningar och lärdomar från ett AI-berikat projekt."
      }
    }
  }
};

const RESOURCE_GROUPS = [
  {
    name: "Policy och styrning",
    summary: "Underlag för att förankra digitaliserings- och AI-arbetet i huvudmannens styrkedja.",
    items: [
      {
        name: "Skolverket – Nationell digitaliseringsstrategi",
        type: "Styrdokument",
        link: "https://www.skolverket.se/skolutveckling/digitalisering/digitaliseringsstrategin",
        summary: "Ger riktning för hur skolan ska arbeta med digital kompetens och följa upp likvärdighet."
      },
      {
        name: "Skolverket – Vägledning för AI i skolan",
        type: "Vägledning",
        link: "https://www.skolverket.se/skolutveckling/digitalisering/artificial-intelligence",
        summary: "Beskriver principer, ansvar och exempel på hur AI kan användas säkert och pedagogiskt."
      },
      {
        name: "DigComp 2.2 – Digital Competence Framework",
        type: "EU-ramverk",
        link: "https://joint-research-centre.ec.europa.eu/digcomp",
        summary: "Internationell referens för digital kompetens som kan mappas mot skolans mål och matriser."
      },
      {
        name: "UNESCO – Guidance on Generative AI in Education",
        type: "Policy",
        link: "https://unesdoc.unesco.org/ark:/48223/pf0000385131",
        summary: "Tar upp etik, integritet och styrning kring generativ AI i undervisning globalt."
      }
    ]
  },
  {
    name: "Planering och undervisning",
    summary: "Resurser som stödjer lektionsplanering, kollegialt lärande och elevexempel.",
    items: [
      {
        name: "Skolverket Lärportal – Digital kompetens",
        type: "Fortbildning",
        link: "https://larportalen.skolverket.se/#/moduler/digital-kompetens",
        summary: "Moduler med diskussionsunderlag och klassrumsnära uppgifter för olika ämnen."
      },
      {
        name: "Internetstiftelsen – Digitala lektioner",
        type: "Lektionsbank",
        link: "https://digitalalektioner.se/",
        summary: "Färdiga lektionsupplägg om källkritik, säkerhet och programmering som kan kombineras med AI-övningar."
      },
      {
        name: "AI Sweden – Learning Lab",
        type: "Kompetensutveckling",
        link: "https://www.ai.se/learning-lab",
        summary: "Workshops och material för att utforska AI praktiskt tillsammans med elever och kollegor."
      },
      {
        name: "UR Play – AI i klassrummet",
        type: "Inspiration",
        link: "https://urplay.se/tema/ai-i-skolan",
        summary: "Program och poddar som lyfter exempel på undervisning med AI-stöd och reflektioner från forskare."
      }
    ]
  },
  {
    name: "Bedömning, etik och forskning",
    summary: "Underlag för kvalitet, uppföljning och etiska diskussioner tillsammans med elever.",
    items: [
      {
        name: "Skolforskningsinstitutet – Digitalisering och likvärdighet",
        type: "Forskning",
        link: "https://www.skolfi.se/forskning/digitalisering",
        summary: "Sammanställningar av forskning om digitaliseringens effekter och framgångsfaktorer."
      },
      {
        name: "Mediekompass – Källkritikpaket",
        type: "Lärarstöd",
        link: "https://www.mediekompass.se/",
        summary: "Aktuella övningar och case för att diskutera källkritik, filterbubblor och desinformation."
      },
      {
        name: "OECD – AI and the Future of Skills",
        type: "Analys",
        link: "https://www.oecd.org/education/ai-future-skills",
        summary: "Rapport som kopplar AI-utveckling till framtida kompetenser och utbildningssystem."
      },
      {
        name: "Code.org & AI Education",
        type: "Elevresurser",
        link: "https://code.org/ai",
        summary: "Lekfulla uppgifter och visualiseringar som gör AI-begrepp begripliga för olika åldrar."
      }
    ]
  }
];

const AI_ASPECTS = [
  {
    id: "understanding",
    label: "Förstå AI",
    description: "Grundläggande begrepp som algoritmer, data och maskininlärning – vad AI är och hur det tränas."
  },
  {
    id: "tools",
    label: "AI-verktyg",
    description: "Praktisk användning av AI-baserade verktyg och tjänster i undervisning och lärprocesser."
  },
  {
    id: "critical",
    label: "Kritiskt tänkande",
    description: "Att faktagranska och värdera AI-genererat innehåll, upptäcka bias och analysera källor."
  },
  {
    id: "ethics",
    label: "Etik & ansvar",
    description: "Integritet, upphovsrätt, rättvisa och ansvarstagande när AI används."
  },
  {
    id: "agency",
    label: "Mänsklig agens",
    description: "Hur människor styr, kompletterar och tar ställning till teknik – metakognition och eget omdöme."
  },
  {
    id: "society",
    label: "AI i samhället",
    description: "Teknikens påverkan på arbete, livsstil, demokrati och hållbar utveckling nu och i framtiden."
  }
];

const AI_ASPECT_MAP = Object.fromEntries(AI_ASPECTS.map(aspect => [aspect.id, aspect]));

const AI_SUBJECT_GUIDE = [
  {
    subject: "Svenska",
    summary: "Centralt innehåll i svenska betonar informationssökning och källkritik där eleverna ska jämföra källor och pröva deras tillförlitlighet. Detta kan innefatta granskning av AI-genererat innehåll och diskussioner om digitala texter och ansvarsfull kommunikation online.",
    aspects: ["understanding", "tools", "critical", "ethics", "agency", "society"],
    highlights: [
      {
        text: "📝 Praktisk övning: Ge eleverna en AI-genererad artikel och originalkällan. Låt dem jämföra, hitta skillnader och diskutera hur man kan identifiera AI-text genom språkmönster, faktafel eller saknad källhänvisning.",
        aspects: ["critical", "understanding"]
      },
      {
        text: "🔧 Verktygstest: Låt eleverna prova AI-skrivstöd (t.ex. språkmodeller för brainstorming) men kräv att de dokumenterar vad som är deras egna idéer vs AI-förslag. Diskutera när AI hjälper kreativiteten och när det kan hämma den.",
        aspects: ["tools", "agency"]
      },
      {
        text: "🌐 Samhällsdiskussion: Analysera hur algoritmer på sociala medier påverkar vad vi ser (filterbubblor). Eleverna undersöker sina egna flöden och diskuterar ansvar - både plattformarnas och användarnas - för spridning av information.",
        aspects: ["ethics", "society", "agency"]
      }
    ],
    sources: [
      { label: "Skolverket", url: "https://www.skolverket.se" }
    ]
  },
  {
    subject: "Engelska",
    summary: "I engelska behandlas aktuella och bekanta ämnesområden samt framtidsplaner. Eleverna övar strategier för digital interaktion och sökning samt värdering av engelskspråkiga källor. Detta öppnar för diskussioner om AI på engelska och användning av AI-verktyg som översättningstjänster.",
    aspects: ["understanding", "tools", "critical", "society", "agency"],
    highlights: [
      {
        text: "Låt eleverna diskutera vad AI är och vilka möjligheter eller utmaningar AI kan innebära för framtiden - på engelska, kopplat till ordförråd om teknik och samhälle.",
        aspects: ["understanding", "society"]
      },
      {
        text: "Introducera AI-verktyg som översättningstjänster eller språkassistenter för engelska och diskutera precisionen i översättningarna.",
        aspects: ["tools", "critical"]
      },
      {
        text: "Öva kritiskt tänkande genom att granska engelskspråkiga källor - jämföra nyhetsartiklar med AI-genererade sammanfattningar och bedöma trovärdighet och bias.",
        aspects: ["critical", "agency"]
      }
    ],
    sources: [
      { label: "Skolverket", url: "https://www.skolverket.se" }
    ]
  },
  {
    subject: "Matematik",
    summary: "Matematikens centrala innehåll för åk 7–9 inkluderar programmering i visuella och textbaserade miljöer samt hur algoritmer skapas, testas och förbättras. Detta ger förståelse för vad en algoritm är - en grund för att begripa AI. Eleverna använder digitala verktyg vid beräkningar och gör rimlighetsbedömningar.",
    aspects: ["understanding", "tools", "critical", "agency", "society"],
    highlights: [
      {
        text: "💻 Kodaktivitet: Skapa en enkel sorteringsalgoritm (t.ex. bubbelsort) och förklara hur den 'lär sig' hitta rätt ordning. Koppla till hur AI 'tränas' på data för att hitta mönster.",
        aspects: ["understanding"]
      },
      {
        text: "🎯 Rimlighetskontroll: Använd AI-kalkylatorer för komplicerade beräkningar, men träna eleverna att alltid fråga 'Verkar svaret rimligt?' Jämför med överslagsräkning för att upptäcka när AI gör fel.",
        aspects: ["tools", "critical"]
      },
      {
        text: "Träna kritiskt tänkande genom att resonera om tillförlitligheten i AI-modellers prognoser eller statistiska slutsatser som AI dragit från data.",
        aspects: ["critical", "agency", "society"]
      }
    ],
    sources: [
      { label: "Skolverket", url: "https://www.skolverket.se" }
    ]
  },
  {
    subject: "Teknik",
    summary: "Teknikämnet behandlar informations- och kommunikationsteknik inom tekniska system samt styrning och reglering med elektronik och sensorer. Undervisningen tar upp möjligheter, risker och säkerhet vid teknikanvändning, inklusive datalagring. Detta kopplar direkt till AI som en del av tekniska system.",
    aspects: ["understanding", "tools", "ethics", "agency", "society"],
    highlights: [
      {
        text: "Introducera grunderna i AI som en del av globala tekniska system - hur nätverk och internet styrs av algoritmer, samt hur robotar och AI-system tar in data och agerar.",
        aspects: ["understanding", "society"]
      },
      {
        text: "Låt eleverna prova enkla AI-relaterade projekt, som att programmera en micro:bit eller simulera en självkörande bils sensorer.",
        aspects: ["tools", "understanding", "agency"]
      },
      {
        text: "Diskutera AI-etik och ansvar: integritet vid big data-insamling, bias i algoritmer, säkerhetsaspekter kring AI, och hur människan styr teknikutvecklingen.",
        aspects: ["ethics", "agency"]
      }
    ],
    sources: [
      { label: "Skolverket", url: "https://www.skolverket.se" }
    ]
  },
  {
    subject: "Samhällskunskap",
    summary: "Samhällskunskap har tydligt centralt innehåll om mediernas roll samt hur digitala medier kan användas ansvarsfullt utifrån sociala, etiska och rättsliga aspekter. Eleverna ska lära sig urskilja budskap och granska källor kritiskt, samt förstå arbetslivets förändringar och hur individer kan påverka demokratiska processer.",
    aspects: ["critical", "ethics", "agency", "society", "understanding"],
    highlights: [
      {
        text: "Analysera sociala medie-plattformar och AI-algoritmernas påverkan på informationsspridning - filterbubblor, desinformation - och koppla till demokrati och etik.",
        aspects: ["society", "critical"]
      },
      {
        text: "Träna källkritik genom att värdera AI-skapade nyhetsartiklar eller deepfakes och använda samhällskunskapens verktyg för att avslöja partiskhet eller manipulation.",
        aspects: ["critical", "ethics"]
      },
      {
        text: "Diskutera AI-automation av jobb, nya yrken inom tech och hur ekonomin påverkas, samt hur medborgare kan kräva regelverk för AI (mänsklig agens).",
        aspects: ["society", "agency", "understanding"]
      }
    ],
    sources: [
      { label: "Skolverket", url: "https://www.skolverket.se" }
    ]
  },
  {
    subject: "Historia",
    summary: "I historia studerar man samhällsomvandlingar som industrialiseringen och nya idéers framväxt. Centralt innehåll betonar tolkning av historiska källor och granskning utifrån källkritiska kriterier, samt hur historia används för att påverka nutid och framtid. Detta ger perspektiv på teknikförändringar och mänsklig agens.",
    aspects: ["society", "critical", "understanding", "agency"],
    highlights: [
      {
        text: "Jämföra den industriella revolutionen med dagens AI-revolution - hur tidigare tekniska förändringar påverkade arbete och samhälle och dra paralleller till AI-utvecklingen idag.",
        aspects: ["society", "understanding"]
      },
      {
        text: "Granska historiska påståenden spridda online (förstärkta av AI-algoritmer) och skilja fakta från myt, samt analysera hur AI används för att sprida vissa historienarrativ.",
        aspects: ["critical"]
      },
      {
        text: "Förstå att människor i historien har skapat och reagerat på teknisk förändring - jämföra kapprustning under Kalla kriget med AI-utveckling och diskutera mänsklig kontroll över tekniken.",
        aspects: ["agency", "society"]
      }
    ],
    sources: [
      { label: "Skolverket", url: "https://www.skolverket.se" },
      { label: "Örkelljunga kommun", url: "https://www.orkelljunga.se" }
    ]
  },
  {
    subject: "Geografi",
    summary: "Geografiämnet tar upp digitala och analoga kartors uppbyggnad samt geografiska informationssystem (GIS) och hur de används i samhället. Under hållbar utveckling lär sig eleverna om klimatpåverkan och resurser. Ämnet inkluderar också analys av globala produktions- och konsumtionsmönster.",
    aspects: ["tools", "understanding", "critical", "ethics", "society", "agency"],
    highlights: [
      {
        text: "Arbeta med GIS och digitala karttjänster som använder AI för att analysera mönster (urban planering, klimatmodeller) och förstå hur algoritmer hanterar geografisk data.",
        aspects: ["tools", "understanding"]
      },
      {
        text: "Diskutera AI:s roll i klimat- och hållbarhetsarbete: AI som förutsäger väder, optimerar energianvändning eller övervakar miljön, samt etiska frågor kring övervakning och dataägande.",
        aspects: ["society", "ethics"]
      },
      {
        text: "Analysera hur globala företag använder AI för logistik eller marknadsföring och vilka konsekvenser det får för olika regioner, samt förstå att tekniska verktyg har perspektiv och begränsningar.",
        aspects: ["critical", "agency", "society"]
      }
    ],
    sources: [
      { label: "Skolverket", url: "https://www.skolverket.se" }
    ]
  },
  {
    subject: "Religionskunskap",
    summary: "Religionskunskap handlar om livsfrågor och etik - 'vad som är viktigt i livet' och frågor om ansvar och rättvisa. Centralt innehåll inkluderar kritisk granskning av hur religion framställs i media samt diskussioner om religionsfrihet, konflikter och samförstånd.",
    aspects: ["ethics", "agency", "critical", "society", "understanding"],
    highlights: [
      {
        text: "Diskutera etik och ansvar kopplat till AI: Vad händer om vi ger beslutande kraft åt AI? Vad säger olika livsåskådningar om teknikens roll? Debattera AI och mänsklig unikhet.",
        aspects: ["ethics", "agency"]
      },
      {
        text: "Kritiskt granska AI-genererade bilder eller texter om religiösa grupper, eller analysera algoritmers roll i att förstärka stereotyper och polarisering.",
        aspects: ["critical", "ethics"]
      },
      {
        text: "Diskutera hur tekniska plattformar kan sprida både tolerans och hat, och hur människor måste stå upp för värden i en tid då AI kan förstärka budskap.",
        aspects: ["agency", "society"]
      }
    ],
    sources: [
      { label: "Skolverket", url: "https://www.skolverket.se" }
    ]
  },
  {
    subject: "Biologi",
    summary: "Biologiämnet nämner att eleverna ska göra fältstudier och experiment med analoga och digitala verktyg samt dokumentera resultat. Eleverna ska öva kritisk granskning av biologisk information. Centralt innehåll tar upp genteknikens möjligheter, risker och etiska frågor samt aktuella miljö- och hälsofrågor.",
    aspects: ["tools", "critical", "ethics", "society", "understanding", "agency"],
    highlights: [
      {
        text: "Använda digitala sensorer eller appar för t.ex. ljudanalys av fågelsång och förklara att liknande principer används i AI som identifierar arter - visa paralleller till AI-analys.",
        aspects: ["tools", "understanding"]
      },
      {
        text: "Kritiskt granska AI-genererade hälsoråd eller påståenden (myter om vaccin spridda av botar) och öva att skilja vetenskapligt underbyggd information från falsarier.",
        aspects: ["critical"]
      },
      {
        text: "Diskutera etik kring AI i medicin - AI-diagnoser, gentester och integritet. Resonera om vem som har ansvar om en AI gör fel i sjukvården.",
        aspects: ["ethics", "agency", "society"]
      }
    ],
    sources: [
      { label: "Skolverket", url: "https://www.skolverket.se" }
    ]
  },
  {
    subject: "Fysik",
    summary: "Fysikens centrala innehåll inkluderar observationer och experiment med analoga och digitala verktyg där resultaten dokumenteras. Eleverna lär sig kritisk granskning av fysisk information och tar ställning i aktuella frågor om energi, teknik och miljö. Under 'Fysiken i naturen och samhället' diskuteras strålning, energikällor och trafiksäkerhet.",
    aspects: ["tools", "understanding", "critical", "ethics", "society", "agency"],
    highlights: [
      {
        text: "Använda digitala mätinstrument i laborationer och förstå vikten av noggrann kalibrering - diskutera hur AI också måste tränas och 'kalibreras' med data.",
        aspects: ["tools", "understanding"]
      },
      {
        text: "Behandla klimatfrågan: Hur används AI i klimatforskning, och hur bedömer vi trovärdigheten i olika prognoser? Öva kritiskt tänkande om AI-prognoser.",
        aspects: ["critical", "society"]
      },
      {
        text: "Diskutera AI-teknik inom kärnkraftssäkerhet eller självkörande bilar och trafiksäkerhet. Resonera om etiska dimensioner - är det rätt att låta AI styra livsviktiga system?",
        aspects: ["ethics", "agency", "society"]
      }
    ],
    sources: [
      { label: "Skolverket", url: "https://www.skolverket.se" }
    ]
  },
  {
    subject: "Kemi",
    summary: "I kemi ska eleverna genomföra observationer och experiment med analoga och digitala verktyg. Eleverna övar informationssökning och kritisk granskning av kemiinformation samt för resonemang i aktuella miljö- och hälsofrågor. Kemin tar upp hur produkter utvecklas och deras livscykler.",
    aspects: ["tools", "understanding", "critical", "ethics", "society", "agency"],
    highlights: [
      {
        text: "Använda digitala simuleringar av molekyler eller kemiska reaktioner och jämföra med verkliga experiment. Diskutera hur kemister använder AI för att simulera nya material eller läkemedel.",
        aspects: ["tools", "understanding"]
      },
      {
        text: "Kritiskt granska påståenden om kemikalier i media eller på nätet - vilka kemiska fakta får man via sökmotor eller AI-assistent och hur vet vi att de stämmer?",
        aspects: ["critical"]
      },
      {
        text: "Diskutera AI-etik i samband med produktutveckling: AI för att övervaka miljögifter eller optimera återvinning. Vem bär ansvaret om en AI föreslår en farlig kemisk substans?",
        aspects: ["ethics", "agency", "society"]
      }
    ],
    sources: [
      { label: "Skolverket", url: "https://www.skolverket.se" }
    ]
  },
  {
    subject: "Bild",
    summary: "Bildämnet innehåller fotografering och överföring av bilder med hjälp av digitala verktyg. Viktigt är också att diskutera etiska frågor som kan uppstå vid framställning och användning av bilder. Bildanalys av samtida bildflöden inkluderar reklam och sociala medier och hur bilder används för påverkan.",
    aspects: ["tools", "understanding", "critical", "ethics", "agency", "society"],
    highlights: [
      {
        text: "Arbeta med foto- och bildredigeringsprogram som använder AI (filter, auto-justering) för att öva digitala verktyg och förstå vad AI kan göra inom bildbehandling.",
        aspects: ["tools", "understanding"]
      },
      {
        text: "Analysera AI-genererade bilder (deepfake-bilder eller AI-skapad konst) och ta ställning: är det ok att använda sådana bilder? Hur avgör man om en bild är äkta?",
        aspects: ["critical", "ethics"]
      },
      {
        text: "Diskutera hur algoritmer styr vilka bilder vi ser. Resonera kring eget ansvar i att skapa/dela bilder och hur AI kan förändra bildkommunikation (virtuella influencers).",
        aspects: ["agency", "society"]
      }
    ],
    sources: [
      { label: "Skolverket", url: "https://www.skolverket.se" }
    ]
  },
  {
    subject: "Musik",
    summary: "Musikämnet nämner digitala verktyg för musicerande och musikskapande. Centralt innehåll tar upp hur musik används som meningsskapande uttrycksform i olika medier, t.ex. i film och spel. Eleverna ska också lära sig om rättigheter och skyldigheter vid bruk av musik samt förstå musikens roll för identitet och normer.",
    aspects: ["tools", "understanding", "critical", "ethics", "society", "agency"],
    highlights: [
      {
        text: "Använda mjukvara för att skapa musik (inspelningsprogram, trumloopar eller AI-komponeringsapp) för att förstå hur algoritmer kan användas kreativt.",
        aspects: ["tools", "understanding"]
      },
      {
        text: "Diskutera AI i samhället: hur spelmusik kan anpassas dynamiskt av algoritmer eller hur streamingtjänster med AI-rekommendationer påverkar musikvanor.",
        aspects: ["society", "critical"]
      },
      {
        text: "Utforska upphovsrätt kopplat till AI: Vem äger musik skapad av AI? Får man träna en AI på befintliga låtar? Granska viral musik på TikTok eller AI-genererade 'deepfake'-låtar.",
        aspects: ["ethics", "agency"]
      }
    ],
    sources: [
      { label: "Skolverket", url: "https://www.skolverket.se" }
    ]
  },
  {
    subject: "Slöjd",
    summary: "Slöjdämnet uppmuntrar att skapa skisser, modeller och arbetsbeskrivningar med hjälp av digitala verktyg. Under hållbar utveckling jämförs materialens kvalitet och miljöpåverkan. Slöjd betonar idéutveckling, överväganden och reflektion över arbetsprocessen.",
    aspects: ["tools", "understanding", "critical", "ethics", "society", "agency"],
    highlights: [
      {
        text: "Använda enkla CAD-program, digitala symönster eller vinylskärare och nämna hur avancerade AI-baserade designverktyg kan föreslå konstruktioner (generativ design).",
        aspects: ["tools", "understanding", "agency"]
      },
      {
        text: "Diskutera AI i samhället genom exempel som smarta system för återvinning eller materialforskning med AI. Resonera om hur ny teknik hjälper oss hushålla med resurser.",
        aspects: ["society", "ethics", "agency"]
      },
      {
        text: "Om eleverna får en designlösning från ett datorprogram/AI, värdera den kritiskt: Är förslaget praktiskt? Blir det estetiskt som tänkt? Verktyget ersätter inte elevens omdöme.",
        aspects: ["critical", "agency"]
      }
    ],
    sources: [
      { label: "Skolverket", url: "https://www.skolverket.se" }
    ]
  },
  {
    subject: "Idrott och hälsa",
    summary: "I idrott och hälsa åk 7–9 ingår moment som kartkunskap för orientering, där eleverna kan använda kartor både med och utan digitala verktyg. Idrott och hälsa handlar om att följa och förbättra sin fysiska förmåga. Inom levnadsvanor kan man beröra balansen mellan skärmtid och fysisk aktivitet.",
    aspects: ["tools", "understanding", "critical", "ethics", "society", "agency"],
    highlights: [
      {
        text: "Jämföra traditionell karta och kompass med GPS eller orienterings-appar. Diskutera för- och nackdelar: Är det säkert att lita enbart på GPS? Vad gör man om tekniken fallerar?",
        aspects: ["tools", "understanding", "agency"]
      },
      {
        text: "Prova fitness-appar eller pulsklockor som samlar data och ger träningsråd. Analysera datan men också diskutera vem som äger hälsodatan och hur den används.",
        aspects: ["ethics", "critical"]
      },
      {
        text: "Resonera om balansen mellan skärmtid och fysisk aktivitet - hur AI-drivna rekommendationer (autoplay på YouTube, spelalgoritmer) kan bidra till stillasittande och vad individen kan göra.",
        aspects: ["society", "agency"]
      }
    ],
    sources: [
      { label: "Skolverket", url: "https://www.skolverket.se" }
    ]
  },
  {
    subject: "Hem- och konsumentkunskap",
    summary: "Centralt innehåll i HKK tar upp skillnaden mellan saklig konsumentinformation och annan påverkan på konsumtionsval, inklusive reklam och dolda budskap. Eleverna lär sig om konsumenters rättigheter och skillnaden mellan köp i butik och på internet. Under levnadsvanor och hållbar konsumtion lär sig eleverna om resurshushållning.",
    aspects: ["critical", "ethics", "agency", "society", "tools"],
    highlights: [
      {
        text: "Undersöka reklamflödet på sociala medier: Varför ser olika personer olika annonser? Träna kritiskt tänkande om AI:s roll i personlig marknadsföring.",
        aspects: ["critical", "society"]
      },
      {
        text: "Diskutera e-handelns AI-system - chattbottar i kundtjänst eller dynamisk prissättning online - och vad man som konsument behöver vara vaksam på enligt konsumenträtt.",
        aspects: ["ethics", "agency"]
      },
      {
        text: "Utforska smarta kök eller appar som föreslår recept utifrån vad som finns hemma och diskutera om tekniken kan hjälpa minska matsvinn - men kräver eget omdöme.",
        aspects: ["tools", "agency", "critical"]
      }
    ],
    sources: [
      { label: "Skolverket", url: "https://www.skolverket.se" }
    ]
  }
];
const AI_SUBJECT_NAMES = AI_SUBJECT_GUIDE.map(entry => entry.subject);
const AI_TOTAL_SUBJECTS = AI_SUBJECT_GUIDE.length;

// DOM elements
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const subjectSelect = document.getElementById("subjectFilter");
const tagFiltersContainer = document.getElementById("tagFilters");
const gradeCheckboxes = Array.from(document.querySelectorAll('[data-filter="grade"] input[type="checkbox"]'));
const searchInput = document.getElementById("searchInput");
const resultsGrid = document.getElementById("resultsGrid");
const resultsCount = document.getElementById("resultsCount");
const progressionControls = document.getElementById("progressionControls");
const progressionGrid = document.getElementById("progressionGrid");
const progressionSummary = document.getElementById("progressionSummary");
const resourceAccordion = document.getElementById("resourceAccordion");
const resetFiltersButton = document.getElementById("resetFilters");
const scrollButtons = Array.from(document.querySelectorAll("[data-scroll-target]"));
const navAnchorLinks = Array.from(document.querySelectorAll(".top-nav__links a[data-scroll-target]"));
const quickNavCards = Array.from(document.querySelectorAll(".section-nav__card[data-scroll-target]"));
const activityCarouselSection = document.getElementById("activityCarousel");
const activityCarouselTrack = document.getElementById("activityCarouselTrack");
const activityCarouselDots = document.getElementById("activityCarouselDots");
const activityCarouselPrev = document.getElementById("activityCarouselPrev");
const activityCarouselNext = document.getElementById("activityCarouselNext");
const activityCarouselNotice = document.getElementById("activityCarouselNotice");
const sectionReferenceIds = navAnchorLinks
  .map(link => link.dataset.scrollTarget || link.getAttribute("href"))
  .concat(quickNavCards.map(card => card.dataset.scrollTarget))
  .filter(Boolean)
  .map(ref => ref.replace(/^#/, ""));

const trackedSectionIds = new Set(sectionReferenceIds);
const trackedSections = Array.from(document.querySelectorAll("section[id]"))
  .filter(section => trackedSectionIds.has(section.id));

let scrollSpyFrameId = null;
const aiAspectFilters = document.getElementById("aiAspectFilters");
const aiAspectReset = document.getElementById("aiAspectReset");
const aiSubjectFilter = document.getElementById("aiSubjectSelect");
const aiGuideSummary = document.getElementById("aiGuideSummary");
const aiGuideGrid = document.getElementById("aiGuideGrid");
const aiGuideEmpty = document.getElementById("aiGuideEmpty");
let activityCarouselItems = [];
let activityCarouselDotButtons = [];
let activityCarouselIndex = 0;
let activityCarouselScrollFrameId = null;
let tagCheckboxes = [];
let activeProgressionArea = Object.keys(PROGRESSION_MAP)[0];
let aiActiveSubject = "alla";
let aiActiveAspects = new Set();
let aiAspectButtons = [];


function matchesSearch(entry, term) {
  if (!term) return true;
  const haystack = [
    entry.subject,
    entry.grade,
    entry.title,
    entry.description,
    entry.aiIntegration,
    entry.existingPractice,
    entry.tools.join(" "),
    entry.tags.join(" ")
  ]
    .concat(entry.keyActivities)
    .join(" ")
    .toLowerCase();
  return haystack.includes(term.toLowerCase());
}

function setActivityCarouselIndex(index, shouldScroll = true) {
  if (!activityCarouselItems.length) {
    return;
  }

  const clamped = Math.max(0, Math.min(index, activityCarouselItems.length - 1));
  activityCarouselIndex = clamped;

  if (shouldScroll) {
    const target = activityCarouselItems[clamped];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    }
  }

  if (activityCarouselPrev) {
    activityCarouselPrev.disabled = clamped === 0;
  }

  if (activityCarouselNext) {
    activityCarouselNext.disabled = clamped === activityCarouselItems.length - 1;
  }

  if (activityCarouselDotButtons.length) {
    activityCarouselDotButtons.forEach((dot, dotIndex) => {
      const isActive = dotIndex === clamped;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }
}

function handleActivityCarouselScroll() {
  if (!activityCarouselTrack || !activityCarouselItems.length) {
    return;
  }

  if (activityCarouselScrollFrameId !== null) {
    return;
  }

  activityCarouselScrollFrameId = window.requestAnimationFrame(() => {
    activityCarouselScrollFrameId = null;
    const trackRect = activityCarouselTrack.getBoundingClientRect();
    let closestIndex = activityCarouselIndex;
    let smallestDistance = Number.POSITIVE_INFINITY;

    activityCarouselItems.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const distance = Math.abs(rect.left - trackRect.left);
      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activityCarouselIndex) {
      setActivityCarouselIndex(closestIndex, false);
    }
  });
}

function handleActivityCarouselKeydown(event) {
  if (!activityCarouselItems.length) {
    return;
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    setActivityCarouselIndex(activityCarouselIndex + 1);
  } else if (event.key === "ArrowLeft") {
    event.preventDefault();
    setActivityCarouselIndex(activityCarouselIndex - 1);
  }
}

function hasPexelsApiKey() {
  return Boolean(pexelsApiKey);
}

function displayActivityCarouselNotice(message) {
  if (!activityCarouselNotice) {
    return;
  }

  if (!message) {
    activityCarouselNotice.textContent = "";
    activityCarouselNotice.hidden = true;
  } else {
    activityCarouselNotice.textContent = message;
    activityCarouselNotice.hidden = false;
  }
}

async function requestPexelsPhoto(query) {
  const url = new URL(PEXELS_SEARCH_ENDPOINT);
  url.searchParams.set("query", query);
  url.searchParams.set("per_page", "1");
  url.searchParams.set("orientation", "landscape");
  url.searchParams.set("size", "medium");

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: pexelsApiKey
    }
  });

  if (!response.ok) {
    throw new Error(`Pexels API responded with status ${response.status}`);
  }

  const payload = await response.json();
  if (payload && Array.isArray(payload.photos) && payload.photos.length) {
    return payload.photos[0];
  }

  return null;
}

function createPexelsQueries(entry) {
  const queries = [];
  const { subject = "", tags = [], grade = "", title = "" } = entry || {};
  const hints = title ? FEATURED_ACTIVITY_IMAGE_HINTS[title] : null;

  if (hints && Array.isArray(hints.queries)) {
    queries.push(...hints.queries);
  }

  if (title) {
    queries.push(`${title} education`);
    queries.push(`${title} classroom`);
  }

  if (subject) {
    const themedQueries = SUBJECT_PEXELS_QUERY_MAP[subject];
    if (Array.isArray(themedQueries)) {
      queries.push(...themedQueries);
    }
    queries.push(`${subject} classroom`);
    queries.push(`${subject} lesson`);
  }

  if (tags.length) {
    queries.push(`${tags[0]} education`);
    if (tags.length > 1) {
      queries.push(`${tags[0]} ${tags[1]} classroom`);
    }
    queries.push(tags.slice(0, 2).join(" "));
  }

  if (grade.includes("Lågstadiet")) {
    queries.push("primary school students technology", "young students collaboration");
  } else if (grade.includes("Mellanstadiet")) {
    queries.push("middle school classroom collaboration", "middle school digital learning");
  } else if (grade.includes("Högstadiet")) {
    queries.push("high school students technology", "high school project work");
  }

  queries.push("students using technology", "digital learning classroom", "students collaboration project");

  const sanitized = queries.map(q => (typeof q === "string" ? q.trim() : "")).filter(Boolean);
  return Array.from(new Set(sanitized));
}

function formatPexelsAltText(entry, photo) {
  if (photo && typeof photo.alt === "string" && photo.alt.trim()) {
    return photo.alt.trim();
  }

  if (entry && entry.title) {
    return `${entry.title} - illustrativ bild`;
  }

  if (entry && entry.subject) {
    return `${entry.subject} - illustrativ bild`;
  }

  return "Illustrationsbild från Pexels";
}

function updateScrollSpy() {
  if (!trackedSections.length) {
    return;
  }


  const offset = window.scrollY + window.innerHeight * 0.35;
  let currentId = trackedSections[0].id;

  trackedSections.forEach(section => {
    if (section.offsetTop <= offset) {
      currentId = section.id;
    }
  });

  setActiveSectionHighlight(currentId);
}

function scheduleScrollSpyUpdate() {
  if (scrollSpyFrameId) {
    return;
  }

  scrollSpyFrameId = window.requestAnimationFrame(() => {
    scrollSpyFrameId = null;
    updateScrollSpy();
  });
}

function setActiveSectionHighlight(sectionId) {
  const normalizedId = sectionId || null;
  navAnchorLinks.forEach(link => {
    const reference = (link.dataset.scrollTarget || link.getAttribute("href") || "").replace(/^#/, "");
    const isActive = normalizedId && reference === normalizedId;
    link.classList.toggle("is-active", Boolean(isActive));
  });

  quickNavCards.forEach(card => {
    const reference = (card.dataset.scrollTarget || "").replace(/^#/, "");
    const isActive = normalizedId && reference === normalizedId;
    card.classList.toggle("is-active", Boolean(isActive));
    card.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

async function getPexelsPhotoForEntry(entry) {
  if (!entry) {
    return null;
  }
  const cacheKey = entry.title || entry.subject || String(entry);
  if (pexelsImageCache.has(cacheKey)) {
    const cached = pexelsImageCache.get(cacheKey);
    if (cached && cached.id && !usedPexelsPhotoIds.has(cached.id)) {
      usedPexelsPhotoIds.add(cached.id);
    }
    return cached;
  }
  const queries = createPexelsQueries(entry);
  for (const query of queries) {
    try {
      const photo = await requestPexelsPhoto(query);
      if (photo) {
        pexelsImageCache.set(cacheKey, photo);
        if (photo.id) usedPexelsPhotoIds.add(photo.id);
        return photo;
      }
    } catch (error) {
      console.warn(`Pexels request failed for query "${query}"`, error);
    }
  }
  pexelsImageCache.set(cacheKey, null);
  return null;
}

function applyActivityCardImage(card, entry, photo) {
  if (!card || !photo) {
    return;
  }
  const figure = card.querySelector('[data-role="image"]');
  let hasImage = false;
  if (figure) {
    figure.innerHTML = "";
    if (photo.avg_color) {
      figure.style.backgroundColor = photo.avg_color;
    }
    const placeholder = document.createElement("div");
    placeholder.className = "activity-card__image-skeleton";
    figure.appendChild(placeholder);
    const imageSource = (photo.src && (photo.src.landscape || photo.src.medium || photo.src.large || photo.src.original)) || null;
    if (imageSource) {
      const img = document.createElement("img");
      img.src = imageSource;
      img.alt = formatPexelsAltText(entry, photo);
      img.loading = "lazy";
      img.decoding = "async";
      img.addEventListener("load", () => {
        img.classList.add("is-loaded");
        if (placeholder.parentElement === figure) {
          placeholder.remove();
        }
      });
      img.addEventListener("error", () => {
        card.classList.remove("has-image");
        if (placeholder.parentElement !== figure) {
          figure.appendChild(placeholder);
        }
        const creditEl = card.querySelector('[data-role="credit"]');
        if (creditEl) {
          creditEl.textContent = "";
          creditEl.hidden = true;
        }
      });
      figure.appendChild(img);
      hasImage = true;
      if (img.complete) {
        img.classList.add("is-loaded");
        if (placeholder.parentElement === figure) {
          placeholder.remove();
        }
      }
    }
  }
  const credit = card.querySelector('[data-role="credit"]');
  if (credit) {
    if (hasImage) {
      const photographerName = photo.photographer || "Pexels-fotograf";
      const photographerUrl = photo.photographer_url || photo.url || "https://www.pexels.com";
      const photoUrl = photo.url || photographerUrl;
      credit.innerHTML = `Foto av <a href="${photographerUrl}" target="_blank" rel="noopener">${photographerName}</a> på <a href="${photoUrl}" target="_blank" rel="noopener">Pexels</a>`;
      credit.hidden = false;
    } else {
      credit.textContent = "";
      credit.hidden = true;
    }
  }
  card.classList.toggle("has-image", hasImage);
}

async function hydrateActivityCarouselImages() {
  if (!activityCarouselItems.length || !hasPexelsApiKey() || hasHydratedActivityCarouselImages) {
    return;
  }
  hasHydratedActivityCarouselImages = true;
  displayActivityCarouselNotice("Hämtar fria bilder från Pexels ...");
  const results = await Promise.allSettled(
    activityCarouselItems.map(async card => {
      const index = Number(card.dataset.index);
      const entry = FEATURED_ACTIVITIES[index];
      if (!entry) {
        return false;
      }
      const photo = await getPexelsPhotoForEntry(entry);
      if (photo) {
        applyActivityCardImage(card, entry, photo);
        return true;
      }
      return false;
    })
  );
  const loaded = results.some(result => result.status === "fulfilled" && result.value);
  if (loaded) displayActivityCarouselNotice("");
  else displayActivityCarouselNotice("Kunde inte hämta bilder just nu. Försök igen senare.");
}

function initFiltersReveal() {
  const filtersSection = document.getElementById("filters");
  if (!filtersSection) {
    return;
  }

  filtersSection.classList.add("is-animatable");

  const activate = () => {
    filtersSection.classList.add("is-active");
    filtersSection.classList.remove("is-animatable");
  };

  if (!("IntersectionObserver" in window)) {
    activate();
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activate();
        observer.disconnect();
      }
    });
  }, { rootMargin: "-12% 0px" });

  observer.observe(filtersSection);
}

function initFilterPointerEffects() {
  const filtersSection = document.getElementById("filters");
  if (!filtersSection || !window.requestAnimationFrame) {
    return;
  }

  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    filtersSection.style.setProperty("--pointer-x", "50%");
    filtersSection.style.setProperty("--pointer-y", "50%");
    return;
  }

  let rafId = null;
  let targetX = 0.5;
  let targetY = 0.5;
  let currentX = 0.5;
  let currentY = 0.5;

  const updatePointerGradient = () => {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    filtersSection.style.setProperty("--pointer-x", `${(currentX * 100).toFixed(2)}%`);
    filtersSection.style.setProperty("--pointer-y", `${(currentY * 100).toFixed(2)}%`);

    if (Math.abs(targetX - currentX) > 0.001 || Math.abs(targetY - currentY) > 0.001) {
      rafId = window.requestAnimationFrame(updatePointerGradient);
    } else {
      rafId = null;
    }
  };

  const queueUpdate = () => {
    if (rafId === null) {
      rafId = window.requestAnimationFrame(updatePointerGradient);
    }
  };

  filtersSection.addEventListener("pointermove", event => {
    const rect = filtersSection.getBoundingClientRect();
    if (!rect.width || !rect.height) {
      return;
    }

    targetX = (event.clientX - rect.left) / rect.width;
    targetY = (event.clientY - rect.top) / rect.height;

    targetX = Math.min(Math.max(targetX, 0), 1);
    targetY = Math.min(Math.max(targetY, 0), 1);

    queueUpdate();
  });

  filtersSection.addEventListener("pointerleave", () => {
    targetX = 0.5;
    targetY = 0.5;
    queueUpdate();
  });

  filtersSection.style.setProperty("--pointer-x", "50%");
  filtersSection.style.setProperty("--pointer-y", "50%");
}

function populateSubjectOptions() {
  if (!subjectSelect) return;
  const subjects = Array.from(new Set(competencyData.map(item => item.subject))).sort();
  subjects.forEach(subject => {
    const option = document.createElement("option");
    option.value = subject;
    option.textContent = subject;
    subjectSelect.appendChild(option);
  });
}

function renderTagFilters() {
  if (!tagFiltersContainer) return;

  tagFiltersContainer.innerHTML = "";
  tagCheckboxes = [];

  TAGS.forEach(tag => {
    const label = document.createElement("label");
    label.className = "tag-chip";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = tag;
    checkbox.checked = true;

    const textSpan = document.createElement("span");
    textSpan.textContent = tag;

    label.appendChild(checkbox);
    label.appendChild(textSpan);
    tagFiltersContainer.appendChild(label);
    tagCheckboxes.push(checkbox);
  });
}

function getSelectedGrades() {
  return gradeCheckboxes.filter(box => box.checked).map(box => box.value);
}

function getSelectedTags() {
  return tagCheckboxes.filter(box => box.checked).map(box => box.value);
}

function filterData() {
  const selectedSubject = subjectSelect ? subjectSelect.value : 'alla';
  const selectedGrades = getSelectedGrades();
  const selectedTags = getSelectedTags();
  const searchTerm = searchInput.value.trim();

  return competencyData.filter(entry => {
    const subjectMatch = selectedSubject === "alla" || entry.subject === selectedSubject;
    const gradeMatch = selectedGrades.length === 0 || selectedGrades.includes(entry.grade);
    const tagMatch = entry.tags.some(tag => selectedTags.includes(tag));
    const searchMatch = matchesSearch(entry, searchTerm);
    return subjectMatch && gradeMatch && tagMatch && searchMatch;
  });
}

function renderResults() {
  if (!resultsCount || !resultsGrid) { return; }
  const filtered = filterData();
  const total = competencyData.length;
  const countText = filtered.length === total
    ? `Visar alla ${total} exempel.`
    : filtered.length === 0
      ? "Inga exempel matchade dina filter. Justera urvalet för att hitta nya kombinationer."
      : `Visar ${filtered.length} av ${total} exempel.`;

  resultsCount.textContent = countText;

  if (filtered.length === 0) {
    resultsGrid.innerHTML = '<p class="no-results">Justera filter, avmarkera fokusområden eller rensa sökningen för att se fler förslag.</p>';
    return;
  }

  resultsGrid.innerHTML = filtered.map(entry => buildResultCardMarkup(entry)).join("");
}

function buildResultCardMarkup(entry) {
    const activities = entry.keyActivities.map(item => `<li>${item}</li>`).join("");
    const tools = entry.tools.length ? entry.tools.join(", ") : "-";
    const tags = entry.tags.map(tag => `<span>${tag}</span>`).join("");
    const stageClass = STAGE_CLASS_MAP[entry.grade] || "stage-general";

    return `
      <article class="result-card ${stageClass}">
        <header>
          <span class="subject-pill">${entry.subject}</span>
          <div class="grade-badge ${stageClass}">${entry.grade}</div>
        </header>
        <h3>${entry.title}</h3>
        <p>${entry.description}</p>
        <div>
          <strong>Aktiviteter:</strong>
          <ul>${activities}</ul>
        </div>
        <div class="annotation"><strong>AI-fokus:</strong> ${entry.aiIntegration}</div>
        <div class="annotation"><strong>Knyt an till:</strong> ${entry.existingPractice}</div>
        <div class="meta-row"><span>Verktyg: ${tools}</span></div>
        <div class="meta-row tags">${tags}</div>
      </article>
    `;
}

function buildActivityCardMarkup(entry, index) {
    const tags = entry.tags.map(tag => `<span class="activity-card__tag">${tag}</span>`).join("");
    const stageClass = STAGE_CLASS_MAP[entry.grade] || "stage-general";

    return `
      <article class="activity-card ${stageClass}" role="listitem" tabindex="-1">
        <div class="activity-card__image" data-entry-index="${index}">
          <div class="activity-card__placeholder"></div>
        </div>
        <div class="activity-card__content">
          <header class="activity-card__header">
            <span class="activity-card__subject">${entry.subject}</span>
            <span class="activity-card__grade ${stageClass}">${entry.grade}</span>
          </header>
          <h3 class="activity-card__title">${entry.title}</h3>
          <p class="activity-card__description">${entry.description}</p>
          <div class="activity-card__tags">${tags}</div>
        </div>
      </article>
    `;
}

// Additional required functions
function addEventListeners() {

  if (subjectSelect) { subjectSelect.addEventListener("change", renderResults); }
  
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      window.clearTimeout(searchInput._debounce);
      searchInput._debounce = window.setTimeout(renderResults, 150);
    });
  }

  gradeCheckboxes.forEach(checkbox => { checkbox.addEventListener("change", renderResults); });

  tagCheckboxes.forEach(checkbox => { checkbox.addEventListener("change", renderResults); });

  if (resetFiltersButton) { resetFiltersButton.addEventListener("click", resetAllFilters); }

  scrollButtons.forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault();
      const targetSelector = button.dataset.scrollTarget;
      if (!targetSelector) return;
      const target = document.querySelector(targetSelector);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSectionHighlight(target.id);
        if (target.id && window.history && window.history.replaceState) {
          window.history.replaceState(null, "", `#${target.id}`);
        }
      }
      if (button instanceof HTMLElement) button.blur();
      if (navLinks) navLinks.classList.remove("is-open");
      if (navToggle) navToggle.setAttribute("aria-expanded", "false");
      scheduleScrollSpyUpdate();
    });
  });

  if (navToggle && navLinks) {
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navAnchorLinks.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  window.addEventListener("scroll", scheduleScrollSpyUpdate);
  window.addEventListener("resize", scheduleScrollSpyUpdate);
}

function resetAllFilters() {
  if (subjectSelect) subjectSelect.value = "alla";
  gradeCheckboxes.forEach(checkbox => { checkbox.checked = true; });
  tagCheckboxes.forEach(checkbox => checkbox.checked = true);
  renderResults();
  updateScrollSpy();
}

function renderProgressionControls() {
  if (!progressionControls) return;
  const areas = Object.keys(PROGRESSION_MAP);
  progressionControls.innerHTML = areas.map(area => {
    const isActive = area === activeProgressionArea;
    return `<button type="button" class="pill-button${isActive ? " is-active" : ""}" data-area="${area}" title="${PROGRESSION_MAP[area]?.summary || ''}">${area}</button>`;
  }).join("");

  progressionControls.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', () => {
          const area = button.dataset.area;
          if (activeProgressionArea === area) return;
          activeProgressionArea = area;
          renderProgressionControls();
          renderProgressionGrid();
      });
  });
}

function renderProgressionGrid() {
  if (!progressionGrid || !PROGRESSION_MAP[activeProgressionArea]) return;
  const area = PROGRESSION_MAP[activeProgressionArea];
  progressionSummary.textContent = area.summary;
  progressionGrid.innerHTML = GRADE_ORDER.map(stageName => {
      const stage = area.stages[stageName];
      if (!stage) return '';
      const skills = (stage.keySkills || []).map(item => `<li>${item}</li>`).join("");
      const ai = (stage.aiAngles || []).map(item => `<li>${item}</li>`).join("");
      const questions = (stage.guidingQuestions || []).map(item => `<li>${item}</li>`).join("");
      const stageClass = STAGE_CLASS_MAP[stageName] || "stage-general";
      return `
        <article class="progression-card ${stageClass}">
          <header><span class="progression-stage">${stageName}</span><p class="progression-focus">${stage.focus || ""}</p></header>
          ${skills ? `<div><strong>Nyckelförmågor</strong><ul>${skills}</ul></div>` : ""}
          ${ai ? `<div><strong>AI-förstärkning</strong><ul>${ai}</ul></div>` : ""}
          ${questions ? `<div><strong>Frågor att ställa</strong><ul>${questions}</ul></div>` : ""}
          ${stage.checkpoint ? `<div class="annotation"><strong>Checkpunkt:</strong> ${stage.checkpoint}</div>` : ""}
        </article>`;
  }).join("");
}

function renderResources() {
  if (!resourceAccordion) return;
  resourceAccordion.innerHTML = RESOURCE_GROUPS.map((group, index) => {
    const items = (group.items || []).map(item => {
      const label = item.link
        ? `<a class="resource-link" href="${item.link}" target="_blank" rel="noopener">${item.name}</a>`
        : `<span class="resource-link">${item.name}</span>`;
      return `
        <li>
          <div class="resource-item-header">
            <span class="resource-tag">${item.type || "Resurs"}</span>
            ${label}
          </div>
          <p class="resource-description">${item.summary || ""}</p>
        </li>
      `;
    }).join("");

    return `
      <details class="resource-card"${index === 0 ? " open" : ""}>
        <summary>
          <h3>${group.name}</h3>
          <p>${group.summary || ""}</p>
        </summary>
        <ul class="resource-list">
          ${items}
        </ul>
      </details>
    `;
  }).join("");
}

function renderActivityCarousel() {
  if (!activityCarouselTrack) {
    if (activityCarouselSection) {
      activityCarouselSection.style.display = "none";
    }
    return;
  }

  if (!FEATURED_ACTIVITIES.length) {
    if (activityCarouselSection) {
      activityCarouselSection.style.display = "none";
    }
    return;
  }

  activityCarouselTrack.innerHTML = FEATURED_ACTIVITIES
    .map((entry, index) => buildActivityCardMarkup(entry, index))
    .join("");

  activityCarouselItems = Array.from(activityCarouselTrack.querySelectorAll(".activity-card"));

  if (!activityCarouselItems.length) {
    if (activityCarouselSection) {
      activityCarouselSection.style.display = "none";
    }
    return;
  }

  if (!hasPexelsApiKey()) {
    displayActivityCarouselNotice("Lägg till din Pexels API-nyckel i sidans attribut data-pexels-key för att visa bilder.");
  } else if (!hasHydratedActivityCarouselImages) {
    displayActivityCarouselNotice("");
  }

  if (activityCarouselDots) {
    activityCarouselDots.innerHTML = FEATURED_ACTIVITIES
      .map((_, index) => `<button type="button" class="activity-carousel__dot${index === 0 ? " is-active" : ""}" aria-label="Visa aktivitet ${index + 1}" aria-pressed="${index === 0 ? "true" : "false"}"></button>`)
      .join("");
    activityCarouselDotButtons = Array.from(activityCarouselDots.querySelectorAll(".activity-carousel__dot"));
    activityCarouselDotButtons.forEach((dot, dotIndex) => {
      dot.addEventListener("click", () => setActivityCarouselIndex(dotIndex));
    });
  }

  if (activityCarouselPrev && !activityCarouselPrev.dataset.bound) {
    activityCarouselPrev.addEventListener("click", () => setActivityCarouselIndex(activityCarouselIndex - 1));
    activityCarouselPrev.dataset.bound = "true";
  }

  if (activityCarouselNext && !activityCarouselNext.dataset.bound) {
    activityCarouselNext.addEventListener("click", () => setActivityCarouselIndex(activityCarouselIndex + 1));
    activityCarouselNext.dataset.bound = "true";
  }

  if (!activityCarouselTrack.dataset.bound) {
    activityCarouselTrack.addEventListener("scroll", handleActivityCarouselScroll, { passive: true });
    activityCarouselTrack.addEventListener("keydown", handleActivityCarouselKeydown);
    activityCarouselTrack.dataset.bound = "true";
  }

  if (activityCarouselSection) {
    activityCarouselSection.style.removeProperty("display");
  }

  setActivityCarouselIndex(0, false);

  hydrateActivityCarouselImages().catch(error => {
    console.warn("Pexels images could not be loaded", error);
    if (hasPexelsApiKey()) {
      displayActivityCarouselNotice("Kunde inte hämta bilder just nu. Försök igen senare.");
    }
  });
}

function populateAiSubjectFilter() {
  if (!aiSubjectFilter) { return; }
  AI_SUBJECT_NAMES.forEach(subject => {
    const option = document.createElement("option");
    option.value = subject;
    option.textContent = subject;
    aiSubjectFilter.appendChild(option);
  });
}

function renderAiAspectFilters() {
  if (!aiAspectFilters) { return; }
  aiAspectFilters.innerHTML = AI_ASPECTS.map(aspect => `
    <button class="ai-aspect-chip" data-aspect="${aspect.id}">${aspect.label}</button>
  `).join("");
}

function updateAiAspectChipStates() {
  if (!aiAspectFilters) { return; }
  const chips = aiAspectFilters.querySelectorAll('.ai-aspect-chip');
  chips.forEach(chip => {
    const aspectId = chip.dataset.aspect;
    const isActive = aiActiveAspects.has(aspectId);
    chip.classList.toggle('is-active', isActive);
    chip.setAttribute('aria-pressed', isActive.toString());
  });
}

function renderAiGuide() {
  if (!aiGuideGrid) { return; }
  let filtered = AI_SUBJECT_GUIDE;

  if (aiActiveSubject !== "alla") {
    filtered = filtered.filter(entry => entry.subject === aiActiveSubject);
  }

  if (aiActiveAspects.size > 0) {
    filtered = filtered.filter(entry =>
      Array.from(aiActiveAspects).some(aspectId =>
        entry.aspects && entry.aspects.includes(aspectId)
      )
    );
  }

  if (filtered.length === 0) {
    if (aiGuideEmpty) {
      aiGuideEmpty.hidden = false;
    }
    aiGuideGrid.innerHTML = "";
  } else {
    if (aiGuideEmpty) {
      aiGuideEmpty.hidden = true;
    }
    aiGuideGrid.innerHTML = filtered.map(entry => {
      const matchingAspects = entry.aspects
        ? entry.aspects.filter(aspectId => aiActiveAspects.size === 0 || aiActiveAspects.has(aspectId))
        : [];
      const aspectTags = matchingAspects.map(aspectId => {
        const aspect = AI_ASPECT_MAP[aspectId];
        return aspect ? `<span class="ai-aspect-tag">${aspect.label}</span>` : '';
      }).join('');

      const highlightsHtml = entry.highlights
        ? entry.highlights
            .filter(highlight => {
              if (aiActiveAspects.size === 0) return true;
              return highlight.aspects.some(aspectId => aiActiveAspects.has(aspectId));
            })
            .map((highlight, index) => {
              const highlightAspectTags = highlight.aspects
                .filter(aspectId => aiActiveAspects.size === 0 || aiActiveAspects.has(aspectId))
                .map(aspectId => {
                  const aspect = AI_ASPECT_MAP[aspectId];
                  return aspect ? `<span class="ai-highlight-aspect">${aspect.label}</span>` : '';
                }).join(' ');

              return `
                <div class="ai-highlight">
                  <div class="ai-highlight-header">
                    <span class="ai-highlight-number">${index + 1}</span>
                    <div class="ai-highlight-content">
                      <p class="ai-highlight-text">${highlight.text}</p>
                      ${highlightAspectTags ? `
                        <div class="ai-highlight-aspects">
                          <span class="ai-aspects-label">AI-aspekter:</span>
                          <div class="ai-aspects-tags">${highlightAspectTags}</div>
                        </div>
                      ` : ''}
                    </div>
                  </div>
                </div>
              `;
            }).join('')
        : '';

      return `
        <div class="ai-guide-card">
          <div class="ai-subject-header">
            <h2 class="ai-subject-title">${entry.subject}</h2>
            <div class="ai-subject-badge">AI-litteracitet åk 7-9</div>
          </div>

          <div class="ai-central-content">
            <div class="ai-section-header">
              <span class="ai-section-icon">📋</span>
              <h3 class="ai-section-title">Centralt innehåll som kan kopplas till AI</h3>
            </div>
            <div class="ai-content-box">
              <p class="ai-guide-summary">${entry.summary}</p>
            </div>
          </div>

          ${highlightsHtml ? `
            <div class="ai-highlights">
              <div class="ai-section-header">
                <span class="ai-section-icon">🎯</span>
                <h3 class="ai-section-title">Konkreta AI-exempel för undervisningen</h3>
              </div>
              <div class="ai-examples-container">
                ${highlightsHtml}
              </div>
            </div>
          ` : ''}
        </div>
      `;
    }).join("");
  }

  updateAiGuideSummary(filtered.length);
}

function updateAiGuideSummary(count) {
  if (!aiGuideSummary) { return; }
  if (aiActiveSubject === "alla" && aiActiveAspects.size === 0) {
    aiGuideSummary.textContent = `Visar alla ${AI_TOTAL_SUBJECTS} ämnen`;
  } else {
    const subjectText = aiActiveSubject === "alla" ? "alla ämnen" : aiActiveSubject;
    const aspectText = aiActiveAspects.size > 0
      ? ` (${aiActiveAspects.size} aspekt${aiActiveAspects.size > 1 ? 'er' : ''} valda)`
      : '';
    aiGuideSummary.textContent = `${count} av ${AI_TOTAL_SUBJECTS} ämnen visas för ${subjectText}${aspectText}`;
  }
}

function initAISection() {
  if (!aiGuideGrid) {
    return;
  }

  populateAiSubjectFilter();
  renderAiAspectFilters();

  if (aiSubjectFilter) {
    aiSubjectFilter.addEventListener("change", () => {
      aiActiveSubject = aiSubjectFilter.value;
      renderAiGuide();
    });
  }

  if (aiAspectFilters) {
    aiAspectFilters.addEventListener("click", (event) => {
      if (event.target.classList.contains("ai-aspect-chip")) {
        const aspectId = event.target.dataset.aspect;
        if (aiActiveAspects.has(aspectId)) {
          aiActiveAspects.delete(aspectId);
        } else {
          aiActiveAspects.add(aspectId);
        }
        updateAiAspectChipStates();
        renderAiGuide();
      }
    });
  }

  if (aiAspectReset) {
    aiAspectReset.addEventListener("click", () => {
      aiActiveAspects.clear();
      updateAiAspectChipStates();
      renderAiGuide();
    });
  }

  updateAiAspectChipStates();
  renderAiGuide();

}

function init() {
  initFiltersReveal();
  initFilterPointerEffects();
  populateSubjectOptions();
  renderTagFilters();
  renderResults();
  renderProgressionControls();
  renderProgressionGrid();
  renderResources();
  renderActivityCarousel();
  initAISection();
  addEventListeners();
  scheduleScrollSpyUpdate();
}

document.addEventListener("DOMContentLoaded", () => {
  init();
});
