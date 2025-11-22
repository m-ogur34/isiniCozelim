import { getImgPath } from '@/utils/image';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {
    return (
        <Link href="/" className="flex items-center">
            {/* Light Mod (Aydınlık) Logosu */}
            <Image
                src={getImgPath("/images/logo/luxury-solutions-logo.png")}
                alt="Solution Grup Logo"
                // Genişlik ve Yükseklik değerlerini artırdık
                width={220}
                height={70}
                // h-12 yerine h-16 veya h-20 yaparak görünürlüğü artırıyoruz
                className='dark:hidden w-auto h-16 object-contain'
            />

            {/* Dark Mod (Karanlık) Logosu */}
            <Image
                src={getImgPath("/images/logo/luxury-solutions-logo.png")}
                alt="Solution Grup Logo"
                width={220}
                height={70}
                className='dark:block hidden w-auto h-16 object-contain'
            />
        </Link>
    );
};

export default Logo;