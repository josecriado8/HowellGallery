"use client";
import React, { useCallback, useRef, useState } from "react";
import { products } from "@/api/products";
import styles from "./Header.module.css";
import ArtworkModal from "./ArtworkModal";
import "./Header.module.css"; // Asegúrate de importar el CSS module

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [modalArtwork, setModalArtwork] = useState<any>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleDarkMode = useCallback(() => {
    if (typeof document !== "undefined") {
      document.body.classList.toggle("dark-mode");
    }
  }, []);

  const handleSearchIconClick = () => {
    setSearchOpen((v) => !v);
    setTimeout(() => inputRef.current?.focus(), 150);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    if (value.trim().length === 0) {
      setSearchResults([]);
      return;
    }
    const results = products.filter((art) =>
      art.title.toLowerCase().startsWith(value.trim().toLowerCase())
    );
    setSearchResults(results);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length === 1) {
      setModalArtwork(searchResults[0]);
    }
  };

  const handleResultClick = (art: any) => {
    setModalArtwork(art);
    setSearchOpen(false);
    setSearch("");
    setSearchResults([]);
  };

  const closeModal = () => setModalArtwork(null);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <span className={styles.logo}>Howell Gallery</span>
        </div>
        <div className={styles.right}>
          <div className={styles.desktopMenu}>
            <a href="#" className={styles.link}>Exhibitions</a>
            <a href="#" className={styles.link}>Artists</a>
            <a href="#" className={styles.link}>Collections</a>
            <a href="#" className={styles.link}>Visit</a>
            <a href="#" className={styles.link}>About</a>
            <button
              className={styles.icon}
              title="Search"
              aria-label="Search"
              onClick={handleSearchIconClick}
              type="button"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" />
                <line x1="16.5" y1="16.5" x2="21" y2="21" />
              </svg>
            </button>
            {searchOpen && (
              <div className={styles.searchDropdown}>
                <form onSubmit={handleSearch}>
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search artwork title"
                    value={search}
                    onChange={handleSearchChange}
                    className={styles.searchDropdownInput}
                  />
                </form>
                {searchResults.length > 0 && (
                  <div className={styles.searchDropdownResults}>
                    {searchResults.map((art, idx) => (
                      <div
                        key={art.title + idx}
                        className={styles.searchDropdownResult}
                        onClick={() => handleResultClick(art)}
                        onMouseDown={e => e.preventDefault()}
                        tabIndex={0}
                      >
                        <img src={art.img} alt={art.title} className={styles.searchDropdownImg} />
                        <span className={styles.searchDropdownTitle}>{art.title}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            <button
              className={styles.icon}
              title="Dark mode"
              aria-label="Dark mode"
              onClick={toggleDarkMode}
              type="button"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
              </svg>
            </button>
            <button className={styles.connect}>Become a member</button>
          </div>
          {/* Burger menu for mobile */}
          <button
            className={styles.burger}
            aria-label="Open menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
          {menuOpen && (
            <div className={styles.mobileMenu}>
              <a href="#" className={styles.link} onClick={() => setMenuOpen(false)}>Exhibitions</a>
              <a href="#" className={styles.link} onClick={() => setMenuOpen(false)}>Artists</a>
              <a href="#" className={styles.link} onClick={() => setMenuOpen(false)}>Collections</a>
              <a href="#" className={styles.link} onClick={() => setMenuOpen(false)}>Visit</a>
              <a href="#" className={styles.link} onClick={() => setMenuOpen(false)}>About</a>
              <div className={styles.mobileMenuIcons}>
                <button
                  className={styles.icon}
                  title="Search"
                  aria-label="Search"
                  onClick={() => {
                    setMenuOpen(false);
                    setSearchOpen(true);
                    setTimeout(() => inputRef.current?.focus(), 150);
                  }}
                  type="button"
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="7" />
                    <line x1="16.5" y1="16.5" x2="21" y2="21" />
                  </svg>
                </button>
                <button
                  className={styles.icon}
                  title="Dark mode"
                  aria-label="Dark mode"
                  onClick={toggleDarkMode}
                  type="button"
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                  </svg>
                </button>
              </div>
              <button className={styles.connect}>Become a member</button>
            </div>
          )}
        </div>
      </nav>
      {modalArtwork && (
        <ArtworkModal artwork={modalArtwork} onClose={closeModal} />
      )}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .search-dropdown {
          opacity: 1;
          animation: fadeIn 0.25s;
        }
        .search-dropdown input:focus {
          border-color: #222;
        }
        .artworkModalOverlay {
          animation: fadeIn 0.2s;
        }
        @media (max-width: 600px) {
          .search-dropdown {
            min-width: 160px;
            padding: 10px;
          }
        }

        /* Dark mode para el dropdown de búsqueda */
        :global(body.dark-mode) .search-dropdown {
          background: #232323 !important;
          color: #ededed !important;
          box-shadow: 0 4px 24px rgba(0,0,0,0.45) !important;
        }
        :global(body.dark-mode) .search-dropdown input {
          background: #181818 !important;
          color: #ededed !important;
          border-color: #444 !important;
        }
        :global(body.dark-mode) .search-dropdown input:focus {
          border-color: #ededed !important;
        }

        /* Dark mode para el modal de artwork */
        :global(body.dark-mode) .artworkModalOverlay .card {
          background: #232323 !important;
          color: #ededed !important;
        }
        :global(body.dark-mode) .artworkModalOverlay .card div {
          color: #ededed !important;
        }
        :global(body.dark-mode) .artworkModalOverlay .card img {
          background: #181818 !important;
        }
      `}</style>
    </header>
  );
}