import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import styles from './FAQSection.module.scss'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'What Spring Boot versions are supported?',
      answer:
        'AppInsight works with Spring Boot 1.5+ and all the way through the latest versions. Any application that exposes the Actuator endpoints is compatible.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Absolutely. AppInsight connects directly to your local applications over HTTP/HTTPS. No data is sent to cloud servers. All monitoring happens locally on your machine.',
    },
    {
      question: 'Can I monitor applications running on different machines?',
      answer:
        'Yes! AppInsight can connect to Spring Boot Actuator endpoints over the network. You can monitor applications running on servers, containers, or any networked system.',
    },
    {
      question: 'What endpoints are required to be exposed?',
      answer:
        'At minimum, the /actuator/health endpoint. For full features, we recommend enabling all standard endpoints. Custom metrics through Micrometer are fully supported.',
    },
    {
      question: 'Is there a free trial?',
      answer:
        'Yes! Download AppInsight and use it free for 30 days with full access to all features. No credit card required.',
    },
    {
      question: 'Do you offer site licenses or volume discounts?',
      answer:
        'Absolutely. We offer flexible licensing for teams and enterprises. Contact our sales team at sales@appinsight.fyi for custom quotes.',
    },
  ]

  return (
    <section className={`section ${styles.faq}`} id="faq">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about AppInsight</p>
        </motion.div>

        <div className={styles.faqList}>
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className={styles.faqItem}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <button
                className={styles.question}
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                aria-expanded={openIndex === idx}
              >
                <span>{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    className={styles.answer}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.contactCta}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4>Still have questions?</h4>
          <p>
            Can't find the answer you're looking for? Feel free to{' '}
            <a href="mailto:support@appinsight.fyi">contact our support team</a>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
