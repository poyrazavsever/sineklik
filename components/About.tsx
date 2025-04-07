import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  // useInView hook'u, komponentin görünürlüğünü kontrol eder
  const { ref, inView } = useInView({
    triggerOnce: true, // Bu ayar, sadece bir kez tetiklenmesini sağlar
    threshold: 0.1, // %10'luk bir kısmı göründüğünde animasyon başlasın
  })

  return (
    <motion.div
      id="about"
      ref={ref} // useInView ref'ini burada ekliyoruz
      className="py-32"
      initial={{ opacity: 0, y: 50 }} // Başlangıçta görünmez ve biraz aşağıda
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Görünür hale geldiğinde animasyon yap
      transition={{ duration: 0.8, ease: 'easeOut' }} // Animasyon süresi
    >
      <div className="container mx-auto max-w-7xl flex items-center gap-16">
        {/* Sol Kısım: Görsel */}
        <div className="flex-1">
          <img
            src="/Images/image1.png" // Görselin yolu
            alt="About Us"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Sağ Kısım: Başlık ve Açıklama */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold text-bg mb-4">Hakkımızda</h2>
          <p className="text-lg text-neutral-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Nulla facilisi. Donec
            ultrices justo non eros gravida, vel bibendum risus eleifend. Donec suscipit, ante eu maximus interdum, nisi erat
            tempus sapien, in tincidunt elit lectus eu mauris. Mauris pretium justo at nisi egestas, vitae interdum urna
            dictum. Integer eu turpis ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Nulla facilisi. Donec
            ultrices justo non eros gravida, vel bibendum risus eleifend. Donec suscipit, ante eu maximus interdum, nisi erat
            tempus sapien, in tincidunt elit lectus eu mauris. Mauris pretium justo at nisi egestas, vitae interdum urna
            dictum. Integer eu turpis ipsum.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default About
