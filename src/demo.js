import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from './actions';   

class Demo extends Component {
    
    componentDidMount() {
        this.props.setFeaturedContent();
    }

    render() { 
        
  console.log("featured content", this.props.featuredContent)
        return ( 
            <div>
                <h1>DEMO COMPONENT GOES HERE</h1>
            </div>
         );
    }
}
function mapStateToProps (state) {
    const { featuredContent } = state.fContentReducer;
    return {
        featuredContent
    }
    
}

Demo = connect(mapStateToProps, actions)(Demo);
 
export default Demo;