import { CommandInteraction, User } from "discord.js";
import { Discord, Guard, Slash, SlashOption } from "discordx";
import { CommandExceptionHandler } from "shared/discordx/guards/CommandExceptionHandler";
import { container } from "tsyringe";

import { BanUserUseCase } from "./BanUserUseCase";

@Discord()
export class BanUserCommand {
  @Slash("ban")
  @Guard(CommandExceptionHandler)
  async handle(
    @SlashOption("user") user: User,
    interaction: CommandInteraction
  ): Promise<void> {
    const banUserUseCase = container.resolve(BanUserUseCase);

    await banUserUseCase.execute(interaction, user.id);

    await interaction.followUp(`User has been banned successfully`);
  }
}
