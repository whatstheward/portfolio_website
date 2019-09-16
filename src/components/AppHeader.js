import React from 'react';
import '../css/AppHeader.css'
import { Grid, Header, Image } from 'semantic-ui-react';

class AppHeader extends React.Component{

    render(){
        return(
        <div id="mainHome">
            <div id="header">
            <img id ="headshot" src={require('../imgs/headshot.png')} />
            <Header id="name">Madeline Ward</Header>
            </div>
        </div>
        )
    }
}

export default AppHeader