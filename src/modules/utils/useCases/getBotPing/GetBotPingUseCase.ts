import { CommandInteraction } from "discord.js";
import { injectable } from "tsyringe";

interface IResponse {
  wsLatency: number;
}

@injectable()
export class GetBotPingUseCase {
  async execute(interaction: CommandInteraction): Promise<IResponse> {
    const wsLatency = interaction.client.ws.ping;

    return { wsLatency };
  }
}
