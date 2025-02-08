module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
𝗡𝗔𝗠𝗘      : 𝗭𝗬-𝗔𝗡 𝗠𝗔𝗛𝗠𝗨𝗗 𝗝𝗜𝗦𝗔𝗡
𝗡𝗜𝗖𝗞 𝗡𝗔𝗠𝗘 : 𝗦𝗘𝗟𝗙𝗜𝗦𝗛
𝗥𝗘𝗟𝗜𝗚𝗜𝗢𝗡   : 𝗔𝗟𝗛𝗔𝗠𝗗𝗨𝗟𝗟𝗔𝗛 𝗜𝗦𝗟𝗔𝗠 🦋🕋🤲
𝗔𝗚𝗘𝗘      :19+ 👀
𝗥𝗘𝗟𝗔𝗧𝗜𝗢𝗡𝗦𝗛𝗜𝗣 : 𝗦𝗜𝗡𝗚𝗟𝗘𝗘𝗛👨‍🦯
𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗟𝗜𝗡𝗞 : https://www.facebook.com/C3X.ZY1N`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://i.ibb.co/jkMvsZZ0/77e98be8-beec-43c5-a1fb-11b43cb44f64.jpg`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
