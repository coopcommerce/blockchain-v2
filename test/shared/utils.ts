import { BigNumber } from "ethers";
import { utils } from "ethers";
import { keccak256, solidityPack } from "ethers/lib/utils";

export const expandTo18Decimals = (n: number): BigNumber => {
  return BigNumber.from(n).mul(BigNumber.from(10).pow(18));
};

export function getCreate2Address(
  factoryAddress: string,
  [tokenA, tokenB]: [string, string],
  bytecode: string
): string {
  const [token0, token1] =
    tokenA < tokenB ? [tokenA, tokenB] : [tokenB, tokenA];
  return utils.getCreate2Address(
    factoryAddress,
    keccak256(solidityPack(["address", "address"], [token0, token1])),
    keccak256(bytecode)
  );
}
