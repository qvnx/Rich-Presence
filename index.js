// Imports
const rpc = require(`discord-rpc`);
const config = require(`./config.json`);
const client = new rpc.Client({
   transport: 'ipc'
})

// Presets
const spacer = `   `;

console.log("Starting up ..");
console.log(spacer + "Gathering Login ..");
client.login({
   clientId: config.clientID
}).catch(console.error);
console.log(spacer + spacer + "Logged in!");

console.log(spacer + "Client ..");
client.on('ready', () => {
   console.log(spacer + spacer + "Ready");
   console.log(spacer + "Presence ..");
   client.request('SET_ACTIVITY', {
      pid: process.pid,
      activity: {
         details: config.details,
         state: config.state,
         assets: {
            large_image: config.largeImage.image,
            large_text: config.largeImage.text,
            small_image: config.smallImage.image,
            small_text: config.smallImage.text,
         },
         buttons: [{
               label: config.button1.text,
               url: config.button1.link
            },
            {
               label: config.button2.text,
               url: config.button2.link
            }
         ]
      }
   })
   console.log(spacer + spacer + "*  Loaded [/presence]");
   console.log(spacer + spacer + "*  Loaded [/assets]");
   console.log(spacer + spacer + "*  Loaded [/interaction]");
   console.log(spacer + spacer + "Presence Ready");
   console.log(spacer);
   console.log(spacer);
   console.log(spacer);
   console.log(spacer);
   console.log(spacer);
});