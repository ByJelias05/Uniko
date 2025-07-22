import "../Styles/ConversationScreen.css"
import foto from "../Images/image.png"
import { Tu_Mensaje } from "./Tu-Mensaje"
import { Mi_Mensaje } from "./Mi-Mensaje"

export function ConversationScreen(){
    return(
        <div className="Contenedor-ConversationScreen">
            <div className="Informacion-Conversacion">
                <div className="Foto-Receptor">
                    <img src={foto} alt="" />
                </div>
                <div className="Nombre-Estado">
                    <h1 className="Receptor">Jelias Garcia</h1>
                    <h3 className="Estado-Mensaje">Escribiendo...</h3>
                </div>
            </div>
            <div className="Contenedor-Mensajes">
                <div className="Mensajes">
                    <div>
                        <Tu_Mensaje Mensaje={"Hola ✌️"}/>
                    </div>
                    <Tu_Mensaje Mensaje={"Obtenga información sobre cómo usar el instalador de Visual Studio para instalar SQL Server Management Studio"}></Tu_Mensaje>
                    <div className="Mi">
                        <Mi_Mensaje Mensaje={"Hola"}></Mi_Mensaje>
                    </div>
                    <div className="Mi">
                        <Mi_Mensaje Mensaje={"Obtenga información sobre cómo usar el instalador de Visual Studio para instalar SQL Server Management Studio"}></Mi_Mensaje>
                    </div>
                    <Tu_Mensaje Mensaje={"Ok"}/>
                </div>
                <div className="Enviar-Mensajes">
                    <div className="Input">
                        <button className="Btn-Agregar">+</button>
                        <button className="Btn-Emoji">😂</button>
                        <input type="text" placeholder="Escribe un mensaje..."/>
                        <button className="Btn-Enviar"></button>
                    </div>
                </div>
            </div>
        </div>
    )
}