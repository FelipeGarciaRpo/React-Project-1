import { useState } from "react"

export default function Player({initialName, symbol, isActive, onChangeName}){
    const [playerName, setplayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick(){
        //setIsEditing(isEditing ? flase: true);
        //setIsEditing(!isEditing) react programa los cambios de estado a futuro, no son inst
        //por eso no es bueno este metodo de actualizar estados en base al estado anterior
        setIsEditing((editing) => !editing)
        if (isEditing) {
            onChangeName(symbol, playerName)
        }
        //configuracion del boton edit save
    }

    function handleChange(event){
        setplayerName(event.target.value);
        //guardar nombre del usuario 
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    //let btnCaption = "Edit";
    if (isEditing) {
        editablePlayerName = <input type="text" required value = {playerName} onChange={handleChange} />
        //btnCaption="Save"
    }

    return (
        <li className={isActive ? "active": undefined}>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ?  "Save" : "Edit"}</button>
          </li>
    )
}