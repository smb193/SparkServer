// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js

exports.Formats = [
     
    // XY Little Cup
	///////////////////////////////////////////////////////////////////

    {
        name: "LC",
        section: "XY Little Cup",

        maxLevel: 5,
        ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
        banlist: ['Dragon Rage', 'Sonic Boom', 'Swagger', 'LC Uber', 'Sneasel', 'Tangela', 'Yanma', 'Swirlix', 'Gligar', 'Murkrow', 'Meditite']
            //The 'LC Uber' term has been edited to only refer to Scyther, to ease implementing each XY LC stage
    },
    
    // Past Stages of XY Little Cup
	///////////////////////////////////////////////////////////////////

    {
        name: "LC Sneasel",
        section: "XY LC - Past Metas",
                   
        maxLevel: 5,
        ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
        banlist: ['Dragon Rage', 'Sonic Boom', 'LC Uber']
    },
    {
        name: "LC TangYan",
        section: "XY LC - Past Metas",
    
        maxLevel: 5,
        ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
        banlist: ['Dragon Rage', 'Sonic Boom', 'LC Uber', 'Sneasel']
    },
    {
        name: "LC SwirlGar",
        Section: "XY LC - Past Metas",
    
        maxLevel: 5,
        ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
        banlist: ['Dragon Rage', 'Sonic Boom', 'LC Uber', 'Sneasel', 'Tangela', 'Yanma']
    },
    {
        name: "LC KrowTits",
        section: "XY LC - Past Metas",
    
        maxLevel: 5,
        ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
        banlist: ['Dragon Rage', 'Sonic Boom', 'LC Uber', 'Sneasel', 'Tangela', 'Yanma', 'Swirlix', 'Gligar']
    },
    
    // Past Generation Little Cup
	///////////////////////////////////////////////////////////////////

    {
        name: "[Gen 5] LC",
        section: "Past Gen LC",
    
        mod: 'gen5',
        maxLevel: 5,
        ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
        banlist: ['Berry Juice', 'Soul Dew', 'Dragon Rage', 'Sonic Boom', 'LC Uber', 'Gligar', 'Scyther', 'Sneasel', 'Tangela']
    },
    {
        name: "[Gen 4] LC (beta)",
        section: "Past Gen LC",
                   
        mod: 'gen4',
        maxLevel: 5,
        ruleset: ['Pokemon', 'Standard', 'Little Cup'],
        banlist: ['Berry Juice', 'DeepSeaTooth', 'Dragon Rage', 'Sonic Boom', 'Meditite', 'Misdreavus', 'Murkrow', 'Scyther', 'Sneasel', 'Tangela', 'Yanma']
    },
    {
        name: "[Gen 3] LC (beta)",
        section: "Past Gen LC",
    
        maxLevel: 5,
        mod: 'gen3',
        ruleset: ['Pokemon', 'Standard', 'Little Cup'],
        banlist: ['Dragon Rage', 'Sonic Boom', 'Swagger', 'Scyther', 'Chansey', 'Meditite', 'Omanyte', 'Wynaut', 'Zigzagoon', 'OU', 'BL', 'UU', 'NU', 'Uber']
    },
                   
    // XY Little Cup - Other Metagames
	///////////////////////////////////////////////////////////////////
               
    {
        name: "LC STABmons",
        section: "XY LC - Other Metas",
                   
        maxLevel: 5,
        ruleset: ['Pokemon', 'Standardunreleased', 'Team Preview', 'Little Cup', 'Sleep Clause Mod', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'HP Percentage Mod'],
        banlist: ['Dragon Rage', 'Sonic Boom', 'Swagger', 'LC Uber', 'Sneasel', 'Tangela', 'Yanma', 'Swirlix', 'Gligar', 'Murkrow', 'Meditite']
    },
    {
        name: "LC Ubers",
        section: "XY LC - Other Metas",
                   
        maxLevel: 5,
        ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
    },
    {
        name: "LC UU",
        section: "XY LC - Other Metas",
                   
        maxLevel: 5,
        ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
        banlist: ['Dragon Rage', 'Sonic Boom', 'Swagger', 'LC Uber', 'Sneasel', 'Tangela', 'Yanma', 'Swirlix', 'Gligar', 'Murkrow', 'Meditite', 'LCOU']
    },
    {
        name: "LC Doubles",
        section: "XY LC - Other Metas",
    
        gameType: 'doubles',
        maxLevel: 5,
        ruleset: ['Pokemon', 'Little Cup', 'Species Clause', 'Moody Clause', 'OHKO Clause', 'Endless Battle Clause', 'Team Preview'],
        banlist: ['Unreleased', 'Illegal', 'Dragon Rage', 'Sonic Boom', 'LC Uber', 'Sneasel', 'Tangela', 'Yanma', 'Gligar']
    },
    {
        name: "LC 1v1",
        section: "XY LC - Other Metas",
                   
        maxLevel: 5,
        onBegin: function () {
        this.p1.pokemon = this.p1.pokemon.slice(0, 1);
        this.p1.pokemonLeft = this.p1.pokemon.length;
        this.p2.pokemon = this.p2.pokemon.slice(0, 1);
        this.p2.pokemonLeft = this.p2.pokemon.length;
    },
        ruleset: ['Pokemon', 'Standard', 'Little Cup'],
        banlist: ['Unreleased', 'Illegal', 'Focus Sash', 'Destiny Bond', 'Explosion', 'Final Gambit', 'Healing Wish', 'Lunar Dance', 'Memento', 'Perish Song', 'Selfdestruct', 'Dragon Rage', 'Sonic Boom', 'Swagger', 'LC Uber', 'Sneasel', 'Tangela', 'Yanma', 'Swirlix', 'Gligar', 'Murkrow', 'Meditite']
            // Kept all bans for Standard 1v1, and kept all bans for current XY LC
            // Basically, a combo of the two metas :]
    },
    {
        name: "LC Sky Battles (beta)",
        section: "XY LC - Other Metas",
                   
        searchShow: false,
        maxLevel: 5,
        validateSet: function (set) {
        var template = this.getTemplate(set.species || set.name);
        if (template.types.indexOf('Flying') === -1 && set.ability !== 'Levitate') {
        return [set.species + " is not a Flying type and does not have the ability Levitate."];
                   }
                   },
        ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
        banlist: ['LC Uber', 'Gligar', 'Dragon Rage', 'Sonic Boom', 'Iron Ball', 'Body Slam', 'Bulldoze', 'Dig', 'Dive', 'Earth Power', 'Earthquake', 'Electric Terrain', 'Fire Pledge', 'Fissure', 'Flying Press', 'Frenzy Plant', 'Geomancy', 'Grass Knot', 'Grass Pledge', 'Grassy Terrain', 'Gravity', 'Heat Crash', 'Heavy Slam', 'Ingrain', "Land's Wrath", 'Magnitude', 'Mat Block', 'Misty Terrain', 'Mud Sport', 'Muddy Water', 'Rototiller', 'Seismic Toss', 'Slam', 'Smack Down', 'Spikes', 'Stomp', 'Substitute', 'Surf', 'Toxic Spikes', 'Water Pledge', 'Water Sport', 'Archen', 'Doduo', 'Ducklett', 'Fletchling', 'Hoothoot', 'Murkrow', 'Natu', 'Pidgey', 'Pidove', 'Rufflet', 'Spearow', 'Starly', 'Taillow', 'Vullaby']
                   // All moves which have no effect in Sky Battles are banned for simplicity
                   // All pokemon with "grounded" sprites are ineligible so consistency with in-game eligibility is maintained.
                   // LC Sky Battles Ubers are Scyther and Gligar
                   // man this is such a joke meta lol
    },
    {
        name: "LC Tier Shift",
        section: "XY LC - Other Metas",
        
        mod: 'lctiershift',
        maxLevel: 5, 
	ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
	banlist: ['LC Uber', 'Gligar', 'Dragon Rage', 'Sonic Boom', 'Swagger', 'Tangela', 'Sneasel', 'Yanma', 'Swirlix', 'Murkrow', 'Meditite']
        
              
	// XY Singles
	///////////////////////////////////////////////////////////////////

	{
		name: "Random Battle",
		section: "XY Singles",

		team: 'random',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
	},
	{
		name: "Unrated Random Battle",
		section: "XY Singles",

		team: 'random',
		challengeShow: false,
		rated: false,
		ruleset: ['Random Battle']
	},
	{
		name: "OU",
		section: "XY Singles",

		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Swagger']
	},
	{
		name: "Ubers",
		section: "XY Singles",

		ruleset: ['Pokemon', 'Standard Ubers', 'Team Preview'],
		banlist: []
	},
	{
		name: "UU",
		section: "XY Singles",

		ruleset: ['OU'],
		banlist: ['OU', 'BL', 'Heracronite', 'Medichamite', 'Gardevoirite', 'Drizzle', 'Drought']
	},
	{
		name: "RU",
		section: "XY Singles",

		ruleset: ['UU'],
		banlist: ['UU', 'BL2']
	},
    {
        name: "NU (beta)",
        section: "XY Singles",
                   
        ruleset: ['RU'],
        banlist: ['RU', 'BL3']
    },
	{
		name: "XY Battle Spot Singles",
		section: "XY Singles",

		onBegin: function () {
			this.debug('cutting down to 3');
			this.p1.pokemon = this.p1.pokemon.slice(0, 3);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 3);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview GBU'],
		banlist: [], // The neccessary bans are in Standard GBU
		validateTeam: function (team, format) {
			if (team.length < 3) return ['You must bring at least 3 Pokemon.'];
		}
	},
	{
		name: "XY Battle Spot Special 4",
		section: "XY Singles",

		mod: 'inverse',
		onBegin: function () {
			this.debug('cutting down to 3');
			this.p1.pokemon = this.p1.pokemon.slice(0, 3);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 3);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview GBU'],
		banlist: [], // The neccessary bans are in Standard GBU
		validateTeam: function (team, format) {
			if (team.length < 3) return ['You must bring at least 3 Pokemon.'];
		}
	},
	{
		name: "Custom Game",
		section: "XY Singles",

		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview']
	},
                   
	// XY Doubles
	///////////////////////////////////////////////////////////////////

	{
		name: "Random Doubles Battle",
		section: "XY Doubles",

		gameType: 'doubles',
		team: 'randomDoubles',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
	},
	{
		name: "Smogon Doubles",
		section: "XY Doubles",

		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard Doubles', 'Team Preview'],
		banlist: ['Dark Void', 'Soul Dew',
			'Mewtwo',
			'Lugia',
			'Ho-Oh',
			'Kyogre',
			'Groudon',
			'Rayquaza',
			'Dialga',
			'Palkia',
			'Giratina', 'Giratina-Origin',
			'Arceus',
			'Reshiram',
			'Zekrom',
			'Kyurem-White',
			'Xerneas',
			'Yveltal'
		]
	},
	{
		name: "Smogon Doubles Ubers",
		section: "XY Doubles",

		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Pokemon', 'Species Clause', 'Moody Clause', 'OHKO Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal', 'Dark Void']
	},
	{
		name: "Smogon Doubles UU",
		section: "XY Doubles",

		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Smogon Doubles'],
		banlist: ['Abomasnow', 'Aegislash', 'Amoonguss', 'Ampharos', 'Azumarill', 'Bisharp', 'Breloom', 'Chandelure', 'Charizard', 'Conkeldurr',
			'Cresselia', 'Dragonite', 'Dusclops', 'Excadrill', 'Ferrothorn', 'Garchomp', 'Gardevoir', 'Gastrodon', 'Genesect', 'Gengar',
			'Gliscor', 'Greninja', 'Gyarados', 'Heatran', 'Hitmontop', 'Jirachi', 'Kangaskhan', 'Klefki', 'Landorus-T', 'Latios',
			'Lucario', 'Mamoswine', 'Manectric', 'Mawile', 'Metagross', 'Ninetales', 'Politoed', 'Reuniclus', 'Rhyperior', 'Rotom-W',
			'Sableye', 'Salamence', 'Scizor', 'Shaymin-Sky', 'Sylveon', 'Talonflame', 'Terrakion', 'Thundurus', 'Togekiss', 'Trevenant',
			'Tyranitar', 'Venusaur', 'Volcarona', 'Whimsicott', 'Zapdos'
		]
	},
	{
		name: "XY Battle Spot Doubles",
		section: "XY Doubles",

		gameType: 'doubles',
		onBegin: function () {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0, 4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview VGC'],
		validateTeam: function (team, format) {
			if (team.length < 4) return ['You must bring at least 4 Pokemon.'];
		}
	},
	{
		name: "VGC 2014",
		section: "XY Doubles",

		gameType: 'doubles',
		onBegin: function () {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0, 4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview VGC', 'Kalos Pokedex'],
		requirePentagon: true,
		banlist: [], // The neccessary bans are in Standard GBU
		validateTeam: function (team, format) {
			if (team.length < 4) return ['You must bring at least 4 Pokemon.'];
		}
	},
	{
		name: "Doubles Challenge Cup",
		section: 'XY Doubles',

		gameType: 'doubles',
		team: 'randomCC',
		searchShow: false,
		ruleset: ['Pokemon', 'HP Percentage Mod']
	},
	{
		name: "Doubles Custom Game",
		section: "XY Doubles",

		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		debug: true,
		ruleset: ['Team Preview']
	},

	// Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		name: "CAP",
		section: "Other Metagames",
        column: 2,

		ruleset: ['CAP Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Swagger']
	},
	{
		name: "Challenge Cup",
		section: "Other Metagames",

		team: 'randomCC',
		ruleset: ['Pokemon', 'HP Percentage Mod']
	},
	{
		name: "Challenge Cup 1-vs-1",
		section: "Other Metagames",

		team: 'randomCC',
		ruleset: ['Pokemon', 'Team Preview 1v1', 'HP Percentage Mod'],
		onBegin: function () {
			this.debug('Cutting down to 1');
			this.p1.pokemon = this.p1.pokemon.slice(0, 1);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 1);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		}
	},
	{
		name: "Hackmons",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'HP Percentage Mod']
	},
	{
		name: "Balanced Hackmons",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'OHKO Clause', 'HP Percentage Mod', 'Ability Clause'],
		banlist: ['Wonder Guard', 'Shadow Tag', 'Arena Trap', 'Pure Power', 'Huge Power', 'Parental Bond']
	},
	{
		name: "1v1",
		section: 'Other Metagames',

		onBegin: function () {
			this.p1.pokemon = this.p1.pokemon.slice(0, 1);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 1);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Unreleased', 'Illegal', 'Focus Sash', 'Kangaskhanite', 'Soul Dew',
			'Destiny Bond', 'Explosion', 'Final Gambit', 'Healing Wish', 'Lunar Dance', 'Memento', 'Perish Song', 'Selfdestruct',
			'Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Xerneas', 'Yveltal', 'Zekrom'
		]
	},
	{
		name: "OU Monotype",
		section: "Other Metagames",

		ruleset: ['OU', 'Same Type Clause']
	},
	{
		name: "Sky Battles",
		section: "Other Metagames",

		validateSet: function (set) {
			var template = this.getTemplate(set.species || set.name);
			if (template.types.indexOf('Flying') === -1 && set.ability !== 'Levitate') {
				return [set.species + " is not a Flying type and does not have the ability Levitate."];
			}
		},
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Uber', 'Iron Ball', 'Pinsirite', 'Soul Dew',
			'Body Slam', 'Bulldoze', 'Dig', 'Dive', 'Earth Power', 'Earthquake', 'Electric Terrain', 'Fire Pledge', 'Fissure', 'Flying Press',
			'Frenzy Plant', 'Geomancy', 'Grass Knot', 'Grass Pledge', 'Grassy Terrain', 'Gravity', 'Heat Crash', 'Heavy Slam', 'Ingrain', "Land's Wrath", 
			'Magnitude', 'Mat Block', 'Misty Terrain', 'Mud Sport', 'Muddy Water', 'Rototiller', 'Seismic Toss', 'Slam', 'Smack Down', 'Spikes',
			'Stomp', 'Substitute', 'Surf', 'Toxic Spikes', 'Water Pledge', 'Water Sport',
			'Archen', 'Chatot', 'Delibird', 'Dodrio', 'Doduo', 'Ducklett', "Farfetch'd", 'Fletchling', 'Gastly', 'Gengar',
			'Hawlucha', 'Hoothoot', 'Murkrow', 'Natu', 'Pidgey', 'Pidove', 'Rufflet', 'Shaymin-Sky', 'Spearow', 'Starly',
			'Taillow', 'Vullaby'
		]
	},
	{
		name: "Inverse Battle",
		section: "Other Metagames",

		mod: 'inverse',
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Gengarite', 'Kangaskhanite', 'Soul Dew',
			'Arceus', 'Darkrai', 'Deoxys-Attack', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-Black', 'Lugia',
			'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Kyurem-White', 'Xerneas', 'Yveltal', 'Zekrom'
		]
	},
	{
		name: "Ability Exchange",
		section: "Other Metagames",

		searchShow: false,
		ruleset: ['Pokemon', 'Ability Exchange Pokemon', 'Sleep Clause Mod', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'HP Percentage Mod', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal', 'Ignore Illegal Abilities', 'Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Swagger', 'Slaking', 'Regigigas']
	},
	{
		name: "Ability Shift",
		section: "Other Metagames",

		mod: 'abilityshift',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Ampharosite', 'Gyaradosite',
			'Arceus', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyurem-White',
			'Lugia', 'Meloetta', 'Mewtwo', 'Palkia', 'Rayquaza', 'Regigigas', 'Reshiram', 'Slaking', 'Xerneas', 'Zekrom'
		]
	},
	{
		name: "Alphabet Cup",
		section: "Other Metagames",

		searchShow: false,
		ruleset: ['OU'],
		banlist: ['Swoobat'],
		validateTeam: function (team, format) {
			var letters = {};
			var letter = '';
			for (var i = 0; i < team.length; i++) {
				letter = Tools.getTemplate(team[i]).species.slice(0, 1).toUpperCase();
				if (letter in letters) return ['Your team cannot have more that one Pokémon starting with the letter "' + letter + '".'];
				letters[letter] = 1;
			}
		}
	},
	{
		name: "Averagemons",
		section: "Other Metagames",

		mod: 'averagemons',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['DeepSeaScale', 'DeepSeaTooth', 'Eviolite', 'Light Ball', 'Mawilite', 'Medichamite', 'Soul Dew', 'Thick Club', 'Huge Power', 'Pure Power', 'Shedinja', 'Smeargle']
	},
	{
		name: "Gen-NEXT OU",
		section: "Other Metagames",

		mod: 'gennext',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard NEXT', 'Team Preview'],
		banlist: ['Uber']
	},
	{
		name: "Middle Cup",
		section: "Other Metagames",

		searchShow: false,
		maxLevel: 50,
		defaultLevel: 50,
		validateSet: function (set) {
			var template = this.getTemplate(set.species || set.name);
			if (!template.evos || template.evos.length === 0 || !template.prevo) {
				return [set.species + " is not the middle Pokémon in an evolution chain."];
			}
		},
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Eviolite']
	},
	{
		name: "STABmons",
		section: "Other Metagames",

		searchShow: false,
		ruleset: ['OU']
	},
	{
		name: "[Gen 5] Glitchmons",
		section: "Other Metagames",

		mod: 'gen5',
		searchShow: false,
		mimicGlitch: true,
		ruleset: ['Pokemon', 'Team Preview', 'HP Percentage Mod'],
		banlist: ['Illegal', 'Unreleased']
	},

	// BW2 Singles
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 5] OU",
		section: "BW2 Singles",
		column: 2,

		mod: 'gen5',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
	},
	{
		name: "[Gen 5] Ubers",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['Pokemon', 'Team Preview', 'Standard Ubers'],
		banlist: []
	},
	{
		name: "[Gen 5] UU",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] OU'],
		banlist: ['OU', 'BL', 'Drought', 'Sand Stream']
	},
	{
		name: "[Gen 5] RU",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] UU'],
		banlist: ['UU', 'BL2', 'Shell Smash + Baton Pass', 'Snow Warning']
	},
	{
		name: "[Gen 5] NU",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] RU'],
		banlist: ['RU', 'BL3', 'Prankster + Assist']
	},
	{
		name: "[Gen 5] GBU Singles",
		section: "BW2 Singles",

		mod: 'gen5',
		validateSet: function (set) {
			if (!set.level || set.level >= 50) set.forcedLevel = 50;
			return [];
		},
		onBegin: function () {
			this.debug('cutting down to 3');
			this.p1.pokemon = this.p1.pokemon.slice(0, 3);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 3);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview GBU'],
		banlist: ['Sky Drop', 'Dark Void']
	},
	{
		name: "[Gen 5] Custom Game",
		section: "BW2 Singles",

		mod: 'gen5',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview']
	},

	// BW2 Doubles
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 5] Smogon Doubles",
		section: 'BW2 Doubles',
		column: 2,

		mod: 'gen5',
		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal', 'Dark Void', 'Soul Dew', 'Sky Drop',
			'Mewtwo',
			'Lugia',
			'Ho-Oh',
			'Kyogre',
			'Groudon',
			'Rayquaza',
			'Dialga',
			'Palkia',
			'Giratina', 'Giratina-Origin',
			'Arceus',
			'Reshiram',
			'Zekrom',
			'Kyurem-White'
		]
	},
	{
		name: "[Gen 5] GBU Doubles",
		section: 'BW2 Doubles',

		mod: 'gen5',
		gameType: 'doubles',
		onBegin: function () {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0, 4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview VGC'],
		banlist: ['Sky Drop', 'Dark Void']
	},
	{
		name: "[Gen 5] Doubles Custom Game",
		section: 'BW2 Doubles',

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview']
	},

	// Past Generations
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 4] OU (beta)",
		section: "Past Generations",
		column: 2,

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber']
	},
	{
		name: "[Gen 4] Ubers (beta)",
		section: "Past Generations",

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Arceus']
	},
	{
		name: "[Gen 4] UU (beta)",
		section: "Past Generations",

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'OU', 'BL']
	},
	{
		name: "[Gen 4] Custom Game",
		section: "Past Generations",

		mod: 'gen4',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod']
	},
	{
		name: "[Gen 3] OU (beta)",
		section: "Past Generations",

		mod: 'gen3',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'Smeargle + Ingrain']
	},
	{
		name: "[Gen 3] Custom Game",
		section: "Past Generations",

		mod: 'gen3',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod']
	},
	{
		name: "[Gen 2] OU (beta)",
		section: "Past Generations",

		mod: 'gen2',
		debug: true,
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'Mean Look + Hypnosis + Perish Song']
	},
	{
		name: "[Gen 2] Custom Game",
		section: "Past Generations",

		mod: 'gen2',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod']
	},
	{
		name: "[Gen 1] OU (beta)",
		section: "Past Generations",

		mod: 'gen1',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber',
			'Kakuna + Poison Sting + Harden', 'Kakuna + String Shot + Harden',
			'Beedrill + Poison Sting + Harden', 'Beedrill + String Shot + Harden',
			'Nidoking + Fury Attack + Thrash',
			'Exeggutor + Poison Powder + Stomp', 'Exeggutor + Sleep Powder + Stomp', 'Exeggutor + Stun Spore + Stomp',
			'Eevee + Tackle + Growl',
			'Vaporeon + Tackle + Growl',
			'Jolteon + Tackle + Growl', 'Jolteon + Focus Energy + Thunder Shock',
			'Flareon + Tackle + Growl', 'Flareon + Focus Energy + Ember'
		]
	},
	{
		name: "[Gen 1] Custom Game",
		section: "Past Generations",

		mod: 'gen1',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod']
	}

];
