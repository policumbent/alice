import React, { useEffect, useReducer } from 'react';
import { IHistory, IData, IWeather, IConfig } from 'views/Dashboard/types';
import { useSocket } from 'views/Dashboard/useSocket';
import { defaultSocketContextState, SocketContextProvider, SocketReducer } from './Context';

export interface ISocketContextComponentProps {}

const SocketContextComponent : React.FunctionComponent<ISocketContextComponentProps> = (props) => {
    const { children } = props;
    let data: IData;
    let history : IHistory;
    let weather : IWeather;
    let config : IConfig;

    const [SocketState, SocketDispatch] = useReducer(SocketReducer, defaultSocketContextState);
    //loading

    const socket = useSocket('ws://localhost:1337', {
        reconnectionAttempts : Infinity,
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
    });

    const startListeners = () => {
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

        socket.on('update data', (new_data : string) => {
            //TODO: data = toIData(data);
            //TODO: history = updateHistory(data, history);
            SocketDispatch({type: 'update_data', payload: data});
            SocketDispatch({type: 'update_history', payload: history});
        });

        socket.on('update weather', (new_weather : string) => {
            //TODO weather = toIWeather(new_weather);
            SocketDispatch({type: 'update_weather', payload: weather});
        });

        socket.on('update config', (new_config : string) => {
            // TODO config = toIConfig(new_config);
            SocketDispatch({type: 'update_config', payload: config});
        });
    };

    const sendHandshake = () => {
        console.info('Handshaking...');

        socket.emit('handshake', (uid: string) => {
            console.log('User handshake callback message received');
            SocketDispatch({type: 'update_uid', payload: uid});

            //setLoading(false);
        });
    };

    return <SocketContextProvider value={{SocketState, SocketDispatch}}>
        {children}
    </SocketContextProvider>;
};