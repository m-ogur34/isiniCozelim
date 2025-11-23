import { getImgPath } from '@/utils/image';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {
    return (
        <Link href="/" className="flex items-center">
            {/* Light Mod (Aydınlık) Logosu */}
            <Image
                // BURAYI GÜNCELLEYİN: Yeni logo dosyanızın adı ile değiştirin
                src={getImgPath("/images/logo/luxury-solutions-logo.png")}
                alt="İşini Çözelim Logo"
                width={250}
                height={160}
                className='dark:hidden w-auto h-12 object-contain'
            />

            {/* Dark Mod (Karanlık) Logosu */}
            <Image
                // BURAYI GÜNCELLEYİN: Yeni logo dosyanızın adı ile değiştirin
                src={getImgPath("/images/logo/luxury-solutions-logo.png")}
                alt="İşini Çözelim Logo"
                width={250}
                height={160}
                className='dark:block hidden w-auto h-12 object-contain'
            />
        </Link>
    );
};

export default Logo;