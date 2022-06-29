/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides, Signer, utils } from "ethers";

import type { PromiseOrValue } from "../../common";
import type { UniswapV2Library, UniswapV2LibraryInterface } from "../../contracts/UniswapV2Library";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveOut",
        type: "uint256",
      },
    ],
    name: "getAmountIn",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveOut",
        type: "uint256",
      },
    ],
    name: "getAmountOut",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "factory",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
    ],
    name: "getAmountsOut",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
    ],
    name: "getReserves",
    outputs: [
      {
        internalType: "uint256",
        name: "reserveA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveB",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
    ],
    name: "pairFor",
    outputs: [
      {
        internalType: "address",
        name: "pair",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveB",
        type: "uint256",
      },
    ],
    name: "quote",
    outputs: [
      {
        internalType: "uint256",
        name: "amountB",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
    ],
    name: "sortTokens",
    outputs: [
      {
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611154806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80636d91c0e21161005b5780636d91c0e21461024e57806385f8c25914610312578063ad615dec14610368578063bb7b9c76146103be5761007d565b8063054d50d41461008257806332749461146100d8578063544caa5614610177575b600080fd5b6100c26004803603606081101561009857600080fd5b810190808035906020019092919080359060200190929190803590602001909291905050506104f5565b6040518082815260200191505060405180910390f35b61015a600480360360608110156100ee57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610625565b604051808381526020018281526020019250505060405180910390f35b6101d96004803603604081101561018d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610761565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390f35b6102d06004803603606081101561026457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506108d8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103526004803603606081101561032857600080fd5b81019080803590602001909291908035906020019092919080359060200190929190505050610a33565b6040518082815260200191505060405180910390f35b6103a86004803603606081101561037e57600080fd5b81019080803590602001909291908035906020019092919080359060200190929190505050610b70565b6040518082815260200191505060405180910390f35b61049e600480360360608110156103d457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561041b57600080fd5b82018360208201111561042d57600080fd5b8035906020019184602083028401116401000000008311171561044f57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290505050610c54565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156104e15780820151818401526020810190506104c6565b505050509050019250505060405180910390f35b600080841161054f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b8152602001806110f4602b913960400191505060405180910390fd5b60008311801561055f5750600082115b6105b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806110a76028913960400191505060405180910390fd5b60006105cb6103e586610dcc90919063ffffffff16565b905060006105e28483610dcc90919063ffffffff16565b9050600061060d836105ff6103e889610dcc90919063ffffffff16565b610e6190919063ffffffff16565b905080828161061857fe5b0493505050509392505050565b60008060006106348585610761565b50905061064a6106458787876108d8565b610ee4565b6000806106588888886108d8565b73ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561069d57600080fd5b505afa1580156106b1573d6000803e3d6000fd5b505050506040513d60608110156106c757600080fd5b81019080805190602001909291908051906020019092919080519060200190929190505050506dffffffffffffffffffffffffffff1691506dffffffffffffffffffffffffffff1691508273ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff161461074b57808261074e565b81815b8095508196505050505050935093915050565b6000808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614156107e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806110826025913960400191505060405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1610610823578284610826565b83835b8092508193505050600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156108d1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f556e697377617056324c6962726172793a205a45524f5f41444452455353000081525060200191505060405180910390fd5b9250929050565b60008060006108e78585610761565b91509150858282604051602001808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b81526014018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b8152601401925050506040516020818303038152906040528051906020012060405160200180807fff000000000000000000000000000000000000000000000000000000000000008152506001018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b8152601401828152602001807fe699c2c70a1e9ca16c58b40782745b5d609738b755845b6ee18a18d21352f753815250602001925050506040516020818303038152906040528051906020012060001c925050509392505050565b6000808411610a8d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180611056602c913960400191505060405180910390fd5b600083118015610a9d5750600082115b610af2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806110a76028913960400191505060405180910390fd5b6000610b1b6103e8610b0d8787610dcc90919063ffffffff16565b610dcc90919063ffffffff16565b90506000610b466103e5610b388887610fa990919063ffffffff16565b610dcc90919063ffffffff16565b9050610b656001828481610b5657fe5b04610e6190919063ffffffff16565b925050509392505050565b6000808411610bca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806110cf6025913960400191505060405180910390fd5b600083118015610bda5750600082115b610c2f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806110a76028913960400191505060405180910390fd5b82610c438386610dcc90919063ffffffff16565b81610c4a57fe5b0490509392505050565b6060600282511015610cce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f556e697377617056324c6962726172793a20494e56414c49445f50415448000081525060200191505060405180910390fd5b815167ffffffffffffffff81118015610ce657600080fd5b50604051908082528060200260200182016040528015610d155781602001602082028036833780820191505090505b5090508281600081518110610d2657fe5b60200260200101818152505060005b6001835103811015610dc457600080610d7887868581518110610d5457fe5b6020026020010151876001870181518110610d6b57fe5b6020026020010151610625565b91509150610d9a848481518110610d8b57fe5b602002602001015183836104f5565b846001850181518110610da957fe5b60200260200101818152505050508080600101915050610d35565b509392505050565b600080821480610de95750828283850292508281610de657fe5b04145b610e5b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f64732d6d6174682d6d756c2d6f766572666c6f7700000000000000000000000081525060200191505060405180910390fd5b92915050565b6000828284019150811015610ede576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f64732d6d6174682d6164642d6f766572666c6f7700000000000000000000000081525060200191505060405180910390fd5b92915050565b610fa681604051602401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019150506040516020818303038152906040527f2c2ecbc2000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061102c565b50565b6000828284039150811115611026576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f64732d6d6174682d7375622d756e646572666c6f77000000000000000000000081525060200191505060405180910390fd5b92915050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa505050505056fe556e697377617056324c6962726172793a20494e53554646494349454e545f4f55545055545f414d4f554e54556e697377617056324c6962726172793a204944454e544943414c5f414444524553534553556e697377617056324c6962726172793a20494e53554646494349454e545f4c4951554944495459556e697377617056324c6962726172793a20494e53554646494349454e545f414d4f554e54556e697377617056324c6962726172793a20494e53554646494349454e545f494e5055545f414d4f554e54a2646970667358221220afd0e3bbb40fd8783cf8085d263823a0a7678d78f5d37c6f68bced443094844764736f6c63430006060033";

type UniswapV2LibraryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: UniswapV2LibraryConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class UniswapV2Library__factory extends ContractFactory {
  constructor(...args: UniswapV2LibraryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<UniswapV2Library> {
    return super.deploy(overrides || {}) as Promise<UniswapV2Library>;
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UniswapV2Library {
    return super.attach(address) as UniswapV2Library;
  }
  override connect(signer: Signer): UniswapV2Library__factory {
    return super.connect(signer) as UniswapV2Library__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapV2LibraryInterface {
    return new utils.Interface(_abi) as UniswapV2LibraryInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): UniswapV2Library {
    return new Contract(address, _abi, signerOrProvider) as UniswapV2Library;
  }
}
