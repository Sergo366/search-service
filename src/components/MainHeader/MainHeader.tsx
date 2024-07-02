import Link from "next/link";
import {ServerIcon, UserCircleIcon} from "@heroicons/react/16/solid";
import UkraineFlag from '../../shared/images/ukraine-flag-icon.svg'
import Image from 'next/image'

const HeaderPage = () => {
    return (
        <header className="p-4 bg-green">
            <ul className={'flex gap-52 justify-center items-center'}>
                <li>
                    <Link href={'/'}>
                        <ServerIcon height={40} width={40} />
                    </Link></li>
                <li>
                    <Link href={'/login'} className={'flex gap-1'}>
                        <UserCircleIcon height={20} width={20} />
                        Зареєструватись/Увійти
                    </Link>
                </li>
                <li className={'flex gap-1'}>
                    <Image src={UkraineFlag as string} width={30} alt={'ukraine-flag'} />
                    UA
                </li>
            </ul>
        </header>
    )
}

export default HeaderPage;