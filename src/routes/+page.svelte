<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    const courses = writable([]);
    // Variable for selected department that can change based on user input
    let dept = 'ACCT';

    // When the component mounts, fetch the courses from the API using a POST request
    onMount(async () => {
        const res = await fetch('/api/courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
    "semesters": {
        "departments": [
            {
                "id": "1",
                "title": "ACCOUNTING",
                "abbreviation": "ACCT"
            },
            {
                "id": "2",
                "title": "ACTUARIAL SCIENCE",
                "abbreviation": "ACSCI"
            },
            {
                "id": "3",
                "title": "ADVERTISING",
                "abbreviation": "ADVRT"
            },
            {
                "id": "4",
                "title": "AEROSPACE ENGINEERING",
                "abbreviation": "AER E"
            },
            {
                "id": "5",
                "title": "AFRICAN AND AFRICAN AMERICAN STUDIES",
                "abbreviation": "AF AM"
            },
            {
                "id": "6",
                "title": "AGRICULTURAL AND BIOSYSTEMS ENGINEERING",
                "abbreviation": "A B E"
            },
            {
                "id": "7",
                "title": "AGRICULTURAL EDUCATION & STUDIES",
                "abbreviation": "AGEDS"
            },
            {
                "id": "8",
                "title": "AGRONOMY",
                "abbreviation": "AGRON"
            },
            {
                "id": "9",
                "title": "AIR FORCE AEROSPACE STUDIES",
                "abbreviation": "AFAS"
            },
            {
                "id": "10",
                "title": "AMERICAN INDIAN STUDIES",
                "abbreviation": "AM IN"
            },
            {
                "id": "11",
                "title": "AMERICAN SIGN LANGUAGE",
                "abbreviation": "ASL"
            },
            {
                "id": "12",
                "title": "ANIMAL ECOLOGY",
                "abbreviation": "A ECL"
            },
            {
                "id": "13",
                "title": "ANIMAL SCIENCE",
                "abbreviation": "AN S"
            },
            {
                "id": "14",
                "title": "ANTHROPOLOGY",
                "abbreviation": "ANTHR"
            },
            {
                "id": "15",
                "title": "APPAREL, EVENTS, AND HOSPITALITY MANAGEM",
                "abbreviation": "AESHM"
            },
            {
                "id": "16",
                "title": "APPAREL, MERCHANDISING, AND DESIGN",
                "abbreviation": "A M D"
            },
            {
                "id": "17",
                "title": "ARABIC",
                "abbreviation": "ARABC"
            },
            {
                "id": "18",
                "title": "ARCHITECTURE",
                "abbreviation": "ARCH"
            },
            {
                "id": "19",
                "title": "ART EDUCATION",
                "abbreviation": "ARTED"
            },
            {
                "id": "20",
                "title": "ART HISTORY",
                "abbreviation": "ART H"
            },
            {
                "id": "21",
                "title": "ASTRONOMY & ASTROPHYSICS",
                "abbreviation": "ASTRO"
            },
            {
                "id": "22",
                "title": "ATHLETIC TRAINING",
                "abbreviation": "A TR"
            },
            {
                "id": "23",
                "title": "ATHLETICS",
                "abbreviation": "ATH"
            },
            {
                "id": "24",
                "title": "BIOCHEM, BIOPHYSICS & MOLECULAR BIO",
                "abbreviation": "BBMB"
            },
            {
                "id": "25",
                "title": "BIOINFORMATICS & COMPUTATIONAL BIOL-UG",
                "abbreviation": "BCBIO"
            },
            {
                "id": "26",
                "title": "BIOINFORMATICS AND COMPUTATIONAL BIOL",
                "abbreviation": "BCB"
            },
            {
                "id": "27",
                "title": "BIOLOGICAL/PRE-MEDICAL ILLUSTRATION",
                "abbreviation": "BPM I"
            },
            {
                "id": "28",
                "title": "BIOLOGY",
                "abbreviation": "BIOL"
            },
            {
                "id": "29",
                "title": "BIOMEDICAL ENGINEERING",
                "abbreviation": "B M E"
            },
            {
                "id": "30",
                "title": "BIOMEDICAL SCIENCES",
                "abbreviation": "B M S"
            },
            {
                "id": "31",
                "title": "BUSINESS ADMINISTRATION",
                "abbreviation": "BUSAD"
            },
            {
                "id": "32",
                "title": "CHEMICAL ENGINEERING",
                "abbreviation": "CH E"
            },
            {
                "id": "33",
                "title": "CHEMISTRY",
                "abbreviation": "CHEM"
            },
            {
                "id": "34",
                "title": "CHINESE",
                "abbreviation": "CHIN"
            },
            {
                "id": "35",
                "title": "CIVIL ENGINEERING",
                "abbreviation": "C E"
            },
            {
                "id": "36",
                "title": "CLASSICAL STUDIES",
                "abbreviation": "CL ST"
            },
            {
                "id": "37",
                "title": "COMMUNICATION DISORDERS",
                "abbreviation": "CMDIS"
            },
            {
                "id": "38",
                "title": "COMMUNICATION STUDIES",
                "abbreviation": "COMST"
            },
            {
                "id": "39",
                "title": "COMMUNITY & REGIONAL PLANNING",
                "abbreviation": "C R P"
            },
            {
                "id": "40",
                "title": "COMMUNITY DEVELOPMENT",
                "abbreviation": "COMDV"
            },
            {
                "id": "41",
                "title": "COMPUTER ENGINEERING",
                "abbreviation": "CPR E"
            },
            {
                "id": "42",
                "title": "COMPUTER SCIENCE",
                "abbreviation": "COM S"
            },
            {
                "id": "43",
                "title": "CONSTRUCTION ENGINEERING",
                "abbreviation": "CON E"
            },
            {
                "id": "44",
                "title": "CRIMINAL JUSTICE",
                "abbreviation": "C J"
            },
            {
                "id": "45",
                "title": "CYBER SECURITY",
                "abbreviation": "CYBSC"
            },
            {
                "id": "46",
                "title": "CYBER SECURITY ENGINEERING",
                "abbreviation": "CYB E"
            },
            {
                "id": "47",
                "title": "CYBER-PHYSICAL SYSTEMS",
                "abbreviation": "CPS"
            },
            {
                "id": "48",
                "title": "DANCE",
                "abbreviation": "DANCE"
            },
            {
                "id": "49",
                "title": "DATA SCIENCE",
                "abbreviation": "DS"
            },
            {
                "id": "50",
                "title": "DESIGN",
                "abbreviation": "DES"
            },
            {
                "id": "51",
                "title": "DESIGN STUDIES",
                "abbreviation": "DSN S"
            },
            {
                "id": "52",
                "title": "DIETETICS",
                "abbreviation": "DIET"
            },
            {
                "id": "53",
                "title": "EARLY CHILDCARE EDUCATION AND PROGRAMMIN",
                "abbreviation": "E C P"
            },
            {
                "id": "54",
                "title": "EARLY CHILDHOOD AND FAMILY POLICY",
                "abbreviation": "ECFP"
            },
            {
                "id": "55",
                "title": "ECOLOGY & EVOLUTIONARY BIOLOGY",
                "abbreviation": "EEB"
            },
            {
                "id": "56",
                "title": "ECOLOGY, EVOLUTION & ORGANISMAL BIOL",
                "abbreviation": "EEOB"
            },
            {
                "id": "57",
                "title": "ECONOMICS",
                "abbreviation": "ECON"
            },
            {
                "id": "58",
                "title": "EDUCATION",
                "abbreviation": "EDUC"
            },
            {
                "id": "59",
                "title": "EDUCATIONAL ADMINISTRATION",
                "abbreviation": "EDADM"
            },
            {
                "id": "60",
                "title": "EDUCATIONAL LEADERSHIP & POLICY ST",
                "abbreviation": "EL PS"
            },
            {
                "id": "61",
                "title": "ELECTRICAL ENGINEERING",
                "abbreviation": "E E"
            },
            {
                "id": "62",
                "title": "ENGINEERING",
                "abbreviation": "ENGR"
            },
            {
                "id": "63",
                "title": "ENGINEERING MECHANICS",
                "abbreviation": "E M"
            },
            {
                "id": "64",
                "title": "ENGLISH",
                "abbreviation": "ENGL"
            },
            {
                "id": "65",
                "title": "ENTOMOLOGY",
                "abbreviation": "ENT"
            },
            {
                "id": "66",
                "title": "ENTREPRENEURSHIP",
                "abbreviation": "ENTSP"
            },
            {
                "id": "67",
                "title": "ENVIRONMENTAL ENGINEERING",
                "abbreviation": "ENV E"
            },
            {
                "id": "68",
                "title": "ENVIRONMENTAL SCIENCE",
                "abbreviation": "ENSCI"
            },
            {
                "id": "69",
                "title": "ENVIRONMENTAL STUDIES",
                "abbreviation": "ENV S"
            },
            {
                "id": "70",
                "title": "EVENT MANAGEMENT",
                "abbreviation": "EVENT"
            },
            {
                "id": "71",
                "title": "FAMILY & CONSUMER SCIENCES ED & STUDIES",
                "abbreviation": "FCEDS"
            },
            {
                "id": "72",
                "title": "FAMILY FINANCIAL PLANNING",
                "abbreviation": "FFP"
            },
            {
                "id": "73",
                "title": "FINANCE",
                "abbreviation": "FIN"
            },
            {
                "id": "74",
                "title": "FOOD SCIENCE & HUMAN NUTRITION",
                "abbreviation": "FS HN"
            },
            {
                "id": "75",
                "title": "FORESTRY",
                "abbreviation": "FOR"
            },
            {
                "id": "76",
                "title": "FRENCH",
                "abbreviation": "FRNCH"
            },
            {
                "id": "77",
                "title": "GENETICS",
                "abbreviation": "GEN"
            },
            {
                "id": "78",
                "title": "GENETICS - INTERDISCIPLINARY",
                "abbreviation": "GENET"
            },
            {
                "id": "79",
                "title": "GENETICS, DEVELOPMENT & CELL BIOL",
                "abbreviation": "GDCB"
            },
            {
                "id": "80",
                "title": "GEOLOGY",
                "abbreviation": "GEOL"
            },
            {
                "id": "81",
                "title": "GERMAN",
                "abbreviation": "GER"
            },
            {
                "id": "82",
                "title": "GERONTOLOGY",
                "abbreviation": "GERON"
            },
            {
                "id": "83",
                "title": "GLOBAL RESOURCE SYSTEMS",
                "abbreviation": "GLOBE"
            },
            {
                "id": "84",
                "title": "GRADUATE STUDIES",
                "abbreviation": "GR ST"
            },
            {
                "id": "85",
                "title": "GRAPHIC DESIGN",
                "abbreviation": "ARTGR"
            },
            {
                "id": "86",
                "title": "HEALTH STUDIES",
                "abbreviation": "H S"
            },
            {
                "id": "87",
                "title": "HEALTHCARE MANAGEMENT",
                "abbreviation": "HCM"
            },
            {
                "id": "88",
                "title": "HIGHER EDUCATION",
                "abbreviation": "HG ED"
            },
            {
                "id": "89",
                "title": "HISTORY",
                "abbreviation": "HIST"
            },
            {
                "id": "90",
                "title": "HONORS",
                "abbreviation": "HON"
            },
            {
                "id": "91",
                "title": "HORTICULTURE",
                "abbreviation": "HORT"
            },
            {
                "id": "92",
                "title": "HOSPITALITY MANAGEMENT",
                "abbreviation": "HSP M"
            },
            {
                "id": "93",
                "title": "HUMAN COMPUTER INTERACTION",
                "abbreviation": "HCI"
            },
            {
                "id": "94",
                "title": "HUMAN DEVELOPMENT & FAMILY STUDIES",
                "abbreviation": "HD FS"
            },
            {
                "id": "95",
                "title": "HUMAN SCIENCES",
                "abbreviation": "H SCI"
            },
            {
                "id": "96",
                "title": "IMMUNOBIOLOGY",
                "abbreviation": "IMBIO"
            },
            {
                "id": "97",
                "title": "INDUSTRIAL DESIGN",
                "abbreviation": "IND D"
            },
            {
                "id": "98",
                "title": "INDUSTRIAL ENGINEERING",
                "abbreviation": "I E"
            },
            {
                "id": "99",
                "title": "INTEGRATED STUDIO ARTS",
                "abbreviation": "ARTIS"
            },
            {
                "id": "100",
                "title": "INTERDISCIPLINARY GRADUATE STUDIES",
                "abbreviation": "IGS"
            },
            {
                "id": "101",
                "title": "INTERIOR DESIGN",
                "abbreviation": "ARTID"
            },
            {
                "id": "102",
                "title": "INTERNATIONAL STUDIES",
                "abbreviation": "INTST"
            },
            {
                "id": "103",
                "title": "JOURNALISM & MASS COMMUNICATION",
                "abbreviation": "JL MC"
            },
            {
                "id": "104",
                "title": "KINESIOLOGY",
                "abbreviation": "KIN"
            },
            {
                "id": "105",
                "title": "LANDSCAPE ARCHITECTURE",
                "abbreviation": "L A"
            },
            {
                "id": "106",
                "title": "LATIN",
                "abbreviation": "LATIN"
            },
            {
                "id": "107",
                "title": "LEADERSHIP STUDIES",
                "abbreviation": "LD ST"
            },
            {
                "id": "108",
                "title": "LEARNING AND LEADERSHIP SCIENCES",
                "abbreviation": "L L S"
            },
            {
                "id": "109",
                "title": "LIBERAL ARTS & SCIENCES",
                "abbreviation": "LAS"
            },
            {
                "id": "110",
                "title": "LIBRARY",
                "abbreviation": "LIB"
            },
            {
                "id": "111",
                "title": "LINGUISTICS",
                "abbreviation": "LING"
            },
            {
                "id": "112",
                "title": "MANAGEMENT",
                "abbreviation": "MGMT"
            },
            {
                "id": "113",
                "title": "MANAGEMENT INFORMATION SYSTEMS",
                "abbreviation": "MIS"
            },
            {
                "id": "114",
                "title": "MARKETING",
                "abbreviation": "MKT"
            },
            {
                "id": "115",
                "title": "MATERIALS ENGINEERING",
                "abbreviation": "MAT E"
            },
            {
                "id": "116",
                "title": "MATERIALS SCIENCE & ENGINEERING",
                "abbreviation": "M S E"
            },
            {
                "id": "117",
                "title": "MATHEMATICS",
                "abbreviation": "MATH"
            },
            {
                "id": "118",
                "title": "MECHANICAL ENGINEERING",
                "abbreviation": "M E"
            },
            {
                "id": "119",
                "title": "METEOROLOGY",
                "abbreviation": "MTEOR"
            },
            {
                "id": "120",
                "title": "MICROBIOLOGY",
                "abbreviation": "MICRO"
            },
            {
                "id": "121",
                "title": "MILITARY SCIENCE",
                "abbreviation": "M S"
            },
            {
                "id": "122",
                "title": "MOLECULAR CELLULAR DEV BIOLOGY",
                "abbreviation": "MCDB"
            },
            {
                "id": "123",
                "title": "MUSIC",
                "abbreviation": "MUSIC"
            },
            {
                "id": "124",
                "title": "NATURAL RESOURCE ECOLOGY AND MGMT",
                "abbreviation": "NREM"
            },
            {
                "id": "125",
                "title": "NAVAL SCIENCE",
                "abbreviation": "N S"
            },
            {
                "id": "126",
                "title": "NEUROSCIENCE",
                "abbreviation": "NEURO"
            },
            {
                "id": "127",
                "title": "NURSING",
                "abbreviation": "NRS"
            },
            {
                "id": "128",
                "title": "NUTRITIONAL SCIENCES",
                "abbreviation": "NUTRS"
            },
            {
                "id": "129",
                "title": "ORGANIZATION FOR TROPICAL STUDIES",
                "abbreviation": "OTS"
            },
            {
                "id": "130",
                "title": "PERFORMING ARTS",
                "abbreviation": "PERF"
            },
            {
                "id": "131",
                "title": "PHILOSOPHY",
                "abbreviation": "PHIL"
            },
            {
                "id": "132",
                "title": "PHYSICS",
                "abbreviation": "PHYS"
            },
            {
                "id": "133",
                "title": "PLANT BIOLOGY",
                "abbreviation": "PLBIO"
            },
            {
                "id": "134",
                "title": "PLANT PATHOLOGY",
                "abbreviation": "PL P"
            },
            {
                "id": "135",
                "title": "POLITICAL SCIENCE",
                "abbreviation": "POL S"
            },
            {
                "id": "136",
                "title": "PORTUGUESE",
                "abbreviation": "PORT"
            },
            {
                "id": "137",
                "title": "PSYCHOLOGY",
                "abbreviation": "PSYCH"
            },
            {
                "id": "138",
                "title": "PUBLIC RELATIONS",
                "abbreviation": "P R"
            },
            {
                "id": "139",
                "title": "RELIGIOUS STUDIES",
                "abbreviation": "RELIG"
            },
            {
                "id": "140",
                "title": "RESEARCH & EVALUATION",
                "abbreviation": "RESEV"
            },
            {
                "id": "141",
                "title": "RUSSIAN",
                "abbreviation": "RUS"
            },
            {
                "id": "142",
                "title": "SEED TECHNOLOGY AND BUSINESS",
                "abbreviation": "STB"
            },
            {
                "id": "143",
                "title": "SOCIOLOGY",
                "abbreviation": "SOC"
            },
            {
                "id": "144",
                "title": "SOFTWARE ENGINEERING",
                "abbreviation": "S E"
            },
            {
                "id": "145",
                "title": "SPANISH",
                "abbreviation": "SPAN"
            },
            {
                "id": "146",
                "title": "SPECIAL EDUCATION",
                "abbreviation": "SP ED"
            },
            {
                "id": "147",
                "title": "SPEECH COMMUNICATION",
                "abbreviation": "SP CM"
            },
            {
                "id": "148",
                "title": "STATISTICS",
                "abbreviation": "STAT"
            },
            {
                "id": "149",
                "title": "SUPPLY CHAIN MANAGEMENT",
                "abbreviation": "SCM"
            },
            {
                "id": "150",
                "title": "SUSTAINABLE AGRICULTURE",
                "abbreviation": "SUSAG"
            },
            {
                "id": "151",
                "title": "SUSTAINABLE ENVIRONMENTS",
                "abbreviation": "SUS E"
            },
            {
                "id": "152",
                "title": "TECHNOLOGY SYSTEMS MANAGEMENT",
                "abbreviation": "TSM"
            },
            {
                "id": "153",
                "title": "THEATRE",
                "abbreviation": "THTRE"
            },
            {
                "id": "154",
                "title": "TOXICOLOGY",
                "abbreviation": "TOX"
            },
            {
                "id": "155",
                "title": "TRANSPORTATION",
                "abbreviation": "TRANS"
            },
            {
                "id": "156",
                "title": "U.S. LATINO/A STUDIES",
                "abbreviation": "US LS"
            },
            {
                "id": "157",
                "title": "UNIVERSITY STUDIES",
                "abbreviation": "U ST"
            },
            {
                "id": "158",
                "title": "URBAN DESIGN",
                "abbreviation": "URB D"
            },
            {
                "id": "159",
                "title": "VET DIAGNOSTIC & PRODUCTION AN MED",
                "abbreviation": "VDPAM"
            },
            {
                "id": "160",
                "title": "VETERINARY CLINICAL SCIENCES",
                "abbreviation": "V C S"
            },
            {
                "id": "161",
                "title": "VETERINARY MICROBIOLOGY & PREV MED",
                "abbreviation": "V MPM"
            },
            {
                "id": "162",
                "title": "VETERINARY PATHOLOGY",
                "abbreviation": "V PTH"
            },
            {
                "id": "163",
                "title": "WIND ENERGY SCIENCE, ENGINEERING AND POL",
                "abbreviation": "WESEP"
            },
            {
                "id": "164",
                "title": "WISE",
                "abbreviation": "WISE"
            },
            {
                "id": "165",
                "title": "WOMEN'S AND GENDER STUDIES",
                "abbreviation": "WGS"
            },
            {
                "id": "166",
                "title": "WORLD FILM STUDIES",
                "abbreviation": "W F S"
            },
            {
                "id": "167",
                "title": "WORLD LANGUAGES AND CULTURES",
                "abbreviation": "WLC"
            },
            {
                "id": "168",
                "title": "YOUTH",
                "abbreviation": "YTH"
            }
        ],
        "semesters": [
            {
                "id": 1,
                "code": "1",
                "year": "2023",
                "preliminary": "",
                "current": "N",
                "lastChanged": "2023-08-19T03:22:15.240+00:00",
                "semNum": "3",
                "semesterTitle": "Summer 2023",
                "formattedStartDateTime": "Sat Aug 19 03:22:15 UTC 2023"
            },
            {
                "id": 2,
                "code": "F",
                "year": "2023",
                "preliminary": "",
                "current": "N",
                "lastChanged": "2023-11-23T02:41:53.223+00:00",
                "semNum": "5",
                "semesterTitle": "Fall 2023",
                "formattedStartDateTime": "Thu Nov 23 02:41:53 UTC 2023"
            },
            {
                "id": 3,
                "code": "S",
                "year": "2024",
                "preliminary": "",
                "current": "Y",
                "lastChanged": "2023-11-23T02:42:19.095+00:00",
                "semNum": "1",
                "semesterTitle": "Spring 2024",
                "formattedStartDateTime": "Thu Nov 23 02:42:19 UTC 2023"
            }
        ],
        "formDefaults": {
            "courseCredits": {
                "0.0": "0.0",
                "0.5": "0.5",
                "1.0": "1.0",
                "2.0": "2.0",
                "3.0": "3.0",
                "4.0": "4.0",
                "5.0": "5.0",
                "6.0": "6.0"
            },
            "courseLevels": {
                "100": "100 Level Courses",
                "200": "200 Level Courses",
                "300": "300 Level Courses",
                "400": "400 Level Courses",
                "500": "500 Level Courses",
                "600": "600 Level Courses",
                "000": "Developmental Courses"
            },
            "courseRequirements": {
                "N": "None",
                "D": "U.S. Diversity",
                "I": "International Perspectives"
            },
            "courseTypes": {
                "All": "All",
                "WWW": "Online (WWW)",
                "EX": "Experimental",
                "SAT": "Satisfactory/Fail",
                "HYB": "Hybrid",
                "FF": "Face-to-Face"
            }
        }
    },
    "defSem": 3,
    "selectedTerm": 3,
    "selectedDepartment": "ACCT",
    "startTime": "",
    "stopTime": ""
})
        });
        const data = await res.json();
        courses.set(data.response);
    });

    // When the user selects a department, update the dept variable and fetch the courses again
    function handleDeptChange(event) {
        dept = event.target.value;
        fetchCourses();
    }

    // Fetch the courses from the API using a POST request
    async function fetchCourses() {
        const res = await fetch('/api/courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
    "semesters": {
        "departments": [
            {
                "id": "1",
                "title": "ACCOUNTING",
                "abbreviation": "ACCT"
            },
            {
                "id": "2",
                "title": "ACTUARIAL SCIENCE",
                "abbreviation": "ACSCI"
            },
            {
                "id": "3",
                "title": "ADVERTISING",
                "abbreviation": "ADVRT"
            },
            {
                "id": "4",
                "title": "AEROSPACE ENGINEERING",
                "abbreviation": "AER E"
            },
            {
                "id": "5",
                "title": "AFRICAN AND AFRICAN AMERICAN STUDIES",
                "abbreviation": "AF AM"
            },
            {
                "id": "6",
                "title": "AGRICULTURAL AND BIOSYSTEMS ENGINEERING",
                "abbreviation": "A B E"
            },
            {
                "id": "7",
                "title": "AGRICULTURAL EDUCATION & STUDIES",
                "abbreviation": "AGEDS"
            },
            {
                "id": "8",
                "title": "AGRONOMY",
                "abbreviation": "AGRON"
            },
            {
                "id": "9",
                "title": "AIR FORCE AEROSPACE STUDIES",
                "abbreviation": "AFAS"
            },
            {
                "id": "10",
                "title": "AMERICAN INDIAN STUDIES",
                "abbreviation": "AM IN"
            },
            {
                "id": "11",
                "title": "AMERICAN SIGN LANGUAGE",
                "abbreviation": "ASL"
            },
            {
                "id": "12",
                "title": "ANIMAL ECOLOGY",
                "abbreviation": "A ECL"
            },
            {
                "id": "13",
                "title": "ANIMAL SCIENCE",
                "abbreviation": "AN S"
            },
            {
                "id": "14",
                "title": "ANTHROPOLOGY",
                "abbreviation": "ANTHR"
            },
            {
                "id": "15",
                "title": "APPAREL, EVENTS, AND HOSPITALITY MANAGEM",
                "abbreviation": "AESHM"
            },
            {
                "id": "16",
                "title": "APPAREL, MERCHANDISING, AND DESIGN",
                "abbreviation": "A M D"
            },
            {
                "id": "17",
                "title": "ARABIC",
                "abbreviation": "ARABC"
            },
            {
                "id": "18",
                "title": "ARCHITECTURE",
                "abbreviation": "ARCH"
            },
            {
                "id": "19",
                "title": "ART EDUCATION",
                "abbreviation": "ARTED"
            },
            {
                "id": "20",
                "title": "ART HISTORY",
                "abbreviation": "ART H"
            },
            {
                "id": "21",
                "title": "ASTRONOMY & ASTROPHYSICS",
                "abbreviation": "ASTRO"
            },
            {
                "id": "22",
                "title": "ATHLETIC TRAINING",
                "abbreviation": "A TR"
            },
            {
                "id": "23",
                "title": "ATHLETICS",
                "abbreviation": "ATH"
            },
            {
                "id": "24",
                "title": "BIOCHEM, BIOPHYSICS & MOLECULAR BIO",
                "abbreviation": "BBMB"
            },
            {
                "id": "25",
                "title": "BIOINFORMATICS & COMPUTATIONAL BIOL-UG",
                "abbreviation": "BCBIO"
            },
            {
                "id": "26",
                "title": "BIOINFORMATICS AND COMPUTATIONAL BIOL",
                "abbreviation": "BCB"
            },
            {
                "id": "27",
                "title": "BIOLOGICAL/PRE-MEDICAL ILLUSTRATION",
                "abbreviation": "BPM I"
            },
            {
                "id": "28",
                "title": "BIOLOGY",
                "abbreviation": "BIOL"
            },
            {
                "id": "29",
                "title": "BIOMEDICAL ENGINEERING",
                "abbreviation": "B M E"
            },
            {
                "id": "30",
                "title": "BIOMEDICAL SCIENCES",
                "abbreviation": "B M S"
            },
            {
                "id": "31",
                "title": "BUSINESS ADMINISTRATION",
                "abbreviation": "BUSAD"
            },
            {
                "id": "32",
                "title": "CHEMICAL ENGINEERING",
                "abbreviation": "CH E"
            },
            {
                "id": "33",
                "title": "CHEMISTRY",
                "abbreviation": "CHEM"
            },
            {
                "id": "34",
                "title": "CHINESE",
                "abbreviation": "CHIN"
            },
            {
                "id": "35",
                "title": "CIVIL ENGINEERING",
                "abbreviation": "C E"
            },
            {
                "id": "36",
                "title": "CLASSICAL STUDIES",
                "abbreviation": "CL ST"
            },
            {
                "id": "37",
                "title": "COMMUNICATION DISORDERS",
                "abbreviation": "CMDIS"
            },
            {
                "id": "38",
                "title": "COMMUNICATION STUDIES",
                "abbreviation": "COMST"
            },
            {
                "id": "39",
                "title": "COMMUNITY & REGIONAL PLANNING",
                "abbreviation": "C R P"
            },
            {
                "id": "40",
                "title": "COMMUNITY DEVELOPMENT",
                "abbreviation": "COMDV"
            },
            {
                "id": "41",
                "title": "COMPUTER ENGINEERING",
                "abbreviation": "CPR E"
            },
            {
                "id": "42",
                "title": "COMPUTER SCIENCE",
                "abbreviation": "COM S"
            },
            {
                "id": "43",
                "title": "CONSTRUCTION ENGINEERING",
                "abbreviation": "CON E"
            },
            {
                "id": "44",
                "title": "CRIMINAL JUSTICE",
                "abbreviation": "C J"
            },
            {
                "id": "45",
                "title": "CYBER SECURITY",
                "abbreviation": "CYBSC"
            },
            {
                "id": "46",
                "title": "CYBER SECURITY ENGINEERING",
                "abbreviation": "CYB E"
            },
            {
                "id": "47",
                "title": "CYBER-PHYSICAL SYSTEMS",
                "abbreviation": "CPS"
            },
            {
                "id": "48",
                "title": "DANCE",
                "abbreviation": "DANCE"
            },
            {
                "id": "49",
                "title": "DATA SCIENCE",
                "abbreviation": "DS"
            },
            {
                "id": "50",
                "title": "DESIGN",
                "abbreviation": "DES"
            },
            {
                "id": "51",
                "title": "DESIGN STUDIES",
                "abbreviation": "DSN S"
            },
            {
                "id": "52",
                "title": "DIETETICS",
                "abbreviation": "DIET"
            },
            {
                "id": "53",
                "title": "EARLY CHILDCARE EDUCATION AND PROGRAMMIN",
                "abbreviation": "E C P"
            },
            {
                "id": "54",
                "title": "EARLY CHILDHOOD AND FAMILY POLICY",
                "abbreviation": "ECFP"
            },
            {
                "id": "55",
                "title": "ECOLOGY & EVOLUTIONARY BIOLOGY",
                "abbreviation": "EEB"
            },
            {
                "id": "56",
                "title": "ECOLOGY, EVOLUTION & ORGANISMAL BIOL",
                "abbreviation": "EEOB"
            },
            {
                "id": "57",
                "title": "ECONOMICS",
                "abbreviation": "ECON"
            },
            {
                "id": "58",
                "title": "EDUCATION",
                "abbreviation": "EDUC"
            },
            {
                "id": "59",
                "title": "EDUCATIONAL ADMINISTRATION",
                "abbreviation": "EDADM"
            },
            {
                "id": "60",
                "title": "EDUCATIONAL LEADERSHIP & POLICY ST",
                "abbreviation": "EL PS"
            },
            {
                "id": "61",
                "title": "ELECTRICAL ENGINEERING",
                "abbreviation": "E E"
            },
            {
                "id": "62",
                "title": "ENGINEERING",
                "abbreviation": "ENGR"
            },
            {
                "id": "63",
                "title": "ENGINEERING MECHANICS",
                "abbreviation": "E M"
            },
            {
                "id": "64",
                "title": "ENGLISH",
                "abbreviation": "ENGL"
            },
            {
                "id": "65",
                "title": "ENTOMOLOGY",
                "abbreviation": "ENT"
            },
            {
                "id": "66",
                "title": "ENTREPRENEURSHIP",
                "abbreviation": "ENTSP"
            },
            {
                "id": "67",
                "title": "ENVIRONMENTAL ENGINEERING",
                "abbreviation": "ENV E"
            },
            {
                "id": "68",
                "title": "ENVIRONMENTAL SCIENCE",
                "abbreviation": "ENSCI"
            },
            {
                "id": "69",
                "title": "ENVIRONMENTAL STUDIES",
                "abbreviation": "ENV S"
            },
            {
                "id": "70",
                "title": "EVENT MANAGEMENT",
                "abbreviation": "EVENT"
            },
            {
                "id": "71",
                "title": "FAMILY & CONSUMER SCIENCES ED & STUDIES",
                "abbreviation": "FCEDS"
            },
            {
                "id": "72",
                "title": "FAMILY FINANCIAL PLANNING",
                "abbreviation": "FFP"
            },
            {
                "id": "73",
                "title": "FINANCE",
                "abbreviation": "FIN"
            },
            {
                "id": "74",
                "title": "FOOD SCIENCE & HUMAN NUTRITION",
                "abbreviation": "FS HN"
            },
            {
                "id": "75",
                "title": "FORESTRY",
                "abbreviation": "FOR"
            },
            {
                "id": "76",
                "title": "FRENCH",
                "abbreviation": "FRNCH"
            },
            {
                "id": "77",
                "title": "GENETICS",
                "abbreviation": "GEN"
            },
            {
                "id": "78",
                "title": "GENETICS - INTERDISCIPLINARY",
                "abbreviation": "GENET"
            },
            {
                "id": "79",
                "title": "GENETICS, DEVELOPMENT & CELL BIOL",
                "abbreviation": "GDCB"
            },
            {
                "id": "80",
                "title": "GEOLOGY",
                "abbreviation": "GEOL"
            },
            {
                "id": "81",
                "title": "GERMAN",
                "abbreviation": "GER"
            },
            {
                "id": "82",
                "title": "GERONTOLOGY",
                "abbreviation": "GERON"
            },
            {
                "id": "83",
                "title": "GLOBAL RESOURCE SYSTEMS",
                "abbreviation": "GLOBE"
            },
            {
                "id": "84",
                "title": "GRADUATE STUDIES",
                "abbreviation": "GR ST"
            },
            {
                "id": "85",
                "title": "GRAPHIC DESIGN",
                "abbreviation": "ARTGR"
            },
            {
                "id": "86",
                "title": "HEALTH STUDIES",
                "abbreviation": "H S"
            },
            {
                "id": "87",
                "title": "HEALTHCARE MANAGEMENT",
                "abbreviation": "HCM"
            },
            {
                "id": "88",
                "title": "HIGHER EDUCATION",
                "abbreviation": "HG ED"
            },
            {
                "id": "89",
                "title": "HISTORY",
                "abbreviation": "HIST"
            },
            {
                "id": "90",
                "title": "HONORS",
                "abbreviation": "HON"
            },
            {
                "id": "91",
                "title": "HORTICULTURE",
                "abbreviation": "HORT"
            },
            {
                "id": "92",
                "title": "HOSPITALITY MANAGEMENT",
                "abbreviation": "HSP M"
            },
            {
                "id": "93",
                "title": "HUMAN COMPUTER INTERACTION",
                "abbreviation": "HCI"
            },
            {
                "id": "94",
                "title": "HUMAN DEVELOPMENT & FAMILY STUDIES",
                "abbreviation": "HD FS"
            },
            {
                "id": "95",
                "title": "HUMAN SCIENCES",
                "abbreviation": "H SCI"
            },
            {
                "id": "96",
                "title": "IMMUNOBIOLOGY",
                "abbreviation": "IMBIO"
            },
            {
                "id": "97",
                "title": "INDUSTRIAL DESIGN",
                "abbreviation": "IND D"
            },
            {
                "id": "98",
                "title": "INDUSTRIAL ENGINEERING",
                "abbreviation": "I E"
            },
            {
                "id": "99",
                "title": "INTEGRATED STUDIO ARTS",
                "abbreviation": "ARTIS"
            },
            {
                "id": "100",
                "title": "INTERDISCIPLINARY GRADUATE STUDIES",
                "abbreviation": "IGS"
            },
            {
                "id": "101",
                "title": "INTERIOR DESIGN",
                "abbreviation": "ARTID"
            },
            {
                "id": "102",
                "title": "INTERNATIONAL STUDIES",
                "abbreviation": "INTST"
            },
            {
                "id": "103",
                "title": "JOURNALISM & MASS COMMUNICATION",
                "abbreviation": "JL MC"
            },
            {
                "id": "104",
                "title": "KINESIOLOGY",
                "abbreviation": "KIN"
            },
            {
                "id": "105",
                "title": "LANDSCAPE ARCHITECTURE",
                "abbreviation": "L A"
            },
            {
                "id": "106",
                "title": "LATIN",
                "abbreviation": "LATIN"
            },
            {
                "id": "107",
                "title": "LEADERSHIP STUDIES",
                "abbreviation": "LD ST"
            },
            {
                "id": "108",
                "title": "LEARNING AND LEADERSHIP SCIENCES",
                "abbreviation": "L L S"
            },
            {
                "id": "109",
                "title": "LIBERAL ARTS & SCIENCES",
                "abbreviation": "LAS"
            },
            {
                "id": "110",
                "title": "LIBRARY",
                "abbreviation": "LIB"
            },
            {
                "id": "111",
                "title": "LINGUISTICS",
                "abbreviation": "LING"
            },
            {
                "id": "112",
                "title": "MANAGEMENT",
                "abbreviation": "MGMT"
            },
            {
                "id": "113",
                "title": "MANAGEMENT INFORMATION SYSTEMS",
                "abbreviation": "MIS"
            },
            {
                "id": "114",
                "title": "MARKETING",
                "abbreviation": "MKT"
            },
            {
                "id": "115",
                "title": "MATERIALS ENGINEERING",
                "abbreviation": "MAT E"
            },
            {
                "id": "116",
                "title": "MATERIALS SCIENCE & ENGINEERING",
                "abbreviation": "M S E"
            },
            {
                "id": "117",
                "title": "MATHEMATICS",
                "abbreviation": "MATH"
            },
            {
                "id": "118",
                "title": "MECHANICAL ENGINEERING",
                "abbreviation": "M E"
            },
            {
                "id": "119",
                "title": "METEOROLOGY",
                "abbreviation": "MTEOR"
            },
            {
                "id": "120",
                "title": "MICROBIOLOGY",
                "abbreviation": "MICRO"
            },
            {
                "id": "121",
                "title": "MILITARY SCIENCE",
                "abbreviation": "M S"
            },
            {
                "id": "122",
                "title": "MOLECULAR CELLULAR DEV BIOLOGY",
                "abbreviation": "MCDB"
            },
            {
                "id": "123",
                "title": "MUSIC",
                "abbreviation": "MUSIC"
            },
            {
                "id": "124",
                "title": "NATURAL RESOURCE ECOLOGY AND MGMT",
                "abbreviation": "NREM"
            },
            {
                "id": "125",
                "title": "NAVAL SCIENCE",
                "abbreviation": "N S"
            },
            {
                "id": "126",
                "title": "NEUROSCIENCE",
                "abbreviation": "NEURO"
            },
            {
                "id": "127",
                "title": "NURSING",
                "abbreviation": "NRS"
            },
            {
                "id": "128",
                "title": "NUTRITIONAL SCIENCES",
                "abbreviation": "NUTRS"
            },
            {
                "id": "129",
                "title": "ORGANIZATION FOR TROPICAL STUDIES",
                "abbreviation": "OTS"
            },
            {
                "id": "130",
                "title": "PERFORMING ARTS",
                "abbreviation": "PERF"
            },
            {
                "id": "131",
                "title": "PHILOSOPHY",
                "abbreviation": "PHIL"
            },
            {
                "id": "132",
                "title": "PHYSICS",
                "abbreviation": "PHYS"
            },
            {
                "id": "133",
                "title": "PLANT BIOLOGY",
                "abbreviation": "PLBIO"
            },
            {
                "id": "134",
                "title": "PLANT PATHOLOGY",
                "abbreviation": "PL P"
            },
            {
                "id": "135",
                "title": "POLITICAL SCIENCE",
                "abbreviation": "POL S"
            },
            {
                "id": "136",
                "title": "PORTUGUESE",
                "abbreviation": "PORT"
            },
            {
                "id": "137",
                "title": "PSYCHOLOGY",
                "abbreviation": "PSYCH"
            },
            {
                "id": "138",
                "title": "PUBLIC RELATIONS",
                "abbreviation": "P R"
            },
            {
                "id": "139",
                "title": "RELIGIOUS STUDIES",
                "abbreviation": "RELIG"
            },
            {
                "id": "140",
                "title": "RESEARCH & EVALUATION",
                "abbreviation": "RESEV"
            },
            {
                "id": "141",
                "title": "RUSSIAN",
                "abbreviation": "RUS"
            },
            {
                "id": "142",
                "title": "SEED TECHNOLOGY AND BUSINESS",
                "abbreviation": "STB"
            },
            {
                "id": "143",
                "title": "SOCIOLOGY",
                "abbreviation": "SOC"
            },
            {
                "id": "144",
                "title": "SOFTWARE ENGINEERING",
                "abbreviation": "S E"
            },
            {
                "id": "145",
                "title": "SPANISH",
                "abbreviation": "SPAN"
            },
            {
                "id": "146",
                "title": "SPECIAL EDUCATION",
                "abbreviation": "SP ED"
            },
            {
                "id": "147",
                "title": "SPEECH COMMUNICATION",
                "abbreviation": "SP CM"
            },
            {
                "id": "148",
                "title": "STATISTICS",
                "abbreviation": "STAT"
            },
            {
                "id": "149",
                "title": "SUPPLY CHAIN MANAGEMENT",
                "abbreviation": "SCM"
            },
            {
                "id": "150",
                "title": "SUSTAINABLE AGRICULTURE",
                "abbreviation": "SUSAG"
            },
            {
                "id": "151",
                "title": "SUSTAINABLE ENVIRONMENTS",
                "abbreviation": "SUS E"
            },
            {
                "id": "152",
                "title": "TECHNOLOGY SYSTEMS MANAGEMENT",
                "abbreviation": "TSM"
            },
            {
                "id": "153",
                "title": "THEATRE",
                "abbreviation": "THTRE"
            },
            {
                "id": "154",
                "title": "TOXICOLOGY",
                "abbreviation": "TOX"
            },
            {
                "id": "155",
                "title": "TRANSPORTATION",
                "abbreviation": "TRANS"
            },
            {
                "id": "156",
                "title": "U.S. LATINO/A STUDIES",
                "abbreviation": "US LS"
            },
            {
                "id": "157",
                "title": "UNIVERSITY STUDIES",
                "abbreviation": "U ST"
            },
            {
                "id": "158",
                "title": "URBAN DESIGN",
                "abbreviation": "URB D"
            },
            {
                "id": "159",
                "title": "VET DIAGNOSTIC & PRODUCTION AN MED",
                "abbreviation": "VDPAM"
            },
            {
                "id": "160",
                "title": "VETERINARY CLINICAL SCIENCES",
                "abbreviation": "V C S"
            },
            {
                "id": "161",
                "title": "VETERINARY MICROBIOLOGY & PREV MED",
                "abbreviation": "V MPM"
            },
            {
                "id": "162",
                "title": "VETERINARY PATHOLOGY",
                "abbreviation": "V PTH"
            },
            {
                "id": "163",
                "title": "WIND ENERGY SCIENCE, ENGINEERING AND POL",
                "abbreviation": "WESEP"
            },
            {
                "id": "164",
                "title": "WISE",
                "abbreviation": "WISE"
            },
            {
                "id": "165",
                "title": "WOMEN'S AND GENDER STUDIES",
                "abbreviation": "WGS"
            },
            {
                "id": "166",
                "title": "WORLD FILM STUDIES",
                "abbreviation": "W F S"
            },
            {
                "id": "167",
                "title": "WORLD LANGUAGES AND CULTURES",
                "abbreviation": "WLC"
            },
            {
                "id": "168",
                "title": "YOUTH",
                "abbreviation": "YTH"
            }
        ],
        "semesters": [
            {
                "id": 1,
                "code": "1",
                "year": "2023",
                "preliminary": "",
                "current": "N",
                "lastChanged": "2023-08-19T03:22:15.240+00:00",
                "semNum": "3",
                "semesterTitle": "Summer 2023",
                "formattedStartDateTime": "Sat Aug 19 03:22:15 UTC 2023"
            },
            {
                "id": 2,
                "code": "F",
                "year": "2023",
                "preliminary": "",
                "current": "N",
                "lastChanged": "2023-11-23T02:41:53.223+00:00",
                "semNum": "5",
                "semesterTitle": "Fall 2023",
                "formattedStartDateTime": "Thu Nov 23 02:41:53 UTC 2023"
            },
            {
                "id": 3,
                "code": "S",
                "year": "2024",
                "preliminary": "",
                "current": "Y",
                "lastChanged": "2023-11-23T02:42:19.095+00:00",
                "semNum": "1",
                "semesterTitle": "Spring 2024",
                "formattedStartDateTime": "Thu Nov 23 02:42:19 UTC 2023"
            }
        ],
        "formDefaults": {
            "courseCredits": {
                "0.0": "0.0",
                "0.5": "0.5",
                "1.0": "1.0",
                "2.0": "2.0",
                "3.0": "3.0",
                "4.0": "4.0",
                "5.0": "5.0",
                "6.0": "6.0"
            },
            "courseLevels": {
                "100": "100 Level Courses",
                "200": "200 Level Courses",
                "300": "300 Level Courses",
                "400": "400 Level Courses",
                "500": "500 Level Courses",
                "600": "600 Level Courses",
                "000": "Developmental Courses"
            },
            "courseRequirements": {
                "N": "None",
                "D": "U.S. Diversity",
                "I": "International Perspectives"
            },
            "courseTypes": {
                "All": "All",
                "WWW": "Online (WWW)",
                "EX": "Experimental",
                "SAT": "Satisfactory/Fail",
                "HYB": "Hybrid",
                "FF": "Face-to-Face"
            }
        }
    },
    "defSem": 3,
    "selectedTerm": 3,
    "selectedDepartment": dept,
    "startTime": "",
    "stopTime": ""
})
        });
        const data = await res.json();
        courses.set(data.response);
    }

    // Export the courses store so it can be used in the template
    export { courses, handleDeptChange };

</script>
    


<main class="bg-gray-100 min-h-screen">
    <!-- Header and Dropdown Section -->
    <div class="py-6 bg-white shadow-md">
        <div class="container mx-auto px-4">
            <h1 class="text-3xl font-semibold text-gray-800">Course Search</h1>
            <p class="text-gray-600">Search for courses by department, semester, and more.</p>
        </div>
        <!-- Select a department from dropdown (Options: ACCT and FIN) -->
        <div class="container mx-auto px-4 mt-4">
            <select class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" on:change={handleDeptChange}>
                <option value="">Select a department</option>
                <option value="ACCT">Accounting</option>
                <option value="ACSCI">Actuarial Science</option>
                <option value="ADVRT">Advertising</option>
                <option value="AER E">Aerospace Engineering</option>
                <option value="AF AM">African and African American Studies</option>
                <option value="A B E">Agricultural and Biosystems Engineering</option>
                <option value="AGEDS">Agricultural Education & Studies</option>
                <option value="AGRON">Agronomy</option>
                <option value="AFAS">Air Force Aerospace Studies</option>
                <option value="AM IN">American Indian Studies</option>
                <option value="ASL">American Sign Language</option>
                <option value="A ECL">Animal Ecology</option>
                <option value="AN S">Animal Science</option>
                <option value="ANTHR">Anthropology</option>
                <option value="AESHM">Apparel, Events, and Hospitality Management</option>
                <option value="A M D">Apparel, Merchandising, and Design</option>
                <option value="ARABC">Arabic</option>
                <option value="ARCH">Architecture</option>
                <option value="ARTED">Art Education</option>
                <option value="ART H">Art History</option>
                <option value="ASTRO">Astronomy & Astrophysics</option>
                <option value="A TR">Athletic Training</option>
                <option value="ATH">Athletics</option>
                <option value="BBMB">Biochem, Biophysics & Molecular Bio</option>
                <option value="BCBIO">Bioinformatics & Computational Biol-UG</option>
                <option value="BCB">Bioinformatics and Computational Biology</option>
                <option value="BPM I">Biological/Pre-Medical Illustration</option>
                <option value="BIOL">Biology</option>
                <option value="B M E">Biomedical Engineering</option>
                <option value="B M S">Biomedical Sciences</option>
                <option value="BUSAD">Business Administration</option>
                <option value="CH E">Chemical Engineering</option>
                <option value="CHEM">Chemistry</option>
                <option value="CHIN">Chinese</option>
                <option value="C E">Civil Engineering</option>
                <option value="CL ST">Classical Studies</option>
                <option value="CMDIS">Communication Disorders</option>
                <option value="COMST">Communication Studies</option>
                <option value="C R P">Community & Regional Planning</option>
                <option value="COMDV">Community Development</option>
                <option value="CPR E">Computer Engineering</option>
                <option value="COM S">Computer Science</option>
                <option value="CON E">Construction Engineering</option>
                <option value="C J">Criminal Justice</option>
                <option value="CYBSC">Cyber Security</option>
                <option value="CYB E">Cyber Security Engineering</option>
                <option value="CPS">Cyber-Physical Systems</option>
                <option value="DANCE">Dance</option>
                <option value="DS">Data Science</option>
                <option value="DES">Design</option>
                <option value="DSN S">Design Studies</option>
                <option value="DIET">Dietetics</option>
                <option value="E C P">Early Childcare Education and Programming</option>
                <option value="ECFP">Early Childhood and Family Policy</option>
                <option value="EEB">Ecology & Evolutionary Biology</option>
                <option value="FIN">Finance</option>
            </select>
        </div>
    </div>

    <!-- Courses Grid Section -->
    <section class="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each $courses as course}
            <div class="bg-white p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h2 class="text-xl font-semibold mb-2">{course.deptCode} {course.classNumber}</h2>
                <p class="text-gray-700 mb-1">{course.classTitle}</p>
                <p class="text-gray-600">Credits: {course.creditHigh}</p>
                <!-- Professor Information, uses ternary in case instructor is empty -->
                
                <p class="text-gray-600">Instructor: {course.sections[0].sectionTimes[0].instrName ? course.sections[0].sectionTimes[0].instrName : 'TBA'
                }</p>
                <!-- More course details can be added here -->
            </div>
        {/each}
    </section>
</main>
  
  
  