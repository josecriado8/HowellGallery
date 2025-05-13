"use client";
import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import modalStyles from "./ArtworkModal.module.css";
import cardStyles from "./ProductGrid.module.css";

const artworks = [
  {
    src: "https://gateway.fxhash2.xyz/ipfs/QmVMmuYaz3BFgGrC5xgMFUd5AzH7faG5qTzt1oU3dmfvQN/?fxhash=opPt8yzsDSUZS85cV4R8TayJxvEixz4QzZrg2tpzuW6tbjjRY4T&fxiteration=1&fxminter=tz1gi68wGST7UtzkNpnnc354mpqCcVNQVcSw",
    title: "Chromatic Dreams #1",
    author: "sofia.mint",
    owner: "GalleryVault",
  },
  {
    src: "https://gateway.fxhash2.xyz/ipfs/QmWsnkLj2yvJf4o8tnSFTKvumW7xUJjikhnmj3bZ8e9Sxm/?fxhash=ooJU19pZtJcHwVxkbCV2X8RKbSdmHC4Lerx3PPD6SmQW5x4nBxg&fxiteration=12&fxminter=tz29tmqXFXdyiw6qyxPKfwsKDm5JJQGz8euF",
    title: "Digital Bloom #12",
    author: "capnganj.tez",
    owner: "Applied.tez",
  },
  {
    src: "https://gateway.fxhash2.xyz/ipfs/QmWsnkLj2yvJf4o8tnSFTKvumW7xUJjikhnmj3bZ8e9Sxm/?fxhash=opUHhUf5c8zWtbQrh7AkMNKNCzQAGkMkNtYwWncrvBWnCmA2BQ7&fxiteration=81&fxminter=tz1VMSfs6sxfv94puiVB7xPvtYgiX6L31bmF",
    title: "Generative Flow #81",
    author: "lucas.art",
    owner: "ModernArtDAO",
  },
  {
    src: "https://gateway.fxhash2.xyz/ipfs/QmWsnkLj2yvJf4o8tnSFTKvumW7xUJjikhnmj3bZ8e9Sxm/?fxhash=ooyQomSejpHGfTbRH1PH4fRyTArw9P28tAG4FzC5QmZNFyovra9&fxiteration=95&fxminter=tz1QEMfacwHcVZ3VRmkDiW43MSwkwKJYqrY8",
    title: "Abstract Echoes #95",
    author: "mariafx",
    owner: "artcollector1",
  },
  {
    src: "https://gateway.fxhash2.xyz/ipfs/QmSjGp9gWoE76XF1Q538tqiZqMyANePG2noL58WsoS2HPu/?fxhash=oo4bbWykheMgsvPToSPFixdk6fdzzrGjy8AUdeS45nkmwPVbCvE&fxiteration=5&fxminter=tz1XQVUw5dhpLoihZqmHri1szHZhcPUVtCKG",
    title: "Kaleidoscopics #19",
    author: "javier.codes",
    owner: "digitaleyes",
  },
];

function getRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function Hero() {
  const [artwork, setArtwork] = useState(artworks[0]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setArtwork(getRandom(artworks));
  }, []);

  return (
    <div className={styles.heroSection}>
      <iframe
        src={artwork.src}
        className={styles.heroBg}
        title="generative background"
        loading="lazy"
      />
      <div className={styles.heroContent}>
        <div className={`${styles.heroFooterBar} heroFooterBar`}>
          <span className={`${styles.heroFooterTitle} heroFooterTitle`}>
            {artwork.title}
          </span>
          <button
            className={`${styles.heroFooterBtn} heroFooterBtn`}
            onClick={() => setShowModal(true)}
          >
            View artwork
          </button>
          <span className={`${styles.heroFooterAuthor} heroFooterAuthor`}>
            by <span className={styles.heroFooterItalic}>{artwork.author}</span>
            <span className={styles.heroFooterCheck}>✔️</span>
          </span>
          <span className={`${styles.heroFooterOwner} heroFooterOwner`}>
            collection by <span className={styles.heroFooterItalic}>{artwork.owner}</span>
          </span>
        </div>
      </div>

      {showModal && (
        <div className={modalStyles.artworkModalOverlay} onClick={() => setShowModal(false)}>
          <div
            className={modalStyles.artworkModal}
            onClick={e => e.stopPropagation()}
          >
            <button className={modalStyles.artworkModalClose} onClick={() => setShowModal(false)}>
              ×
            </button>
            <div className={cardStyles.card}>
              <div className={cardStyles.cardCategory}>{artwork.owner}</div>
              <div className={cardStyles.cardImageWrapper}>
                <iframe
                  src={artwork.src}
                  title={artwork.title}
                  className={cardStyles.cardImage}
                  style={{ width: "100%", height: "240px", border: "none", borderRadius: "12px" }}
                  loading="lazy"
                />
              </div>
              <div className={cardStyles.cardContent}>
                <div className={cardStyles.cardTitle}>{artwork.title}</div>
                <div className={cardStyles.cardAuthor}>
                  by <span style={{ fontWeight: 500 }}>{artwork.author}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}