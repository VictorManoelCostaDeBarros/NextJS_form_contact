import Header from './header'
import style from './index.module.css'


function Contato() {

    function sendForm(e) {
        e.preventDefault()
        // Fazer requisiçao no back-end e enviar o formulario.
        // recuperar os valores do input.

        let nome = document.getElementById('nome').value
        let email = document.getElementById('email').value
        let msg = document.getElementById('msg').value

        const requestOpitions = {
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({nome:nome, email:email, msg: msg})
        }

        fetch('http://localhost/nextjsapi/requisicao.php',requestOpitions)
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
        })

    }

    return (
    <div>
        <style jsx global>{`
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                background-color: rgb(225,225,225);
            }

            form {
                width: 40%;
                max-width: 500px;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                padding: 20px;
                background: white;
            }

            input[type=text], input[type=email] {
                width: 100%;
                height: 35px;
                display: block;
                margin-bottom: 15px;
                font-size: 15px;
                border: 1px solid #ccc;
                padding-left: 8px;
            }

            textarea {
                width: 100%;
                height: 120px;
                display: block;
                margin-bottom: 15px;
                font-size: 15px;
                border: 1px solid #ccc;
                padding: 8px;
                resize: none;  
            }

            input[type=submit] {
                width: 100%;
                height: 35px;
                background-color: #069;
                color: white;
                cursor: pointer;
                border: 0;
            }

            form h2 {
                text-align: center;
                padding: 10px 0;
                color: #069;

            }
        `}</style>
        <Header></Header>
        <form onSubmit={(e)=>sendForm(e)}>
            <h2>Entrar em contato</h2>
            <input id="nome" placeholder="Seu Nome..." type="text" />
            <input  id="email" placeholder="Seu E-mail..." type="email" />
            <textarea id="msg" placeholder="Sua menssagem..." ></textarea>
            <input value="Enviar!" type="submit" />
        </form>
    </div>)
}
  
export default Contato