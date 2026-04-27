/* ============================================================
   NOLVO — French (FR) Translation Patch
   Usage: Add <script src="fr.js"></script> before </body>
          in nolvocn_website.html
   The existing setLang() function will auto-pick up T['fr']
   and BLOCKS_FR when user clicks FR button.
   ============================================================ */

/* 1. Inject FR into the existing T dictionary */
if (typeof T !== 'undefined') {
  T['fr'] = {
    'html': 'fr',
    /* nav */
    'nl-home':      'Accueil',
    'nl-model':     'Notre Modèle',
    'nl-solutions': 'Solutions',
    'nl-partners':  'Partenaires',
    'nl-contact':   'Contact',
    /* hero */
    'tx-hero-eye':  'Shenzhen · Paris · Réseau Mondial',
    'tx-hero-h1':   'Nous construisons des <em>réseaux de vente locaux</em><br>pour les fabricants chinois.',
    'tx-hero-sub':  'Pas une plateforme. Pas un intermédiaire.<br>Une équipe de vente locale dédiée — recrutée, gérée et opérationnelle sur votre marché cible.',
    'tx-btn-fac':   'Je suis un fabricant chinois →',
    'tx-btn-par':   'Je suis un partenaire à l\'étranger →',
    'tx-fn1':'Fabricant chinois','tx-fn2':'Système NOLVO','tx-fn3':'Équipe de vente locale','tx-fn4':'Développement des canaux','tx-fn5':'Acquisition clients',
    'tx-sn1':'20+','tx-sn2':'8','tx-sn3':'6',
    'tx-st1':'Ans d\'expérience B2B mondiale','tx-st2':'Pays européens opérés','tx-st3':'Langues parlées',
    /* contrast */
    'tx-con-lbl':   'Ancienne méthode vs. NOLVO',
    'tx-old-badge': 'Approche traditionnelle',
    'tx-new-badge': 'Système NOLVO',
    'tx-old-title': 'Attendre que les acheteurs vous trouvent',
    'tx-new-title': 'Votre propre canal de vente proactif',
    /* caps */
    'tx-cap-lbl':    'Ce que nous faisons',
    'tx-cap1-title': 'Mise en place d\'une équipe locale',
    'tx-cap2-title': 'Développement des canaux',
    'tx-cap3-title': 'Exécution de l\'entrée sur le marché',
    /* industries */
    'tx-ind-lbl':    'Qui nous servons',
    'tx-ind1-title': 'Fabrication industrielle & Énergie',
    'tx-ind2-title': 'Bâtiment & Habitat',
    'tx-obs-label':  'En cours d\'évaluation',
    /* solutions preview */
    'tx-sol1-title': 'Indépendance des plateformes',
    'tx-sol2-title': 'Vente & SAV locaux',
    'tx-sol3-title': 'Conquérir les grands comptes',
    'sol-more-a': 'En savoir plus →',
    'sol-more-b': 'En savoir plus →',
    'sol-more-c': 'En savoir plus →',

    /* trust */
    'tx-trust-lbl':  'Dirigé par quelqu\'un qui l\'a fait',
    'tx-tp1-title':  '15 ans d\'exploitation rentable en Europe',
    'tx-tp2-title':  'Formation ingénieur + commerce',
    'tx-tp3-title':  'Samsung · Groupe EDF · Clients Fortune 500',
    'tx-f-name':     'Steve Kim',
    'tx-f-role':     'Fondateur & Directeur Général',
    'tx-cb-label':   'Anciens clients Fortune 500',
    'client1-name': 'Flextronics',
    'client1-desc': 'Leader mondial de l\'EMS',

    'client2-name': 'Delta',
'client2-desc': 'Alimentations électriques et composants', 

'client3-name': 'Lite-On',
'client3-desc': 'Fabrication électronique',

'client4-name': 'Siliconware',
'client4-desc': 'Conditionnement de semi-conducteurs',
  

    /* footer */
    'tx-foot-tag':   'Construire des réseaux de vente à l\'étranger pour les fabricants chinois',
  
  /* model page */
   'tx-mod-eye':    'Notre Modèle',
'tx-rc1-name':   'Votre usine',
'tx-rc1-sub':    'Fabricant chinois',
'tx-rc2-name':   'Hub opérationnel',
'tx-rc2-sub':    'NOLVO',
'tx-rc3-name':   'Exécutant local',
'tx-rc3-sub':    'Représentant commercial / Canal',
'roles-label-el': 'Répartition des rôles',
'rc1-tag-el':    'Votre usine',
'rc2-tag-el':    'Système NOLVO',
'rc3-tag-el':    'Partenaire commercial local',
'steps-title-el': 'Quatre étapes —<br>Du lancement à la <em>mise à l\'échelle</em>',
'step1-label':   'Première étape',
'step2-label':   'Deuxième étape',
'step3-label':   'Troisième étape',
'step4-label':   'Quatrième étape',
'scope-lbl-el':  'Périmètre',
'scope-yes-label': 'Ce que nous faisons',
'scope-no-label':  'Ce que nous ne faisons pas',
'fit-lbl-el':    'À qui s\'adresse ce modèle',
'fit-yes-label':  'Bon profil',
'fit-no-label':   'Profil moins adapté',
'steps-label': 'Processus de collaboration',

    /* partners page */
    'tx-par-eye':    'Partenaires',
    'tx-ptc1-title': 'Représentant commercial individuel',
    'tx-ptc2-title': 'Entreprise de distribution / Canal',
    'tx-ptc3-title': 'Demande d\'approvisionnement',
    'tx-ptc1-btn':   'S\'inscrire comme représentant →',
    'tx-ptc2-btn':   'S\'inscrire comme partenaire canal →',
    'tx-ptc3-btn':   'Soumettre une demande d\'achat →',
   'ptc1-ideal-label': 'Profil idéal',
'ptc2-ideal-label': 'Profil idéal',
'ptc3-ideal-label': 'Catégories que nous pouvons acheter',

    /* model cta */
    'tx-mcta-btn': 'Enregistrer votre intérêt →',
    /* modals */
    'tx-m1-title': 'Inscription — Fabricant chinois',
    'tx-m2-title': 'Candidature — Représentant commercial',
    'tx-m3-title': 'Candidature — Partenaire canal',
    'tx-m4-title': 'Soumettre une demande d\'achat',
  /* coming soon pages */
  'cs-sol-badge': 'Bientôt disponible',
  'cs-con-badge': 'Bientôt disponible',
  'whatsapp-text': 'Contacter Steve Kim sur WhatsApp',
  'global-layout-label': 'Présence mondiale',

/* sales rep form */
'label-fname': 'Prénom *',
'label-lname': 'Nom *',
'label-gender': 'Genre',
'label-age': 'Âge',
'label-country': 'Pays/Région *',
'label-city': 'Ville/Région *',
'label-email': 'E-mail *',
'label-whatsapp': 'Numéro WhatsApp *',
'label-industry': 'Secteur d\'expérience',
'label-intro': 'Brève présentation (optionnel)',
'placeholder-fname': 'Jean',
'placeholder-lname': 'Dupont',
'placeholder-city': 'ex. Paris, Lyon, Munich...',
'placeholder-email': 'vous@email.com',
'placeholder-whatsapp': '+33 6 12 34 56 78',
'placeholder-industry': 'Sélectionnez votre domaine...',
'placeholder-intro': 'Votre expérience commerciale, votre réseau, langues parlées...',
'gender-male': 'Homme',
'gender-female': 'Femme',
'gender-prefer': 'Préfère ne pas dire',
'age-18-25': '18 – 25',
'age-26-35': '26 – 35',
'age-36-45': '36 – 45',
'age-46-55': '46 – 55',
'age-56': '56 +',
'industry-cnc': 'CNC / Fabrication de précision',
'industry-electronics': 'Électronique / Composants',
'industry-energy': 'Énergies nouvelles / Véhicules électriques',
'industry-machinery': 'Machines industrielles',
'industry-automotive': 'Automobile',
'industry-aerospace': 'Aérospatiale',
'industry-medical': 'Dispositifs médicaux',
'industry-general': 'Fabrication générale',
'industry-other': 'Autre',
'submit-btn': 'Envoyer la candidature →',
'form-footer': 'Nous répondons sous 48 heures. Vos informations sont confidentielles.',
'gender-placeholder': 'Sélectionner...',
'age-placeholder': 'Sélectionner...',
'country-placeholder': '-- Sélectionner un pays --',
'industry-placeholder': 'Sélectionnez votre domaine...',
'intro-placeholder': 'Votre expérience commerciale, votre réseau, langues parlées...',
'ptc1-ideal-label': 'Profil idéal',
'ptc2-ideal-label': 'Profil idéal',
'ptc3-ideal-label': 'Catégories que nous pouvons acheter',


/* 渠道伙伴表单 - 法文 */
'channel-submit': 'Envoyer la candidature →',
'channel-country-placeholder': '-- Sélectionner le pays --',
'procurement-country-placeholder': '-- Sélectionner le pays --',
'sales-submit': 'Envoyer la candidature →',
'channel-label-company': 'Nom de l\'entreprise *',
'channel-label-contact': 'Personne à contacter *',

'channel-label-country': 'Pays *',
'channel-label-email': 'E-mail *',
'channel-label-website': 'Site web',
'channel-label-businesstype': "Type d'activité *",
'channel-label-products': 'Quelles catégories de produits vendez-vous actuellement ? *',
'channel-label-interested': 'Produits chinois qui vous intéressent *',
'channel-label-channels': 'Disposez-vous de canaux de vente/magasins existants ?',
'channel-label-cooperation': 'Comment souhaitez-vous coopérer ?',
'channel-footer': 'Nous répondrons sous 48 heures. Vos informations sont confidentielles.',
'channel-businesstype-wholesale': 'Grossiste/Distributeur',
'channel-businesstype-retail': 'Détaillant',
'channel-businesstype-engineering': 'Ingénierie/Contractant projet',
'channel-businesstype-ecommerce': 'E-commerce',
'channel-businesstype-other': 'Autre',
'channel-channels-yes': 'Oui',
'channel-channels-developing': 'En développement',
'channel-channels-no': 'Pas encore',
'channel-company-placeholder': 'ex. ABC Distribution',
'channel-contact-placeholder': 'Jean Dupont',
'channel-email-placeholder': 'contact@company.com',
'channel-website-placeholder': 'https://www.company.com',
'channel-products-placeholder': 'ex. outils de quincaillerie, éclairage',
'channel-interested-placeholder': 'ex. batteries de stockage d\'énergie, équipement de salle de bain',
'channel-cooperation-placeholder': 'ex. distribution, OEM, coopération de projet',

'businesstype-placeholder': 'Veuillez sélectionner...',
'channels-placeholder': 'Veuillez sélectionner...',

/* 采购需求表单 - 法文 */
'procurement-label-company': 'Nom de l\'entreprise *',
'procurement-label-contact': 'Personne à contacter *',
'procurement-label-country': 'Pays *',
'procurement-label-email': 'E-mail *',
'procurement-label-products': 'Quels produits devez-vous acheter ? *',
'procurement-label-application': 'Application',
'procurement-label-industry': "Secteur d'intérêt",
'procurement-label-volume': 'Volume/fréquence d\'achat estimé',
'procurement-label-requirements': 'Exigences pour les fournisseurs',
'procurement-submit': 'Soumettre la demande →',
'procurement-footer': 'Nous répondrons sous 48 heures. Vos informations sont confidentielles.',
'procurement-industry-cnc': 'CNC/Usinage',
'procurement-industry-electronics': 'Composants électroniques',
'procurement-industry-energy': 'Énergies nouvelles (stockage/solaire)',
'procurement-industry-building': 'Matériaux de construction',
'procurement-industry-bathroom': 'Salle de bain',
'procurement-industry-other': 'Autre',
'procurement-company-placeholder': 'ex. ABC Manufacturing',
'procurement-contact-placeholder': 'Jean Dupont',
'procurement-email-placeholder': 'purchase@company.com',
'procurement-products-placeholder': 'ex. pièces de précision CNC, composants électroniques',
'procurement-application-placeholder': 'ex. pour assemblage interne, support de ligne de production',
'procurement-volume-placeholder': 'ex. 1 conteneur par mois, 500K € d\'achat annuel',
'procurement-requirements-placeholder': 'ex. Certification CE requise, petites quantités acceptées',

};
}

/* 2. Inject FR into the existing BLOCKS dictionary */
if (typeof BLOCKS !== 'undefined') {
  BLOCKS['sec-con-title']['fr'] = 'L\'ancienne approche<br><em>ne fonctionne plus</em>';
  BLOCKS['cc-old-items']['fr'] = `
    <div class="cc-item"><span class="cc-icon">⚠️</span><span class="cc-text">Frais de plateforme de 60 000 à 100 000 ¥/an en hausse constante, pour des prospects de moins en moins qualifiés</span></div>
    <div class="cc-item"><span class="cc-icon">⚠️</span><span class="cc-text">Les salons se terminent sans suivi — les relations acheteurs ne se développent jamais</span></div>
    <div class="cc-item"><span class="cc-icon">⚠️</span><span class="cc-text">Les règles des plateformes changent en permanence, exigeant toujours plus de mises à niveau payantes</span></div>
    <div class="cc-item"><span class="cc-icon">⚠️</span><span class="cc-text">Aucune présence locale — les acheteurs étrangers ne peuvent rencontrer personne, la confiance est impossible à établir</span></div>`;
  BLOCKS['cc-new-items']['fr'] = `
    <div class="cc-item"><span class="cc-icon">✅</span><span class="cc-text">Une équipe locale proactive développe activement des clients pour vous, chaque jour</span></div>
    <div class="cc-item"><span class="cc-icon">✅</span><span class="cc-text">Vous possédez votre propre canal de vente — indépendant des règles de toute plateforme</span></div>
    <div class="cc-item"><span class="cc-icon">✅</span><span class="cc-text">Le même visage local bâtit des relations durables avec les acheteurs — la confiance s\'accumule dans le temps</span></div>
    <div class="cc-item"><span class="cc-icon">✅</span><span class="cc-text">Présence locale — les acheteurs peuvent rencontrer, appeler et s\'appuyer sur votre représentant à proximité</span></div>`;
  BLOCKS['cap1-desc']['fr'] = 'Nous recrutons, formons et gérons des commerciaux locaux dédiés sur votre marché cible. Ils représentent votre marque — parlent la langue locale, comprennent la culture, bâtissent de vraies relations.';
  BLOCKS['cap2-desc']['fr'] = 'Nous construisons votre réseau de distribution — identification et intégration de distributeurs, intégrateurs système et acheteurs techniques pour générer des commandes récurrentes.';
  BLOCKS['cap3-desc']['fr'] = 'Du zéro au premier client — exécution complète : listes de prospects, stratégie de prospection, aide à la proposition et coordination des commandes. Vous vous concentrez sur la production ; nous gérons l\'entrée sur le marché.';
  BLOCKS['caps-title']['fr'] = 'Un système.<br><em>Trois compétences clés.</em>';
  BLOCKS['caps-sub']['fr'] = 'Nous nous concentrons uniquement sur la partie commerciale — mise en place d\'équipe locale, développement des canaux et exécution de l\'entrée sur le marché. Pas de certification. Pas de logistique. Pas de paperasse.';

  BLOCKS['ind-title']['fr'] = 'Conçu pour les fabricants chinois<br>dotés d\'<em>avantages produit réels</em>';
  BLOCKS['ind-sub']['fr'] = 'Nous nous concentrons sur les secteurs où la Chine détient de véritables avantages mondiaux et où une expertise technique approfondie est indispensable pour vendre efficacement.';
  BLOCKS['ind1-items']['fr'] = `
    <div class="ind-item"><span class="ind-dot"></span><span>Pièces de précision CNC</span></div>
    <div class="ind-item"><span class="ind-dot"></span><span>Composants électroniques</span></div>
    <div class="ind-item"><span class="ind-dot"></span><span>Équipements & composants énergies nouvelles</span></div>`;
  BLOCKS['ind1-footer']['fr'] = 'Secteur prioritaire — Développement actif';
  BLOCKS['ind2-items']['fr'] = `
    <div class="ind-item"><span class="ind-dot"></span><span>Matériaux de construction & décoration</span></div>
    <div class="ind-item"><span class="ind-dot"></span><span>Sanitaires & robinetterie</span></div>
    <div class="ind-item"><span class="ind-dot"></span><span>Maisons modulaires & systèmes de jardin</span></div>`;
  BLOCKS['ind2-footer']['fr'] = 'Secteur prioritaire — Développement actif';
  BLOCKS['obs-tags']['fr'] = `<span class="obs-tag">Automatisation industrielle</span><span class="obs-tag">Équipements médicaux</span><span class="obs-tag">Technologies agricoles</span><span class="obs-tag">Votre secteur ? Contactez-nous →</span>`;
  BLOCKS['sol-prev-title']['fr'] = 'Chaque fabricant qui s\'internationalise<br><em>rencontre ces défis</em>';
  BLOCKS['sol1-desc']['fr'] = 'Des frais annuels toujours plus élevés pour des résultats toujours moins bons. Nous vous aidons à construire un canal de vente direct et autonome — un actif qu\'aucune plateforme ne peut vous retirer.';
  BLOCKS['sol2-desc']['fr'] = 'Les acheteurs étrangers ont besoin de quelqu\'un qu\'ils peuvent rencontrer. Nous sommes sur place — parlant leur langue, travaillant dans leur fuseau horaire, bâtissant de vraies relations en votre nom.';
  BLOCKS['sol3-desc']['fr'] = 'Les grands comptes ne sourcent pas via des plateformes. Ils ont besoin de confiance durable, de contacts locaux et de relations professionnelles — que nous construisons pour vous.';
  BLOCKS['trust-title']['fr'] = '20 ans d\'<em>expérience B2B mondiale</em>';
  BLOCKS['trust-sub']['fr'] = 'Steve Kim a passé 20 ans à construire de véritables ponts commerciaux entre la Chine et les marchés mondiaux — pas en théorie, mais en dirigeant de vraies entreprises avec de vrais résultats financiers.';
  BLOCKS['tp1-desc']['fr'] = 'A fondé et dirigé une société commerciale dans 8 pays européens — rentable de manière consécutive pendant 15 ans. Il sait exactement ce qu\'il faut pour bâtir un business durable à l\'étranger depuis zéro.';
  BLOCKS['tp2-desc']['fr'] = 'Licence en ingénierie à SCUT + MBA à l\'ESLSCA Paris. Il comprend les procédés de fabrication et le langage technique — aussi à l\'aise pour discuter de specs avec des ingénieurs que de modèles économiques avec des décideurs.';
  BLOCKS['tp3-desc']['fr'] = 'Carrière chez Samsung Corporation et EDF Group (SICAME). Anciens clients : Flextronics, Delta Electronics, Lite-On Technology et Siliconware.';
  BLOCKS['f-bio']['fr'] = 'Licence SCUT · MBA ESLSCA Paris · Samsung · Groupe EDF · 8 pays européens · 15 ans rentables · Shenzhen & Paris';
  BLOCKS['hcta-title']['fr'] = 'Prêt à arrêter<br><em>d\'attendre les acheteurs ?</em>';
  BLOCKS['hcta-sub']['fr'] = 'Chaque mois passé sur une plateforme, vos concurrents bâtissent des relations directes avec des clients.<br>Parlons de la construction de votre propre canal.';
  BLOCKS['hcta-btn1']['fr'] = 'Voir notre modèle →';
  BLOCKS['hcta-btn2']['fr'] = 'Nous contacter →';
  BLOCKS['mod-h1']['fr'] = 'Trois parties.<br><em>Un système.</em>';
  BLOCKS['mod-sub']['fr'] = 'NOLVO n\'est pas un intermédiaire ni une plateforme. Nous sommes votre partenaire opérationnel à l\'étranger — responsable de la constitution de l\'équipe, de la gestion des performances et du développement des clients.<br>Rôles clairs. Limites claires. Zéro ambiguïté.';
  BLOCKS['roles-title']['fr'] = 'Trois parties.<br><em>Des responsabilités claires.</em>';
  BLOCKS['rc1-items']['fr'] = `
    <div class="rc-item"><span class="rb"></span><span>Fournir produits, tarifs et support technique</span></div>
    <div class="rc-item"><span class="rb"></span><span>Garantir la qualité des produits et les délais de livraison</span></div>
    <div class="rc-item"><span class="rb"></span><span>Confirmer la direction stratégique et les marchés cibles</span></div>
    <div class="rc-item"><span class="rb"></span><span>Financer le salaire de l\'équipe locale via séquestre</span></div>
    <div class="rc-item"><span class="rb"></span><span>Payer les frais de gestion NOLVO selon l\'accord</span></div>`;
  BLOCKS['rc2-items']['fr'] = `
    <div class="rc-item"><span class="rb"></span><span>Recruter et sélectionner les candidats commerciaux locaux</span></div>
    <div class="rc-item"><span class="rb"></span><span>Former et gérer les performances au quotidien</span></div>
    <div class="rc-item"><span class="rb"></span><span>Gestion du séquestre salarial et conformité</span></div>
    <div class="rc-item"><span class="rb"></span><span>Construire la boîte à outils commerciale et la stratégie de ciblage</span></div>
    <div class="rc-item"><span class="rb"></span><span>Coordination et référencement inter-usines</span></div>
    <div class="rc-item"><span class="rb"></span><span>Reporting régulier à l\'usine</span></div>`;
  BLOCKS['rc3-items']['fr'] = `
    <div class="rc-item"><span class="rb"></span><span>Prospection active et développement des clients</span></div>
    <div class="rc-item"><span class="rb"></span><span>Développement du réseau de distribution et des canaux</span></div>
    <div class="rc-item"><span class="rb"></span><span>Visites clients et gestion des relations</span></div>
    <div class="rc-item"><span class="rb"></span><span>Coordination SAV et suivi</span></div>
    <div class="rc-item"><span class="rb"></span><span>Collecte et remontée des informations marché</span></div>`;
  BLOCKS['steps-title']['fr'] = 'Quatre étapes —<br>Du lancement à la <em>mise à l\'échelle</em>';
  BLOCKS['sc1']['fr'] = ['Recruter', 'En fonction de votre secteur et de votre marché cible, nous sourceons et sélectionnons les meilleurs candidats commerciaux locaux. Première liste restreinte généralement sous 2 à 4 semaines.'];
  BLOCKS['sc2']['fr'] = ['Construire', 'Nous construisons la boîte à outils commerciale : scripts, supports, listes de prospects et stratégie de canal. Le partenaire local est formé et briefé sur vos produits et votre positionnement.'];
  BLOCKS['sc3']['fr'] = ['Exécuter', 'La prospection active commence. NOLVO suit les KPI et les progrès chaque semaine. Rapports réguliers à l\'usine. Les problèmes sont détectés et résolus rapidement.'];
  BLOCKS['sc4']['fr'] = ['Développer', 'Après le premier client remporté, nous reproduisons le modèle — en élargissant l\'équipe, en approfondissant les canaux et en affinant la stratégie sur la base de données marché réelles.'];
  BLOCKS['scope-title']['fr'] = 'Ce que nous faisons —<br><em>Et ce que nous ne faisons pas</em>';
  BLOCKS['scope-yes-items']['fr'] = `
    <div class="scc-item"><span class="scc-mark">→</span><span>Recrutement et gestion quotidienne de l\'équipe de vente locale</span></div>
    <div class="scc-item"><span class="scc-mark">→</span><span>Développement du canal de vente (distributeurs, intégrateurs)</span></div>
    <div class="scc-item"><span class="scc-mark">→</span><span>Gestion de la relation client et suivi après-vente</span></div>
    <div class="scc-item"><span class="scc-mark">→</span><span>Suivi des KPI et reporting régulier</span></div>
    <div class="scc-item"><span class="scc-mark">→</span><span>Coordination et référencement des commandes inter-usines</span></div>
    <div class="scc-item"><span class="scc-mark">→</span><span>Gestion du séquestre salarial et des paiements conformes</span></div>`;
  BLOCKS['scope-no-items']['fr'] = `
    <div class="scc-item"><span class="scc-mark">✗</span><span>Certification produit (CE, UL, etc.)</span></div>
    <div class="scc-item"><span class="scc-mark">✗</span><span>Transport, logistique et documents douaniers</span></div>
    <div class="scc-item"><span class="scc-mark">✗</span><span>R&D produit ou conseils de conception</span></div>
    <div class="scc-item"><span class="scc-mark">✗</span><span>Audit financier ou conseil juridique</span></div>
    <div class="scc-item"><span class="scc-mark">✗</span><span>Engagements de volume de commandes ou de chiffre d\'affaires garanti</span></div>`;
  BLOCKS['fit-title']['fr'] = 'Ce modèle est-il<br><em>adapté à votre usine ?</em>';
  BLOCKS['fit-yes-items']['fr'] = `
    <div class="fc-item"><span class="fc-mark">◆</span><span>Dispose d\'une expérience à l\'export mais manque de capacité de vente proactive à l\'étranger</span></div>
    <div class="fc-item"><span class="fc-mark">◆</span><span>Présent sur des plateformes (Alibaba, etc.) avec des résultats en baisse</span></div>
    <div class="fc-item"><span class="fc-mark">◆</span><span>Prêt à financer le salaire d\'un commercial local dédié</span></div>
    <div class="fc-item"><span class="fc-mark">◆</span><span>Accorde à l\'équipe à l\'étranger une autonomie suffisante pour opérer</span></div>
    <div class="fc-item"><span class="fc-mark">◆</span><span>Évalue les résultats sur un horizon de 6 à 12 mois</span></div>
    <div class="fc-item"><span class="fc-mark">◆</span><span>Souhaite construire son propre canal de vente à l\'étranger</span></div>`;
  BLOCKS['fit-no-items']['fr'] = `
    <div class="fc-item"><span class="fc-mark">✗</span><span>S\'attend à ce que NOLVO préfinance tous les coûts sans engagement de l\'usine</span></div>
    <div class="fc-item"><span class="fc-mark">✗</span><span>Attend des commandes significatives en moins d\'un mois</span></div>
    <div class="fc-item"><span class="fc-mark">✗</span><span>Produits sans expérience export ni emballage international</span></div>
    <div class="fc-item"><span class="fc-mark">✗</span><span>Incapable de fournir un support technique rapide à l\'équipe locale</span></div>`;
  BLOCKS['mcta-title']['fr'] = 'Prêt à <em>commencer ?</em>';
  BLOCKS['mcta-sub']['fr'] = 'Chaque projet est adapté à votre secteur, votre marché cible et votre profil d\'usine.<br>Contactez-nous pour une évaluation initiale — nous répondons généralement sous 48 heures.';
  BLOCKS['par-h1']['fr'] = 'Rejoignez le<br><em>Réseau NOLVO</em>';
  BLOCKS['par-sub']['fr'] = 'Nous construisons un réseau mondial de commerciaux locaux, d\'entreprises de distribution et de partenaires achats. Si vous avez les bonnes ressources et la motivation, travaillons ensemble.';
  BLOCKS['pt-lbl']['fr'] = 'Qui nous recherchons';
  BLOCKS['pt-title']['fr'] = 'Trois types de <em>partenariat</em>';
  BLOCKS['ptc1-desc']['fr'] = 'Vous êtes un professionnel de la vente avec des connexions sectorielles sur votre marché local. Vous souhaitez représenter des fabricants chinois de qualité et percevoir des commissions sur les affaires conclues.';
  BLOCKS['ptc1-ideal']['fr'] = `· Expérience en vente industrielle (fabrication, B2B)<br>· Relations existantes avec des acheteurs dans votre région<br>· Maîtrise de la langue locale + anglais des affaires<br>· Autonome, orienté résultats`;
  BLOCKS['ptc2-desc']['fr'] = 'Votre entreprise dispose d\'un réseau commercial établi dans les secteurs industriel, construction ou énergie. Vous recherchez de solides fournisseurs chinois pour élargir votre offre produits.';
  BLOCKS['ptc2-ideal']['fr'] = `· Distributeur ou société commerciale établi<br>· Actif dans le CNC, l\'électronique, l\'énergie ou les matériaux de construction<br>· Base clients existante en Europe, Amériques ou Asie-Pacifique<br>· Ouvert aux arrangements exclusifs ou semi-exclusifs`;
  BLOCKS['ptc3-desc']['fr'] = 'Vous êtes un fabricant ou une société d\'ingénierie à l\'étranger cherchant à s\'approvisionner en composants de qualité en Chine. Soumettez vos besoins et nous identifierons le bon fournisseur.';
  BLOCKS['ptc3-ideal']['fr'] = `· Pièces de précision CNC (5 axes, tolérances serrées)<br>· Composants et assemblages électroniques<br>· Composants pour systèmes d\'énergies nouvelles<br>· Matériaux de construction et produits sanitaires`;
  BLOCKS['pb-lbl']['fr'] = 'Avantages partenaires';
  BLOCKS['pb-title']['fr'] = 'Ce que vous gagnez en<br><em>rejoignant le réseau NOLVO</em>';
  BLOCKS['pb1']['fr'] = ['Accès à des fabricants chinois vérifiés', 'Nous gérons la qualification des usines à votre place. Chaque fabricant de notre réseau est évalué pour la qualité, la fiabilité et la capacité d\'exportation.'];
  BLOCKS['pb2']['fr'] = ['Support complet de NOLVO', 'Vous n\'êtes pas seul. NOLVO fournit des outils de vente, une formation produit, une aide à la proposition et un suivi continu pour maximiser votre taux de succès.'];
  BLOCKS['pb3']['fr'] = ['Structure de commission transparente', 'Commission claire et équitable sur chaque affaire conclue. Notre mécanisme de référencement inter-usines vous permet de percevoir des commissions même quand votre fournisseur principal ne peut pas répondre à la demande.'];
  BLOCKS['pb4']['fr'] = ['Gamme de produits multi-secteurs', 'À mesure que le réseau NOLVO s\'élargit, votre portefeuille produits aussi — des pièces CNC aux composants énergies nouvelles en passant par les matériaux de construction.'];
  BLOCKS['pb5']['fr'] = ['Processus d\'intégration structuré', 'Nous investissons dans votre succès. Chaque nouveau partenaire bénéficie d\'une intégration structurée — positionnement marché, ciblage clients, approche commerciale.'];
  BLOCKS['pb6']['fr'] = ['Réponse rapide depuis la Chine', 'Steve coordonne directement avec les usines en chinois. Devis, échantillons et questions techniques traités rapidement pour que vous répondiez toujours avec assurance à vos clients.'];
  BLOCKS['cov-title']['fr'] = 'Nous construisons un réseau<br>sur <em>tous les marchés clés</em>';
  BLOCKS['cov-sub']['fr'] = 'Priorité actuelle à l\'Europe — avec l\'Amérique du Nord, l\'Asie-Pacifique et le Moyen-Orient en développement actif.';
  BLOCKS['region-tags']['fr'] = `<span class="rt">🇫🇷 France</span><span class="rt">🇩🇪 Allemagne</span><span class="rt">🇬🇧 Royaume-Uni</span><span class="rt">🇳🇱 Pays-Bas</span><span class="rt">🇮🇹 Italie</span><span class="rt">🇪🇸 Espagne</span><span class="rt">🇵🇱 Pologne</span><span class="rt">🇧🇪 Belgique</span><span class="rt">🇺🇸 États-Unis</span><span class="rt">🇨🇦 Canada</span><span class="rt">🇦🇺 Australie</span><span class="rt">🇯🇵 Japon</span><span class="rt">🇰🇷 Corée du Sud</span><span class="rt">🇸🇬 Singapour</span><span class="rt">Plus de régions →</span>`;
  BLOCKS['pcta-title']['fr'] = '<em>Prêt à rejoindre ?</em>';
  BLOCKS['pcta-sub']['fr'] = 'Sélectionnez le type de partenariat ci-dessus, ou contactez directement Steve Kim pour discuter de la manière dont nous pouvons travailler ensemble.';
  BLOCKS['pcta-btn1']['fr'] = 'Candidater comme représentant →';
  BLOCKS['pcta-btn2']['fr'] = 'Contacter Steve Kim →';
  BLOCKS['m1-sub']['fr'] = 'Enregistrez vos coordonnées et vos besoins d\'expansion à l\'étranger. Nous vous contacterons sous 48 heures.';
  BLOCKS['m2-sub']['fr'] = 'Partagez votre parcours, votre marché et votre expérience sectorielle. Nous prendrons contact pour discuter des prochaines étapes.';
  BLOCKS['m3-sub']['fr'] = 'Parlez-nous de votre entreprise, de votre secteur et de vos canaux existants. Nous évaluerons la compatibilité du partenariat.';
  BLOCKS['m4-sub']['fr'] = 'Dites-nous ce que vous souhaitez sourcer en Chine et nous identifierons le bon fournisseur sous 48 heures.';
  BLOCKS['m-ph-text-1']['fr'] = 'Formulaire d\'inscription bientôt disponible.<br>Pour l\'instant, écrivez-nous directement :<br><br><strong>stevekim@nolvocn.com</strong><br>+86 135 1009 8017 (WeChat / WhatsApp)';
  BLOCKS['m-ph-text-2']['fr'] = 'Formulaire de candidature bientôt disponible.<br>Écrivez-nous directement :<br><br><strong>stevekim@nolvocn.com</strong><br>Objet : Candidature représentant — [Nom] — [Pays]';
  BLOCKS['m-ph-text-3']['fr'] = 'Formulaire de candidature bientôt disponible.<br>Écrivez-nous directement :<br><br><strong>stevekim@nolvocn.com</strong><br>Objet : Partenariat canal — [Société] — [Pays]';
  BLOCKS['m-ph-text-4']['fr'] = 'Formulaire de demande bientôt disponible.<br>Écrivez-nous directement :<br><br><strong>stevekim@nolvocn.com</strong><br>Objet : Demande d\'achat — [Type de produit] — [Pays]';
  BLOCKS['cs-sol-title']['fr'] = 'Page<br><em>Solutions</em>';
  BLOCKS['cs-sol-sub']['fr'] = 'Nous développons nos pages Solutions — couvrant l\'Indépendance des plateformes, la Vente & SAV locaux, et la Conquête des grands comptes.<br><br>En attendant, contactez-nous directement.';
  BLOCKS['cs-sol-btn1']['fr'] = 'Voir notre modèle →';
  BLOCKS['cs-sol-btn2']['fr'] = 'Nous contacter';
  BLOCKS['cs-con-title']['fr'] = 'Nous<br><em>Contacter</em>';
  BLOCKS['cs-con-sub']['fr'] = 'Page de contact complète bientôt disponible.<br>Contactez-nous directement :';
  BLOCKS['cs-con-email-lbl']['fr'] = 'E-mail';
  BLOCKS['cs-con-phone-lbl']['fr'] = 'Téléphone / WeChat / WhatsApp';
  BLOCKS['cs-con-loc-lbl']['fr'] = 'Bureaux';
  BLOCKS['cs-con-loc-val']['fr'] = 'Shenzhen, Chine · Paris, France';
}



console.log('NOLVO FR patch loaded successfully.');
