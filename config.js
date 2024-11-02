const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.fm/u/kgstbqkgzp" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254115126197";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.fm/u/kgstbqkgzp" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_09_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTUsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDY5LFxuICAgICAgICAxODMsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzIsXG4gICAgICAgIDc2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDUzLFxuICAgICAgICAyMixcbiAgICAgICAgMTI3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDU0LFxuICAgICAgICAyOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk1LFxuICAgICAgICA1NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjExLFxuICAgICAgICAyOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQxLFxuICAgICAgICA4MixcbiAgICAgICAgNTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDgxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzksXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAwLFxuICAgICAgICA5OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDgzLFxuICAgICAgICA1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDMyLFxuICAgICAgICA3MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTksXG4gICAgICAgIDgyLFxuICAgICAgICA5MixcbiAgICAgICAgNTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgODksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDYsXG4gICAgICAgIDc4LFxuICAgICAgICAxNCxcbiAgICAgICAgOTksXG4gICAgICAgIDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDAsXG4gICAgICAgIDkwLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid0dPRmVDd3dxQWtPbFo3ZC9HQngyZitSc05TUGJkTkxaeTFzREUxb0N5MD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQxMTUxMjYxOTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjEzOUJENENBRjc5MjJBMzA5RkE5RTI5REE2OUI2ODExXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDUyNzc0NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIxV3M5YjE4NVJXR0ZaVXZoM0hEQUF3XCIsXG4gIFwicGhvbmVJZFwiOiBcImU1ODliNjZmLWRiNjAtNDczMi1hM2NhLTdkNTI3ZTY5ZWMwN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDIsXG4gICAgICAyMTEsXG4gICAgICAyMDgsXG4gICAgICAyMDQsXG4gICAgICA1LFxuICAgICAgMTEyLFxuICAgICAgMTQ4LFxuICAgICAgMjQxLFxuICAgICAgODIsXG4gICAgICA2NSxcbiAgICAgIDE3MyxcbiAgICAgIDMsXG4gICAgICAxMjYsXG4gICAgICAyMzUsXG4gICAgICAxNTAsXG4gICAgICAzNixcbiAgICAgIDIxNSxcbiAgICAgIDE3NixcbiAgICAgIDE3NyxcbiAgICAgIDE3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NyxcbiAgICAgIDgzLFxuICAgICAgMTkwLFxuICAgICAgMTkzLFxuICAgICAgMjUsXG4gICAgICAxNjAsXG4gICAgICAxNzIsXG4gICAgICAyMCxcbiAgICAgIDIxMCxcbiAgICAgIDEyMyxcbiAgICAgIDg3LFxuICAgICAgNjcsXG4gICAgICAyMjAsXG4gICAgICAxODIsXG4gICAgICAxNzYsXG4gICAgICAwLFxuICAgICAgMSxcbiAgICAgIDczLFxuICAgICAgMjE1LFxuICAgICAgMjUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhHOFA2OUNZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQxMTUxMjYxOTc6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwODE4NTk1Njc4NjI1ODoyNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPSE5tNzBDRVBlRGw3a0dHQklnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjF4NFc0elF4anI2WEdNekxiV1pKQTNaeS9Ud2hHbTRyVzArUEg5R3pEMGc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidTBKMm9oVXVHdVJCNU50NENtSW1MM0t6NGtUT0tWQ3NBeDZRZzBra2JRNE5kV0JOMVNWZnpWM2QyWUtsNFhNQllGUmxHV09TY1FWaXd6bGRLd091RHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwid3pUNk8vckhDNkdnMXVGelRtTVNmN1hza0tnckQwaEJGaFZaTDRxTXh6YnROVXJaTGFZWnFxNGtpRGcwRUtIWmlLMWFYYzNoQ3pQM0xjTFpoeWdyRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0MTE1MTI2MTk3OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDUyNzczOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURzVFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRHNULmpzb24iOiAie1wia2V5RGF0YVwiOlwiUHE0Mjh6SDIyZkowVjU3Qkt3S2g0T1E1d3VzUldVOEFBdHV0Wk0rVDZnTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NjUyNDk1MDUsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Retii-XMD",
  ownername:process.env.OWNER_NAME|| "Retii",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
