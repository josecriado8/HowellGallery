"use client";
import React, { useState } from "react";
import { products as artworks } from "@/api/products";
import styles from "./ProductGrid.module.css";


function GalleryTabs() {
  return (
    <div className={`${styles.gridTabs} gridTabs`}>
      <span className={`${styles.gridTabsLabel} gridTabsLabel`}>
        <span className={`${styles.gridTabsDot} gridTabsDot`} />
        What's new
      </span>
      <span className={`${styles.gridTabsSpacer} gridTabsSpacer`} />
      <a href="#see-more" className={`${styles.gridTabsLink} gridTabsLink`}>
        ( view all &rarr; )
      </a>
    </div>
  );
}

function GalleryCategories({
  categories,
  selected,
  onSelect,
}: {
  categories: string[];
  selected: string;
  onSelect: (cat: string) => void;
}) {
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

function ArtCard({
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

const categories = ["All", "Generative", "Abstract", "Minimal", "Colorful"];

export default function GalleryGrid() {
  const [selectedCat, setSelectedCat] = useState("All");

  const filtered = selectedCat === "All"
    ? artworks
    : artworks.filter((a) => a.category === selectedCat);

  return (
    <section className={styles.gridSection}>
      <GalleryTabs />
      <div className={styles.gridContainer}>
        <GalleryCategories categories={categories} selected={selectedCat} onSelect={setSelectedCat} />
        <div className={styles.gridCards}>
          {filtered.map((art, i) => (
            <ArtCard key={i} {...art} />
          ))}
        </div>
      </div>
    </section>
  );
}