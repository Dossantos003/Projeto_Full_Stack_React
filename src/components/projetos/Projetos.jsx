import Card from "../Card/Card";

export default function Projetos () {
    return (
        <section>
            <h2>Projetos</h2>
            <div>
                <Card title= "Projeto 01" 
                stack1="Html"
                 stack2="CSS"
                  stack3="JavaScript"/>
                <Card title= "Projeto 02" 
                stack1="React.js" 
                stack2="TailwindCSS" 
                stack3="Next.js"/>
            </div>
        </section>
    )
}