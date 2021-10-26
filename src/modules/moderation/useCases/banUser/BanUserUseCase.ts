import { CommandInteraction } from "discord.js";
import { injectable } from "tsyringe";

@injectable()
export class BanUserUseCase {
  async execute(interaction: CommandInteraction, id: string): Promise<void> {
    await interaction.guild.bans.create(id);
  }
}
