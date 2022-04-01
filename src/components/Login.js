import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [userName, setUserName] = useState("")
    const dispatch = useDispatch();

    const navigate = useNavigate()

    const submit = e =>{
        e.preventDefault();
        console.log(userName)
        dispatch( {
            type: "GET_USERNAME",
            payload: userName
        } )
        setUserName()
        navigate("/pokedex")
    }

    return (
        <div className='name'>
            <div className="imgen-pokedex"></div>
            <form action="" onSubmit={submit}>
                <h1 className='titulo-login'>¡Hola entrenador!</h1>
                <p className='parrafo-login'>Para poder comenzar, dame tu nombre</p>
                <input type="text" placeholder='Tu nombre...'
                value={userName}
                onChange={ e => setUserName(e.target.value)} />
                <button>Comenzar</button>
            </form>
            <footer>
                <div className='rojo'></div>
                <div className='negro'></div>
            </footer>
        </div>
    );
};

export default Login;