import React, {Component} from 'react';

const Context = React.createContext();

export class Provider extends React.Component{
    render(){
        return(
            <Context.Provider>

            </Context.Provider>
        )
    }
}