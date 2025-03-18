const mySecret = process.env['TOKEN']
const { Client } = require('discord.js');
const client = new Client();
const { token } = require('./config/bot.json')
const { keep_alive } = require("./keep_alive");

require('./utils/defines')(client);
require('./utils/structure/registery')(client);
require('./utils/handlers/commands')(client);
require('./utils/handlers/events')(client);

client.on('message', async(message) => {
    message.channel.messages.fetch()
require('./utils/handlers/handler')(client, message)
});

client.on('messageUpdate', (o, message) => {
require('./utils/handlers/editHandles')(client, message);
})


client.login(process.env.TOKEN);
client.on("message", async message =>{
  if (message.content.startsWith("Hi"))
  {
    message.channel.send(`sup`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("hru"))
  {
    message.channel.send(`im fine, you?`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("Who is your boss"))
  {
    message.channel.send(`<@!791285229590806588> is my boss`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("thx"))
  {
    message.channel.send(`wlc`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("good"))
  {
    message.channel.send(`Mkay`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("lmao"))
  {
    message.channel.send(`Huh? whats funny?`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("bruh"))
  {
    message.channel.send(`BIG BRUH MOMENTO`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("im sad"))
  {
    message.channel.send(`WHY?! UR SUCH AN AMAZING PERSON!`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith(".rest"))
  {
    message.channel.send(`i am going for rest byee see you again :( `)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("tag"))
  {
    message.channel.send(`\@${client.user.username}`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("nothing"))
  {
    message.channel.send(`Ur sus!`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("hi"))
  {
    message.channel.send(`hey!`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("whats your name?"))
  {
    message.channel.send(`whats my name? i am mod :D`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("invite"))
  {
    message.channel.send(`wanna invite me ? here's the link https://dsc.gg/mgbt`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("haha"))
  {
    message.channel.send(`**Lol!**`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("play demo help"))
  {
    message.channel.send(` **
if you are getting play demo error on mc launcher use following steps
1) delete mc launcher of it is installed 
2) download xbox by going on google and search xbox download
3) and log your account on xbox as well as microsoft store
4) search minecraft launcher on xbox 
5) download it 
6) login on minecraft launcher also 
Have fun 🙂
If you are getting server is under maintaince error then DM SSThunder or Mƴstɘʀɩoʋs. ** `)
  }
})
client.on("message", async message =>{
  if (message.content.startsWith("gg mc claimed"))
  {
    message.channel.send(`woW dont forget to check <#940848277681741825>`)
    
  }
  
});
client.on("message", async message =>{
  if (message.content.startsWith(".. ||181487||"))
  {
    message.channel.send(`**MEGA COMMUNITY:
Server rules

1. Be respectful of others 
Talk to others respectfully and don’t harass someone or use hate speech, avoid being Toxic

2. Do not spam 
Avoid sending excessive amounts of:
Messages & Emojis 
Images & Commands
‎
3. No debating or politics
Avoid political and Religious Talks or sensitive topics.

4. No self Promotion and other stuffs
Messages in chat or direct messages includes: 
Social media
Discord servers
Selling/Buying products
‎
5. No NSFW tolerated 
All channels are SFW. No inappropriate content or profile images!

6. No personal information. 
No private data e.g.  Credit card address etc.

7. Keep channels on-topic
You can still send images in Main Chat though you can't spam the chat with it
‎
All members must be 13+
Please be of correct age to use our server

9. Follow discord TOS
We strictly enforce the Discord Community Guidelines and Discord TOS as follow:

Discord Community Guidelines:
https://dis.gd/guidelines 

Discord Terms of Service: 
https://dis.gd/terms**`)
    
  }
  
});
client.on("message", async message =>{
  if (message.content.startsWith("everyone ||181487||"))
  {
    message.channel.send(`||@everyone||`)
  }

});

client.on("message", async message =>{
  if (message.content.startsWith("you are bad"))
  {
    message.channel.send(`>_<`)
  }
})

client.on("message", async message =>{
  if (message.content.startsWith("server invite"))
  {
    message.channel.send(`https://dsc.gg/mega-community
`)
  }
})

client.on("message", async message =>{
  if (message.content.startsWith("..l"))
  {
    message.channel.send(`:MINECRAFT: :line~3::line~3::line~3::line~3::line~3::line~3::line~3::line~3: :MINECRAFT: 
:arrow:2 invites = Minecraft NFA
:arrow:15 invites = Minecraft FA unban
:arrow~4:20 invites = FA METHOD WITHOUT XBOX CODE
:MINECRAFT:  :line~3::line~3::line~3::line~3::line~3::line~3::line~3::line~3::MINECRAFT: 

:_Nitro_boost: :line~3::line~3::line~3::line~3::line~3::line~3::line~3::line~3: :_Nitro_boost: 
:arrow:3 invites = Nitro promo link
:arrow:6 invites = Nitro gen
:arrow:8 invites = Nitro gen with checker
:_Nitro_boost:  :line~3::line~3::line~3::line~3::line~3::line~3::line~3::line~3: :_Nitro_boost: 

:Netflix: :line~3::line~3::line~3::line~3::line~3::line~3::line~3::line~3::line~3::line~3::line~3::line~3::line~3::Netflix: 
:arrow~4: 10 INVS = NETFLIX STANDARD(no warranty)
:arrow~4: 15 INVS = NETFLIX PREMIUM(no warranty)
:arrow~4: +5 invs in both for a week's warranty
:Netflix: :line~3::line~3::line~3::line~3::line~3::line~3::line~3::line~3::line~3::line~3::line~3::line~3::line~3::Netflix: 

:Spotify::line~3: :line~3: :line~3: :line~3: :line~3: :line~3: :line~3: :line~3: :line~3:  :line~3: :line~3::Spotify: 
:arrow~4: 5 INVS = SPOTIFY PREMIUM
:arrow~4: 8 INVS = SPOTIFY PREMIUM ON YOUR ACC
:Spotify::line~3: :line~3: :line~3: :line~3: :line~3: :line~3: :line~3: :line~3: :line~3:  :line~3: :line~3::Spotify: 

:credit_card: :line~3::line~3::line~3::line~3::line~3::credit_card:
:arrow: 5 invite = cc gen
:credit_card::line~3::line~3::line~3::line~3::line~3::credit_card:`)
  }
});






