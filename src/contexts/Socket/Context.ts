import React, { createContext } from "react";
import { Socket } from "socket.io-client";
import { IData, IWeather, IHistory, IConfig } from "../../views/Dashboard/types";
import { defaultConfig } from "../../views/Dashboard/Dashboard";

export  interface ISocketContextState {
    socket : Socket | undefined;
    uid : string;
    data : IData | undefined;
    weather : IWeather | undefined;
    history : IHistory | undefined;
    config : IConfig | undefined;
}

export const defaultSocketContextState : ISocketContextState = {
    socket: undefined,
    uid : '',
    data : undefined,
    weather : undefined,
    history : undefined,
    config : undefined,
}

export type TSocketContextActions = 'update_socket' | 'update_uid' | 
    'update_data' | 'update_config' | 'update_history' | 'update_weather';

export type TSocketContextPayload = string | Socket | IData | IWeather | IHistory | IConfig;

export interface ISocketContextActions {
    type: TSocketContextActions;
    payload : TSocketContextPayload
}

export const SocketReducer = (state: ISocketContextState, action: ISocketContextActions) =>{
    switch(action.type){
        case 'update_socket':
            return { ...state, socket: action.payload as Socket};
        case 'update_uid':
            return { ...state, uid: action.payload as string};
        case 'update_data':
            return { ...state, data: action.payload as IData};
        case 'update_config':
            return { ...state, config : action.payload as IConfig};
        case 'update_weather':
            return { ...state, weather : action.payload as IWeather};
        case 'update_history':
            return { ...state, history : action.payload as IHistory};
        default:
            return { ...state };
    }
}

export interface ISocketContextProps {
    SocketState: ISocketContextState;
    SocketDispatch: React.Dispatch<ISocketContextActions>
}

const SocketContext = createContext<ISocketContextProps>({
    SocketState: defaultSocketContextState,
    SocketDispatch: () => {}
});

export const SocketContextConsumer = SocketContext.Consumer;
export const SocketContextProvider = SocketContext.Provider;

export default SocketContext;