import { CommandInteraction } from "discord.js";

export function getMockCommandInteraction(): CommandInteraction {
  const mockCommandInteraction = {
    client: {
      ws: {
        ping: 130,
      },
    },
    guild: {
      bans: {
        create: jest.fn(),
      },
    },
  } as unknown as CommandInteraction;

  return mockCommandInteraction;
}
