import React from 'react';
import './usuarios.css'
import axios from 'axios'
import {useState, useEffect} from 'react'
import $ from 'jquery';
import 'jquery-mask-plugin/dist/jquery.mask.min.js';

//função para listar realizar o GET e listar os usuarios
function Listar() {

    $(document).ready(function(){
        $('#valor').mask('#.##0,00', {reverse: true});
    });
    function reload(){
        window.location.reload();
    }
    //variavel que está alocando os usuarios
    let [usuarios, setUsuarios] = useState([]);
    let [showModal, setShowModal] = useState(false);
    let [usuarioSelecionado, setUsuarioSelecionado] = useState({})

    //relizando GET do mocky
    useEffect(() => {
    axios.get('https://www.mocky.io/v2/5d531c4f2e0000620081ddce', {
        method: "GET",
    })
    .then((resp) => {setUsuarios(resp.data)})
    },[])
    
    //variavel responsavel por realizar a chamada da modal"
    let mostraModal = (e, i) => {
        console.log(i);
        setUsuarioSelecionado(usuarios[i]);
        setShowModal(true);
    }

    //variavel reponsavel pelo array dos cartões
    let cards = [
        // valid card
        {
          card_number: '1111111111111111',
          cvv: 789,
          expiry_date: '01/18',
        },
        // invalid card
        {
          card_number: '4111111111111234',
          cvv: 123,
          expiry_date: '01/20',
        },
    ];
    // variavel responsavel por realizar a validação dos cartãos. Se for válido realiza o POST, 
    //e mostra a mensagem de pagamento concluido junto com o modal. 
    //Se for invalido ele mostra a mensagem de pagamento nao concluido no modal. 
    let [showModalRecibo, setShowModalRecibo] = useState(false);
    let validarTransacao = (e) => {
        e.preventDefault();
        let selectField = document.getElementById("selectCards").value;
        let valor = document.getElementById("valor").value;
        let paySuccess = document.getElementById("paySuccess");
        let payError = document.getElementById("payError");
        if(selectField === "card0"){
            axios.post('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989', {
                // card information
                card_number: "1111111111111111",
                cvv: 789,
                expiry_date: '01/18',
                // Destination User ID
                destination_user_id: usuarioSelecionado.id,
                // Value of the Transaction
                value: valor
            })
            setShowModalRecibo(true);
            payError.innerHTML = "";
        }
        else{
            setShowModalRecibo(true);
            paySuccess.innerHTML = "";
        }
    }

    //return responsavel por realizar o map dos usuarios, através de um map
    return (
    <>
        {usuarios.map((u, index) => {
            return (
                //div container responsavel pela estrutura e estilização dos dados que serão mostrados na página
                <div className="container" key={"user"+index}>
                    <div className="content">
                        <img src={u.img} alt=""></img>
                        <div className="text-user">
                            <p>Nome do usuário: {u.name}</p>
                            <p>ID: {u.id} - Username: {u.username}</p>
                        </div>
                        <button type="button" data-index={index} onClick={(e) => mostraModal(e, index)}>Pagar</button>
                    </div>
                </div>
            )
        })}
        {/*Div responsavel por realizar o fechamento do modal, ao clicar fora da area do modal*/}
        <div className="background-modal" style={{display: (showModal ? 'block' : 'none')}} onClick={() => {setShowModal(false); setShowModalRecibo();}}>
        </div>
        {/*div que contem o modal e todos os seus elementos (input,select,p,button)*/}
        <div className="modal-content" style={{display: (showModal ? 'block' : 'none')}}>
            <div className="modal-title">
                <p>Pagamento para <span>{usuarioSelecionado.name} </span></p>
            </div>
            <div className="content-form">
                <input id="valor" type="text" placeholder="R$ 0,00"></input>
                <select id="selectCards">
                    <option value="selecionarCartao">Selecionar o cartão</option>
                    {cards.map((c, index) => 
                        <option key={index} value={"card"+index}>Cartão com o final {c.card_number.substr(-4)}</option>
                    )}
                </select>
                <button type="button" onClick={(e) => validarTransacao(e)}>Pagar</button>
            </div>
        </div>
        {/*div responsavel por mostrar o modal de pagamento concluido ou pagamento nao concluido*/}
        <div className="modal-content" style={{display: (showModalRecibo ? 'block' : 'none')}}>
            
            <div className="modal-title">
                <p>Recibo de pagamento</p>
            </div>
            <div className="content-modal-pay">
                <p id="paySuccess">O pagamento foi concluído com sucesso!</p>
                <p id="payError">O pagamento não foi concluído com sucesso!</p>
                <button onClick={reload}>Fechar</button>
            </div>
            
        </div>
    </>
    )
}
export default Listar;