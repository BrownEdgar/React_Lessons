import React, { useState } from 'react'
import Selectors from "./Selectors"
import Panel from "./Panel"
import '../App.css'

export default function App(props) {
	const [options, setoptions] = useState({
		activeID: 0,
		wraperStyle: {
			backgroundImage: `url('${props.data[0].img}')`
		},
		buttonHover: false,
		buttonStyle: {
			color: '#fff'
		},
		panelStyle: {
			background: props.data[0].colour
		}
	})

	function _changeActive(id) {

		setoptions({
			activeID: 0,
			wraperStyle: {
				backgroundImage: `url('${props.data[0].img}')`
			},
			buttonHover: false,
			buttonStyle: {
				color: '#fff'
			},
			panelStyle: {
				background: props.data[0].colour
			}
		})
	}
	function _buttonColour() {
		if (!options._buttonColour) {
	
				setoptions(prev => {
					return {
						...prev, buttonHover: true, buttonStyle: {
							color: props.data[options.activeID].colour
						}
					}
				})
	
		} else {
			setoptions(prev => {
				return { ...prev, buttonHover:false,
					buttonStyle:{
						color:"#fff"
					}}
			});
		}
	}
		return (
			<section
				className="wrapper"
				style={options.wrapperStyle}
			>
				<Selectors
					data={props.data}
					activeID={options.activeID}
					_changeActive={(id) => _changeActive(id)} />
				<Panel
					data={props.data[options.activeID]}
					panelStyle={options.panelStyle}
					buttonStyle={options.buttonStyle}
					_buttonColour={_buttonColour} />
			</section>
		)
	}
