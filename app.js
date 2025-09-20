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

const STAGE_CLASS_MAP = {
  "Lågstadiet (åk 1-3)": "stage-low",
  "Mellanstadiet (åk 4-6)": "stage-mid",
  "Högstadiet (åk 7-9)": "stage-high"
};

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

];

const GRADE_ORDER = [
  "Lågstadiet (åk 1-3)",
  "Mellanstadiet (åk 4-6)",
  "Högstadiet (åk 7-9)"
];

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

const AI_DIMENSIONS = [
  {
    id: "foundations",
    name: "AI-grunder & epistemik",
    summary: "Ger språk för vad AI är, hur det tränas och hur det ändrar kunskapslandskapet.",
    teacherFocus: [
      "Visa hur AI bygger på data, sannolikhet och mänskliga val.",
      "Planera progression från konkreta exempel till abstrakta begrepp.",
      "Lyft epistemiska frågor: vems röst och kunskap syns i AI?"
    ],
    studentFocus: [
      "Förstå att AI är en mönstermaskin – inte en människa.",
      "Kunna beskriva skillnaden mellan traditionell kod och maskininlärning.",
      "Identifiera var AI redan finns i vardagen och hur svar kan variera."
    ],
    keyMessages: [
      "AI gissar genom statistik – den tänker inte som vi.",
      "Träningsdata och prompt påverkar allt AI levererar.",
      "Epistemik: AI förändrar vad som uppfattas som sant och trovärdigt."
    ],
    concepts: [
      "Maskininlärning",
      "Generativ AI",
      "Träningsdata",
      "Hallucination",
      "Epistemisk påverkan"
    ],
    metaQuestions: [
      "Vilka data tror ni modellen tränades på?",
      "Vad gör vi när svaret låter bra men verkar fel?",
      "Vilka perspektiv saknas i detta svar?"
    ]
  },
  {
    id: "learning",
    name: "AI i lärandet",
    summary: "Använd AI som lärandepartner med fokus på metakognition, process och transparens.",
    teacherFocus: [
      "Designa uppgifter där AI stödjer – inte ersätter – elevens tänkande.",
      "Utveckla bedömning som synliggör process och AI-användning.",
      "Modellera hur man dokumenterar och reflekterar över AI-stöd."
    ],
    studentFocus: [
      "Kunna prompta, iterera och utvärdera AI-respons.",
      "Synliggöra vad AI gjort och vad som är eget arbete.",
      "Se AI som bollplank, inte facit – och anpassa till olika ämnen."
    ],
    keyMessages: [
      "Process över produkt – visa hur AI bidragit.",
      "Metakognition: reflektera över lärande med AI.",
      "AI stödjer tillgänglighet och inkludering när det används medvetet."
    ],
    concepts: [
      "Prompt engineering",
      "Formativ bedömning",
      "Scaffolding",
      "Tillgänglighet",
      "Multimodalt lärande"
    ],
    metaQuestions: [
      "Hur använder jag AI utan att tappa kontrollen?",
      "Vad gör jag själv och varför?",
      "När är det bättre att inte använda AI?"
    ]
  },
  {
    id: "critical",
    name: "Kritiskt granska AI",
    summary: "Träna elever att alltid ifrågasätta AI-genererat innehåll och förstå bias, syfte och motiv.",
    teacherFocus: [
      "Visa att AI inte är en sökmotor – den hallucinerar och har bias.",
      "Ge konkreta metoder för faktakoll när traditionella verktyg inte räcker.",
      "Modellera hur man analyserar motiv, makt och kontext i AI-svar."
    ],
    studentFocus: [
      "Alltid korsreferera AI-svar och identifiera hallucinationer.",
      "Kunna avslöja deepfakes och manipulativt innehåll.",
      "Bedöma motiv, bias och relevans i AI-genererat material."
    ],
    keyMessages: [
      "AI formar vad som ser sant ut – inte bara vad som sägs.",
      "Verifiering kräver flera källor och kritiska frågor.",
      "Analysera syfte: informera, övertyga eller manipulera?"
    ],
    concepts: [
      "Hallucination",
      "Deepfake",
      "Desinformation",
      "Bias",
      "Faktakontroll"
    ],
    metaQuestions: [
      "Hur kan jag kontrollera om detta stämmer?",
      "Vem gynnas av att detta sprids?",
      "Vilka röster saknas i AI:s svar?"
    ]
  },
  {
    id: "ethics",
    name: "Etik, ansvar & integritet",
    summary: "Utforska rättvisa, transparens och mänskligt ansvar i all AI-användning.",
    teacherFocus: [
      "Etik handlar om värderingar och konsekvenser – inte bara regler.",
      "Gör etik till del av vardagen: data, integritet och upphovsrätt.",
      "Visa hur AI kan inkludera – men också exkludera – olika grupper."
    ],
    studentFocus: [
      "Känna till integritetsrisker och GDPR-principer.",
      "Skilja på stöd och fusk, alltid redovisa AI-användning.",
      "Identifiera bias och agera rättvist, hållbart och omtänksamt."
    ],
    keyMessages: [
      "Transparens och ansvar – berätta hur AI används.",
      "Integritet gäller både mig och andra.",
      "Använd AI för inkludering och tillgänglighet."
    ],
    concepts: [
      "Integritet",
      "GDPR",
      "Upphovsrätt",
      "Bias",
      "Hållbarhet"
    ],
    metaQuestions: [
      "Är det rätt att använda AI för detta?",
      "Vem kan påverkas negativt?",
      "Gör detta världen mer inkluderande eller exkluderande?"
    ]
  },
  {
    id: "agency",
    name: "Mänsklig autonomi & kognition",
    summary: "Bevara mänsklig agens och förstå distribuerat tänkande när AI blir vardag.",
    teacherFocus: [
      "Tänkande sker i samspel – hjälp eleverna styra det samspelet.",
      "Lyft mänskliga kvaliteter: etik, intuition, empati, kreativitet.",
      "Träna metakognition: när stödjer AI och när hindrar det lärandet?"
    ],
    studentFocus: [
      "Känna igen när de tänker med AI och när de tänker själva.",
      "Kunna kombinera mänsklig kreativitet med AI:s styrkor.",
      "Behålla empati, tålamod och egen beslutskraft."
    ],
    keyMessages: [
      "AI kompletterar – ersätter inte – mänskligt tänkande.",
      "Metakognition behövs för att undvika beroende.",
      "Människan tar alltid det slutliga beslutet."
    ],
    concepts: [
      "Distribuerad kognition",
      "Kognitiv autonomi",
      "Kognitiv resiliens",
      "Komplementaritet",
      "Känslomässig autonomi"
    ],
    metaQuestions: [
      "Hur förändras mitt tänkande när jag använder AI?",
      "Vad tillför jag som människa i processen?",
      "Litar jag mer på AI än på min egen bedömning?"
    ]
  },
  {
    id: "society",
    name: "Samhällsanalys & framtid",
    summary: "Utforska hur AI påverkar demokrati, arbete, maktstrukturer och globala relationer.",
    teacherFocus: [
      "AI omformar makt och kunskap – gör eleverna medvetna medborgare.",
      "Diskutera både risker och möjligheter ur etiskt och demokratiskt perspektiv.",
      "Visa hur elever kan påverka AI-utvecklingen lokalt och globalt."
    ],
    studentFocus: [
      "Förstå vem som äger och styr AI och vad det betyder för dem.",
      "Analysera AI:s påverkan på jobb, demokrati och klimat.",
      "Veta hur man deltar i samhällsdebatt och påverkar AI-frågor."
    ],
    keyMessages: [
      "AI handlar om makt, resurser och värderingar.",
      "Teknik är inte neutral – den formas av dem som utvecklar den.",
      "Framtiden är påverkbar: välj vilka AI-lösningar du stöttar."
    ],
    concepts: [
      "Algoritmisk styrning",
      "Digital suveränitet",
      "Desinformation",
      "Värdealignment",
      "AI-governance"
    ],
    metaQuestions: [
      "Vem tjänar på denna AI-utveckling och vem riskerar att förlora?",
      "Hur påverkar AI mina demokratiska rättigheter?",
      "Vilken framtid vill jag bidra till?"
    ]
  }
];

const AI_STAGE_MAPPINGS = [
  {
    dimensionId: "foundations",
    stage: "Lågstadiet (åk 1-3)",
    focus: "Utforska AI konkret: upptäck var det finns och vilka mönster det använder.",
    subjectActivities: [
      {
        subject: "Svenska",
        title: "AI-resan i klassbrevet",
        description: "Jämför idéer från en AI-assistent med egna formuleringar och markera skillnader."
      },
      {
        subject: "Biologi",
        title: "Artspanarna",
        description: "Låt AI gissa arten på elevernas bilder, kontrollera i fältguide och diskutera varför svaren skiljer sig."
      },
      {
        subject: "Musik",
        title: "Rytmroboten",
        description: "AI transkriberar klassens sång – eleverna kontrollerar rimlighet och förbättrar resultatet."
      }
    ]
  },
  {
    dimensionId: "foundations",
    stage: "Mellanstadiet (åk 4-6)",
    focus: "Bygg begreppsförståelse och koppla AI till datastrukturer och källor.",
    subjectActivities: [
      {
        subject: "Matematik",
        title: "Träningsdata-experiment",
        description: "Samla eget talmaterial, träna en enkel modell och analysera hur datan styr resultatet."
      },
      {
        subject: "Historia",
        title: "AI sammanfattar källor",
        description: "Låt AI sammanfatta ett historiskt dokument och jämför med klassens egen struktur."
      },
      {
        subject: "Geografi",
        title: "Klimatzoner med AI",
        description: "Analysera AI:s beskrivningar av klimatzoner och jämför med kartlager och statistik."
      }
    ]
  },
  {
    dimensionId: "foundations",
    stage: "Högstadiet (åk 7-9)",
    focus: "Koppla AI till epistemologi och makt: vem skapar kunskap och hur distribueras den?",
    subjectActivities: [
      {
        subject: "Samhällskunskap",
        title: "Källkritisk AI-panel",
        description: "Låt AI svara från olika perspektiv i en samhällsfråga och analysera vilka röster som saknas."
      },
      {
        subject: "Teknik",
        title: "Bygg en enkel klassmodell",
        description: "Träna en liten modell på klassens data och diskutera etik, representativitet och begränsningar."
      },
      {
        subject: "Engelska",
        title: "Promptstafett",
        description: "Iterera promptar för att se hur svaren förändras och dokumentera vilka prompts som gav bäst precision."
      }
    ]
  },
  {
    dimensionId: "learning",
    stage: "Lågstadiet (åk 1-3)",
    focus: "Använd AI som uttalad medskapare i enkla arbeten med tydlig vuxenstyrning.",
    subjectActivities: [
      {
        subject: "Svenska",
        title: "AI som ordkompis",
        description: "Eleverna ber AI föreslå rim eller idéer och väljer sedan sina favoritförslag."
      },
      {
        subject: "Bild",
        title: "Inspirationskort",
        description: "AI föreslår färger och former som eleverna testar analogt och digitalt."
      },
      {
        subject: "Idrott och hälsa",
        title: "Rörelsebank",
        description: "AI hjälper till att skapa rörelselekar som eleverna provar, utvärderar och förbättrar."
      }
    ]
  },
  {
    dimensionId: "learning",
    stage: "Mellanstadiet (åk 4-6)",
    focus: "Metakognition i centrum: dokumentera hur AI-stödet förändrar arbetssätt.",
    subjectActivities: [
      {
        subject: "Matematik",
        title: "Prompta problemlösning",
        description: "Jämför AI:s lösningssteg med egna och markera var eleverna behöver förklara bättre."
      },
      {
        subject: "Slöjd",
        title: "Digital prototyp",
        description: "AI ger förbättringsförslag på design – eleverna bedömer hållbarhet och beslutar vad som genomförs."
      },
      {
        subject: "Musik",
        title: "Mix-feedback",
        description: "AI ger respons på mixnivåer, eleverna justerar och beskriver vad som blev bättre."
      }
    ]
  },
  {
    dimensionId: "learning",
    stage: "Högstadiet (åk 7-9)",
    focus: "Processdokumentation och transparent AI-användning i ämnesarbete.",
    subjectActivities: [
      {
        subject: "Engelska",
        title: "AI som språkcoach",
        description: "Eleverna loggar AI-feedback på texter och motiverar vilka ändringar som behålls."
      },
      {
        subject: "Biologi",
        title: "Laborationspartner",
        description: "AI hjälper till att tolka data, eleverna dokumenterar hur de verifierat tolkningarna."
      },
      {
        subject: "Hem- och konsumentkunskap",
        title: "AI-planerad meny",
        description: "Jämför AI:s matsedel med egen, värdera näringsinnehåll, klimat och ekonomi och skriv reflektion."
      }
    ]
  },
  {
    dimensionId: "critical",
    stage: "Lågstadiet (åk 1-3)",
    focus: "Träna reflexer: AI kan ha fel – hitta skillnader mot säkra källor.",
    subjectActivities: [
      {
        subject: "Svenska",
        title: "Faktakollen",
        description: "AI berättar en saga – eleverna hittar fel och skriver om tillsammans."
      },
      {
        subject: "Geografi",
        title: "Väderdetektiver",
        description: "AI gissar vädret, eleverna jämför med SMHI och diskuterar avvikelser."
      },
      {
        subject: "Bild",
        title: "Vad är äkta?",
        description: "Jämför AI-genererade bilder med foton, leta detaljer som avslöjar skillnader."
      }
    ]
  },
  {
    dimensionId: "critical",
    stage: "Mellanstadiet (åk 4-6)",
    focus: "Utveckla verktygslåda för att avslöja bias, hallucinationer och dolda motiv.",
    subjectActivities: [
      {
        subject: "Historia",
        title: "Källkritisk jämförelse",
        description: "AI sammanfattar ett historiskt brev – eleverna jämför mot original och markerar vad som saknas."
      },
      {
        subject: "Matematik",
        title: "Statistikgranskning",
        description: "AI hittar på statistik, eleverna kontrollerar källor och visar hur siffror manipuleras."
      },
      {
        subject: "Musik",
        title: "Lyssna kritiskt",
        description: "AI påstår något om en låt – eleverna kontrollerar genom att lyssna och analysera."
      }
    ]
  },
  {
    dimensionId: "critical",
    stage: "Högstadiet (åk 7-9)",
    focus: "Avancerad verifiering: motivanalys, deepfakes och påverkan på opinion.",
    subjectActivities: [
      {
        subject: "Samhällskunskap",
        title: "Deepfake-labb",
        description: "Eleverna analyserar misstänkta klipp, använder checklistor och skriver verifieringsrapport."
      },
      {
        subject: "Religionskunskap",
        title: "Perspektivtest",
        description: "AI beskriver en ritual – eleverna granskar mot olika trosuppfattningar och identifierar bias."
      },
      {
        subject: "Teknik",
        title: "Promptrevision",
        description: "Eleverna manipulerar AI med olika prompts för att se hur narrativ kan styras."
      }
    ]
  },
  {
    dimensionId: "ethics",
    stage: "Lågstadiet (åk 1-3)",
    focus: "Grunda integritetstänk: dela säkert och visa digital omtanke.",
    subjectActivities: [
      {
        subject: "Idrott och hälsa",
        title: "Hälsodata – dela eller inte?",
        description: "Diskutera vad träningsappen samlar in, skapa ja/nej-kort för delning."
      },
      {
        subject: "Bild",
        title: "Samtyckessignaler",
        description: "Skapa ikoner som visar när foto/film får delas och när AI inte får användas."
      },
      {
        subject: "Svenska",
        title: "AI som vän",
        description: "Rollspela chattsituationer och diskutera hur man svarar när AI ber om personlig info."
      }
    ]
  },
  {
    dimensionId: "ethics",
    stage: "Mellanstadiet (åk 4-6)",
    focus: "Utveckla regler för rättvisa, transparens och hållbar AI-användning.",
    subjectActivities: [
      {
        subject: "Hem- och konsumentkunskap",
        title: "Smart recept eller reklam?",
        description: "Analysera AI-förslag på måltider och identifiera kommersiella avsikter och bias."
      },
      {
        subject: "Teknik",
        title: "Designa etiska regler",
        description: "Eleverna tar fram klassens AI-policy med fokus på säkerhet, inkludering och hållbarhet."
      },
      {
        subject: "Engelska",
        title: "Krediteringsträning",
        description: "Öva att ange AI-stöd i texter och hålla koll på upphovsrätt."
      }
    ]
  },
  {
    dimensionId: "ethics",
    stage: "Högstadiet (åk 7-9)",
    focus: "Analysera komplexa avvägningar: ansvar, integritet, bias och hållbarhet.",
    subjectActivities: [
      {
        subject: "Kemi",
        title: "Riskanalys i labbet",
        description: "AI föreslår laborationer – eleverna gör riskbedömning och dokumenterar besluten."
      },
      {
        subject: "Samhällskunskap",
        title: "AI i myndigheter",
        description: "Debatt om automatiserade beslut och mänskliga rättigheter med källor och case."
      },
      {
        subject: "Slöjd",
        title: "Hållbar design",
        description: "AI föreslår material, eleverna analyserar klimatpåverkan och väljer etiskt alternativ."
      }
    ]
  },
  {
    dimensionId: "agency",
    stage: "Lågstadiet (åk 1-3)",
    focus: "Synliggör vad människan gör bäst – träna att våga säga nej till AI-förslag.",
    subjectActivities: [
      {
        subject: "Musik",
        title: "AI eller vi?",
        description: "Jämför AI:s melodi med klassens egen, rösta på favoriten och motivera."
      },
      {
        subject: "Matematik",
        title: "Dubbelkontroll",
        description: "AI räknar, eleverna kontrollerar med konkret material och visar egna strategier."
      },
      {
        subject: "Idrott och hälsa",
        title: "Träningscoach",
        description: "AI ger tips, eleverna avgör vad som känns rimligt och säkert."
      }
    ]
  },
  {
    dimensionId: "agency",
    stage: "Mellanstadiet (åk 4-6)",
    focus: "Metakognition om AI-samarbete och mänsklig kreativitet.",
    subjectActivities: [
      {
        subject: "Svenska",
        title: "Två spår",
        description: "Skriv först utan AI, sedan med AI-stöd och jämför vad som blev bättre och varför."
      },
      {
        subject: "Teknik",
        title: "Människa + AI",
        description: "Skapa en produkt där vissa delar görs av AI och motivera hur rollerna delades."
      },
      {
        subject: "Biologi",
        title: "Hypotesduell",
        description: "Elevernas hypoteser ställs mot AI:s – diskutera styrkor och svagheter i båda."
      }
    ]
  },
  {
    dimensionId: "agency",
    stage: "Högstadiet (åk 7-9)",
    focus: "Fördjupa kognitiv autonomi och mänsklig särart i relation till avancerad AI.",
    subjectActivities: [
      {
        subject: "Religionskunskap",
        title: "AI och mening",
        description: "Diskutera existentiella frågor med AI, jämför med mänskliga resonemang och skriv reflektion."
      },
      {
        subject: "Fysik",
        title: "Simulering vs intuition",
        description: "Jämför AI-simulering med egen problemlösning och analysera när mänsklig bedömning behövs."
      },
      {
        subject: "Bild",
        title: "Skapa helt själv",
        description: "Utmaning: skapa ett konstverk utan AI-stöd och beskriva skillnaden mot AI-hjälp."
      }
    ]
  },
  {
    dimensionId: "society",
    stage: "Lågstadiet (åk 1-3)",
    focus: "Synliggör AI i vardagen och diskutera enkla konsekvenser.",
    subjectActivities: [
      {
        subject: "Samhällskunskap",
        title: "AI i vardagen",
        description: "Gör bildcollage över var klassen möter AI och prata om vem som bestämmer funktionerna."
      },
      {
        subject: "Geografi",
        title: "Resekompis",
        description: "AI föreslår resmål, eleverna funderar på klimatpåverkan och rättvisa."
      },
      {
        subject: "Hem- och konsumentkunskap",
        title: "Reklam eller råd?",
        description: "Analysera AI:s produkttips och diskutera vem som tjänar på dem."
      }
    ]
  },
  {
    dimensionId: "society",
    stage: "Mellanstadiet (åk 4-6)",
    focus: "Analysera hur AI påverkar arbete, demokrati och rättvisa.",
    subjectActivities: [
      {
        subject: "Samhällskunskap",
        title: "Algoritmisk makt",
        description: "Följ hur rekommendationer påverkar vad vi ser i sociala medier och skriv reportage."
      },
      {
        subject: "Matematik",
        title: "Ekonomiska effekter",
        description: "Beräkna hur automatisering kan påverka olika yrken och diskutera vilka som vinns/förloras."
      },
      {
        subject: "Svenska",
        title: "Debatt om AI i skolan",
        description: "Skriv argumenterande text om AI:s roll i skolan med referenser till forskning och etik."
      }
    ]
  },
  {
    dimensionId: "society",
    stage: "Högstadiet (åk 7-9)",
    focus: "Framtidsscenarier: demokrati, global makt och hållbar utveckling.",
    subjectActivities: [
      {
        subject: "Historia",
        title: "Teknikskiften då och nu",
        description: "Jämför AI med tidigare revolutioner och analysera vilka grupper som påverkas mest."
      },
      {
        subject: "Geografi",
        title: "AI och klimat",
        description: "Undersök AI-lösningar för klimatet och värdera deras hållbarhet och risker."
      },
      {
        subject: "Teknik",
        title: "Policyverkstad",
        description: "Utforma förslag till lokal AI-policy för skolan eller kommunen och presentera för beslutsfattare."
      }
    ]
  }
];

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
const sectionReferenceIds = navAnchorLinks
  .map(link => link.dataset.scrollTarget || link.getAttribute("href"))
  .concat(quickNavCards.map(card => card.dataset.scrollTarget))
  .filter(Boolean)
  .map(ref => ref.replace(/^#/, ""));
const trackedSectionIds = new Set(sectionReferenceIds);
const trackedSections = Array.from(document.querySelectorAll("section[id]"))
  .filter(section => trackedSectionIds.has(section.id));
let scrollSpyFrameId = null;
const aiDimensionControls = document.getElementById("aiDimensionControls");
const aiDimensionSummary = document.getElementById("aiDimensionSummary");
const aiTeacherList = document.getElementById("aiTeacherList");
const aiStudentList = document.getElementById("aiStudentList");
const aiKeyMessages = document.getElementById("aiKeyMessages");
const aiConceptList = document.getElementById("aiConceptList");
const aiMetaQuestions = document.getElementById("aiMetaQuestions");
const aiStageGrid = document.getElementById("aiStageGrid");
let tagCheckboxes = [];
let activeProgressionArea = Object.keys(PROGRESSION_MAP)[0];
let activeAIDimension = AI_DIMENSIONS.length ? AI_DIMENSIONS[0].id : null;

function populateSubjectOptions() {
  const subjects = Array.from(new Set(competencyData.map(item => item.subject))).sort();
  subjects.forEach(subject => {
    const option = document.createElement("option");
    option.value = subject;
    option.textContent = subject;
    subjectSelect.appendChild(option);
  });
}

function renderTagFilters() {
  if (!tagFiltersContainer) {
    return;
  }

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
  const selected = gradeCheckboxes.filter(box => box.checked).map(box => box.value);
  return selected.length ? selected : gradeCheckboxes.map(box => box.value);
}

function getSelectedTags() {
  const selected = tagCheckboxes.filter(box => box.checked).map(box => box.value);
  return selected.length ? selected : TAGS;
}

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

function filterData() {
  const selectedSubject = subjectSelect.value;
  const selectedGrades = getSelectedGrades();
  const selectedTags = getSelectedTags();
  const searchTerm = searchInput.value.trim();

  return competencyData.filter(entry => {
    const subjectMatch = selectedSubject === "alla" || entry.subject === selectedSubject;
    const gradeMatch = selectedGrades.includes(entry.grade);
    const tagMatch = entry.tags.some(tag => selectedTags.includes(tag));
    const searchMatch = matchesSearch(entry, searchTerm);
    return subjectMatch && gradeMatch && tagMatch && searchMatch;
  });
}

function renderResults() {
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

  resultsGrid.innerHTML = filtered
    .map(entry => {
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
    })
    .join("");
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

function renderProgressionControls() {
  if (!progressionControls) {
    return;
  }

  progressionControls.innerHTML = "";

  Object.keys(PROGRESSION_MAP).forEach(area => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "pill-button" + (area === activeProgressionArea ? " is-active" : "");
    button.textContent = area;
    button.title = PROGRESSION_MAP[area]?.summary || "";
    button.addEventListener("click", () => {
      if (activeProgressionArea === area) {
        return;
      }
      activeProgressionArea = area;
      renderProgressionControls();
      renderProgressionGrid();
    });
    progressionControls.appendChild(button);
  });
}

function renderProgressionGrid() {
  if (!progressionGrid || !progressionSummary) {
    return;
  }

  const activeArea = PROGRESSION_MAP[activeProgressionArea];
  if (!activeArea) {
    progressionGrid.innerHTML = "";
    progressionSummary.textContent = "";
    return;
  }

  progressionSummary.textContent = activeArea.summary;

  const cards = GRADE_ORDER.map(stage => {
    const stageData = activeArea.stages[stage];
    if (!stageData) {
      return "";
    }

    const skills = (stageData.keySkills || []).map(item => `<li>${item}</li>`).join("");
    const ai = (stageData.aiAngles || []).map(item => `<li>${item}</li>`).join("");
    const questions = (stageData.guidingQuestions || []).map(item => `<li>${item}</li>`).join("");
    const stageClass = STAGE_CLASS_MAP[stage] || "stage-general";

    return `
      <article class="progression-card ${stageClass}">
        <header>
          <span class="progression-stage">${stage}</span>
          <p class="progression-focus">${stageData.focus || ""}</p>
        </header>
        ${skills ? `<div><strong>Nyckelförmågor</strong><ul>${skills}</ul></div>` : ""}
        ${ai ? `<div><strong>AI-förstärkning</strong><ul>${ai}</ul></div>` : ""}
        ${questions ? `<div><strong>Frågor att ställa</strong><ul>${questions}</ul></div>` : ""}
        ${stageData.checkpoint ? `<div class="annotation"><strong>Checkpunkt:</strong> ${stageData.checkpoint}</div>` : ""}
      </article>
    `;
  }).join("");

  progressionGrid.innerHTML = cards || '<p class="annotation">Ingen progression är definierad ännu.</p>';
}

function renderResources() {
  if (!resourceAccordion) {
    return;
  }

  const cards = RESOURCE_GROUPS.map((group, index) => {
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

  resourceAccordion.innerHTML = cards || '<p class="annotation">Komplettera gärna med era lokala resurser och policyer.</p>';
}

function resetAllFilters() {
  subjectSelect.value = "alla";
  gradeCheckboxes.forEach(box => {
    box.checked = true;
  });
  tagCheckboxes.forEach(box => {
    box.checked = true;
  });
  if (searchInput) {
    searchInput.value = "";
  }
  renderResults();
  updateScrollSpy();
}


function renderAIDimensionControls() {
  if (!aiDimensionControls || !AI_DIMENSIONS.length) {
    return;
  }

  aiDimensionControls.innerHTML = AI_DIMENSIONS.map(dimension => {
    const isActive = dimension.id === activeAIDimension;
    return `<button type="button" data-ai-dimension="${dimension.id}" class="${isActive ? "is-active" : ""}">${dimension.name}</button>`;
  }).join("");

  Array.from(aiDimensionControls.querySelectorAll("button[data-ai-dimension]"))
    .forEach(button => {
      button.addEventListener("click", () => {
        const dimensionId = button.getAttribute("data-ai-dimension");
        if (dimensionId === activeAIDimension) {
          return;
        }
        activeAIDimension = dimensionId;
        renderAIDimensionControls();
        renderAIDimensionContent();
        renderAIStageGrid();
      });
    });
}

function renderAIDimensionContent() {
  if (!activeAIDimension || !aiDimensionSummary) {
    return;
  }

  const dimension = AI_DIMENSIONS.find(item => item.id === activeAIDimension) || AI_DIMENSIONS[0];
  if (!dimension) {
    return;
  }

  aiDimensionSummary.textContent = dimension.summary || "";

  if (aiTeacherList) {
    aiTeacherList.innerHTML = (dimension.teacherFocus || []).map(item => `<li>${item}</li>`).join("");
  }

  if (aiStudentList) {
    aiStudentList.innerHTML = (dimension.studentFocus || []).map(item => `<li>${item}</li>`).join("");
  }

  if (aiKeyMessages) {
    aiKeyMessages.innerHTML = (dimension.keyMessages || []).map(item => `<li>${item}</li>`).join("");
  }

  if (aiConceptList) {
    aiConceptList.innerHTML = (dimension.concepts || []).map(concept => `<span>${concept}</span>`).join("");
  }

  if (aiMetaQuestions) {
    aiMetaQuestions.innerHTML = (dimension.metaQuestions || []).map(item => `<li>${item}</li>`).join("");
  }
}

function renderAIStageGrid() {
  if (!aiStageGrid) {
    return;
  }

  const activeEntries = AI_STAGE_MAPPINGS.filter(entry => entry.dimensionId === activeAIDimension);

  const columns = GRADE_ORDER.map(stage => {
    const stageEntry = activeEntries.find(entry => entry.stage === stage);
    const stageClass = STAGE_CLASS_MAP[stage] || "stage-general";

    if (!stageEntry) {
      return `
        <article class="ai-stage-column ${stageClass}">
          <p class="ai-stage-header">${stage}</p>
          <p class="ai-stage-focus">Planera aktivitet</p>
          <p class="annotation">Lägg till exempel som matchar detta fokusområde.</p>
        </article>
      `;
    }

    const activities = (stageEntry.subjectActivities || []).map(activity => `
      <li class="ai-stage-card">
        <div class="ai-subject-badge"><span>${activity.subject}</span></div>
        <h4>${activity.title}</h4>
        <p>${activity.description}</p>
      </li>
    `).join("");

    return `
      <article class="ai-stage-column ${stageClass}">
        <p class="ai-stage-header">${stage}</p>
        <p class="ai-stage-focus">${stageEntry.focus || ""}</p>
        <ul class="ai-stage-list">
          ${activities}
        </ul>
      </article>
    `;
  }).join("");

  aiStageGrid.innerHTML = columns;
}

function initAISection() {
  if (!aiDimensionControls || !AI_DIMENSIONS.length) {
    return;
  }

  if (!activeAIDimension) {
    activeAIDimension = AI_DIMENSIONS[0].id;
  }

  renderAIDimensionControls();
  renderAIDimensionContent();
  renderAIStageGrid();
}

function addEventListeners() {
  if (subjectSelect) {
    subjectSelect.addEventListener("change", renderResults);
  }

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      window.clearTimeout(searchInput._debounce);
      searchInput._debounce = window.setTimeout(renderResults, 150);
    });
  }

  gradeCheckboxes.forEach(box => box.addEventListener("change", renderResults));
  tagCheckboxes.forEach(box => box.addEventListener("change", renderResults));

  if (resetFiltersButton) {
    resetFiltersButton.addEventListener("click", resetAllFilters);
  }

  scrollButtons.forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault();
      const targetSelector = button.dataset.scrollTarget;
      if (!targetSelector) {
        return;
      }
      const target = document.querySelector(targetSelector);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSectionHighlight(target.id);
        if (target.id && window.history && window.history.replaceState) {
          window.history.replaceState(null, "", `#${target.id}`);
        }
      }
      if (button instanceof HTMLElement) {
        button.blur();
      }
      if (navLinks) {
        navLinks.classList.remove("is-open");
      }
      if (navToggle) {
        navToggle.setAttribute("aria-expanded", "false");
      }
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

function init() {
  populateSubjectOptions();
  renderTagFilters();
  renderProgressionControls();
  renderProgressionGrid();
  renderResources();
  initAISection();
  addEventListeners();
  renderResults();
}

init();













































