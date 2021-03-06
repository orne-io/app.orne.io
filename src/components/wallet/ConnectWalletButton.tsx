import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ConnectType, useWallet } from '@terra-money/wallet-provider';
import { Trigger, Content, Item } from './ButtonStyle';

const ConnectionNameDict: Partial<Record<ConnectType, string>> = {
	[ConnectType.EXTENSION]: 'Extension',
	[ConnectType.WALLETCONNECT]: 'Wallet Connect',
};

export function ConnectWalletButton() {
	const { availableConnectTypes, connect } = useWallet();
	const allowedConnection = availableConnectTypes.filter((c) =>
		[ConnectType.EXTENSION, ConnectType.WALLETCONNECT].includes(c)
	);

	return (
		<DropdownMenu.Root>
			<Trigger>Connect Wallet</Trigger>

			<Content>
				{allowedConnection.map((connection) => (
					<Item key={connection} onClick={() => connect(connection)}>
						{ConnectionNameDict[connection]}
					</Item>
				))}
			</Content>
		</DropdownMenu.Root>
	);
}
