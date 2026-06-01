"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Car, Flame, Heart, Leaf, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="largeSmallSizeMediumTitles"
        background="noise"
        cardStyle="layered-gradient"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Casa",
          id: "#hero",
        },
        {
          name: "Chi Siamo",
          id: "#about",
        },
        {
          name: "Menu",
          id: "#products",
        },
        {
          name: "Testimonianze",
          id: "#testimonials",
        },
        {
          name: "Contatti",
          id: "#contact",
        },
      ]}
      logoSrc="http://img.b2bpic.net/free-photo/monochrome-view-colosseum-world-heritage-day_23-2151360197.jpg"
      logoAlt="Logo Cocco Pizzeria"
      brandName="Cocco Pizzeria"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "radial-gradient",
      }}
      imagePosition="right"
      title="Pizza Romana Autentica, Semplicemente Indimenticabile"
      description="Cocco offre pizza a crosta sottile, leggera e divinamente artigianale utilizzando tecniche tradizionali romane. Ordina online per mangiare sul posto o da asporto—fresca, deliziosa, sempre pronta."
      buttons={[
        {
          text: "Ordina Ora",
          href: "#products",
        },
        {
          text: "Vedi il Menu Completo",
          href: "#products",
        },
      ]}
      buttonAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/high-angle-pizza-restaurant-table_23-2148305651.jpg"
      imageAlt="Chef che inforna la pizza nel forno a legna di Cocco Pizzeria"
      mediaAnimation="opacity"
      fixedMediaHeight={true}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-girl-has-delicious-pizza-after-hard-working-day_273609-20541.jpg",
          alt: "Donna felice che mangia pizza",
        },
        {
          src: "http://img.b2bpic.net/free-photo/crazy-dealer-happy-expression_1194-2231.jpg",
          alt: "Uomo sorridente in pizzeria",
        },
        {
          src: "http://img.b2bpic.net/free-photo/couple-eating-slice-pizza_23-2147890407.jpg",
          alt: "Famiglia che si gode la pizza",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-happy-girl-with-slice-pizza_1163-2265.jpg",
          alt: "Ragazza che mangia una fetta di pizza",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-couple-with-delicious-pizza_23-2150873866.jpg",
          alt: "Coppia felice in pizzeria",
        },
      ]}
      avatarText="Più di 10.000 clienti soddisfatti!"
      marqueeItems={[
        {
          type: "text-icon",
          text: "Qualità Superiore",
          icon: Sparkles,
        },
        {
          type: "text-icon",
          text: "Forno a Legna",
          icon: Flame,
        },
        {
          type: "text-icon",
          text: "Ingredienti Freschi",
          icon: Leaf,
        },
        {
          type: "text-icon",
          text: "Consegna Veloce",
          icon: Car,
        },
        {
          type: "text-icon",
          text: "Sapori Romani",
          icon: Heart,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="La Tradizione Romana nel Cuore di Ogni Pizza"
      description={[
        "Benvenuti da Cocco, una pizzeria romana dove la passione per la vera pizza incontra l'antica arte della preparazione. Ogni nostra pizza è una celebrazione dell'autenticità, realizzata con ingredienti selezionati e seguendo meticolosamente le tecniche tradizionali romane.",
        "Crediamo che la pizza debba essere un'esperienza: per questo, il nostro impasto a lunga lievitazione è leggero e digeribile, mentre la crosta sottile e croccante racchiude un cuore di sapori genuini. Il risultato? Una pizza indimenticabile, che vi trasporterà direttamente nelle vie di Roma a ogni morso.",
      ]}
      buttons={[
        {
          text: "La Nostra Storia",
          href: "#",
        },
      ]}
      buttonAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "margherita",
          name: "Margherita",
          price: "€10",
          variant: "Pomodoro, Mozzarella, Basilico",
          imageSrc: "http://img.b2bpic.net/free-photo/homemade-pizza-food-photography-recipe-idea_53876-25016.jpg",
          imageAlt: "Pizza Margherita",
        },
        {
          id: "diavola",
          name: "Diavola",
          price: "€12",
          variant: "Pomodoro, Mozzarella, Salame Piccante",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-neapolitan-pizza-board_78826-3284.jpg",
          imageAlt: "Pizza Diavola",
        },
        {
          id: "capricciosa",
          name: "Capricciosa",
          price: "€13",
          variant: "Pomodoro, Mozzarella, Funghi, Prosciutto, Carciofi, Olive",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-uncooked-pizza-pan-with-ingredients_23-2148361350.jpg",
          imageAlt: "Pizza Capricciosa",
        },
        {
          id: "quattro-formaggi",
          name: "Quattro Formaggi",
          price: "€13",
          variant: "Mozzarella, Gorgonzola, Parmigiano, Scamorza",
          imageSrc: "http://img.b2bpic.net/free-photo/vegetarian-pizza_1388-654.jpg",
          imageAlt: "Pizza Quattro Formaggi",
        },
        {
          id: "vegetariana",
          name: "Vegetariana",
          price: "€11",
          variant: "Pomodoro, Mozzarella, Verdure di Stagione",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-tasty-pizza-wooden-background_23-2148601578.jpg",
          imageAlt: "Pizza Vegetariana",
        },
        {
          id: "boscaiola",
          name: "Boscaiola",
          price: "€12",
          variant: "Mozzarella, Funghi Porcini, Salsiccia",
          imageSrc: "http://img.b2bpic.net/free-photo/pizza-table-purple-color_58702-1315.jpg",
          imageAlt: "Pizza Boscaiola",
        },
      ]}
      title="Esplora il Nostro Menu di Pizze Autentiche"
      description="Dal classico alla creazione speciale, ogni pizza è un capolavoro di sapore e tradizione romana."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardNine
      animationType="opacity"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "classiche",
          title: "Pizze Classiche",
          price: "Da €10",
          period: "a pizza",
          features: [
            "Le ricette della tradizione romana",
            "Ingredienti DOP selezionati",
            "Perfette per ogni palato",
          ],
          button: {
            text: "Vedi i Dettagli",
            href: "#products",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/homemade-sliced-pizza-brown-plate-black-surface_114579-89031.jpg",
          imageAlt: "Varietà di pizze classiche",
        },
        {
          id: "speciali",
          title: "Pizze Speciali",
          price: "Da €14",
          period: "a pizza",
          features: [
            "Creazioni esclusive dello Chef",
            "Ingredienti ricercati e stagionali",
            "Un'esplosione di sapori unici",
          ],
          button: {
            text: "Scopri le Speciali",
            href: "#products",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-delicious-mushroom-pizza_23-2148601589.jpg",
          imageAlt: "Pizze speciali gourmet",
        },
        {
          id: "bevande",
          title: "Bevande & Contorni",
          price: "Da €3",
          period: "a articolo",
          features: [
            "Acqua, Birre artigianali, Vini locali",
            "Bibite analcoliche",
            "Contorni freschi e sfiziosi",
          ],
          button: {
            text: "Visualizza l'Offerta",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/transparent-water-bottle-indoors_23-2151049055.jpg",
          imageAlt: "Selezione di bevande e contorni",
        },
      ]}
      title="Scegli la Tua Esperienza di Gusto"
      description="Ogni categoria è pensata per offrirti il meglio della pizza romana e accompagnamenti perfetti."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Maria Rossi",
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-women-having-pizza-after-work_23-2148298071.jpg",
          imageAlt: "Foto di Maria Rossi",
        },
        {
          id: "2",
          name: "Giovanni Bianchi",
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-tall-arabian-beard-man-model-stripped-shirt-posed-outdoor-fashionable-arab-guy_627829-14452.jpg",
          imageAlt: "Foto di Giovanni Bianchi",
        },
        {
          id: "3",
          name: "Laura Verdi",
          imageSrc: "http://img.b2bpic.net/free-photo/women-making-vlog-while-preparing-food_23-2149063526.jpg",
          imageAlt: "Foto di Laura Verdi",
        },
        {
          id: "4",
          name: "Marco Neri",
          imageSrc: "http://img.b2bpic.net/free-photo/group-friends-eating-pizza-home-together_23-2150419423.jpg",
          imageAlt: "Foto di Marco Neri",
        },
        {
          id: "5",
          name: "Sofia Gialli",
          imageSrc: "http://img.b2bpic.net/free-photo/gorgeous-tanned-lady-dancing-with-hair-waving_197531-7531.jpg",
          imageAlt: "Foto di Sofia Gialli",
        },
        {
          id: "6",
          name: "Andrea Bruni",
          imageSrc: "http://img.b2bpic.net/free-photo/crazy-chef-happy-expression_1194-1362.jpg",
          imageAlt: "Foto di Andrea Bruni",
        },
      ]}
      cardTitle="Clienti Felici, Pizza Inimitabile"
      cardTag="4.4 Stelle su Google con 440+ Recensioni"
      buttons={[
        {
          text: "Leggi Tutte le Recensioni",
          href: "https://www.google.com/maps/search/Cocco+Pizzeria+Rome",
        },
      ]}
      buttonAnimation="slide-up"
      cardAnimation="slide-up"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Google Maps (4.4/5)",
        "Facebook (4.5/5)",
        "TripAdvisor (4.5/5)",
        "Slow Food Italia",
        "Gambero Rosso",
        "Pizzerie d'Italia",
        "Michelin Guide",
      ]}
      title="La Nostra Reputazione Parla da Sola"
      description="Fieri delle nostre valutazioni eccellenti e dei riconoscimenti dalla critica gastronomica."
      speed={30}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq1",
          title: "Come posso ordinare online?",
          content: "Puoi ordinare direttamente dal nostro sito web cliccando su 'Ordina Ora' e scegliendo i tuoi prodotti preferiti per il ritiro o la consegna a domicilio.",
        },
        {
          id: "faq2",
          title: "Effettuate consegne a domicilio?",
          content: "Sì, effettuiamo consegne a domicilio in tutta la zona di Roma. Verifica l'area di copertura inserendo il tuo indirizzo durante l'ordine online.",
        },
        {
          id: "faq3",
          title: "È possibile prenotare un tavolo?",
          content: "Assolutamente sì! Puoi prenotare un tavolo chiamandoci al numero indicato nella sezione contatti o utilizzando il link di prenotazione online.",
        },
        {
          id: "faq4",
          title: "Quali sono gli orari di apertura?",
          content: "Siamo aperti dal Lunedì alla Domenica, dalle 12:00 alle 15:00 per il pranzo e dalle 18:00 alle 23:00 per la cena.",
        },
        {
          id: "faq5",
          title: "Utilizzate ingredienti freschi?",
          content: "La qualità è la nostra priorità. Utilizziamo solo ingredienti freschi, di stagione e provenienti da fornitori locali selezionati per garantire il massimo sapore e autenticità.",
        },
      ]}
      title="Domande Frequenti"
      description="Trova risposte rapide alle tue domande su ordinazioni, prenotazioni e altro."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      text="Vieni a Trovarci o Contattaci"
      buttons={[
        {
          text: "Chiamaci: +39 06 12345678",
          href: "tel:+390612345678",
        },
        {
          text: "Inviaci un'Email",
          href: "mailto:info@coccopizzeria.it",
        },
        {
          text: "Prenota un Tavolo",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Menu",
          items: [
            {
              label: "Pizze Classiche",
              href: "#products",
            },
            {
              label: "Pizze Speciali",
              href: "#products",
            },
            {
              label: "Bevande",
              href: "#",
            },
          ],
        },
        {
          title: "Cocco Pizzeria",
          items: [
            {
              label: "Chi Siamo",
              href: "#about",
            },
            {
              label: "Testimonianze",
              href: "#testimonials",
            },
            {
              label: "Contatti",
              href: "#contact",
            },
          ],
        },
        {
          title: "Info Legali",
          items: [
            {
              label: "Informativa sulla Privacy",
              href: "#",
            },
            {
              label: "Termini di Servizio",
              href: "#",
            },
          ],
        },
      ]}
      logoSrc="http://img.b2bpic.net/free-photo/monochrome-view-colosseum-world-heritage-day_23-2151360197.jpg"
      logoAlt="Logo Cocco Pizzeria"
      logoText="Cocco Pizzeria"
      copyrightText="© 2024 Cocco Pizzeria. Tutti i diritti riservati."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
