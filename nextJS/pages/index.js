import Link from 'next/link'
import style from './index.module.css'
import Header from './header'

function HomePage() {
    return ( 

    <div>
        <style jsx global>{`
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
        `}</style>
        <Header></Header>
    </div>)
}
  
export default HomePage