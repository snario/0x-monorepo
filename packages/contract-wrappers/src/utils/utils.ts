import { BigNumber } from '@0x/utils';
import { EthRPCClient } from '@0x/eth-rpc-client';

import { constants } from './constants';

export const utils = {
    getCurrentUnixTimestampSec(): BigNumber {
        const milisecondsInSecond = 1000;
        return new BigNumber(Date.now() / milisecondsInSecond).round();
    },
    getCurrentUnixTimestampMs(): BigNumber {
        return new BigNumber(Date.now());
    },
    numberPercentageToEtherTokenAmountPercentage(percentage: number): BigNumber {
        return EthRPCClient.toBaseUnitAmount(constants.ONE_AMOUNT, constants.ETHER_TOKEN_DECIMALS).mul(percentage);
    },
};
