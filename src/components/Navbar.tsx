'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Bestsellers', href: '/#bestsellers' },
    { label: 'Custom Box', href: '/#builder' },
    { label: 'Menu', href: '/#menu' },
    { label: 'Workshops', href: '/#workshops' },
    { label: 'About', href: '/#founders' },
    { label: 'Contact', href: '/#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileOpen(false);
    if (href.startsWith('/#') && pathname === '/') {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header className="nav-capsule-wrapper" id="top-nav">
      <nav className={`nav-capsule ${scrolled ? 'scrolled' : ''}`} aria-label="Main Navigation">
        {/* Brand Logo */}
        <Link href="/" className="capsule-logo" aria-label="The Brownie Hub Home">
          <div className="capsule-brand-mark">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
              <rect x="6" y="14" width="28" height="20" rx="3" stroke="url(#navGold)" strokeWidth="1.8" fill="rgba(201,134,60,0.12)" />
              <path d="M6 20h28" stroke="url(#navGold)" strokeWidth="1.5" />
              <path d="M20 14v20" stroke="url(#navGold)" strokeWidth="1.5" />
              <path d="M12 14c0-4 3.5-7 8-7s8 3 8 7" stroke="url(#navGold)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              <circle cx="20" cy="14" r="2.5" fill="#e8b66e" />
              <defs>
                <linearGradient id="navGold" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F7D58B" />
                  <stop offset="0.5" stopColor="#C9863C" />
                  <stop offset="1" stopColor="#8C531D" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="capsule-brand-text">
            <span className="capsule-brand-name">The Brownie Hub</span>
            <span className="capsule-brand-tagline">Pure Magic in Every Bite</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="capsule-nav-links">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`capsule-link ${isActive ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Cart Bag Icon with Badge */}
        <button
          id="cart-toggle-btn"
          className="capsule-cart-btn"
          aria-label="View Shopping Cart"
          suppressHydrationWarning
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <span className="capsule-cart-count" id="cart-count-badge" suppressHydrationWarning>0</span>
        </button>

        {/* Mobile Menu Trigger */}
        <button
          id="mobile-menu-btn"
          className="capsule-mobile-btn"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          suppressHydrationWarning
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileOpen ? 'open' : ''}`} id="mobile-nav-drawer">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="mobile-nav-link"
            onClick={(e) => handleLinkClick(e, link.href)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
