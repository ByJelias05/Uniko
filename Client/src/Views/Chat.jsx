import { Configuration } from "../Components/Configuration"
import { Conversations } from "../Components/conversations"
import Fondo from "../Images/Fondo-Chat.jpg"
import "../Styles/Chat.css"

export function Chat(){
    return(
        <div className="Contenedor-Chat">

            <div className="Fondo-Chat"></div>

            <div className="Paneles-Laterales">

                <div className="Configuracion">
                    <Configuration></Configuration>
                </div>

                <div className="Conversaciones">
                    <Conversations></Conversations>
                </div>

                <div className="Mensajes">

                </div>
            </div>

        </div>
    )
}