import React from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    id: 1,
    title: 'Sineklik – Pileli Sineklik',
    description: 'Yaşam alanlarınızı böcek ve sineklerden korumanın en estetik ve pratik yolu sinekliklerdir. Özellikle pileli sineklikler, katlanabilir yapıları sayesinde hem kolay kullanım sağlar hem de dar alanlarda bile rahatça uygulanabilir. Yüksek kaliteli malzemelerle üretilen sineklikler, uzun ömürlü ve dayanıklıdır, evinize şıklık katar.',
    imageUrl: '/Images/image1.png',
  },
  {
    id: 2,
    title: 'Cam Balkon',
    description: 'Cam balkon sistemleri, yaşam alanlarınızı genişletirken dış mekanın güzelliklerini içeri taşır. Isı ve ses yalıtımı sağlar, her mevsim keyifle kullanılabilir. Modern ve estetik yapısıyla, balkonlarınızda konforlu bir alan yaratır.',
    imageUrl: '/Images/image1.png',
  },
  {
    id: 3,
    title: 'Pimapen',
    description: 'Pimapen sistemleri, evlerinize enerji verimliliği sağlayan pencere ve kapı çözümleridir. Yüksek yalıtım özellikleri sayesinde soğuk kış aylarında sıcaklığı içeride tutarken, yaz aylarında serinliği sağlar. Uzun ömürlü ve çevre dostu Pimapen ürünleri, hem estetik hem de fonksiyonel bir çözüm sunar.',
    imageUrl: '/Images/image1.png',
  },
  {
    id: 4,
    title: 'Cam',
    description: 'Cam uygulamaları, iç ve dış mekanlarda modern bir görünüm yaratır. Dekoratif cam çözümlerinden işlevsel cam sistemlerine kadar geniş bir ürün yelpazesi sunuyoruz. Yüksek kaliteli camlarla güvenli, dayanıklı ve estetik sonuçlar elde edebilirsiniz.',
    imageUrl: '/Images/image1.png',
  },
  {
    id: 5,
    title: 'Ayna – Baklava Ayna',
    description: 'Mekanlarınıza ferahlık ve derinlik katmak için özel tasarımlı aynalarla hizmet veriyoruz. Özellikle baklava desenli aynalar, klasik şıklığı modern dokunuşlarla birleştirir. Hem işlevsel hem de dekoratif olan ayna çözümlerimiz, evinize veya iş yerinize zarafet katar.',
    imageUrl: '/Images/image1.png',
  },
  {
    id: 6,
    title: 'Duşakabin',
    description: 'Duşakabin sistemleri, banyolarınıza modern bir dokunuş katarken, su sıçramalarını önleyerek hijyenik bir ortam sağlar. Kaliteli malzemelerle üretilen duşakabinler, uzun ömürlü ve dayanıklıdır. Farklı tasarım seçenekleriyle, banyolarınıza şıklık ve konfor getiriyoruz.',
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
      <div className="container mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
