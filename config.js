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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.fm/u/kgstbqkgzp" || "https://files.fm/u/kgstbqkgzp" ; // SET LOGO FOR IMAGE 
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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_45_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAzNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTY2LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgNjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDcsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTksXG4gICAgICAgIDk1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg5LFxuICAgICAgICA1NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI4LFxuICAgICAgICAxODIsXG4gICAgICAgIDQxLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDY5LFxuICAgICAgICA4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDM0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTExLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODksXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAzMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDM4LFxuICAgICAgICAzNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyLFxuICAgICAgICAxODksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzYsXG4gICAgICAgIDAsXG4gICAgICAgIDExLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyOSxcbiAgICAgICAgODIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTU5LFxuICAgICAgICA2NixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMCxcbiAgICAgICAgMixcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA5MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDUwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTk5LFxuICAgICAgICA0MixcbiAgICAgICAgNzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY1LFxuICAgICAgICAzNixcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk0LFxuICBcImFkdlNlY3JldEtleVwiOiBcInJwTGV2cERYTjJCWUJ6WXdib1B3WGxrSk0yaVcvZjlhT3c5L1R1dU56bWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0MTE1MTI2MTk3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCQTFCNDJBM0FGQUE0MUFFQkE5RDI2NTc0QjZDNTNGMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzA2MTYzNDVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiem40OU41ZUFTSWFWVFZhX0RUVUlnZ1wiLFxuICBcInBob25lSWRcIjogXCI0MzE0MzdmZC01ODI3LTQ5ZWYtYjNjZC1jMDM3MDhlNGY5MGFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAsXG4gICAgICA4NixcbiAgICAgIDY5LFxuICAgICAgNyxcbiAgICAgIDIxNyxcbiAgICAgIDExMyxcbiAgICAgIDEwLFxuICAgICAgMTk5LFxuICAgICAgMjM3LFxuICAgICAgMTQxLFxuICAgICAgMTM2LFxuICAgICAgOTksXG4gICAgICAzMCxcbiAgICAgIDE5NCxcbiAgICAgIDkyLFxuICAgICAgMTc0LFxuICAgICAgMTY4LFxuICAgICAgNTMsXG4gICAgICAxMTksXG4gICAgICAyNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk1LFxuICAgICAgNzMsXG4gICAgICAyMzksXG4gICAgICAxMixcbiAgICAgIDE0OCxcbiAgICAgIDYyLFxuICAgICAgMjM2LFxuICAgICAgMjUsXG4gICAgICAxOTMsXG4gICAgICA1MyxcbiAgICAgIDcwLFxuICAgICAgMjQ2LFxuICAgICAgMTYzLFxuICAgICAgNjYsXG4gICAgICA0MyxcbiAgICAgIDY3LFxuICAgICAgMjE2LFxuICAgICAgNjYsXG4gICAgICAxNzYsXG4gICAgICAxMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTEVDTE04U1FcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDExNTEyNjE5NzoyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA4MTg1OTU2Nzg2MjU4OjI4QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlJldGlp8J+YnPCfmItcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPSE5tNzBDRUkrNG5Ma0dHQllnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjF4NFc0elF4anI2WEdNekxiV1pKQTNaeS9Ud2hHbTRyVzArUEg5R3pEMGc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibm5pWjd5R1IzaUxyMjRjU2MvejJhbW1aNnVwRUxsMk5IRHRaaWhWMTFWZnU5N3k0ZjBIQmQzeUdYVURMMGlmQkcvUGoyaUh1WDBnWkZpOGxrSWpZQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOU1pU2F1YndrWTFaazI1cmFQVHJoT3FWclRnQXpPZjNCT01BWU5PSzJZR0ZiZXdXWUtjYVc4aFZoemJHdVVwRTU0YW1KVC9aRHI3UXVBSTlyWnc1QlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0MTE1MTI2MTk3OjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDYxNjM0MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURzVFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRHNULmpzb24iOiAie1wia2V5RGF0YVwiOlwiUHE0Mjh6SDIyZkowVjU3Qkt3S2g0T1E1d3VzUldVOEFBdHV0Wk0rVDZnTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NjUyNDk1MDUsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
