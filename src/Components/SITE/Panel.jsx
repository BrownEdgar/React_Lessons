import React from 'react';

class Panel extends React.Component {
	
	render() {
		return (
			<aside className="panel" style={this.props.panelStyle}>
				<h2 className="panel-header">{this.props.data.header}</h2>
				<p className="panel-info">{this.props.data.body}</p>
				<button className="panel-button"
					style={this.props.buttonStyle}
					onMouseEnter={this.props._buttonColour}
					onMouseLeave={this.props._buttonColour}>
					Read More
				</button>
			</aside>
		);
	}
}
export default Panel;
