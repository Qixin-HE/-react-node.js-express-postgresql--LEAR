DROP TABLE json_landmark;

CREATE TABLE json_landmark(
	id serial NOT NULL PRIMARY KEY,
	info json NOT NULL
);

INSERT INTO json_landmark (info)
VALUES  ('{
    "Theme": "Transport",
    "Sub Theme": "Railway Station",
    "Feature": "Flemington Bridge Railway Station",
    "Latitude": -37.78816459,
    "Longitude": 144.9392778
  }'),
  ('{
    "Theme": "Mixed Use",
    "Sub Theme": "Retail/Office/Carpark",
    "Feature": "Council House 2 (CH2)",
    "Latitude": -37.81425914,
    "Longitude": 144.9666384
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Library",
    "Feature": "The Melbourne Athenaeum Library",
    "Latitude": -37.81488558,
    "Longitude": 144.9672913
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "Carlton Gardens South",
    "Latitude": -37.80606846,
    "Longitude": 144.9712665
  }'),
  ('{
    "Theme": "Place of Worship",
    "Sub Theme": "Church",
    "Feature": "St Francis Church",
    "Latitude": -37.81188478,
    "Longitude": 144.9624226
  }'),
  ('{
    "Theme": "Place of Worship",
    "Sub Theme": "Church",
    "Feature": "Wesley Church",
    "Latitude": -37.81015764,
    "Longitude": 144.9681682
  }'),
  ('{
    "Theme": "Place of Worship",
    "Sub Theme": "Church",
    "Feature": "St Augustines Church",
    "Latitude": -37.81697414,
    "Longitude": 144.954862
  }'),
  ('{
    "Theme": "Place of Worship",
    "Sub Theme": "Church",
    "Feature": "St James Church",
    "Latitude": -37.81012812,
    "Longitude": 144.9524686
  }'),
  ('{
    "Theme": "Place of Worship",
    "Sub Theme": "Church",
    "Feature": "St Marys Anglican Church",
    "Latitude": -37.80316637,
    "Longitude": 144.9537615
  }'),
  ('{
    "Theme": "Place of Worship",
    "Sub Theme": "Church",
    "Feature": "Romanian Orthodox",
    "Latitude": -37.80523073,
    "Longitude": 144.9669864
  }'),
  ('{
    "Theme": "Place of Worship",
    "Sub Theme": "Church",
    "Feature": "Welsh Presbyterian Church",
    "Latitude": -37.81044788,
    "Longitude": 144.9598733
  }'),
  ('{
    "Theme": "Place of Worship",
    "Sub Theme": "Church",
    "Feature": "Church of Christ",
    "Latitude": -37.81045241,
    "Longitude": 144.9638892
  }'),
  ('{
    "Theme": "Place of Worship",
    "Sub Theme": "Church",
    "Feature": "Scots Church",
    "Latitude": -37.81456878,
    "Longitude": 144.9685511
  }'),
  ('{
    "Theme": "Place of Worship",
    "Sub Theme": "Church",
    "Feature": "St Michaels Uniting Church",
    "Latitude": -37.81438513,
    "Longitude": 144.969174
  }'),
  ('{
    "Theme": "Place of Worship",
    "Sub Theme": "Church",
    "Feature": "Greek Orthodox Church",
    "Latitude": -37.80880647,
    "Longitude": 144.9782591
  }'),
  ('{
    "Theme": "Place of Worship",
    "Sub Theme": "Church",
    "Feature": "St Peters Eastern Hill",
    "Latitude": -37.80970867,
    "Longitude": 144.9752592
  }'),
  ('{
    "Theme": "Place of Worship",
    "Sub Theme": "Church",
    "Feature": "Lutheran Trinity Church",
    "Latitude": -37.81097571,
    "Longitude": 144.9757295
  }'),
  ('{
    "Theme": "Place of Worship",
    "Sub Theme": "Church",
    "Feature": "Holy Trinity",
    "Latitude": -37.81406671,
    "Longitude": 144.9831973
  }'),
  ('{
    "Theme": "Place of Worship",
    "Sub Theme": "Church",
    "Feature": "St Johns Lutheran Church",
    "Latitude": -37.82093997,
    "Longitude": 144.9671211
  }'),
  ('{
    "Theme": "Place of Worship",
    "Sub Theme": "Church",
    "Feature": "North Melbourne Uniting",
    "Latitude": -37.80355385,
    "Longitude": 144.9476715
  }'),
  ('{
    "Theme": "Place of Worship",
    "Sub Theme": "Church",
    "Feature": "Melbourne Unitarian Church",
    "Latitude": -37.81144878,
    "Longitude": 144.9846649
  }'),
  ('{
    "Theme": "Place of Worship",
    "Sub Theme": "Church",
    "Feature": "All Nations Uniting Church",
    "Latitude": -37.79591553,
    "Longitude": 144.9689811
  }'),
  ('{
    "Theme": "Place of Worship",
    "Sub Theme": "Church",
    "Feature": "Our Lady of Lebanon Church",
    "Latitude": -37.80257665,
    "Longitude": 144.9693347
  }'),
  ('{
    "Theme": "Place of Worship",
    "Sub Theme": "Church",
    "Feature": "St Michaels",
    "Latitude": -37.79405127,
    "Longitude": 144.9453995
  }'),
  ('{
    "Theme": "Place of Worship",
    "Sub Theme": "Church",
    "Feature": "Ukranian Catholic Cathedral",
    "Latitude": -37.79630846,
    "Longitude": 144.9443135
  }'),
  ('{
    "Theme": "Place of Worship",
    "Sub Theme": "Church",
    "Feature": "St Alban Anglican Church",
    "Latitude": -37.79421695,
    "Longitude": 144.9416145
  }'),
  ('{
    "Theme": "Place of Worship",
    "Sub Theme": "Church",
    "Feature": "Christ Church Kensington",
    "Latitude": -37.79321095,
    "Longitude": 144.9272957
  }'),
  ('{
    "Theme": "Place of Worship",
    "Sub Theme": "Church",
    "Feature": "Holy Rosary",
    "Latitude": -37.79480874,
    "Longitude": 144.9283621
  }'),
  ('{
    "Theme": "Place of Worship",
    "Sub Theme": "Church",
    "Feature": "Collins Street Baptist Church",
    "Latitude": -37.81470119,
    "Longitude": 144.9680725
  }'),
  ('{
    "Theme": "Place of Worship",
    "Sub Theme": "Church",
    "Feature": "St Thomas Aquinas Church",
    "Latitude": -37.83530769,
    "Longitude": 144.9768091
  }'),
  ('{
    "Theme": "Place of Worship",
    "Sub Theme": "Church",
    "Feature": "South Yarra Presbyterian Church",
    "Latitude": -37.84074736,
    "Longitude": 144.985627
  }'),
  ('{
    "Theme": "Place of Worship",
    "Sub Theme": "Church",
    "Feature": "The Parish of Christ Church South Yarra",
    "Latitude": -37.83862705,
    "Longitude": 144.9860094
  }'),
  ('{
    "Theme": "Health Services",
    "Sub Theme": "Private Hospital",
    "Feature": "Melbourne Private Hospital",
    "Latitude": -37.79831113,
    "Longitude": 144.9572884
  }'),
  ('{
    "Theme": "Place of Worship",
    "Sub Theme": "Synagogue",
    "Feature": "East Melbourne Synagogue",
    "Latitude": -37.80911373,
    "Longitude": 144.9742219
  }'),
  ('{
    "Theme": "Community Use",
    "Sub Theme": "Police Station",
    "Feature": "Victoria Police",
    "Latitude": -37.8164849,
    "Longitude": 144.9664868
  }'),
  ('{
    "Theme": "Community Use",
    "Sub Theme": "Police Station",
    "Feature": "Victoria Police",
    "Latitude": -37.80031213,
    "Longitude": 144.9546975
  }'),
  ('{
    "Theme": "Community Use",
    "Sub Theme": "Police Station",
    "Feature": "Victoria Police",
    "Latitude": -37.82197739,
    "Longitude": 144.953398
  }'),
  ('{
    "Theme": "Community Use",
    "Sub Theme": "Visitor Centre",
    "Feature": "Melbourne Visitor Booth",
    "Latitude": -37.81395251,
    "Longitude": 144.9644259
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Major Sports & Recreation Facility",
    "Feature": "State Netball Hockey Centre",
    "Latitude": -37.785786,
    "Longitude": 144.947581
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "University Square",
    "Latitude": -37.80041071,
    "Longitude": 144.9603983
  }'),
  ('{
    "Theme": "Transport",
    "Sub Theme": "Transport Terminal",
    "Feature": "Port of Melbourne",
    "Latitude": -37.81373844,
    "Longitude": 144.9175343
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Private Sports Club/Facility",
    "Feature": "Royal Park Golf Course",
    "Latitude": -37.78191713,
    "Longitude": 144.9563091
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "Powlett Reserve",
    "Latitude": -37.81169299,
    "Longitude": 144.9872757
  }'),
  ('{
    "Theme": "Community Use",
    "Sub Theme": "Cemetery",
    "Feature": "Melbourne General Cemetery",
    "Latitude": -37.789189,
    "Longitude": 144.965786
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Major Sports & Recreation Facility",
    "Feature": "Carlton Football Club",
    "Latitude": -37.78408644,
    "Longitude": 144.9619678
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Major Sports & Recreation Facility",
    "Feature": "Visy Park",
    "Latitude": -37.78343039,
    "Longitude": 144.9619826
  }'),
  ('{
    "Theme": "Retail",
    "Sub Theme": "Retail",
    "Feature": "Queen Victoria Market",
    "Latitude": -37.8075002,
    "Longitude": 144.9571585
  }'),
  ('{
    "Theme": "Education Centre",
    "Sub Theme": "Primary Schools",
    "Feature": "Carlton Gardens Primary School",
    "Latitude": -37.80209538,
    "Longitude": 144.9694063
  }'),
  ('{
    "Theme": "Education Centre",
    "Sub Theme": "Primary Schools",
    "Feature": "Carlton Primary School",
    "Latitude": -37.79590798,
    "Longitude": 144.9701473
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "Carlton Gardens North",
    "Latitude": -37.80176908,
    "Longitude": 144.9719976
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Art Gallery/Museum",
    "Feature": "Old Melbourne Gaol Crime & Justice Experience",
    "Latitude": -37.80776441,
    "Longitude": 144.9654639
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "Kings Domain",
    "Latitude": -37.82552398,
    "Longitude": 144.9741079
  }'),
  ('{
    "Theme": "Education Centre",
    "Sub Theme": "Secondary Schools",
    "Feature": "Melbourne Grammar School",
    "Latitude": -37.8342561,
    "Longitude": 144.976285
  }'),
  ('{
    "Theme": "Education Centre",
    "Sub Theme": "School - Primary and Secondary Education",
    "Feature": "Wesley College",
    "Latitude": -37.84852018,
    "Longitude": 144.9822278
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Theatre Live",
    "Feature": "FairFax Studio",
    "Latitude": -37.82166846,
    "Longitude": 144.9688362
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Theatre Live",
    "Feature": "Playhouse",
    "Latitude": -37.82181246,
    "Longitude": 144.9683378
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Theatre Live",
    "Feature": "State Theatre",
    "Latitude": -37.82128063,
    "Longitude": 144.9684696
  }'),
  ('{
    "Theme": "Education Centre",
    "Sub Theme": "Tertiary (University)",
    "Feature": "University of Melbourne (VCA and Music)",
    "Latitude": -37.82411377,
    "Longitude": 144.9693325
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Theatre Live",
    "Feature": "St Martins Youth Arts Centre",
    "Latitude": -37.83524295,
    "Longitude": 144.9811422
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Major Sports & Recreation Facility",
    "Feature": "Flemington Racecourse",
    "Latitude": -37.79080826,
    "Longitude": 144.912143
  }'),
  ('{
    "Theme": "Transport",
    "Sub Theme": "Railway Station",
    "Feature": "Southern Cross Railway Station",
    "Latitude": -37.81816331,
    "Longitude": 144.9529447
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Theatre Live",
    "Feature": "Princess Theatre",
    "Latitude": -37.81072571,
    "Longitude": 144.9723266
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "Treasury Gardens",
    "Latitude": -37.81439936,
    "Longitude": 144.9759523
  }'),
  ('{
    "Theme": "Education Centre",
    "Sub Theme": "Secondary Schools",
    "Feature": "University High School",
    "Latitude": -37.79731362,
    "Longitude": 144.9560344
  }'),
  ('{
    "Theme": "Community Use",
    "Sub Theme": "Public Buildings",
    "Feature": "State Library Victoria",
    "Latitude": -37.80998522,
    "Longitude": 144.9643303
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Theatre Live",
    "Feature": "Regent Theatre",
    "Latitude": -37.81600147,
    "Longitude": 144.9679167
  }'),
  ('{
    "Theme": "Mixed Use",
    "Sub Theme": "Retail/Office",
    "Feature": "Treasury Reserve",
    "Latitude": -37.81291788,
    "Longitude": 144.9752368
  }'),
  ('{
    "Theme": "Office",
    "Sub Theme": "Office",
    "Feature": "Old Treasury Building",
    "Latitude": -37.81323717,
    "Longitude": 144.9744236
  }'),
  ('{
    "Theme": "Health Services",
    "Sub Theme": "Private Hospital",
    "Feature": "Epworth Freemasons Hospital : Medical Centre",
    "Latitude": -37.80934446,
    "Longitude": 144.9823368
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "Batman Park",
    "Latitude": -37.82184609,
    "Longitude": 144.9566658
  }'),
  ('{
    "Theme": "Office",
    "Sub Theme": "Office",
    "Feature": "Australian Red Cross",
    "Latitude": -37.7990921,
    "Longitude": 144.9526359
  }'),
  ('{
    "Theme": "Community Use",
    "Sub Theme": "Government Building",
    "Feature": "Melbourne Magistrates Court",
    "Latitude": -37.81361477,
    "Longitude": 144.9568462
  }'),
  ('{
    "Theme": "Transport",
    "Sub Theme": "Railway Station",
    "Feature": "Flagstaff Railway Station",
    "Latitude": -37.81223565,
    "Longitude": 144.9563182
  }'),
  ('{
    "Theme": "Community Use",
    "Sub Theme": "Public Buildings",
    "Feature": "Supreme Court",
    "Latitude": -37.81414942,
    "Longitude": 144.957894
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "Richmond Football Club",
    "Latitude": -37.821674,
    "Longitude": 144.9881563
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Major Sports & Recreation Facility",
    "Feature": "Melbourne Cricket Ground (MCG)",
    "Latitude": -37.81949216,
    "Longitude": 144.9834029
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Outdoor Recreation Facility (Zoo, Golf Course)",
    "Feature": "Melbourne Zoo",
    "Latitude": -37.78444493,
    "Longitude": 144.9513712
  }'),
  ('{
    "Theme": "Office",
    "Sub Theme": "Office",
    "Feature": "Australian Broadcasting Corporation (ABC)",
    "Latitude": -37.82381332,
    "Longitude": 144.9665514
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Function/Conference/Exhibition Centre",
    "Feature": "Melbourne Exhibition Centre",
    "Latitude": -37.82524551,
    "Longitude": 144.9543524
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Function/Conference/Exhibition Centre",
    "Feature": "Melbourne Convention Centre",
    "Latitude": -37.82490405,
    "Longitude": 144.9522883
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Art Gallery/Museum",
    "Feature": "Polly Woodside",
    "Latitude": -37.82425743,
    "Longitude": 144.9534781
  }'),
  ('{
    "Theme": "Vacant Land",
    "Sub Theme": "Vacant Land - Undeveloped Site",
    "Feature": "Melbourne International Karting Complex",
    "Latitude": -37.83107464,
    "Longitude": 144.9138229
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Private Sports Club/Facility",
    "Feature": "Melbourne International Shooting Club",
    "Latitude": -37.82928449,
    "Longitude": 144.9134158
  }'),
  ('{
    "Theme": "Mixed Use",
    "Sub Theme": "Retail/Office/Carpark",
    "Feature": "Southgate Arts and Leisure Precinct",
    "Latitude": -37.82022458,
    "Longitude": 144.9659891
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Art Gallery/Museum",
    "Feature": "Australian Centre for Contemporary Art",
    "Latitude": -37.82660454,
    "Longitude": 144.9672529
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Theatre Live",
    "Feature": "Malthouse Theatre",
    "Latitude": -37.8271768,
    "Longitude": 144.9669368
  }'),
  ('{
    "Theme": "Place of Worship",
    "Sub Theme": "Church",
    "Feature": "St Patricks Cathedral",
    "Latitude": -37.8101141,
    "Longitude": 144.9759015
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Art Gallery/Museum",
    "Feature": "Victorian Arts Centre",
    "Latitude": -37.82199473,
    "Longitude": 144.9688373
  }'),
  ('{
    "Theme": "Office",
    "Sub Theme": "Office",
    "Feature": "Parliament House",
    "Latitude": -37.81124666,
    "Longitude": 144.9737264
  }'),
  ('{
    "Theme": "Community Use",
    "Sub Theme": "Public Buildings",
    "Feature": "Melbourne Town Hall",
    "Latitude": -37.81507548,
    "Longitude": 144.9665427
  }'),
  ('{
    "Theme": "Office",
    "Sub Theme": "Office",
    "Feature": "Former Royal Mint",
    "Latitude": -37.81218387,
    "Longitude": 144.9570555
  }'),
  ('{
    "Theme": "Mixed Use",
    "Sub Theme": "Retail/Office",
    "Feature": "DFO South Wharf",
    "Latitude": -37.8248874,
    "Longitude": 144.9497943
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "Queen Victoria Gardens",
    "Latitude": -37.82163812,
    "Longitude": 144.9710495
  }'),
  ('{
    "Theme": "Community Use",
    "Sub Theme": "Public Buildings",
    "Feature": "Sidney Myer Music Bowl",
    "Latitude": -37.82334716,
    "Longitude": 144.9746862
  }'),
  ('{
    "Theme": "Purpose Built",
    "Sub Theme": "Casino",
    "Feature": "Crown Entertainment Complex",
    "Latitude": -37.82357611,
    "Longitude": 144.9573129
  }'),
  ('{
    "Theme": "Health Services",
    "Sub Theme": "Public Hospital",
    "Feature": "The Royal Victorian Eye & Ear Hospital",
    "Latitude": -37.80875228,
    "Longitude": 144.9762683
  }'),
  ('{
    "Theme": "Office",
    "Sub Theme": "Office",
    "Feature": "SBS (Special Broadcasting Service)",
    "Latitude": -37.81769212,
    "Longitude": 144.9687406
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Art Gallery/Museum",
    "Feature": "The Ian Potter Centre: NGV Australia",
    "Latitude": -37.81748314,
    "Longitude": 144.969899
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "Federation Square",
    "Latitude": -37.81785166,
    "Longitude": 144.9689636
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Art Gallery/Museum",
    "Feature": "Thoroughbred Racing Gallery",
    "Latitude": -37.81886627,
    "Longitude": 144.9839701
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "New Quay",
    "Latitude": -37.81521788,
    "Longitude": 144.9416179
  }'),
  ('{
    "Theme": "Purpose Built",
    "Sub Theme": "Film & RV Studio",
    "Feature": "Central City Studios",
    "Latitude": -37.81423185,
    "Longitude": 144.9356553
  }'),
  ('{
    "Theme": "Purpose Built",
    "Sub Theme": "Film & RV Studio",
    "Feature": "Channel 7 - Melbourne Broadcast Centre",
    "Latitude": -37.81585723,
    "Longitude": 144.9458233
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "Docklands Park",
    "Latitude": -37.82099568,
    "Longitude": 144.9467817
  }'),
  ('{
    "Theme": "Mixed Use",
    "Sub Theme": "Retail/Office",
    "Feature": "Waterfront City",
    "Latitude": -37.81505666,
    "Longitude": 144.9391369
  }'),
  ('{
    "Theme": "Vacant Land",
    "Sub Theme": "Current Construction Site",
    "Feature": "Harbour Town",
    "Latitude": -37.81392563,
    "Longitude": 144.9381238
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Major Sports & Recreation Facility",
    "Feature": "AAMI Park",
    "Latitude": -37.82472527,
    "Longitude": 144.983803
  }'),
  ('{
    "Theme": "Transport",
    "Sub Theme": "Marina",
    "Feature": "New Quay Marina",
    "Latitude": -37.81529255,
    "Longitude": 144.9422837
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Function/Conference/Exhibition Centre",
    "Feature": "Central Pier",
    "Latitude": -37.81651773,
    "Longitude": 144.943475
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Observation Tower/Wheel",
    "Feature": "Melbourne Star Observation Wheel",
    "Latitude": -37.81161637,
    "Longitude": 144.9375889
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "Point Park",
    "Latitude": -37.82335227,
    "Longitude": 144.9421023
  }'),
  ('{
    "Theme": "Education Centre",
    "Sub Theme": "Primary Schools",
    "Feature": "Kensington Primary School",
    "Latitude": -37.7925235,
    "Longitude": 144.9271087
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "Newmarket Reserve",
    "Latitude": -37.78784733,
    "Longitude": 144.9229721
  }'),
  ('{
    "Theme": "Health Services",
    "Sub Theme": "Public Hospital",
    "Feature": "Royal Womens Hospital",
    "Latitude": -37.79888925,
    "Longitude": 144.9548973
  }'),
  ('{
    "Theme": "Education Centre",
    "Sub Theme": "Further Education",
    "Feature": "Kangan Batman Tafe",
    "Latitude": -37.82218182,
    "Longitude": 144.9489085
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Art Gallery/Museum",
    "Feature": "Fox Classic Car Collection",
    "Latitude": -37.82137443,
    "Longitude": 144.9484967
  }'),
  ('{
    "Theme": "Specialist Residential Accommodation",
    "Sub Theme": "Hostel",
    "Feature": "The Mission To Seafarers Victoria",
    "Latitude": -37.8224996,
    "Longitude": 144.9512548
  }'),
  ('{
    "Theme": "Vacant Land",
    "Sub Theme": "Current Construction Site - Commercial",
    "Feature": "Railway Good Shed No 2",
    "Latitude": -37.82113713,
    "Longitude": 144.9513789
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Outdoor Recreation Facility (Zoo, Golf Course)",
    "Feature": "Wonderland Park",
    "Latitude": -37.81169454,
    "Longitude": 144.9368337
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Major Sports & Recreation Facility",
    "Feature": "Rod Laver Arena",
    "Latitude": -37.82204561,
    "Longitude": 144.9784872
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Major Sports & Recreation Facility",
    "Feature": "Melbourne Park",
    "Latitude": -37.8209086,
    "Longitude": 144.9787358
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Major Sports & Recreation Facility",
    "Feature": "Margaret Court Arena",
    "Latitude": -37.82132521,
    "Longitude": 144.9775911
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Major Sports & Recreation Facility",
    "Feature": "Hisense Arena",
    "Latitude": -37.82311,
    "Longitude": 144.9818348
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Art Gallery/Museum",
    "Feature": "Melbourne Museum",
    "Latitude": -37.80355181,
    "Longitude": 144.9716907
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Cinema",
    "Feature": "IMAX Melbourne",
    "Latitude": -37.80343156,
    "Longitude": 144.9706399
  }'),
  ('{
    "Theme": "Community Use",
    "Sub Theme": "Public Buildings",
    "Feature": "Melbourne Theatre Company",
    "Latitude": -37.82393038,
    "Longitude": 144.9682974
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Theatre Live",
    "Feature": "MTC Theatre",
    "Latitude": -37.82426618,
    "Longitude": 144.9681744
  }'),
  ('{
    "Theme": "Community Use",
    "Sub Theme": "Public Buildings",
    "Feature": "Elisabeth Murdoch Hall",
    "Latitude": -37.82397337,
    "Longitude": 144.967451
  }'),
  ('{
    "Theme": "Community Use",
    "Sub Theme": "Public Buildings",
    "Feature": "Melbourne Recital Centre",
    "Latitude": -37.82383279,
    "Longitude": 144.9676827
  }'),
  ('{
    "Theme": "Community Use",
    "Sub Theme": "Public Buildings",
    "Feature": "NGV International",
    "Latitude": -37.8230135,
    "Longitude": 144.9693425
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Theatre Live",
    "Feature": "Hamer Hall",
    "Latitude": -37.8199901,
    "Longitude": 144.9679921
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "Birrarung Marr",
    "Latitude": -37.81806108,
    "Longitude": 144.9731467
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Indoor Recreation Facility",
    "Feature": "Artplay",
    "Latitude": -37.81841988,
    "Longitude": 144.9715426
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "Riverslide Skate Park",
    "Latitude": -37.82078871,
    "Longitude": 144.9729518
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "Alexandra Gardens",
    "Latitude": -37.82060514,
    "Longitude": 144.9717961
  }'),
  ('{
    "Theme": "Transport",
    "Sub Theme": "Railway Station",
    "Feature": "Parliament Railway Station",
    "Latitude": -37.81160618,
    "Longitude": 144.9730173
  }'),
  ('{
    "Theme": "Transport",
    "Sub Theme": "Railway Station",
    "Feature": "Richmond Railway Station (Richmond) - Train stop",
    "Latitude": -37.82389927,
    "Longitude": 144.9894008
  }'),
  ('{
    "Theme": "Transport",
    "Sub Theme": "Railway Station",
    "Feature": "Jolimont-MCG Railway Station (East Melbourne) - Train stop",
    "Latitude": -37.81656518,
    "Longitude": 144.983641
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "North Melbourne Recreation Reserve",
    "Latitude": -37.79883453,
    "Longitude": 144.9414521
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "J.J Holland Park",
    "Latitude": -37.79823588,
    "Longitude": 144.9238371
  }'),
  ('{
    "Theme": "Transport",
    "Sub Theme": "Railway Station",
    "Feature": "Macaulay Railway Station (North Melbourne) - Train stop",
    "Latitude": -37.794964,
    "Longitude": 144.9361908
  }'),
  ('{
    "Theme": "Transport",
    "Sub Theme": "Railway Station",
    "Feature": "Kensington Railway Station",
    "Latitude": -37.79391401,
    "Longitude": 144.9307102
  }'),
  ('{
    "Theme": "Transport",
    "Sub Theme": "Railway Station",
    "Feature": "South Kensington Railway Station",
    "Latitude": -37.79972705,
    "Longitude": 144.9258377
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "Royal Park",
    "Latitude": -37.79061743,
    "Longitude": 144.9538342
  }'),
  ('{
    "Theme": "Health Services",
    "Sub Theme": "Public Hospital",
    "Feature": "Royal Childrens Hospital",
    "Latitude": -37.79420608,
    "Longitude": 144.9500483
  }'),
  ('{
    "Theme": "Transport",
    "Sub Theme": "Railway Station",
    "Feature": "Royal Park Railway Station",
    "Latitude": -37.78126843,
    "Longitude": 144.9516678
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "Princes Park",
    "Latitude": -37.78701617,
    "Longitude": 144.9611152
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Art Gallery/Museum",
    "Feature": "National Sports Museum",
    "Latitude": -37.81895449,
    "Longitude": 144.9846698
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "Shrine of Rembrance Reserve",
    "Latitude": -37.8320734,
    "Longitude": 144.9736284
  }'),
  ('{
    "Theme": "Community Use",
    "Sub Theme": "Public Buildings",
    "Feature": "Shrine of Remembrance",
    "Latitude": -37.830208,
    "Longitude": 144.9734419
  }'),
  ('{
    "Theme": "Residential Accommodation",
    "Sub Theme": "Dwelling (House)",
    "Feature": "Government House",
    "Latitude": -37.82756359,
    "Longitude": 144.9766551
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "Royal Botanic Gardens",
    "Latitude": -37.83066316,
    "Longitude": 144.9808504
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "Yarra Park",
    "Latitude": -37.82046937,
    "Longitude": 144.9866711
  }'),
  ('{
    "Theme": "Office",
    "Sub Theme": "Office",
    "Feature": "Coronial Services Centre of Victoria",
    "Latitude": -37.82434374,
    "Longitude": 144.9644746
  }'),
  ('{
    "Theme": "Office",
    "Sub Theme": "Office",
    "Feature": "Victorian Insitute of Forensic Medicine",
    "Latitude": -37.82469241,
    "Longitude": 144.9649791
  }'),
  ('{
    "Theme": "Office",
    "Sub Theme": "Office",
    "Feature": "Donor Tissue Bank of Victoria",
    "Latitude": -37.82482319,
    "Longitude": 144.965169
  }'),
  ('{
    "Theme": "Office",
    "Sub Theme": "Office",
    "Feature": "State Coroners Office",
    "Latitude": -37.82449822,
    "Longitude": 144.9646753
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Indoor Recreation Facility",
    "Feature": "Icehouse",
    "Latitude": -37.81218812,
    "Longitude": 144.935684
  }'),
  ('{
    "Theme": "Transport",
    "Sub Theme": "Railway Station",
    "Feature": "Parliament Railway Station",
    "Latitude": -37.81215728,
    "Longitude": 144.973742
  }'),
  ('{
    "Theme": "Transport",
    "Sub Theme": "Railway Station",
    "Feature": "Parliament Railway Station",
    "Latitude": -37.81276211,
    "Longitude": 144.9734338
  }'),
  ('{
    "Theme": "Transport",
    "Sub Theme": "Railway Station",
    "Feature": "Parliament Railway Station",
    "Latitude": -37.80957622,
    "Longitude": 144.9723301
  }'),
  ('{
    "Theme": "Transport",
    "Sub Theme": "Railway Station",
    "Feature": "Flagstaff Railway Station",
    "Latitude": -37.81163844,
    "Longitude": 144.9561187
  }'),
  ('{
    "Theme": "Transport",
    "Sub Theme": "Railway Station",
    "Feature": "Melbourne Central Railway Station",
    "Latitude": -37.80977593,
    "Longitude": 144.9626701
  }'),
  ('{
    "Theme": "Transport",
    "Sub Theme": "Railway Station",
    "Feature": "Melbourne Central Railway Station",
    "Latitude": -37.81059924,
    "Longitude": 144.9616906
  }'),
  ('{
    "Theme": "Transport",
    "Sub Theme": "Railway Station",
    "Feature": "Melbourne Central Railway Station",
    "Latitude": -37.810893,
    "Longitude": 144.9631007
  }'),
  ('{
    "Theme": "Transport",
    "Sub Theme": "Railway Station",
    "Feature": "Flemington Racecourse Railway Station",
    "Latitude": -37.78691058,
    "Longitude": 144.9081907
  }'),
  ('{
    "Theme": "Transport",
    "Sub Theme": "Railway Station",
    "Feature": "Showgrounds Railway Station (Flemington)",
    "Latitude": -37.78346512,
    "Longitude": 144.9149026
  }'),
  ('{
    "Theme": "Transport",
    "Sub Theme": "Railway Station",
    "Feature": "Newmarket Railway Station",
    "Latitude": -37.78727262,
    "Longitude": 144.92906
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Theatre Live",
    "Feature": "Athanaeum Theatre",
    "Latitude": -37.81495435,
    "Longitude": 144.9673225
  }'),
  ('{
    "Theme": "Health Services",
    "Sub Theme": "Public Hospital",
    "Feature": "Alfred Hospital",
    "Latitude": -37.84626312,
    "Longitude": 144.9817863
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Outdoor Recreation Facility (Zoo, Golf Course)",
    "Feature": "Riverside Park",
    "Latitude": -37.79483753,
    "Longitude": 144.9156071
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "Darling Square",
    "Latitude": -37.81299207,
    "Longitude": 144.9890626
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Theatre Live",
    "Feature": "Carlton Courthouse Theatre",
    "Latitude": -37.79765899,
    "Longitude": 144.9687501
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "Flagstaff Gardens",
    "Latitude": -37.81112229,
    "Longitude": 144.9546961
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Outdoor Recreation Facility (Zoo, Golf Course)",
    "Feature": "Melbourne Showgrounds",
    "Latitude": -37.78230979,
    "Longitude": 144.9108221
  }'),
  ('{
    "Theme": "Education Centre",
    "Sub Theme": "Primary Schools",
    "Feature": "North Melbourne Primary School",
    "Latitude": -37.79867372,
    "Longitude": 144.9510658
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Theatre Live",
    "Feature": "Her Majestys Theatre",
    "Latitude": -37.81099756,
    "Longitude": 144.9695202
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Theatre Live",
    "Feature": "Comedy Theatre",
    "Latitude": -37.81020539,
    "Longitude": 144.9701331
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Theatre Live",
    "Feature": "La Mama Theatre",
    "Latitude": -37.7991305,
    "Longitude": 144.9676695
  }'),
  ('{
    "Theme": "Industrial",
    "Sub Theme": "Industrial (Manufacturing)",
    "Feature": "Kraft",
    "Latitude": -37.82623131,
    "Longitude": 144.9234757
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "Fawkner Park",
    "Latitude": -37.84139967,
    "Longitude": 144.9816257
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "Fitzroy Gardens",
    "Latitude": -37.81296163,
    "Longitude": 144.9804557
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Art Gallery/Museum",
    "Feature": "Sinclairs Cottage",
    "Latitude": -37.81454075,
    "Longitude": 144.980555
  }'),
  ('{
    "Theme": "Education Centre",
    "Sub Theme": "Tertiary (University)",
    "Feature": "BIO 21 Institute",
    "Latitude": -37.79787433,
    "Longitude": 144.9537803
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "Enterprize Park",
    "Latitude": -37.82021027,
    "Longitude": 144.9592769
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Art Gallery/Museum",
    "Feature": "Victoria Police Museum",
    "Latitude": -37.82221828,
    "Longitude": 144.95404
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Art Gallery/Museum",
    "Feature": "Immigration Museum",
    "Latitude": -37.81917988,
    "Longitude": 144.9604268
  }'),
  ('{
    "Theme": "Place of Worship",
    "Sub Theme": "Church",
    "Feature": "St Pauls Cathedral",
    "Latitude": -37.8169549,
    "Longitude": 144.9676816
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Theatre Live",
    "Feature": "Forum Theatre",
    "Latitude": -37.81648541,
    "Longitude": 144.9693866
  }'),
  ('{
    "Theme": "Transport",
    "Sub Theme": "Railway Station",
    "Feature": "Flinders Street Railway Station",
    "Latitude": -37.8179063,
    "Longitude": 144.9670648
  }'),
  ('{
    "Theme": "Warehouse/Store",
    "Sub Theme": "Store Yard",
    "Feature": "Melbourne Wholesale Fish Market",
    "Latitude": -37.8083471,
    "Longitude": 144.9306133
  }'),
  ('{
    "Theme": "Mixed Use",
    "Sub Theme": "Retail/Office/Carpark",
    "Feature": "Melbourne Wholesale Fruit, Vegetable & Flower Market",
    "Latitude": -37.80687252,
    "Longitude": 144.9232874
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Art Gallery/Museum",
    "Feature": "Fire Services Museum Victoria",
    "Latitude": -37.80857613,
    "Longitude": 144.9753737
  }'),
  ('{
    "Theme": "Community Use",
    "Sub Theme": "Fire Station",
    "Feature": "Metropolitan Fire Brigade (MFB)",
    "Latitude": -37.80923186,
    "Longitude": 144.9752476
  }'),
  ('{
    "Theme": "Health Services",
    "Sub Theme": "Public Hospital",
    "Feature": "Royal Melbourne Hospital",
    "Latitude": -37.79930717,
    "Longitude": 144.9563897
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Art Gallery/Museum",
    "Feature": "The Ian Potter Museum Of Art",
    "Latitude": -37.79739396,
    "Longitude": 144.9641567
  }'),
  ('{
    "Theme": "Education Centre",
    "Sub Theme": "Tertiary (University)",
    "Feature": "University of Melbourne",
    "Latitude": -37.79828923,
    "Longitude": 144.9609952
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Art Gallery/Museum",
    "Feature": "Koorie Heritage Trust Inc",
    "Latitude": -37.81338543,
    "Longitude": 144.9540279
  }'),
  ('{
    "Theme": "Community Use",
    "Sub Theme": "Public Buildings",
    "Feature": "Commonwealth Law Courts",
    "Latitude": -37.81239617,
    "Longitude": 144.9558238
  }'),
  ('{
    "Theme": "Education Centre",
    "Sub Theme": "Tertiary (University)",
    "Feature": "RMIT University",
    "Latitude": -37.80807954,
    "Longitude": 144.964453
  }'),
  ('{
    "Theme": "Mixed Use",
    "Sub Theme": "Retail/Office/Carpark",
    "Feature": "Melbourne Central",
    "Latitude": -37.81053718,
    "Longitude": 144.9627497
  }'),
  ('{
    "Theme": "Transport",
    "Sub Theme": "Railway Station",
    "Feature": "Melbourne Central Railway Station",
    "Latitude": -37.8100167,
    "Longitude": 144.9637893
  }'),
  ('{
    "Theme": "Mixed Use",
    "Sub Theme": "Retail/Office/Residential/Carpark",
    "Feature": "QV Village",
    "Latitude": -37.81068919,
    "Longitude": 144.9657146
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "Argyle Square",
    "Latitude": -37.80314806,
    "Longitude": 144.9657613
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "Piazza Italia",
    "Latitude": -37.80251642,
    "Longitude": 144.9658631
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "Macarthur Square",
    "Latitude": -37.79833187,
    "Longitude": 144.9715141
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "Murchinson Square",
    "Latitude": -37.8002735,
    "Longitude": 144.9730593
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "Parliament Reserve",
    "Latitude": -37.80985262,
    "Longitude": 144.9734622
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Major Sports & Recreation Facility",
    "Feature": "North Melbourne Recreation Centre (Aquatic)",
    "Latitude": -37.799947,
    "Longitude": 144.9432908
  }'),
  ('{
    "Theme": "Office",
    "Sub Theme": "Office",
    "Feature": "North Melbourne Football Club",
    "Latitude": -37.79977136,
    "Longitude": 144.9409635
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Gymnasium/Health Club",
    "Feature": "North Melbourne Recreation Centre (Gymnasium)",
    "Latitude": -37.79970512,
    "Longitude": 144.9403683
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Indoor Recreation Facility",
    "Feature": "Carlton Baths",
    "Latitude": -37.7934377,
    "Longitude": 144.9716965
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Major Sports & Recreation Facility",
    "Feature": "City Baths",
    "Latitude": -37.80715854,
    "Longitude": 144.9631898
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "Westgate Park",
    "Latitude": -37.83149186,
    "Longitude": 144.9088248
  }'),
  ('{
    "Theme": "Transport",
    "Sub Theme": "Railway Station",
    "Feature": "North Melbourne Railway Station",
    "Latitude": -37.80738236,
    "Longitude": 144.9424298
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Art Gallery/Museum",
    "Feature": "Cooks Cottage",
    "Latitude": -37.81446049,
    "Longitude": 144.9794713
  }'),
  ('{
    "Theme": "Community Use",
    "Sub Theme": "Public Buildings",
    "Feature": "Conservatory",
    "Latitude": -37.81400213,
    "Longitude": 144.9785597
  }'),
  ('{
    "Theme": "Purpose Built",
    "Sub Theme": "Aquarium",
    "Feature": "Melbourne Aquarium",
    "Latitude": -37.82096278,
    "Longitude": 144.9584257
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Major Sports & Recreation Facility",
    "Feature": "Westpac Centre",
    "Latitude": -37.82424569,
    "Longitude": 144.9797203
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Art Gallery/Museum",
    "Feature": "Royal Exhibition Building",
    "Latitude": -37.80460262,
    "Longitude": 144.9715219
  }'),
  ('{
    "Theme": "Community Use",
    "Sub Theme": "Public Buildings",
    "Feature": "Melbourne Childrens Court",
    "Latitude": -37.81250776,
    "Longitude": 144.9582989
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Major Sports & Recreation Facility",
    "Feature": "Etihad Stadium",
    "Latitude": -37.81617605,
    "Longitude": 144.9474963
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Observation Tower/Wheel",
    "Feature": "Eureka Skydeck 88",
    "Latitude": -37.82161876,
    "Longitude": 144.9646222
  }'),
  ('{
    "Theme": "Mixed Use",
    "Sub Theme": "Retail/Residential",
    "Feature": "Eureka Tower",
    "Latitude": -37.82151575,
    "Longitude": 144.9644567
  }'),
  ('{
    "Theme": "Community Use",
    "Sub Theme": "Public Buildings",
    "Feature": "County Court Melbourne",
    "Latitude": -37.81320116,
    "Longitude": 144.9577342
  }'),
  ('{
    "Theme": "Health Services",
    "Sub Theme": "Public Hospital",
    "Feature": "Peter Maccallum Cancer Institute",
    "Latitude": -37.81147667,
    "Longitude": 144.9774009
  }'),
  ('{
    "Theme": "Health Services",
    "Sub Theme": "Public Hospital",
    "Feature": "Royal Dental Hospital",
    "Latitude": -37.79950659,
    "Longitude": 144.9645268
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "Sandridge Rail Bridge",
    "Latitude": -37.8201763,
    "Longitude": 144.9629811
  }'),
  ('{
    "Theme": "Mixed Use",
    "Sub Theme": "Retail/Office/Residential/Carpark",
    "Feature": "Freshwater Place",
    "Latitude": -37.82197455,
    "Longitude": 144.9624614
  }'),
  ('{
    "Theme": "Community Use",
    "Sub Theme": "Visitor Centre",
    "Feature": "Melbourne Visitor Centre",
    "Latitude": -37.81773524,
    "Longitude": 144.9679371
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Art Gallery/Museum",
    "Feature": "Australian Centre For The Moving Image (ACMI)",
    "Latitude": -37.81761073,
    "Longitude": 144.9690704
  }'),
  ('{
    "Theme": "Transport",
    "Sub Theme": "Bridge",
    "Feature": "Webb Bridge",
    "Latitude": -37.82320524,
    "Longitude": 144.947291
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Function/Conference/Exhibition Centre",
    "Feature": "Dallas Brooks Centre",
    "Latitude": -37.80973741,
    "Longitude": 144.9813834
  }'),
  ('{
    "Theme": "Education Centre",
    "Sub Theme": "School - Primary and Secondary Education",
    "Feature": "Melbourne Girls Grammar School",
    "Latitude": -37.83153645,
    "Longitude": 144.9850894
  }'),
  ('{
    "Theme": "Retail",
    "Sub Theme": "Department Store",
    "Feature": "Myer",
    "Latitude": -37.8135912,
    "Longitude": 144.9638551
  }'),
  ('{
    "Theme": "Retail",
    "Sub Theme": "Department Store",
    "Feature": "David Jones",
    "Latitude": -37.81331273,
    "Longitude": 144.9643735
  }'),
  ('{
    "Theme": "Leisure/Recreation",
    "Sub Theme": "Informal Outdoor Facility (Park/Garden/Reserve)",
    "Feature": "Lincoln Square",
    "Latitude": -37.80279197,
    "Longitude": 144.9627609
  }'),
  ('{
    "Theme": "Health Services",
    "Sub Theme": "Private Hospital",
    "Feature": "Epworth Freemasons Hospital",
    "Latitude": -37.81097107,
    "Longitude": 144.9837001
  }'),
  ('{
    "Theme": "Residential Accommodation",
    "Sub Theme": "Dwelling (House)",
    "Feature": "Bishopscourt",
    "Latitude": -37.81329216,
    "Longitude": 144.9835069
  }'),
  ('{
    "Theme": "Health Services",
    "Sub Theme": "Medical Services",
    "Feature": "Mercy Private Hospital",
    "Latitude": -37.81189681,
    "Longitude": 144.9844357
  }'),
  ('{
    "Theme": "Place Of Assembly",
    "Sub Theme": "Art Gallery/Museum",
    "Feature": "The Museum Of Australian Chinese History",
    "Latitude": -37.81076861,
    "Longitude": 144.9692339
  }'),
  ('{
    "Theme": "Mixed Use",
    "Sub Theme": "Retail/Office/Carpark",
    "Feature": "ANZ Gothic Bank",
    "Latitude": -37.81615807,
    "Longitude": 144.9616737
  }');
