type LootItem = {
	name: string;
	factor: number; // Used to calculate chance and value (rarer items = lower factor)
};

type LootTable = LootItem[];

export type LootReturned = {
	[item_name: string]: {
		quantity: number; // Number of this item in the loot
		item_value: number; // Value of each item
	};
};

class LootGenerator {
	constructor(private loot_table: LootTable) {}

	// Fisher-Yates shuffle to randomize the loot table
	private shuffleLootTable(): void {
		for (let i = this.loot_table.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			if (i === j) continue; // Skip redundant swaps
			[this.loot_table[i], this.loot_table[j]] = [this.loot_table[j]!, this.loot_table[i]!];
		}
	}

	// Dynamically calculate the value of an item based on its rarity
	private calculateValue(factor: number): number {
		return Math.round(100 / factor); // Higher factor = lower value
	}

	// Generate loot until the total value exceeds the threshold
	generateLoot(min_target: number): LootReturned {
		this.shuffleLootTable(); // Randomize the loot table order
		const loot: LootReturned = {};
		let total_value = 0;

		// Outer loop to continue generating loot until the min_target is reached
		outer: while (total_value < min_target) {
			for (const item of this.loot_table) {
				const value = this.calculateValue(item.factor); // Determine the item's value
				const base_chance = item.factor / 100; // Initial chance for the item
				let chance = base_chance; // Current chance for the item

				// Roll for multiples with diminishing probabilities
				while (Math.random() < chance) {
					loot[item.name] ??= {
						quantity: 0,
						item_value: value,
					};

					loot[item.name]!.quantity++;

					total_value += value; // Add the value to the total

					if (total_value >= min_target) break outer; // Exit when threshold is reached
					chance *= base_chance; // Reduce the chance for the next roll
				}
			}
		}

		return loot;
	}
}

// Define the loot table with rarity factors
const loot_table: LootTable = [
	// Common items
	{ name: "Scrap Metal", factor: 10 },
	{ name: "Steel Fragments", factor: 9 },
	{ name: "Copper Wire", factor: 8 },
	{ name: "Rusty Bolt", factor: 7 },
	{ name: "Broken Gear", factor: 6 },
	{ name: "Plastic Shards", factor: 5 },

	// Uncommon items
	{ name: "Steel Plate", factor: 4.5 },
	{ name: "Coiled Spring", factor: 4 },
	{ name: "Aluminum Rod", factor: 3.5 },
	{ name: "Glass Shard", factor: 3 },
	{ name: "Rubber Strip", factor: 2.5 },
	{ name: "Circuit Fragment", factor: 2 },

	// Rare items
	{ name: "Flammable Gel", factor: 1.5 },
	{ name: "Coolant Reservoir", factor: 1.2 },
	{ name: "Polished Crystal", factor: 1 },
	{ name: "Thermal Coil", factor: 0.8 },
	{ name: "Reactive Alloy", factor: 0.7 },
	{ name: "Power Cell", factor: 0.5 },

	// Epic items
	{ name: "Magitech Shard", factor: 0.4 },
	{ name: "Quantum Lens", factor: 0.3 },
	{ name: "Focused Emitter", factor: 0.25 },
	{ name: "Plasma Conduit", factor: 0.2 },
	{ name: "Stabilized Core", factor: 0.15 },
	{ name: "Void Fragment", factor: 0.1 },

	// Legendary items
	{ name: "Energy Core", factor: 0.09 },
	{ name: "Anomalous Chipset", factor: 0.05 },
	{ name: "Temporal Resonator", factor: 0.03 },
	{ name: "Dimensional Anchor", factor: 0.02 },
	{ name: "Lumen Crystal", factor: 0.01 },
	{ name: "Ethereal Matrix", factor: 0.001 },
];

// Create the loot generator
export const loot_generator = new LootGenerator(loot_table);

if (import.meta.main) {
	// Generate loot
	const loot = loot_generator.generateLoot(1500);

	// Output the loot and its total value
	console.log("Generated Loot:", loot);

	const loot_total = Object.values(loot).reduce((acc, { quantity, item_value }) => acc + (quantity * item_value), 0);
	console.log("Total Value:", loot_total);
}
