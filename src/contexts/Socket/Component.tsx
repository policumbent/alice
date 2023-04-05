import React, { useEffect, useReducer, useState } from 'react';
import { IHistory, IData, IWeather, IConfig } from '../../views/Dashboard/types';
import { useSocket } from '../../views/Dashboard/useSocket';
import { defaultSocketContextState, SocketContextProvider, SocketReducer } from './Context';

export interface ISocketContextComponentProps {}

export const SocketContextComponent : React.FunctionComponent<ISocketContextComponentProps> = (props) => {
    const { children } = props;
    const [ history, setHistory ] = useState<IHistory>();

    const [SocketState, SocketDispatch] = useReducer(SocketReducer, defaultSocketContextState);
    //loading

    const socket = useSocket('ws://localhost:1337', {
        reconnectionAttempts : 5,
        reconnectionDelay: 5000,
        autoConnect: false,
    });

    useEffect(() => {
        // connect to the webSocket
        socket.connect();
        // set sid
        SocketDispatch({type: 'update_socket', payload: socket});
        // start listeners
        startListeners();
        // send handshake
        sendHandshake();
    }, []);

    const startListeners = () => {
        // connect
        socket.on('connect', () => {
            console.info('Connection on socket established');
        });
        // reconnect
        socket.io.on('reconnect', (attempt) => {
            console.info('Reconnected on attempt: ', attempt);
        });

        // reconnect attempt event
        socket.io.on('reconnect_attempt', (attempt)=>{
            console.info('Reconnection attempt: ', attempt);
        });

        // reconnection error
        socket.io.on('reconnect_error', (error) => {
            console.info('Error on reconnection: ', error);
        });

        // reconnection fail
        socket.io.on('reconnect_failed', () => {
            console.info('Reconnection failure');
            alert('Unable to reconnect to the socket');
        });

        socket.on('update data', (dataJSON : string) => {
            const data : IData = JSON.parse(dataJSON);
            // setHistory(updateHistory(data, history));
            SocketDispatch({type: 'update_data', payload: data});
            // SocketDispatch({type: 'update_history', payload: history});
        });

        socket.on('update weather', (JSONweather : string) => {
            const weather = JSON.parse(JSONweather);
            SocketDispatch({type: 'update_weather', payload: weather});
        });

        socket.on('update config', (JSONconfig : string) => {
            const config = JSON.parse(JSONconfig);
            SocketDispatch({type: 'update_config', payload: config});
        });
    };
    
    const sendHandshake = () => {};
    // const sendHandshake = () => {
    //     console.info('Handshaking...');

    //     socket.emit('handshake', (uid: string) => {
    //         console.log('User handshake callback message received');
    //         SocketDispatch({type: 'update_uid', payload: uid});

    //         //setLoading(false);
    //     });
    // };

    return <SocketContextProvider value={{SocketState, SocketDispatch}}>
        {children}
    </SocketContextProvider>;
};
