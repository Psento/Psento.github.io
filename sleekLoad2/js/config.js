/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.05
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "images/Logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "404 Community | Dark RP | DEVELOPMENT";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = true;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/touhou01.jpg",
	"backgrounds/images/touhou02.jpg",
	"backgrounds/images/touhou03.jpg"
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	/*{ogg: "songs/Lullaby of Deserted Hell.ogg", name: "Lullaby of Deserted Hell"},
    {youtube: "TempLink", name: "TempName"},*/
	{youtube: "G3d8F5b5tUg", name: "YODELLING SHEEP - IT'S LOVE"},
	{youtube: "TgaY3USXmrA", name: "LASTER - GRAVITY"},
	{youtube: "2LcSrXCrMe4", name: "MR. WOOX - HOLIDAY PARTY"},
	{youtube: "Nyj4cXwCmIo", name: "THE FRITZ CANDY SHOP"},
	{youtube: "WEi9ZQrEjr8", name: "QUE SERA - WAX TAILOR"},
	{youtube: "5WU7oGiwiao", name: "MAC MILLER - STAY"},
	{youtube: "IAc3VX1TZGc", name: "ASO - SUN IN MY FACE"},
	{youtube: "6bMmhKz6KXg", name: "MAC MILLER - KNOCK KNOCK"},
	{youtube: "KuNUepg9oSQ", name: "G-EAZY - THE BEAUTIFUL DAMNED (SINNER'S HEIST REMIX)"},
	{youtube: "MBXT5Mp5VVg", name: "NIGHT LOVELL - I'M OKAY"},
	{youtube: "KCXSkp-CFqQ", name: "WEST COAST (FEAT. BLUEFACE, ALLBLACK & YG)"},
	{youtube: "BjTbELSqgYc", name: "FORREST. – YOUR SOUL (FT. BISKWIQ)"},
	{youtube: "zhiLDRojF84", name: "SKI MASK THE SLUMP GOD - NUKETOWN"},
	{youtube: "cGSF2N55L4g", name: "TERROR REID - SPINELESS"},
	{youtube: "VjAKeduaURc", name: "OTIS STACKS (FT. GIFT OF GAB) - FASHION DRUNK"},
	{youtube: "RSXiNSiiCsg", name: "PEACHY! – FALLING FOR YOU ♥ (FT. MXMTOON)"},
	{youtube: "rqfDjmAkq7U", name: "MOUNIKA - CUT MY HAIR (FEAT. CAVETOWN)"},
	{youtube: "dVrnuP2PPA8", name: "RIC WILSON – SINNER (FEAT. KWEKU COLLINS , RANERAPS & NICK KOSMA)"},
	{youtube: "gHX2I3wIBhM", name: "NASAYA – MIDNIGHT PURPLE (FT. MARO)"},
	{youtube: "4wvMsaZoW4c", name: "DIAMOND EYES - SEMPITERNAL MONSTERS"},
	{youtube: "cBx5St5PQXc", name: "FRAKSHA x ALEX JONES x SCOTTY HINDS - TOGETHER"},
	{youtube: "FBZckI6Jh3w", name: "LIL PEEP - STAR SHOPPING (OSIAS & KIRAW REMIX)"},
	{youtube: "LaH9b6Lqwzo", name: "PANIC! AT THE DISCO - MISS JACKSON"},
	{youtube: "7I34zOUZCXM", name: "PANIC! AT THE DISCO - DON'T THREATEN ME WITH A GOOD TIME"},
	{youtube: "T0-T-Im9-uo", name: "NOTORIOUS B.I.G - EVERYDAY STRUGGLE (L'INDÉCIS REMIX)"},
	{youtube: "58HQeed8Vhg", name: "WU-TANG CLAN - BACK IN THE GAME (PHONIKS REMIX)"},
	{youtube: "rwiIsqQiK0k", name: "BITTER BELIEF & COMPLETE - TERMINAL"},
	{youtube: "NoNjf8-NDc4", name: "CHILLINIT - WOMEN WEED AND WORDPLAY"},
	{youtube: "TBocIrN51vg", name: "CHILLINIT x TALAKAI x BODYBAGMEDIA - GET BODIED PT. 2"},
	{youtube: "g6MTKoXJkRY", name: "HUSKII x CHILLINIT - DUST 2 DUST"},
	{youtube: "eU-B-ZZv4Ao", name: "BLOOD IN THE CUT & DENZEL CURRY - ULTIMATE (YUNG NOIZE REMIX"},
	{youtube: "SXBdnTi0FDU", name: "VANIC x K.FLAY - CAN'T SLEEP"},
	{youtube: "PE5kMXrEoDw", name: "CHILLINIT x WOMBAT - UNDERRATED"},
	{youtube: "PfQ7BPDDe6Y", name: "DELINQUENT HABITS - CALIFORNIA FEAT. SEN DOG"},
	{youtube: "wmD8V9Ptk3A", name: "JUUKU - FROZEN"},
	{youtube: "lLFpcshWrpA", name: "RED HOT CHILI PEPPERS - SCAR TISSUE (N'TO REMIX)"},
	{youtube: "wfXupu60v-Q", name: "CAGE THE ELEPHANT - AIN'T NO REST FOR THE WICKED"},
	{youtube: "nFZP8zQ5kzk", name: "ALOE BLACC - I NEED A DOLLAR"},
	{youtube: "FtvB5yj-yvw", name: "2PAC FT. EMINEM - LAST KINGS"},
	{youtube: "coABxYznCmE", name: "HIPPY SABOTAGE - YOUR SOUL"},
	{youtube: "mQYJYY4VkWA", name: "THE OFFSPRING - WHY DON'T YOU GET A JOB"},
	{youtube: "ysho2xTWUYo", name: "THREE DAYS GRACE - ANIMAL I HAVE BECOME"},
	{youtube: "0n0NqlDXyhI", name: "CHILL & RELAX - UPPERMOST"},
	{youtube: "D4INE2zO9OU", name: "RED HOT CHILLI PEPPERS - CAN'T STOP"},
	{youtube: "YwyFzO6xOXs", name: "Hippie Sabotage - RUNNING MILES"},
	{youtube: "BJk6gZuPKRE", name: "PARALYZER - FINGER ELEVEN"},
	{youtube: "gS86jipcKzw", name: "GREEN DAY - BASKET CASE"},
	{youtube: "Ee_uujKuJMI", name: "GREEN DAY - AMERICAN IDIOT"},
	{youtube: "T0ZmErXkbxE", name: "GUNS N' ROSES - PARADISE CITY"},
	{youtube: "ph9KP2_lT5Q", name: "THREE DAYS GRACE - I HATE EVERYTHING ABOUT YOU"},
	{youtube: "As_cvwAMYi4", name: "MAC MILLER FT. KENDRICK LAMAR - FIGHT THE FEELING"},
	{youtube: "UclCCFNG9q4", name: "GORILLAZ - CLINT EASTWOOD"},
	{youtube: "PdHujs6UMYw", name: "TRAPT - HEADSTRONG"},
	{youtube: "F1B9Fk_SgI0", name: "CHILDISH GAMBINO - FEELS LIKE SUMMER"},
	{youtube: "E5yFcdPAGv0", name: "GORILLAZ - HUMILITY"},
	{youtube: "skKP6QwOXYA", name: "GORILLAZ - KANSAS"},
	{youtube: "VPSoNx1gyQ4", name: "88RISING - MIDSUMMER MADNESS FT. JOJI, RICH BRIAN, HIGHER BROTHERS, AUGUST 08"},
	{youtube: "8UhE2IRJ0rg", name: "THE NOTORIOUS B.I.G. - JUICY (2016 REMASTER)"},
	{youtube: "fMayh7FhLGE", name: "THE NOTORIOUS B.I.G. - GIMME THE LOOT"},
	{youtube: "MGQ1GqmixY0", name: "JAKE HILL & JOSH A - ENDLESS NIGHTMARE"},
	{youtube: "mG6ROHmgc80", name: "K.A.A.N - KAANCEPTS"},
	{youtube: "wImS498pYTM", name: "K.A.A.N - KAANCEPTS 2"},
	{youtube: "jzk3ATJ4siE", name: "K.A.A.N - LONELY"},
	{youtube: "8C4Yj4ON_tM", name: "K.A.A.N - HONEST"},
	{youtube: "ZLuvyj5Vx34", name: "CHANCE THE RAPPER - THE MAN WHO HAS EVERYTHING"},
	{youtube: "6ZAc41N2QRU", name: "CHANCE THE RAPPER - I MIGHT NEED SECURITY"},
	{youtube: "5IlLceUXn2Y", name: "K.A.A.N - KYST"},
	{youtube: "L3dtIyt6U1E", name: "GIFT OF GAB (FEAT. R.A. THE RUGGED MAN AND A-F-R-O) - FREEDOM FORM FLOWING"},
	{youtube: "f-nJU_yIaTE", name: "K.A.A.N. - U.O.E.N.O"},
	{youtube: "xGpdwhhAVDo", name: "K.A.A.N - FLOWERS"},
	{youtube: "liZXofwkePE", name: "AVENGED SEVENFOLD HAIL TO THE KING"},
	{youtube: "lLJyOMcFYeA", name: "PMAC - ONE"},
	{youtube: "fxeAVT__bY8", name: "ABSTRACT - I DO THIS (FEAT. ROZE)"},,
	{youtube: "s3Oyagx8Stw", name: "HENDERSIN - IN LOVE"},
	{youtube: "m2kaDZwoE-4", name: "TERROR REID - KRYLON FEAT. ELIOZIE"},
	{youtube: "T3E9Wjbq44E", name: "GYM CLASS HEROES: STEREO HEARTS FT. ADAM LEVINE"},
	{youtube: "iNaIgsnSG1w", name: "BENEE - SOAKED"},
	{youtube: "u1FXa2UDxoc", name: "JAKE HILL - RIP X (FEAT. MISHAAL)"},
	{youtube: "5aduiLwOb70", name: "SOUND OF WALKING AWAY x DIVINITY x SHELTER"},
	{youtube: "fdixQDPA2h0", name: "KID FRANCESCOLI - MOON"},
	{youtube: "zbdp5SZsdu8", name: "JAKE HILL - STAY"},
	{youtube: "J9Zjgb03FMQ", name: "ILLENIUM, JON BELLION - GOOD THINGS FALL APART"},
	{youtube: "4eaXoebXKfY", name: "POWFU - DEATH BED"},
	{youtube: "73_KEAYcgIk", name: "SCARS ON MY HEART (FEAT. SADBOYPROLIFIC)"},
	{youtube: "Cjq0qW9MR4Q", name: "STEVIE WONDER - MASTERBLASTER (PROLETER TRIBUTE)"},
	{youtube: "-T7eYmbnBeM", name: "PROLETER - AFTERWORD (FEAT. TASKROK)"},
	{youtube: "4KPw0EhUWA8", name: "ANTHEM - EMANCIPATOR"},
	{youtube: "XfSbwzE8vv0", name: "HEX COUGAR - HOW DOES IT FEEL"},
	{youtube: "Kfd9GpIDpTU", name: "FUTURE JAMES - LIFECOULDBEADREAM"},
	{youtube: "OLzmos59Bgk", name: "X I X X - PILLOW TALK"},
	{youtube: "nYBK6JBJM0M", name: "CHOP SUI - DONNY"},
	{youtube: "qGuSYDeJWYQ", name: "SCHOOLBOY Q - THE PURGE / RAPFIX CYPHER (20SYL REMIX)"},
	{youtube: "lJ1NYJQnJTI", name: "K.FLAY - FML (VANIC REMIX)"},
	{youtube: "VStphaGUsQI", name: "CALVIN HARRIS - THIS IS WHAT YOU CAME FOR (CRYSTAL KNIVES & HEUSE REMIX)"},
	{youtube: "bXXf4JqG3pQ", name: "NOMBE - WAIT"},
	{youtube: "_3fzwKT993Q", name: "TRINIX - NO SLEEP"},
	{youtube: "gO8DosEVemY", name: "SAID THE SKY - RUNNING AROUND"},
	{youtube: "8MWBWrqaNdQ", name: "BIG GIGANTIC - THE LITTLE THINGS (KASBO REMIX)"},
	{youtube: "sEh3LhwPjCQ", name: "VEXENTO - NEVER LETTING GO"},
	{youtube: "H0FQezKYteQ", name: "ANDY GRAMMER - FRESH EYES (GREY REMIX)"},
	{youtube: "fs7ujm4LCxk", name: "NICK TALOS VS. TWO FEET - GO F*CK YOURSELF"},
	{youtube: "QVGYa9d9DUQ", name: "JUST A GENT X SMLE - LEAVE IT ALL (FEAT. CALICA)"},
	{youtube: "r6cF0T5MPMc", name: "CLEM BEATZ - LUCIOLES"},
	{youtube: "uQ7Z9LRnVKE", name: "RUSS - EXPOSED"},
	{youtube: "tsLVEcF4R6M", name: "LEMAITRE - CLOSER (FEAT. JENNIE A.)"},
	{youtube: "ocYF4LO1HIg", name: "NOT YOUR DOPE - INDESTRUCTIBLE (FEAT. MAX)"},
	{youtube: "7VE3NoWhROc", name: "SWELL - I'M SORRY (FEAT. SHILOH DYNASTY)"},
	{youtube: "9fB8FAzqpKs", name: "KYLE COGLITORE - LET IT GO"},
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 2;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"This shouldn't take long, please continue to wait <3",
"We appreciate the time you spend with us.",
"Welcome to 404's Community Dark RP!",
"Did you know 404 makes music?"
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;