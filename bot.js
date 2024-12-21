import dotenv from "dotenv";
import { Client,Events } from "discord.js";
import { GatewayIntentBits } from "discord-api-types/v10";

dotenv.config();
const client = new Client({
  intents: [
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,    
    GatewayIntentBits.Guilds
  ],
})

client.on(Events.ClientReady, () => console.log("Bot is ready!"));

client.on(Events.MessageCreate, async (message) => {
    if (message.content === "!ping") {
        message.reply("Pong!");
    }
    console.log(message.content);
});

client.login(process.env.bot);