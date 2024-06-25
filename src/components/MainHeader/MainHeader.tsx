import Link from "next/link";
import Image from 'next/image'
import mainIcon from  '../../shared/images/main.png'

const HeaderPage = () => {
    return (
        <header className="p-4 bg-green">
            <ul className={'flex gap-2 justify-center items-center'}>
                <li>
                    <Link href={'/'}>
                        <Image
                            src={mainIcon as string}
                            width={50}
                            height={50}
                            alt={'Main beautiful icon'}
                        />
                    </Link></li>
                <li><Link href={'/registration'}>Зареєструватись</Link></li>
                <li><Link href={'/login'}>Увійти</Link></li>
            </ul>
        </header>
    )
}

export default HeaderPage;