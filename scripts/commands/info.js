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
𝗡𝗔𝗠𝗘       : 𝐌𝐔𝐇𝐀𝐌𝐌𝐀𝐃 𝐉𝐈𝐒𝐀𝐍
𝗡𝗜𝗖𝗞 𝗡𝗔𝗠𝗘 : 𝐉𝐈𝐒𝐔
𝗥𝗘𝗟𝗜𝗚𝗜𝗢𝗡   : 𝐀𝐋𝐇𝐀𝐌𝐃𝐔𝐋𝐋𝐀𝐇 𝐈𝐒𝐋𝐀𝐌 💗
𝗣𝗘𝗥𝗠𝗔𝗡𝗘𝗡𝗧 𝗔𝗗𝗗𝗥𝗘𝗦𝗦: 𝐑𝐀𝐉𝐒𝐇𝐀𝐇𝐈 𝐁𝐎𝐆𝐔𝐑𝐀, 𝐑𝐀𝐍𝐆𝐏𝐔𝐑
𝗖𝗨𝗥𝗥𝗘𝗡𝗧 𝗔𝗗𝗗𝗥𝗘𝗦𝗦: 𝐃𝐇𝐀𝐊𝐀 𝐌𝐈𝐑𝐏𝐔𝐑
𝗚𝗘𝗡𝗗𝗘𝗥   : 𝐌𝐀𝐋𝐄
𝗔𝗚𝗘           : 19+
𝗥𝗘𝗟𝗔𝗧𝗜𝗢𝗡𝗦𝗛𝗜𝗣 : 𝐒𝐈𝐍𝐆𝐋𝐄
𝗪𝗢𝗥𝗞        : 𝐒𝐓𝐔𝐃𝐄𝐍𝐓
𝗚𝗠𝗔𝗜𝗟       : 𝐙𝐘𝐀𝐍_𝐒𝐈𝐗𝐍𝐈𝐍𝐄@𝐆𝐌𝐀𝐈𝐋.𝐂𝐎𝐌
𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣: wa.me/+8801731736377
𝗧𝗘𝗟𝗜𝗚𝗥𝗔𝗠  : t.me/𝐉𝐈𝐒𝐀𝐍69K
𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗟𝗜𝗡𝗞 : https://www.facebook.com/profile.php?id=100000132276109`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://i.ibb.co/jkMvsZZ0/77e98be8-beec-43c5-a1fb-11b43cb44f64.jpg`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
