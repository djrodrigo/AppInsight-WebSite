import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logoImg from '../../assets/images/AppInsight-Logo.png'
import styles from './Header.module.scss'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Screenshots', href: '#screenshots' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header className={styles.header}>
      <div className="container flex flex--between">
        <div className={styles.logo}>
          <img src={logoImg} alt="AppInsight Logo" className={styles.logoImg} />
          <h2>AppInsight</h2>
        </div>

        <nav className={`${styles.nav} ${mobileMenuOpen ? styles['nav--open'] : ''}`}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
          <button className="btn btn--primary btn--sm">
            Download
          </button>
        </nav>

        <button
          className={styles.menuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}
