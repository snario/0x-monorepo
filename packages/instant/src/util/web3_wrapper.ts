import { EthRPCClient } from '@0x/eth-rpc-client';

import { getProvider } from './provider';

export const ethRPCClient = new EthRPCClient(getProvider());
