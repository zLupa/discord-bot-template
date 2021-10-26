import { SnowflakeUtil } from "discord.js";

import { getMockCommandInteraction } from "@mocks/index";

import { BanUserUseCase } from "./BanUserUseCase";

let banUserUseCase: BanUserUseCase;

describe("Ban user", () => {
  beforeEach(() => {
    banUserUseCase = new BanUserUseCase();
  });

  it("should be able to ban user", async () => {
    const mockCommandInteraction = getMockCommandInteraction();
    const randomID = SnowflakeUtil.generate();

    jest
      .spyOn(mockCommandInteraction.guild.bans, "create")
      .mockImplementationOnce(() => undefined);

    await banUserUseCase.execute(mockCommandInteraction, randomID);

    expect(mockCommandInteraction.guild.bans.create).toHaveBeenCalledWith(
      randomID
    );
  });
});
