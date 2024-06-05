import React, {useState} from "react";
import '../Popup.css'
import $ from 'jquery'


export default function Popup() {

    const [isOpen, setIsOpen] = useState(false)

    const openPopup = ()=>{
        setIsOpen(true);
        $('body').addClass('popup-aberto');
    }
    const closerPopup = ()=>{
        setIsOpen(false);
        $('body').removeClass('popup-aberto');
    }


    return (
        
        <div className="popup-body">
            <div className="abrir">
                <button className="btn-abrir" onClick={openPopup}>Importar pedidos</button>
            </div>
            {isOpen && (
                <div className="popup"> 
                    <div className="popup-content">
                        <button className="btn-x" onClick={closerPopup}>x</button>
                        <h2>Importar pedidos</h2>
                        <input type="date" className="input-date"></input>
                        <button className="btn-importar" onClick=''>Importar</button>  
                    </div>
                </div>
            )}
        </div>
    )
}
