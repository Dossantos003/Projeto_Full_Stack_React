import Button from "../button/Button"
import Icone from "../icone/Icone"
import style from "./Hero.module.css"
export default function Hero() {
    return (
        <section className={style.hero}>
            <div>
                <h1 className={style.title}>Desenvolvedor Full Stack</h1>
                <p className={style.paragraph}>Criando aplicações web belas e de alto desempenho com tecnologias modernas. Apaixonado por código limpo e experiências de usuário excepcionais.</p>
            </div>
            <div className= {style.btns}>
                <Button texto="Entre em contato"/>
                <Button texto="Ver Projetos"/>
            </div>
            <div className= {style.btns}>
                <Icone/>
                <Icone/>
                <Icone/>
            </div>
        </section>
    )
}