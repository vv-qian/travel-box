import sampleWithReplacement from "./sample";

const topicOptions = [
  { value: "forex", label: "Currency" },
  { value: "holiday", label: "Holidays" },
  { value: "anything", label: "Anything" },
];

// A long scroll...
const countries = [
  {
    currency: "AFN",
    currencyName: "Afghan afghani",
    country: "Afghanistan",
    isoAlpha2: "AF",
  },
  {
    currency: "ALL",
    currencyName: "Albanian lek",
    country: "Albania",
    isoAlpha2: "AL",
  },
  {
    currency: "DZD",
    currencyName: "Algerian dinar",
    country: "Algeria",
    isoAlpha2: "DZ",
  },
  {
    currency: "EUR",
    currencyName: "Euro",
    country: "Andorra",
    isoAlpha2: "AD",
  },
  {
    currency: "AOA",
    currencyName: "Angolan kwanza",
    country: "Angola",
    isoAlpha2: "AO",
  },
  {
    currency: "XCD",
    currencyName: "East Caribbean dollar",
    country: "Antigua and Barbuda",
    isoAlpha2: "AG",
  },
  {
    currency: "ARS",
    currencyName: "Argentine peso",
    country: "Argentina",
    isoAlpha2: "AR",
  },
  {
    currency: "AMD",
    currencyName: "Armenian dram",
    country: "Armenia",
    isoAlpha2: "AM",
  },
  {
    currency: "AUD",
    currencyName: "Australian dollar",
    country: "Australia",
    isoAlpha2: "AU",
  },
  {
    currency: "EUR",
    currencyName: "Euro",
    country: "Austria",
    isoAlpha2: "AT",
  },
  {
    currency: "AZN",
    currencyName: "Azerbaijani manat",
    country: "Azerbaijan",
    isoAlpha2: "AZ",
  },
  {
    currency: "BSD",
    currencyName: "Bahamian dollar",
    country: "Bahamas",
    isoAlpha2: "BS",
  },
  {
    currency: "BHD",
    currencyName: "Bahraini dinar",
    country: "Bahrain",
    isoAlpha2: "BH",
  },
  {
    currency: "BDT",
    currencyName: "Bangladeshi taka",
    country: "Bangladesh",
    isoAlpha2: "BD",
  },
  {
    currency: "BBD",
    currencyName: "Barbadian dollar",
    country: "Barbados",
    isoAlpha2: "BB",
  },
  {
    currency: "BYR",
    currencyName: "Belarusian ruble",
    country: "Belarus",
    isoAlpha2: "BY",
  },
  {
    currency: "EUR",
    currencyName: "Euro",
    country: "Belgium",
    isoAlpha2: "BE",
  },
  {
    currency: "BZD",
    currencyName: "Belize dollar",
    country: "Belize",
    isoAlpha2: "BZ",
  },
  {
    currency: "XOF",
    currencyName: "West African CFA franc",
    country: "Benin",
    isoAlpha2: "BJ",
  },
  {
    currency: "BTN",
    currencyName: "Bhutanese ngultrum",
    country: "Bhutan",
    isoAlpha2: "BT",
  },
  {
    currency: "BOB",
    currencyName: "Bolivian boliviano",
    country: "Bolivia",
    isoAlpha2: "BO",
  },
  {
    currency: "BAM",
    currencyName: "Bosnia and Herzegovina convertible mark",
    country: "Bosnia and Herzegovina",
    isoAlpha2: "BA",
  },
  {
    currency: "BWP",
    currencyName: "Botswana pula",
    country: "Botswana",
    isoAlpha2: "BW",
  },
  {
    currency: "BRL",
    currencyName: "Brazilian real",
    country: "Brazil",
    isoAlpha2: "BR",
  },
  {
    currency: "BND",
    currencyName: "Brunei dollar",
    country: "Brunei",
    isoAlpha2: "BN",
  },
  {
    currency: "BGN",
    currencyName: "Bulgarian lev",
    country: "Bulgaria",
    isoAlpha2: "BG",
  },
  {
    currency: "XOF",
    currencyName: "West African CFA franc",
    country: "Burkina Faso",
    isoAlpha2: "BF",
  },
  {
    currency: "BIF",
    currencyName: "Burundian franc",
    country: "Burundi",
    isoAlpha2: "BI",
  },
  {
    currency: "KHR",
    currencyName: "Cambodian riel",
    country: "Cambodia",
    isoAlpha2: "KH",
  },
  {
    currency: "XAF",
    currencyName: "Central African CFA franc",
    country: "Cameroon",
    isoAlpha2: "CM",
  },
  {
    currency: "CAD",
    currencyName: "Canadian dollar",
    country: "Canada",
    isoAlpha2: "CA",
  },
  {
    currency: "CVE",
    currencyName: "Cape Verdean escudo",
    country: "Cape Verde",
    isoAlpha2: "CV",
  },
  {
    currency: "XAF",
    currencyName: "Central African CFA franc",
    country: "Central African Republic",
    isoAlpha2: "CF",
  },
  {
    currency: "XAF",
    currencyName: "Central African CFA franc",
    country: "Chad",
    isoAlpha2: "TD",
  },
  {
    currency: "CLP",
    currencyName: "Chilean peso",
    country: "Chile",
    isoAlpha2: "CL",
  },
  {
    currency: "CNY",
    currencyName: "Chinese yuan",
    country: "China",
    isoAlpha2: "CN",
  },
  {
    currency: "COP",
    currencyName: "Colombian peso",
    country: "Colombia",
    isoAlpha2: "CO",
  },
  {
    currency: "KMF",
    currencyName: "Comorian franc",
    country: "Comoros",
    isoAlpha2: "KM",
  },
  {
    currency: "CRC",
    currencyName: "Costa Rican colón",
    country: "Costa Rica",
    isoAlpha2: "CR",
  },
  {
    currency: "HRK",
    currencyName: "Croatian kuna",
    country: "Croatia",
    isoAlpha2: "HR",
  },
  {
    currency: "CUP",
    currencyName: "Cuban peso",
    country: "Cuba",
    isoAlpha2: "CU",
  },
  {
    currency: "EUR",
    currencyName: "Euro",
    country: "Cyprus",
    isoAlpha2: "CY",
  },
  {
    currency: "CZK",
    currencyName: "Czech koruna",
    country: "Czech Republic",
    isoAlpha2: "CZ",
  },
  {
    currency: "CDF",
    currencyName: "Congolese franc",
    country: "Democratic Republic of Congo",
    isoAlpha2: "CD",
  },
  {
    currency: "DKK",
    currencyName: "Danish krone",
    country: "Denmark",
    isoAlpha2: "DK",
  },
  {
    currency: "DJF",
    currencyName: "Djiboutian franc",
    country: "Djibouti",
    isoAlpha2: "DJ",
  },
  {
    currency: "XCD",
    currencyName: "East Caribbean dollar",
    country: "Dominica",
    isoAlpha2: "DM",
  },
  {
    currency: "DOP",
    currencyName: "Dominican peso",
    country: "Dominican Republic",
    isoAlpha2: "DO",
  },
  {
    currency: "USD",
    currencyName: "United States dollar",
    country: "East Timor",
    isoAlpha2: "TL",
  },
  {
    currency: "USD",
    currencyName: "United States dollar",
    country: "Ecuador",
    isoAlpha2: "EC",
  },
  {
    currency: "EGP",
    currencyName: "Egyptian pound",
    country: "Egypt",
    isoAlpha2: "EG",
  },
  {
    currency: "USD",
    currencyName: "United States dollar",
    country: "El Salvador",
    isoAlpha2: "SV",
  },
  {
    currency: "XAF",
    currencyName: "Central African CFA franc",
    country: "Equatorial Guinea",
    isoAlpha2: "GQ",
  },
  {
    currency: "ERN",
    currencyName: "Eritrean nakfa",
    country: "Eritrea",
    isoAlpha2: "ER",
  },
  {
    currency: "EUR",
    currencyName: "Euro",
    country: "Estonia",
    isoAlpha2: "EE",
  },
  {
    currency: "ETB",
    currencyName: "Ethiopian birr",
    country: "Ethiopia",
    isoAlpha2: "ET",
  },
  {
    currency: "FJD",
    currencyName: "Fijian dollar",
    country: "Fiji",
    isoAlpha2: "FJ",
  },
  {
    currency: "EUR",
    currencyName: "Euro",
    country: "Finland",
    isoAlpha2: "FI",
  },
  {
    currency: "EUR",
    currencyName: "Euro",
    country: "France",
    isoAlpha2: "FR",
  },
  {
    currency: "XAF",
    currencyName: "Central African CFA franc",
    country: "Gabon",
    isoAlpha2: "GA",
  },
  {
    currency: "GMD",
    currencyName: "Gambian dalasi",
    country: "Gambia",
    isoAlpha2: "GM",
  },
  {
    currency: "GEL",
    currencyName: "Georgian lari",
    country: "Georgia",
    isoAlpha2: "GE",
  },
  {
    currency: "EUR",
    currencyName: "Euro",
    country: "Germany",
    isoAlpha2: "DE",
  },
  {
    currency: "GHS",
    currencyName: "Ghanaian cedi",
    country: "Ghana",
    isoAlpha2: "GH",
  },
  {
    currency: "EUR",
    currencyName: "Euro",
    country: "Greece",
    isoAlpha2: "GR",
  },
  {
    currency: "XCD",
    currencyName: "East Caribbean dollar",
    country: "Grenada",
    isoAlpha2: "GD",
  },
  {
    currency: "GTQ",
    currencyName: "Guatemalan quetzal",
    country: "Guatemala",
    isoAlpha2: "GT",
  },
  {
    currency: "GNF",
    currencyName: "Guinean franc",
    country: "Guinea",
    isoAlpha2: "GN",
  },
  {
    currency: "XOF",
    currencyName: "West African CFA franc",
    country: "Guinea-Bissau",
    isoAlpha2: "GW",
  },
  {
    currency: "GYD",
    currencyName: "Guyanese dollar",
    country: "Guyana",
    isoAlpha2: "GY",
  },
  {
    currency: "HTG",
    currencyName: "Haitian gourde",
    country: "Haiti",
    isoAlpha2: "HT",
  },
  {
    currency: "HNL",
    currencyName: "Honduran lempira",
    country: "Honduras",
    isoAlpha2: "HN",
  },
  {
    currency: "HUF",
    currencyName: "Hungarian forint",
    country: "Hungary",
    isoAlpha2: "HU",
  },
  {
    currency: "ISK",
    currencyName: "Icelandic króna",
    country: "Iceland",
    isoAlpha2: "IS",
  },
  {
    currency: "INR",
    currencyName: "Indian rupee",
    country: "India",
    isoAlpha2: "IN",
  },
  {
    currency: "IDR",
    currencyName: "Indonesian rupiah",
    country: "Indonesia",
    isoAlpha2: "ID",
  },
  {
    currency: "IRR",
    currencyName: "Iranian rial",
    country: "Iran",
    isoAlpha2: "IR",
  },
  {
    currency: "IQD",
    currencyName: "Iraqi dinar",
    country: "Iraq",
    isoAlpha2: "IQ",
  },
  {
    currency: "EUR",
    currencyName: "Euro",
    country: "Ireland",
    isoAlpha2: "IE",
  },
  {
    currency: "ILS",
    currencyName: "Israeli new shekel",
    country: "Israel",
    isoAlpha2: "IL",
  },
  {
    currency: "EUR",
    currencyName: "Euro",
    country: "Italy",
    isoAlpha2: "IT",
  },
  {
    currency: "XOF",
    currencyName: "West African CFA franc",
    country: "Ivory Coast",
    isoAlpha2: "CI",
  },
  {
    currency: "JMD",
    currencyName: "Jamaican dollar",
    country: "Jamaica",
    isoAlpha2: "JM",
  },
  {
    currency: "JPY",
    currencyName: "Japanese yen",
    country: "Japan",
    isoAlpha2: "JP",
  },
  {
    currency: "JOD",
    currencyName: "Jordanian dinar",
    country: "Jordan",
    isoAlpha2: "JO",
  },
  {
    currency: "KZT",
    currencyName: "Kazakhstani tenge",
    country: "Kazakhstan",
    isoAlpha2: "KZ",
  },
  {
    currency: "KES",
    currencyName: "Kenyan shilling",
    country: "Kenya",
    isoAlpha2: "KE",
  },
  {
    currency: "AUD",
    currencyName: "Australian dollar",
    country: "Kiribati",
    isoAlpha2: "KI",
  },
  {
    currency: "KPW",
    currencyName: "North Korean won",
    country: "Korea, North",
    isoAlpha2: "KP",
  },
  {
    currency: "KRW",
    currencyName: "South Korean won",
    country: "Korea, South",
    isoAlpha2: "KR",
  },
  {
    currency: "EUR",
    currencyName: "Euro",
    country: "Kosovo",
    isoAlpha2: "XK",
  },
  {
    currency: "KWD",
    currencyName: "Kuwaiti dinar",
    country: "Kuwait",
    isoAlpha2: "KW",
  },
  {
    currency: "KGS",
    currencyName: "Kyrgyzstani som",
    country: "Kyrgyzstan",
    isoAlpha2: "KG",
  },
  {
    currency: "LAK",
    currencyName: "Lao kip",
    country: "Laos",
    isoAlpha2: "LA",
  },
  {
    currency: "EUR",
    currencyName: "Euro",
    country: "Latvia",
    isoAlpha2: "LV",
  },
  {
    currency: "LBP",
    currencyName: "Lebanese pound",
    country: "Lebanon",
    isoAlpha2: "LB",
  },
  {
    currency: "LSL",
    currencyName: "Lesotho loti",
    country: "Lesotho",
    isoAlpha2: "LS",
  },
  {
    currency: "LRD",
    currencyName: "Liberian dollar",
    country: "Liberia",
    isoAlpha2: "LR",
  },
  {
    currency: "LYD",
    currencyName: "Libyan dinar",
    country: "Libya",
    isoAlpha2: "LY",
  },
  {
    currency: "CHF",
    currencyName: "Swiss franc",
    country: "Liechtenstein",
    isoAlpha2: "LI",
  },
  {
    currency: "EUR",
    currencyName: "Euro",
    country: "Lithuania",
    isoAlpha2: "LT",
  },
  {
    currency: "EUR",
    currencyName: "Euro",
    country: "Luxembourg",
    isoAlpha2: "LU",
  },
  {
    currency: "MKD",
    currencyName: "Macedonian denar",
    country: "Macedonia",
    isoAlpha2: "MK",
  },
  {
    currency: "MGA",
    currencyName: "Malagasy ariary",
    country: "Madagascar",
    isoAlpha2: "MG",
  },
  {
    currency: "MWK",
    currencyName: "Malawian kwacha",
    country: "Malawi",
    isoAlpha2: "MW",
  },
  {
    currency: "MYR",
    currencyName: "Malaysian ringgit",
    country: "Malaysia",
    isoAlpha2: "MY",
  },
  {
    currency: "MVR",
    currencyName: "Maldivian rufiyaa",
    country: "Maldives",
    isoAlpha2: "MV",
  },
  {
    currency: "XOF",
    currencyName: "West African CFA franc",
    country: "Mali",
    isoAlpha2: "ML",
  },
  {
    currency: "EUR",
    currencyName: "Euro",
    country: "Malta",
    isoAlpha2: "MT",
  },
  {
    currency: "USD",
    currencyName: "United States dollar",
    country: "Marshall Islands",
    isoAlpha2: "MH",
  },
  {
    currency: "MRO",
    currencyName: "Mauritanian ouguiya",
    country: "Mauritania",
    isoAlpha2: "MR",
  },
  {
    currency: "MUR",
    currencyName: "Mauritian rupee",
    country: "Mauritius",
    isoAlpha2: "MU",
  },
  {
    currency: "MXN",
    currencyName: "Mexican peso",
    country: "Mexico",
    isoAlpha2: "MX",
  },
  {
    currency: "USD",
    currencyName: "United States dollar",
    country: "Micronesia",
    isoAlpha2: "FM",
  },
  {
    currency: "MDL",
    currencyName: "Moldovan leu",
    country: "Moldova",
    isoAlpha2: "MD",
  },
  {
    currency: "EUR",
    currencyName: "Euro",
    country: "Monaco",
    isoAlpha2: "MC",
  },
  {
    currency: "MNT",
    currencyName: "Mongolian tögrög",
    country: "Mongolia",
    isoAlpha2: "MN",
  },
  {
    currency: "EUR",
    currencyName: "Euro",
    country: "Montenegro",
    isoAlpha2: "ME",
  },
  {
    currency: "MAD",
    currencyName: "Moroccan dirham",
    country: "Morocco",
    isoAlpha2: "MA",
  },
  {
    currency: "MZN",
    currencyName: "Mozambican metical",
    country: "Mozambique",
    isoAlpha2: "MZ",
  },
  {
    currency: "MMK",
    currencyName: "Burmese kyat",
    country: "Myanmar",
    isoAlpha2: "MM",
  },
  {
    currency: "NAD",
    currencyName: "Namibian dollar",
    country: "Namibia",
    isoAlpha2: "NA",
  },
  {
    currency: "AUD",
    currencyName: "Australian dollar",
    country: "Nauru",
    isoAlpha2: "NR",
  },
  {
    currency: "NPR",
    currencyName: "Nepalese rupee",
    country: "Nepal",
    isoAlpha2: "NP",
  },
  {
    currency: "EUR",
    currencyName: "Euro",
    country: "Netherlands",
    isoAlpha2: "NL",
  },
  {
    currency: "NZD",
    currencyName: "New Zealand dollar",
    country: "New Zealand",
    isoAlpha2: "NZ",
  },
  {
    currency: "NIO",
    currencyName: "Nicaraguan córdoba",
    country: "Nicaragua",
    isoAlpha2: "NI",
  },
  {
    currency: "XOF",
    currencyName: "West African CFA franc",
    country: "Niger",
    isoAlpha2: "NE",
  },
  {
    currency: "NGN",
    currencyName: "Nigerian naira",
    country: "Nigeria",
    isoAlpha2: "NG",
  },
  {
    currency: "NOK",
    currencyName: "Norwegian krone",
    country: "Norway",
    isoAlpha2: "NO",
  },
  {
    currency: "OMR",
    currencyName: "Omani rial",
    country: "Oman",
    isoAlpha2: "OM",
  },
  {
    currency: "PKR",
    currencyName: "Pakistani rupee",
    country: "Pakistan",
    isoAlpha2: "PK",
  },
  {
    currency: "USD",
    currencyName: "United States dollar",
    country: "Palau",
    isoAlpha2: "PW",
  },
  {
    currency: "ILS",
    currencyName: "Israeli new shekel",
    country: "Palestine",
    isoAlpha2: "PS",
  },
  {
    currency: "PAB",
    currencyName: "Panamanian balboa",
    country: "Panama",
    isoAlpha2: "PA",
  },
  {
    currency: "PGK",
    currencyName: "Papua New Guinean kina",
    country: "Papua New Guinea",
    isoAlpha2: "PG",
  },
  {
    currency: "PYG",
    currencyName: "Paraguayan guaraní",
    country: "Paraguay",
    isoAlpha2: "PY",
  },
  {
    currency: "PEN",
    currencyName: "Peruvian sol",
    country: "Peru",
    isoAlpha2: "PE",
  },
  {
    currency: "PHP",
    currencyName: "Philippine peso",
    country: "Philippines",
    isoAlpha2: "PH",
  },
  {
    currency: "PLN",
    currencyName: "Polish zloty",
    country: "Poland",
    isoAlpha2: "PL",
  },
  {
    currency: "EUR",
    currencyName: "Euro",
    country: "Portugal",
    isoAlpha2: "PT",
  },
  {
    currency: "QAR",
    currencyName: "Qatari riyal",
    country: "Qatar",
    isoAlpha2: "QA",
  },
  {
    currency: "XAF",
    currencyName: "Central African CFA franc",
    country: "Republic of the Congo",
    isoAlpha2: "CG",
  },
  {
    currency: "RON",
    currencyName: "Romanian leu",
    country: "Romania",
    isoAlpha2: "RO",
  },
  {
    currency: "RUB",
    currencyName: "Russian ruble",
    country: "Russia",
    isoAlpha2: "RU",
  },
  {
    currency: "RWF",
    currencyName: "Rwandan franc",
    country: "Rwanda",
    isoAlpha2: "RW",
  },
  {
    currency: "XCD",
    currencyName: "East Caribbean dollar",
    country: "Saint Kitts and Nevis",
    isoAlpha2: "KN",
  },
  {
    currency: "XCD",
    currencyName: "East Caribbean dollar",
    country: "Saint Lucia",
    isoAlpha2: "LC",
  },
  {
    currency: "XCD",
    currencyName: "East Caribbean dollar",
    country: "Saint Vincent and the Grenadines",
    isoAlpha2: "VC",
  },
  {
    currency: "WST",
    currencyName: "Samoan tala",
    country: "Samoa",
    isoAlpha2: "WS",
  },
  {
    currency: "EUR",
    currencyName: "Euro",
    country: "San Marino",
    isoAlpha2: "SM",
  },
  {
    currency: "STD",
    currencyName: "São Tomé and Príncipe dobra",
    country: "São Tomé and Príncipe",
    isoAlpha2: "ST",
  },
  {
    currency: "SAR",
    currencyName: "Saudi riyal",
    country: "Saudi Arabia",
    isoAlpha2: "SA",
  },
  {
    currency: "XOF",
    currencyName: "West African CFA franc",
    country: "Senegal",
    isoAlpha2: "SN",
  },
  {
    currency: "RSD",
    currencyName: "Serbian dinar",
    country: "Serbia",
    isoAlpha2: "RS",
  },
  {
    currency: "SCR",
    currencyName: "Seychellois rupee",
    country: "Seychelles",
    isoAlpha2: "SC",
  },
  {
    currency: "SLL",
    currencyName: "Sierra Leonean leone",
    country: "Sierra Leone",
    isoAlpha2: "SL",
  },
  {
    currency: "SGD",
    currencyName: "Singapore dollar",
    country: "Singapore",
    isoAlpha2: "SG",
  },
  {
    currency: "EUR",
    currencyName: "Euro",
    country: "Slovakia",
    isoAlpha2: "SK",
  },
  {
    currency: "EUR",
    currencyName: "Euro",
    country: "Slovenia",
    isoAlpha2: "SI",
  },
  {
    currency: "SBD",
    currencyName: "Solomon Islands dollar",
    country: "Solomon Islands",
    isoAlpha2: "SB",
  },
  {
    currency: "SOS",
    currencyName: "Somali shilling",
    country: "Somalia",
    isoAlpha2: "SO",
  },
  {
    currency: "ZAR",
    currencyName: "South African rand",
    country: "South Africa",
    isoAlpha2: "ZA",
  },
  {
    currency: "EUR",
    currencyName: "Euro",
    country: "Spain",
    isoAlpha2: "ES",
  },
  {
    currency: "LKR",
    currencyName: "Sri Lankan rupee",
    country: "Sri Lanka",
    isoAlpha2: "LK",
  },
  {
    currency: "SDG",
    currencyName: "Sudanese pound",
    country: "Sudan",
    isoAlpha2: "SD",
  },
  {
    currency: "SRD",
    currencyName: "Surinamese dollar",
    country: "Suriname",
    isoAlpha2: "SR",
  },
  {
    currency: "SZL",
    currencyName: "Swazi lilangeni",
    country: "Swaziland",
    isoAlpha2: "SZ",
  },
  {
    currency: "SEK",
    currencyName: "Swedish krona",
    country: "Sweden",
    isoAlpha2: "SE",
  },
  {
    currency: "CHF",
    currencyName: "Swiss franc",
    country: "Switzerland",
    isoAlpha2: "CH",
  },
  {
    currency: "SYP",
    currencyName: "Syrian pound",
    country: "Syria",
    isoAlpha2: "SY",
  },
  {
    currency: "TWD",
    currencyName: "New Taiwan dollar",
    country: "Taiwan",
    isoAlpha2: "TW",
  },
  {
    currency: "TJS",
    currencyName: "Tajikistani somoni",
    country: "Tajikistan",
    isoAlpha2: "TJ",
  },
  {
    currency: "TZS",
    currencyName: "Tanzanian shilling",
    country: "Tanzania",
    isoAlpha2: "TZ",
  },
  {
    currency: "THB",
    currencyName: "Thai baht",
    country: "Thailand",
    isoAlpha2: "TH",
  },
  {
    currency: "XOF",
    currencyName: "West African CFA franc",
    country: "Togo",
    isoAlpha2: "TG",
  },
  {
    currency: "TOP",
    currencyName: "Tongan pa'anga",
    country: "Tonga",
    isoAlpha2: "TO",
  },
  {
    currency: "TTD",
    currencyName: "Trinidad and Tobago dollar",
    country: "Trinidad and Tobago",
    isoAlpha2: "TT",
  },
  {
    currency: "TND",
    currencyName: "Tunisian dinar",
    country: "Tunisia",
    isoAlpha2: "TN",
  },
  {
    currency: "TRY",
    currencyName: "Turkish lira",
    country: "Turkey",
    isoAlpha2: "TR",
  },
  {
    currency: "TMT",
    currencyName: "Turkmenistan manat",
    country: "Turkmenistan",
    isoAlpha2: "TM",
  },
  {
    currency: "AUD",
    currencyName: "Australian dollar",
    country: "Tuvalu",
    isoAlpha2: "TV",
  },
  {
    currency: "UGX",
    currencyName: "Ugandan shilling",
    country: "Uganda",
    isoAlpha2: "UG",
  },
  {
    currency: "UAH",
    currencyName: "Ukrainian hryvnia",
    country: "Ukraine",
    isoAlpha2: "UA",
  },
  {
    currency: "AED",
    currencyName: "United Arab Emirates dirham",
    country: "United Arab Emirates",
    isoAlpha2: "AE",
  },
  {
    currency: "GBP",
    currencyName: "British pound",
    country: "United Kingdom",
    isoAlpha2: "GB",
  },
  {
    currency: "USD",
    currencyName: "United States dollar",
    country: "United States",
    isoAlpha2: "US",
  },
  {
    currency: "UYU",
    currencyName: "Uruguayan peso",
    country: "Uruguay",
    isoAlpha2: "UY",
  },
  {
    currency: "UZS",
    currencyName: "Uzbekistani som",
    country: "Uzbekistan",
    isoAlpha2: "UZ",
  },
  {
    currency: "VUV",
    currencyName: "Vanuatu vatu",
    country: "Vanuatu",
    isoAlpha2: "VU",
  },
  {
    currency: "EUR",
    currencyName: "Euro",
    country: "Vatican City",
    isoAlpha2: "VA",
  },
  {
    currency: "VEF",
    currencyName: "Venezuelan bolívar",
    country: "Venezuela",
    isoAlpha2: "VE",
  },
  {
    currency: "VND",
    currencyName: "Vietnamese dong",
    country: "Vietnam",
    isoAlpha2: "VN",
  },
  {
    currency: "YER",
    currencyName: "Yemeni rial",
    country: "Yemen",
    isoAlpha2: "YE",
  },
  {
    currency: "ZMW",
    currencyName: "Zambian kwacha",
    country: "Zambia",
    isoAlpha2: "ZM",
  },
  {
    currency: "USD",
    currencyName: "United States dollar",
    country: "Zimbabwe",
    isoAlpha2: "ZW",
  },
];

let baseMonths = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let baseYears = [2020, 2021, 2022, 2023, 2024, 2025];

const sampleSize = 100;
const sampleCountries = sampleWithReplacement(sampleSize, countries);
const sampleMonths = sampleWithReplacement(sampleSize, baseMonths);
const sampleYears = sampleWithReplacement(sampleSize, baseYears);
const sampleDates = sampleYears.map((year, i) => {
  let month = sampleMonths[i];
  if (year === 2020 && month <= 8) {
    month = baseMonths[Math.floor(Math.random() * 3) + 9];
  }
  return new Date(year, month);
});

export { topicOptions, countries, sampleCountries, sampleDates };