import Layout from "../components/Layout";
import io from "socket.io-client"
import {useEffect, useState} from "react";

const servidorWebsocket = 'http://localhost:8080';
const socket = io(servidorWebsocket);

export default function Websocket() {
    const [isConnected, setIsConnected] = useState(socket.connected)
    const [mensajes, setMensajes] = useState([] as { mensaje: string }[]);
    useEffect(
        () => {
            socket.on('connect', () => {
                setIsConnected(true);
                console.log('Si esta conectado');
            });
            socket.on('disconnect', () => {
                setIsConnected(false);
                console.log('No esta conectado');
            });
            socket.on('escucharEventoHola', (data: { mensaje: string }) => {
                const nuevoMensaje = {
                    mensaje: data.mensaje
                };
                setMensajes((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
            });
        },
        []
    )
    const enviarEventoHola = () => {
        const nuevoMensaje = {
            mensaje: 'Adrian'
        };
        socket.emit(
            'hola', // Nombre Evento
            nuevoMensaje, //  Datos evento
            (datosEventoHola) => { // Callback o respuesta del evefnto
                setMensajes((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
            }
        )
    }


    return (
        <>
            <Layout title="Formulario">
                <h1>Websockets</h1>
                <button className={'btn btn-success'} onClick={() => enviarEventoHola()}>Enviar evento hola</button>
                <ul>
                    {mensajes.map((mensaje, indice) => <li key={indice}>{mensaje.mensaje}</li>)}
                </ul>
            </Layout>
        </>
    )
}