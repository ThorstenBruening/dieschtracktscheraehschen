import React from "react"
import ReactDOM from "react-dom"

import "./styles.css"

function App() {
	const opptschickt = {
		vorname: "Hans",
		nachname: "Meiser",
		adresse: {
			strasse: "Wallrafplatz 5",
			plz: "50667",
			ort: "Köln",
		},
	}

	return (
		<div className="App">
			<h1>Die Schtracktscheraehschen</h1>
			<h2>Itz Mettschik!</h2>
			OpptSchickt: {JSON.stringify(opptschickt, null, 4)}
		</div>
	)
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
