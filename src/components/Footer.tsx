import React from 'react'
import { Github, Mail, Linkedin, Twitter } from 'lucide-react'
import styles from './Footer.module.scss'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Download', href: '#' },
      { label: 'Changelog', href: '#' },
    ],
    company: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: 'mailto:hello@appinsight.fyi' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'License Agreement', href: '#' },
      { label: 'Security', href: '#' },
    ],
    social: [
      { icon: Github, href: '#', label: 'GitHub' },
      { icon: Twitter, href: '#', label: 'Twitter' },
      { icon: Linkedin, href: '#', label: 'LinkedIn' },
      { icon: Mail, href: 'mailto:hello@appinsight.fyi', label: 'Email' },
    ],
  }

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          {/* Brand */}
          <div className={styles.brand}>
            <h3>AppInsight</h3>
            <p>Spring Boot monitoring for the modern development team.</p>
            <div className={styles.social}>
              {footerLinks.social.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className={styles.socialLink}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links */}
          <div className={styles.links}>
            <div className={styles.column}>
              <h4>Product</h4>
              <ul>
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.column}>
              <h4>Company</h4>
              <ul>
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.column}>
              <h4>Legal</h4>
              <ul>
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <p>&copy; {currentYear} AppInsight. All rights reserved.</p>
          <p>Made with ❤️ for developers and DevOps engineers.</p>
        </div>
      </div>
    </footer>
  )
}
