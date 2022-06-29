/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

import type { OnEvent, PromiseOrValue, TypedEvent, TypedEventFilter, TypedListener } from "../common";

export interface UniswapV2LibraryInterface extends utils.Interface {
  functions: {
    "getAmountIn(uint256,uint256,uint256)": FunctionFragment;
    "getAmountOut(uint256,uint256,uint256)": FunctionFragment;
    "getAmountsOut(address,uint256,address[])": FunctionFragment;
    "getReserves(address,address,address)": FunctionFragment;
    "pairFor(address,address,address)": FunctionFragment;
    "quote(uint256,uint256,uint256)": FunctionFragment;
    "sortTokens(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getAmountIn"
      | "getAmountOut"
      | "getAmountsOut"
      | "getReserves"
      | "pairFor"
      | "quote"
      | "sortTokens",
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getAmountIn",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountOut",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountsOut",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>, PromiseOrValue<string>[]],
  ): string;
  encodeFunctionData(
    functionFragment: "getReserves",
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "pairFor",
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "quote",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: "sortTokens", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;

  decodeFunctionResult(functionFragment: "getAmountIn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getAmountOut", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getAmountsOut", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getReserves", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pairFor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "quote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sortTokens", data: BytesLike): Result;

  events: {};
}

export interface UniswapV2Library extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UniswapV2LibraryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getAmountIn(
      amountOut: PromiseOrValue<BigNumberish>,
      reserveIn: PromiseOrValue<BigNumberish>,
      reserveOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { amountIn: BigNumber }>;

    getAmountOut(
      amountIn: PromiseOrValue<BigNumberish>,
      reserveIn: PromiseOrValue<BigNumberish>,
      reserveOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { amountOut: BigNumber }>;

    getAmountsOut(
      factory: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<[BigNumber[]] & { amounts: BigNumber[] }>;

    getReserves(
      factory: PromiseOrValue<string>,
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { reserveA: BigNumber; reserveB: BigNumber }>;

    pairFor(
      factory: PromiseOrValue<string>,
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[string] & { pair: string }>;

    quote(
      amountA: PromiseOrValue<BigNumberish>,
      reserveA: PromiseOrValue<BigNumberish>,
      reserveB: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { amountB: BigNumber }>;

    sortTokens(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[string, string] & { token0: string; token1: string }>;
  };

  getAmountIn(
    amountOut: PromiseOrValue<BigNumberish>,
    reserveIn: PromiseOrValue<BigNumberish>,
    reserveOut: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  getAmountOut(
    amountIn: PromiseOrValue<BigNumberish>,
    reserveIn: PromiseOrValue<BigNumberish>,
    reserveOut: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  getAmountsOut(
    factory: PromiseOrValue<string>,
    amountIn: PromiseOrValue<BigNumberish>,
    path: PromiseOrValue<string>[],
    overrides?: CallOverrides,
  ): Promise<BigNumber[]>;

  getReserves(
    factory: PromiseOrValue<string>,
    tokenA: PromiseOrValue<string>,
    tokenB: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<[BigNumber, BigNumber] & { reserveA: BigNumber; reserveB: BigNumber }>;

  pairFor(
    factory: PromiseOrValue<string>,
    tokenA: PromiseOrValue<string>,
    tokenB: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<string>;

  quote(
    amountA: PromiseOrValue<BigNumberish>,
    reserveA: PromiseOrValue<BigNumberish>,
    reserveB: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  sortTokens(
    tokenA: PromiseOrValue<string>,
    tokenB: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<[string, string] & { token0: string; token1: string }>;

  callStatic: {
    getAmountIn(
      amountOut: PromiseOrValue<BigNumberish>,
      reserveIn: PromiseOrValue<BigNumberish>,
      reserveOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getAmountOut(
      amountIn: PromiseOrValue<BigNumberish>,
      reserveIn: PromiseOrValue<BigNumberish>,
      reserveOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getAmountsOut(
      factory: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber[]>;

    getReserves(
      factory: PromiseOrValue<string>,
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { reserveA: BigNumber; reserveB: BigNumber }>;

    pairFor(
      factory: PromiseOrValue<string>,
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<string>;

    quote(
      amountA: PromiseOrValue<BigNumberish>,
      reserveA: PromiseOrValue<BigNumberish>,
      reserveB: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    sortTokens(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[string, string] & { token0: string; token1: string }>;
  };

  filters: {};

  estimateGas: {
    getAmountIn(
      amountOut: PromiseOrValue<BigNumberish>,
      reserveIn: PromiseOrValue<BigNumberish>,
      reserveOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getAmountOut(
      amountIn: PromiseOrValue<BigNumberish>,
      reserveIn: PromiseOrValue<BigNumberish>,
      reserveOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getAmountsOut(
      factory: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getReserves(
      factory: PromiseOrValue<string>,
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    pairFor(
      factory: PromiseOrValue<string>,
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    quote(
      amountA: PromiseOrValue<BigNumberish>,
      reserveA: PromiseOrValue<BigNumberish>,
      reserveB: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    sortTokens(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAmountIn(
      amountOut: PromiseOrValue<BigNumberish>,
      reserveIn: PromiseOrValue<BigNumberish>,
      reserveOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getAmountOut(
      amountIn: PromiseOrValue<BigNumberish>,
      reserveIn: PromiseOrValue<BigNumberish>,
      reserveOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getAmountsOut(
      factory: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getReserves(
      factory: PromiseOrValue<string>,
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    pairFor(
      factory: PromiseOrValue<string>,
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    quote(
      amountA: PromiseOrValue<BigNumberish>,
      reserveA: PromiseOrValue<BigNumberish>,
      reserveB: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    sortTokens(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
