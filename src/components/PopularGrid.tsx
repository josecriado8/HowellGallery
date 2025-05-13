"use client";
import React, { useState } from "react";
import { products as artworks } from "@/api/products";
import styles from "./ProductGrid.module.css";

const categories = ["All", "Generative", "Abstract", "Minimal", "Colorful"];

function PopularTabs() {
  return (
    <div className={styles.gridTabs}>
      <span className={styles.gridTabsLabel}>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="black"
          className={styles.gridTabsIcon}
        >
          <polygon points="11,2 17,4.5 20,11 17,17.5 11,20 5,17.5 2,11 5,4.5" />
        </svg>
        Most popular
      </span>
      <span className={styles.gridTabsSpacer} />
      <a href="#see-more" className={styles.gridTabsLink}>
        ( view all &rarr; )
      </a>
    </div>
  );
}

function PopularCategories({ categories, selected, onSelect }: { categories: string[]; selected: string; onSelect: (cat: string) => void }) {
  return (
    <div className={styles.gridCategories}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`${styles.gridCategoryBtn} ${selected === cat ? styles.gridCategoryBtnActive : ""}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

function PopularCard({
  category,
  img,
  title,
  author,
  price,
}: {
  category: string;
  img: string;
  title: string;
  author: string;
  price: string;
}) {
  return (
    <div className={`${styles.card} card`}>
      <div className={`${styles.cardCategory} cardCategory`}>{category}</div>
      <div className={styles.cardImageWrapper}>
        <img src={img} alt={title} className={styles.cardImage} />
      </div>
      <div className={styles.cardContent}>
        <div className={`${styles.cardTitle} cardTitle`}>{title}</div>
        <div className={`${styles.cardAuthor} cardAuthor`}>
          by <span style={{ fontWeight: 500 }}>{author}</span>
        </div>
        <div className={`${styles.cardPrice} cardPrice`}>{price}</div>
      </div>
    </div>
  );
}

export default function PopularGrid() {
  const [selectedCat, setSelectedCat] = useState("All");
  const filtered = selectedCat === "All" ? artworks : artworks.filter((a) => a.category === selectedCat);

  return (
    <section className={styles.gridSection}>
      <PopularTabs />
      <div className={styles.gridContainer}>
        <PopularCategories categories={categories} selected={selectedCat} onSelect={setSelectedCat} />
        <div className={styles.gridCards}>
          {filtered.map((art, i) => (
            <PopularCard key={i} {...art} />
          ))}
        </div>
      </div>
    </section>
  );
}