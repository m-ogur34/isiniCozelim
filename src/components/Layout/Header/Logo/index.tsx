import { getImgPath } from '@/utils/image';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {
    return (
        <Link href="/" className="flex items-center">
            {/* Light Mod (Aydınlık) Logosu */}
            <Image
                src={getImgPath("/images/logo/isini-cozelim-logo.png")}
                alt="İşini Çözelim Logo"
                width={180} // Genişlik değerini biraz düşürdük
                height={60} // Yükseklik değerini oranladık
                // GÜNCELLEME: 'h-32' yerine 'h-12' yapıldı.
                className='dark:hidden w-auto h-12 object-contain'
            />

            {/* Dark Mod (Karanlık) Logosu */}
            <Image
                src={getImgPath("/images/logo/isini-cozelim-logo-white.png")}
                alt="İşini Çözelim Logo"
                width={180}
                height={60}
                // GÜNCELLEME: 'h-32' yerine 'h-12' yapıldı.
                className='dark:block hidden w-auto h-12 object-contain'
            />
        </Link>
    );
};

export default Logo;