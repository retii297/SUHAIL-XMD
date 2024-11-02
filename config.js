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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.fm/u/kgstbqkgzp.jpg" || "https://files.fm/u/kgstbqkgzp.jpg" ; // SET LOGO FOR IMAGE 
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
global.userImages= process.env.USER_IMAGES || "https://files.fm/u/kgstbqkgzp.jpg" // "image" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_48_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU1LFxuICAgICAgICA3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIsXG4gICAgICAgIDc5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzcsXG4gICAgICAgIDE3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzNixcbiAgICAgICAgODYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNixcbiAgICAgICAgMTAzLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3LFxuICAgICAgICA4NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc4LFxuICAgICAgICA4NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDg3LFxuICAgICAgICA1NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTI5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjksXG4gICAgICAgIDM1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTksXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQzLFxuICAgICAgICA1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTksXG4gICAgICAgIDgxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDMxLFxuICAgICAgICA2OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4LFxuICAgICAgICAxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDgyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDkzLFxuICAgICAgICA5NixcbiAgICAgICAgNjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTksXG4gICAgICAgIDYsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgMTM3LFxuICAgICAgICA0NixcbiAgICAgICAgMjU1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDU3LFxuICAgICAgICAyNixcbiAgICAgICAgMTExLFxuICAgICAgICA0LFxuICAgICAgICA5NixcbiAgICAgICAgMzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE5LFxuICAgICAgICA1OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEsXG4gICAgICAgIDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDksXG4gICAgICAgIDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM2LFxuICAgICAgICA2MSxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQzhIbVdTWUFROVFQNFdtc2dibWNVbm9VOU5IZS9mNVpaSmZIM1d3RHdGST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQxMTUxMjYxOTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjEzOTA5REZDNEU2Qjc4RUVEM0MwQzk1MEY3RTI4MkMzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDU0ODExMVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvRWlZbGVRRVJsUy1sWUhDajBMbGhRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjYzZjJjMTgwLWRhYzAtNDVmYi04MjNhLWQ1ZDI0YjA1YjUwY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMixcbiAgICAgIDIzNyxcbiAgICAgIDEwNyxcbiAgICAgIDU0LFxuICAgICAgMTY2LFxuICAgICAgMjUxLFxuICAgICAgMzAsXG4gICAgICA1NCxcbiAgICAgIDI1NSxcbiAgICAgIDE1MCxcbiAgICAgIDIsXG4gICAgICA2NCxcbiAgICAgIDExMyxcbiAgICAgIDEzNyxcbiAgICAgIDE3LFxuICAgICAgMjUyLFxuICAgICAgMzQsXG4gICAgICAxNTUsXG4gICAgICAzOSxcbiAgICAgIDE1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NSxcbiAgICAgIDQxLFxuICAgICAgMjQ5LFxuICAgICAgMjksXG4gICAgICAxNDksXG4gICAgICA0LFxuICAgICAgNTAsXG4gICAgICAxMjksXG4gICAgICAzMyxcbiAgICAgIDEwNixcbiAgICAgIDEwNCxcbiAgICAgIDE2MyxcbiAgICAgIDI1MSxcbiAgICAgIDYxLFxuICAgICAgNTcsXG4gICAgICAzNyxcbiAgICAgIDQ3LFxuICAgICAgMTAxLFxuICAgICAgMjAxLFxuICAgICAgNjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR1JLMUQ4S05cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDExNTEyNjE5NzoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA4MTg1OTU2Nzg2MjU4OjI1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09ITm03MENFSWFqbUxrR0dCTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMXg0VzR6UXhqcjZYR016TGJXWkpBM1p5L1R3aEdtNHJXMCtQSDlHekQwZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEUnFBNGgyZFF0S0N2V2ZpKzZqTG1FWVFuZHlsVmw2R1g3TDRHZjFHTytidnQxeUIrRkhmcmd0eHFPUlptblVqUjJDSnk2eVI0WkRtNXVQYWdWTE5Cdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJGamh2TDZRTldiOGQ2ZEc1WDJ0dVNSbm45S1hCd090WmJVZktPYUVMd3hNeDdDZWhWZHVmcnJJZE1KaU54Nk9nY3lYV1JjQXJIUXhYR1ppWERucDRCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQxMTUxMjYxOTc6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNTQ4MTA1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRHNUXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEc1QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJQcTQyOHpIMjJmSjBWNTdCS3dLaDRPUTV3dXNSV1U4QUF0dXRaTStUNmdNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY2NTI0OTUwNSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Retii😌",
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
  LANG: ( process.env.THEME ||  "Retii"  ).toUpperCase(),



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
