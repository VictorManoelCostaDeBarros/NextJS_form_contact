import Link from 'next/link'

import style from './index.module.css'


function Header() {
    return <div className={style.header}>
        <Link href="/">
        <a className={style.link}>Home</a>
        </Link>

        <Link href="/sobre">
        <a className={style.link}>Sobre</a>
        </Link>
        <Link href="/contato">
        <a className={style.link}>Conato</a>
        </Link>
    </div>
}
  
export default Header