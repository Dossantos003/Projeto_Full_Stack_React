import style from "./Card.module.css"
export default function Card ({title, stack1, stack2, stack3}) {
    return (
        <div className={style.card}>
            <h3 className={style.title}>{title}</h3>
            <div className={style.tech}>
                <div className={style.stack}>
                    <div className={style.circle}></div>
                    <p>{stack1}</p>
                </div>
                <div className={style.stack}>
                    <div className={style.circle}></div>
                    <p>{stack2}</p>
                </div>
                <div className={style.stack}>
                    <div className={style.circle}></div>
                    <p>{stack3}</p>
                </div>
            </div>
        </div>
    )
}