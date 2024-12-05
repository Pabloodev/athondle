import './Header.css'
import logo from '/athon-logo.jpg'

export default function Header() {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <h1 className="textLogo">Quem sou eu?</h1>
        </div>
    )
}