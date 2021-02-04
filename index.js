// Imports
const rpc = require('discord-rpc');
const config = require('./config.json');
const client = new rpc.Client({
	transport: 'ipc'
})

// Console Presets
const spacer = `   `;

// Enabled / Disabled

Buttons = Boolean(config.buttons);
if (config.buttons == 'false') {
	var x = 0
} else if (config.buttons == 'true') {
	var x = 1
}

// External Stuff
time = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');

// Startup Output
console.log("Starting up ..");
console.log(spacer + "Gathering Login & Authentication ..");

// On-ready Function
client.on('ready', () => {
	console.log(
		spacer + spacer + "Authorized via",
		client.user.username + "#" + client.user.discriminator
	);
	console.log(spacer + "Presence ..");

	if (x === 0) {
		client.clearActivity;
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
			},
		});
	} else if (x === 1) {
		client.clearActivity;
		client.request("SET_ACTIVITY", {
			pid: process.pid,
			activity: {
				// Client Config
				details: config.description,
				state: config.state,
				timestamps: {
					start: Date.now() + 5 * 60,
				},
				assets: {
					large_image: config.largeImage.image,
					large_text: config.largeImage.tooltip,
					small_image: config.smallImage.image,
					small_text: config.smallImage.tooltip,
				},
				// Button Config
				buttons: [{
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
	} else {
		console.log(
			spacer +
				spacer +
				"*  Invalid toggle value in config. This error appeared due to [Enable/Disable] not appearing properly under [Buttons?] / [TimeElapsed?]."
		);
	}
	console.log(spacer + spacer + "*  Loaded [/ Dependencies]"); // Presence
	console.log(spacer + spacer + "*  Loaded [/ Required Assets]"); // Assets
	if (t !== 0) {
		console.log(spacer + spacer + "*  Loaded [/ Time Elapsed]"); // Time Elapsed
	}
	if (x !== 0) {
		console.log(spacer + spacer + "*  Loaded [/ Buttons]"); // Buttons
		console.log(spacer + spacer + spacer + "^  Verified Redirects"); // Buttons
	}
	console.log("*  Presence Ready!");
	console.log(spacer + "*  Running since " + `[${time}]`); // Runtime
});

// Starts the presence
client.login({
	clientId: config.ClientID
}).catch(console.error); // Error Squsher - catches errors and outputs them