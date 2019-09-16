import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../css/Navbar.css'
import { Menu } from 'semantic-ui-react';


class Navbar extends React.Component{

    state ={
        activeItem: ''
    }

    static propTypes = {
        history: PropTypes.object.isRequired
    }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name }) 
        this.props.history.push(`/${name.toLowerCase()}`)
}
    render(){
        const { activeItem } = this.state
        return(
            <Menu id="tabMenu" tabular>
                <Menu.Item
                    id="tabItemLeft"
                    name="Resume"
                    active={activeItem === 'Resume'}
                    onClick = {this.handleItemClick}
                />
                <Menu.Item
                    id="tabItemLeft"
                    name="Projects"
                    active={activeItem === 'Projects'}
                    onClick = {this.handleItemClick}
                />
                <Menu.Item
                    id="tabItemLeft"
                    name="About"
                    active={activeItem === 'About'}
                    onClick = {this.handleItemClick}
                />
                <Menu.Item
                    id="tabItemRight"
                    position="right"
                    name="Contact"
                    active={activeItem === 'Contact'}
                    onClick = {this.handleItemClick}
                />
            </Menu>
        )
    }
}

export default withRouter(Navbar)