import React from 'react';
import './usuarios.css'
import axios from 'axios'
import {useState, useEffect} from 'react'

function Listar() {
    let [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
    axios.get('https://www.mocky.io/v2/5d531c4f2e0000620081ddce', {
        method: "GET",
    })
    .then((resp) => {setUsuarios(resp.data)})
    },[])
    
    return (
    <>
    {usuarios.map((u, index) => {
        return (
            <div className="container" key={"user"+index}>
                <div className="content">
                    <img src={u.img} alt=""></img>
                    <div className="text-user">
                        <p>Nome do usuário: {u.name}</p>
                        <p>ID: {u.id} - Username: {u.username}</p>
                    </div>
                    <button type="button">Pagar</button>
                </div>
            </div>
        )
    })}
    </>
    )
}
export default Listar;