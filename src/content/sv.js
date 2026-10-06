// Länkar i texter skrivs [etikett](page:<sidnyckel>); se PAGES i src/routes.js.
// Måste ha exakt samma nycklar som en.js. `npm run build` kontrollerar det.

const sv = {
  meta: {
    home: {
      title: "Agné Studio | Genomtänkta hemsidor för småföretag",
      description:
        "Genomtänkta hemsidor för småföretag. Agné Studio designar och bygger hemsidor som speglar kvaliteten bakom ditt företag.",
    },
    pricing: {
      title: "Priser | Agné Studio",
      description:
        "Så fungerar prissättningen hos Agné Studio, vad som ingår i varje projekt och hur processen går till från första samtalet till lansering.",
    },
    faq: {
      title: "Vanliga frågor | Agné Studio",
      description:
        "Svar på vanliga frågor om tjänster, priser, projektprocessen och vad som händer efter lansering.",
    },
    contact: {
      title: "Kontakta mig | Agné Studio",
      description:
        "Har du en fråga eller vill prata om en idé? Skicka ett meddelande till Agné Studio. Jag försöker svara inom 1–2 arbetsdagar.",
    },
    project: {
      title: "Starta ett projekt | Agné Studio",
      description:
        "Berätta för Agné Studio om ditt företag och vad du behöver av din hemsida. Du får svar inom 1–2 arbetsdagar.",
    },
  },

  nav: {
    ariaLabel: "Huvudmeny",
    // Första menylänken. startTarget "home" länkar till startsidan, "gallery" rullar
    // till galleriet (#work). Engelskan säger än så länge "Work" och rullar till
    // galleriet; se kommentaren i en.js.
    start: "Startsida",
    startTarget: "home",
    pricing: "Priser",
    faq: "FAQ",
    contact: "Kontakt",
    startProject: "Starta ett projekt",
    languageLabel: "Språk",
  },

  finalCta: {
    title: "Låt oss bygga en hemsida som speglar ditt företag.",
    copy: "Berätta vad du behöver, var din nuvarande hemsida brister eller bara vad du funderar på. Därifrån tar vi det vidare.",
    button: "Starta ett projekt",
  },

  footer: {
    ariaLabel: "Sidfot",
    credit: "Designad och utvecklad av Philip Agné.",
  },

  form: {
    required: "obligatoriskt",
    optional: "valfritt",
    requiredNote: "Obligatoriska fält",
    sending: "Skickar...",
    honeypotLabel: "Företag",
    nameLabel: "Namn",
    emailLabel: "E-post",
    errors: {
      name: "Ange ditt namn.",
      email: "Ange din e-postadress.",
      emailInvalid: "Ange en giltig e-postadress.",
    },
  },

  home: {
    heroTitle: "Genomtänkta hemsidor för småföretag.",
    heroText:
      "Din hemsida är ofta det första intrycket människor får av ditt företag. Den ska spegla kvaliteten bakom företaget.",
    workLabel: "Arbetsgalleri",
    workNewTab: "(öppnas i ny flik)",
    // Ett kort per post. `image` är ett filnamn i assets/work/; `url` och `image`
    // måste vara identiska i en.js (byggets kontroll säkerställer det).
    workItems: [
      {
        name: "Hollowbrook Outdoor Living",
        category: "Konceptprojekt för ett fiktivt företag",
        alt: "Förhandsvisning av Hollowbrook Outdoor Living, ett konceptprojekt",
        url: "https://hollowbrook-website.philipv-agne.workers.dev/",
        image: "hollowbrook-preview.jpg",
      },
    ],
    audiencesTitle: "Vem jag arbetar med",
    audiences: [
      {
        title: "Nya företag",
        description: "Ett starkt första intryck från första dagen.",
      },
      {
        title: "Växande företag",
        description:
          "En hemsida som hänger med i din tillväxt och visar vart du är på väg.",
      },
      {
        title: "Företag som vill förnya sin hemsida",
        description:
          "När din närvaro på nätet inte längre speglar kvaliteten på det du gör.",
      },
    ],
    whyTitle: "Varför Agné Studio finns",
    whyStatement:
      "Alla företag förtjänar en hemsida som speglar kvaliteten bakom dem.",
    whyBody: [
      "En hemsida är ofta den första kontakten människor har med ditt företag. Den ska förklara vem du är, vad du gör och varför det spelar roll.",
      "Agné Studio tror på tydlighet, genomtänkt design och hemsidor som är lätta att sköta och som kan växa med dig.",
      "Målet är enkelt: en närvaro på nätet som äntligen känns som en sann bild av ditt företag.",
    ],
  },

  pricing: {
    title: "Priser",
    intro:
      "Varje projekt är olika, men processen ska inte kännas osäker. Så här resonerar jag kring priser och det här kan du förvänta dig.",
    principlesTitle: "Så fungerar prissättningen",
    principles: [
      {
        title: "Fast projektpris",
        description: "Du vet totalkostnaden innan något arbete påbörjas.",
      },
      {
        title: "Utifrån omfattning",
        description:
          "Den slutliga offerten styrs av hemsidans storlek, innehåll och funktioner samt projektets komplexitet.",
      },
      {
        title: "Inga överraskningar",
        description:
          "Om omfattningen ändras under projektet pratar vi om det innan något extra arbete påbörjas.",
      },
    ],
    servicesTitle: "Tjänster och priser",
    servicesIntro:
      "Varje projekt får en offert som är anpassad efter det, men de här exemplen ger en bra utgångspunkt.",
    servicesLabel: "Typiska projekt",
    // De två första posterna används som prisvärden i svaret på "Vad kostar en
    // hemsida?" (se buildPriceTokens i App.jsx); behåll ordningen.
    // Beloppen har hårda mellanrum ( ) så att de inte radbryts.
    examples: [
      {
        name: "Landningssida",
        amount: "3 495 kr",
        launchAmount: "1 495 kr",
      },
      {
        name: "Företagswebbplats",
        amount: "6 995 kr",
        launchAmount: "3 495 kr",
      },
      { name: "Större anpassad webbplats", price: "Offert" },
    ],
    fromTemplate: "Från {amount}",
    launchLine: "Lanseringspris: {amount}",
    launchNote:
      "Lanseringspriset gäller de första tre kunderna, mot ett kort omdöme och tillåtelse att visa det färdiga arbetet. Alla priser är exklusive moms.",
    viewIncluded: "Se vad som ingår",
    priceNote:
      "Startpriser visas i kronor exklusive moms. Ditt slutliga projektpris bekräftas innan arbetet påbörjas.",
    viewAddOns: "+ Se tillval",
    includesTitle: "Det här ingår i varje projekt",
    includesIntro:
      "Oavsett storlek börjar varje projekt med samma grund: att förstå ditt företag, designa med ett syfte och bygga en hemsida som är redo för lansering.",
    includes: [
      {
        title: "Kartläggning och planering",
        description:
          "Att förstå ditt företag, dina mål, din målgrupp och vad hemsidan behöver åstadkomma.",
      },
      {
        title: "Skräddarsydd design",
        description:
          "En genomtänkt visuell riktning som skapas för just ditt företag i stället för att utgå från en generisk mall.",
      },
      {
        title: "Responsiv utveckling",
        description: "En hemsida som fungerar på dator, surfplatta och mobil.",
      },
      {
        title: "Prestanda och tillgänglighet",
        description:
          "Fokus på laddningstider, användbarhet, semantisk struktur och etablerade riktlinjer för tillgänglighet.",
      },
      {
        title: "Grundläggande sökmotoroptimering",
        description:
          "En ren sidstruktur, metadata och semantisk HTML som hjälper sökmotorer att förstå hemsidan.",
      },
      {
        title: "Hjälp vid lansering",
        description:
          "Hjälp att publicera den färdiga hemsidan hos det webbhotell kunden väljer och att koppla en befintlig domän när det är aktuellt.",
      },
      {
        title: "Dokumentation och överlämning",
        description:
          "Tydlig vägledning om hur den färdiga hemsidan fungerar och hur överenskommet innehåll kan hanteras efter lansering.",
      },
    ],
    processTitle: "Processen",
    processIntro:
      "Tidplanen beror på projektets omfattning, men varje hemsida följer samma tydliga ordning från första samtalet till lansering.",
    process: [
      {
        title: "Kartläggning",
        description:
          "Att förstå verksamheten, målen, innehållet och projektets krav.",
      },
      {
        title: "Design",
        description:
          "Att ta fram den visuella riktningen, layouten och användarupplevelsen.",
      },
      {
        title: "Utveckling",
        description: "Att bygga den godkända designen till en responsiv hemsida.",
      },
      {
        title: "Granskning",
        description:
          "Att testa, finslipa och förbereda hemsidan för publicering.",
      },
      {
        title: "Lansering",
        description:
          "Att publicera den färdiga hemsidan och genomföra den överenskomna överlämningen.",
      },
    ],
    policiesTitle: "Projektvillkor",
    policies: [
      {
        title: "Förskott",
        summary: "30 % för att börja",
        description:
          "Ett förskott på 30 % säkrar projektet och gör att arbetet kan börja. Resterande 70 % betalas innan den färdiga hemsidan lanseras eller överlämnas.",
      },
      {
        title: "Ändringsomgångar",
        summary: "Tydliga ramar för ändringar",
        description:
          "Varje standardprojekt omfattar två strukturerade ändringsomgångar för designen och en sista finslipningsomgång före lansering. Fler ändringar eller ändringar utanför den överenskomna omfattningen kan diskuteras och offereras separat.",
      },
    ],
    faqTitle: "Vanliga frågor om priser",
    faq: [
      {
        question: "Är priserna på den här sidan fasta?",
        answer:
          "Startpriserna är en utgångspunkt. Du får alltid ett fast pris i din offert innan arbetet börjar.",
      },
      {
        question: "Hur ser betalningsplanen ut?",
        answer:
          "Ett förskott på 30 % krävs för att börja. Resterande belopp betalas innan den färdiga hemsidan lanseras eller överlämnas.",
      },
      {
        question: "Vad händer om omfattningen ändras?",
        answer:
          "Allt arbete utanför den överenskomna omfattningen diskuteras och godkänns innan extra arbete påbörjas eller extra kostnader läggs till.",
      },
      {
        question: "Kan jag få underhåll eller löpande support?",
        answer:
          "Ja. Löpande support, underhåll och framtida uppdateringar kan diskuteras separat och ingår inte automatiskt i det fasta projektpriset.",
      },
      {
        question: "Kan du arbeta med min befintliga domän och mitt webbhotell?",
        answer:
          "Ja, när det är tekniskt lämpligt. Jag kan hjälpa till att publicera hemsidan hos det webbhotell du väljer och koppla en befintlig domän. Kostnader för webbhotell, domänköp och tredjepartsabonnemang bekostas av kunden.",
      },
    ],
    modalClose: "Stäng",
    modals: {
      "landing-page": {
        title: "Landningssida",
        introduction:
          "En fokuserad hemsida på en enda sida som presenterar ett företag, en tjänst eller ett erbjudande och leder besökaren mot en tydlig handling.",
        primaryHeading: "Ingår som standard",
        primaryItems: [
          "En responsiv marknadsföringssida",
          "Skräddarsydd visuell design",
          "Cirka 5–7 innehållssektioner",
          "Ett tydligt huvudmål med sidan",
          "Enkelt kontaktformulär eller länk till extern tjänst",
          "Anpassning för mobil och surfplatta",
          "Grundläggande sökmotoroptimering",
          "Prestandaoptimering",
          "Domänkoppling och hjälp vid lansering",
          "Två strukturerade ändringsomgångar för designen",
          "En sista finslipningsomgång före lansering",
        ],
        secondaryHeading: "Finns som tillval",
        secondaryItems: [
          "Fler sidor",
          "Avancerade animationer",
          "Bokningsfunktion",
          "Blogg eller CMS-funktion",
          "E-handel",
          "Integrationer med tredjepartstjänster",
          "Hjälp med texter",
          "Hjälp med varumärke",
          "Webbhotell och löpande underhåll",
        ],
        note: "Extra funktioner offereras separat utifrån projektets behov.",
      },
      "business-website": {
        title: "Företagswebbplats",
        introduction:
          "En anpassad hemsida med flera sidor för företag som behöver en bredare närvaro på nätet, med tydligt åtskild information, tjänster och kontaktvägar.",
        primaryHeading: "Ingår som standard",
        primaryItems: [
          "Upp till fem huvudsidor",
          "Skräddarsydd visuell design",
          "Responsiv utveckling",
          "Navigering och sidfot",
          "Enkelt kontaktformulär",
          "Anpassning för mobil och surfplatta",
          "Grundläggande sökmotoroptimering",
          "Prestandaoptimering",
          "Domänkoppling och hjälp vid lansering",
          "Två strukturerade ändringsomgångar för designen",
          "En sista finslipningsomgång före lansering",
        ],
        secondaryHeading: "Finns som tillval",
        secondaryItems: [
          "Fler sidor",
          "Avancerade animationer",
          "Bokningsfunktion",
          "Blogg eller CMS-funktion",
          "E-handel",
          "Integrationer med tredjepartstjänster",
          "Hjälp med texter",
          "Hjälp med varumärke",
          "Webbhotell och löpande underhåll",
        ],
        note: "Extra funktioner offereras separat utifrån projektets behov.",
      },
      "optional-add-ons": {
        title: "Tillval",
        introduction:
          "Varje projekt kan utökas med extra funktioner när standardomfattningen inte räcker.",
        primaryHeading: "Tillval",
        primaryItems: [
          "Fler sidor",
          "Avancerade animationer och interaktioner",
          "Blogg eller CMS-funktion",
          "Bokningssystem",
          "E-handel",
          "Anpassade formulär",
          "Integrationer med tredjepartstjänster",
          "Stöd för flera språk",
          "Hjälp med texter",
          "Hjälp med varumärke",
          "Webbhotell",
          "Löpande underhåll",
        ],
        note: "Tillval offereras separat utifrån projektets komplexitet och krav.",
      },
    },
  },

  faq: {
    title: "Vanliga frågor",
    intro:
      "Svar på vanliga frågor om tjänster, priser, projektprocessen och vad som händer efter lansering.",
    listLabel: "Vanliga frågor",
    items: [
      {
        question: "Vilka typer av hemsidor bygger du?",
        answer:
          "Jag bygger fokuserade landningssidor, företagswebbplatser med flera sidor och större anpassade webbplatser. Varje projekt anpassas efter företagets mål, innehåll och krav i stället för att byggas utifrån en fast mall.",
      },
      {
        question: "Vad kostar en hemsida?",
        answer:
          "Landningssidor börjar för närvarande från {landingAmount} och företagswebbplatser från {businessAmount}, exklusive moms.{launchSentence} Större eller mer komplexa hemsidor får en anpassad offert utifrån omfattning och krav. Aktuella startpriser hittar du på [sidan Priser](page:pricing).",
      },
      {
        question: "Hur lång tid tar ett projekt?",
        answer:
          "Tidplanen varierar med omfattning, önskade funktioner och hur snabbt innehåll och återkoppling kommer in. Innan vi börjar kommer vi överens om en realistisk tidplan, så att du alltid vet vad du kan förvänta dig under projektet.",
      },
      {
        question: "Vad ingår i ett standardprojekt?",
        answer:
          "Standardprojekt omfattar egen design, responsiv utveckling, grundläggande sökmotorinställningar, kontaktformulär vid behov, testning och stöd under lanseringen. Exakt vad som ingår beror på vald tjänst och överenskommen omfattning. Mer information finns på [sidan Priser](page:pricing).",
      },
      {
        question: "Hur många ändringsomgångar ingår?",
        answer:
          "Standardprojekt omfattar två strukturerade ändringsomgångar för designen och en sista finslipningsomgång. Fler ändringar eller arbete utanför den överenskomna omfattningen kan offereras separat.",
      },
      {
        question: "Behöver jag leverera texter och bilder?",
        answer:
          "Kunden levererar normalt sina slutliga texter, bilder, varumärkesmaterial och eventuell nödvändig juridisk information. Hjälp med texter, varumärke och andra innehållstjänster kan diskuteras som tillval.",
      },
      {
        question: "Kan du göra om en befintlig hemsida?",
        answer:
          "Ja. Befintliga hemsidor kan göras om när projektet passar. Den nuvarande hemsidan, innehållet, den tekniska uppsättningen och målen gås igenom innan omfattningen bekräftas.",
      },
      {
        question: "Erbjuder du webbhotell och underhåll?",
        answer:
          "Webbhotell och löpande underhåll kan ingå som tillvalstjänster. Hur det läggs upp beror på hemsidan och hur mycket löpande stöd som behövs.",
      },
      {
        question: "Vad händer efter lanseringen?",
        answer:
          "Jag ser till att hemsidan lanseras korrekt och att de överenskomna sidorna och funktionerna fungerar som tänkt. Löpande webbhotell, underhåll och framtida förbättringar kan diskuteras separat.",
      },
      {
        question: "Hur kommer vi igång?",
        answer:
          "Du börjar med att fylla i formuläret [Starta ett projekt](page:project) med en kort beskrivning av ditt företag, dina mål och dina behov. Jag går igenom uppgifterna och återkommer med nästa steg.",
      },
    ],
    // Läggs till i prissvaret bara när lanseringserbjudandet är aktivt.
    costLaunchSentence:
      "De första tre kunderna får lanseringspriset {landingLaunch} för en landningssida och {businessLaunch} för en företagswebbplats.",
    ctaTitle: "Har du fler frågor?",
    ctaCopy:
      "Varje projekt är olika. Hittar du inte svaret du söker är du välkommen att höra av dig och berätta lite om vad du planerar.",
    ctaButton: "Kontakta mig",
  },

  contact: {
    title: "Kontakta mig",
    intro:
      "Har du en fråga, vill du prata om en idé eller behöver du bara lite mer information? Skicka ett meddelande så återkommer jag så snart jag kan.",
    responseLabel: "Svarstid",
    responseText: "Jag försöker svara på alla förfrågningar inom 1–2 arbetsdagar.",
    projectLabel: "Redo att prata om en hemsida?",
    projectText:
      "För en mer detaljerad projektförfrågan, använd formuläret [Starta ett projekt](page:project).",
    form: {
      messageLabel: "Meddelande",
      submit: "Skicka meddelande",
      privacy: "Dina uppgifter används bara för att svara på din förfrågan.",
      errors: {
        message: "Skriv ett kort meddelande.",
        submit: "Något gick fel när meddelandet skulle skickas. Försök igen.",
      },
      success: {
        title: "Meddelandet är skickat",
        thanks: "Tack för att du hör av dig.",
        received:
          "Jag har tagit emot ditt meddelande och återkommer så snart jag kan.",
        reset: "Skicka ett nytt meddelande",
      },
    },
  },

  project: {
    title: "Starta ett projekt",
    intro:
      "Berätta lite om ditt företag, vad du behöver och vad du vill att hemsidan ska uppnå. Jag går igenom uppgifterna och återkommer med nästa steg.",
    nextLabel: "Vad händer sedan?",
    nextText:
      "Jag går igenom din förfrågan och svarar inom 1–2 arbetsdagar. Därefter kan vi boka ett samtal och diskutera omfattningen mer i detalj.",
    notReadyLabel: "Inte redo att börja?",
    notReadyText:
      "För allmänna frågor eller mindre förfrågningar, använd [kontaktsidan](page:contact).",
    form: {
      businessLabel: "Företag eller organisation",
      websiteLabel: "Befintlig hemsida",
      projectTypeLabel: "Typ av projekt",
      timelineLabel: "Önskad tidplan",
      detailsLabel: "Berätta om projektet",
      detailsSupport:
        "Vad gör ditt företag, vilken sorts hemsida behöver du och vad vill du att den ska uppnå?",
      projectTypes: {
        placeholder: "Välj typ av projekt",
        options: {
          "landing-page": "Landningssida",
          "business-website": "Företagswebbplats",
          "website-redesign": "Ny design av befintlig hemsida",
          "something-else": "Något annat",
        },
      },
      timelines: {
        placeholder: "Välj tidplan",
        options: {
          "as-soon-as-possible": "Så snart som möjligt",
          "within-2-4-weeks": "Inom 2–4 veckor",
          "within-1-2-months": "Inom 1–2 månader",
          "within-3-4-months": "Inom 3–4 månader",
          "flexible-not-sure-yet": "Flexibelt / vet inte än",
        },
      },
      submit: "Skicka projektförfrågan",
      privacy:
        "Dina uppgifter används bara för att granska och svara på din förfrågan.",
      errors: {
        website: "Ange en giltig webbadress.",
        projectType: "Välj en typ av projekt.",
        timeline: "Välj en önskad tidplan.",
        details: "Berätta lite om projektet.",
        submit:
          "Det gick inte att skicka din förfrågan just nu. Försök igen om en stund.",
      },
      success: {
        title: "Förfrågan är skickad",
        thanks: "Tack för att du berättade om ditt projekt.",
        received:
          "Jag har tagit emot din förfrågan och går igenom uppgifterna innan jag återkommer inom 1–2 arbetsdagar.",
        reset: "Skicka en ny förfrågan",
      },
    },
  },
};

export default sv;
