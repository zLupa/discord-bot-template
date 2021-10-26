import { getMockCommandInteraction } from "@mocks/index";

import { GetBotPingUseCase } from "./GetBotPingUseCase";

describe("Ping bot", () => {
  it("should be able to get the bot's ping", async () => {
    const getBotPingUseCase = new GetBotPingUseCase();

    const mockCommandInteraction = getMockCommandInteraction();

    const ping = await getBotPingUseCase.execute(mockCommandInteraction);

    expect(ping.wsLatency).toBe(130);
  });
});
