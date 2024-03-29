import { ThreeDots } from 'react-loader-spinner';
import { useLPBalance } from '~/hooks/useLPBalance';
import { readAmount } from '~/utils/readAmount';

export function PoolStakedToken() {
	const { data: balance, isLoading: isLoadingBalance } = useLPBalance();

	return (
		<div className="flex flex-col gap-2">
			<span className="text-darkBlue50">Stacked</span>
			<div className="relative flex flex-col">
				{isLoadingBalance ? (
					<ThreeDots color="hsl(203,23%,42%)" height="10" />
				) : (
					<>
						<span className="text-2xl font-semibold">
							~{readAmount(balance?.stakedLPBalance)} <span className="text-base font-normal">LP</span>
						</span>
						<span className="text-green absolute -bottom-5 right-0 w-max text-sm">
							+ {readAmount(balance?.lpBalance)} unstaked
						</span>
					</>
				)}
			</div>
		</div>
	);
}
