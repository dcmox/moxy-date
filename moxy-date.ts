// tslint:disable: object-literal-sort-keys
const MONTH_TRANSLATION: any = {
	Jan: { number: '01', full: 'January' },
	Feb: { number: '02', full: 'February' },
	Mar: { number: '03', full: 'March' },
	Apr: { number: '04', full: 'April' },
	May: { number: '05', full: 'May' },
	Jun: { number: '06', full: 'June' },
	Jul: { number: '07', full: 'July' },
	Aug: { number: '08', full: 'August' },
	Sep: { number: '09', full: 'September' },
	Oct: { number: '10', full: 'October' },
	Nov: { number: '11', full: 'November' },
	Dec: { number: '12', full: 'December' },
}

const WEEKDAY_TRANSLATION: any = {
	Sun: { number: '0', numberAlt: '7', full: 'Sunday' },
	Mon: { number: '1', numberAlt: '1', full: 'Monday' },
	Tue: { number: '2', numberAlt: '2', full: 'Tuesday' },
	Wed: { number: '3', numberAlt: '3', full: 'Wednesday' },
	Thu: { number: '4', numberAlt: '4', full: 'Thursday' },
	Fri: { number: '5', numberAlt: '5', full: 'Friday' },
	Sat: { number: '6', numberAlt: '6', full: 'Saturday' },
}

const TZ_DATABASE: any = {
	'Africa/Abidjan': '+00:00',
	'Africa/Accra': '+00:00',
	'Africa/Addis_Ababa': '+03:00',
	'Africa/Algiers': '+01:00',
	'Africa/Asmara': '+03:00',
	'Africa/Bamako': '+00:00',
	'Africa/Bangui': '+01:00',
	'Africa/Banjul': '+00:00',
	'Africa/Bissau': '+00:00',
	'Africa/Blantyre': '+02:00',
	'Africa/Brazzaville': '+01:00',
	'Africa/Bujumbura': '+02:00',
	'Africa/Cairo': '+02:00',
	'Africa/Casablanca': '+01:00',
	'Africa/Ceuta': '+01:00',
	'Africa/Conakry': '+00:00',
	'Africa/Dakar': '+00:00',
	'Africa/Dar_es_Salaam': '+03:00',
	'Africa/Djibouti': '+03:00',
	'Africa/Douala': '+01:00',
	'Africa/El_Aaiun': '+00:00',
	'Africa/Freetown': '+00:00',
	'Africa/Gaborone': '+02:00',
	'Africa/Harare': '+02:00',
	'Africa/Johannesburg': '+02:00',
	'Africa/Juba': '+03:00',
	'Africa/Kampala': '+03:00',
	'Africa/Khartoum': '+02:00',
	'Africa/Kigali': '+02:00',
	'Africa/Kinshasa': '+01:00',
	'Africa/Lagos': '+01:00',
	'Africa/Libreville': '+01:00',
	'Africa/Lome': '+00:00',
	'Africa/Luanda': '+01:00',
	'Africa/Lubumbashi': '+02:00',
	'Africa/Lusaka': '+02:00',
	'Africa/Malabo': '+01:00',
	'Africa/Maputo': '+02:00',
	'Africa/Maseru': '+02:00',
	'Africa/Mbabane': '+02:00',
	'Africa/Mogadishu': '+03:00',
	'Africa/Monrovia': '+00:00',
	'Africa/Nairobi': '+03:00',
	'Africa/Ndjamena': '+01:00',
	'Africa/Niamey': '+01:00',
	'Africa/Nouakchott': '+00:00',
	'Africa/Ouagadougou': '+00:00',
	'Africa/Porto-Novo': '+01:00',
	'Africa/Sao_Tome': '+00:00',
	'Africa/Timbuktu': '+00:00',
	'Africa/Tripoli': '+02:00',
	'Africa/Tunis': '+01:00',
	'Africa/Windhoek': '+02:00',
	'America/Adak': '-10:00',
	'America/Anchorage': '-09:00',
	'America/Anguilla': '-04:00',
	'America/Antigua': '-04:00',
	'America/Araguaina': '-03:00',
	'America/Argentina/Buenos_Aires': '-03:00',
	'America/Argentina/Catamarca': '-03:00',
	'America/Argentina/ComodRivadavia': '-03:00',
	'America/Argentina/Cordoba': '-03:00',
	'America/Argentina/Jujuy': '-03:00',
	'America/Argentina/La_Rioja': '-03:00',
	'America/Argentina/Mendoza': '-03:00',
	'America/Argentina/Rio_Gallegos': '-03:00',
	'America/Argentina/Salta': '-03:00',
	'America/Argentina/San_Juan': '-03:00',
	'America/Argentina/San_Luis': '-03:00',
	'America/Argentina/Tucuman': '-03:00',
	'America/Argentina/Ushuaia': '-03:00',
	'America/Aruba': '-04:00',
	'America/Asuncion': '-04:00',
	'America/Atikokan': '-05:00',
	'America/Atka': '-10:00',
	'America/Bahia': '-03:00',
	'America/Bahia_Banderas': '-06:00',
	'America/Barbados': '-04:00',
	'America/Belem': '-03:00',
	'America/Belize': '-06:00',
	'America/Blanc-Sablon': '-04:00',
	'America/Boa_Vista': '-04:00',
	'America/Bogota': '-05:00',
	'America/Boise': '-07:00',
	'America/Buenos_Aires': '-03:00',
	'America/Cambridge_Bay': '-07:00',
	'America/Campo_Grande': '-04:00',
	'America/Cancun': '-05:00',
	'America/Caracas': '-04:00',
	'America/Catamarca': '-03:00',
	'America/Cayenne': '-03:00',
	'America/Cayman': '-05:00',
	'America/Chicago': '-06:00',
	'America/Chihuahua': '-07:00',
	'America/Coral_Harbour': '-05:00',
	'America/Cordoba': '-03:00',
	'America/Costa_Rica': '-06:00',
	'America/Creston': '-07:00',
	'America/Cuiaba': '-04:00',
	'America/Curacao': '-04:00',
	'America/Danmarkshavn': '+00:00',
	'America/Dawson': '-08:00',
	'America/Dawson_Creek': '-07:00',
	'America/Denver': '-07:00',
	'America/Detroit': '-05:00',
	'America/Dominica': '-04:00',
	'America/Edmonton': '-07:00',
	'America/Eirunepe': '-05:00',
	'America/El_Salvador': '-06:00',
	'America/Ensenada': '-08:00',
	'America/Fort_Nelson': '-07:00',
	'America/Fort_Wayne': '-05:00',
	'America/Fortaleza': '-03:00',
	'America/Glace_Bay': '-04:00',
	'America/Godthab': '-03:00',
	'America/Goose_Bay': '-04:00',
	'America/Grand_Turk': '-05:00',
	'America/Grenada': '-04:00',
	'America/Guadeloupe': '-04:00',
	'America/Guatemala': '-06:00',
	'America/Guayaquil': '-05:00',
	'America/Guyana': '-04:00',
	'America/Halifax': '-04:00',
	'America/Havana': '-05:00',
	'America/Hermosillo': '-07:00',
	'America/Indiana/Indianapolis': '-05:00',
	'America/Indiana/Knox': '-06:00',
	'America/Indiana/Marengo': '-05:00',
	'America/Indiana/Petersburg': '-05:00',
	'America/Indiana/Tell_City': '-06:00',
	'America/Indiana/Vevay': '-05:00',
	'America/Indiana/Vincennes': '-05:00',
	'America/Indiana/Winamac': '-05:00',
	'America/Indianapolis': '-05:00',
	'America/Inuvik': '-07:00',
	'America/Iqaluit': '-05:00',
	'America/Jamaica': '-05:00',
	'America/Jujuy': '-03:00',
	'America/Juneau': '-09:00',
	'America/Kentucky/Louisville': '-05:00',
	'America/Kentucky/Monticello': '-05:00',
	'America/Knox_IN': '-06:00',
	'America/Kralendijk': '-04:00',
	'America/La_Paz': '-04:00',
	'America/Lima': '-05:00',
	'America/Los_Angeles': '-08:00',
	'America/Louisville': '-05:00',
	'America/Lower_Princes': '-04:00',
	'America/Maceio': '-03:00',
	'America/Managua': '-06:00',
	'America/Manaus': '-04:00',
	'America/Marigot': '-04:00',
	'America/Martinique': '-04:00',
	'America/Matamoros': '-06:00',
	'America/Mazatlan': '-07:00',
	'America/Mendoza': '-03:00',
	'America/Menominee': '-06:00',
	'America/Merida': '-06:00',
	'America/Metlakatla': '-09:00',
	'America/Mexico_City': '-06:00',
	'America/Miquelon': '-03:00',
	'America/Moncton': '-04:00',
	'America/Monterrey': '-06:00',
	'America/Montevideo': '-03:00',
	'America/Montreal': '-05:00',
	'America/Montserrat': '-04:00',
	'America/Nassau': '-05:00',
	'America/New_York': '-05:00',
	'America/Nipigon': '-05:00',
	'America/Nome': '-09:00',
	'America/Noronha': '-02:00',
	'America/North_Dakota/Beulah': '-06:00',
	'America/North_Dakota/Center': '-06:00',
	'America/North_Dakota/New_Salem': '-06:00',
	'America/Ojinaga': '-07:00',
	'America/Panama': '-05:00',
	'America/Pangnirtung': '-05:00',
	'America/Paramaribo': '-03:00',
	'America/Phoenix': '-07:00',
	'America/Port_of_Spain': '-04:00',
	'America/Port-au-Prince': '-05:00',
	'America/Porto_Acre': '-05:00',
	'America/Porto_Velho': '-04:00',
	'America/Puerto_Rico': '-04:00',
	'America/Punta_Arenas': '-03:00',
	'America/Rainy_River': '-06:00',
	'America/Rankin_Inlet': '-06:00',
	'America/Recife': '-03:00',
	'America/Regina': '-06:00',
	'America/Resolute': '-06:00',
	'America/Rio_Branco': '-05:00',
	'America/Rosario': '-03:00',
	'America/Santa_Isabel': '-08:00',
	'America/Santarem': '-03:00',
	'America/Santiago': '-04:00',
	'America/Santo_Domingo': '-04:00',
	'America/Sao_Paulo': '-03:00',
	'America/Scoresbysund': '-01:00',
	'America/Shiprock': '-07:00',
	'America/Sitka': '-09:00',
	'America/St_Barthelemy': '-04:00',
	'America/St_Johns': '-03:30',
	'America/St_Kitts': '-04:00',
	'America/St_Lucia': '-04:00',
	'America/St_Thomas': '-04:00',
	'America/St_Vincent': '-04:00',
	'America/Swift_Current': '-06:00',
	'America/Tegucigalpa': '-06:00',
	'America/Thule': '-04:00',
	'America/Thunder_Bay': '-05:00',
	'America/Tijuana': '-08:00',
	'America/Toronto': '-05:00',
	'America/Tortola': '-04:00',
	'America/Vancouver': '-08:00',
	'America/Virgin': '-04:00',
	'America/Whitehorse': '-08:00',
	'America/Winnipeg': '-06:00',
	'America/Yakutat': '-09:00',
	'America/Yellowknife': '-07:00',
	'Antarctica/Casey': '+11:00',
	'Antarctica/Davis': '+07:00',
	'Antarctica/DumontDUrville': '+10:00',
	'Antarctica/Macquarie': '+11:00',
	'Antarctica/Mawson': '+05:00',
	'Antarctica/McMurdo': '+12:00',
	'Antarctica/Palmer': '-03:00',
	'Antarctica/Rothera': '-03:00',
	'Antarctica/South_Pole': '+12:00',
	'Antarctica/Syowa': '+03:00',
	'Antarctica/Troll': '+00:00',
	'Antarctica/Vostok': '+06:00',
	'Arctic/Longyearbyen': '+01:00',
	'Asia/Aden': '+03:00',
	'Asia/Almaty': '+06:00',
	'Asia/Amman': '+02:00',
	'Asia/Anadyr': '+12:00',
	'Asia/Aqtau': '+05:00',
	'Asia/Aqtobe': '+05:00',
	'Asia/Ashgabat': '+05:00',
	'Asia/Ashkhabad': '+05:00',
	'Asia/Atyrau': '+05:00',
	'Asia/Baghdad': '+03:00',
	'Asia/Bahrain': '+03:00',
	'Asia/Baku': '+04:00',
	'Asia/Bangkok': '+07:00',
	'Asia/Barnaul': '+07:00',
	'Asia/Beirut': '+02:00',
	'Asia/Bishkek': '+06:00',
	'Asia/Brunei': '+08:00',
	'Asia/Calcutta': '+05:30',
	'Asia/Chita': '+09:00',
	'Asia/Choibalsan': '+08:00',
	'Asia/Chongqing': '+08:00',
	'Asia/Chungking': '+08:00',
	'Asia/Colombo': '+05:30',
	'Asia/Dacca': '+06:00',
	'Asia/Damascus': '+02:00',
	'Asia/Dhaka': '+06:00',
	'Asia/Dili': '+09:00',
	'Asia/Dubai': '+04:00',
	'Asia/Dushanbe': '+05:00',
	'Asia/Famagusta': '+02:00',
	'Asia/Gaza': '+02:00',
	'Asia/Harbin': '+08:00',
	'Asia/Hebron': '+02:00',
	'Asia/Ho_Chi_Minh': '+07:00',
	'Asia/Hong_Kong': '+08:00',
	'Asia/Hovd': '+07:00',
	'Asia/Irkutsk': '+08:00',
	'Asia/Istanbul': '+03:00',
	'Asia/Jakarta': '+07:00',
	'Asia/Jayapura': '+09:00',
	'Asia/Jerusalem': '+02:00',
	'Asia/Kabul': '+04:30',
	'Asia/Kamchatka': '+12:00',
	'Asia/Karachi': '+05:00',
	'Asia/Kashgar': '+06:00',
	'Asia/Kathmandu': '+05:45',
	'Asia/Katmandu': '+05:45',
	'Asia/Khandyga': '+09:00',
	'Asia/Kolkata': '+05:30',
	'Asia/Krasnoyarsk': '+07:00',
	'Asia/Kuala_Lumpur': '+08:00',
	'Asia/Kuching': '+08:00',
	'Asia/Kuwait': '+03:00',
	'Asia/Macao': '+08:00',
	'Asia/Macau': '+08:00',
	'Asia/Magadan': '+11:00',
	'Asia/Makassar': '+08:00',
	'Asia/Manila': '+08:00',
	'Asia/Muscat': '+04:00',
	'Asia/Novokuznetsk': '+07:00',
	'Asia/Novosibirsk': '+07:00',
	'Asia/Omsk': '+06:00',
	'Asia/Oral': '+05:00',
	'Asia/Phnom_Penh': '+07:00',
	'Asia/Pontianak': '+07:00',
	'Asia/Pyongyang': '+09:00',
	'Asia/Qatar': '+03:00',
	'Asia/Qyzylorda': '+05:00',
	'Asia/Rangoon': '+06:30',
	'Asia/Riyadh': '+03:00',
	'Asia/Saigon': '+07:00',
	'Asia/Sakhalin': '+11:00',
	'Asia/Samarkand': '+05:00',
	'Asia/Seoul': '+09:00',
	'Asia/Shanghai': '+08:00',
	'Asia/Singapore': '+08:00',
	'Asia/Srednekolymsk': '+11:00',
	'Asia/Taipei': '+08:00',
	'Asia/Tashkent': '+05:00',
	'Asia/Tbilisi': '+04:00',
	'Asia/Tehran': '+03:30',
	'Asia/Tel_Aviv': '+02:00',
	'Asia/Thimbu': '+06:00',
	'Asia/Thimphu': '+06:00',
	'Asia/Tokyo': '+09:00',
	'Asia/Tomsk': '+07:00',
	'Asia/Ujung_Pandang': '+08:00',
	'Asia/Ulaanbaatar': '+08:00',
	'Asia/Ulan_Bator': '+08:00',
	'Asia/Urumqi': '+06:00',
	'Asia/Ust-Nera': '+10:00',
	'Asia/Vientiane': '+07:00',
	'Asia/Vladivostok': '+10:00',
	'Asia/Yakutsk': '+09:00',
	'Asia/Yangon': '+06:30',
	'Asia/Yekaterinburg': '+05:00',
	'Asia/Yerevan': '+04:00',
	'Atlantic/Azores': '-01:00',
	'Atlantic/Bermuda': '-04:00',
	'Atlantic/Canary': '+00:00',
	'Atlantic/Cape_Verde': '-01:00',
	'Atlantic/Faeroe': '+00:00',
	'Atlantic/Faroe': '+00:00',
	'Atlantic/Jan_Mayen': '+01:00',
	'Atlantic/Madeira': '+00:00',
	'Atlantic/Reykjavik': '+00:00',
	'Atlantic/South_Georgia': '-02:00',
	'Atlantic/St_Helena': '+00:00',
	'Atlantic/Stanley': '-03:00',
	'Australia/ACT': '+10:00',
	'Australia/Adelaide': '+09:30',
	'Australia/Brisbane': '+10:00',
	'Australia/Broken_Hill': '+09:30',
	'Australia/Canberra': '+10:00',
	'Australia/Currie': '+10:00',
	'Australia/Darwin': '+09:30',
	'Australia/Eucla': '+08:45',
	'Australia/Hobart': '+10:00',
	'Australia/LHI': '+10:30',
	'Australia/Lindeman': '+10:00',
	'Australia/Lord_Howe': '+10:30',
	'Australia/Melbourne': '+10:00',
	'Australia/North': '+09:30',
	'Australia/NSW': '+10:00',
	'Australia/Perth': '+08:00',
	'Australia/Queensland': '+10:00',
	'Australia/South': '+09:30',
	'Australia/Sydney': '+10:00',
	'Australia/Tasmania': '+10:00',
	'Australia/Victoria': '+10:00',
	'Australia/West': '+08:00',
	'Australia/Yancowinna': '+09:30',
	'Brazil/Acre': '-05:00',
	'Brazil/DeNoronha': '-02:00',
	'Brazil/East': '-03:00',
	'Brazil/West': '-04:00',
	'Canada/Atlantic': '-04:00',
	'Canada/Central': '-06:00',
	'Canada/Eastern': '-05:00',
	'Canada/Mountain': '-07:00',
	'Canada/Newfoundland': '-03:30',
	'Canada/Pacific': '-08:00',
	'Canada/Saskatchewan': '-06:00',
	'Canada/Yukon': '-08:00',
	// tslint:disable: object-literal-key-quotes
	CET: '+01:00',
	'Chile/Continental': '-04:00',
	'Chile/EasterIsland': '-06:00',
	CST6CDT: '-06:00',
	Cuba: '-05:00',
	EET: '+02:00',
	Egypt: '+02:00',
	Eire: '+00:00',
	EST: '-05:00',
	EST5EDT: '-05:00',
	'Etc/GMT': '+00:00',
	'Etc/GMT+0': '+00:00',
	'Etc/GMT+1': '-01:00',
	'Etc/GMT+10': '-10:00',
	'Etc/GMT+11': '-11:00',
	'Etc/GMT+12': '-12:00',
	'Etc/GMT+2': '-02:00',
	'Etc/GMT+3': '-03:00',
	'Etc/GMT+4': '-04:00',
	'Etc/GMT+5': '-05:00',
	'Etc/GMT+6': '-06:00',
	'Etc/GMT+7': '-07:00',
	'Etc/GMT+8': '-08:00',
	'Etc/GMT+9': '-09:00',
	'Etc/GMT0': '+00:00',
	'Etc/GMT-0': '+00:00',
	'Etc/GMT-1': '+01:00',
	'Etc/GMT-10': '+10:00',
	'Etc/GMT-11': '+11:00',
	'Etc/GMT-12': '+12:00',
	'Etc/GMT-13': '+13:00',
	'Etc/GMT-14': '+14:00',
	'Etc/GMT-2': '+02:00',
	'Etc/GMT-3': '+03:00',
	'Etc/GMT-4': '+04:00',
	'Etc/GMT-5': '+05:00',
	'Etc/GMT-6': '+06:00',
	'Etc/GMT-7': '+07:00',
	'Etc/GMT-8': '+08:00',
	'Etc/GMT-9': '+09:00',
	'Etc/Greenwich': '+00:00',
	'Etc/UCT': '+00:00',
	'Etc/Universal': '+00:00',
	'Etc/UTC': '+00:00',
	'Etc/Zulu': '+00:00',
	'Europe/Amsterdam': '+01:00',
	'Europe/Andorra': '+01:00',
	'Europe/Astrakhan': '+04:00',
	'Europe/Athens': '+02:00',
	'Europe/Belfast': '+00:00',
	'Europe/Belgrade': '+01:00',
	'Europe/Berlin': '+01:00',
	'Europe/Bratislava': '+01:00',
	'Europe/Brussels': '+01:00',
	'Europe/Bucharest': '+02:00',
	'Europe/Budapest': '+01:00',
	'Europe/Busingen': '+01:00',
	'Europe/Chisinau': '+02:00',
	'Europe/Copenhagen': '+01:00',
	'Europe/Dublin': '+00:00',
	'Europe/Gibraltar': '+01:00',
	'Europe/Guernsey': '+00:00',
	'Europe/Helsinki': '+02:00',
	'Europe/Isle_of_Man': '+00:00',
	'Europe/Istanbul': '+03:00',
	'Europe/Jersey': '+00:00',
	'Europe/Kaliningrad': '+02:00',
	'Europe/Kiev': '+02:00',
	'Europe/Kirov': '+03:00',
	'Europe/Lisbon': '+00:00',
	'Europe/Ljubljana': '+01:00',
	'Europe/London': '+00:00',
	'Europe/Luxembourg': '+01:00',
	'Europe/Madrid': '+01:00',
	'Europe/Malta': '+01:00',
	'Europe/Mariehamn': '+02:00',
	'Europe/Minsk': '+03:00',
	'Europe/Monaco': '+01:00',
	'Europe/Moscow': '+03:00',
	'Asia/Nicosia': '+02:00',
	'Europe/Oslo': '+01:00',
	'Europe/Paris': '+01:00',
	'Europe/Podgorica': '+01:00',
	'Europe/Prague': '+01:00',
	'Europe/Riga': '+02:00',
	'Europe/Rome': '+01:00',
	'Europe/Samara': '+04:00',
	'Europe/San_Marino': '+01:00',
	'Europe/Sarajevo': '+01:00',
	'Europe/Saratov': '+04:00',
	'Europe/Simferopol': '+03:00',
	'Europe/Skopje': '+01:00',
	'Europe/Sofia': '+02:00',
	'Europe/Stockholm': '+01:00',
	'Europe/Tallinn': '+02:00',
	'Europe/Tirane': '+01:00',
	'Europe/Tiraspol': '+02:00',
	'Europe/Ulyanovsk': '+04:00',
	'Europe/Uzhgorod': '+02:00',
	'Europe/Vaduz': '+01:00',
	'Europe/Vatican': '+01:00',
	'Europe/Vienna': '+01:00',
	'Europe/Vilnius': '+02:00',
	'Europe/Volgograd': '+04:00',
	'Europe/Warsaw': '+01:00',
	'Europe/Zagreb': '+01:00',
	'Europe/Zaporozhye': '+02:00',
	'Europe/Zurich': '+01:00',
	GB: '+00:00',
	'GB-Eire': '+00:00',
	GMT: '+00:00',
	'GMT+0': '+00:00',
	GMT0: '+00:00',
	'GMT-0': '+00:00',
	Greenwich: '+00:00',
	Hongkong: '+08:00',
	HST: '-10:00',
	Iceland: '+00:00',
	'Indian/Antananarivo': '+03:00',
	'Indian/Chagos': '+06:00',
	'Indian/Christmas': '+07:00',
	'Indian/Cocos': '+06:30',
	'Indian/Comoro': '+03:00',
	'Indian/Kerguelen': '+05:00',
	'Indian/Mahe': '+04:00',
	'Indian/Maldives': '+05:00',
	'Indian/Mauritius': '+04:00',
	'Indian/Mayotte': '+03:00',
	'Indian/Reunion': '+04:00',
	Iran: '+03:30',
	Israel: '+02:00',
	Jamaica: '-05:00',
	Japan: '+09:00',
	Kwajalein: '+12:00',
	Libya: '+02:00',
	MET: '+01:00',
	'Mexico/BajaNorte': '-08:00',
	'Mexico/BajaSur': '-07:00',
	'Mexico/General': '-06:00',
	MST: '-07:00',
	MST7MDT: '-07:00',
	Navajo: '-07:00',
	NZ: '+12:00',
	'NZ-CHAT': '+12:45',
	'Pacific/Apia': '+13:00',
	'Pacific/Auckland': '+12:00',
	'Pacific/Bougainville': '+11:00',
	'Pacific/Chatham': '+12:45',
	'Pacific/Chuuk': '+10:00',
	'Pacific/Easter': '-06:00',
	'Pacific/Efate': '+11:00',
	'Pacific/Enderbury': '+13:00',
	'Pacific/Fakaofo': '+13:00',
	'Pacific/Fiji': '+12:00',
	'Pacific/Funafuti': '+12:00',
	'Pacific/Galapagos': '-06:00',
	'Pacific/Gambier': '-09:00',
	'Pacific/Guadalcanal': '+11:00',
	'Pacific/Guam': '+10:00',
	'Pacific/Honolulu': '-10:00',
	'Pacific/Johnston': '-10:00',
	'Pacific/Kiritimati': '+14:00',
	'Pacific/Kosrae': '+11:00',
	'Pacific/Kwajalein': '+12:00',
	'Pacific/Majuro': '+12:00',
	'Pacific/Marquesas': '-09:30',
	'Pacific/Midway': '-11:00',
	'Pacific/Nauru': '+12:00',
	'Pacific/Niue': '-11:00',
	'Pacific/Norfolk': '+11:00',
	'Pacific/Noumea': '+11:00',
	'Pacific/Pago_Pago': '-11:00',
	'Pacific/Palau': '+09:00',
	'Pacific/Pitcairn': '-08:00',
	'Pacific/Pohnpei': '+11:00',
	'Pacific/Ponape': '+11:00',
	'Pacific/Port_Moresby': '+10:00',
	'Pacific/Rarotonga': '-10:00',
	'Pacific/Saipan': '+10:00',
	'Pacific/Samoa': '-11:00',
	'Pacific/Tahiti': '-10:00',
	'Pacific/Tarawa': '+12:00',
	'Pacific/Tongatapu': '+13:00',
	'Pacific/Truk': '+10:00',
	'Pacific/Wake': '+12:00',
	'Pacific/Wallis': '+12:00',
	'Pacific/Yap': '+10:00',
	Poland: '+01:00',
	Portugal: '+00:00',
	PRC: '+08:00',
	PST8PDT: '-08:00',
	ROC: '+08:00',
	ROK: '+09:00',
	Singapore: '+08:00',
	Turkey: '+03:00',
	UCT: '+00:00',
	Universal: '+00:00',
	'US/Alaska': '-09:00',
	'US/Aleutian': '-10:00',
	'US/Arizona': '-07:00',
	'US/Central': '-06:00',
	'US/Eastern': '-05:00',
	'US/East-Indiana': '-05:00',
	'US/Hawaii': '-10:00',
	'US/Indiana-Starke': '-06:00',
	'US/Michigan': '-05:00',
	'US/Mountain': '-07:00',
	'US/Pacific': '-08:00',
	'US/Pacific-New': '-08:00',
	'US/Samoa': '-11:00',
	UTC: '+00:00',
	WET: '+00:00',
	'W-SU': '+03:00',
	Zulu: '+00:00',
}

// Based on PHP Date format -> https://www.php.net/manual/en/function.date.php with support for YYYY-MM-DD format.
export class MoxyDate {
	private _format: string = ''
	private _date: any = null
	private _d: string = ''
	private _formatted: string = ''

	constructor(format: string = 'YYYY-MM-DD', date: any = null) {
		this._format = format
		if (date && typeof date === 'string') {
			date = date.replace(/rd|th|nd/g, '')
		}
		this._date = date ? new Date(date) : new Date()
		this._d = this._date.toString()
		return this.toString()
	}

	public getFormattedDate(): string {
		return this.toString()
	}

	public getDate(): Date {
		return this._date
	}

	public format(format: string = 'full'): string {
		this._format = format
		this._formatted = ''
		return this.toString()
	}

	public isDst(): boolean {
		const d = new Date(this._date.getFullYear(), 0, 1)
		const offset = d.getTimezoneOffset()
		d.setMonth(6)
		return (
			this._date.getTimezoneOffset() <
			Math.max(offset, d.getTimezoneOffset())
		)
	}

	public tz(tz: string): MoxyDate {
		const tzd = TZ_DATABASE[tz]
		if (!tzd) {
			throw new Error('Timezone not supported!')
		}
		const [, , , , , timezone] = this._d.split(' ')
		const offset = parseInt(tzd, 10) - parseInt(timezone.slice(3, 6), 10)
		const d = new Date(this._date)
		d.setHours(this._date.getHours() + offset)
		this._d = d.toString()
		this._formatted = ''
		return this
	}

	public toString(format?: string): any {
		if (format) {
			this.tz(format)
		}
		// "Sun Feb 23 2020 09:29:29 GMT-0600 (Central Standard Time)"
		if (this._formatted) {
			return this._formatted
		}
		const [
			day,
			month,
			date,
			year,
			time,
			timezone,
			...tzStringParts
		] = this._d.split(' ')
		const tzString = tzStringParts.join(' ')
		const [hours, minutes, seconds] = time ? time.split(':') : ['', '', '']
		if (this._format) {
			const lowerFormat = this._format.toLowerCase()
			// Handle all common formats first for optimization
			if (this._format === 'YYYY-MM-DD' || lowerFormat === 'yyyy-mm-dd') {
				// default format 2020-02-23
				this._formatted = `${year}-${MONTH_TRANSLATION[month].number}-${date}`
				return this._formatted
			} else if (this._format === 'full') {
				// February 1st, 2020 5:30pm -> Optimized
				const h = (hours === '12'
					? 12
					: parseInt(hours, 10) % 12
				).toString()
				const ampm = parseInt(hours, 10) >= 12 ? 'pm' : 'am'
				this._formatted = `${
					MONTH_TRANSLATION[month].full
				} ${date}${this._getSuffix(
					date,
				)}, ${year} ${h}:${minutes}${ampm}`
				return this._formatted
			} else if (
				this._format === 'sql' ||
				lowerFormat === 'yyyy-mm-dd hh:mm:ss'
			) {
				this._format = 'YYYY-MM-DD hh:mm:ss'
				this._formatted = `${year}-${MONTH_TRANSLATION[month].number}-${date} ${hours}:${minutes}:${seconds}`
				return this._formatted
			} else if (
				lowerFormat === 'yyyy-mm-dd hh:mm:ss.sss' ||
				lowerFormat === 'yyyy-mm-dd hh:mm:ss.u'
			) {
				this._format = 'YYYY-MM-DD hh:mm:ss'
				this._formatted = `${year}-${
					MONTH_TRANSLATION[month].number
				}-${date} ${hours}:${minutes}:${seconds}.${this._date
					.valueOf()
					.toString()
					.slice(-3)}`
				return this._formatted
			} else if (this._format === 'mongo' || this._format === 'utc') {
				this._formatted = `${year}-${
					MONTH_TRANSLATION[month].number
				}-${date}T${hours}:${minutes}:${seconds}.${this._date
					.valueOf()
					.toString()
					.slice(-3)}Z`
				return this._formatted
			} else if (this._format === 'short' || this._format === 'm/d/Y') {
				// month/day/year
				this._formatted = `${MONTH_TRANSLATION[month].number}/${date}/${year}`
				return this._formatted
			} else if (this._format === 'long' || this._format === 'M d Y') {
				// month/day/year
				this._formatted = `${month} ${date} ${year}`
				return this._formatted
			} else if (this._format === 'iso' || this._format === 'Y-m-d') {
				// year/month/day
				this._formatted = `${year}-${MONTH_TRANSLATION[month].number}-${date}`
				return this._formatted
			} else if (this._format === 'year' || this._format === 'yyyy') {
				this._formatted = year
				return this._formatted
			} else if (this._format === 'day' || this._format === 'l') {
				this._formatted = WEEKDAY_TRANSLATION[day].full
				return this._formatted
			} else if (this._format === 'D') {
				this._formatted = day
				return this._formatted
			} else if (this._format === 'date' || this._format === 'dd') {
				this._formatted = date
				return this._formatted
			} else if (this._format === 'month' || this._format === 'F') {
				this._formatted = MONTH_TRANSLATION[month].full
				return this._formatted
			} else if (this._format === 'time' || lowerFormat === 'hh:mm:ss') {
				this._formatted = time
				return this._formatted
			}

			const tc = this._tryCase
			const f = { result: this._format }

			// Process time first, since mm conflicts with m for month
			// Hours
			tc(
				f,
				'g',
				(hours === '12' ? 12 : parseInt(hours, 10) % 12).toString(),
			) // 12 hr format, no leading
			tc(f, 'G', parseInt(hours, 10).toString()) // 24 hour format, no leading
			tc(
				f,
				['hh', 'h'],
				(hours === '12' ? 12 : parseInt(hours, 10) % 12)
					.toString()
					.padStart(2, '0'),
			) // 12 hr format, leading 0s
			tc(f, ['HH', 'H'], hours) // 24 hour format, leading 0s

			// Minutes
			tc(f, ['i', 'mm'], minutes) // minutes with leading 0s

			// Micro-seconds
			tc(
				f,
				['sss', 'u', 'v'],
				this._date
					.valueOf()
					.toString()
					.slice(-3),
			)

			// Seconds
			tc(f, ['ss', 's'], seconds) // seconds with leading 0s

			// Year
			tc(f, ['YYYY', 'yyyy'], year) // YYYY -> 2020
			tc(f, ['YYY', 'yyy'], Number(year).toString()) // 0890 -> 890
			tc(f, ['YY', 'y'], year.slice(2)) // 2020 -> 20
			tc(f, 'Y', year) // Y -> YYYY -> 2020

			// Month
			tc(f, ['MM', 'm'], MONTH_TRANSLATION[month].number) // MM -> 01
			tc(f, 'F', MONTH_TRANSLATION[month].full) // F -> January
			tc(f, 'M', month) // M -> Jan
			tc(f, 'n', Number(month).toString()) // n

			// Date
			tc(f, ['DD', 'dd', 'd'], date) // DD -> 03
			tc(f, 'j', Number(date).toString()) // j -> 3
			if (f.result.indexOf('t') > -1) {
				// Days of month
				const lastDay = new Date(
					this._date.getYear(),
					this._date.getMonth(),
					0,
				)
				tc(f, 't', lastDay.getDate().toString())
			}

			// Special
			tc(f, 'U', this._date.valueOf().toString()) // Unix time since epoch
			if (f.result.indexOf('B') > -1) {
				// Swatch Internet time
				tc(
					f,
					'B',
					Math.floor(
						((((this._date.getUTCHours() + 1) % 24) +
							this._date.getUTCMinutes() / 60 +
							this._date.getUTCSeconds() / 3600) *
							1000) /
							24,
					).toString(),
				)
			}
			if (f.result.indexOf('L') > -1) {
				// Prints 1 if leap year, 0 if not
				const nYear = parseInt(year, 10)
				tc(
					f,
					'L',
					Number(
						(nYear % 4 === 0 && nYear % 100 !== 0) ||
							nYear % 400 === 0,
					).toString(),
				)
			}

			if (f.result.indexOf('O') > -1) {
				// GMT+0300 -> + 0300
				f.result = f.result.replace(/O/g, timezone.substring(3))
			}
			if (f.result.indexOf('P') > -1) {
				// GMT+0300 -> +03:00
				f.result = f.result.replace(
					/P/g,
					`${timezone.substring(3, 6)}:${timezone.substring(6)}`,
				)
			}
			tc(f, 'D', day) // D -> Mon
			tc(f, 'w', WEEKDAY_TRANSLATION[day].number) // w -> Sunday -> 0
			if (f.result.indexOf('W') > -1) {
				tc(f, 'W', this._getWeekNumber().toString()) // Week number of year
			}
			tc(f, 'N', WEEKDAY_TRANSLATION[day].numberAlt) // N -> Monday -> 1, Sunday -> 7
			if (f.result.indexOf('S') > -1) {
				const suffix = this._getSuffix(date)
				f.result = f.result.replace(/S/g, suffix)
			}

			const tzIdentifier: string = timezone.slice(0, 3)
			if (f.result.indexOf('e') > -1) {
				// Timezone identifier
				f.result = f.result.replace(/e/g, tzIdentifier)
				//// Intl.DateTimeFormat().resolvedOptions().timeZone,
			}

			if (f.result.indexOf('T') > -1) {
				// Timezone abbreviation, eg: CST, EST.
				// Replace tzIdentifier with lowercase so we dont have a conflict
				f.result = f.result.replace(
					new RegExp(tzIdentifier, 'g'),
					tzIdentifier.toLowerCase(),
				)
				f.result = f.result.replace(
					/T/g,
					tzString
						.replace(/\(|\)/g, '')
						.split(' ')
						.map((w: string) => w.charAt(0))
						.join(''),
				)
				f.result = f.result.replace(
					new RegExp(tzIdentifier.toLowerCase(), 'g'),
					tzIdentifier,
				)
			}

			// Save replacements that may conflict for last
			tc(f, 'A', parseInt(hours, 10) >= 12 ? 'PM' : 'AM')
			tc(f, 'a', parseInt(hours, 10) >= 12 ? 'pm' : 'am')
			tc(f, 'l', WEEKDAY_TRANSLATION[day].full) // l -> Monday
			this._formatted = f.result
			return this._formatted
		}
		return this._d
	}

	public timestamp(): string {
		return this._d.valueOf()
	}

	public valueOf(): string {
		return this._formatted
	}

	private _getSuffix(date: string): string {
		let suffix: string = 'th'
		if (date.slice(-1) === '1') {
			suffix = 'st'
		} else if (date.slice(-1) === '2') {
			suffix = 'nd'
		} else if (date.slice(-1) === '3') {
			suffix = 'rd'
		}
		return suffix
	}

	private _getWeekNumber(): number {
		// Copy date so don't modify original
		const d = new Date(this._date)
		// Set to nearest Thursday: current date + 4 - current day number,
		d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7))
		// Get first day of year
		const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1)).valueOf()
		// Calculate full weeks to nearest Thursday
		const weekNo = Math.ceil(((d.valueOf() - yearStart) / 86400000 + 1) / 7)
		return weekNo
	}

	private _tryCase(
		fObject: any,
		dCase: string[] | string,
		replaceWith: string,
	): boolean {
		if (dCase instanceof Array) {
			let ret: boolean = false
			for (const cCase of dCase) {
				if (fObject.result.indexOf(cCase) > -1) {
					fObject.result = fObject.result.replace(
						new RegExp(cCase, 'g'),
						replaceWith,
					)
					ret = true
				}
			}
			return ret
		} else {
			if (fObject.result.indexOf(dCase) > -1) {
				fObject.result = fObject.result.replace(
					new RegExp(dCase, 'g'),
					replaceWith,
				)
				return true
			}
		}
		return false
	}
}

module.exports = MoxyDate
