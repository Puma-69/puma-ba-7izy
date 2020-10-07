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



client.on('ready',async () => { console.log("Starting.."); let g = client.guilds.get("763499020521439242");/////𝐈𝐃 SERVER
                                                             let c = g.channels.get("763499020521439247"); /////ID CHANNEL
                                     if(c.type === 'voice') { c.join(); 
 setInterval(() => { if(!g.me.voiceChannel) c.join(); }, 1); } else 
 { console.log('Failed To Join: \n The Channel Type isn "Listeni_g."') } });

client.login("NzYzNDk4OTc5NzAxOTQ4NDM3.X34l1Q.TAaadki3tJu3bJXhDTQ0Z2ruk98");

const client2 = new Client({ disableEveryone: true });

client2.on('ready',async () => { console.log("Starting.."); let g = client2.guilds.get("763499020521439242");/////𝐈𝐃 SERVER
                                                             let c = g.channels.get("763499020521439247"); /////ID CHANNEL
                                     if(c.type === 'voice') { c.join(); 
 setInterval(() => { if(!g.me.voiceChannel) c.join(); }, 1); } else 
 { console.log('Failed To Join: \n The Channel Type isn "Listeni_g."') } });
client2.login("NzYzNTAxODUyMjgwMDk0Nzky.X34ogg.UlVoNyjsQq1yu1X3jjVBRYj-1yU");
