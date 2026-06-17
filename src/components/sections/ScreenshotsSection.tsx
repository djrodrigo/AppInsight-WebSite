import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import styles from './ScreenshotsSection.module.scss'

export default function ScreenshotsSection() {
  const [activeSlide, setActiveSlide] = useState(0)

  const screenshots = [
    {
      title: 'Overview Dashboard',
      description: 'Comprehensive view of all your applications with key metrics at a glance.',
      color: '#0066ff',
    },
    {
      title: 'JVM Metrics Dashboard',
      description: 'Deep dive into JVM performance, memory usage, and garbage collection statistics.',
      color: '#00d084',
    },
    {
      title: 'HikariCP Connection Pool',
      description: 'Real-time visualization of database connection pool utilization and performance.',
      color: '#ffa500',
    },
    {
      title: 'Metrics Explorer',
      description: 'Browse all available Spring Boot Actuator metrics with powerful filtering.',
      color: '#0066ff',
    },
    {
      title: 'Logger Management',
      description: 'Dynamically adjust logging levels without restarting your applications.',
      color: '#c084ff',
    },
    {
      title: 'Multi-Instance View',
      description: 'Monitor multiple Spring Boot applications simultaneously in one interface.',
      color: '#00d084',
    },
  ]

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  return (
    <section className={`section ${styles.screenshots}`} id="screenshots">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2>See It In Action</h2>
          <p>Beautiful, powerful dashboards that make monitoring simple and delightful</p>
        </motion.div>

        <div className={styles.carousel}>
          <motion.div
            className={styles.slide}
            key={activeSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className={styles.slideImage}
              style={{
                background: `linear-gradient(135deg, ${screenshots[activeSlide].color}15 0%, ${screenshots[activeSlide].color}05 100%)`,
                borderColor: screenshots[activeSlide].color,
              }}
            >
              <div className={styles.mockupContent}>
                <div className={styles.mockupHeader}>
                  <h3>{screenshots[activeSlide].title}</h3>
                </div>
                <div className={styles.mockupBody}>
                  {/* Generate visual elements based on the slide */}
                  {activeSlide === 0 && (
                    <div className={styles.dashboardPreview}>
                      <div className={styles.stat}>98%</div>
                      <div className={styles.stat}>1.2s</div>
                      <div className={styles.stat}>512MB</div>
                    </div>
                  )}
                  {activeSlide === 1 && (
                    <div className={styles.graphPreview}>
                      <svg width="100%" height="120" viewBox="0 0 300 120">
                        <path d="M 0 80 Q 50 40 100 60 T 200 30 T 300 70" stroke={screenshots[activeSlide].color} strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                  )}
                  {activeSlide === 2 && (
                    <div className={styles.poolPreview}>
                      <div className={styles.poolCircle} style={{ backgroundColor: screenshots[activeSlide].color }}>
                        <span>12</span>
                      </div>
                      <div className={styles.poolStat}>Active Connections</div>
                    </div>
                  )}
                  {activeSlide === 3 && (
                    <div className={styles.metricsPreview}>
                      <div className={styles.metricItem}>jvm.memory.used</div>
                      <div className={styles.metricItem}>http.requests.total</div>
                      <div className={styles.metricItem}>db.connection.pool.size</div>
                    </div>
                  )}
                  {activeSlide === 4 && (
                    <div className={styles.loggersPreview}>
                      <div className={styles.loggerItem}>com.example</div>
                      <div className={styles.loggerItem}>org.springframework</div>
                      <div className={styles.loggerItem}>org.hibernate</div>
                    </div>
                  )}
                  {activeSlide === 5 && (
                    <div className={styles.appsPreview}>
                      <div className={styles.appItem}>🟢 App 1</div>
                      <div className={styles.appItem}>🟢 App 2</div>
                      <div className={styles.appItem}>🟡 App 3</div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.info}>
              <h3>{screenshots[activeSlide].title}</h3>
              <p>{screenshots[activeSlide].description}</p>
            </div>
          </motion.div>

          {/* Controls */}
          <div className={styles.controls}>
            <button className={styles.btn} onClick={prevSlide} aria-label="Previous slide">
              <ChevronLeft size={20} />
            </button>

            <div className={styles.dots}>
              {screenshots.map((_, idx) => (
                <button
                  key={idx}
                  className={`${styles.dot} ${activeSlide === idx ? styles.active : ''}`}
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button className={styles.btn} onClick={nextSlide} aria-label="Next slide">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
