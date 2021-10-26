import { CommandInteraction } from "discord.js";
import { GuardFunction } from "discordx";
import { BaseException } from "shared/exceptions/BaseException";

export const CommandExceptionHandler: GuardFunction<CommandInteraction> =
  async (interaction, client, next) => {
    await interaction.deferReply();

    try {
      await next();
    } catch (err) {
      if (err instanceof BaseException) {
        await interaction.followUp(err.message);
        return;
      }

      await interaction.followUp(`Unexpected error occurred. ${err}`);
    }
  };
