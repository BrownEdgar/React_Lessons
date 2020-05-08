// Player կոմպօնենտը նայելով URL-ում փոխանցած "number" արգումենտին նակրում է
// համապատասխան "developer"-ին։Եթե որևէ խաղացող համարը չի գտնվել ապա ցուցադրվում
// է «Ծրագրավորողը չի գտնվել» հաղորդագրությունը:
import React from 'react'
import {Link} from 'react-router-dom'
import {PlayerAPI} from '../PlayerAPI'
import s from "./Player.module.css";
import photo from '../../../img/anonim.jpeg'
import Text from './Text';
import $ from 'jquery'

export default function Player(props) {
    console.log('palyet')
    const developer = PlayerAPI.get(parseInt(props.match.params.number, 10))
    if (!developer) {
        return <div>Sorry, but this developer was not found</div>
	}
	const clickhandler = (e) =>{
		let x = e.pageX;
		let y = e.pageY;
		console.log(x);
		$('.Player_main__jT9V5').css({
			"background": `radial-gradient(circle at ${x}px ${y}px, transparent, #000 20%)`,
		})
	}
    return (
		<section className={s.main} onMouseMove={clickhandler}>
			<div className="light"></div>
			<div>
				<h2>About</h2>
				<h1>{developer.name}
                    (#{developer.number})</h1>
				<h2>Position: {developer.position}</h2>
				<h2>Salary: {developer.salary}</h2>
				<Link to='/roster'>Back</Link>
				<img src={photo} alt="Nkar" />
			</div>
				<hr/>
			<Text/>
        </section>
    )
}