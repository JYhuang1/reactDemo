/**
 * Created by henry on 16/4/4.
 */
import React from 'react';
const Nav = React.createClass({
    render:function(){
        return(
            <a href={this.props.href} className={this.props.className}>
                <icon  className="iconfont">{this.props.icon}</icon>
                <p style={{fontSize:30}}>{this.props.name}</p>
            </a>
        );
    }
});
export default Nav;