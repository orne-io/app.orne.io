import swapCurrency from '~/assets/swap-currency.svg';
import { Button } from '~/components/ui/Button';
import { IconToken } from '~/components/ui/IconToken';

export function Swap() {
	return (
		<div className="mt-5 lg:-mt-6">
			<div className="mb-10 text-center lg:mb-20 lg:text-left">
				<h1 className="mb-5 text-5xl font-bold">
					<span className="swap-underline">Swap</span> tokens
				</h1>
				<h2 className="text-2xl">
					Instantly trade <span className="text-green">$ORNE</span> and Luna
				</h2>
			</div>

			<div className="flex flex-col gap-8 lg:flex-row">
				<div className="flex-1">
					<div className="flex h-32 flex-1 flex-col justify-center rounded-lg bg-offWhite p-8 shadow-sm">
						<span className="mb-3 text-darkBlue50">Balance</span>
						<div className="flex justify-between">
							<input className="bg-offWhite text-2xl font-semibold"></input>
							<div className="flex items-center gap-2">
								<IconToken name="luna" size={36} />
								<span className="text-mediumGrey">LUNA</span>
							</div>
						</div>
					</div>

					<div className="p-5">
						<dl className="space-y-2">
							<div className="flex items-center justify-between">
								<dt className="font-semibold">Price per $ORNE</dt>
								<dd className="text-mediumGrey">1.00 UST</dd>
							</div>
							<div className="flex items-center justify-between">
								<dt className="font-semibold">Tx Fee</dt>
								<dd className="text-mediumGrey">0 UST</dd>
							</div>
						</dl>
					</div>
				</div>

				<div className="-mt-10 flex items-center justify-center lg:mt-0 lg:h-32">
					<button className="block h-[60px] w-[60px] rounded-full shadow-lg">
						<img src={swapCurrency} alt="Swap currency" />
					</button>
				</div>

				<div className="flex-1">
					<div className="flex h-32 flex-1 flex-col justify-center rounded-lg bg-offWhite p-8 shadow-sm">
						<span className="mb-3 text-darkBlue50">Estimated</span>
						<div className="flex justify-between">
							<span className="text-2xl font-semibold">30766.618259</span>
							<div className="flex items-center gap-2">
								<IconToken name="orne" size={36} />
								<span className="text-mediumGrey">ORNE</span>
							</div>
						</div>
					</div>

					<div className="p-5">
						<div className="mb-5 flex flex-col gap-2 xl:flex-row xl:gap-8">
							<span className="text-center text-lg font-semibold">Slippage</span>
							<div className="flex w-full gap-2">
								<button className="flex flex-1 items-center justify-center rounded-lg border border-green font-semibold transition-colors hover:bg-green hover:text-white">
									0.5%
								</button>
								<button className="flex flex-1 items-center justify-center rounded-lg border border-green font-semibold transition-colors hover:bg-green hover:text-white">
									1%
								</button>
								<button className="flex flex-1 items-center justify-center rounded-lg border border-green font-semibold transition-colors hover:bg-green hover:text-white">
									4%
								</button>
								<input
									type="text"
									className="block w-1/5 rounded-lg border border-mediumGrey bg-transparent px-3 font-semibold"
								/>
							</div>
						</div>

						<Button>Swap</Button>
					</div>
				</div>
			</div>
		</div>
	);
}