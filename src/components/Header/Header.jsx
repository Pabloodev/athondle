import './Header.css'
import photo from  '../../assets/athon-logo.jpg'
import { CloudSnow } from 'lucide-react'

export default function Header() {
    return (
        <div className="header">
            <img className="imgLogo" src={photo} alt="" />
            <h1 className="textLogo">Quem sou eu?</h1>
        </div>
    )
}