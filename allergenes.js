/* Les 14 allergènes à déclaration obligatoire (règlement européen n° 1169/2011) */
window.ALLERGENS = [
    { key: 'gluten', label: 'Gluten', icon: '🌾', desc: 'Blé, seigle, orge, avoine, épeautre, kamut et produits à base de ces céréales' },
    { key: 'crustaces', label: 'Crustacés', icon: '🦐', desc: 'Crevettes, crabes, homards, langoustines et produits à base de crustacés' },
    { key: 'oeufs', label: 'Œufs', icon: '🥚', desc: "Œufs et produits à base d'œufs" },
    { key: 'poissons', label: 'Poissons', icon: '🐟', desc: 'Poissons et produits à base de poissons' },
    { key: 'arachides', label: 'Arachides', icon: '🥜', desc: "Arachides et produits à base d'arachides" },
    { key: 'soja', label: 'Soja', icon: '🫘', desc: 'Soja et produits à base de soja' },
    { key: 'lait', label: 'Lait', icon: '🥛', desc: 'Lait et produits à base de lait, y compris le lactose' },
    { key: 'fruits_a_coque', label: 'Fruits à coque', icon: '🌰', desc: 'Amandes, noisettes, noix, noix de cajou, noix de pécan, noix du Brésil, pistaches, noix de macadamia' },
    { key: 'celeri', label: 'Céleri', icon: '🥬', desc: 'Céleri et produits à base de céleri, y compris le céleri-rave' },
    { key: 'moutarde', label: 'Moutarde', icon: '🟨', desc: 'Moutarde et produits à base de moutarde' },
    { key: 'sesame', label: 'Sésame', icon: '🌱', desc: 'Graines de sésame et produits à base de sésame' },
    { key: 'sulfites', label: 'Sulfites', icon: '🍷', desc: 'Anhydride sulfureux et sulfites (plus de 10 mg/kg ou 10 mg/l), présents notamment dans le vin' },
    { key: 'lupin', label: 'Lupin', icon: '🌼', desc: 'Lupin et produits à base de lupin' },
    { key: 'mollusques', label: 'Mollusques', icon: '🐚', desc: 'Moules, huîtres, escargots, calmars et produits à base de mollusques' }
];
window.ALLERGENS_BY_KEY = Object.fromEntries(window.ALLERGENS.map((a) => [a.key, a]));
