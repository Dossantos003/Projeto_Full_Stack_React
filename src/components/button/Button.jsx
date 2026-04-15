import styles from "./Button.module.css"
export default function Button({texto}) {

    return (
        <a href="#" className={styles.btn}>{texto}</a>
    )
}