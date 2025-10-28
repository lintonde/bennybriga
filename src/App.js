import React from "react";
import "./bennybriga.css";

// תמונות לוקאליות (עובד ב-CRA וב-Vite)
import heroImg from "./assets/hero.png";
import bookImg from "./assets/book3.png"; // או .png
import decorLeft from "./assets/decor-left.png";
import decorRight from "./assets/decor-right.png";
import flower from "./assets/flower.png";
// אופציונלי לשימוש עתידי:
// import jarPng from "../assets/jar.png";

export default function BennyBriga({
  getBookUrl = "https://www.amazon.com/Gazoz-Making-Magical-Seasonal-Sparkling/dp/157965875X",
  orderNowUrl = "https://www.amazon.com/Gazoz-Making-Magical-Seasonal-Sparkling/dp/157965875X",
}) {
  return (
    <div className="page" itemScope itemType="https://schema.org/WebPage">
      {/* HEADER */}
      <header className="header" role="banner">
        <h1 className="logo" itemProp="name">
          BENNY BRIGA
        </h1>
      </header>

      {/* HERO */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImg})` }}
        aria-label="GAZOZ by Benny Briga – hero"
      >
        <div className="hero-overlay">
          <h2 className="hero-title" itemProp="headline">
            GAZOZ
          </h2>
          <p className="hero-subtitle">
            The Art of Sweet Fermentation by <strong>Benny Briga</strong>
          </p>
          <a
            className="btn"
            href={getBookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get the Gazoz book on Amazon"
          >
            GET THE BOOK
          </a>
        </div>
      </section>

      {/* INTRO עם דקור עליון/תחתון */}
      <section
        className="section about with-decor"
        aria-label="About Gazoz"
        style={{
          "--decor-top": `url('${decorRight}')`.replace(
            "decor-right",
            "decor-right"
          ), // השארה כמשתנה CSS
          "--decor-bottom": `url('${decorLeft}')`.replace(
            "decor-left",
            "decor-left"
          ),
          // ↑ טריק קטן למנוע כלים מסוימים מלהחליף את המחרוזת – לא קריטי לתפקוד
        }}
      >
        <div className="text-block">
          <h3>
            <em>Sweet Fermentation</em>
          </h3>
          <p>
            <strong>GAZOZ by Benny Briga</strong> celebrates the beauty of
            nature in a glass—fresh herbs, fruit, and gentle bubbles crafted
            into a vibrant, naturally sparkling drink.
          </p>
          <div div className="flower-image">
            <img
              src={flower}
              alt="GAZOZ — Book cover by Benny Briga & Adeena Sussman"
              loading="lazy"
              width={200}
            />
          </div>
          <p>
            No two glasses are the same. Seasonal produce and living cultures
            create subtle molecular changes from second to second—resulting in a
            truly personal, refreshing beverage.
          </p>

          <div div className="flower-image">
            <img
              src={flower}
              alt="GAZOZ — Book cover by Benny Briga & Adeena Sussman"
              loading="lazy"
              width={200}
            />
          </div>
          <p>
            Whether you’re foraging outdoors or shopping the produce aisle,
            you’ll find what you need to make the{" "}
            <strong>perfect, sparkling drink</strong> at home—tailored to your
            taste.
          </p>
        </div>
      </section>

      {/* ORDER עם דקור שמאל/ימין */}
      <section
        className="section order with-decor"
        aria-label="Order Gazoz book"
        style={{
          "--decor-left": `url('${decorLeft}')`,
          "--decor-right": `url('${decorRight}')`,
        }}
      >
        <div className="text-block">
          <h3>THE GAZOZ BOOK</h3>
          <p>
            Learn the method behind Benny Briga’s iconic Tel-Aviv
            GAZOZ—infusions, syrups, and fresh botanical blends you can make in
            your own kitchen.
          </p>
          <a
            className="btn black"
            href={orderNowUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order the Gazoz book now on Amazon"
          >
            ORDER NOW
          </a>
        </div>

        <div div className="book-image">
          <img
            src={bookImg}
            alt="GAZOZ — Book cover by Benny Briga & Adeena Sussman"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}
