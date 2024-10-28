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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_44_10_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyLFxuICAgICAgICA2NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk5LFxuICAgICAgICA0MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTA3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDY5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NixcbiAgICAgICAgOCxcbiAgICAgICAgMTMyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzksXG4gICAgICAgIDEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA3MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDMsXG4gICAgICAgIDgyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2MCxcbiAgICAgICAgOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTksXG4gICAgICAgIDQ1LFxuICAgICAgICA5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA1LFxuICAgICAgICA4MixcbiAgICAgICAgMzcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDU3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0MixcbiAgICAgICAgMTMxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAzNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjExLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ1LFxuICAgICAgICA5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTMyLFxuICAgICAgICA2NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDU3LFxuICAgICAgICAyNixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDQyLFxuICAgICAgICAzLFxuICAgICAgICAxMjksXG4gICAgICAgIDQxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDM3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NixcbiAgICAgICAgMjQ1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVWQvSTB3ZXF4dXlnQTBWTTBwdDluSTVxM05HQ2JVZDk2V3RJYi9OcTUvbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOTV2ekZaTHdROGFTYURFOFVVRmdSd1wiLFxuICBcInBob25lSWRcIjogXCIzZTVhY2ZjMy1mNzQ3LTRmZGItYjBmYy01YmNmM2RjMjFlNmZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDUsXG4gICAgICA0MyxcbiAgICAgIDM5LFxuICAgICAgMTA4LFxuICAgICAgMTcyLFxuICAgICAgMjMyLFxuICAgICAgMTEwLFxuICAgICAgMTY2LFxuICAgICAgMjcsXG4gICAgICAxNjcsXG4gICAgICA4MixcbiAgICAgIDE3MSxcbiAgICAgIDEwMyxcbiAgICAgIDEzMCxcbiAgICAgIDEyNyxcbiAgICAgIDE0NixcbiAgICAgIDUzLFxuICAgICAgMTM2LFxuICAgICAgNjgsXG4gICAgICAyMDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ3LFxuICAgICAgNSxcbiAgICAgIDEwNSxcbiAgICAgIDE0LFxuICAgICAgMTE2LFxuICAgICAgMjQyLFxuICAgICAgMjMsXG4gICAgICAyMjMsXG4gICAgICAxNTQsXG4gICAgICAyNDQsXG4gICAgICAyMjQsXG4gICAgICAyOSxcbiAgICAgIDIzNyxcbiAgICAgIDE4NCxcbiAgICAgIDQ3LFxuICAgICAgMjgsXG4gICAgICAzNixcbiAgICAgIDIzNyxcbiAgICAgIDIyNyxcbiAgICAgIDIxNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxMzI5OENCRVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0MTE1MTI2MTk3OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDgxODU5NTY3ODYyNTg6MjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0hObTcwQ0VMbXQvTGdHR0E4Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxeDRXNHpReGpyNlhHTXpMYldaSkEzWnkvVHdoR200clcwK1BIOUd6RDBnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInhwcHVDdDVsNHVwWTZnSStvL2hJQk1sZnRzalllMmw5blFYK0FJNUlBSVd2Q1BUcXJLY2JtM1MzejhzbEhtN0hMbWFydTZkT1dYMURIbHJJS1pIbkFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImlBZ3NWbkFMTTVnYTFUUUFUeE50SFUwR3BHMEJGSDVxN3llbmZESzlWajE5cnhwK0VNMmNkYTZDY3Q5eEdacjZQRXF3Tmp6OGlqeEhwaVcvUGYzMGpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDExNTEyNjE5NzoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzAwOTA2ODUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEc1RcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURzVC5qc29uIjogIntcImtleURhdGFcIjpcIlBxNDI4ekgyMmZKMFY1N0JLd0toNE9RNXd1c1JXVThBQXR1dFpNK1Q2Z009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjY1MjQ5NTA1LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
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
