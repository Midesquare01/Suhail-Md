const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_09_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDcxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDgzLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzMsXG4gICAgICAgIDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDgzLFxuICAgICAgICA5LFxuICAgICAgICA0LFxuICAgICAgICA3MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDMyLFxuICAgICAgICA0NixcbiAgICAgICAgMzIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTksXG4gICAgICAgIDIzMixcbiAgICAgICAgNjMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNixcbiAgICAgICAgMjMwLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDY1LFxuICAgICAgICA0NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOSxcbiAgICAgICAgODksXG4gICAgICAgIDMzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA0MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzksXG4gICAgICAgIDU4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE2LFxuICAgICAgICA0NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgMTkwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjksXG4gICAgICAgIDMzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTkxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAzOCxcbiAgICAgICAgOTksXG4gICAgICAgIDcyLFxuICAgICAgICA0NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTI0LFxuICAgICAgICA2OSxcbiAgICAgICAgMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODUsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJoR2tGclFKS2VrQjdVRlFDalZnaFRrdll6MXpCdWorOEp5MWxxOUF3R3RJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMzgxOTAzMDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBODFDNEM4ODk3MTdDMERENUI4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTc4MTc0NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJXUTJJZ2RsUlM0Nl93T1E2OUVSeG5BXCIsXG4gIFwicGhvbmVJZFwiOiBcImEzNjMxNzYyLTk5ZWItNGVmYS1iZTIxLTJkYzFjODQ4MTdkMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDQsXG4gICAgICAxMDIsXG4gICAgICAxOTEsXG4gICAgICA2MyxcbiAgICAgIDIxMixcbiAgICAgIDIwOSxcbiAgICAgIDIzNyxcbiAgICAgIDE4MixcbiAgICAgIDE2NyxcbiAgICAgIDE4MixcbiAgICAgIDgwLFxuICAgICAgMTMzLFxuICAgICAgMzUsXG4gICAgICAyMzIsXG4gICAgICAyNDcsXG4gICAgICAxNTMsXG4gICAgICAyMjUsXG4gICAgICAyMjAsXG4gICAgICAxNDcsXG4gICAgICAxNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI2LFxuICAgICAgMTUyLFxuICAgICAgMTY2LFxuICAgICAgMTY0LFxuICAgICAgMjEyLFxuICAgICAgMjA2LFxuICAgICAgMTQwLFxuICAgICAgMTM2LFxuICAgICAgNDQsXG4gICAgICA3NixcbiAgICAgIDE2OCxcbiAgICAgIDE1MCxcbiAgICAgIDIyMSxcbiAgICAgIDEyMyxcbiAgICAgIDkyLFxuICAgICAgNjYsXG4gICAgICAyMDAsXG4gICAgICAxMjUsXG4gICAgICAyNDIsXG4gICAgICAxMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVkRCSlpNU05cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzgxOTAzMDE6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1pZGVzcXVhcmVcIixcbiAgICBcImxpZFwiOiBcIjE2MTc1MzI2NjcxMjY2OTo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05iTzI4MElFT21TaDdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQnExUXVuSC9kMEo1NFFqVE5qN2F5SmZzVVRUVjVLOFRWSlgvT1AvdTNHOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrUXdmUkxyeVRrSFVuUng4ZnRQQ2NnQkJWTjU4bGVMSEZZNnpkUFFZMzVJdFEybzVzdWVNRXFlTG5yTWtHU2taUVBubVFlTHRucGszaVlzL2N2WG9EZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJQTjRrRzhFSVZ3YmZITExDRmxLdHdoajVTRi8zZ2I5bldaNFNmR3M2MTBtYlhDSWdaZGQreWJrVHg3amVEc2JPYldIODVndDhRSXl3T2t3dnA3aVlndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTM4MTkwMzAxOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTc4MTc0MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlJY1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSUljLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYWZDZnFTTTMrcEQ3bE5xTitmeUFlTVdVNWd2TWtUYm9uWEpMc0ZqTmFsdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMzEwNDY1MzY2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk3ODE3NDI1MjVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
