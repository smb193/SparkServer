exports.BattleScripts = {
		init: function() {
				for (var i in this.data.Pokedex) {
						var tier = '';
						var adjustment = 0;
						if (this.data.FormatsData[i]) tier = this.data.FormatsData[i].tier || this.data.FormatsData[toId(this.getTemplate(i).baseSpecies)].tier;
						if (tier === lcuu) {
								for (var j in this.data.Pokedex[i].baseStats) {
										this.modData('Pokedex', i).baseStats[j] = this.clampIntRange(this.data.Pokedex[i].baseStats[j] + 10, 1, 255);
								}
						}
				}
		}
};
