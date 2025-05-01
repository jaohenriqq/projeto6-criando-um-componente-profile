
import Profile from "./components/Profile"
import assets1 from "./assets/jao.jpg"
import assets2 from "./assets/guga.jpg"
import assets3 from "./assets/thierrys.jpg"

export default function App() {
    return (
        <>

            <h1 className="titulo2">TechVision</h1>
            <hr />
            <Profile
                nome='Joao Henrique'
                idade='18'
                profissao='Programador front-end'
                foto={assets1}
            />
            <hr />
            <Profile
                nome='Berckson Thierry'
                idade='18'
                profissao=' Programador back-end'
                foto={assets3}
            />
            <hr />
            <Profile
                nome='Gustavo Texeira'
                idade='18'
                profissao='Tira dinheiro dos devs que trabalha com ele'
                foto={assets2}

            />

            <>
            <div className="footer">
                2025 TechVison. <br />Inovando o futuro da tecnologia.Todos os direitos reservados
                </div>

            </>
        </>
    )
}