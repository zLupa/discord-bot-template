import { Client } from "discordx";
import path from "path";

export class DiscordxClient extends Client {
  constructor() {
    super({
      intents: ["GUILDS"],
      botGuilds: [process.env.DISCORD_GUILD_ID],
      classes: [
        path.resolve(__dirname, "..", "..", "modules/**/*Command.{ts,js}"),
      ],
    });
  }
}
