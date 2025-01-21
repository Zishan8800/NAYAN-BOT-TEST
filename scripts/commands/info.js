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
𝗡𝗔𝗠𝗘       : 𝐌𝐔𝐇𝐀𝐌𝐌𝐀𝐃 𝐒𝐀𝐇𝐄𝐋
𝗡𝗜𝗖𝗞 𝗡𝗔𝗠𝗘 : 𝐒𝐈𝐇𝐔
𝗥𝗘𝗟𝗜𝗚𝗜𝗢𝗡   : 𝐀𝐋𝐇𝐀𝐌𝐃𝐔𝐋𝐋𝐀𝐇 𝐈𝐒𝐋𝐀𝐌 💗
𝗣𝗘𝗥𝗠𝗔𝗡𝗘𝗡𝗧 𝗔𝗗𝗗𝗥𝗘𝗦𝗦: 𝐑𝐀𝐉𝐒𝐇𝐀𝐇𝐈 𝐁𝐎𝐆𝐔𝐑𝐀, 𝐑𝐀𝐍𝐆𝐏𝐔𝐑
𝗖𝗨𝗥𝗥𝗘𝗡𝗧 𝗔𝗗𝗗𝗥𝗘𝗦𝗦: 𝐃𝐇𝐀𝐊𝐀 𝐌𝐈𝐑𝐏𝐔𝐑
𝗚𝗘𝗡𝗗𝗘𝗥   : 𝐌𝐀𝐋𝐄
𝗔𝗚𝗘           : 19+
𝗥𝗘𝗟𝗔𝗧𝗜𝗢𝗡𝗦𝗛𝗜𝗣 : 𝐒𝐈𝐍𝐆𝐋𝐄
𝗪𝗢𝗥𝗞        : 𝐒𝐓𝐔𝐃𝐄𝐍𝐓
𝗚𝗠𝗔𝗜𝗟       : markjuckerberg00@gmail.com
𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣: wa.me/+8801731736377
𝗧𝗘𝗟𝗜𝗚𝗥𝗔𝗠  : t.me/SAHEL69K
𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗟𝗜𝗡𝗞 : https://www.facebook.com/www.tera.bap.c4x`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://i.imgur.com/TQnx71b.jpeg`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
