// Dosya: src/components/Home/Services/index.tsx

import React from 'react'
import Link from 'next/link'
import { Servicebox } from '@/app/api/data'
import { Icon } from '@iconify/react'
import Image from 'next/image'

const Services = () => {
  return (
      <section className='bg-section dark:bg-darklight py-16' id='services'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div
              className='flex gap-2 items-center justify-center'
              data-aos='fade-up'
              data-aos-delay='200'
              data-aos-duration='1000'>
            <span className='w-3 h-3 rounded-full bg-success'></span>
            <span className='font-medium text-midnight_text text-sm dark:text-white/50 uppercase'>
            Hizmet Alanlarımız
          </span>
          </div>
          <h2
              className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text text-center pt-7 pb-14 md:w-4/6 w-full m-auto dark:text-white'
              data-aos='fade-up'
              data-aos-delay='200'
              data-aos-duration='1000'>
            İşletmeniz ve Binalarınız İçin Profesyonel Çözümler
          </h2>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
            {/* Servicebox mapping kısmı aynı kalacak, çünkü data.tsx'i Türkçeleştirdik */}
            {Servicebox.map((item, index) => (
                // ... buradaki kodlar aynı ...
                <div
                    key={index}
                    // ... classlar aynı ...
                >
                  <div className="mb-6">
                    {/* ... icon ve başlıklar aynı ... */}
                    <h3 className='text-2xl font-bold text-midnight_text dark:text-white mb-4'>
                      {item.title}
                    </h3>
                    <p className='text-grey dark:text-white/60 text-base leading-relaxed'>
                      {item.description}
                    </p>
                  </div>
                  <Link
                      href={`/services/${item.slug}`}
                      className='inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300'>
                    İncele
                    <Icon icon='solar:arrow-right-outline' width='20' height='20' />
                  </Link>
                </div>
            ))}
          </div>
        </div>
      </section>
  )
}
export default Services