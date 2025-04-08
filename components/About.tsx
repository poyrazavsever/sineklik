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
            src="/Images/image2.png" // Görselin yolu
            alt="About Us"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Sağ Kısım: Başlık ve Açıklama */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold text-bg mb-4">Hakkımızda</h2>
          <p className="text-lg text-neutral-300">
          Aksineklik, yaşam alanlarınızı daha konforlu, estetik ve fonksiyonel hale getirmek için yüksek kaliteli çözümler sunan bir yapı firmasıdır. Sineklikten cam balkona, Pimapen’den ayna ve duşakabin sistemlerine kadar geniş bir ürün ve hizmet yelpazesiyle müşterilerimizin ihtiyaçlarına özel çözümler üretiyoruz. Uzun yıllara dayanan tecrübemiz ve uzman kadromuzla, her projeye titizlikle yaklaşarak en iyi hizmeti vermeyi hedefliyoruz. Müşteri memnuniyetini her zaman ön planda tutarak, yenilikçi tasarımlarımız ve dayanıklı ürünlerimizle yaşam alanlarınıza değer katıyoruz. Kaliteli malzeme kullanımı ve profesyonel montaj ekibimiz sayesinde, estetik ve fonksiyonelliği bir araya getiriyoruz. Aksineklik olarak, her zaman modern çözümlerle daha iyi bir yaşam sunmak için çalışıyoruz.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default About
