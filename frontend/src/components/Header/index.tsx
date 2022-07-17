import icon from '../../assets/img/logo-icon.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={icon} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://github.com/FabTrindade"> FabTrindade</a>
                </p>
            </div>
        </header>

    )
}


export default Header