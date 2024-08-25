let availableKeywords = [
  'raspberries',
  'blackberries',
  'elderberries',
  'rowan berries',
  'bilberries',
  'sloe fruits',
  'blackthorn fruits',
  'crab apples',
  'apples',
  'pears',
  'cherries',
  'plums',
  'damson',
  'bullace',
  'hawthorn berries',
  'rosehips',
  'brambles/blackberries',
  'strawberries',
  'cloudberries',
  'blueberries',
  'broccoli',
  'chicken breast',
  'salmon',
  'brown rice',
  'spinach',
  'lentils',
  'avocado',
  'sweet potato',
  'greek yogurt',
  'quinoa',
  'almonds',
  'oats',
  'eggs',
  'kale',
  'turkey breast',
  'black beans',
  'peanut butter',
  'cauliflower',
  'wild caught tuna',
  'whole wheat bread',
  'edamame',
  'cottage cheese',
  'chicken thigh',
  'tofu',
  'brussels sprouts',
  'quinoa pasta',
  'greek salad',
  'chicken noodle soup',
  'beef tenderloin',
  'roasted sweet potato',
  'grilled salmon',
  'brown rice sushi',
  'baked cod',
  'quinoa stuffed bell pepper',
  'roasted brussels sprouts',
  'lentil soup',
  'chicken veggie stir fry',
  'baked chicken parmesan',
  'grilled shrimp skewers',
  'roasted chickpeas',
  'baked sweet potato fries',
  'grilled chicken caesar salad',
  'baked ziti with turkey',
  'roasted turkey breast',
  'sauteed spinach and garlic',
  'baked salmon with lemon',
  'grilled chicken and veggies',
  'roasted butternut squash',
  'baked tilapia with herbs',
  'sauteed mushrooms',
  'steamed broccoli',
  'zucchini noodles',
  'mushrooms',
  'onions',
  'garlic',
  'ginger',
  'turmeric',
  'basil',
  'rosemary',
  'thyme',
  'sage',
  'oregano',
  'parsley',
  'cilantro',
  'dill',
  'fennel',
  'celery',
  'radish',
  'turnip',
  'rutabaga',
  'eggplant',
  'artichoke',
  'chia seeds',
  'flaxseeds',
  'hemp seeds',
  'sunflower seeds',
  'pumpkin seeds',
  'walnuts',
  'pecans',
  'cashews',
  'pistachios',
  'macadamia nuts',
  'carrots',
  'potatoes',
  'tomatoes',
  'bell peppers',
  'cucumber',
  'green beans',
  'asparagus',
  'peas',
  'corn',
  'beets',
  'cabbage',
  'lettuce',
  'arugula',
  'bok choy',
  'swiss chard',
  'collard greens',
  'green onions',
  'leeks',
  'shallots',
  'butternut squash',
  'acorn squash',
  'spaghetti squash',
  'pumpkin',
  'radicchio',
  'watercress',
  'endive',
  'jicama',
  'okra',
  'celery root (celeriac)',
  'parsnips',
  'jerusalem artichokes',
  'radishes',
  'turnip greens',
  'mustard greens',
  'rutabaga',
  'snow peas',
  'sugar snap peas',
  'daikon radish',
  'water chestnuts',
  'bamboo shoots',
  'baby corn',
  'lotus root',
  'seaweed',
  'nori',
  'wakame',
  'kombu',
  'hijiki',
  'alfalfa sprouts',
  'mung bean sprouts',
  'soybean sprouts',
  'chicken breast',
'chicken thighs',
'chicken wings',
'chicken drumsticks',
'ground chicken',
'rotisserie chicken',
'chicken tenders',
'chicken liver',
'chicken gizzards',
'chicken sausage',
'turkey breast',
'ground turkey',
'turkey legs',
'turkey wings',
'turkey sausage',
'duck breast',
'duck legs',
'ground duck',
'duck confit',
'duck liver',
'beef steak',
'ground beef',
'beef brisket',
'beef ribs',
'beef tenderloin',
'beef liver',
'beef tongue',
'corned beef',
'roast beef',
'beef jerky',
'pork chops',
'ground pork',
'pork tenderloin',
'pork belly',
'pork ribs',
'pork shoulder',
'bacon',
'ham',
'prosciutto',
'pork sausage',
'lamb chops',
'ground lamb',
'lamb shank',
'lamb shoulder',
'lamb ribs',
'lamb liver',
'veal cutlets',
'veal chops',
'ground veal',
'veal liver',
'mozzarella cheese',
'cheddar cheese',
'parmesan cheese',
'gouda cheese',
'feta cheese',
'brie cheese',
'camembert cheese',
'goat cheese',
'ricotta cheese',
'blue cheese',
'paneer',
'swiss cheese',
'provolone cheese',
'halloumi cheese',
'havarti cheese',
'manchego cheese',
'gruyere cheese',
'tilapia',
'haddock',
'trout',
'mackerel',
'anchovies',
'sardines',
'snapper',
'halibut',
'monkfish',
'swordfish',
'mussels',
'clams',
'scallops',
'oysters',
'squid',
'octopus',
'crab',
'lobster',
'shrimp',
'crayfish',
'lamb roast',
'leg of lamb',
'lamb kebabs',
'lamb burgers',
'venison steak',
'ground venison',
'venison sausage',
'bison steak',
'ground bison',
'bison burgers',
'duck breast',
'roasted duck',
'goose breast',
'ground goose',
'quail',
'pheasant',
'rabbit',
'frog legs',
'escargot',
'caviar',
'roe',
'uni (sea urchin)',
'conch',
'abalone',
'kohlrabi',
'fennel bulb',
'mizuna',
'tatsoi',
'microgreens',
'morel mushrooms',
'chanterelle mushrooms',
'porcini mushrooms',
'truffle',
'lobster tail',
'king crab legs',
'rock crab',
'sunchokes',
'chayote',
'salsify',
'kale sprouts',
'broccolini',
'purple cabbage',
'broccoli rabe',
'red leaf lettuce',
'green leaf lettuce',
'butter lettuce',
'salad greens',
'mizuna greens',
'tatsoi greens',
'collard greens',
'mustard greens',
'beet greens',
'turnip greens',
'pea shoots',
'basil sprouts',
'cilantro sprouts',
'daikon sprouts',
'wasabi root',
'horseradish',
'borage',
'purslane',
'malabar spinach',
'amaranth leaves',
'carrot greens',
'fenugreek leaves',
'lemon balm',
'sorrel',
'sculpit',
'sea kale',
'glasswort',
'samphire',
'salicornia',
'sea beans',
'red dulse',
'irish moss',
'spotted tripe',
'sheep sorrel',
'wood sorrel',
'curly endive',
'broad beans',
'purple cauliflower',
'romanesco',
'sunflower greens',
'pea greens',
'radish greens',
'banana',
'pineapple',
'watermelon',
'kiwi',
'mango',
'papaya',
'grapes',
'figs',
'dates',
'prunes',
'cantaloupe',
'honeydew melon',
'peach',
'nectarine',
'apricot',
'guava',
'pomegranate',
'passion fruit',
'starfruit',
'dragon fruit',
'lychee',
'jackfruit',
'durian',
'coconut',
'orange',
'lemon',
'lime',
'grapefruit',
'tangerine',
'mandarin',
'satsuma',
'clementine',
'tomato',
'cucumber',
'carrot',
'potato',
'beetroot',
'sweet corn',
'green beans',
'sugar snap peas',
'peas',
'red bell pepper',
'yellow bell pepper',
'green bell pepper',
'pumpkin',
'squash',
'zucchini',
'cabbage',
'lettuce',
'arugula',
'watercress',
'endive',
'collard greens',
'mustard greens',
'tatsoi',
'bok choy',
'swiss chard',
'leeks',
'parsnips',
'artichoke hearts',
'okra',
'jalapeno',
'habanero',
'serrano pepper',
'chipotle',
'paprika',
'cayenne pepper',
'black pepper',
'white pepper',
'cardamom',
'clove',
'cinnamon',
'nutmeg',
'allspice',
'anise',
'vanilla bean',
'saffron',
'bay leaf',
'lemongrass',
'galangal',
'shallots',
'scallions',
'horseradish',
'wasabi',
'miso',
'kimchi',
'kombucha',
'tempeh',
'sauerkraut',
'pickles',
'anchovies',
'sardines',
'mackerel',
'herring',
'trout',
'bass',
'swordfish',
'halibut',
'flounder',
'tilapia',
'catfish',
'blue crab',
'lobster',
'oysters',
'mussels',
'scallops',
'clams',
'squid',
'octopus',
'caviar',
'venison',
'elk',
'bison',
'duck breast',
'goose',
'rabbit',
'quail',
'pigeon',
'frog legs',
'alligator',
'ostrich',
'emu',
'kangaroo',
'potato chips',
'fried chicken (KFC)',
'beef hamburger',
'cheeseburger (McDonald)',
'hot dog (Nathan\'s Famous)',
'spaghetti bolognese',
'lasagna',
'ravioli',
'fettuccine alfredo',
'macaroni and cheese',
'pepperoni pizza',
'tacos (beef)',
'burritos (chicken)',
'quesadillas (cheese)',
'nachos (beef)',
'enchiladas (chicken)',
'fajitas (steak)',
'tamales (pork)',
'salmon sushi',
'sashimi (tuna)',
'ramen (tonkotsu)',
'udon (tempura)',
'tempura shrimp',
'teriyaki chicken',
'gyoza (pork)',
'katsu (chicken)',
'pho (beef)',
'banh mi (pork)',
'spring rolls (vegetable)',
'dumplings (pork)',
'baozi (pork)',
'pad thai (shrimp)',
'green curry (chicken)',
'red curry (beef)',
'massaman curry (chicken)',
'panang curry (shrimp)',
'dim sum',
'congee',
'chicken satay',
'bibimbap',
'kimchi fried rice',
'chicken biryani',
'tandoori chicken',
'garlic naan',
'samosa (potato)',
'paneer tikka',
'butter chicken',
'vindaloo (beef)',
'pav bhaji',
'chole bhature',
'masala dosa',
'idli',
'pani puri',
'bhel puri',
'sev puri',
'chicken tikka masala',
'rogan josh',
'prawn curry',
'fish curry',
'lamb shish kebab',
'falafel',
'hummus',
'baba ganoush',
'tabbouleh',
'baklava',
'chicken shawarma',
'gyros (lamb)',
'moussaka',
'spanakopita',
'chicken souvlaki',
'seafood paella',
'gazpacho',
'tapas',
'empanadas (beef)',
'churros',
'ceviche (shrimp)',
'arepas (cheese)',
'pupusas (pork)',
'feijoada',
'picanha',
'brigadeiro',
'tiramisu',
'gelato (pistachio)',
'cannoli',
'panna cotta',
'risotto (mushroom)',
'gnocchi',
'bruschetta',
'caprese salad',
'focaccia',
'prosciutto',
'salami',
'mortadella',
'calzone (ham)',
'stromboli (pepperoni)',
'mochi (green tea)',
'dango',
'takoyaki',
'okonomiyaki',
'kimbap (vegetable)',
'japchae',
'tangyuan',
'zongzi',
'mapo tofu',
'hot pot',
'peking duck',
'chicken chow mein',
'kung pao chicken',
'sweet and sour pork',
'shrimp fried rice',
'orange chicken (Panda Express)',
'egg foo young',
'lo mein (beef)',
'crab rangoon',
'honey walnut shrimp',
'sesame chicken',
'lemon chicken',
'mango sticky rice',
'pineapple fried rice',
'samosa chaat',
'fried calamari',
'clam chowder',
'lobster bisque',
'seafood paella',
'moules-frites',
'chicken cordon bleu',
'beef bourguignon',
'coq au vin',
'ratatouille',
'quiche lorraine',
'croissant',
'pain au chocolat',
'crème brûlée',
'soufflé',
'madeleines',
'eclairs',
'macarons',
'tarte tatin',
'apple pie',
'chocolate chip cookies',
'brownies',
'cheesecake',
'carrot cake',
'red velvet cake',
'cupcakes (vanilla)',
'banana bread',
'blueberry muffins',
'pancakes (blueberry)',
'waffles (Belgian)',
'french toast',
'crepes (Nutella)',
'eggs benedict',
'omelette (cheese)',
'scrambled eggs',
'sunny-side up eggs',
'poached eggs',
'deviled eggs',
'huevos rancheros',
'chicken and waffles',
'biscuits and gravy',
'bagels (everything)',
'lox',
'cream cheese',
'granola',
'smoothie bowl (acai)',
'chia pudding',
'overnight oats',
'porridge',
'acai bowl',
'fruit salad',
'yogurt parfait',
'croque monsieur',
'croque madame',
's\'more',
'wine',
'ginger ale',
'whisky',
'bloody mary',
'falafel',
'shawarma',
'gyros',
'souvlaki',
'baba ganoush',
'hummus',
'tabbouleh',
'fattoush',
'manakish',
'labneh',
'kibbeh',
'moussaka',
'paella',
'gazpacho',
'tapas',
'churros',
'empanadas',
'pupusas',
'arepas',
'ceviche',
'tacos',
'burritos',
'quesadillas',
'enchiladas',
'chiles rellenos',
'pozole',
'tamales',
'chimichanga',
'mole',
'pico de gallo',
'guacamole',
'salsa',
'carnitas',
'cochinita pibil',
'cajeta',
'churros con chocolate',
'plantains',
'arroz con pollo',
'ropa vieja',
'flan',
'tres leches cake',
'arroz con leche',
'dulce de leche',
'alfajores',
'chimichurri',
'asado',
'matambre',
'empanadas argentinas',
'curanto',
'barreado',
'coxinha',
'feijoada',
'brigadeiro',
'cachaca',
'caipirinha',
'acai bowl',
'muamba de galinha',
'jollof rice',
'egusi soup',
'fufu',
'suya',
'biltong',
'bobotie',
'potjiekos',
'ugali',
'nyama choma',
'samosa',
'chapati',
'pilau',
'mandazi',
'injera',
'doro wat',
'kitfo',
'tibs',
'bobotie',
'roti',
'naan',
'samosa',
'butter chicken',
'chicken tikka masala',
'saag paneer',
'palak paneer',
'biryani',
'pulao',
'dal makhani',
'chole bhature',
'rajma',
'kebabs',
'korma',
'lamb vindaloo',
'gulab jamun',
'rasgulla',
'jalebi',
'paneer tikka',
'pani puri',
'bhel puri',
'sev puri',
'vada pav',
'dhokla',
'masala dosa',
'idli',
'uttapam',
'poori',
'aloo paratha',
'kachori',
'kulfi',
'halwa',
'bhindi masala',
'baingan bharta',
'malai kofta',
'tandoori chicken',
'rogan josh',
'seekh kebab',
'kathi roll',
'fish curry',
'goan prawn curry',
'punjabi kadhi',
'papadum',
'achar',
'pickle',
'raita',
'mango lassi',
'rose milk',
'paneer bhurji',
'bhatura',
'daal baati churma',
'ragda pattice',
'kothimbir vadi',
'kolhapuri misal',
'kheema pav',
'sheera',
'modak',
'ukadiche modak',
'patra',
'jain pav bhaji',
'murukku',
'adirasam',
'thirattu paal',
'akkaravadisal',
'puttu',
'neyyappam',
'unniyappam',
'bisi bele bath',
'hyderabadi haleem',
'nihari',
'sindhi kadhi',
'basundi',
'kaddu ki sabzi',
'sarson ka saag',
'makki di roti',
'lahsuni bhindi',
'rasam',
'sambar',
'pongal',
'banana chips',
'appam',
'medu vada',
'kanji',
'ragi mudde',
'ragi roti',
'bajra roti',
'jowar roti',
'paneer butter masala',
'chettinad chicken',
'laal maas',
'bheja fry',
'akhrot ka halwa',
'moong dal halwa',
'khasta kachori',
'kesari bath',
'kushari',
'baba ghanoush',
'tahini',
'halva',
'koshary',
'ful medames',
'mezze',
'kofta',
'falafel sandwich',
'borek',
'dolma',
'menemen',
'gözleme',
'mantı',
'künefe',
'cacık',
'şiş kebap',
'lahmacun',
'pide',
'baklava',
'kibbeh nayeh',
'sfiha',
'fattoush',
'taboon bread',
'za\'atar',
'labneh',
'qatayef',
'ma\'amoul',
'knafeh',
'halva',
'basbousa',
'bamieh',
'khoresh gheymeh',
'fesenjan',
'chelo kabab',
'tahchin',
'torshi',
'ash reshteh',
'joojeh kabab',
'mast-o-khiar',
'tahdig',
'zorat soup',
'sabzi polo',
'eshkeneh',
'khakshir',
'doogh',
'abgoosht',
'haleem',
'mashhadi soup',
'torshi makhloot',
'polow',
'bastani sonati',
'sohan',
'faloodeh',
'nan-e barbari',
'nan-e taftoon',
'nan-e sangak',
'nan-e lavash',
'kalle-pache',
'kookoo sabzi',
'mirza ghasemi',
'saffron ice cream',
'ash-e anar',
'eshkeneh',
'ghormeh sabzi',
'khoresht-e-bademjan',
'saffron rice',
'zereshk polo',
'torshi seer',
'torshi makhloot',
'bamieh',
'qatayef',
'mahalabia',
'harira',
'khoubiz',
'tahchin',
'jaj bil laban',
'tahdig',
'kumru',
'dolmades',
'tarator',
'trahana soup',
'koulouri',
'chakchouka',
'matbucha',
'muhammara',
'labneh',
'mutabbal',
'baba ghanoush',
'tahini',
'battata harra',
'falafel',
'manakish',
'shawarma',
'gyros',
'moussaka',
'paella',
'tapas',
'empanadas',
'arepas',
'ceviche',
'tacos',
'burritos',
'quesadillas',
'pozole',
'tamales',
'chimichanga',
'mole',
'pico de gallo',
'guacamole',
'carnitas',
'cochinita pibil',
'cajeta',
'churros con chocolate',
'plantains',
'arroz con pollo',
'ropa vieja',
'flan',
'tres leches cake',
'arroz con leche',
'dulce de leche',
'alfajores',
'chimichurri',
'asado',
'matambre',
'empanadas argentinas',
'curanto',
'barreado',
'coxinha',
'feijoada',
'brigadeiro',
'caipirinha',
'acai bowl',
'muamba de galinha',
'jollof rice',
'egusi soup',
'fufu',
'suya',
'biltong',
'bobotie',
'potjiekos',
'ugali',
'nyama choma',
'mealie bread',
'bunny chow',
'melkkos',
'koeksisters',
'vetkoek',
'malva pudding',
'melktert',
'boerewors',
'bobotie',
'roti',
'naan',
'samosa',
'butter chicken',
'chicken tikka masala',
'saag paneer',
'palak paneer',
'biryani',
'dal makhani',
'rajma',
'kebabs',
'gulab jamun',
'rasgulla',
'jalebi',
'paneer tikka',
'poha',
'upma',
'idli',
'uttapam',
'poori',
'aloo paratha',
'kachori',
'kulfi',
'halwa',
'bhindi masala',
'baingan bharta',
'malai kofta',
'tandoori chicken',
'rogan josh',
'seekh kebab',
'kathi roll',
'fish curry',
'goan prawn curry',
'punjabi kadhi',
'achar',
'mango lassi',
'paneer bhurji',
'bhatura',
'daal baati churma',
'ragda pattice',
'kothimbir vadi',
'kolhapuri misal',
'kheema pav',
'sheera',
'modak',
'patra',
'jain pav bhaji',
'murukku',
'adirasam',
'puttu',
'neyyappam',
'unniyappam',
'bisi bele bath',
'hyderabadi haleem',
'nihari',
'sindhi kadhi',
'basundi',
'kaddu ki sabzi',
'sarson ka saag',
'makki di roti',
'lahsuni bhindi',
'rasam',
'sambar',
'pongal',
'banana chips',
'appam',
'medu vada',
'kanji',
'ragi mudde',
'ragi roti',
'bajra roti',
'jowar roti',
'paneer butter masala',
'chettinad chicken',
'laal maas',
'bheja fry',
'akhrot ka halwa',
'moong dal halwa',
'khasta kachori',
'kesari bath',
'kushari',
'baba ghanoush',
'tahini',
'halva',
'koshary',
'ful medames',
'mezze',
'kofta',
'falafel sandwich',
'borek',
'dolma',
'menemen',
'gözleme',
'mantı',
'künefe',
'cacık',
'şiş kebap',
'lahmacun',
'pide',
'baklava',
'kibbeh nayeh',
'sfiha',
'fattoush',
'taboon bread',
'za\'atar',
'labneh',
'qatayef',
'ma\'amoul',
'knafeh',
'halva',
'basbousa',
'bamieh',
'khoresh gheymeh',
'fesenjan',
'chelo kabab',
'tahchin',
'torshi',
'ash reshteh',
'joojeh kabab',
'mast-o-khiar',
'tahdig',
'zorat soup',
'sabzi polo',
'eshkeneh',
'khakshir',
'doogh',
'abgoosht',
'haleem',
'mashhadi soup',
'torshi makhloot',
'polow',
'bastani sonati',
'sohan',
'faloodeh',
'nan-e barbari',
'nan-e taftoon',
'nan-e sangak',
'nan-e lavash',
'kalle-pache',
'kookoo sabzi',
'mirza ghasemi',
'saffron ice cream',
'ash-e anar',
'eshkeneh',
'ghormeh sabzi',
'khoresht-e-bademjan',
'saffron rice',
'zereshk polo',
'torshi seer',
'torshi makhloot',
'bamieh',
'qatayef',
'mahalabia',
'harira',
'khoubiz',
'tahchin',
'jaj bil laban',
'tahdig',
'kumru',
'dolmades',
'tarator',
'trahana soup',
'koulouri',
'chakchouka',
'matbucha',
'muhammara',
'labneh',
'mutabbal',
'baba ghanoush',
'tahini',
'battata harra',
'falafel',
'manakish',
'shawarma',
'gyros',
'moussaka',
'paella',
'tapas',
'empanadas',
'arepas',
'ceviche',
'tacos',
'burritos',
'quesadillas',
'pozole',
'tamales',
'chimichanga',
'mole',
'pico de gallo',
'guacamole',
'carnitas',
'cochinita pibil',
'cajeta',
'churros con chocolate',
'plantains',
'arroz con pollo',
'ropa vieja',
'flan',
'tres leches cake',
'arroz con leche',
'dulce de leche',
'alfajores',
'chimichurri',
'asado',
'matambre',
'empanadas argentinas',
'curanto',
'barreado',
'coxinha',
'feijoada',
'brigadeiro',
'caipirinha',
'acai bowl',
'muamba de galinha',
'jollof rice',
'egusi soup',
'fufu',
'suya',
'biltong',
'bobotie',
'potjiekos',
'ugali',
'nyama choma',
'mealie bread',
'bunny chow',
'melkkos',
'koeksisters',
'vetkoek',
'malva pudding',
'melktert',
'boerewors',
'bobotie',
'roti',
'naan',
'samosa',
'butter chicken',
'chicken tikka masala',
'saag paneer',
'palak paneer',
'biryani',
'dal makhani',
'rajma',
'kebabs',
'gulab jamun',
'rasgulla',
'jalebi',
'paneer tikka',
'poha',
'upma',
'idli',
'uttapam',
'poori',
'aloo paratha',
'kachori',
'kulfi',
'halwa',
'bhindi masala',
'baingan bharta',
'malai kofta',
'tandoori chicken',
'rogan josh',
'seekh kebab',
'kathi roll',
'fish curry',
'goan prawn curry',
'punjabi kadhi',
'achar',
'mango lassi',
'paneer bhurji',
'bhatura',
'daal baati churma',
'ragda pattice',
'kothimbir vadi',
'kolhapuri misal',
'kheema pav',
'sheera',
'modak',
'patra',
'jain pav bhaji',
'murukku',
'adirasam',
'puttu',
'neyyappam',
'unniyappam',
'bisi bele bath',
'hyderabadi haleem',
'nihari',
'sindhi kadhi',
'basundi',
'kaddu ki sabzi',
'sarson ka saag',
'makki di roti',
'lahsuni bhindi',
'rasam',
'sambar',
'pongal',
'banana chips',
'appam',
'medu vada',
'kanji',
'ragi mudde',
'ragi roti',
'bajra roti',
'jowar roti',
'paneer butter masala',
'chettinad chicken',
'laal maas',
'bheja fry',
'akhrot ka halwa',
'moong dal halwa',
'khasta kachori',
'kesari bath',
'kushari',
'baba ghanoush',
'tahini',
'halva',
'koshary',
'ful medames',
'mezze',
'kofta',
'falafel sandwich',
'borek',
'dolma',
'menemen',
'gözleme',
'mantı',
'künefe',
'cacık',
'şiş kebap',
'lahmacun',
'pide',
'baklava',
'kibbeh nayeh',
'sfiha',
'fattoush',
'taboon bread',
'za\'atar',
'labneh',
'qatayef',
'ma\'amoul',
'knafeh',
'halva',
'basbousa',
'bamieh',
'khoresh gheymeh',
'fesenjan',
'chelo kabab',
'tahchin',
'torshi',
'ash reshteh',
'joojeh kabab',
'mast-o-khiar',
'tahdig',
'zorat soup',
'sabzi polo',
'eshkeneh',
'khakshir',
'doogh',
'abgoosht',
'haleem',
'mashhadi soup',
'torshi makhloot',
'polow',
'bastani sonati',
'sohan',
'faloodeh',
'nan-e barbari',
'nan-e taftoon',
'nan-e sangak',
'nan-e lavash',
'kalle-pache',
'kookoo sabzi',
'mirza ghasemi',
'saffron ice cream',
'ash-e anar',
'eshkeneh',
'ghormeh sabzi',
'khoresht-e-bademjan',
'saffron rice',
'zereshk polo',
'torshi seer',
'torshi makhloot',
'bamieh',
'qatayef',
'mahalabia',
'harira',
'khoubiz',
'tahchin',
'jaj bil laban',
'tahdig',
'kumru',
'dolmades',
'tarator',
'trahana soup',
'koulouri',
'chakchouka',
'matbucha',
'muhammara',
'labneh',
'mutabbal',
'baba ghanoush',
'tahini',
'battata harra',
'falafel',
'manakish',
'shawarma',
'gyros',
'moussaka',
'paella',
'tapas',
'empanadas',
'arepas',
'ceviche',
'tacos',
'burritos',
'quesadillas',
'pozole',
'tamales',
'chimichanga',
'mole',
'pico de gallo',
'guacamole',
'carnitas',
'cochinita pibil',
'cajeta',
'churros con chocolate',
'plantains',
'arroz con pollo',
'ropa vieja',
'flan',
'tres leches cake',
'arroz con leche',
'dulce de leche',
'alfajores',
'chimichurri',
'asado',
'matambre',
'empanadas argentinas',
'curanto',
'barreado',
'coxinha',
'feijoada',
'brigadeiro',
'caipirinha',
'acai bowl',
'muamba de galinha',
'jollof rice',
'egusi soup',
'fufu',
'suya',
'biltong',
'bobotie',
'potjiekos',
'ugali',
'nyama choma',
'mealie bread',
'bunny chow',
'melkkos',
'koeksisters',
'vetkoek',
'malva pudding',
'melktert',
'boerewors',
'bobotie',
'roti',
'naan',
'samosa',
'butter chicken',
'chicken tikka masala',
'saag paneer',
'palak paneer',
'biryani',
'dal makhani',
'rajma',
'kebabs',
'gulab jamun',
'rasgulla',
'jalebi',
'paneer tikka',
'poha',
'upma',
'idli',
'uttapam',
'poori',
'aloo paratha',
'kachori',
'kulfi',
'halwa',
'bhindi masala',
'baingan bharta',
'malai kofta',
'tandoori chicken',
'rogan josh',
'seekh kebab',
'kathi roll',
'fish',
'Paella',  
'Ropa Vieja',  
'Jerk Chicken',  
'Fufu',  
'Injera',  
'Bobotie',  
'Bunny Chow',  
'Couscous',  
'Tagine',  
'Souvlaki',  
'Moussaka',  
'Spanakopita',  
'Baklava',  
'Dolma',  
'Lahmacun',  
'Shawarma',  
'Kibbeh',  
'Shakshuka',  
'Harira',  
'Poutine',  
'Tourtière',  
'Nanaimo Bars',  
'Kimchi',  
'Bibimbap',  
'Japchae',  
'Bulgogi',  
'Sundubu-jjigae',  
'Yakitori',  
'Okonomiyaki',  
'Takoyaki',  
'Tonkatsu',  
'Udon',  
'Ramen',  
'Onigiri',  
'Churrasco',  
'Feijoada',  
'Coxinha',  
'Brigadeiro',  
'Empanadas',  
'Chimichurri',  
'Asado',  
'Pão de Queijo',  
'Tostones',  
'Mofongo',  
'Pupusas',  
'Arepas',  
'Cachapas',  
'Ceviche',  
'Lomo Saltado',  
'Tarte Tatin',
'Chardonnay',
'Sauvignon Blanc',
'Riesling',
'Pinot Grigio',
'Rosé',
'Merlot',
'Pinot Noir',
'Zinfandel',
'Shiraz',
'Cabernet Sauvignon',
'Malbec',
'Syrah',
'Grenache',
'Sangiovese',
'Barbera',
'Nebbiolo',
'Tempranillo',
'Rioja',
'Chianti',
'Prosecco',
'Champagne',
'Sparkling Rosé',
'Moscato',
'Port',
'Ice Wine',
'Sauternes',
'Shiraz Cabernet',
'Gewürztraminer',
'Viognier',
'Chenin Blanc',
'Grüner Veltliner',
'Albariño',
'Vermouth',
'Sherry',
'Madeira',
'Bordeaux',
'peking duck',
'kung pao chicken',
'ma po tofu',
'wonton soup',
'dumplings',
'sweet and sour pork',
'chow mein',
'hot pot',
'fried rice',
'spring rolls',
'general tso\'s chicken',
'char siu',
'szechuan shrimp',
'beef and broccoli',
'egg drop soup',
'lo mein',
'moo shu pork',
'orange chicken',
'cashew chicken',
'hunan beef',
'lion\'s head meatballs',
'steamed fish',
'braised pork belly',
'dan dan noodles',
'twice cooked pork',
'peking pork chops',
'tea smoked duck',
'fried dumplings',
'mapo eggplant',
'chinese cabbage stir fry',
'tofu skin rolls',
'xiaolongbao (soup dumplings)',
'salted duck',
'chicken feet dim sum',
'fish flavored shredded pork',
'yuxiang eggplant',
'chili chicken',
'sesame chicken',
'drunken chicken',
'salt and pepper shrimp',
'wonton noodles',
'claypot chicken rice',
'yangzhou fried rice',
'fish head casserole',
'spicy cumin lamb',
'scallion pancakes',
'red cooked pork',
'hot and sour soup',
'bitter melon stir fry',
'black bean spareribs',
'steamed pork buns',
'chinese roast pork',
'bamboo shoots stir fry',
'soy sauce chicken',
'sichuan boiled fish',
'crispy duck',
'egg foo young',
'steamed spare ribs with black beans',
'beef noodle soup',
'zha jiang mian',
'shanghai noodles',
'crab rangoon',
'pineapple chicken',
'sticky rice',
'soy braised chicken',
'stir-fried noodles with vegetables',
'pan-fried dumplings',
'honey walnut shrimp',
'salted egg yolk prawns',
'chili oil dumplings',
'beef tacos',
'beef stew',
'chili con carne',
'chicken parmesan',
'chicken pot pie',
'coconut shrimp',
'croque monsieur',
'eggplant parmesan',
'fried calamari',
'gyro',
'hot dog',
'lamb curry',
'lasagna',
'lobster mac and cheese',
'lobster tail',
'margherita pizza',
'moussaka',
'paella',
'pancakes',
'pepperoni pizza',
'pho',
'pierogi',
'pot roast',
'prime rib',
'quiche lorraine',
'ravioli',
'ratatouille',
'reddragon roll',
'risotto',
'scallops',
'sea bass',
'shrimp scampi',
'spicy tuna roll',
'squid ink pasta',
'steak frites',
'stuffed mushrooms',
'sushi',
'tacos al pastor',
'tempura',
'teriyaki chicken',
'tofu stir-fry',
'tonkatsu',
'tuna tartare',
'veal marsala',
'veal piccata',
'waffles',
'wagyu beef',
'waldorf salad',
'wonton soup',
'alfredo pasta',
'apple pie',
'baba ganoush',
'baked brie',
'baklava',
'bangers and mash',
'bbq chicken wings',
'beef carpaccio',
'beignets',
'bibimbap',
'bruschetta',
'caesar salad',
'ceviche',
'charcuterie board',
'cheese platter',
'chicken kebabs',
'chicken tikka masala',
'chocolate fondant',
'clam chowder',
'crème brûlée',
'deviled eggs',
'donuts',
'eggs benedict',
'empanadas',
'falafel',
'french toast',
'french onion soup',
'frozen yogurt',
'gnocchi',
'goulash',
'greek salad',
'grilled octopus',
'gyoza',
'huevos rancheros',
'humita',
'ice cream sundae',
'jerk chicken',
'kabobs',
'kimchi',
'korean bbq',
'lobster bisque',
'macarons',
'manicotti',
'margarita',
'meatballs',
'miso soup',
'moussaka',
'naan',
'omelette',
'pad thai',
'pancetta',
'panettone',
'panna cotta',
'pasta primavera',
'patatas bravas',
'pecan pie',
'peking duck',
'pico de gallo',
'polenta',
'pulled pork',
'pupusas',
'quinoa salad',
'rack of lamb',
'ratatouille',
'red velvet cake',
'ricotta gnocchi',
'ribs',
'ricotta cheesecake',
'roast beef',
'roasted chicken',
'roasted vegetables',
'samosas',
'sauerbraten',
'sauerbraten',
'sausage roll',
'scotch eggs',
'shrimp cocktail',
'soba noodles',
'sorbet',
'spaghetti',
'spaghetti bolognese',
'spaghetti with meatballs',
'spaghetti with tomato sauce',
'spinach and ricotta cannelloni',
'spinach dip',
'spring rolls',
'stuffed cabbage rolls',
'stuffed peppers',
'sushi rolls',
'sweet and sour pork',
'tabouleh',
'taco salad',
'thai curry',
'thai green curry',
'thai red curry',
'tikka masala',
'tiramisu',
'tom yum soup',
'tuna casserole',
'veal schnitzel',
'vegetable lasagna',
'welsh rarebit',
'wonton noodles',
'yeast rolls',
'yucca fries',
'zaatar chicken',
'zucchini fritters',
'zucchini noodles',
'zwieback',
'almond croissant',
'angel hair pasta',
'arepas',
'arroz con pollo',
'artichoke dip',
'baguette',
'baked alaska',
'banh mi',
'barbacoa',
'beef and broccoli',
'beef and mushroom pie',
'beef brisket',
'beef stew',
'beef tenderloin',
'beef tacos',
'beet salad',
'belgian waffles',
'biryani',
'black bean soup',
'blini',
'bouillabaisse',
'buffalo chicken dip',
'buffalo wings',
'burritos',
'butternut squash soup',
'caesar wrap',
'calamari',
'calzone',
'cannoli',
'caponata',
'caramel custard',
'carne asada',
'carrot cake',
'caviar',
'challah bread',
'chana masala',
'chapati',
'cheese board',
'cherry pie',
'chicken and dumplings',
'chicken caesar salad',
'chicken curry',
'chicken enchiladas',
'chicken noodle soup',
'chicken quesadilla',
'chicken shawarma',
'chicken soup',
'chicken tikka',
'chocolate chip cookies',
'chocolate mousse',
'chow mein',
'clam chowder',
'clam linguine',
'clams casino',
'cobb salad',
'coconut cake',
'coconut curry',
'coconut ice cream',
'coconut milk',
'coconut shrimp',
'coffee cake',
'coq au vin',
'corn chowder',
'cornbread',
'corned beef',
'couscous',
'crab rangoon',
'cranberry sauce',
'cream of mushroom soup',
'crepes',
'croissants',
'crunchy tacos',
'cucumber salad',
'cupcakes',
'currant scones',
'curried goat',
'currywurst',
'custard tart',
'daal',
'daal makhani',
'dal tadka',
'deviled crabs',
'dhal',
'dolma',
'dulce de leche',
'egg curry',
'egg drop soup',
'egg noodles',
'eggplant lasagna',
'eggplant parmigiana',
'eggs florentine',
'empanadas',
'escargot',
'falafel wrap',
'fish and chips',
'fish fry',
'flan',
'focaccia',
'foie gras',
'fried chicken',
'fried rice',
'frito pie',
'fruit tart',
'garlic bread',
'gazpacho',
'gefilte fish',
'gingerbread',
'glazed ham',
'gnudi',
'goat curry',
'goat stew',
'gochujang',
'golden milk',
'green bean casserole',
'green beans almondine',
'green curry',
'greek yogurt',
'grilled cheese',
'grilled lamb chops',
'grilled shrimp',
'grouper',
'guacamole',
'gumbo',
'haggis',
'ham and bean soup',
'ham sandwich',
'hamburger',
'hanbāgu',
'hanpen',
'hasselback potatoes',
'hollandaise',
'honey baked ham',
'hot and sour soup',
'hot chocolate',
'hummus',
'hush puppies',
'indian pudding',
'jalapeño poppers',
'jambalaya',
'japanese cheesecake',
'jellied eels',
'jollof rice',
'kabsa',
'kale chips',
'kale salad',
'kasha',
'katsudon',
'katsu curry',
'kebabs',
'kelp noodles',
'kibbeh',
'kidney pie',
'kimbap',
'king crab legs',
'kisir',
'kiwi sorbet',
'knish',
'kohlrabi',
'korean bbq ribs',
'korma',
'koshary',
'kouign-amann',
'kugel',
'kung pao chicken',
'kurkure',
'kushari',
'kuttu paratha',
'labelle cabane',
'laddu',
'lamb biryani',
'lamb stew',
'lasagna bolognese',
'lemon bars',
'lemon chicken',
'lemon curd',
'lemon meringue pie',
'lemonade',
'lemonade icebox cake',
'lettuce wraps',
'linguine',
'lobster',
'lobster mac n cheese',
'lobster roll',
'lobster tail',
'locro',
'loukoumades',
'lumpia',
'lychee',
'mac and cheese',
'macadamia nuts',
'macha',
'macher jhol',
'madai',
'madeira cake',
'magnolia cupcake',
'mahi mahi',
'maja blanca',
'majarete',
'maki sushi',
'malasadas',
'malfouf',
'malt loaf',
'mandazi',
'mandelbrodt',
'mandoline potatoes',
'mango chutney',
'maple bar',
'maple syrup',
'margarine',
'mariquitas',
'mariscos',
'marshmallow',
'marzipan',
'matcha latte',
'matcha tiramisu',
'matsutake',
'matzo ball soup',
'mayonnaise',
'meatloaf',
'medallions of beef',
'melon salad',
'menudo',
'meringue',
'mezze',
'microwave popcorn',
'migas',
'millet',
'mimosa',
'mincemeat',
'minestrone',
'mochi',
'mock turtle soup',
'mole',
'mongolian beef',
'moroccan chicken',
'mortadella',
'mostaccioli',
'moussaka',
'muesli',
'muffaletta',
'muhammara',
'mung beans',
'murgh makhani',
'mushroom risotto',
'mushroom stroganoff',
'mutton curry',
'naan',
'nachoes',
'nachos',
'napa cabbage',
'natto',
'navajo fry bread',
'nectarine cobbler',
'nicoise salad',
'nikujaga',
'nori',
'nsima',
'nutella',
'nutmeg',
'oatmeal',
'obatzda',
'octopus salad',
'okonomiyaki',
'old bay seasoning',
'onion bhaji',
'orange chicken',
'orange marmalade',
'osso buco',
'oyster stew',
'oysters rockefeller',
'paczki',
'paella',
'pakoras',
'pancetta',
'pancit',
'pandan cake',
'pandan waffles',
'panettone',
'panna cotta',
'papas arrugadas',
'papaya salad',
'paremesan cheese',
'parmigiana',
'parmesan',
'parmesan chicken',
'parsnips',
'passion fruit',
'pasta carbonara',
'pasta fagioli',
'pasta primavera',
'pastel de nata',
'pastilla',
'pastrami',
'pastrami sandwich',
'pastry cream',
'patbingsu',
'pate',
'pav bhaji',
'pavlova',
'pawpaw',
'peach cobbler',
'peanut brittle',
'peanut butter',
'peanut butter cookies',
'peanut butter cups',
'pear tart',
'peking duck',
'penne',
'peperonata',
'pepper steak',
'peppermint',
'peppermint bark',
'peppermint patty',
'pepppered steak',
'perch',
'perfect poached egg',
'pernil',
'pesto',
'pesto chicken',
'petits fours',
'pfannkuchen',
'phad thai',
'phad see ew',
'phở',
'picadillo',
'pickled beets',
'pickled eggs',
'pickled ginger',
'pickled herring',
'pickled onions',
'pickled peppers',
'pickles',
'picnic chicken',
'pie',
'pierogi',
'pig\'s ear',
'pigs in a blanket',
'pilaf',
'pimiento cheese',
'pimm\'s cup',
'pina colada',
'pineapple cake',
'pineapple tarts',
'pink lemonade',
'pinto beans',
'pistachio ice cream',
'pita',
'pita chips',
'pita bread',
'pita sandwich',
'pitanga',
'pizza',
'pizza margherita',
'pizzoccheri',
'plaice',
'platanos',
'plum cake',
'poached egg',
'poached pears',
'poblano',
'pogácsa', 
];

const resultsBox = document.querySelector('.result-box');
const inputBox = document.getElementById('inputbox');
const nutritionalInfoBox = document.querySelector('.nutritional-info');
const searchButton = document.querySelector('.search-button');

let debounceTimer;
inputBox.addEventListener('input', () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
      result = availableKeywords.filter((keyword) => {
        return keyword.toLowerCase().includes(input.toLowerCase());
      });
      console.log(result);
    }
    display(result);

    if (!result.length) {
      resultsBox.innerHTML = '';
    }
  }, 300);
});

function display(result) {
  const content = result.map((keyword) => {
    return `<li data-keyword="${keyword}">${keyword}</li>`;
  });

  resultsBox.innerHTML = `<ul>${content.join('')}</ul>`;
  resultsBox.querySelectorAll('li').forEach((li) => {
    li.addEventListener('click', () => {
      inputBox.value = li.dataset.keyword;
      resultsBox.innerHTML = '';
    });
  });
}

searchButton.addEventListener('click', () => {
  const input = inputBox.value.toLowerCase();
  let info = '';

  switch (input) {
    case 'blackberries':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>43 calories per 100g</p>
          <p>High in vitamins C, K and Fiber</p>
        </div>
      `;
      break;
    case 'raspberries':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>52 calories per 100g</p>
          <p>High in antioxidants</p>
          <p>Vitamin C</p>
        </div>
      `;
      break;
    case 'elderberries':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>73 calories per 100g</p>
          <p>Rich in vitamins A and C</p>
          <p>Immune-supporting</p>
        </div>
      `;
      break;
    case 'rowan berries':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>80 calories per 100g</p>
          <p>High in vitamin C</p>
          <p>Used for jams/jellies</p>
        </div>
      `;
      break;
    case 'bilberries':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>57 calories per 100g</p>
          <p>High in antioxidants</p>
          <p>Support eye health</p>
        </div>
      `;
      break;
    case 'blackthorn fruits':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>83 calories per 100g</p>
          <p>High in vitamin C</p>
          <p>Used for gin/liqueurs</p>
        </div>
      `;
      break;
    case 'crab apples':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>52 calories per 100g</p>
          <p>High in fiber</p>
          <p>Vitamin C</p>
          <p>Used for cooking</p>
        </div>
      `;
      break;
    case 'apples':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>52 calories per 100g</p>
          <p>High in fiber</p>
          <p>Vitamin C</p>
          <p>Antioxidants</p>
        </div>
      `;
      break;
    case 'pears':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>57 calories per 100g</p>
          <p>High in fiber</p>
          <p>Vitamin C</p>
          <p>Hydrating</p>
        </div>
      `;
      break;
    case 'cherries':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>50 calories per 100g</p>
          <p>High in antioxidants</p>
          <p>Melatonin</p>
        </div>
      `;
      break;
    case 'plums':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>46 calories per 100g</p>
          <p>High in vitamins A and C</p>
          <p>Fiber</p>
        </div>
      `;
      break;
    case 'damson':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>46 calories per 100g</p>
          <p>High in vitamins</p>
          <p>Used for jams/preserves</p>
        </div>
      `;
      break;
    case 'bullace':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>46 calories per 100g</p>
          <p>Similar to plums</p>
        </div>
      `;
      break;
    case 'hawthorn berries':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>29 calories per 100g</p>
          <p>High in antioxidants</p>
        </div>
      `;
      break;
    case 'rosehips':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>206 calories per 100g</p>
          <p>Extremely high in vitamin C</p>
        </div>
      `;
      break;
    case 'wild strawberries':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>32 calories per 100g</p>
          <p>High in vitamin C</p>
          <p>Antioxidants</p>
        </div>
      `;
      break;
    case 'broccoli':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>55 calories per 100g</p>
          <p>High in vitamins and minerals</p>
        </div>
      `;
      break;
    case 'chicken breast':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>165 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'salmon':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>206 calories per 100g</p>
          <p>High in omega-3 fatty acids</p>
        </div>
      `;
      break;
    case 'brown rice':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>111 calories per 100g</p>
          <p>High in fiber</p>
        </div>
      `;
      break;
    case 'spinach':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>23 calories per 100g</p>
          <p>High in iron and calcium</p>
        </div>
      `;
      break;
    case 'lentils':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>116 calories per 100g</p>
          <p>High in protein and fiber</p>
        </div>
      `;
      break;
    case 'avocado':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>160 calories per 100g</p>
          <p>High in healthy fats</p>
        </div>
      `;
      break;
    case 'sweet potato':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>86 calories per 100g</p>
          <p>High in vitamins A and C</p>
        </div>
      `;
      break;
    case 'greek yogurt':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>59 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'quinoa':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>120 calories per 100g</p>
          <p>High in protein and fiber</p>
        </div>
      `;
      break;
    case 'almonds':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>579 calories per 100g</p>
          <p>High in healthy fats and fiber</p>
        </div>
      `;
      break;
    case 'oats':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>389 calories per 100g</p>
          <p>High in fiber</p>
        </div>
      `;
      break;
    case 'eggs':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>155 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'kale':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>35 calories per 100g</p>
          <p>High in vitamins A, C, and K</p>
        </div>
      `;
      break;
    case 'turkey breast':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>135 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'black beans':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>132 calories per 100g</p>
          <p>High in protein and fiber</p>
        </div>
      `;
      break;
    case 'peanut butter':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>588 calories per 100g</p>
          <p>High in healthy fats</p>
        </div>
      `;
      break;
    case 'cauliflower':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>25 calories per 100g</p>
          <p>High in fiber and vitamins</p>
        </div>
      `;
      break;
    case 'wild caught tuna':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>144 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'whole wheat bread':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>247 calories per 100g</p>
          <p>High in fiber</p>
        </div>
      `;
      break;
    case 'edamame':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>121 calories per 100g</p>
          <p>High in protein and fiber</p>
        </div>
      `;
      break;
    case 'cottage cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>98 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'chicken thigh':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>209 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'tofu':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>76 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'brussels sprouts':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>43 calories per 100g</p>
          <p>High in vitamins C and K</p>
        </div>
      `;
      break;
    case 'quinoa pasta':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>357 calories per 100g</p>
          <p>High in protein and fiber</p>
        </div>
      `;
      break;
    case 'greek salad':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>117 calories per 100g</p>
          <p>High in healthy fats</p>
        </div>
      `;
      break;
    case 'chicken noodle soup':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>32 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'beef tenderloin':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>250 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'roasted sweet potato':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>86 calories per 100g</p>
          <p>High in vitamins A and C</p>
        </div>
      `;
      break;
    case 'grilled salmon':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>206 calories per 100g</p>
          <p>High in omega-3 fatty acids</p>
        </div>
      `;
      break;
    case 'brown rice sushi':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>111 calories per 100g</p>
          <p>High in fiber</p>
        </div>
      `;
      break;
    case 'baked cod':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>82 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'quinoa stuffed bell pepper':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>120 calories per 100g</p>
          <p>High in protein and fiber</p>
        </div>
      `;
      break;
    case 'roasted brussels sprouts':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>43 calories per 100g</p>
          <p>High in vitamins C and K</p>
        </div>
      `;
      break;
    case 'lentil soup':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>116 calories per 100g</p>
          <p>High in protein and fiber</p>
        </div>
      `;
      break;
    case 'chicken veggie stir fry':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>165 calories per 100g</p>
          <p>High in protein and vitamins</p>
        </div>
      `;
      break;
    case 'baked chicken parmesan':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>189 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'avocado toast':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>160 calories per 100g</p>
          <p>High in healthy fats</p>
        </div>
      `;
      break;
    case 'vegetable pasta':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>157 calories per 100g</p>
          <p>High in vitamins</p>
        </div>
      `;
      break;
    case 'egg white omelette':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>52 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'cucumber salad':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>16 calories per 100g</p>
          <p>High in vitamins and fiber</p>
        </div>
      `;
      break;
    case 'blackened tilapia':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>129 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'chickpea curry':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>164 calories per 100g</p>
          <p>High in protein and fiber</p>
        </div>
      `;
      break;
    case 'soba noodle salad':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>99 calories per 100g</p>
          <p>High in protein and fiber</p>
        </div>
      `;
      break;
    case 'eggplant parmesan':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>188 calories per 100g</p>
          <p>High in vitamins and fiber</p>
        </div>
      `;
      break;
    case 'cauliflower pizza':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>84 calories per 100g</p>
          <p>High in fiber</p>
        </div>
      `;
      break;
    case 'shrimp stir fry':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>95 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'greek chicken souvlaki':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>121 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'turkey chili':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>110 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'spaghetti squash':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>31 calories per 100g</p>
          <p>High in vitamins A and C</p>
        </div>
      `;
      break;
    case 'lentil burger':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>195 calories per 100g</p>
          <p>High in protein and fiber</p>
        </div>
      `;
      break;
    case 'steamed broccoli':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>35 calories per 100g</p>
          <p>High in vitamins C and K</p>
        </div>
      `;
      break;
    case 'zucchini noodles':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>17 calories per 100g</p>
          <p>High in vitamins</p>
        </div>
      `;
      break;
        case 'mushrooms':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>22 calories per 100g</p>
              <p>Low in calories and high in vitamins B, C, and D</p>
            </div>
          `;
          break;
        case 'onions':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>40 calories per 100g</p>
              <p>Rich in vitamin C, fiber, and antioxidants</p>
            </div>
          `;
          break;
        case 'garlic':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>149 calories per 100g</p>
              <p>High in vitamins B and C, and contains sulfur compounds with potential health benefits</p>
            </div>
          `;
          break;
        case 'ginger':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>80 calories per 100g</p>
              <p>Rich in gingerol and contains anti-inflammatory properties</p>
            </div>
          `;
          break;
        case 'turmeric':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>354 calories per 100g</p>
              <p>High in curcumin, a powerful antioxidant with potential health benefits</p>
            </div>
          `;
          break;
        case 'basil':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>22 calories per 100g</p>
              <p>High in vitamins K and A, and contains antioxidant and anti-inflammatory compounds</p>
            </div>
          `;
          break;
        case 'rosemary':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>131 calories per 100g</p>
              <p>Rich in antioxidants and has been shown to improve brain function</p>
            </div>
          `;
          break;
        case 'thyme':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>24 calories per 100g</p>
              <p>High in vitamin C, K, and manganese, and has antimicrobial properties</p>
            </div>
          `;
          break;
        case 'sage':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>30 calories per 100g</p>
              <p>High in vitamins K and A, and contains anti-inflammatory and antioxidant properties</p>
            </div>
          `;
          break;
        case 'oregano':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>43 calories per 100g</p>
              <p>Rich in antioxidants and has been shown to have antimicrobial effects</p>
            </div>
          `;
          break;
        case 'parsley':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>36 calories per 100g</p>
              <p>High in vitamins A, C, and K, and contains beneficial plant compounds</p>
            </div>
          `;
          break;
        case 'cilantro':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>23 calories per 100g</p>
              <p>High in vitamins A, C, and K, and has been shown to have anti-inflammatory effects</p>
            </div>
          `;
          break;
        case 'dill':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>43 calories per 100g</p>
              <p>Rich in vitamins A, C, and K, and contains compounds with potential health benefits</p>
            </div>
          `;
          break;
        case 'fennel':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>31 calories per 100g</p>
              <p>High in fiber, vitamin C, and potassium, and has been shown to have digestive benefits</p>
            </div>
          `;
          break;
        case 'celery':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>16 calories per 100g</p>
              <p>Low in calories and high in vitamins A, C, and K, and contains antioxidant compounds</p>
            </div>
          `;
          break;
        case 'radish':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>16 calories per 100g</p>
              <p>Low in calories and high in vitamin C, fiber, and antioxidants</p>
            </div>
          `;
          break;
        case 'turnip':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>28 calories per 100g</p>
              <p>Low in calories and high in vitamin C, fiber, and antioxidants</p>
            </div>
          `;
          break;
        case 'rutabaga':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>35 calories per 100g</p>
              <p>Low in calories and high in fiber, vitamins C and B6, and minerals</p>
            </div>
          `;
          break;
        case 'eggplant':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>25 calories per 100g</p>
              <p>Low in calories and high in fiber, vitamins, and antioxidants</p>
            </div>
          `;
          break;
        case 'artichoke':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>47 calories per 100g</p>
              <p>Low in calories and high in fiber, vitamin C, and antioxidants</p>
            </div>
          `;
          break;
        case 'chia seeds':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>486 calories per 100g</p>
              <p>High in fiber, protein, omega-3s, and antioxidants</p>
            </div>
          `;
          break;
        case 'flaxseeds':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>534 calories per 100g</p>
              <p>High in fiber, omega-3s, and lignans with potential health benefits</p>
            </div>
          `;
          break;
        case 'hemp seeds':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>573 calories per 100g</p>
              <p>High in protein, fiber, and healthy fats like omega-3s and omega-6s</p>
            </div>
          `;
          break;
          case 'carrots':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>41 calories per 100g</p>
      <p>Rich in beta-carotene and fiber</p>
      <p>Good for eye health</p>
    </div>
  `;
  break;

case 'potatoes':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>77 calories per 100g</p>
      <p>High in potassium and vitamin C</p>
      <p>Energy-boosting</p>
    </div>
  `;
  break;

case 'tomatoes':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>18 calories per 100g</p>
      <p>High in vitamin C and antioxidants</p>
      <p>Heart-healthy</p>
    </div>
  `;
  break;

  case 'bell peppers':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>31 calories per 100g</p>
      <p>Rich in vitamins A and C</p>
      <p>Good for immune health</p>
    </div>
  `;
  break;

case 'cucumber':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>16 calories per 100g</p>
      <p>High in water content</p>
      <p>Hydrating and refreshing</p>
    </div>
  `;
  break;

case 'green beans':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>31 calories per 100g</p>
      <p>High in fiber and vitamins</p>
      <p>Good for digestive health</p>
    </div>
  `;
  break;

case 'asparagus':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>20 calories per 100g</p>
      <p>Rich in vitamins A, C, and K</p>
      <p>Anti-inflammatory properties</p>
    </div>
  `;
  break;

case 'peas':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>81 calories per 100g</p>
      <p>High in protein and fiber</p>
      <p>Supports heart health</p>
    </div>
  `;
  break;

case 'corn':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>86 calories per 100g</p>
      <p>Rich in carbohydrates and fiber</p>
      <p>Energy-boosting</p>
    </div>
  `;
  break;

case 'beets':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>43 calories per 100g</p>
      <p>High in folate and manganese</p>
      <p>Supports blood health</p>
    </div>
  `;
  break;

case 'cabbage':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>25 calories per 100g</p>
      <p>High in vitamins C and K</p>
      <p>Anti-inflammatory properties</p>
    </div>
  `;
  break;

case 'lettuce':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>15 calories per 100g</p>
      <p>High in water and fiber</p>
      <p>Hydrating and low-calorie</p>
    </div>
  `;
  break;

case 'arugula':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>25 calories per 100g</p>
      <p>Rich in vitamins A, C, and K</p>
      <p>Supports bone health</p>
    </div>
  `;
  break;

case 'bok choy':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>13 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Anti-inflammatory properties</p>
    </div>
  `;
  break;

case 'swiss chard':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>19 calories per 100g</p>
      <p>Rich in vitamins A, C, and K</p>
      <p>Supports bone health</p>
    </div>
  `;
  break;

case 'collard greens':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>32 calories per 100g</p>
      <p>High in vitamins A, C, and K</p>
      <p>Supports bone health</p>
    </div>
  `;
  break;

case 'green onions':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>32 calories per 100g</p>
      <p>Rich in vitamins A and C</p>
      <p>Supports immune health</p>
    </div>
  `;
  break;

case 'leeks':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>61 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Supports heart health</p>
    </div>
  `;
  break;

case 'shallots':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>72 calories per 100g</p>
      <p>Rich in vitamins A and C</p>
      <p>Supports immune health</p>
    </div>
  `;
  break;

case 'butternut squash':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>45 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Supports eye health</p>
    </div>
  `;
  break;

case 'acorn squash':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>40 calories per 100g</p>
      <p>Rich in vitamins A and C</p>
      <p>Supports immune health</p>
    </div>
  `;
  break;

case 'spaghetti squash':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>31 calories per 100g</p>
      <p>High in fiber</p>
      <p>Low in calories</p>
    </div>
  `;
  break;

case 'pumpkin':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>26 calories per 100g</p>
      <p>Rich in beta-carotene and fiber</p>
      <p>Supports eye health</p>
    </div>
  `;
  break;

case 'radicchio':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>23 calories per 100g</p>
      <p>Rich in vitamins K and C</p>
      <p>Supports bone health</p>
    </div>
  `;
  break;

case 'watercress':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>11 calories per 100g</p>
      <p>Rich in vitamins A and C</p>
      <p>Anti-inflammatory properties</p>
    </div>
  `;
  break;

case 'endive':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>17 calories per 100g</p>
      <p>High in vitamins A and K</p>
      <p>Supports bone health</p>
    </div>
  `;
  break;

case 'jicama':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>38 calories per 100g</p>
      <p>High in fiber and vitamin C</p>
      <p>Supports digestive health</p>
    </div>
  `;
  break;

case 'okra':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>33 calories per 100g</p>
      <p>Rich in vitamins A and C</p>
      <p>Supports immune health</p>
    </div>
  `;
  break;

case 'celery root (celeriac)':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>42 calories per 100g</p>
      <p>High in fiber and vitamin C</p>
      <p>Supports digestive health</p>
    </div>
  `;
  break;

case 'parsnips':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>75 calories per 100g</p>
      <p>High in fiber and vitamin C</p>
      <p>Supports digestive health</p>
    </div>
  `;
  break;

case 'jerusalem artichokes':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>73 calories per 100g</p>
      <p>High in fiber and iron</p>
      <p>Supports digestive health</p>
    </div>
  `;
  break;

case 'radishes':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>16 calories per 100g</p>
      <p>Rich in vitamin C</p>
      <p>Supports immune health</p>
    </div>
  `;
  break;

case 'turnip greens':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>32 calories per 100g</p>
      <p>High in vitamins A, C, and K</p>
      <p>Supports bone health</p>
    </div>
  `;
  break;

case 'mustard greens':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>27 calories per 100g</p>
      <p>Rich in vitamins A, C, and K</p>
      <p>Supports bone health</p>
    </div>
  `;
  break;

case 'rutabaga':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>38 calories per 100g</p>
      <p>High in fiber and vitamin C</p>
      <p>Supports digestive health</p>
    </div>
  `;
  break;

case 'snow peas':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>42 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Supports immune health</p>
    </div>
  `;
  break;

case 'sugar snap peas':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>42 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Supports immune health</p>
    </div>
  `;
  break;

case 'daikon radish':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>18 calories per 100g</p>
      <p>Rich in vitamin C</p>
      <p>Supports immune health</p>
    </div>
  `;
  break;

case 'water chestnuts':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>97 calories per 100g</p>
      <p>High in fiber</p>
      <p>Supports digestive health</p>
    </div>
  `;
  break;

case 'bamboo shoots':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>27 calories per 100g</p>
      <p>High in fiber and vitamins</p>
      <p>Low in calories</p>
    </div>
  `;
  break;

case 'baby corn':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>26 calories per 100g</p>
      <p>High in fiber and vitamins</p>
      <p>Low in calories</p>
    </div>
  `;
  break;

case 'lotus root':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>74 calories per 100g</p>
      <p>High in fiber and vitamin C</p>
      <p>Supports digestive health</p>
    </div>
  `;
  break;

case 'seaweed':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>45 calories per 100g</p>
      <p>Rich in iodine and vitamins</p>
      <p>Supports thyroid function</p>
    </div>
  `;
  break;

case 'nori':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>35 calories per 100g</p>
      <p>High in iodine and vitamins</p>
      <p>Supports thyroid function</p>
    </div>
  `;
  break;

case 'wakame':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>45 calories per 100g</p>
      <p>Rich in iodine and vitamins</p>
      <p>Supports thyroid function</p>
    </div>
  `;
  break;

case 'kombu':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>43 calories per 100g</p>
      <p>High in iodine and vitamins</p>
      <p>Supports thyroid function</p>
    </div>
  `;
  break;

case 'hijiki':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>50 calories per 100g</p>
      <p>Rich in iodine and vitamins</p>
      <p>Supports thyroid function</p>
    </div>
  `;
  break;

case 'alfalfa sprouts':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>23 calories per 100g</p>
      <p>Rich in vitamins K and C</p>
      <p>Supports bone health</p>
    </div>
  `;
  break;

case 'mung bean sprouts':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>30 calories per 100g</p>
      <p>High in vitamins C and K</p>
      <p>Supports immune health</p>
    </div>
  `;
  break;

case 'soybean sprouts':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>122 calories per 100g</p>
      <p>High in protein and fiber</p>
      <p>Supports digestive health</p>
    </div>
  `;
  break;
    case 'chicken breast':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>165 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'chicken thighs':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>209 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'chicken wings':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>203 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'chicken drumsticks':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>172 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'ground chicken':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>143 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'rotisserie chicken':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>151 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'chicken tenders':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>170 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'chicken liver':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>119 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'chicken gizzards':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>94 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'chicken sausage':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>180 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'turkey breast':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>135 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'ground turkey':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>149 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'turkey legs':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>170 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'turkey wings':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>186 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'turkey sausage':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>196 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'duck breast':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>190 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'duck legs':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>221 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'ground duck':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>220 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'duck confit':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>240 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'duck liver':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>130 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'beef steak':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>271 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'ground beef':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>250 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'beef brisket':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>288 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'beef ribs':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>320 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'beef tenderloin':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>194 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'beef liver':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>135 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'beef tongue':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>284 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'corned beef':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>250 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'roast beef':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>170 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'beef jerky':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>410 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'pork chops':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>231 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'ground pork':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>262 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'pork tenderloin':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>143 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'pork belly':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>518 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'pork ribs':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>294 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'pork shoulder':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>246 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'bacon':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>541 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'ham':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>145 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'prosciutto':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>247 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'pork sausage':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>301 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'lamb chops':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>282 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'ground lamb':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>283 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'lamb shank':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>201 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'lamb shoulder':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>250 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'lamb ribs':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>376 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'lamb liver':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>168 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'veal cutlets':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>160 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'veal chops':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>181 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'ground veal':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>170 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'veal liver':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>140 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;

    case 'mozzarella cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>280 calories per 100g</p>
          <p>High in protein and calcium</p>
          <p>Good for bone health</p>
        </div>
      `;
      break;

    case 'cheddar cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>403 calories per 100g</p>
          <p>Rich in protein and fat</p>
          <p>High in calcium and vitamin K</p>
        </div>
      `;
      break;

    case 'parmesan cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>431 calories per 100g</p>
          <p>High in protein and fat</p>
          <p>Rich in calcium</p>
        </div>
      `;
      break;

    case 'gouda cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>356 calories per 100g</p>
          <p>High in protein and calcium</p>
          <p>Good source of vitamin D</p>
        </div>
      `;
      break;

    case 'feta cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>264 calories per 100g</p>
          <p>Rich in protein and calcium</p>
          <p>Contains probiotics</p>
        </div>
      `;
      break;

    case 'brie cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>334 calories per 100g</p>
          <p>Rich in fat and protein</p>
          <p>Good source of vitamin B12</p>
        </div>
      `;
      break;

    case 'camembert cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>300 calories per 100g</p>
          <p>High in fat and protein</p>
          <p>Rich in calcium</p>
        </div>
      `;
      break;

    case 'goat cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>364 calories per 100g</p>
          <p>High in fat and protein</p>
          <p>Good source of calcium and vitamin A</p>
        </div>
      `;
      break;

    case 'ricotta cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>174 calories per 100g</p>
          <p>High in protein and calcium</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'blue cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>353 calories per 100g</p>
          <p>Rich in protein and fat</p>
          <p>High in calcium</p>
        </div>
      `;
      break;

    case 'paneer':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>265 calories per 100g</p>
          <p>High in protein and fat</p>
          <p>Rich in calcium</p>
        </div>
      `;
      break;

    case 'swiss cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>380 calories per 100g</p>
          <p>Rich in protein and fat</p>
          <p>High in calcium</p>
        </div>
      `;
      break;

    case 'provolone cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>351 calories per 100g</p>
          <p>High in protein and fat</p>
          <p>Rich in calcium</p>
        </div>
      `;
      break;

    case 'halloumi cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>321 calories per 100g</p>
          <p>High in protein and calcium</p>
          <p>Good source of vitamin A</p>
        </div>
      `;
      break;

    case 'havarti cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>371 calories per 100g</p>
          <p>Rich in protein and fat</p>
          <p>High in calcium</p>
        </div>
      `;
      break;

    case 'manchego cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>395 calories per 100g</p>
          <p>High in protein and fat</p>
          <p>Rich in calcium</p>
        </div>
      `;
      break;

    case 'gruyere cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>413 calories per 100g</p>
          <p>Rich in protein and fat</p>
          <p>High in calcium</p>
        </div>
      `;
      break;

    case 'tilapia':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>96 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'haddock':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>90 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'trout':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>141 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in omega-3 fatty acids</p>
        </div>
      `;
      break;

    case 'mackerel':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>205 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in omega-3 fatty acids</p>
        </div>
      `;
      break;

    case 'anchovies':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>131 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in omega-3 fatty acids</p>
        </div>
      `;
      break;

    case 'sardines':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>208 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in omega-3 fatty acids and calcium</p>
        </div>
      `;
      break;

    case 'snapper':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>128 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'halibut':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>111 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'monkfish':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>76 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'swordfish':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>144 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in omega-3 fatty acids</p>
        </div>
      `;
      break;

    case 'mussels':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>86 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in vitamin B12 and iron</p>
        </div>
      `;
      break;

    case 'clams':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>74 calories per 100g</p>
          <p>High in protein</p

>
          <p>Rich in vitamin B12 and iron</p>
        </div>
      `;
      break;

    case 'scallops':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>111 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'oysters':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>68 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in zinc and vitamin B12</p>
        </div>
      `;
      break;

    case 'squid':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>92 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'octopus':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>82 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'crab':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>97 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'lobster':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>89 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'shrimp':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>99 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'crayfish':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>87 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'lamb roast':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>258 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in iron</p>
        </div>
      `;
      break;

    case 'leg of lamb':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>294 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in iron and vitamin B12</p>
        </div>
      `;
      break;

    case 'lamb kebabs':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>220 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in iron and zinc</p>
        </div>
      `;
      break;

    case 'lamb burgers':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>250 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in iron and vitamin B12</p>
        </div>
      `;
      break;

    case 'venison steak':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>158 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'ground venison':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>187 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'venison sausage':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>220 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'bison steak':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>143 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'ground bison':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>124 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'bison burgers':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>204 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'duck breast':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>337 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in iron</p>
        </div>
      `;
      break;

    case 'roasted duck':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>337 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in iron</p>
        </div>
      `;
      break;

    case 'goose breast':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>161 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in iron</p>
        </div>
      `;
      break;

    case 'ground goose':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>185 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in iron</p>
        </div>
      `;
      break;

    case 'quail':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>134 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in iron</p>
        </div>
      `;
      break;

    case 'pheasant':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>133 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in iron</p>
        </div>
      `;
      break;

    case 'rabbit':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>136 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'frog legs':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>73 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'escargot':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>90 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'caviar':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>264 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in omega-3 fatty acids</p>
        </div>
      `;
      break;

    case 'roe':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>143 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in omega-3 fatty acids</p>
        </div>
      `;
      break;

    case 'uni (sea urchin)':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>120 calories per 100g</p>
          <

p>High in protein</p>
          <p>Rich in omega-3 fatty acids</p>
        </div>
      `;
      break;

    case 'conch':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>130 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'abalone':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>105 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'kohlrabi':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>27 calories per 100g</p>
          <p>High in fiber</p>
          <p>Rich in vitamin C</p>
        </div>
      `;
      break;

    case 'fennel bulb':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>31 calories per 100g</p>
          <p>High in fiber</p>
          <p>Rich in vitamin C</p>
        </div>
      `;
      break;

    case 'mizuna':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>21 calories per 100g</p>
          <p>High in vitamins A and C</p>
          <p>Rich in antioxidants</p>
        </div>
      `;
      break;

    case 'tatsoi':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>20 calories per 100g</p>
          <p>High in vitamins A and C</p>
          <p>Rich in antioxidants</p>
        </div>
      `;
      break;

    case 'microgreens':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>29 calories per 100g</p>
          <p>Rich in vitamins C, E, and K</p>
          <p>High in antioxidants</p>
        </div>
      `;
      break;

    case 'morel mushrooms':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>31 calories per 100g</p>
          <p>High in vitamins D and B</p>
          <p>Rich in antioxidants</p>
        </div>
      `;
      break;

    case 'chanterelle mushrooms':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>38 calories per 100g</p>
          <p>High in vitamins D and B</p>
          <p>Rich in antioxidants</p>
        </div>
      `;
      break;

    case 'porcini mushrooms':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>26 calories per 100g</p>
          <p>High in protein and fiber</p>
          <p>Rich in antioxidants</p>
        </div>
      `;
      break;

    case 'truffle':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>284 calories per 100g</p>
          <p>Rich in protein and fiber</p>
          <p>High in vitamins and minerals</p>
        </div>
      `;
      break;

    case 'lobster tail':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>143 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'king crab legs':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>82 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'rock crab':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>84 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

case 'sunchokes':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>73 calories per 100g</p>
      <p>High in fiber</p>
      <p>Rich in iron</p>
    </div>
  `;
  break;

case 'chayote':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>19 calories per 100g</p>
      <p>Low in calories</p>
      <p>High in vitamin C</p>
    </div>
  `;
  break;

case 'salsify':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>82 calories per 100g</p>
      <p>High in fiber</p>
      <p>Rich in potassium</p>
    </div>
  `;
  break;

case 'kale sprouts':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>50 calories per 100g</p>
      <p>High in vitamins A, C, and K</p>
      <p>Rich in antioxidants</p>
    </div>
  `;
  break;

case 'broccolini':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>35 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Rich in fiber</p>
    </div>
  `;
  break;

case 'purple cabbage':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>31 calories per 100g</p>
      <p>High in vitamins C and K</p>
      <p>Rich in antioxidants</p>
    </div>
  `;
  break;

case 'broccoli rabe':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>22 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Rich in fiber</p>
    </div>
  `;
  break;

case 'red leaf lettuce':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>15 calories per 100g</p>
      <p>Low in calories</p>
      <p>Rich in vitamins A and K</p>
    </div>
  `;
  break;

case 'green leaf lettuce':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>15 calories per 100g</p>
      <p>Low in calories</p>
      <p>Rich in vitamins A and K</p>
    </div>
  `;
  break;

case 'butter lettuce':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>13 calories per 100g</p>
      <p>Low in calories</p>
      <p>Rich in vitamins A and K</p>
    </div>
  `;
  break;

case 'salad greens':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>20 calories per 100g</p>
      <p>Low in calories</p>
      <p>Rich in vitamins A and C</p>
    </div>
  `;
  break;

case 'mizuna greens':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>21 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Rich in antioxidants</p>
    </div>
  `;
  break;

case 'tatsoi greens':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>20 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Rich in antioxidants</p>
    </div>
  `;
  break;

case 'collard greens':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>32 calories per 100g</p>
      <p>High in vitamins A, C, and K</p>
      <p>Rich in calcium</p>
    </div>
  `;
  break;

case 'mustard greens':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>27 calories per 100g</p>
      <p>High in vitamins A, C, and K</p>
      <p>Rich in antioxidants</p>
    </div>
  `;
  break;

case 'beet greens':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>22 calories per 100g</p>
      <p>High in vitamins A and K</p>
      <p>Rich in iron</p>
    </div>
  `;
  break;

case 'turnip greens':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>32 calories per 100g</p>
      <p>High in vitamins A, C, and K</p>
      <p>Rich in calcium</p>
    </div>
  `;
  break;

case 'pea shoots':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>35 calories per 100g</p>
      <p>High in vitamins A, C, and K</p>
      <p>Rich in folate</p>
    </div>
  `;
  break;

case 'basil sprouts':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>23 calories per 100g</p>
      <p>Rich in vitamins A and K</p>
      <p>Contains antioxidants</p>
    </div>
  `;
  break;

case 'cilantro sprouts':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>23 calories per 100g</p>
      <p>High in vitamins A and K</p>
      <p>Rich in antioxidants</p>
    </div>
  `;
  break;

case 'daikon sprouts':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>23 calories per 100g</p>
      <p>Rich in vitamins A and C</p>
      <p>Contains antioxidants</p>
    </div>
  `;
  break;

case 'wasabi root':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>109 calories per 100g</p>
      <p>High in fiber</p>
      <p>Rich in vitamin C</p>
    </div>
  `;
  break;

case 'horseradish':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>48 calories per 100g</p>
      <p>High in vitamin C</p>
      <p>Contains antioxidants</p>
    </div>
  `;
  break;

case 'borage':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>21 calories per 100g</p>
      <p>Rich in vitamins A and C</p>
      <p>Contains antioxidants</p>
    </div>
  `;
  break;

case 'purslane':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>16 calories per 100g</p>
      <p>High in omega-3 fatty acids</p>
      <p>Rich in vitamins A and C</p>
    </div>
  `;
  break;

case 'malabar spinach':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>19 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Rich in calcium</p>
    </div>
  `;
  break;

case 'amaranth leaves':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>23 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Rich in calcium</p>
    </div>
  `;
  break;

case 'carrot greens':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>33 calories per 100g</p>
      <p>High in vitamins A and K</p>
      <p>Rich in antioxidants</p>
    </div>
  `;
  break;

case 'fenugreek leaves':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>49 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Rich in iron</p>
    </div>
  `;
  break;

case 'lemon balm':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>44 calories per 100g</p>
      <p>High in vitamin C</p>
      <p>Contains antioxidants</p>
    </div>
  `;
  break;

case 'sorrel':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>22 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Rich in antioxidants</p>
    </div>
  `;
  break;

case 'sculpit':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>25 calories per 100g</p>
      <p>Rich in vitamins A and C</p>
      <p>Contains antioxidants</p>
    </div>
  `;
  break;

case 'sea kale':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>45 calories per 100g</p>
      <p>Rich in vitamins A and C</p>
      <p>Contains antioxidants</p>
    </div>
  `;
  break;

case 'glasswort':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>50 calories per 100g</p>
      <p>Rich in vitamins A and C</p>
      <p>Contains antioxidants</p>
    </div>
  `;
  break;

case 'samphire':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>34 calories per 100g</p>
      <p>High in vitamin C</p>
      <p>Contains antioxidants</p>
    </div>
  `;
  break;

case 'salicornia':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>22 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Contains antioxidants</p>
    </div>
  `;
  break;

case 'sea beans':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>30 calories per 100g</p>
      <p>High in vitamin C</p>
      <p>Rich in iodine</p>
    </div>
  `;
  break;

case 'red dulse':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>75 calories per 100g</p>
      <p>High in vitamins A and B12</p>
      <p>Rich in iodine</p>
    </div>
  `;
  break;

case 'irish moss':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>49 calories per 100g</p>
      <p>High in iodine</p>
      <p>Rich in fiber</p>
    </div>
  `;
  break;

case 'spotted tripe':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>97 calories per 100g</p>
      <p>High in protein</p>
      <p>Rich in vitamin B12</p>
    </div>
  `;
  break;

case 'sheep sorrel':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>22 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Contains antioxidants</p>
    </div>
  `;
  break;

case 'wood sorrel':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>28 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Contains antioxidants</p>
    </div>
  `;
  break;

case 'curly endive':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>17 calories per 100g</p>
      <p>High in vitamins A and K</p>
      <p>Rich in fiber</p>
    </div>
  `;
  break;

case 'broad beans':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>88 calories per 100g</p>
      <p>High in protein</p>
      <p>Rich in fiber</p>
    </div>
  `;
  break;

case 'purple cauliflower':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>25 calories per 100g</p>
      <p>High in vitamins C and K</p>
      <p>Rich in antioxidants</p>
    </div>
  `;
  break;

case 'romanesco':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>25 calories per 100g</p>
      <p>High in vitamin C</p>
      <p>Rich in fiber</p>
    </div>
  `;
  break;

case 'sunflower greens':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>27 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Rich in antioxidants</p>
    </div>
  `;
  break;

case 'pea greens':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>35 calories per 100g</p>
      <p>High in vitamins A, C, and K</p>
      <p>Rich in folate</p>
    </div>
  `;
  break;

case 'radish greens':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>24 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Rich in antioxidants</p>
    </div>
  `;
  break;
  case 'banana':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>89 calories per 100g</p>
         <p>High in potassium</p>
         <p>Vitamin B6</p>
         <p>Vitamin C</p>
      </div>
   `;
   break;

case 'pineapple':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>50 calories per 100g</p>
         <p>High in vitamin C</p>
         <p>Manganese</p>
         <p>Dietary fiber</p>
      </div>
   `;
   break;

case 'watermelon':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>30 calories per 100g</p>
         <p>High in water content</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
      </div>
   `;
   break;

case 'kiwi':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>61 calories per 100g</p>
         <p>High in vitamin C</p>
         <p>Dietary fiber</p>
         <p>Vitamin K</p>
      </div>
   `;
   break;

case 'mango':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>60 calories per 100g</p>
         <p>High in vitamin C</p>
         <p>Vitamin A</p>
         <p>Dietary fiber</p>
      </div>
   `;
   break;

case 'papaya':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>43 calories per 100g</p>
         <p>High in vitamin C</p>
         <p>Vitamin A</p>
         <p>Folate</p>
      </div>
   `;
   break;

case 'grapes':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>69 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
         <p>Antioxidants</p>
      </div>
   `;
   break;

case 'figs':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>74 calories per 100g</p>
         <p>Dietary fiber</p>
         <p>Calcium</p>
         <p>Antioxidants</p>
      </div>
   `;
   break;

case 'dates':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>277 calories per 100g</p>
         <p>High in fiber</p>
         <p>Potassium</p>
         <p>Magnesium</p>
      </div>
   `;
   break;

case 'prunes':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>240 calories per 100g</p>
         <p>High in fiber</p>
         <p>Vitamin K</p>
         <p>Potassium</p>
      </div>
   `;
   break;

case 'cantaloupe':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>34 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Hydrating</p>
      </div>
   `;
   break;

case 'honeydew melon':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>36 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin B6</p>
         <p>Potassium</p>
      </div>
   `;
   break;

case 'peach':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>39 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Dietary fiber</p>
      </div>
   `;
   break;

case 'nectarine':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>44 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Potassium</p>
      </div>
   `;
   break;

case 'apricot':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>48 calories per 100g</p>
         <p>Vitamin A</p>
         <p>Vitamin C</p>
         <p>Potassium</p>
      </div>
   `;
   break;

case 'guava':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>68 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Dietary fiber</p>
         <p>Folate</p>
      </div>
   `;
   break;

case 'pomegranate':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>83 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
         <p>Antioxidants</p>
      </div>
   `;
   break;

case 'passion fruit':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>97 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Dietary fiber</p>
         <p>Vitamin A</p>
      </div>
   `;
   break;

case 'starfruit':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>31 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Dietary fiber</p>
         <p>Antioxidants</p>
      </div>
   `;
   break;

case 'dragon fruit':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>50 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Antioxidants</p>
         <p>Dietary fiber</p>
      </div>
   `;
   break;

case 'lychee':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>66 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin B6</p>
         <p>Niacin</p>
      </div>
   `;
   break;

case 'jackfruit':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>95 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Dietary fiber</p>
         <p>Vitamin A</p>
      </div>
   `;
   break;

case 'durian':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>147 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Potassium</p>
         <p>Dietary fiber</p>
      </div>
   `;
   break;

case 'coconut':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>354 calories per 100g</p>
         <p>High in fiber</p>
         <p>Iron</p>
         <p>Potassium</p>
      </div>
   `;
   break;

case 'orange':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>47 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Folate</p>
         <p>Dietary fiber</p>
      </div>
   `;
   break;

case 'lemon':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>29 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Potassium</p>
         <p>Dietary fiber</p>
      </div>
   `;
   break;

case 'lime':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>30 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Dietary fiber</p>
         <p>Antioxidants</p>
      </div>
   `;
   break;

case 'grapefruit':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>42 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Potassium</p>
      </div>
   `;
   break;

case 'tangerine':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>53 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Folate</p>
      </div>
   `;
   break;

case 'mandarin':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>53 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Potassium</p>
      </div>
   `;
   break;

case 'satsuma':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>53 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Potassium</p>
      </div>
   `;
   break;

case 'clementine':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>47 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Dietary fiber</p>
      </div>
   `;
   break;

case 'tomato':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>18 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
         <p>Antioxidants</p>
      </div>
   `;
   break;

case 'cucumber':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>16 calories per 100g</p>
         <p>Hydrating</p>
         <p>Vitamin K</p>
         <p>Potassium</p>
      </div>
   `;
   break;

case 'carrot':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>41 calories per 100g</p>
         <p>Vitamin A</p>
         <p>Beta-carotene</p>
         <p>Vitamin K</p>
      </div>
   `;
   break;

case 'potato':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>77 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Potassium</p>
         <p>Vitamin B6</p>
      </div>
   `;
   break;

case 'beetroot':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>43 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Folate</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'sweet corn':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>86 calories per 100g</p>
         <p>Fiber</p>
         <p>Vitamin B5</p>
         <p>Vitamin C</p>
      </div>
   `;
   break;

case 'green beans':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>31 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'sugar snap peas':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>42 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'peas':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>81 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'red bell pepper':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>31 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'yellow bell pepper':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>27 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'green bell pepper':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>20 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'pumpkin':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>26 calories per 100g</p>
         <p>Vitamin A</p>
         <p>Vitamin C</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'squash':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>45 calories per 100g</p>
         <p>Vitamin A</p>
         <p>Vitamin C</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'zucchini':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>17 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'cabbage':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>25 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'lettuce':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>15 calories per 100g</p>
         <p>Vitamin A</p>
         <p>Vitamin K</p>
         <p>Folate</p>
      </div>
   `;
   break;

case 'arugula':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>25 calories per 100g</p>
         <p>Vitamin A</p>
         <p>Vitamin K</p>
         <p>Folate</p>
      </div>
   `;
   break;

case 'watercress':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>11 calories per 100g</p>
         <p>Vitamin A</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
      </div>
   `;
   break;

case 'endive':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>17 calories per 100g</p>
         <p>Vitamin A</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
      </div>
   `;
   break;

case 'collard greens':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>32 calories per 100g</p>
         <p>Vitamin A</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
      </div>
   `;
   break;

case 'mustard greens':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>27 calories per 100g</p>
         <p>Vitamin A</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
      </div>
   `;
   break;

case 'tatsoi':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>25 calories per 100g</p>
         <p>Vitamin A</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
      </div>
   `;
   break;

case 'bok choy':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>13 calories per 100g</p>
         <p>Vitamin A</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
      </div>
   `;
   break;

case 'swiss chard':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>19 calories per 100g</p>
         <p>Vitamin A</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
      </div>
   `;
   break;

case 'leeks':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>61 calories per 100g</p>
         <p>Vitamin K</p>
         <p>Vitamin A</p>
         <p>Vitamin C</p>
      </div>
   `;
   break;

case 'parsnips':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>75 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'artichoke hearts':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>47 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'okra':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>33 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'jalapeno':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>29 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin B6</p>
         <p>Vitamin A</p>
      </div>
   `;
   break;

case 'habanero':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>40 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'serrano pepper':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>32 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'chipotle':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>282 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'paprika':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>282 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'cayenne pepper':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>318 calories per 100g</p>
         <p>Vitamin A</p>
         <p>Vitamin C</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'black pepper':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>251 calories per 100g</p>
         <p>Vitamin K</p>
         <p>Iron</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'white pepper':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>296 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Iron</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'cardamom':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>311 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Iron</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'clove':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>274 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Iron</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'cinnamon':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>247 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Iron</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'nutmeg':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>525 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Iron</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'allspice':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>263 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Iron</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'anise':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>337 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Iron</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'vanilla bean':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>288 calories per 100g</p>
         <p>Vitamin B2</p>
         <p>Calcium</p>
         <p>Magnesium</p>
      </div>
   `;
   break;

case 'saffron':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>310 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Iron</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'bay leaf':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>313 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Iron</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'lemongrass':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>99 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Iron</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'galangal':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>71 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Iron</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'shallots':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>72 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin B6</p>
         <p>Folate</p>
      </div>
   `;
   break;

case 'scallions':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>32 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'horseradish':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>48 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Fiber</p>
         <p>Folate</p>
      </div>
   `;
   break;

case 'wasabi':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>109 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Fiber</p>
         <p>Folate</p>
      </div>
   `;
   break;

case 'ginger':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>80 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Magnesium</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'turmeric':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>312 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Iron</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'potato chips':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>536 calories per 100g</p>
          <p>High in Fat and Sodium</p>
        </div>
    `;
    break;

case 'fried chicken (KFC)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>246 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'beef hamburger':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>254 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'cheeseburger (McDonald\'s)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>263 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'hot dog (Nathan\'s Famous)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>242 calories per 100g</p>
          <p>High in Protein and Sodium</p>
        </div>
    `;
    break;

case 'spaghetti bolognese':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>150 calories per 100g</p>
          <p>High in Protein and Carbohydrates</p>
        </div>
    `;
    break;

case 'lasagna':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>135 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'ravioli':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>220 calories per 100g</p>
          <p>High in Protein and Carbohydrates</p>
        </div>
    `;
    break;

case 'fettuccine alfredo':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>140 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'macaroni and cheese':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>164 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'pepperoni pizza':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>298 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'tacos (beef)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>226 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'burritos (chicken)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>206 calories per 100g</p>
          <p>High in Protein and Carbohydrates</p>
        </div>
    `;
    break;

case 'quesadillas (cheese)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>303 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'nachos (beef)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>336 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'enchiladas (chicken)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>220 calories per 100g</p>
          <p>High in Protein and Carbohydrates</p>
        </div>
    `;
    break;

case 'fajitas (steak)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>225 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'tamales (pork)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>285 calories per 100g</p>
          <p>High in Protein and Carbohydrates</p>
        </div>
    `;
    break;

case 'salmon sushi':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>143 calories per 100g</p>
          <p>High in Protein and Omega-3</p>
        </div>
    `;
    break;

case 'sashimi (tuna)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>144 calories per 100g</p>
          <p>High in Protein and Omega-3</p>
        </div>
    `;
    break;

case 'ramen (tonkotsu)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>436 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'udon (tempura)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>270 calories per 100g</p>
          <p>High in Carbohydrates and Fat</p>
        </div>
    `;
    break;

case 'tempura shrimp':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>175 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'teriyaki chicken':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>159 calories per 100g</p>
          <p>High in Protein</p>
        </div>
    `;
    break;

case 'gyoza (pork)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>195 calories per 100g</p>
          <p>High in Protein and Carbohydrates</p>
        </div>
    `;
    break;

case 'katsu (chicken)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>243 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'pho (beef)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>162 calories per 100g</p>
          <p>High in Protein and Carbohydrates</p>
        </div>
    `;
    break;

case 'banh mi (pork)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>243 calories per 100g</p>
          <p>High in Protein and Carbohydrates</p>
        </div>
    `;
    break;

case 'spring rolls (vegetable)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>90 calories per 100g</p>
          <p>High in Carbohydrates</p>
        </div>
    `;
    break;

case 'dumplings (pork)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>181 calories per 100g</p>
          <p>High in Protein and Carbohydrates</p>
        </div>
    `;
    break;

case 'baozi (pork)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>234 calories per 100g</p>
          <p>High in Protein and Carbohydrates</p>
        </div>
    `;
    break;

case 'pad thai (shrimp)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>189 calories per 100g</p>
          <p>High in Protein and Carbohydrates</p>
        </div>
    `;
    break;

case 'green curry (chicken)':
    info = `
        <div class="info">
          <p

>Nutrition</p>
          <p>191 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'red curry (beef)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>214 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'massaman curry (chicken)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>195 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'panang curry (shrimp)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>210 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'dim sum':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>121 calories per 100g</p>
          <p>High in Protein and Carbohydrates</p>
        </div>
    `;
    break;

case 'congee':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>48 calories per 100g</p>
          <p>High in Carbohydrates</p>
        </div>
    `;
    break;

case 'chicken satay':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>191 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'bibimbap':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>117 calories per 100g</p>
          <p>High in Protein and Carbohydrates</p>
        </div>
    `;
    break;

case 'kimchi fried rice':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>145 calories per 100g</p>
          <p>High in Carbohydrates</p>
        </div>
    `;
    break;

case 'chicken biryani':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>177 calories per 100g</p>
          <p>High in Protein and Carbohydrates</p>
        </div>
    `;
    break;

case 'tandoori chicken':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>154 calories per 100g</p>
          <p>High in Protein</p>
        </div>
    `;
    break;

case 'garlic naan':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>304 calories per 100g</p>
          <p>High in Carbohydrates</p>
        </div>
    `;
    break;

case 'samosa (potato)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>262 calories per 100g</p>
          <p>High in Carbohydrates and Fat</p>
        </div>
    `;
    break;

case 'paneer tikka':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>200 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'butter chicken':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>238 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'vindaloo (beef)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>168 calories per 100g</p>
          <p>High in Protein and Carbohydrates</p>
        </div>
    `;
    break;

case 'pav bhaji':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>186 calories per 100g</p>
          <p>High in Carbohydrates and Fat</p>
        </div>
    `;
    break;

case 'chole bhature':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>282 calories per 100g</p>
          <p>High in Protein and Carbohydrates</p>
        </div>
    `;
    break;

case 'masala dosa':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>121 calories per 100g</p>
          <p>High in Carbohydrates</p>
        </div>
    `;
    break;

case 'idli':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>132 calories per 100g</p>
          <p>High in Carbohydrates</p>
        </div>
    `;
    break;

case 'pani puri':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>174 calories per 100g</p>
          <p>High in Carbohydrates</p>
        </div>
    `;
    break;

case 'bhel puri':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>210 calories per 100g</p>
          <p>High in Carbohydrates</p>
        </div>
    `;
    break;

case 'sev puri':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>243 calories per 100g</p>
          <p>High in Carbohydrates and Fat</p>
        </div>
    `;
    break;

case 'chicken tikka masala':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>167 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'rogan josh':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>210 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'prawn curry':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>132 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'fish curry':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>133 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'lamb shish kebab':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>223 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'falafel':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>333 calories per 100g</p>
          <p>High in Protein and Fiber</p>
        </div>
    `;
    break;

case 'hummus':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>166 calories per 100g</p>
          <p>High in Protein and Fiber</p>
        </div>
    `;
    break;

case 'baba ganoush':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>72 calories per 100g</p>
          <p>High in Fiber</p>
        </div>
    `;
    break;

case 'tabbouleh':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>177 calories per 100g</p>
          <p>High in Fiber and Vitamins</p>
        </div>
    `;
    break;

case 'baklava':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>450 calories per 100g</p>
          <p>High in Sugar and Fat</p>
        </div>
    `;
    break;

case 'chicken shawarma':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>219 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'gyros (lamb)':
    info = `
        <div class

="info">
          <p>Nutrition</p>
          <p>217 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'souvlaki (pork)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>230 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'moussaka':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>124 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'tzatziki':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>60 calories per 100g</p>
          <p>High in Protein</p>
        </div>
    `;
    break;

case 'spanakopita':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>261 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'dolma':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>152 calories per 100g</p>
          <p>High in Carbohydrates and Fiber</p>
        </div>
    `;
    break;

case 'hummus with pita':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>276 calories per 100g</p>
          <p>High in Protein and Fiber</p>
        </div>
    `;
    break;

case 'kebab (chicken)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>151 calories per 100g</p>
          <p>High in Protein</p>
        </div>
    `;
    break;

case 'bratwurst':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>333 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'sauerkraut':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>19 calories per 100g</p>
          <p>High in Fiber and Vitamins</p>
        </div>
    `;
    break;

case 'pretzel':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>380 calories per 100g</p>
          <p>High in Carbohydrates</p>
        </div>
    `;
    break;

case 'apple strudel':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>278 calories per 100g</p>
          <p>High in Carbohydrates and Sugar</p>
        </div>
    `;
    break;

case 'schnitzel (pork)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>242 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'currywurst':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>269 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'potato salad':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>143 calories per 100g</p>
          <p>High in Carbohydrates</p>
        </div>
    `;
    break;

case 'beef stroganoff':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>151 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'borscht':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>43 calories per 100g</p>
          <p>High in Fiber and Vitamins</p>
        </div>
    `;
    break;

case 'pierogi (potato)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>155 calories per 100g</p>
          <p>High in Carbohydrates</p>
        </div>
    `;
    break;

case 'gulash (beef)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>101 calories per 100g</p>
          <p>High in Protein and Carbohydrates</p>
        </div>
    `;
    break;

case 'bigos':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>80 calories per 100g</p>
          <p>High in Protein and Fiber</p>
        </div>
    `;
    break;

case 'caviar':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>264 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'poutine':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>168 calories per 100g</p>
          <p>High in Carbohydrates and Fat</p>
        </div>
    `;
    break;

case 'maple syrup':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>260 calories per 100g</p>
          <p>High in Carbohydrates and Sugar</p>
        </div>
    `;
    break;

case 'butter tarts':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>406 calories per 100g</p>
          <p>High in Carbohydrates and Fat</p>
        </div>
    `;
    break;

case 'nanaimo bars':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>467 calories per 100g</p>
          <p>High in Carbohydrates and Fat</p>
        </div>
    `;
    break;

case 'clam chowder':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>54 calories per 100g</p>
          <p>High in Protein and Carbohydrates</p>
        </div>
    `;
    break;

case 'lobster roll':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>211 calories per 100g</p>
          <p>High in Protein and Carbohydrates</p>
        </div>
    `;
    break;

case 'philly cheesesteak':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>200 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'buffalo wings':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>290 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'coleslaw':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>152 calories per 100g</p>
          <p>High in Carbohydrates and Fat</p>
        </div>
    `;
    break;

case 'cornbread':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>184 calories per 100g</p>
          <p>High in Carbohydrates and Fat</p>
        </div>
    `;
    break;

case 'corn dog':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>280 calories per 100g</p>
          <p>High in Carbohydrates and Fat</p>
        </div>
    `;
    break;

case 'french fries':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>312 calories per 100g</p>
          <p>High in Carbohydrates and Fat</p>
        </div>
    `;
    break;

case 'fried shrimp':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>277 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'hash browns':
    info = `
        <div class

="info">
          <p>Nutrition</p>
          <p>326 calories per 100g</p>
          <p>High in Carbohydrates and Fat</p>
        </div>
    `;
    break;

case 'onion rings':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>411 calories per 100g</p>
          <p>High in Carbohydrates and Fat</p>
        </div>
    `;
    break;

case 'popcorn':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>375 calories per 100g</p>
          <p>High in Carbohydrates and Fiber</p>
        </div>
    `;
    break;

case 'potato chips':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>536 calories per 100g</p>
          <p>High in Carbohydrates and Fat</p>
        </div>
    `;
    break;

case 's\'more':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>327 calories per 100g</p>
          <p>High in Carbohydrates and Sugar</p>
        </div>
    `;
    break;

case 'hot dog':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>289 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'taco (beef)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>226 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'burrito (chicken)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>206 calories per 100g</p>
          <p>High in Protein and Carbohydrates</p>
        </div>
    `;
    break;

case 'enchilada (cheese)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>193 calories per 100g</p>
          <p>High in Protein and Carbohydrates</p>
        </div>
    `;
    break;

case 'quesadilla (chicken)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>221 calories per 100g</p>
          <p>High in Protein and Carbohydrates</p>
        </div>
    `;
    break;

case 'tamale (pork)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>179 calories per 100g</p>
          <p>High in Protein and Carbohydrates</p>
        </div>
    `;
    break;

case 'guacamole':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>146 calories per 100g</p>
          <p>High in Fiber and Vitamins</p>
        </div>
    `;
    break;

case 'salsa':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>36 calories per 100g</p>
          <p>High in Vitamins and Fiber</p>
        </div>
    `;
    break;

case 'chili con carne':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>112 calories per 100g</p>
          <p>High in Protein and Carbohydrates</p>
        </div>
    `;
    break;

case 'fajita (chicken)':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>115 calories per 100g</p>
          <p>High in Protein and Carbohydrates</p>
        </div>
    `;
    break;

case 'mole poblano':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>142 calories per 100g</p>
          <p>High in Carbohydrates and Protein</p>
        </div>
    `;
    break;

case 'pozole':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>110 calories per 100g</p>
          <p>High in Protein and Carbohydrates</p>
        </div>
    `;
    break;

case 'ceviche':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>89 calories per 100g</p>
          <p>High in Protein and Vitamins</p>
        </div>
    `;
    break;

case 'elote':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>97 calories per 100g</p>
          <p>High in Carbohydrates and Fiber</p>
        </div>
    `;
    break;

case 'bandeja paisa':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>150 calories per 100g</p>
          <p>High in Protein and Carbohydrates</p>
        </div>
    `;
    break;

case 'arepa':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>150 calories per 100g</p>
          <p>High in Carbohydrates and Protein</p>
        </div>
    `;
    break;

case 'empanada':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>250 calories per 100g</p>
          <p>High in Carbohydrates and Fat</p>
        </div>
    `;
    break;

case 'feijoada':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>129 calories per 100g</p>
          <p>High in Protein and Carbohydrates</p>
        </div>
    `;
    break;

case 'moqueca':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>112 calories per 100g</p>
          <p>High in Protein and Vitamins</p>
        </div>
    `;
    break;

case 'paella':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>158 calories per 100g</p>
          <p>High in Protein and Carbohydrates</p>
        </div>
    `;
    break;

case 'patatas bravas':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>180 calories per 100g</p>
          <p>High in Carbohydrates and Fat</p>
        </div>
    `;
    break;

case 'gazpacho':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>48 calories per 100g</p>
          <p>High in Vitamins and Fiber</p>
        </div>
    `;
    break;

case 'churros':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>339 calories per 100g</p>
          <p>High in Carbohydrates and Sugar</p>
        </div>
    `;
    break;

case 'croissant':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>406 calories per 100g</p>
          <p>High in Carbohydrates and Fat</p>
        </div>
    `;
    break;

case 'baguette':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>274 calories per 100g</p>
          <p>High in Carbohydrates</p>
        </div>
    `;
    break;

case 'ratatouille':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>54 calories per 100g</p>
          <p>High in Fiber and Vitamins</p>
        </div>
    `;
    break;

case 'quiche lorraine':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>289 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'crepes':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>146 calories per 100g</p>
          <p>High in Carbohydrates</p>
        </div>
    `;
    break;

case 'beef bourguignon':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>134 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div

>
    `;
    break;

case 'escargot':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>90 calories per 100g</p>
          <p>High in Protein and Iron</p>
        </div>
    `;
    break;

case 'foie gras':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>462 calories per 100g</p>
          <p>High in Protein and Fat</p>
        </div>
    `;
    break;

case 'tarte tatin':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>237 calories per 100g</p>
          <p>High in Carbohydrates and Sugar</p>
        </div>
    `;
    break;

case 'cappuccino':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>45 calories per 100g</p>
          <p>High in Protein</p>
        </div>
    `;
    break;

case 'latte':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>54 calories per 100g</p>
          <p>High in Protein and Carbohydrates</p>
        </div>
    `;
    break;

case 'americano':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>2 calories per 100g</p>
          <p>Low in Calories</p>
        </div>
    `;
    break;

case 'espresso':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>9 calories per 100g</p>
          <p>Low in Calories</p>
        </div>
    `;
    break;

case 'mocha':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>73 calories per 100g</p>
          <p>High in Carbohydrates</p>
        </div>
    `;
    break;

case 'macchiato':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>13 calories per 100g</p>
          <p>Low in Calories</p>
        </div>
    `;
    break;

case 'tea':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>1 calorie per 100g</p>
          <p>Low in Calories</p>
        </div>
    `;
    break;

case 'chai':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>120 calories per 100g</p>
          <p>High in Carbohydrates and Sugar</p>
        </div>
    `;
    break;

case 'matcha':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>3 calories per 100g</p>
          <p>Low in Calories</p>
        </div>
    `;
    break;

case 'green tea':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>0 calories per 100g</p>
          <p>Low in Calories</p>
        </div>
    `;
    break;

case 'black tea':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>2 calories per 100g</p>
          <p>Low in Calories</p>
        </div>
    `;
    break;

case 'herbal tea':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>0 calories per 100g</p>
          <p>Low in Calories</p>
        </div>
    `;
    break;

case 'milk tea':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>54 calories per 100g</p>
          <p>High in Carbohydrates</p>
        </div>
    `;
    break;

case 'lemonade':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>40 calories per 100g</p>
          <p>High in Sugar</p>
        </div>
    `;
    break;

case 'orange juice':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>45 calories per 100g</p>
          <p>High in Vitamins and Sugar</p>
        </div>
    `;
    break;

case 'smoothie':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>60 calories per 100g</p>
          <p>High in Vitamins and Carbohydrates</p>
        </div>
    `;
    break;

case 'milkshake':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>122 calories per 100g</p>
          <p>High in Carbohydrates and Fat</p>
        </div>
    `;
    break;

case 'iced coffee':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>6 calories per 100g</p>
          <p>Low in Calories</p>
        </div>
    `;
    break;

case 'iced tea':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>2 calories per 100g</p>
          <p>Low in Calories</p>
        </div>
    `;
    break;

case 'soda':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>41 calories per 100g</p>
          <p>High in Sugar</p>
        </div>
    `;
    break;

case 'root beer':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>42 calories per 100g</p>
          <p>High in Sugar</p>
        </div>
    `;
    break;

case 'ginger ale':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>34 calories per 100g</p>
          <p>High in Sugar</p>
        </div>
    `;
    break;

case 'kombucha':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>25 calories per 100g</p>
          <p>High in Probiotics and Low in Calories</p>
        </div>
    `;
    break;

case 'beer':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>43 calories per 100g</p>
          <p>High in Carbohydrates</p>
        </div>
    `;
    break;

case 'wine':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>83 calories per 100g</p>
          <p>High in Carbohydrates</p>
        </div>
    `;
    break;

case 'champagne':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>65 calories per 100g</p>
          <p>High in Carbohydrates</p>
        </div>
    `;
    break;

case 'vodka':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>231 calories per 100g</p>
          <p>High in Alcohol</p>
        </div>
    `;
    break;

case 'whiskey':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>250 calories per 100g</p>
          <p>High in Alcohol</p>
        </div>
    `;
    break;

case 'rum':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>231 calories per 100g</p>
          <p>High in Alcohol</p>
        </div>
    `;
    break;

case 'tequila':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>231 calories per 100g</p>
          <p>High in Alcohol</p>
        </div>
    `;
    break;

case 'gin':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>231 calories per 100g</p>
          <p>High in Alcohol</p>
        </div>
    `;
    break;

case 'brandy':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>231 calories per 100g</p>
          <p>High in Alcohol</p>
        </div>
    `;
    break;

case 'margarita':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>163 calories per 100g</p>
         

 <p>High in Carbohydrates</p>
        </div>
    `;
    break;

case 'martini':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>160 calories per 100g</p>
          <p>High in Alcohol</p>
        </div>
    `;
    break;

case 'mojito':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>71 calories per 100g</p>
          <p>High in Carbohydrates</p>
        </div>
    `;
    break;

case 'cosmopolitan':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>105 calories per 100g</p>
          <p>High in Carbohydrates</p>
        </div>
    `;
    break;

case 'pina colada':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>174 calories per 100g</p>
          <p>High in Carbohydrates</p>
        </div>
    `;
    break;

case 'bloody mary':
    info = `
        <div class="info">
          <p>Nutrition</p>
          <p>40 calories per 100g</p>
          <p>High in Vitamins</p>
        </div>
    `;
    break;
    case 'falafel':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>333 calories per 100g</p>
            <p>High in Fiber, Protein, and Vitamins</p>
        </div>
    `;
    break;
case 'shawarma':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>250 calories per serving</p>
            <p>Rich in Protein and Iron</p>
        </div>
    `;
    break;
case 'gyros':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>240 calories per 100g</p>
            <p>Good source of Protein and Carbohydrates</p>
        </div>
    `;
    break;
case 'souvlaki':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>150 calories per skewer</p>
            <p>High in Protein and Low in Fat</p>
        </div>
    `;
    break;
case 'baba ganoush':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>150 calories per 100g</p>
            <p>High in Fiber and Vitamins</p>
        </div>
    `;
    break;
case 'hummus':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>166 calories per 100g</p>
            <p>Rich in Protein, Fiber, and Vitamins</p>
        </div>
    `;
    break;
case 'tabbouleh':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>120 calories per cup</p>
            <p>High in Fiber and Vitamins A, C, and K</p>
        </div>
    `;
    break;
case 'fattoush':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>150 calories per serving</p>
            <p>Rich in Fiber, Vitamins A, C, and K</p>
        </div>
    `;
    break;
case 'manakish':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>200 calories per piece</p>
            <p>Good source of Carbohydrates and Protein</p>
        </div>
    `;
    break;
case 'labneh':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>105 calories per 100g</p>
            <p>High in Protein and Probiotics</p>
        </div>
    `;
    break;
case 'kibbeh':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>160 calories per 100g</p>
            <p>Rich in Protein and Fiber</p>
        </div>
    `;
    break;
case 'moussaka':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>220 calories per serving</p>
            <p>High in Protein, Fiber, and Vitamins</p>
        </div>
    `;
    break;
case 'paella':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>250 calories per serving</p>
            <p>Good source of Protein, Iron, and Fiber</p>
        </div>
    `;
    break;
case 'gazpacho':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>30 calories per 100g</p>
            <p>High in Vitamins and Antioxidants</p>
        </div>
    `;
    break;
case 'tapas':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>Varies depending on ingredients</p>
            <p>Rich in diverse nutrients</p>
        </div>
    `;
    break;
case 'churros':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>120 calories per piece</p>
            <p>High in Carbohydrates and Sugar</p>
        </div>
    `;
    break;
case 'empanadas':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>300 calories per piece</p>
            <p>Good source of Protein and Carbohydrates</p>
        </div>
    `;
    break;
case 'pupusas':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>180 calories per piece</p>
            <p>High in Protein and Fiber</p>
        </div>
    `;
    break;
case 'arepas':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>150 calories per piece</p>
            <p>Rich in Carbohydrates and Fiber</p>
        </div>
    `;
    break;
case 'ceviche':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>90 calories per 100g</p>
            <p>High in Protein and Omega-3 Fatty Acids</p>
        </div>
    `;
    break;
case 'tacos':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>150 calories per taco</p>
            <p>Varies with ingredients, generally high in Protein and Fiber</p>
        </div>
    `;
    break;
case 'burritos':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>300 calories per burrito</p>
            <p>Rich in Protein, Fiber, and Carbohydrates</p>
        </div>
    `;
    break;
case 'quesadillas':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>210 calories per piece</p>
            <p>High in Protein and Calcium</p>
        </div>
    `;
    break;
case 'enchiladas':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>230 calories per piece</p>
            <p>Good source of Protein and Fiber</p>
        </div>
    `;
    break;
case 'chiles rellenos':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>300 calories per serving</p>
            <p>High in Protein, Fiber, and Vitamins</p>
        </div>
    `;
    break;
case 'pozole':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>180 calories per cup</p>
            <p>Rich in Protein, Fiber, and Antioxidants</p>
        </div>
    `;
    break;
case 'tamales':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>200 calories per tamale</p>
            <p>High in Protein and Fiber</p>
        </div>
    `;
    break;
case 'chimichanga':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>350 calories per piece</p>
            <p>Good source of Protein and Carbohydrates</p>
        </div>
    `;
    break;
case 'mole':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>250 calories per serving</p>
            <p>Rich in Antioxidants and Spices</p>
        </div>
    `;
    break;
case 'pico de gallo':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>20 calories per 100g</p>
            <p>High in Vitamins and Fiber</p>
        </div>
    `;
    break;
case 'guacamole':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>160 calories per 100g</p>
            <p>Rich in Healthy Fats, Fiber, and Vitamins</p>
        </div>
    `;
    break;
case 'salsa':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>30 calories per 100g</p>
            <p>High in Vitamins and Antioxidants</p>
        </div>
    `;
    break;
case 'carnitas':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>220 calories per 100g</p>
            <p>High in Protein and Fat</p>
        </div>
    `;
    break;
case 'cochinita pibil':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>250 calories per serving</p>
            <p>Rich in Protein and Spices</p>
        </div>
    `;
    break;
    case 'Paella':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>370 calories per serving</p>
            <p>Rich in Protein and Seafood</p>
        </div>
    `;
    break;
case 'ropa vieja':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>350 calories per serving</p>
            <p>High in Protein and Iron</p>
        </div>
    `;
    break;
case 'jerk chicken':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>250 calories per serving</p>
            <p>High in Protein and Spices</p>
        </div>
    `;
    break;
case 'fufu':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>320 calories per serving</p>
            <p>Rich in Carbohydrates</p>
        </div>
    `;
    break;
case 'injera':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>180 calories per piece</p>
            <p>Good source of Fiber and Protein</p>
        </div>
    `;
    break;
case 'bobotie':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>400 calories per serving</p>
            <p>High in Protein and Fiber</p>
        </div>
    `;
    break;
case 'bunny Chow':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>500 calories per serving</p>
            <p>High in Carbohydrates and Protein</p>
        </div>
    `;
    break;
case 'couscous':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>176 calories per cup</p>
            <p>Good source of Protein and Selenium</p>
        </div>
    `;
    break;
case 'tagine':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>380 calories per serving</p>
            <p>Rich in Protein and Fiber</p>
        </div>
    `;
    break;
case 'souvlaki':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>250 calories per serving</p>
            <p>High in Protein</p>
        </div>
    `;
    break;
case 'moussaka':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>340 calories per serving</p>
            <p>Good source of Protein and Fiber</p>
        </div>
    `;
    break;
case 'spanakopita':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>180 calories per piece</p>
            <p>Rich in Iron and Fiber</p>
        </div>
    `;
    break;
case 'baklava':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>300 calories per piece</p>
            <p>High in Sugar and Fats</p>
        </div>
    `;
    break;
case 'dolma':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>150 calories per serving</p>
            <p>Rich in Fiber and Vitamins</p>
        </div>
    `;
    break;
case 'lahmacun':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>220 calories per piece</p>
            <p>High in Protein and Carbohydrates</p>
        </div>
    `;
    break;
case 'shawarma':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>400 calories per serving</p>
            <p>High in Protein and Fats</p>
        </div>
    `;
    break;
case 'kibbeh':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>200 calories per piece</p>
            <p>Rich in Protein and Iron</p>
        </div>
    `;
    break;
case 'shakshuka':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>250 calories per serving</p>
            <p>High in Protein and Fiber</p>
        </div>
    `;
    break;
case 'harira':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>150 calories per cup</p>
            <p>Good source of Protein and Fiber</p>
        </div>
    `;
    break;
case 'poutine':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>740 calories per serving</p>
            <p>High in Carbohydrates and Fats</p>
        </div>
    `;
    break;
case 'tourtière':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>450 calories per slice</p>
            <p>Rich in Protein and Carbohydrates</p>
        </div>
    `;
    break;
case 'nanaimo bars':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>300 calories per piece</p>
            <p>High in Sugar and Fats</p>
        </div>
    `;
    break;
case 'kimchi':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>23 calories per serving</p>
            <p>Rich in Vitamins and Probiotics</p>
        </div>
    `;
    break;
case 'bibimbap':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>490 calories per serving</p>
            <p>High in Protein and Vitamins</p>
        </div>
    `;
    break;
case 'japchae':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>150 calories per serving</p>
            <p>Good source of Fiber and Vitamins</p>
        </div>
    `;
    break;
case 'bulgogi':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>260 calories per serving</p>
            <p>High in Protein and Iron</p>
        </div>
    `;
    break;
case 'sundubu-jjigae':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>200 calories per serving</p>
            <p>Rich in Protein and Vitamins</p>
        </div>
    `;
    break;
case 'yakitori':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>150 calories per skewer</p>
            <p>High in Protein</p>
        </div>
    `;
    break;
case 'okonomiyaki':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>500 calories per serving</p>
            <p>Rich in Protein and Vegetables</p>
        </div>
    `;
    break;
case 'takoyaki':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>40 calories per piece</p>
            <p>Good source of Protein and Iron</p>
        </div>
    `;
    break;
case 'tonkatsu':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>450 calories per serving</p>
            <p>High in Protein and Fats</p>
        </div>
    `;
    break;
case 'udon':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>210 calories per serving</p>
            <p>Rich in Carbohydrates</p>
        </div>
    `;
    break;
case 'ramen':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>450 calories per serving</p>
            <p>High in Protein and Carbohydrates</p>
        </div>
    `;
    break;
case 'onigiri':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>180 calories per piece</p>
            <p>Good source of Carbohydrates and Protein</p>
        </div>
    `;
    break;
case 'churrasco':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>600 calories per serving</p>
            <p>High in Protein and Fats</p>
        </div>
    `;
    break;
case 'feijoada':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>700 calories per serving</p>
            <p>Rich in Protein and Fiber</p>
        </div>
    `;
    break;
case 'coxinha':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>190 calories per piece</p>
            <p>High in Protein and Carbohydrates</p>
        </div>
    `;
    break;
case 'Brigadeiro':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>100 calories per piece</p>
            <p>High in Sugar and Fats</p>
        </div>
    `;
    break;
case 'empanadas':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>300 calories per piece</p>
            <p>Rich in Protein and Carbohydrates</p>
        </div>
    `;
    break;
case 'Chimichurri':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>50 calories per tablespoon</p>
            <p>Good source of Antioxidants and Vitamins</p>
        </div>
    `;
    break;
case 'Asado':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>800 calories per serving</p>
            <p>High in Protein and Fats</p>
        </div>
    `;
    break;
case 'pão de queijo':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>110 calories per piece</p>
            <p>Good source of Carbohydrates and Protein</p>
        </div>
    `;
    break;
case 'tostones':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>218 calories per serving</p>
            <p>Rich in Carbohydrates and Fiber</p>
        </div>
    `;
    break;
case 'Mofongo':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>620 calories per serving</p>
            <p>High in Carbohydrates and Fats</p>
        </div>
    `;
    break;
case 'pupusas':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>180 calories per piece</p>
            <p>Rich in Protein and Fiber</p>
        </div>
    `;
    break;
case 'prepas':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>150 calories per piece</p>
            <p>Good source of Carbohydrates and Fiber</p>
        </div>
    `;
    break;
case 'pachapas':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>250 calories per piece</p>
            <p>Rich in Carbohydrates and Protein</p>
        </div>
    `;
    break;
case 'Ceviche':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>140 calories per serving</p>
            <p>High in Protein and Omega-3</p>
        </div>
    `;
    break;
case 'lomo saltado':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>500 calories per serving</p>
            <p>Rich in Protein and Carbohydrates</p>
        </div>
    `;
    break;
case 'Tarte Tatin':
    info = `
        <div class="info">
            <p>Nutrition</p>
            <p>400 calories per slice</p>
            <p>High in Carbohydrates and Sugars</p>
        </div>
    `;
    break;
    case 'chardonnay':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>123 calories per 5 oz serving</p>
                <p>Often oaked, buttery, and full-bodied</p>
                <p>White wine</p>
            </div>
        `;
        break;
    case 'sauvignon blanc':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>122 calories per 5 oz serving</p>
                <p>Crisp, citrusy, and grassy</p>
                <p>White wine</p>
            </div>
        `;
        break;
    case 'riesling':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>120 calories per 5 oz serving</p>
                <p>Fruity, floral, and often sweet</p>
                <p>White wine</p>
            </div>
        `;
        break;
    case 'pinot grigio':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>123 calories per 5 oz serving</p>
                <p>Light, crisp, and dry</p>
                <p>White wine</p>
            </div>
        `;
        break;
    case 'rosé':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>125 calories per 5 oz serving</p>
                <p>Fresh, fruity, and floral</p>
                <p>Rosé wine</p>
            </div>
        `;
        break;
    case 'merlot':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>125 calories per 5 oz serving</p>
                <p>Soft, velvety, and plummy</p>
                <p>Red wine</p>
            </div>
        `;
        break;
    case 'pinot noir':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>121 calories per 5 oz serving</p>
                <p>Light-bodied, fruity, and earthy</p>
                <p>Red wine</p>
            </div>
        `;
        break;
    case 'zinfandel':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>129 calories per 5 oz serving</p>
                <p>Bold, spicy, and fruity</p>
                <p>Red wine</p>
            </div>
        `;
        break;
    case 'shiraz':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>122 calories per 5 oz serving</p>
                <p>Full-bodied, dark fruit, and spicy</p>
                <p>Red wine</p>
            </div>
        `;
        break;
    case 'cabernet sauvignon':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>123 calories per 5 oz serving</p>
                <p>Full-bodied, dark fruit, and tannic</p>
                <p>Red wine</p>
            </div>
        `;
        break;
    case 'malbec':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>125 calories per 5 oz serving</p>
                <p>Full-bodied, dark fruit, and smoky</p>
                <p>Red wine</p>
            </div>
        `;
        break;
    case 'syrah':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>122 calories per 5 oz serving</p>
                <p>Full-bodied, dark fruit, and spicy</p>
                <p>Red wine</p>
            </div>
        `;
        break;
    case 'grenache':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>123 calories per 5 oz serving</p>
                <p>Medium-bodied, red fruit, and spicy</p>
                <p>Red wine</p>
            </div>
        `;
        break;
    case 'sangiovese':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>126 calories per 5 oz serving</p>
                <p>Medium-bodied, red fruit, and earthy</p>
                <p>Red wine</p>
            </div>
        `;
        break;
    case 'barbera':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>123 calories per 5 oz serving</p>
                <p>Medium-bodied, red fruit, and spicy</p>
                <p>Red wine</p>
            </div>
        `;
        break;
    case 'nebbiolo':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>123 calories per 5 oz serving</p>
                <p>Full-bodied, tannic, and floral</p>
                <p>Red wine</p>
            </div>
        `;
        break;
    case 'tempranillo':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>124 calories per 5 oz serving</p>
                <p>Medium-bodied, red fruit, and earthy</p>
                <p>Red wine</p>
            </div>
        `;
        break;
    case 'rioja':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>124 calories per 5 oz serving</p>
                <p>Medium-bodied, red fruit, and spicy</p>
                <p>Red wine</p>
            </div>
        `;
        break;
    case 'chianti':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>124 calories per 5 oz serving</p>
                <p>Medium-bodied, red fruit, and earthy</p>
                <p>Red wine</p>
            </div>
        `;
        break;
    case 'prosecco':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>121 calories per 5 oz serving</p>
                <p>Light, fruity, and bubbly</p>
                <p>Sparkling wine</p>
            </div>
        `;
        break;
    case 'champagne':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>124 calories per 5 oz serving</p>
                <p>Light, fruity, and bubbly</p>
                <p>Sparkling wine</p>
            </div>
        `;
        break;
    case 'sparkling rosé':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>124 calories per 5 oz serving</p>
                <p>Fresh, fruity, and bubbly</p>
                <p>Sparkling wine</p>
            </div>
        `;
        break;
    case 'moscato':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>127 calories per 5 oz serving</p>
                <p>Sweet, fruity, and floral</p>
                <p>White wine</p>
            </div>
        `;
        break;
    case 'port':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>165 calories per 3.5 oz serving</p>
                <p>Sweet, rich, and fortified</p>
                <p>Red wine</p>
            </div>
        `;
        break;
    case 'ice wine':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>160 calories per 3.5 oz serving</p>
                <p>Very sweet, fruity, and rich</p>
                <p>Dessert wine</p>
            </div>
        `;
        break;
    case 'sauternes':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>160 calories per 3.5 oz serving</p>
                <p>Sweet, fruity, and rich</p>
                <p>Dessert wine</p>
            </div>
        `;
        break;
    case 'shiraz cabernet':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>123 calories per 5 oz serving</p>
                <p>Full-bodied, dark fruit, and spicy</p>
                <p>Red wine</p>
            </div>
        `;
        break;
    case 'gewürztraminer':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>120 calories per 5 oz serving</p>
                <p>Floral, spicy, and often sweet</p>
                <p>White wine</p>
            </div>
        `;
        break;
    case 'viognier':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>123 calories per 5 oz serving</p>
                <p>Aromatic, fruity, and full-bodied</p>
                <p>White wine</p>
            </div>
        `;
        break;
    case 'chenin blanc':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>120 calories per 5 oz serving</p>
                <p>Versatile, can be dry or sweet, fruity</p>
                <p>White wine</p>
            </div>
        `;
        break;
    case 'grüner veltliner':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>120 calories per 5 oz serving</p>
                <p>Crisp, peppery, and citrusy</p>
                <p>White wine</p>
            </div>
        `;
        break;
    case 'albariño':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>120 calories per 5 oz serving</p>
                <p>Light, fruity, and floral</p>
                <p>White wine</p>
            </div>
        `;
        break;
    case 'vermouth':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>140 calories per 3.5 oz serving</p>
                <p>Fortified, aromatic, and often used in cocktails</p>
                <p>Fortified wine</p>
            </div>
        `;
        break;
    case 'sherry':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>165 calories per 3.5 oz serving</p>
                <p>Fortified, can be dry or sweet</p>
                <p>Fortified wine</p>
            </div>
        `;
        break;
    case 'madeira':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>165 calories per 3.5 oz serving</p>
                <p>Fortified, rich, and nutty</p>
                <p>Fortified wine</p>
            </div>
        `;
        break;
    case 'bordeaux':
        info = `
            <div class="info">
                <p>Nutrition</p>
                <p>125 calories per 5 oz serving</p>
                <p>Full-bodied, complex, and often tannic</p>
                <p>Red wine</p>
            </div>
        `;
        break;

case 'peking duck':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>227 calories per 100g</p>
          <p>Rich in protein</p>
          <p>High in fat</p>
        </div>
      `;
      break;
case 'kung pao chicken':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>129 calories per 100g</p>
          <p>High in protein</p>
          <p>Moderate in fat</p>
        </div>
      `;
      break;
case 'ma po tofu':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>176 calories per 100g</p>
          <p>Rich in protein</p>
          <p>Contains iron and calcium</p>
        </div>
      `;
      break;
case 'wonton soup':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>56 calories per 100g</p>
          <p>Low in fat</p>
          <p>Contains protein</p>
        </div>
      `;
      break;
case 'dumplings':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>220 calories per 100g</p>
          <p>High in carbohydrates</p>
          <p>Contains protein</p>
        </div>
      `;
      break;
case 'sweet and sour pork':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>216 calories per 100g</p>
          <p>High in fat</p>
          <p>Contains protein</p>
        </div>
      `;
      break;
case 'chow mein':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>200 calories per 100g</p>
          <p>High in carbohydrates</p>
          <p>Contains protein and fat</p>
        </div>
      `;
      break;
case 'hot pot':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>Variable calories per 100g</p>
          <p>Depends on ingredients</p>
          <p>Rich in protein and nutrients</p>
        </div>
      `;
      break;
case 'fried rice':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>163 calories per 100g</p>
          <p>High in carbohydrates</p>
          <p>Contains protein</p>
        </div>
      `;
      break;
case 'spring rolls':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>154 calories per 100g</p>
          <p>High in carbohydrates</p>
          <p>Moderate in fat</p>
        </div>
      `;
      break;
case 'general tso\'s chicken':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>295 calories per 100g</p>
          <p>High in fat</p>
          <p>Contains protein</p>
        </div>
      `;
      break;
case 'char siu':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>250 calories per 100g</p>
          <p>High in protein</p>
          <p>Moderate in fat</p>
        </div>
      `;
      break;
case 'szechuan shrimp':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>125 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;
case 'beef and broccoli':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>150 calories per 100g</p>
          <p>Rich in protein</p>
          <p>Contains iron</p>
        </div>
      `;
      break;
case 'egg drop soup':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>65 calories per 100g</p>
          <p>Low in fat</p>
          <p>Contains protein</p>
        </div>
      `;
      break;
case 'lo mein':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>200 calories per 100g</p>
          <p>High in carbohydrates</p>
          <p>Contains protein and fat</p>
        </div>
      `;
      break;
case 'moo shu pork':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>220 calories per 100g</p>
          <p>High in protein</p>
          <p>Moderate in fat</p>
        </div>
      `;
      break;
case 'orange chicken':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>250 calories per 100g</p>
          <p>High in fat</p>
          <p>Contains protein</p>
        </div>
      `;
      break;
case 'cashew chicken':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>150 calories per 100g</p>
          <p>High in protein</p>
          <p>Contains healthy fats</p>
        </div>
      `;
      break;
case 'hunan beef':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>170 calories per 100g</p>
          <p>Rich in protein</p>
          <p>Moderate in fat</p>
        </div>
      `;
      break;
case 'lion\'s head meatballs':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>190 calories per 100g</p>
          <p>High in protein</p>
          <p>Moderate in fat</p>
        </div>
      `;
      break;
case 'steamed fish':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>100 calories per 100g</p>
          <p>Low in fat</p>
          <p>Rich in protein</p>
        </div>
      `;
      break;
case 'braised pork belly':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>330 calories per 100g</p>
          <p>High in fat</p>
          <p>Rich in protein</p>
        </div>
      `;
      break;
case 'dan dan noodles':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>230 calories per 100g</p>
          <p>High in carbohydrates</p>
          <p>Contains protein and fat</p>
        </div>
      `;
      break;
case 'twice cooked pork':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>250 calories per 100g</p>
          <p>High in fat</p>
          <p>Contains protein</p>
        </div>
      `;
      break;
case 'peking pork chops':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>260 calories per 100g</p>
          <p>High in protein</p>
          <p>Moderate in fat</p>
        </div>
      `;
      break;
case 'tea smoked duck':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>337 calories per 100g</p>
          <p>High in fat</p>
          <p>Rich in protein</p>
        </div>
      `;
      break;
case 'fried dumplings':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>220 calories per 100g</p>
          <p>High in carbohydrates</p>
          <p>Contains protein</p>
        </div>
      `;
      break;
case 'mapo eggplant':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>110 calories per 100g</p>
          <p>Low in fat</p>
          <p>Rich in fiber</p>
        </div>
      `;
      break;
case 'chinese cabbage stir fry':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>25 calories per 100g</p>
          <p>Low in fat</p>
          <p>Rich in vitamins</p>
        </div>
      `;
      break;
case 'tofu skin rolls':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>150 calories per 100g</p>
          <p>High in protein</p>
          <p>Contains fiber</p>
        </div>
      `;
      break;
case 'xiaolongbao (soup dumplings)':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>60 calories per dumpling</p>
          <p>Low in fat</p>
          <p>Contains protein</p>
        </div>
      `;
      break;
case 'salted duck':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>250 calories per 100g</p>
          <p>High in fat</p>
          <p>Rich in protein</p>
        </div>
      `;
      break;
case 'chicken feet dim sum':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>180 calories per 100g</p>
          <p>High in collagen</p>
          <p>Contains protein</p>
        </div>
      `;
      break;
case 'fish flavored shredded pork':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>220 calories per 100g</p>
          <p>High in protein</p>
          <p>Moderate in fat</p>
        </div>
      `;
      break;
case 'yuxiang eggplant':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>120 calories per 100g</p>
          <p>Low in fat</p>
          <p>Rich in fiber</p>
        </div>
      `;
      break;
case 'chili chicken':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>210 calories per 100g</p>
          <p>High in protein</p>
          <p>Moderate in fat</p>
        </div>
      `;
      break;
case 'sesame chicken':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>295 calories per 100g</p>
          <p>High in fat</p>
          <p>Contains protein</p>
        </div>
      `;
      break;
case 'drunken chicken':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>250 calories per 100g</p>
          <p>High in protein</p>
          <p>Moderate in fat</p>
        </div>
      `;
      break;
case 'salt and pepper shrimp':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>140 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;
case 'wonton noodles':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>75 calories per 100g</p>
          <p>Low in fat</p>
          <p>Contains protein</p>
        </div>
      `;
      break;
case 'claypot chicken rice':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>200 calories per 100g</p>
          <p>High in carbohydrates</p>
          <p>Contains protein</p>
        </div>
      `;
      break;
case 'yangzhou fried rice':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>168 calories per 100g</p>
          <p>High in carbohydrates</p>
          <p>Contains protein and fat</p>
        </div>
      `;
      break;
case 'fish head casserole':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>120 calories per 100g</p>
          <p>Low in fat</p>
          <p>Rich in protein</p>
        </div>
      `;
      break;
case 'spicy cumin lamb':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>270 calories per 100g</p>
          <p>High in protein</p>
          <p>Moderate in fat</p>
        </div>
      `;
      break;
case 'scallion pancakes':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>266 calories per 100g</p>
          <p>High in carbohydrates</p>
          <p>Contains fat</p>
        </div>
      `;
      break;
case 'red cooked pork':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>320 calories per 100g</p>
          <p>High in fat</p>
          <p>Rich in protein</p>
        </div>
      `;
      break;
case 'hot and sour soup':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>50 calories per 100g</p>
          <p>Low in fat</p>
          <p>Contains protein</p>
        </div>
      `;
      break;
case 'bitter melon stir fry':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>30 calories per 100g</p>
          <p>Low in fat</p>
          <p>Rich in vitamins</p>
        </div>
      `;
      break;
case 'black bean spareribs':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>290 calories per 100g</p>
          <p>High in fat</p>
          <p>Contains protein</p>
        </div>
      `;
      break;
case 'steamed pork buns':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>185 calories per bun</p>
          <p>High in carbohydrates</p>
          <p>Contains protein and fat</p>
        </div>
      `;
      break;
case 'chinese roast pork':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>270 calories per 100g</p>
          <p>High in fat</p>
          <p>Rich in protein</p>
        </div>
      `;
      break;
case 'bamboo shoots stir fry':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>50 calories per 100g</p>
          <p>Low in fat</p>
          <p>Rich in fiber</p>
        </div>
      `;
      break;
case 'soy sauce chicken':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>150 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;
case 'sichuan boiled fish':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>180 calories per 100g</p>
          <p>High in protein</p>
          <p>Moderate in fat</p>
        </div>
      `;
      break;
case 'crispy duck':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>337 calories per 100g</p>
          <p>High in fat</p>
          <p>Rich in protein</p>
        </div>
      `;
      break;
case 'egg foo young':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>150 calories per 100g</p>
          <p>High in protein</p>
          <p>Contains fat</p>
        </div>
      `;
      break;
case 'steamed spare ribs with black beans':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>290 calories per 100g</p>
          <p>High in fat</p>
          <p>Contains protein</p>
        </div>
      `;
      break;
case 'beef noodle soup':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>150 calories per 100g</p>
          <p>High in protein</p>
          <p>Moderate in carbohydrates</p>
        </div>
      `;
      break;
case 'zha jiang mian':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>200 calories per 100g</p>
          <p>High in carbohydrates</p>
          <p>Contains protein and fat</p>
        </div>
      `;
      break;
      case 'shanghai noodles':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>Varies per recipe</p>
      <p>Rich in carbohydrates and protein</p>
    </div>
  `;
  break;

case 'crab rangoon':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>Varies per recipe</p>
      <p>High in protein and fats</p>
    </div>
  `;
  break;

case 'pineapple chicken':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>Varies per recipe</p>
      <p>Rich in protein and vitamins</p>
    </div>
  `;
  break;

case 'sticky rice':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>180 calories per 100g</p>
      <p>High in carbohydrates</p>
    </div>
  `;
  break;

case 'soy braised chicken':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>Varies per recipe</p>
      <p>Rich in protein and flavors</p>
    </div>
  `;
  break;

case 'stir-fried noodles with vegetables':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>Varies per recipe</p>
      <p>Rich in carbohydrates and vitamins</p>
    </div>
  `;
  break;

case 'pan-fried dumplings':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>Varies per recipe</p>
      <p>High in protein and fats</p>
    </div>
  `;
  break;

case 'honey walnut shrimp':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>Varies per recipe</p>
      <p>Rich in protein, fats, and omega-3</p>
    </div>
  `;
  break;

case 'salted egg yolk prawns':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>Varies per recipe</p>
      <p>Rich in protein and fats</p>
    </div>
  `;
  break;

case 'chili oil dumplings':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>Varies per recipe</p>
      <p>High in protein and fats</p>
    </div>
  `;
  break;
  case 'beef tacos':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>226 calories per 100g</p>
         <p>High in protein</p>
         <p>Iron</p>
         <p>Vitamin B12</p>
      </div>
   `;
   break;

case 'beef stew':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>150 calories per 100g</p>
         <p>High in protein</p>
         <p>Iron</p>
         <p>Vitamin B6</p>
      </div>
   `;
   break;

case 'chili con carne':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>120 calories per 100g</p>
         <p>High in protein</p>
         <p>Iron</p>
         <p>Vitamin C</p>
      </div>
   `;
   break;

case 'chicken parmesan':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>210 calories per 100g</p>
         <p>High in protein</p>
         <p>Calcium</p>
         <p>Vitamin A</p>
      </div>
   `;
   break;

case 'chicken pot pie':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>250 calories per 100g</p>
         <p>High in protein</p>
         <p>Iron</p>
         <p>Vitamin A</p>
      </div>
   `;
   break;

case 'coconut shrimp':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>300 calories per 100g</p>
         <p>High in protein</p>
         <p>Selenium</p>
         <p>Vitamin B12</p>
      </div>
   `;
   break;

case 'croque monsieur':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>350 calories per 100g</p>
         <p>High in protein</p>
         <p>Calcium</p>
         <p>Vitamin B12</p>
      </div>
   `;
   break;

case 'eggplant parmesan':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>200 calories per 100g</p>
         <p>High in fiber</p>
         <p>Calcium</p>
         <p>Vitamin C</p>
      </div>
   `;
   break;

case 'fried calamari':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>150 calories per 100g</p>
         <p>High in protein</p>
         <p>Iron</p>
         <p>Vitamin B12</p>
      </div>
   `;
   break;

case 'gyro':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>250 calories per 100g</p>
         <p>High in protein</p>
         <p>Iron</p>
         <p>Vitamin B6</p>
      </div>
   `;
   break;

case 'hot dog':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>290 calories per 100g</p>
         <p>High in protein</p>
         <p>Iron</p>
         <p>Vitamin B12</p>
      </div>
   `;
   break;

case 'lamb curry':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>200 calories per 100g</p>
         <p>High in protein</p>
         <p>Iron</p>
         <p>Vitamin B12</p>
      </div>
   `;
   break;

case 'lasagna':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>300 calories per 100g</p>
         <p>High in protein</p>
         <p>Calcium</p>
         <p>Iron</p>
      </div>
   `;
   break;

case 'lobster mac and cheese':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>350 calories per 100g</p>
         <p>High in protein</p>
         <p>Calcium</p>
         <p>Vitamin B12</p>
      </div>
   `;
   break;

case 'lobster tail':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>143 calories per 100g</p>
         <p>High in protein</p>
         <p>Calcium</p>
         <p>Vitamin B12</p>
      </div>
   `;
   break;

case 'margherita pizza':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>250 calories per 100g</p>
         <p>High in protein</p>
         <p>Calcium</p>
         <p>Vitamin A</p>
      </div>
   `;
   break;

case 'moussaka':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>170 calories per 100g</p>
         <p>High in protein</p>
         <p>Iron</p>
         <p>Vitamin C</p>
      </div>
   `;
   break;

case 'paella':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>200 calories per 100g</p>
         <p>High in protein</p>
         <p>Iron</p>
         <p>Vitamin C</p>
      </div>
   `;
   break;

case 'pancakes':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>227 calories per 100g</p>
         <p>High in carbs</p>
         <p>Calcium</p>
         <p>Iron</p>
      </div>
   `;
   break;

case 'pepperoni pizza':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>300 calories per 100g</p>
         <p>High in protein</p>
         <p>Calcium</p>
         <p>Vitamin B12</p>
      </div>
   `;
   break;

case 'pho':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>80 calories per 100g</p>
         <p>High in protein</p>
         <p>Iron</p>
         <p>Vitamin C</p>
      </div>
   `;
   break;

case 'pierogi':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>175 calories per 100g</p>
         <p>High in carbs</p>
         <p>Iron</p>
         <p>Vitamin C</p>
      </div>
   `;
   break;

case 'pot roast':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>230 calories per 100g</p>
         <p>High in protein</p>
         <p>Iron</p>
         <p>Vitamin B12</p>
      </div>
   `;
   break;

case 'prime rib':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>250 calories per 100g</p>
         <p>High in protein</p>
         <p>Iron</p>
         <p>Vitamin B12</p>
      </div>
   `;
   break;

case 'quiche lorraine':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>300 calories per 100g</p>
         <p>High in protein</p>
         <p>Calcium</p>
         <p>Vitamin A</p>
      </div>
   `;
   break;

case 'ravioli':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>220 calories per 100g</p>
         <p>High in protein</p>
         <p>Iron</p>
         <p>Vitamin B12</p>
      </div>
   `;
   break;

case 'ratatouille':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>80 calories per 100g</p>
         <p>High in fiber</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
      </div>
   `;
   break;

case 'reddragon roll':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>150 calories per 100g</p>
         <p>High in protein</p>
         <p>Iron</p>
         <p>Vitamin B6</p>
      </div>
   `;
   break;

case 'reuben':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>300 calories per 100g</p>
         <p>High in protein</p>
         <p>Iron</p>
         <p>Vitamin B12</p>
      </div>
   `;
   break;

case 'shepherds pie':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>120 calories per 100g</p>
         <p>High in protein</p>
         <p>Iron</p>
         <p>Vitamin A</p>
      </div>
   `;
   break;

case 'shrimp scampi':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>180 calories per 100g</p>
         <p>High in protein</p>
         <p>Selenium</p>
         <p>Vitamin B12</p>
      </div>
   `;
   break;

case 'souvlaki':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>130 calories per 100g</p>
         <p>High in protein</p>
         <p>Iron</p>
         <p>Vitamin B6</p>
      </div>
   `;
   break;

case 'spaghetti carbonara':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>220 calories per 100g</p>
         <p>High in protein</p>
         <p>Iron</p>
         <p>Vitamin B12</p>
      </div>
   `;
   break;

case 'sushi':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>120 calories per 100g</p>
         <p>High in protein</p>
         <p>Iron</p>
         <p>Vitamin B12</p>
      </div>
   `;
   break;

case 'tacos':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>210 calories per 100g</p>
         <p>High in protein</p>
         <p>Iron</p>
         <p>Vitamin B12</p>
      </div>
   `;
   break;

case 'tamale':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>240 calories per 100g</p>
         <p>High in protein</p>
         <p>Iron</p>
         <p>Vitamin B6</p>
      </div>
   `;
   break;

case 'tempura':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>120 calories per 100g</p>
         <p>High in carbs</p>
         <p>Iron</p>
         <p>Vitamin B6</p>
      </div>
   `;
   break;

case 'toad in the hole':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>200 calories per 100g</p>
         <p>High in protein</p>
         <p>Iron</p>
         <p>Vitamin B12</p>
      </div>
   `;
   break;

case 'tuna tartare':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>150 calories per 100g</p>
         <p>High in protein</p>
         <p>Iron</p>
         <p>Vitamin B12</p>
      </div>
   `;
   break;

case 'turkey sandwich':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>150 calories per 100g</p>
         <p>High in protein</p>
         <p>Iron</p>
         <p>Vitamin B6</p>
      </div>
   `;
   break;

case 'vegetable soup':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>40 calories per 100g</p>
         <p>High in fiber</p>
         <p>Vitamin A</p>
         <p>Vitamin C</p>
      </div>
   `;
   break;
  
        default:
        // If the input doesn't match any of the available keywords, fetch data from search engines
        fetchNutritionalInfo(input)
          .then(data => {
            info = `
              <div class="info">
                <p>Nutrition</p>
                <p>${data.calories} calories per 100g</p>
                <p>${data.nutrients}</p>
              </div>
            `;
            nutritionalInfoBox.innerHTML = info;
          })
          .catch(error => {
            console.error('Error fetching nutritional info:', error);
            info = `<div class="info"><p>No information available</p></div>`;
            nutritionalInfoBox.innerHTML = info;
          });
  
        // Open search engines
        window.open(`https://www.google.com/search?q=${input}`, '_blank');
        window.open(`https://www.bing.com/search?q=${input}`, '_blank');
        window.open(`https://search.yahoo.com/search?p=${input}`, '_blank');
        window.open(`https://www.baidu.com/s?wd=${input}`, '_blank');
        break;
    }
  
    nutritionalInfoBox.innerHTML = info;
  });
  
  function fetchNutritionalInfo(keyword) {
    // Simulate an API call with a placeholder response
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Example simulated data
        resolve({
          calories: '500',
          nutrients: 'High in protein, fiber, and healthy fats like omega-3s and omega-6s'
        });
      }, 1000);
    });
  }