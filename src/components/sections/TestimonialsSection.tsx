import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import styles from './TestimonialsSection.module.scss'

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "AppInsight has transformed how our team monitors Spring Boot applications. We've cut troubleshooting time in half and can now proactively catch issues before they hit production.",
      author: 'Sarah Chen',
      role: 'Senior DevOps Engineer',
      company: 'TechCorp',
    },
    {
      text: 'The HikariCP monitoring alone is worth it. We found a connection leak that was costing us hours of debugging time each month. Now we can see it instantly.',
      author: 'Marcus Johnson',
      role: 'Engineering Manager',
      company: 'DataFlow Systems',
    },
    {
      text: "What really impresses us is how AppInsight handles multiple applications. Managing 10+ microservices is now trivial. The UI is beautiful and incredibly intuitive.",
      author: 'Elena Rodriguez',
      role: 'Technical Architect',
      company: 'CloudScale',
    },
    {
      text: 'Our developers love it. They spend less time hunting through logs and JSON endpoints, and more time building features. The ROI was immediate.',
      author: 'James Mitchell',
      role: 'CTO',
      company: 'InnovateLabs',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className={`section ${styles.testimonials}`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Loved by Engineering Teams</h2>
          <p>See what teams are saying about AppInsight</p>
        </motion.div>

        <motion.div
          className={styles.testimonialsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div key={idx} className={styles.testimonialCard} variants={itemVariants}>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <blockquote className={styles.quote}>{testimonial.text}</blockquote>
              <div className={styles.author}>
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>{testimonial.author}</div>
                  <div className={styles.authorRole}>{testimonial.role}</div>
                </div>
                <div className={styles.company}>{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
