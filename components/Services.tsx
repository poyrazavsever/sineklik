import React from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    id: 1,
    title: 'Dekorasyon Hizmetleri',
    description: 'Evinizi veya işyerinizi profesyonelce dekore ediyoruz.',
    imageUrl: '/Images/image1.png',
  },
  {
    id: 2,
    title: 'Ayna Hizmetleri',
    description: 'Çeşitli boyutlarda ve modellerde ayna hizmeti sunuyoruz.',
    imageUrl: '/Images/image1.png',
  },
  {
    id: 3,
    title: 'Cam Balkon Sistemleri',
    description: 'Gelişmiş cam balkon sistemleriyle mekanlarınıza şıklık katıyoruz.',
    imageUrl: '/Images/image1.png',
  },
]

const Services = () => {
  return (
    <div id="services" className="py-16 bg-bg">
      {/* Hizmetler Başlığı */}
      <div className="text-center mb-12 flex flex-col items-center gap-2">
        <h2 className="text-4xl font-bold text-primary">Hizmetlerimiz</h2>
        <p className="text-lg text-neutral-700 mt-4">
          Profesyonel hizmet anlayışımızla her ihtimale uygun çözümler sunuyoruz.
        </p>
      </div>

      {/* Kartlar */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="bg-b border border-neutral-200 rounded-lg shadow-sm overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} // Göründüğünde animasyon başlasın
            viewport={{ once: true }} // Animasyon sadece bir kez başlasın
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {/* Kart Resmi */}
            <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover" />

            {/* Kart İçeriği */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
              <p className="text-neutral-700 mt-2">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Services
