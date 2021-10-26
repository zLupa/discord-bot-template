import { CommandInteraction } from "discord.js";
import { Discord, Slash } from "discordx";
import { container } from "tsyringe";

import { GetBotPingUseCase } from "./GetBotPingUseCase";

@Discord()
export class GetBotPingCommand {
  @Slash("ping")
  async handle(interaction: CommandInteraction): Promise<void> {
    const getBotPingUseCase = container.resolve(GetBotPingUseCase);

    const ping = await getBotPingUseCase.execute(interaction);

    await interaction.reply(`The latency is: ${ping.wsLatency}ms`);
  }
}
