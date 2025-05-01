import './style.css'

export default function Profile({nome,idade,profissao,foto}){
    return(
        <>
        <h2 className='titulo'>Nome:{nome}</h2>
        <h3 className='idade'>Idade:{idade}</h3>
        <h3 className='profissao'>Profissão:{profissao}</h3>
        <img className='imagem' src={foto} />
        
        </>
    )
}