/* eslint-disable react-hooks/exhaustive-deps */
////////////////////////////////////////////////////////////////////////////////
//  About React Hooks: useEffect
//Navigator Object | navigator.onLine | navigator.language
// online, offline - ստուգել կարելի է ՝console՝-ի Network>offline բաժնում
////////////////////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from 'react'
import "../index.css"
// --- geolocation ---
const locationState = {
	latitude:null,
	longitude:null,
	speed:null,

}


export default function FinctionalApp() {
const [status, setStatus] = useState(navigator.onLine);
const [location, setLocation] = useState(locationState);
let mounted = true

	useEffect(() => {
		window.addEventListener("online", handleOnline);
		window.addEventListener("offline", handleOffline);
		// --- geolocation ---
		navigator.geolocation.getCurrentPosition(handleGeolocation)
		const id = navigator.geolocation.watchPosition(handleGeolocation)
		return () => {
			window.removeEventListener("online", handleOnline);
			window.removeEventListener("offline", handleOffline);
			//removeListener
			navigator.geolocation.clearWatch(id)
			mounted = false;
		};
	})
	const handleOnline = ()=>{
		setStatus(true)
	}
	const handleOffline = () => {
		setStatus(false)
	}
	// --- geolocation ---
	const handleGeolocation = (event) => {
		if (mounted) {
			setLocation({
				latitude: event.coords.latitude,
				longitude: event.coords.longitude,
				speed: event.coords.speed,
			})
		}
	}

	return (
		<div className="main">
			<h2>Network Status</h2>
			<p>We are <strong>{status ? "online" : "offline"}</strong></p>
			<hr />
			<h1>Geolocation</h1>
			<p>Latitude: {location.latitude}</p>
			<p>Longitude: {location.longitude}</p>
			<p>Speed: {location.speed ? location.speed : "0" }</p>
		</div>
		
	)
}

