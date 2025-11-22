// Dosya: src/components/Layout/Footer/index.tsx

import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const Footer: FC = () => {
  return (
      <footer className='bg-darkmode relative z-1 border-t border-dark_border px-6'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='grid md:grid-cols-12 grid-cols-1 sm:grid-cols-12'>

            {/* Sol Taraf */}
            <div className='md:col-span-4 sm:col-span-6 col-span-12 sm:border-r border-b border-solid border-dark_border flex items-center sm:border-b-0 sm:min-h-25 py-10 shrink-0 '>
              <div className='sm:content-normal sm:text-start text-center content-center sm:w-auto w-full'>
                <Link href='/' className='md:block flex justify-center'>
                  <Image
                      src={getImgPath('/images/logo/luxury-solutions-logo.png')}
                      alt='Ogur Luxury Solutions Logo'
                      width={200}
                      height={60}
                      style={{ width: 'auto', height: 'auto' }}
                      quality={100}
                      className="object-contain dark:invert" // Logo dark modda görünmesi için invert eklenebilir veya beyaz logo kullanılmalı
                  />
                </Link>
                <h2 className='text-white py-10 text-[30px] leading-tight font-bold'>
                  Projeye Başlamaya <br/> Hazır mısınız?
                </h2>
                <Link
                    href='/contact'
                    className='px-9 py-3 rounded-lg bg-primary text-white hover:bg-blue-700 hover:shadow-none font-medium'>
                  Teklif Alın
                </Link>
              </div>
            </div>

            {/* Orta Kısım */}
            <div className='md:col-span-4 sm:col-span-6 col-span-12 sm:flex items-center sm:min-h-25 py-10 justify-center shrink-0 md:border-r border-b sm:border-b-0 border-solid border-dark_border'>
              <div className='flex flex-col md:items-start items-center'>
              <span className='text-lg font-bold text-white pb-4 inline-block'>
                Bize Ulaşın
              </span>
                <div className='pb-5 sm:block flex gap-2'>
                  <p className='text-base font-bold text-white'>Telefon</p>
                  <Link href='tel:02121234567' className='text-xl text-white/50 hover:text-white'>
                    0 (212) 123 45 67
                  </Link>
                </div>
                <div className='sm:block flex items-center gap-3'>
                  <p className='text-base font-bold text-white'>E-posta</p>
                  <Link href='mailto:info@ogurluxurysolutions.com' className='text-xl text-white/50 hover:text-white'>
                    info@ogurluxurysolutions.com
                  </Link>
                </div>

                <div>
                  <ul className='flex items-center gap-3 mt-[1.875rem]'>
                    <li className='group'>
                      <Link href='#'>
                        <Image src={getImgPath('/images/footer/facebook.svg')} alt="Facebook" width={25} height={25} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                    {/* Diğer ikonlar buraya */}
                  </ul>
                </div>
              </div>
            </div>

            <div className='md:col-span-4 col-span-12 border-t md:border-none border-solid border-dark_border sm:flex flex-col items-end justify-center md:min-h-25 py-10 shrink-0'>
              <div className='w-full sm:text-start text-center'>
    <span className='font-bold text-white pb-4 inline-block text-2xl'>
      E-Bülten
    </span>
                <p className='text-MistyBlue text-base pb-7 text-white/50'>
                  Yeniliklerden ve özel fırsatlardan haberdar olmak için abone olun.
                </p>

                <form className='flex flex-col sm:flex-row gap-2 w-full'>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      {/* Mail İkonu */}
                      <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                      </svg>
                    </div>
                    <input
                        type='email'
                        placeholder='E-posta adresiniz'
                        className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-primary focus:border-primary dark:bg-darkmode dark:border-dark_border dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary'
                        required
                    />
                  </div>
                  <button type='submit' className='text-white bg-primary hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 text-center dark:bg-primary dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors'>
                    Abone&nbsp;Ol
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='text-center gap-4 md:gap-0 flex-wrap p-7 border-t border-solid border-dark_border'>
          <div>
            <p className='text-base text-white/50'>
              © {new Date().getFullYear()} Tüm hakları saklıdır. <span className='text-white hover:text-primary cursor-pointer'>Ogur Luxury Solutions</span>
            </p>
          </div>
        </div>
      </footer>
  )
}

export default Footer