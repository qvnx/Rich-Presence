// Imports
const rpc = require('discord-rpc');
const config = require('./config.json');
const client = new rpc.Client({
   transport: 'ipc'
})

// Console Presets
const spacer = `   `;

// Startup Output
console.log("Starting up ..");
console.log(spacer + "Gathering Login & Authentication ..");

// On-ready Function
client.on('ready', () => {
   console.log(spacer + spacer + "Authorized via", client.user.username + '#' + client.user.discriminator);
   console.log(spacer + "Presence ..");
   client.request("SET_ACTIVITY", {
			pid: process.pid,
			activity: {
				// Client Config
				details: config.description,
				state: config.state,
				assets: {
					large_image: config.largeImage.image,
					large_text: config.largeImage.tooltip,
					small_image: config.smallImage.image,
					small_text: config.smallImage.tooltip,
				},
				// Button Config
				buttons: [
					{
						label: config.button1.text,
						url: config.button1.redirect,
					},
					{
						label: config.button2.text,
						url: config.button2.redirect,
					},
				],
			},
		});
	console.log(spacer + spacer + "*  Loaded [/presence]"); // Presence
	console.log(spacer + spacer + "*  Loaded [/assets]"); // Assets
	console.log(spacer + spacer + "*  Loaded [/short-description]"); // Details
	console.log(spacer + spacer + "*  Loaded [/short-state]"); // State
   console.log(spacer + spacer + "*  Loaded [/buttons]"); // Buttons
   console.log(spacer + spacer + "Presence Ready");
});

// Starts up the presence
client.login(
   { clientId: config.clientID }
).catch(console.error); // Catches any errors and outputs them