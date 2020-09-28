import Header from './header'
import style from './index.module.css'


function Sobre() {
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
        <h2>Pagina Sobre</h2>
    </div>)
}
  
export default Sobre