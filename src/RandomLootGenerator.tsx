// @deno-types="@types/react"
import React, { useEffect, useState } from "react";
import { loot_generator } from "../random-loot-generator.ts";
import { type LootReturned as Loot } from "../random-loot-generator.ts";

export const RandomLootGenerator: React.FC = () => {
	const [loot, setLoot] = useState<Loot>({});
	const [minTarget, setThreshold] = useState<string>("");
	const [totalLootValue, setTotalLootValue] = useState<number>(0);

	const handleGenerateLoot = () => {
		const generatedLoot = loot_generator.generateLoot(Number(minTarget));
		setLoot(generatedLoot);
	};

	const handleIncrementItem = (itemName: string) => {
		setLoot((prevLoot) => {
			const updatedLoot = { ...prevLoot };
			if (updatedLoot[itemName]) {
				updatedLoot[itemName].quantity++;
			}
			return updatedLoot;
		});
	};

	const handleDecrementItem = (itemName: string) => {
		setLoot((prevLoot) => {
			const updatedLoot = { ...prevLoot };
			if (updatedLoot[itemName]) {
				updatedLoot[itemName].quantity--;
			}

			if (
				updatedLoot[itemName]?.quantity != null &&
				updatedLoot[itemName].quantity <= 0
			) {
				delete updatedLoot[itemName];
			}

			return updatedLoot;
		});
	};

	const handleRemoveItem = (itemName: string) => {
		setLoot((prevLoot) => {
			const newLoot = { ...prevLoot };
			delete newLoot[itemName];
			return newLoot;
		});
	};

	useEffect(() => {
		const totalValue = Object.values(loot).reduce((total, item) => total + item.item_value * item.quantity, 0);
		setTotalLootValue(totalValue);
	}, [loot]);

	return (
		<div className="p-5 font-sans">
			<h1 className="text-2xl mb-5">Loot Generator</h1>
			<div className="mb-5">
				<input
					type="number"
					id="min-target"
					value={minTarget}
					onChange={(e) => setThreshold(e.target.value)}
					className="p-2 text-lg text-black border border-gray-300 rounded"
					placeholder="Min Loot Target"
				/>
			</div>
			<button
				onClick={handleGenerateLoot}
				className="p-3 text-lg bg-blue-500 text-white border-none rounded cursor-pointer"
			>
				Generate Loot
			</button>
			<div className="mt-5">
				{Object.keys(loot).length > 0 && (
					<>
						<div className="mt-5 text-lg font-bold">
							Total Loot Value: {totalLootValue}
						</div>
						<table className="w-full border-collapse mt-5 text-left">
							<thead>
								<tr>
									<th className="border border-gray-300 p-2">Item</th>
									<th className="border border-gray-300 p-2">Quantity</th>
									<th className="border border-gray-300 p-2">Value</th>
									<th className="border border-gray-300 p-2">Actions</th>
								</tr>
							</thead>
							<tbody>
								{Object.entries(loot).map(([itemName, itemData]) => (
									<tr key={itemName}>
										<td className="border border-gray-300 p-2">{itemName}</td>
										<td className="border border-gray-300 p-2">{itemData.quantity}</td>
										<td className="border border-gray-300 p-2">{itemData.item_value}</td>
										<td className="border border-gray-300 p-2 flex gap-2">
											<button
												onClick={() => handleDecrementItem(itemName)}
												className="w-8 p-2 bg-yellow-500 text-white border-none rounded cursor-pointer"
											>
												-
											</button>
											<button
												onClick={() => handleIncrementItem(itemName)}
												className="w-8 p-2 bg-green-500 text-white border-none rounded cursor-pointer"
											>
												+
											</button>
											<button
												onClick={() => handleRemoveItem(itemName)}
												className="w-8 p-2 bg-red-500 text-white border-none rounded cursor-pointer"
											>
												🗑️
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</>
				)}
			</div>
		</div>
	);
};
