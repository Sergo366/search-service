import Link from "next/link";
import {ServerIcon, UserCircleIcon} from "@heroicons/react/16/solid";
import UkraineFlag from '../../shared/images/ukraine-flag-icon.svg'
import Image from 'next/image'
import {Path} from "@/components/MainHeader/const";

const HeaderPage = () => {
    return (
        <header className="p-4 flex justify-center" style={{backgroundColor: `#00c3a5`}}>
            <ul className={'max-w-7xl flex gap-5 justify-center items-center'}>
                <li>
                    <Link href={Path.Home} className={'flex flex-col items-center'}>
                        <ServerIcon height={40} width={40}/>
                        Search Service
                    </Link>
                </li>
                <li className={'flex gap-1 hover:text-gray-200'}>
                    <Link href={Path.GiveJob}>
                        Пропуную роботу
                    </Link>
                </li>
                <li className={'flex gap-1 hover:text-gray-200'}>
                    <Link href={Path.DataSecurity}>
                        Безпека данних
                    </Link>
                </li>
                <li className={'flex gap-1 hover:text-gray-200'}>
                    <Link href={Path.AskMaster}>
                        Спитай свого майстра
                    </Link>
                </li>
                <li className={'flex gap-1'}>
                    <Image src={UkraineFlag as string} width={30} alt={'ukraine-flag'}/>
                    UA
                </li>
                <li className={'flex gap-1 hover:text-gray-200'}>
                    <Link href={Path.Registration}>
                        Реєстрація
                    </Link>
                </li>
                <li className={'flex gap-1 hover:text-gray-200'}>
                    <Link href={Path.Login} className={'flex gap-1'}>
                        <UserCircleIcon height={20} width={20}/>
                        Увійти
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default HeaderPage;