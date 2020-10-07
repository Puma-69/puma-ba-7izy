const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyAXaeBh837k38o_lwSADet8UTO7X21DGsY"); //تعديل اساسي سوي اي بي اي جديد
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyAXaeBh837k38o_lwSADet8UTO7X21DGsY"; ///تعديل اساسي سوي اي بي اي جديد
const pretty = require("pretty-ms");
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");

client.on("ready", async () => {
  console.log("Starting..");
  let g = client.guilds.get("763499020521439242"); /////𝐈𝐃 SERVER
  let c = g.channels.get("763499020521439247"); /////ID CHANNEL
  if (c.type === "voice") {
    c.join();
    setInterval(() => {
      if (!g.me.voiceChannel) c.join();
    }, 1);
  } else {
    console.log('Failed To Join: \n The Channel Type isn "Listeni_g."');
  }
});

client.login("");

const client2 = new Client({ disableEveryone: true });

client2.on("ready", async () => {
  console.log("Starting..");
  let g = client2.guilds.get("763499020521439242"); /////𝐈𝐃 SERVER
  let c = g.channels.get("763499020521439247"); /////ID CHANNEL
  if (c.type === "voice") {
    c.join();
    setInterval(() => {
      if (!g.me.voiceChannel) c.join();
    }, 1);
  } else {
    console.log('Failed To Join: \n The Channel Type isn "Listeni_g."');
  }
});
client2.login("");

const client3 = new Client({ disableEveryone: true });

client3.on("ready", async () => {
  console.log("Starting..");
  let g = client3.guilds.get("763499020521439242"); /////𝐈𝐃 SERVER
  let c = g.channels.get("763499020521439247"); /////ID CHANNEL
  if (c.type === "voice") {
    c.join();
    setInterval(() => {
      if (!g.me.voiceChannel) c.join();
    }, 1);
  } else {
    console.log('Failed To Join: \n The Channel Type isn "Listeni_g."');
  }
});
client3.login("");

const client4 = new Client({ disableEveryone: true });

client4.on("ready", async () => {
  console.log("Starting..");
  let g = client4.guilds.get("763499020521439242"); /////𝐈𝐃 SERVER
  let c = g.channels.get("763499020521439247"); /////ID CHANNEL
  if (c.type === "voice") {
    c.join();
    setInterval(() => {
      if (!g.me.voiceChannel) c.join();
    }, 1);
  } else {
    console.log('Failed To Join: \n The Channel Type isn "Listeni_g."');
  }
});
client4.login("");

const client5 = new Client({ disableEveryone: true });

client5.on("ready", async () => {
  console.log("Starting..");
  let g = client5.guilds.get("763499020521439242"); /////𝐈𝐃 SERVER
  let c = g.channels.get("763499020521439247"); /////ID CHANNEL
  if (c.type === "voice") {
    c.join();
    setInterval(() => {
      if (!g.me.voiceChannel) c.join();
    }, 1);
  } else {
    console.log('Failed To Join: \n The Channel Type isn "Listeni_g."');
  }
});
client5.login("");

const client6 = new Client({ disableEveryone: true });

client6.on("ready", async () => {
  console.log("Starting..");
  let g = client6.guilds.get("763499020521439242"); /////𝐈𝐃 SERVER
  let c = g.channels.get("763499020521439247"); /////ID CHANNEL
  if (c.type === "voice") {
    c.join();
    setInterval(() => {
      if (!g.me.voiceChannel) c.join();
    }, 1);
  } else {
    console.log('Failed To Join: \n The Channel Type isn "Listeni_g."');
  }
});
client6.login("");

const client7 = new Client({ disableEveryone: true });

client2.on("ready", async () => {
  console.log("Starting..");
  let g = client7.guilds.get("763499020521439242"); /////𝐈𝐃 SERVER
  let c = g.channels.get("763499020521439247"); /////ID CHANNEL
  if (c.type === "voice") {
    c.join();
    setInterval(() => {
      if (!g.me.voiceChannel) c.join();
    }, 1);
  } else {
    console.log('Failed To Join: \n The Channel Type isn "Listeni_g."');
  }
});
client7.login("");
const client8 = new Client({ disableEveryone: true });

client8.on("ready", async () => {
  console.log("Starting..");
  let g = client8.guilds.get("763499020521439242"); /////𝐈𝐃 SERVER
  let c = g.channels.get("763499020521439247"); /////ID CHANNEL
  if (c.type === "voice") {
    c.join();
    setInterval(() => {
      if (!g.me.voiceChannel) c.join();
    }, 1);
  } else {
    console.log('Failed To Join: \n The Channel Type isn "Listeni_g."');
  }
});
client8.login("");
const client9 = new Client({ disableEveryone: true });

client9.on("ready", async () => {
  console.log("Starting..");
  let g = client9.guilds.get("763499020521439242"); /////𝐈𝐃 SERVER
  let c = g.channels.get("763499020521439247"); /////ID CHANNEL
  if (c.type === "voice") {
    c.join();
    setInterval(() => {
      if (!g.me.voiceChannel) c.join();
    }, 1);
  } else {
    console.log('Failed To Join: \n The Channel Type isn "Listeni_g."');
  }
});
client9.login("");

const client10 = new Client({ disableEveryone: true });

client10.on("ready", async () => {
  console.log("Starting..");
  let g = client10.guilds.get("763499020521439242"); /////𝐈𝐃 SERVER
  let c = g.channels.get("763499020521439247"); /////ID CHANNEL
  if (c.type === "voice") {
    c.join();
    setInterval(() => {
      if (!g.me.voiceChannel) c.join();
    }, 1);
  } else {
    console.log('Failed To Join: \n The Channel Type isn "Listeni_g."');
  }
});
client10.login("");

const client11 = new Client({ disableEveryone: true });

client11.on("ready", async () => {
  console.log("Starting..");
  let g = client11.guilds.get("763499020521439242"); /////𝐈𝐃 SERVER
  let c = g.channels.get("763499020521439247"); /////ID CHANNEL
  if (c.type === "voice") {
    c.join();
    setInterval(() => {
      if (!g.me.voiceChannel) c.join();
    }, 1);
  } else {
    console.log('Failed To Join: \n The Channel Type isn "Listeni_g."');
  }
});
client11.login("");

const client12 = new Client({ disableEveryone: true });

client12.on("ready", async () => {
  console.log("Starting..");
  let g = client12.guilds.get("763499020521439242"); /////𝐈𝐃 SERVER
  let c = g.channels.get("763499020521439247"); /////ID CHANNEL
  if (c.type === "voice") {
    c.join();
    setInterval(() => {
      if (!g.me.voiceChannel) c.join();
    }, 1);
  } else {
    console.log('Failed To Join: \n The Channel Type isn "Listeni_g."');
  }
});
client12.login("");

const client13 = new Client({ disableEveryone: true });

client13.on("ready", async () => {
  console.log("Starting..");
  let g = client13.guilds.get("763499020521439242"); /////𝐈𝐃 SERVER
  let c = g.channels.get("763499020521439247"); /////ID CHANNEL
  if (c.type === "voice") {
    c.join();
    setInterval(() => {
      if (!g.me.voiceChannel) c.join();
    }, 1);
  } else {
    console.log('Failed To Join: \n The Channel Type isn "Listeni_g."');
  }
});
client13.login("");

const client14 = new Client({ disableEveryone: true });

client14.on("ready", async () => {
  console.log("Starting..");
  let g = client14.guilds.get("763499020521439242"); /////𝐈𝐃 SERVER
  let c = g.channels.get("763499020521439247"); /////ID CHANNEL
  if (c.type === "voice") {
    c.join();
    setInterval(() => {
      if (!g.me.voiceChannel) c.join();
    }, 1);
  } else {
    console.log('Failed To Join: \n The Channel Type isn "Listeni_g."');
  }
});
client14.login("");

const client15 = new Client({ disableEveryone: true });

client15.on("ready", async () => {
  console.log("Starting..");
  let g = client15.guilds.get("763499020521439242"); /////𝐈𝐃 SERVER
  let c = g.channels.get("763499020521439247"); /////ID CHANNEL
  if (c.type === "voice") {
    c.join();
    setInterval(() => {
      if (!g.me.voiceChannel) c.join();
    }, 1);
  } else {
    console.log('Failed To Join: \n The Channel Type isn "Listeni_g."');
  }
});
client15.login("");

const client16 = new Client({ disableEveryone: true });

client16.on("ready", async () => {
  console.log("Starting..");
  let g = client16.guilds.get("763499020521439242"); /////𝐈𝐃 SERVER
  let c = g.channels.get("763499020521439247"); /////ID CHANNEL
  if (c.type === "voice") {
    c.join();
    setInterval(() => {
      if (!g.me.voiceChannel) c.join();
    }, 1);
  } else {
    console.log('Failed To Join: \n The Channel Type isn "Listeni_g."');
  }
});
client16.login("");

const client17 = new Client({ disableEveryone: true });

client17.on("ready", async () => {
  console.log("Starting..");
  let g = client17.guilds.get("763499020521439242"); /////𝐈𝐃 SERVER
  let c = g.channels.get("763499020521439247"); /////ID CHANNEL
  if (c.type === "voice") {
    c.join();
    setInterval(() => {
      if (!g.me.voiceChannel) c.join();
    }, 1);
  } else {
    console.log('Failed To Join: \n The Channel Type isn "Listeni_g."');
  }
});
client17.login("");
