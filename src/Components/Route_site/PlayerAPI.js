//Օգտագործվող տվյալներ գտնվում են առանձին ֆայլում
//state-i փոխարեն

export  const PlayerAPI = {
	players: [
		{ number: 1, name: "Ben Blocker", position: "Systems programmer", salary:"105 239" },
		{ number: 2, name: "Dave Defender", position: "Software engineer", salary:"108 522" },
		{ number: 3, name: "Sam Sweeper", position: "Project leader", salary:"109 121" },
		{ number: 4, name: "Matt Midfielder", position: "Storage architect", salary:"112,967" },
		{ number: 5, name: "William Winger", position: "Mobile specialist", salary:"114,852" },
		{ number: 6, name: "Fillipe Forward", position: "Network architect", salary:"119 084" },
		{ number: 6, name: "Jho Doe", position: "Database architect", salary:"124 650" }
	],
	all: function () { return this.players },
	get: function (id) {
		const isPlayer = p => p.number === id
		return this.players.find(isPlayer)
	}
}