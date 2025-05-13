"use client";
import React, { useState } from "react";
import { products as artworks } from "@/api/products";
import styles from "./LastSoldGrid.module.css";

const artworksWithSoldDate = artworks.map((art, i) => ({
  ...art,
  soldDaysAgo: [0, 1, 2, 3, 5, 8, 15, 25][i % 8], 
}));

function LastSoldTabs() {
  return (
    <div className={`${styles.lastSoldTabs} lastSoldTabs`}>
      <span className={`${styles.lastSoldTabsLabel} lastSoldTabsLabel`}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" style={{ marginRight: 8 }}>
          <polygon points="9,3 16,15 2,15" />
        </svg>
        Latest sold
      </span>
      <span className={styles.lastSoldTabsSpacer} />
      <a
        href="#view-all"
        className={`${styles.lastSoldTabsLink} lastSoldTabsLink`}
      >
        ( view all &rarr; )
      </a>
    </div>
  );
}

function LastSoldFilters({
  period,
  setPeriod,
  chain,
  setChain,
  chains,
}: {
  period: string;
  setPeriod: (p: string) => void;
  chain: string;
  setChain: (c: string) => void;
  chains: string[];
}) {
  const periods = ["24h", "7d", "30d", "all"];
  return (
    <div className={styles.lastSoldFilters}>
      <div className={styles.lastSoldPeriods}>
        {periods.map((p) => (
          <button
            key={p}
            onClick={() => setPeriod(p)}
            className={`${styles.lastSoldPeriodBtn} ${period === p ? styles.lastSoldPeriodBtnActive : ""}`}
          >
            {p}
          </button>
        ))}
      </div>
      <span className={styles.lastSoldFiltersSpacer} />
      <select
        value={chain}
        onChange={e => setChain(e.target.value)}
        className={styles.lastSoldSelect}
      >
        {chains.map(c => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </div>
  );
}

function LastSoldRow({
  artwork,
  selected,
  onHover,
  index,
}: {
  artwork: any;
  selected: boolean;
  onHover: () => void;
  index: number;
}) {
  return (
    <div
      onMouseEnter={onHover}
      className={`${styles.lastSoldRow} lastSoldRow${selected ? " selected" : ""}`}
    >
      <span className={styles.lastSoldIndex}>{index + 1}</span>
      <img
        src={artwork.img}
        alt={artwork.title}
        className={styles.lastSoldImg}
      />
      <div className={styles.lastSoldInfo}>
        <div className={styles.lastSoldTitle}>{artwork.title}</div>
        <div className={styles.lastSoldAuthor}>
          by <span className={styles.lastSoldAuthorName}>{artwork.author}</span>
        </div>
        <div className={styles.lastSoldSoldAgo}>
          Sold {artwork.soldDaysAgo === 0 ? "today" : `${artwork.soldDaysAgo}d ago`}
        </div>
      </div>
      <div className={styles.lastSoldPrice}>
        {artwork.price}
      </div>
    </div>
  );
}

function LastSoldPreview({ artwork }: { artwork: any }) {
  if (!artwork) return null;
  return (
    <div className={`${styles.lastSoldPreview} lastSoldPreview`}>
      <img
        src={artwork.img}
        alt={artwork.title}
        className={styles.lastSoldPreviewImg}
      />
    </div>
  );
}

function LastSoldCategories({
  categories,
  selected,
  onSelect,
}: {
  categories: string[];
  selected: string;
  onSelect: (cat: string) => void;
}) {
  return (
    <div className={styles.lastSoldCategories}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`${styles.lastSoldCategoryBtn} ${selected === cat ? styles.lastSoldCategoryBtnActive : ""}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

const categories = ["All", "Generative", "Abstract", "Minimal", "Colorful"];
const chains = categories; 

function filterByPeriod(artworks: any[], period: string) {
  switch (period) {
    case "24h":
      return artworks.filter(a => a.soldDaysAgo <= 1);
    case "7d":
      return artworks.filter(a => a.soldDaysAgo <= 7);
    case "30d":
      return artworks.filter(a => a.soldDaysAgo <= 30);
    default:
      return artworks;
  }
}

export default function LastSoldGrid() {
  const [period, setPeriod] = useState("24h");
  const [chain, setChain] = useState(categories[0]);
  const [selected, setSelected] = useState(0);


  let filteredArtworks =
    chain === "All"
      ? artworksWithSoldDate
      : artworksWithSoldDate.filter((a) => a.category === chain);


  filteredArtworks = filterByPeriod(filteredArtworks, period);

  return (
    <section className={styles.lastSoldSection}>
      <LastSoldTabs />
      <div className={styles.lastSoldInner}>
        <LastSoldFilters
          period={period}
          setPeriod={setPeriod}
          chain={chain}
          setChain={setChain}
          chains={categories}
        />
        <div className={styles.lastSoldGrid}>
          <div className={styles.lastSoldList}>
            {filteredArtworks.map((art, i) => (
              <LastSoldRow
                key={i}
                artwork={art}
                selected={selected === i}
                onHover={() => setSelected(i)}
                index={i}
              />
            ))}
          </div>
          <div className={styles.lastSoldPreviewCol}>
            <LastSoldPreview artwork={filteredArtworks[selected] || filteredArtworks[0]} />
          </div>
        </div>
      </div>
    </section>
  );
}