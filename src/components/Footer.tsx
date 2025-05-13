"use client";
import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footerSection">
      <div className="footerMain">
        {/* Logo y claim */}
        <div className="footerLogo">
          <div className="footerLogoText">Howell Gallery</div>
          <div className="footerClaim">Celebrating digital art & creativity</div>
        </div>

        {/* Links */}
        <div className="footerLinks">
          <FooterColumn
            title="Exhibitions"
            items={[
              "Current Exhibitions",
              "Upcoming Events",
              "Past Shows",
              "Virtual Tours",
            ]}
          />
          <FooterColumn
            title="Artists"
            items={[
              "Featured Artists",
              "Artist Directory",
              "Submit Portfolio",
              "Residencies",
            ]}
          />
          <FooterColumn
            title="Visit"
            items={[
              "Plan Your Visit",
              "Opening Hours",
              "Tickets",
              "Location & Map",
              "Accessibility",
            ]}
          />
          <FooterColumn
            title="About"
            items={[
              "Our Story",
              "Team",
              "Press",
              "Contact",
              "Support Us",
            ]}
          />
        </div>

        {/* Contact & buttons */}
        <div className="footerActions">
          <button className="footerBtnPrimary">newsletter signup</button>
          <button className="footerBtnSecondary">become a member</button>
          <button className="footerBtnSecondary">
            donate <span role="img" aria-label="heart">❤️</span>
          </button>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="footerBottom">
        <div>© 2022-{year} Howell Gallery</div>
        <div>
          <a href="#" className="footerSocial">instagram</a>
          <a href="#" className="footerSocial">twitter</a>
          <a href="#" className="footerSocial">newsletter</a>
        </div>
        <div>powered by digital artists worldwide</div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: React.ReactNode[] }) {
  return (
    <div>
      <div className="footerColumnTitle">{title}</div>
      <ul className="footerColumnList">
        {items.map((item, i) => (
          <li key={i} className="footerColumnItem">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}