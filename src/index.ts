import "reflect-metadata";
import { DiscordxClient } from "./shared/discordx/DiscordxClient";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

const discordxClient = new DiscordxClient();

discordxClient.once("ready", async () => {
  await discordxClient.initApplicationCommands();
  await discordxClient.initApplicationPermissions();
});

discordxClient.on("interactionCreate", (interaction) => {
  discordxClient.executeInteraction(interaction);
});

discordxClient.login(process.env.DISCORD_BOT_TOKEN);
