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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
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
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_04_10_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAzOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDkxLFxuICAgICAgICAyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDc2LFxuICAgICAgICA2MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDg4LFxuICAgICAgICA4MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMixcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTksXG4gICAgICAgIDgzLFxuICAgICAgICAzMixcbiAgICAgICAgNTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0NixcbiAgICAgICAgMTg3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDY4LFxuICAgICAgICA5MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA5LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNixcbiAgICAgICAgMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDQxLFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDczLFxuICAgICAgICAxMTYsXG4gICAgICAgIDM2LFxuICAgICAgICA4MixcbiAgICAgICAgMTE3LFxuICAgICAgICA1NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAzNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODIsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDM5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgODcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE1LFxuICAgICAgICAxMixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI2LFxuICAgICAgICA5MixcbiAgICAgICAgNDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzAsXG4gICAgICAgIDc0LFxuICAgICAgICA1NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1NixcbiAgICAgICAgODksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDksXG4gICAgICAgIDg5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDksXG4gICAgICAgIDkwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDg1LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwia2lUYWNGcTlNMUJTczBTU0dWbUZienZtL0lxRTkwdisyL1hZYzZMczg1TT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQxMTUxMjYxOTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkRDOUVGMkNBOTFEQzU0MDJCMjEyQjg5M0I1NTZEOEI1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyOTk4MDI0N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDExNTEyNjE5N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODU1OTFGNjg5REYzQTY3RjlDNzU3RThENTVFRkQzNERcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5OTgwMjQ5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIml1SEFEUTRZU04yMkZVUURyR1BfTVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTk1NTAxN2UtYmNhZS00YmUzLWJjNDUtMjE1ZDdhZGI2NjNlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU2LFxuICAgICAgMTY2LFxuICAgICAgMjQwLFxuICAgICAgMTMwLFxuICAgICAgMTQzLFxuICAgICAgNyxcbiAgICAgIDQ5LFxuICAgICAgMzEsXG4gICAgICAxNjUsXG4gICAgICAxMTksXG4gICAgICAyMjUsXG4gICAgICAxNDcsXG4gICAgICA0LFxuICAgICAgMjQ0LFxuICAgICAgMjIxLFxuICAgICAgMTk1LFxuICAgICAgMTkwLFxuICAgICAgMTEzLFxuICAgICAgNzQsXG4gICAgICAyNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI0LFxuICAgICAgMTI2LFxuICAgICAgOCxcbiAgICAgIDE4NCxcbiAgICAgIDIxNyxcbiAgICAgIDE3NSxcbiAgICAgIDEzNCxcbiAgICAgIDEzMSxcbiAgICAgIDE2NyxcbiAgICAgIDEwMCxcbiAgICAgIDEyLFxuICAgICAgMTg1LFxuICAgICAgMjEzLFxuICAgICAgMTE3LFxuICAgICAgNjksXG4gICAgICA5MixcbiAgICAgIDEwMSxcbiAgICAgIDk5LFxuICAgICAgNDgsXG4gICAgICAxMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUEJNMlJaMUpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDExNTEyNjE5NzoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA4MTg1OTU2Nzg2MjU4OjE1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlJldGlp8J+YnPCfmItcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPSE5tNzBDRU03TzliZ0dHQWtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjF4NFc0elF4anI2WEdNekxiV1pKQTNaeS9Ud2hHbTRyVzArUEg5R3pEMGc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwid3VxQzVKUmYzaFNnRkpsUFRHYUV5MkZyYXNxZXNOWGduZ1B4NGtFeitRMXhmYWxuZDdqdnZuSHM0M1dId0kvRUxERVFoQldpUE5jYU5FREFLUkR0Qmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidU9TVFY4cEdZS1RMUHlHSWhhYTdneEs0Y2tlWVJuRmVkVVVIMGxJMldJR0oyd1hHbzY2TmFhMVc2KzVpSHBob3ozdno5UFNzeDE0aWd4REVQT244QkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0MTE1MTI2MTk3OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTk4MDI0MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURzVFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRHNULmpzb24iOiAie1wia2V5RGF0YVwiOlwiUHE0Mjh6SDIyZkowVjU3Qkt3S2g0T1E1d3VzUldVOEFBdHV0Wk0rVDZnTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NjUyNDk1MDUsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Retii",
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
