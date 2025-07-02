const questionSets = {
    bHem: [
        { 
            question: "Insufficient centrifugation will result in:", 
            choices: ["A false increase in hematocrit (Hct) value", "A false decrease in Hct value", "No effect on Hct value", "All of these options, depending on the patient"], 
            answer: "A false increase in hematocrit (Hct) value",
            explanation: "Insufficient centrifugation <strong> does not </strong> pack down RBCs; <br> therefore, the Hct, which is the volume of packed cells, will increase."
        },
        { 
            question: "Variation in red blood cell (RBC) size observed on the peripheral blood smear is described as:", 
            choices: ["Anisocytosis", "Hypochromia", "Poikilocytosis", "Pleocytosis"], 
            answer: "Anisocytosis",
            explanation: "A mature erythrocyte is approximately <strong>7–8 μm indiameter</strong>. <br> Variation in normal size is denoted by the term <strong> anisocytosis </strong>.<br> <strong>Hypochromia</strong> is a term that indicates <strong>increased central pallor in erythrocytes</strong>, <br> and <strong>poikilocytosis</strong> denotes variation in <strong>red cell shape.</strong>"
        },
        { 
            question: "Which of the following is the preferable site forbone marrow aspiration and biopsy in an adult?", 
            choices: ["Iliac crest", "Sternum", "Tibia", "Spinous processes of a vertebra"], 
            answer: "Iliac crest",
            explanation: "The <strong>iliac crest</strong> is the most frequently used site for bone marrow aspiration and biopsy.<br> This site is the <strong>safest and most easily accessible</strong>, with the bone just beneath the skin, and neither blood vessels nor nerves are in the vicinity."
        },
        { 
            question: "Mean cell volume (MCV) is calculated using the following formula:", 
            choices: ["(Hgb ÷ RBC) × 10", "(Hct ÷ RBC) × 10", "(Hct ÷ Hgb) × 100", "(Hgb ÷ RBC) × 100"], 
            answer: "(Hct ÷ RBC) × 10",
            explanation: "MCV is the average <strong> “volume” </strong>of the red cells. <br> This is obtained by dividing the Hct or packed cell volume<strong>(PCV)</strong> by the red blood cell <strong>(RBC)</strong> count in millions per microliter of blood and multiplying by 10. The MCV is expressed in <strong>cubic microns (μm&sup3;)</strong> or <strong>femtoliters (fL)</strong>."
        },
        { 
            question: "What term describes the change in shape of erythrocytes seen on a Wright’s-stained peripheral blood smear?", 
            choices: ["Poikilocytosis", "Anisocytosis", "Hypochromia", "Polychromasia"], 
            answer: "Poikilocytosis",
            explanation: "Variation in shape of the erythrocytes on a peripheral blood smear is <strong>poikilocytosis</strong>. <br><strong>Anisocytosis</strong> refers to a change in size.<br> <strong>Hypochromia</strong> is an increase in central pallor in erythrocytes.<br> <strong>Polychromasia</strong> describes the <strong>bluish tinge</strong> of the immature erythrocytes(reticulocytes) circulating in the peripheral blood."
        },
        { 
            question: "Calculate the mean cell hemoglobin concentration (MCHC) using the following values:<br>Hgb : 15 g/dL (150 g/L) <br> Hct: 47 mL/dL (0.47) <br> RBC: 4.50 ×106/µL (4.50 ×1012/L).", 
            choices: ["9.5% (.095)", "10.4% (.104)", "31.9% (.319)", "33.3% (.333)"], 
            answer: "31.9% (.319)",
            explanation: "<strong>MCHC</strong> is the average concentration of Hgb in red cells expressed as a percentage. It expresses the ratio of the weight of Hgb to the volume of erythrocytes and is calculated by <br> <strong> dividing Hgb by the Hct</strong>, and then <strong>multiplying by 100</strong>. <br> A decreased MCHC indicates that cells are hypochromic. In this example, <strong><br>(15 ÷ 47) × 100 = 31.9%</strong>. <br> The reference range for <strong>MCHC is 32%–36%."
        },
        { 
            question: "A manual white blood cell (WBC) count was performed. A total of 36 cells were counted in all 9-mm-&sup2; squares of a Neubauer-ruled hemacytometer. A 1:10 dilution was used. What is the WBC count?", 
            choices: ["0.4 × 10&#x2079/L", "2.5 × 10&#x2079/L", "4.0 × 10&#x2079/L", "8.0 × 10&#x2079/L"], 
            answer: "0.4 × 10&#x2079/L",
            explanation: "The formula used for calculating manual cell counts using a hemacytometer is: <br> <strong> Number of cells counted × dilution factor × depth factor (10) divided by the area</strong>. In this example, <br><strong>36 × 10 × 10 = 3600 ÷ 9 = 400/mm&sup3;</strong> or <strong>0.4 × 10&#x2079/L</strong>."
        },
        { 
            question: "When an erythrocyte containing iron granules is stained with Prussian blue, the cell is called a:", 
            choices: ["Spherocyte", "Leptocyte", "Schistocyte", "Siderocyte"], 
            answer: "Siderocyte",
            explanation: "<strong>Siderocytes</strong> are red cells containing iron granules and are visible when stained with <strong>Prussian blue</strong>"
        },
        { 
            question: "A 7.0-mL ethylenediaminetetraacetic acid (EDTA) tube is received in the laboratory containing only 2.0 mL of blood. If the laboratory is using manual techniques, which of the following tests will most likely be erroneous?", 
            choices: ["RBC count", "Hgb", "Hct", "WBC count"], 
            answer: "Hct",
            explanation: "Excessive <strong>anticoagulant</strong> causes <strong>shrinkage of cells</strong>, thus, the <strong>Hct</strong> will be aﬀected. <br> RBC and WBC counts remain the same, as does the Hgb content."
        },
        { 
            question: "A 1:200 dilution of a patient’s sample was made, and 336 RBCs were counted in an area of 0.2 mm&sup2;. What is the RBC count?", 
            choices: ["1.68 × 10&sup1;&sup2;/L", "3.36 × 10&sup1;&sup2;/L", "4.47 × 10&sup1;&sup2;/L", "6.66 × 10&sup1;&sup2;/L"], 
            answer: "3.36 × 10&sup1;&sup2;/L",
            explanation: "RBC count = number of cells counted × dilution factor × depth factor (10), divided by the area. In this example, 336 × 200 × 10 = 672,000 ÷ 0.2 = 3.36 × 106/mm3= 3.36 × 1012/L. <strong><br>RBC count = number of cells counted × dilution factor × depth factor (10), divided by the area</strong>. In this example, <br><strong>336 × 200 × 10 = 672,000 ÷ 0.2 = 3.36 ×10&#x2076/mm&sup3;= 3.36 × 10&sup1;&sup2;/L."
        },
        { 
            question: "What phagocytic cells produce lysozymes that are bacteriocidal?", 
            choices: ["Eosinophils", "Lymphocytes", "Platelets (PLTs)", "Neutrophils"], 
            answer: "Neutrophils",
            explanation: "<strong>Neutrophils</strong> are highly <strong>phagocytic</strong> and release <strong>lysozymes, peroxidase, and pyrogenic proteins</strong>. <br><strong>Eosinophils</strong> migrate to sites where <strong>there is an allergic reaction or parasitic infestation</strong>, releasing <strong>peroxidase, pyrogens</strong>, and other <strong>enzymes</strong>, including an <strong>oxidase</strong> that neutralizes </strong>histamine</strong>. They are poorly phagocytic and do not release lysozyme."
        },
        { 
            question: "If a patient has a reticulocyte count of 7% and Hct of 20%, what is the corrected reticulocyte count?", 
            choices: ["1.4%", "3.1%", "3.5%", "14%"], 
            answer: "3.1%",
            explanation: "In <strong>anemic states</strong>, the reticulocyte percentage is <strong> not a true measure of reticulocyte production</strong>.<br> The following formula must be applied to calculate the corrected (for anemia) reticulocyte count.<br><strong>Corrected reticulocyte count = reticulocytes (%) × Hct ÷ 45, the average normal Hct.<br> In this case, <br><strong>7 × (20 ÷ 45) = 3.1."
        },
        { 
            question: "A decreased osmotic fragility test would be associated with which of the following conditions?", 
            choices: ["Sickle cell anemia", "Hereditary spherocytosis (HS)", "Hemolytic disease of the fetus and newborn", "Acquired hemolytic anemia"], 
            answer: "Sickle cell anemia",
            explanation: "<strong>Osmotic fragility</strong> is <strong>decreased</strong> when numerous <strong>sickle cells</strong> and target cells are present and is increased in the presence of <strong>spherocytes</strong>. <br><strong>Spherocytes</strong> are a prominent feature of <strong> hereditary spherocytosis (HS) </strong>,<br> <strong>hemolytic</strong> disease of the newborn, and acquired hemolytic anemia.<br> <br> The <strong>osmotic fragility test</strong> is <strong>increased</strong> in the presence of <strong>spherocytes</strong>, whereas this test is <strong>decreased</strong> when <strong>sickle cells, target cells, and other poikilocytes are present."
        },
        { 
            question: "What effect would using a buffer at pH 6.0 have on a Wright-stained smear?", 
            choices: ["", "", "", ""], 
            answer: "",
            explanation: ""
        },
        { 
            question: "", 
            choices: ["", "", "", ""], 
            answer: "",
            explanation: ""
        },
        { 
            question: "", 
            choices: ["", "", "", ""], 
            answer: "",
            explanation: ""
        },
        { 
            question: "", 
            choices: ["", "", "", ""], 
            answer: "",
            explanation: ""
        },
        { 
            question: "", 
            choices: ["", "", "", ""], 
            answer: "",
            explanation: ""
        },
        { 
            question: "", 
            choices: ["", "", "", ""], 
            answer: "",
            explanation: ""
        },
        { 
            question: "", 
            choices: ["", "", "", ""], 
            answer: "",
            explanation: ""
        }
    ],
    micro: [
        { 
            question: "The aseptic collection of blood cultures requires that the skin be cleansed with:", 
            choices: ["2% iodine and then 70% alcohol solution", "70% alcohol and then 2% iodine or an iodophor", "70% alcohol and then 95% alcohol", "95% alcohol only"], 
            answer: "70% alcohol and then 2% iodine or an iodophor",
            explanation: "To attain <strong> asepsis </strong> of the skin, <strong>70% alcohol followed by 2% iodine</strong> is used for obtaining blood cultures."
        },
        { 
            question: "When cleansing the skin with alcohol and then iodine for the collection of a blood culture, the iodine (or iodophor) should remain intact on the skin for at least:", 
            choices: ["10 seconds", "30 seconds", "60 seconds", "5 minutes"], 
            answer: "60 seconds",
            explanation: "The iodine should remain on the skin for <strong> 1 minute</strong> because <strong>instant antisepsis does not occur</strong> when cleansing the skin for a blood culture."
        },
        { 
            question: "What is the purpose of adding 0.025% to 0.050% sodium polyanethol sulfonate (SPS) to nutrient broth media for the collection of blood cultures?", 
            choices: ["It inhibits phagocytosis and complement", "It promotes formation of a blood clot", "It enhances growth of anaerobes", "It functions as a preservative"], 
            answer: "It inhibits phagocytosis and complement",
            explanation: "<strong>SPS</strong> is used in most commercial blood culture products because it functions as an anticoagulant and prevents <strong> phagocytosis and complement activation</strong>. <br> In addition, SPS neutralizes <strong> aminoglycoside antibiotics</strong>.<br> Addition of SPS may inhibit some <strong>Neisseria and Peptostreptococcus</strong>, <br>but this can be reversed with 1.2% gelatin."
        },
        { 
            question: "A flexible calcium alginate nasopharyngeal swab is the collection device of choice for recovery of which organism from the nasopharynx?", 
            choices: ["Staphylococcus aureus", "Streptococcus pneumoniae", "Corynebacterium diphtheriae", "Bacteroides fragilis"], 
            answer: "Corynebacterium diphtheriae",
            explanation: "<strong>Diphtheriae</strong> must be recovered from the deep layers of the <strong>pseudomembrane</strong> that forms in the <strong>nasopharyngeal area</strong>.<br> A <strong> flexible calcium alginate nasopharyngeal swab </strong> is the best choice for collecting a specimen from the posterior nares and pharynx."
        },
        { 
            question: "Semisolid transport media, such as Amies, Stuart, or Cary-Blair, are suitable for the transport of swabs for culture of most pathogens except:", 
            choices: ["Neisseria gonorrhoeae", "Enterobacteriaceae", "Campylobacter fetus", "Streptococcus pneumoniae"], 
            answer: "Neisseria gonorrhoeae",
            explanation: "Specimens for culture of <strong> N. gonorrhoeae</strong> are best if plated immediately or transported in a medium containing activated charcoal to absorb inhibitory substances that hinder their recovery from the specimens."
        },
        { 
            question: "Select the method of choice for recovery of anaerobic bacteria from a deep abscess.", 
            choices: ["Cotton fiber swab of the abscess area", "Skin snip of the surface tissue", "Needle aspirate after surface decontamination", "Swab of the scalpel used for débridement"], 
            answer: "Needle aspirate after surface decontamination",
            explanation: "<strong>Anaerobic specimens</strong> are easily contaminated with organisms present on the skin or mucosal surfaces when a swab is used.<br> <strong>Needle aspiration</strong> of an abscess following surface decontamination provides the least exposure to ambient oxygen."
        },
        { 
            question: "Select the primary and differential media of choice for recovery of most fecal pathogens.", 
            choices: ["MacConkey, blood, birdseed, and Campylobacter (Campy) agars", "Hektoen, MacConkey, MacConkey-Sorbitol, Campy blood, colistin–nalidixic acid (CNA) agars; Selenite-F broth (SEL)", "CNA and Christensen urea agars and thioglycollate media", "Blood, Campy, Mueller-Hinton agars, and thioglycollate media"], 
            answer: "Hektoen, MacConkey, MacConkey-Sorbitol, Campy blood, colistin–nalidixic acid (CNA) agars; Selenite-F broth (SEL)",
            explanation: "<strong>Hektoen agar</strong> selectively <strong>isolates pathogenic coliforms</strong>, especially <strong>Salmonella</strong> and <strong>Shigella</strong>.<br> <strong>MacConkey agar</strong> differentiates <strong>lactose fermenters</strong> from <strong>nonfermenters</strong>. <br><strong>MacConkey with sorbitol</strong> isolates <strong>Escherichia coli</strong> 0157:H7.<br> <strong>CNA agar</strong> contains <strong>antibiotics</strong> that <strong>prohibit growth of gram-negative coliforms but not gram-positive cocci</strong>.<br><strong>Campy blood agar</strong> contains the <strong>antibiotics cephalothin, trimethoprim, vancomycin, polymyxin B, </strong> and <strong>amphotericin B </strong>to prevent growth of <strong>Enterobacteriaceae, Pseudomonas spp. </strong>, and <strong>fungi."
        },
        { 
            question: "Select the media of choice for recovery of Vibrio cholerae from a stool specimen.", 
            choices: ["MacConkey agar and thioglycollate media", "Thiosulfate–citrate–bile–sucrose (TCBS) agar and alkaline peptone water (APW) broth", " Blood agar and SEL broth", "CNA agar"], 
            answer: "Thiosulfate–citrate–bile–sucrose (TCBS) agar and alkaline peptone water (APW) broth",
            explanation: "<strong>TCBS agar </strong>is used to grow <strong>V. cholerae</strong>, which appear as <strong>yellow colonies</strong> as a result of the use of both <strong>citrate and sucrose</strong>.<br> <strong>APW </strong>is used <strong>as an enrichment broth</strong> and should be subcultured to TCBS agar for further evaluation of <strong> Vibrio colonies."
        },
        { 
            question: "CNA agar is used primarily for the recovery of:", 
            choices: ["Neisseria species", "Enterobacteriaceae", "Pseudomonas aeruginosa", "Staphylococcus aureus"], 
            answer: "Staphylococcus aureus",
            explanation: "<strong>CNA agar</strong> inhibits the growth of <strong>gram-negative bacteria</strong> and is used to isolate <strong>gram-positive cocci</strong> from specimens.<br>This medium is especially useful for <strong>stool and wound cultures</strong> because these <strong>may contain large numbers of gram-negative rods."
        },
        { 
            question: "In the United States, most blood agar plates are prepared with 5% or 10% red blood cells (RBCs) obtained from:", 
            choices: ["Sheep", "Horses", "Humans", "Dogs"], 
            answer: "Sheep",
            explanation: "<strong>Sheep RBCs</strong> are used in <strong>blood agar plates</strong> because they <strong>are readily available and less inhibitory than cells of other species</strong>.<br> The type of <strong>hemolysis</strong> is determined by the source of RBCs. Sheep RBCs are chosen because of the characteristically <strong>clear hemolysis</strong> produced by <strong>β-hemolytic streptococci, Staphylococcus, </strong> and <strong>other pathogens producing β-hemolysins</strong>.<br> Sheep blood <strong>does not support</strong> the growth of <strong>Haemophilus haemolyticus</strong>, eliminating the possibility of confusing it with<strong> β-hemolytic streptococci</strong> in throat cultures."
        },
        { 
            question: "All of the following are appropriate when attempting to isolate N. gonorrhoeae from a genital specimen except:", 
            choices: ["Transport the genital swab in charcoal transport medium", "Plate the specimen directly on modified Thayer-Martin (MTM) medium", "Plate the specimen directly on New York City or Martin-Lewis agar", "Culture specimens in ambient oxygen at 37°C"], 
            answer: "Culture specimens in ambient oxygen at 37°C",
            explanation: "<strong>MTM, New York City, and Martin-Lewis agars</strong> contain <strong>blood factors</strong> needed to support the growth of <strong>N. gonorrhoeae</strong> as well as <strong>antibiotics</strong> that <strong>prevent growth of normal genital flora</strong>.<br> Cultures must be incubated in <strong>3% to 7% carbon dioxide (CO2 ) at 35°C</strong>.<br> Cultures should be held a minimum of<strong> 48 hours</strong> before being considered <strong>negative."
        },
        { 
            question: "Chocolate agar and MTM agar are used for the recovery of:", 
            choices: ["Haemophilus spp. and Neisseria spp., respectively", "Haemophilus spp. and N. gonorrhoeae, respectively", "Neisseria spp. and Streptococcus spp., respectively", "Streptococcus spp. and Staphylococcus spp., respectively"], 
            answer: "Haemophilus spp. and N. gonorrhoeae, respectively",
            explanation: "<strong>Chocolate agar</strong> provides <strong>X factor (hemin) and V factor (nicotinamide adenine dinucleotide [NAD]) </strong> required for the growth of <strong>Haemophilus spp</strong>.<br> <strong>Thayer-Martin</strong> medium is <strong>a chocolate agar</strong> containing the <strong>antibiotics</strong> that permit isolation of N. gonorrhoeae in specimens containing large numbers of gram-negative bacteria, including <strong> commensal Neisseria spp."
        },
        { 
            question: "Cycloserine–cefoxitin–fructose agar (CCFA) is used for the recovery of:", 
            choices: ["Yersinia enterocolitica", "Yersinia intermedia", "Clostridium perfringens", "Clostridium difficile"], 
            answer: "Clostridium difficile",
            explanation: "<strong>CCFA</strong> is used for <strong>recovery of C. difficile</strong> from stool cultures.<br> <strong>Cycloserine</strong> and <strong>Cefoxitin</strong> inhibit growth of gram-negative coliforms in the stool specimen.<br><strong> C. difficile ferments fructose</strong>, forming acid that, in the presence of <strong>neutral red</strong>, causes the colonies to become <strong>yellow."
        },
        { 
            question: "Deoxycholate agar (DCA) is useful for the isolation of:", 
            choices: ["Enterobacteriaceae", "Enterococcus spp.", "Staphylococcus spp.", "Neisseria spp."], 
            answer: "Enterobacteriaceae",
            explanation: "<strong>DCA</strong> inhibits gram-positive organisms. <strong>N. gonorrhoeae and Neisseria meningitidis</strong> are too fastidious to grow on DCA.<br> <strong>Citrate and deoxycholate salts</strong> inhibit growth of gram-positive bacteria.<br>The media contain <strong>lactose and neutral red</strong>, allowing differentiation of lactose fermenters (pink colonies) from nonfermenters (colorless)."
        },
        { 
            question: "Xylose lysine deoxycholate (XLD) agar is a highly selective medium used for the recovery of which bacteria?", 
            choices: ["Staphylococcus spp. from normal flora", "Yersinia spp. that do not grow on Hektoen agar", "Enterobacteriaceae from gastrointestinal specimens", "Streptococcus spp. from stool cultures"], 
            answer: "Enterobacteriaceae from gastrointestinal specimens",
            explanation: "<strong>XLD agar</strong> is selective for gram-negative coliforms because of a high concentration (0.25%) of deoxycholate, which inhibits gram-positive bacteria.<br> In addition, XLD is differential for <strong>Shigella and Salmonella spp</strong>.<br> The medium contains <strong>xylose, lactose, </strong> and <strong>sucrose</strong>, which are fermented by most normal intestinal coliforms producing yellow colonies.<br> Shigella <strong>does not ferment</strong> the sugars and produces red (or clear) colonies. Salmonella spp. ferment xylose; however, they also decarboxylate lysine in the medium, causing production of<strong> ammonia</strong>.<br> Therefore, Salmonella first appear <strong>yellow but become red</strong>.<br> Some Salmonella produce<strong> hydrogen sulfide (H2S) </strong>from <strong>sodium thiosulfate</strong> and therefore appear as <strong><u>red </u>colonies with <u>black centers."
        },
        { 
            question: "A sheep blood agar plate is used as a primary isolation medium when all of the following organisms are to be recovered from a wound specimen except:", 
            choices: ["β-Hemolytic streptococci and coagulase-positive staphylococci", "Haemophilus influenzae and Haemophilus parainfluenzae", "Proteus spp. and Escherichia coli", "Pseudomonas spp. and Acinetobacter spp."], 
            answer: "Haemophilus influenzae and Haemophilus parainfluenzae",
            explanation: "Both gram-positive <strong>cocci</strong> and gram-negative <strong>bacilli</strong> will grow on <strong>blood agar plates<strong>, but the medium is used in conjunction with a selective medium, such as <strong>CNA agar</strong>, for gram-positive cocci and MacConkey agar for gram-negative bacilli. H. influenzae requires X and V factors, and <strong>H. parainfluenzae</strong> requires <strong>V factor; </strong><br> the primary isolation medium for <strong>Haemophilus is chocolate agar."
        },
        { 
            question: "Prereduced and vitamin K&#x2081-supplemented blood agar plates are recommended isolation media for:", 
            choices: ["Mycobacterium marinum and Mycobacterium avium intracellulare", "Bacteroides, Peptostreptococcus, and Clostridium spp.", "Proteus spp.", "Enterococcus spp."], 
            answer: "Bacteroides, Peptostreptococcus, and Clostridium spp.",
            explanation: "<strong>Anaerobic </strong> culture media <strong>can be prereduced </strong> before sterilization by boiling, saturation with oxygen-free gas, and addition of <strong>cysteine </strong> or other thiol compounds. <br>The <strong>final oxidation reduction potential (Eh) </strong> of the medium should be approximately <strong>–150 mV </strong> to minimize the effects of exposure of organisms to oxygen during <strong>inoculation."
        },
        { 
            question: "Which procedure(s) is (are) appropriate for the diagnosis of Chlamydia spp. infections when using genital specimens?", 
            choices: ["Obtain urethral, cervical swabs and urine specimens placed in transport media for the direct detection of antigen or nucleic acid and/or culture", "Plate onto blood and chocolate agar", "Inoculate into thioglycollate (THIO) broth", "Plate onto MTM agar within 24 hours"], 
            answer: "Obtain urethral, cervical swabs and urine specimens placed in transport media for the direct detection of antigen or nucleic acid and/or culture",
            explanation: "<strong>Chlamydiae</strong> are strict <strong>intracellular organisms</strong> and must be cultured <strong>using living cells</strong> (e.g., <strong>cyclohexamide-treated McCoy cells</strong>).<br><strong>Direct smears</strong> can also be made at the time of culture.<br> <strong>Fluorescein-conjugated monoclonal antibodies</strong> may be used to identify the organisms in infected cells. <br>Cell cultures present limitations but are used if legal situations (e.g., sexual abuse) are implied.<br>Commercially available kits for <strong>antigen detection and nucleic acid amplification and hybridization techniques</strong>, which have been approved by the U.S. Food and Drug Administration (FDA), are not culture methods but appear more reliable for the detection of infection in individuals who are <strong>symptomatic and shedding large numbers of organisms."
        },
        { 
            question: "Specimens for virus culture should be transported in media containing:", 
            choices: ["Antibiotics and 5% sheep blood", "Saline and 5% sheep blood", "22% bovine albumin", "Antibiotics and protein nutrient"], 
            answer: "Antibiotics and protein nutrient",
            explanation: "Media for transporting specimens for virus culture include <strong>Hanks balanced salt</strong> solution with <strong>bovine albumin, Amies media, Stuart transport media, and Leibovitz-Emory media</strong>.<br><br> Media used for transporting specimens for viral culture are similar to those for bacteria with the addition of a nutrient, such as <strong>fetal calf serum</strong> or <strong>albumin</strong>, and<strong> antibiotics<strong>. <br>Specimens <strong>should be refrigerated (not frozen) </strong>after being placed in the transport media until the culture media can be inoculated."
        },
        { 
            question: "Cerebrospinal fluid (CSF) should be cultured immediately, but if delayed, the specimen should be:", 
            choices: ["Refrigerated at 4°C to 6°C", "Frozen at –20°C", "Stored at room temperature for no longer than 24 hours", "Incubated at 37°C and cultured as soon as possible"], 
            answer: "Incubated at 37°C and cultured as soon as possible",
            explanation: "Fastidious organisms, such as <strong>Neisseria </strong> and <strong>Haemophilus </strong>, frequently isolated from the <strong>CSF </strong> of patients with bacterial <strong> meningitis </strong> are preserved by placing the fluid in <strong>3% to 7% CO2 </strong> at <strong>35°C to 37°C </strong> (or at room temperature for no longer than 30 minutes), if the specimen cannot be cultured immediately."
        },
        { 
            question: "The most sensitive method for the detection of β-lactamase in bacteria is by the use of:", 
            choices: ["Chromogenic cephalosporin", "Penicillin", "Oxidase", "Chloramphenicol acetyltransferase"], 
            answer: "Chromogenic cephalosporin",
            explanation: "<strong>β-Lactamase</strong> production by bacteria that are resistant to <strong>penicillin and cephalosporin</strong> is detected using one of these drugs as a <strong>substrate</strong>.<br> <strong>Penicillin</strong> is <strong>hydrolyzed by βlactamase</strong> into <strong>acidic products</strong> that can be detected as a color change by a <strong>pH indicator</strong>.<br> In the <strong>iodometric method</strong>, a disk containing a penicillin–starch substrate <strong>turns blue when a drop of iodine is added</strong>.<br>The most sensitive method of detection is based on the ability of the organism to hydrolyze the β-lactam ring of a <strong>chromogenic cephalosporin</strong> (e.g., nitrocefin), which is used as the substrate.<br> A positive test indicates the organism’s resistance to penicillin, ampicillin, amoxicillin, carbenicillin, mezlocillin, and piperacillin."
        },
        { 
            question: "The breakpoint of an antimicrobial drug refers to:", 
            choices: ["The amount needed to cause bacteriostasis", "A minimum inhibitory concentration (MIC) of 16 µg/mL or greater", "An MIC of 64 µg/mL or greater", "The optimal therapeutic level of drug that is achievable in serum"], 
            answer: "The optimal therapeutic level of drug that is achievable in serum",
            explanation: "The term <strong>breakpoint</strong> refers to an <strong>antimicrobial concentration</strong> in the <u>serum</u> associated with optimal therapy using the customary dosing schedule.<br> An organism is <strong>susceptible</strong> if the <strong>MIC is at or below the breakpoint."
        },
        { 
            question: "Which of the following variables may change the results of an MIC?", 
            choices: ["Inoculum size", "Incubation time", "Growth rate of the bacteria", "All of these options"], 
            answer: "All of these options",
            explanation: "In <strong>vitro </strong>, testing of drugs is reliable if the method is <strong>standardized </strong>. <br>In addition to the first three variables, the <strong>type of media and the stability of antibiotics affect the results </strong> of MIC testing and must be carefully controlled."
        },
        { 
            question: "According to the Kirby-Bauer standard antimicrobial susceptibility testing method, what should be done when interpreting the zone size of a motile, swarming organism, such as a Proteus species?", 
            choices: ["The swarming area should be ignored", "The results of the disk diffusion method are invalid", "The swarming area should be measured as the growth boundary", "The isolate should be retested after diluting to a 0.05 McFarland standard"], 
            answer: "The swarming area should be ignored",
            explanation: "A thin film of growth appearing in the zone area of inhibition around the susceptibility disk <strong>should be ignored when swarming Proteus or other organisms are encountered </strong>. <br>Discontinuous, poor growth or tiny colonies near the end of the zone should also be ignored."
        },
        { 
            question: "Which class of antibiotics is used for the treatment of serious gram-negative infections as well as infections with Mycobacterium tuberculosis?", 
            choices: ["Cephalosporins", "Penicillins", "Tetracyclines", "Aminoglycosides"], 
            answer: "Aminoglycosides",
            explanation: "The <strong>aminoglycoside antibiotics </strong> are <strong>bactericidal agents </strong> that act by <strong>inhibiting protein synthesis </strong>.<br> They show a <strong>low incidence of bacterial resistance </strong> but must be monitored carefully because at <strong>high doses they can cause ototoxicity and nephrotoxicity </strong>. <br>The group includes <strong>amikacin, gentamicin, tobramycin, kanamycin, streptomycin, and spectinomycin <strong>.<br> These drugs are usually administered intravenously or intramuscularly because they are <strong>poorly absorbed from the gastrointestinal tract. </strong>"
        },
        { 
            question: "Select the medium best suited for the recovery of Y. enterocolitica from a patient with gastroenteritis.", 
            choices: ["Hektoen agar", "Cefsulodin–irgasan–novobiocin (CIN) agar", "Blood agar", "Eosin methylene blue agar"], 
            answer: "Cefsulodin–irgasan–novobiocin (CIN) agar",
            explanation: "<strong>CIN agar</strong> inhibits the growth of many organisms from the family <u>Enterobacteriaceae</u>. <strong>Yersinia spp. </strong> are also recovered from <strong>MacConkey and Salmonella-Shigella agars. <br>Y. enterocolitica </strong>are seen as <strong> “bull’s eye” </strong> colonies on CIN agar after <strong>48 hours</strong> at room temperature."
        },
        { 
            question: "A suspected case of plague requires which of the following procedures to confirm Yersinia pestis?", 
            choices: ["Collection of multiple sets of blood culture specimens", "Incubation of blood cultures at both 28°C and 35°C", "Culture aspirates from bubos to MacConkey agar at room temperature", "All of these options"], 
            answer: "All of these options",
            explanation: "<strong>Y. pestis </strong> is on the <u>list of agents of bioterrorism</u>.<br> <strong>Isolation </strong> and <strong>identification </strong> should be performed in a facility with a <strong>Level II or higher biosafety rating </strong>.<br> If there is a high risk of <strong>aerosolizing </strong> the specimen during processing, procedures should be performed under <strong>Level III biosafety </strong>conditions. <strong>Recovery of <u>Y. pestis</u> </strong> is highest if the specimen is cultured within <strong>2 hours of collection."
        },
        { 
            question: "SITUATION: <br> Abdominal pain, fever, vomiting, and nausea prompted an older male to seek medical attention. A watery stool specimen producing no fecal leukocytes or erythrocytes was cultured, and it grew a predominance of gram-negative fermentative bacilli. The colonies were β-hemolytic on blood agar and cream colored on MacConkey agar. The colonies were both oxidase and catalase positive. What is the most likely identification?", 
            choices: ["Aeromonas hydrophilia", "Escherichia coli", "Salmonella spp.", "Shigella spp."], 
            answer: "Aeromonas hydrophilia",
            explanation: "The <strong>oxidase positive test </strong>result rules out the members of the <strong>Enterobacteriaceae family </strong>. <br>Colonies of <strong>A. hydrophilia and Plesiomonas spp. (<u>both oxidase positive</u>) <strong> might be mistaken for Vibrio spp. because all three grow as clear colonies on <strong>MacConkey agar </strong>, are <strong>β-hemolytic on blood agar </strong>, and are <strong>oxidase positive. <br>Aeromonas spp. </strong> will also grow on <strong>CNN agar and mimic Y. enterocolitica </strong> (a member of the <u>Enterobacteriaceae </u>family and <strong>oxidase negative)."
        },
        { 
            question: "SITUATION: <br> Several attendees of a medical conference in the Gulf coast area became ill after frequenting a seafood restaurant. A presumptive identification of V. cholerae was made after stool specimens from several subjects grew clear colonies on MacConkey agar and yellow colonies on TCBS agar. Which key tests would help eliminate Aeromonas and Plesiomonas spp.?", 
            choices: ["Mannitol fermentation, Na+ requirement", "Oxidase, motility", "Oxidase, nitrate", "Hemolysis on blood agar, catalase"], 
            answer: "Mannitol fermentation, Na+ requirement",
            explanation: "All three organisms are positive for <strong>oxidase production and are motile</strong>. <strong>Plesiomonas spp. do not grow on TCBS agar</strong>. <br>Clear colonies on MacConkey agar and yellow colonies on TCBS agar indicate <strong>Vibrio or Aeromonas spp. </strong> <br>However, only Vibrio spp. require <br><strong>Na+ (1% NaCl) </strong> in the medium for growth.",
            image: "images/A1.PNG",
            answerImage: "images/A1.PNG"
        },
        { 
            question: "SITUATION:<br> A group of elementary students became ill after eating undercooked ground beef prepared in the school cafeteria. The suspected pathogen, E. coli serotype 0157:H7, is usually recovered using which of the following media?", 
            choices: ["Xylose lysine deoxycholate agar", "MacConkey agar", "MacConkey agar with sorbitol", "Hektoen agar"], 
            answer: "MacConkey agar with sorbitol",
            explanation: "<strong>E. coli 0157:H7 ferments lactose</strong> and, therefore, appears as <strong>dark pink</strong> colonies on <strong>MacConkey agar</strong>.<br> To differentiate <u>E. coli 0157:H7</u> from <u>normal fecal flora</u>, MacConkey agar with sorbitol is used. E. coli 0157:H7 <strong>does not ferment sorbitol</strong>, and usually are <strong>colorless colonies."
        },
        { 
            question: "Biochemically, Enterobacteriaceae species are gram-negative rods that:", 
            choices: ["Ferment glucose, reduce nitrate to nitrite, and are oxidase negative", "Ferment glucose, produce indophenol oxidase, and form gas", "Ferment lactose and reduce nitrite to nitrogen gas", "Ferment lactose and produce indophenol oxidase"], 
            answer: "Ferment glucose, reduce nitrate to nitrite, and are oxidase negative",
            explanation: "The family <strong>Enterobacteriaceae</strong> consists of more than <strong>100 species</strong> and represents the most commonly encountered <strong>isolates</strong> in clinical specimens.<br> All Enterobacteriaceae species <u>ferment glucose</u>, are <strong>nonsporulating</strong>, and are <strong>oxidase negative</strong> (except for <strong>Plesiomonas shigelloides</strong>, recently added to the family but which is <strong>oxidase positive</strong>).<br>Most Enterobacteriaceae species are <u>motile</u>, but the genera <strong>Shigella</strong> and <strong>Klebsiella</strong> are not."
        },
        { 
            question: "The ortho-nitrophenyl-β-galactopyranoside (ONPG) test is most useful when differentiating:", 
            choices: ["Salmonella spp. from Pseudomonas spp.", "Shigella spp. from some strains of Escherichia coli", "Klebsiella spp. from Enterobacter spp.", "Proteus vulgaris from Salmonella spp."], 
            answer: "Shigella spp. from some strains of Escherichia coli",
            explanation: "The <strong>ONPG test </strong> detects <strong>β-galactosidase </strong> activity and is <u>most useful</u> in distinguishing late <strong>lactose fermenters </strong> from <strong>lactose nonfermenters </strong>.<br> Some strains of E. coli are slow lactose fermenters and may be confused with Shigella spp., which do not ferment lactose.<br> <strong>E. coli are ONPG <u>positive</u> </strong>, whereas <strong>Shigella spp. are ONPG <u>negative. </strong>"
        },
        { 
            question: "The Voges-Proskauer (VP) test detects which end product of glucose fermentation?", 
            choices: ["Acetoin", "Nitrite", "Acetic acid", "Hydrogen sulfide"], 
            answer: "Acetoin",
            explanation: "<strong>Acetoin </strong> or <strong>carbinol </strong>, an <strong><u>end product of glucose fermentation,</u> </strong> is converted to <strong>diacetyl </strong> after the addition of the <strong>VP reagents (β-naphthol and 40% potassium hydroxide [KOH]). </strong><br> <strong>Diacetyl </strong>is seen as a <u>red-to-pink–colored</u> complex."
        },
        { 
            question: "At which pH does the methyl red (MR) test become positive?", 
            choices: ["7.0", "6.0", "6.5", "4.5"], 
            answer: "4.5",
            explanation: "Both <strong>MR</strong> and <strong>VP tests</strong> detect <strong>acid production</strong> from the fermentation of glucose.<br> However, a <strong><u>positive MR test</u></strong> result denotes a more <strong>complete catabolism of glucose</strong> to highly <strong>acidic end products</strong>, such as <strong>formate and acetate</strong>, than occurs with organisms that are VP positive only (e.g., <strong>Klebsiella pneumoniae</strong>)."
        },
        { 
            question: "A positive Simmons citrate test is seen as a:", 
            choices: ["Blue color in the medium after 24 hours of incubation at 35°C", "Red color in the medium after 18 hours of incubation at 35°C", "Yellow color in the medium after 24 hours of incubation at 35°C", "Green color in the medium after 18 hours of incubation at 35°C"], 
            answer: "Blue color in the medium after 24 hours of incubation at 35°C",
            explanation: "The <strong>Simmons citrate test</strong> determines if an <strong>organism can utilize citrate as the sole source of carbon</strong>.<br> The medium turns <u>blue</u>, indicating the <strong>presence of alkaline products</strong>, such as <u>carbonate</u>.<br> <strong>Tubes</strong> are incubated a minimum of <strong>24 hours at 35°C</strong> with a loose cap before reading."
        },
        { 
            question: "In the test for urease production, ammonia reacts to form which product?", 
            choices: ["Ammonium citrate", "Ammonium carbonate", "Ammonium oxalate", "Ammonium nitrate"], 
            answer: "Ammonium carbonate",
            explanation: "The test for <strong>urease production </strong> is based on the ability of the colonies to <strong>hydrolyze urea </strong> in <strong>Stuart broth </strong> or <strong>Christensen agar </strong> to form <u>CO2</u> and <u>ammonia.</u> <br>These products form <strong>ammonium carbonate </strong>, resulting in <strong>alkalinization. <strong><br> This turns the <strong>pH indicator </strong> (phenol red) pink at <strong>pH 8.0."
        },
        { 
            question: "Which of the following reagents is added to detect the production of indole?", 
            choices: ["p-Dimethylaminobenzaldehyde", "Bromcresol purple", "Methyl red", "Cytochrome oxidase"], 
            answer: "p-Dimethylaminobenzaldehyde",
            explanation: "The <strong>indole test </strong> detects the <u>conversion of tryptophan</u> (present in the media) to indole by the <strong>enzyme tryptophanase. <strong><br> Indole is <u>detected by the reaction</u> with the <strong>aldehyde group of p-dimethylaminobenzaldehyde </strong> (the active reagent in <strong>Kovac and Ehrlich reagents </strong>) in <strong>acid </strong>, forming a <u>red complex."
        },
        { 
            question: "Decarboxylation of the amino acids lysine, ornithine, and arginine results in the formation of:", 
            choices: ["Ammonia", "Urea", "Carbonate", "Amines"], 
            answer: "Amines",
            explanation: "Specific <strong>decarboxylases </strong> split <strong>dibasic amino acids (lysine, arginine, </strong> and <strong>ornithine) </strong>, forming <strong><u>alkaline amines </u><strong>. These products turn the <strong>pH indicators </strong> in the medium (<strong>cresol red </strong> and <strong>bromcresol purple </strong>) from <strong>yellow to purple."
        },
        { 
            question: "Lysine iron agar (LIA) showing a purple slant and a blackened butt indicates:", 
            choices: ["Escherichia coli", "Citrobacter spp.", "Salmonella spp.", "Proteus spp."], 
            answer: "Salmonella spp.",
            explanation: "<strong>LIA </strong> is <strong>used as an aid for the identification of Salmonella species. </strong><br> It contains <strong>phenylalanine, lysine, glucose, thiosulfate, ferric ammonium citrate, </strong>and <strong> bromcresol purple. <br> Salmonella spp. </strong> produce <strong>H &#x2082S <strong> from <strong>thiosulfate. </strong><br> This reduces <strong>ferric ammonium citrate </strong>, forming <strong>ferrous sulfate </strong> and <u>causing the butt to blacken.</u><br> <strong>Salmonella </strong> also <strong>decarboxylate lysine </strong> to produce <strong>alkaline amines, </strong> giving the slant its purple color and differentiating it from <strong>Citrobacter spp. </strong>, which are <strong>lysine decarboxylase negative."
        },
        { 
            question: "Putrescine is an alkaline amine product of which bacterial enzyme?", 
            choices: ["Arginine decarboxylase", "Phenylalanine deaminase", "Ornithine decarboxylase", "Lysine decarboxylase"], 
            answer: "Ornithine decarboxylase",
            explanation: "<strong>Putrescine</strong> is the <strong>amine product</strong> of the <strong>decarboxylation</strong> of <strong>ornithine."
        },
        { 
            question: "Which genera are positive for phenylalanine deaminase?", 
            choices: ["Enterobacter, Escherichia, and Salmonella", "Proteus, Escherichia, and Shigella", "Klebsiella and Enterobacter", "Morganella, Providencia, and Proteus"], 
            answer: "Morganella, Providencia, and Proteus",
            explanation: "<strong>Phenylalanine deaminase oxidatively deaminates phenylalanine, </strong> forming <strong>phenylpyruvic acid. </strong><br> When a solution of <strong>ferric chloride</strong> is added, the iron reacts with <strong>phenylpyruvic acid</strong>, forming a <u>green-colored complex.</u> <br><strong>Phenylalanine deaminase</strong> is found in the genera <strong>Morganella, Providencia, </strong> and <strong>Proteus </strong>and is an <u>excellent test</u> to determine if an organism belongs to this group. Rarely, isolates of <strong>Enterobacter</strong> may be <strong>phenylalanine deaminase positive</strong> as well."
        },
        { 
            question: "Kligler iron agar (KIA) differs from triple-sugar iron agar (TSI) in the:", 
            choices: ["Use of sucrose in the medium", "Color reaction denoting production of acid", "Ability to detect H2S production", "Ratio of lactose to glucose"], 
            answer: "Use of sucrose in the medium",
            explanation: "Both <strong>KIA</strong> and <strong>TSI contain</strong> <u>10-fold</u> more <strong>lactose</strong> than <strong>glucose, peptone, </strong> and <strong>phenol red </strong> to detect <strong> acid production (turns yellow) <strong> and <strong>sodium thiosulfate</strong> and <strong>ferrous ammonium sulfate</strong> to detect <u>H&#x2082S</u> production. <br>However, <strong>TSI <u>contains sucrose</u></strong>, and <strong>KIA <u>does not</u>. </strong><br> Organisms fermenting either <strong>sucrose or lactose</strong> will turn the slant of the agar tube yellow.<br Therefore, some organisms (e.g., many species of <strong>Cedecea, Citrobacter, Edwardsiella, and Serratia</strong>) will produce a <u>yellow slant on TSI</u> but <u>a red slant on KIA.</u>"
        },
        { 
            question: "The malonate test is most useful in differentiating which members of the Enterobacteriaceae family?", 
            choices: ["Shigella", "Proteus", "Salmonella subgroups 2, 3 (the former Arizona)", "Serratia"], 
            answer: "Salmonella subgroups 2, 3 (the former Arizona)",
            explanation: "The <strong>malonate test </strong> determines whether an organism can utilize sodium malonate as the sole source of carbon. Malonate is <u>broken down</u>, forming <strong>alkaline metabolites </strong> that raise the <strong>pH </strong> of the <strong>broth above 7.6. </strong><br> This causes <strong>bromthymol blue </strong> to turn from <u>green</u> to <u>deep blue </u> <strong> (Prussian blue). <br>E. coli, Shigella, </strong>and <strong>most Salmonella are malonate negative, </strong> whereas <strong>Enterobacter </strong> and <strong>Salmonella (formerly Arizona) subgroups 2, 3a, and 3b </strong> are <strong>positive.<br> Proteus, Providencia, Serratia, </strong> and <strong>Yersinia are also malonate negative."
        },
        { 
            question: "Which genera of the Enterobacteriaceae family are known to cause diarrhea and are considered enteric pathogens?", 
            choices: ["Enterobacter, Klebsiella, Providencia, and Proteus", "Escherichia, Salmonella, Shigella, and Yersinia", "Pseudomonas, Moraxella, Acinetobacter, and Aeromonas", "Enterobacter, Citrobacter, and Morganella"], 
            answer: "Escherichia, Salmonella, Shigella, and Yersinia",
            explanation: "<strong>Escherichia, Salmonella, Shigella, </strong> and <strong>Yersinia </strong> are responsible for the majority of <strong>enteric diarrhea cases </strong> attributable to the <strong>Enterobacteriaceae family."
        },
        { 
            question: "An isolate of E. coli recovered from the stool of a patient with severe bloody diarrhea should be tested for which sugar before sending it to a reference laboratory for serotyping?", 
            choices: ["Sorbitol (fermentation)", "Sucrose (fermentation)", "Raffinose (fermentation)", "Mannitol (oxidation)"], 
            answer: "Sorbitol (fermentation)",
            explanation: "An <strong>isolate of E. coli </strong> (shiga-like producing toxin of E. coli [<strong>STEC] </strong>) recovered from a stool culture in <strong>hemorrhagic colitis</strong> can be definitely <strong><u>identified only by serotyping.</u> </strong> <br>The isolate is identified as E. coli by the usual <strong>biochemical reactions. </strong><br> The strain of E. coli responsible for hemorrhagic colitis is <u>O157:H7</u> and is <strong>usually negative for sorbitol fermentation. </strong> Colonies of this strain of E. coli appear colorless on <strong>MacConkey agar with sorbitol added."
        },
        { 
            question: "Care must be taken when identifying biochemical isolates of Shigella because serological cross reactions occur with:", 
            choices: ["Escherichia coli", "Salmonella spp.", "Pseudomonas spp.", "Proteus spp."], 
            answer: "Escherichia coli",
            explanation: "<strong>Serological confirmation </strong> of <strong>Shigella isolates </strong> is based on <strong>O antigen typing. </strong><br> If a suspected <strong>Shigella spp. </strong> is serologically typed with <strong>polyvalent sera </strong> before it has been correctly identified biochemically, a <strong>false-positive confirmation </strong>may occur with an <strong>isolate that is E. coli </strong> (i.e., anaerogenic, non–gas-producing, lactose-negative or - delayed, and nonmotile strains).<br> These strains were formerly known as the <strong> Alkalescens-Dispar serotype."
        },
        { 
            question: "Which species of Shigella is most commonly associated with diarrheal disease in the United States?", 
            choices: ["Shigella dysenteriae", "Shigella flexneri", "Shigella boydii", "Shigella sonnei"], 
            answer: "Shigella sonnei",
            explanation: "The <strong>Shigella spp. </strong> are <u>lactose nonfermenters</u> that, for the most part, are biochemically inert and are classified into <strong>serogroups <u>A, B, C,</u> and <u> D </u></strong>as a result of their biochemical similarity.<br><strong> S. sonnei</strong> is the species most often isolated from<strong> diarrhea cases</strong> in the United States.<br> It is more active biochemically than the other species because of<strong> ornithine decarboxylase</strong> and<strong> β-galactosidase </strong>activity.<br> These <strong>enzymes, </strong> found in most strains of S. sonnei, distinguish it from other Shigella species."
        },
        { 
            question: "Which of the following tests best differentiates Shigella species from E. coli?", 
            choices: ["H&#x2082S, VP, citrate, and urease", "Lactose, indole, ONPG, and motility", "Hydrogen sulfide, MR, citrate, and urease", "Gas, citrate, and VP"], 
            answer: "Lactose, indole, ONPG, and motility",
            explanation: "<strong>E. coli, </strong>when <u>positive for lactose</u>, indole, and ONPG, are usually motile.<br> <strong>Shigella species <u>do not ferment lactose</u> or <u>produce indole</u>, lack β-galactosidase, and are nonmotile."
        },
        { 
            question: "Which genera of Enterobacteriaceae are usually nonmotile at 36°C?", 
            choices: ["Shigella, Klebsiella, and Yersinia", "Escherichia, Edwardsiella, and Enterobacter", "Proteus, Providencia, and Salmonella", "Serratia, Morganella, and Hafnia"], 
            answer: "Shigella, Klebsiella, and Yersinia",
            explanation: "<strong>Shigella spp. </strong> and <strong>Klebsiella spp. </strong> are, for the most part,<u> nonmotile.</u> <strong><br>Yersinia</strong> can be <strong>motile at <u>22°C</u></strong> but is <u>nonmotile</u> at <strong>36°C. </strong> <br>Other members of <strong>Enterobacteriaceae</strong> that have been <strong>isolated </strong>from human specimens and are usually <u>nonmotile</u> include <strong>Leminorella, Rahnella, and Tatumella </strong> (considered unusual enteric pathogens)."
        },
        { 
            question: "Fever, abdominal cramping, watery stools, and fluid and electrolyte loss preceded by bloody stools 2 to 3 days before is characteristic of shigellosis but may also result from infection with:", 
            choices: ["Campylobacter spp.", "Salmonella spp.", "Proteus spp.", "Yersinia spp."], 
            answer: "Campylobacter spp.",
            explanation: "<strong>Shigella spp. </strong> and <strong>Campylobacter spp. </strong> are <strong><u>both causes of diarrhea, abdominal pain, fever, </strong> and sometimes vomiting</u>.<strong><br> <strong>Blood</strong> is present in the stools of patients <u>infected</u> with Shigella as a result of <strong>invasion and penetration of the bowel by the organisms. </strong> Young children may also exhibit bloody stools when infected with <strong>Campylobacter."
        },
        { 
            question: "Cold enrichment of feces (incubation at 4°C) in phosphate-buffered saline prior to subculture onto enteric media enhances the recovery of:", 
            choices: ["Enterotoxigenic Escherichia coli", "Salmonella paratyphi", "Hafnia alvei", "Yersinia enterocolitica"], 
            answer: "Yersinia enterocolitica",
            explanation: "<u>Cold enrichment</u> is especially useful when specimens contain large numbers of <strong>normal flora<strong> that are sensitive to prolonged exposure to near-freezing temperature. <br>In addition to <strong>Yersinia, </strong> the technique has been used to enhance recovery of <strong>Listeria monocytogenes</strong> from specimens containing other bacteria."
        },
        {
            question: "Which group of tests, along with colonial morphology on primary media, aids most in the rapid identification of Enterobacteriaceae?", 
            choices: ["MR and VP, urease, and blood agar plate", "Phenylalanine deaminase, urease, and CDC agar plate", "Bacitracin, β-lactamase, and MacConkey agar plate", "Indole, oxidase, MacConkey, and blood agar plates"],
            answer: "Indole, oxidase, MacConkey, and blood agar plates",
            explanation: "<strong>All Enterobacteriaceae species</strong> are <u>oxidase negative</u> (<strong>the exception being Plesiomonas spp.</strong>, which cluster with the genus <strong>Proteus</strong>).<br>Through the use of <strong>nucleic acid–based methods</strong>, oxidase-positive <strong>Plesiomonas</strong> is now included in the family <strong>Enterobacteriaceae</strong>.<br>Because <strong>E. coli</strong> and <strong>Proteus spp.</strong> comprise the majority of the organisms recovered from clinical specimens, they can be initially identified through <strong>rapid testing</strong> without additional overnight testing.<br><strong>E. coli</strong> display a <u>positive indole test</u>, and the <strong>colonial morphology on MacConkey agar</strong> is distinctive, showing <strong>flat, pink (lactose-positive) colonies</strong> with a <u>ring of bile precipitation</u>.<br><strong>Proteus spp.</strong> swarm on <strong>blood agar</strong> and are <u>indole negative</u>.<br>"
        },
        {
            question: "A routine, complete stool culture procedure should include media for the isolation of E. coli O157:H7 as well as:",
            choices: [ "Salmonella, Shigella, Yersinia, Campylobacter, and Staphylococcus aureus", "Vibrio cholerae, Brucella, and Yersinia spp.", "Staphylococcus aureus, group B streptococci, and group D streptococci", "Clostridium difficile, Clostridium perfringens, and Yersinia spp."],
            answer: "Salmonella, Shigella, Yersinia, Campylobacter, and Staphylococcus aureus",
            explanation: "<strong>V. cholerae</strong> and <strong>C. difficile</strong> are usually <u>not included</u> in a routine stool culture.<br>If <strong>Vibrio spp.</strong> are suspected, a <u>special request</u> should be included.<br>Although <strong>MacConkey agar</strong> will support the growth of Vibrio spp., <strong>normal enteric flora</strong> overgrow and occlude these organisms.<br><strong>C. difficile culture</strong> requires <u>special media</u> (e.g., <strong>CCFA</strong>) that inhibit other anaerobic flora and facultative anaerobic flora, and culture should be requested specifically if symptoms warrant.<br><strong>MacConkey agar with sorbitol</strong> will allow the <strong>E. coli O157:H7</strong> to be recovered.<br><strong>Yersinia spp.</strong> can be detected on a <u>regular MacConkey agar plate</u>.<br>"
        },
        {
            question: "Which group of tests best identifies the Morganella and Proteus genera?",
            choices: [ "Motility, urease, and phenylalanine deaminase", "Malonate, glucose fermentation, and deoxyribonuclease (DNase)", "Indole, oxidase, MR, and VP", "Indole, citrate, and urease"],
            answer: "Motility, urease, and phenylalanine deaminase",
            explanation: "<strong>Morganella</strong> and <strong>Proteus spp.</strong> are <u>motile</u>, produce <strong>urease</strong>, and <u>deaminate phenylalanine</u>.<br>"
        },
        {
            question: "Which group of tests best differentiates Enterobacter aerogenes from Edwardsiella tarda?",
            choices: [ "Motility, citrate, and urease", "H₂S production, sucrose fermentation, indole, and VP", "Lysine decarboxylase, urease, and arginine dihydrolase", "Motility, H₂S production, and DNase"],
            answer: "H₂S production, sucrose fermentation, indole, and VP",
            explanation: "<strong>H₂S production:</strong> <u>Edwardsiella tarda</u> is positive (produces hydrogen sulfide), while <strong>Enterobacter aerogenes</strong> is negative.<br><strong>Sucrose fermentation:</strong> <u>Edwardsiella tarda</u> does not ferment sucrose (aligned with its lactose-negative profile), whereas <strong>Enterobacter aerogenes</strong> ferments sucrose.<br><strong>Indole production:</strong> <u>Edwardsiella tarda</u> is indole-positive, but <strong>Enterobacter aerogenes</strong> is indole-negative.<br><strong>VP test:</strong> <u>Edwardsiella tarda</u> is VP-negative, while <strong>Enterobacter aerogenes</strong> is VP-positive.<br><strong>(Motility, citrate, urease):</strong> Both species are <u>motile</u> and <u>urease-negative</u>, leaving only citrate (positive in E. aerogenes, negative in E. tarda) as a differentiator.<br><strong>(Lysine decarboxylase, urease, arginine dihydrolase):</strong> Both species are <u>lysine decarboxylase-positive</u> and <u>urease-negative</u>, with <u>arginine dihydrolase</u> data inconclusive or overlapping.<br><strong>(Motility, H₂S, DNase):</strong> Both are <u>motile</u> and <u>DNase-negative</u>, reducing differentiation to H₂S alone.<br>",
            answerImage: "images/A2.PNG"
        },
        {
            question: "Cronobacter sakazakii (formerly Enterobacter sakazakii) can best be differentiated from Enterobacter cloacae by which of the following characteristics?",
            choices: [ "Yellow pigmentation and negative sorbitol fermentation", "Pink pigmentation and positive arginine dihydrolase", "Yellow pigmentation and positive urease", "H₂S production on TSI"],
            answer: "Yellow pigmentation and negative sorbitol fermentation",
            explanation: "<strong>C. sakazakii</strong> was formerly called a <u>yellow-pigmented E. cloacae</u> and is best differentiated from <strong>E. cloacae</strong> by <u>sorbitol fermentation</u> (95% positive for E. cloacae and 0% for C. sakazakii).<br>In addition, <strong>E. cloacae</strong> is usually positive for <u>urease</u> and <u>malonate</u> (65% and 75%, respectively) and <strong>C. sakazakii</strong> is usually negative (1% and < 20%, respectively).<br>Both are usually <strong>motile</strong> and <u>arginine dihydrolase-positive</u>.<br>"
        },
        {
            question: "Members of the genus Cedecea are best differentiated from Serratia spp. by which test result?",
            choices: [ "Positive motility", "Positive urease", "Positive phenylalanine deaminase", "Negative DNase"],
            answer: "Negative DNase",
            explanation: "<strong>DNase</strong> is <u>not produced</u> by <strong>Cedecea spp.</strong> but <u>is produced</u> (along with <strong>proteinases</strong>) by <strong>Serratia spp.</strong>.<br>Other key differential tests include <strong>lipase</strong> (<u>positive</u> for Cedecea, <u>negative</u> for Serratia) and <strong>gelatin hydrolysis</strong> (<u>negative</u> for Cedecea, <u>positive</u> for Serratia).<br>"
        },
        {
            question: "Which of the following organisms is often confused with the Salmonella species biochemically and on plated media?",
            choices: [ "Escherichia coli", "Citrobacter freundii", "Enterobacter cloacae", "Shigella dysenteriae"],
            answer: "Citrobacter freundii",
            explanation: "<strong>Biochemical differentiation</strong> is essential because <strong>Citrobacter</strong> isolates may give a <u>false-positive</u> result on agglutination testing with <strong>Salmonella grouping sera</strong>.<br><strong>C. freundii</strong> strains, like <strong>Salmonella spp.</strong>, are usually <u>H₂S producers</u> and may be confused with them unless proper biochemical tests are used.<br>Both <strong>C. freundii</strong> and <strong>Salmonella spp.</strong> are <u>adonitol, indole, and malonate negative</u>.<br>However, <strong>C. freundii</strong> is <u>KCN positive</u>, while <strong>Salmonella spp.</strong> are <u>KCN negative</u>.<br><strong>C. freundii</strong> are <u>late lactose fermenters</u> and appear <u>colorless</u> at 24 hours on <strong>MacConkey agar</strong>.<br>"
        },
        {
            question: "A gram-negative rod is recovered from a catheterized urine sample from a nursing home patient. The lactose-negative isolate tested positive for indole, urease, ornithine decarboxylase, and phenylalanine deaminase and negative for H₂S. The most probable identification is:",
            choices: [ "Edwardsiella spp.", "Morganella spp.", "Ewingella spp.", "Shigella spp."],
            answer: "Morganella spp.",
            explanation: "<strong>Morganella spp.</strong> are biochemically similar to <strong>Proteus spp.</strong>, both being <u>lactose negative</u>, <u>motile</u>, and <u>positive for phenylalanine deaminase and urease</u>.<br>However, <strong>Morganella spp.</strong> can be differentiated from <strong>Proteus spp.</strong> based on <strong>H₂S, indole, ornithine decarboxylase,</strong> and <strong>xylose fermentation</strong>.<br><strong>Ewingella spp.</strong> are usually <u>positive (70%)</u> for <strong>lactose fermentation</strong>, whereas the other three genera are <u>lactose negative</u>.<br>"
        },
        {
            question: "Which single test best separates Klebsiella oxytoca from K. pneumoniae?",
            choices: [ "Urease", "Sucrose", "Citrate", "Indole"],
            answer: "Indole",
            explanation: "<strong>K. oxytoca</strong> and <strong>K. pneumoniae</strong> are almost identical biochemically except for the ability to produce <u>indole</u>.<br>Both organisms are <u>nonmotile</u> and usually test <u>positive</u> for <strong>urease, sucrose,</strong> and <strong>citrate</strong>.<br>However, <strong>K. oxytoca</strong> is <u>indole positive</u>, and <strong>K. pneumoniae</strong> is <u>indole negative</u>.<br>"
        },
        {
            question: "Which of the following organisms, found in normal fecal flora, may be mistaken biochemically for the genus Yersinia?",
            choices: [ "Klebsiella spp.", "Proteus spp.", "Escherichia coli", "Enterobacter spp."],
            answer: "Proteus spp.",
            explanation: "<strong>Proteus spp.</strong> are <u>urease positive</u> as are approximately 70% of <strong>Yersinia enterocolitica</strong> isolates.<br>Both organisms are <u>lactose negative</u> and <u>motile</u>.<br>However, <strong>Yersinia</strong> is <u>motile at 22°C</u> and <u>not at 35°C</u> (demonstrated using motility media).<br>"
        },
        {
            question: "Why might it be necessary for both pink (lactose-positive) and colorless (lactose-negative) colonies from an initial stool culture on MacConkey agar to be subcultured and tested further for possible pathogens?",
            choices: [ "Most Shigella strains are lactose positive", "Most Salmonella strains are maltose negative", "Most Proteus spp. are lactose negative", "Pathogenic Escherichia coli can be lactose positive or lactose negative"],
            answer: "Pathogenic Escherichia coli can be lactose positive or lactose negative",
            explanation: "<u>Possible pathogenic strains of E. coli</u> should be picked from <strong>MacConkey agar</strong> and subcultured onto <strong>MacConkey agar with sorbitol</strong>.<br>After subculture, these strains can be <strong>serotyped or sent to a reference laboratory</strong>.<br>Most <strong>E. coli</strong> normal flora ferment <strong>D-sorbitol</strong> and appear <strong>pink to red</strong> on MacConkey–sorbitol agar.<br>The E. coli strain <strong>O157:H7</strong> causes the enteric disease <strong>hemorrhagic colitis</strong>.<br>It ferments <strong>D-sorbitol slowly or not at all</strong> and appears as <strong>colorless colonies</strong> on MacConkey–sorbitol agar.<br>"
        },
        {
            question: "Which agar that is used for routine stool cultures is the medium of choice for the isolation of Yersinia strains from stool specimens?",
            choices: [ "Salmonella–Shigella agar", "Hektoen enteric agar", "MacConkey agar", "CNA agar"],
            answer: "MacConkey agar",
            explanation: "<strong>CIN medium</strong> is the best agar for the isolation of <strong>Yersinia strains</strong> because it <u>inhibits growth of other coliforms</u>, but it is <u>not used routinely</u> in clinical laboratories.<br><strong>Yersinia spp.</strong> grow well on <strong>MacConkey agar</strong> incubated at <u>37°C</u>, but the colonies are <u>much smaller</u> than the other <strong>Enterobacteriaceae</strong> species.<br>Therefore, <u>25°C</u> is the temperature recommended for isolation.<br>Some serotypes of <strong>Yersinia</strong> may be <u>inhibited</u> on more selective media, such as <strong>Salmonella–Shigella</strong> or <strong>Hektoen</strong>.<br><strong>CNA agar</strong> <u>inhibits the growth</u> of gram-negative bacteria.<br>"
        },
        {
            question: "Which organism is sometimes mistaken for Salmonella and will agglutinate in Salmonella polyvalent antiserum?",
            choices: [ "Citrobacter freundii strains", "Proteus mirabilis strains", "Shigella sonnei strains", "Escherichia coli"],
            answer: "Citrobacter freundii strains",
            explanation: "<strong>C. freundii</strong> and <strong>Salmonella spp.</strong> are <u>H₂S positive</u> and <u>indole, VP, and phenylalanine deaminase negative</u>.<br>Biochemical characteristics that help differentiate <strong>C. freundii</strong> from <strong>Salmonella</strong> include <u>lactose fermentation</u> (50% of C. freundii are lactose positive, whereas 100% of Salmonella are lactose negative) and <u>urease production</u> (70% of Citrobacter are positive and >99% of Salmonella are negative).<br>"
        },
        {
            question: "A bloody stool cultured from a 26-year-old woman after 3 days of severe diarrhea showed the following results at 48 hours after being plated on the following media:",
            image: "images/A3.PNG",
            answerImage: "images/A3.PNG",
            choices: [ "Shigella spp.", "Salmonella spp.", "Proteus spp.", "Escherichia coli"],
            answer: "Shigella spp.",
            explanation: "<strong>Shigella</strong> is the most likely organism <u>biochemically</u>.<br><strong>E. coli</strong> are usually <u>indole and motility positive</u>, and <strong>Proteus</strong> are <u>motility and urease positive</u>.<br>Most <strong>Salmonella</strong> are <strong>H₂S positive</strong>.<br><strong>Shigella</strong> and <strong>Campylobacter</strong> cause <u>bloody diarrhea</u> because they <u>invade the epithelial cells</u> of the <strong>large bowel</strong>.<br>However, <strong>Campylobacter spp.</strong> do <u>not grow</u> on MacConkey agar and they are <u>oxidase positive</u>.<br>"
        },
        {
            question: "Which one of the following organisms is generally positive for β-glycosidase (utilizes lactose)?",
            choices: [ "Salmonella spp.", "Shigella spp.", "Proteus spp.", "Escherichia coli"],
            answer: "Escherichia coli",
            explanation: "<strong>Enterobacteriaceae</strong> species are grouped according to their ability to ferment <strong>lactose</strong>, a <u>β-galactoside</u>.<br><strong>Salmonella, Shigella, Proteus, Providencia,</strong> and <strong>Morganella</strong> are usually <u>lactose nonfermenters</u>.<br>Others—including certain strains of <strong>E. coli, S. sonnei, H. alvei, Serratia marcescens,</strong> and some <strong>Yersinia</strong>—appear to be lactose nonfermenters because they lack the <u>permease enzyme</u> that actively transports lactose across the cell membrane.<br>However, true lactose nonfermenters do not possess <u>β-galactosidase</u>.<br>The test for β-galactosidase uses the substrate <strong>o-nitrophenyl-β-galactopyranoside</strong>.<br>At an <strong>alkaline pH</strong>, β-galactosidase hydrolyses the substrate, forming <strong>o-nitrophenol</strong>, which turns the medium <u>yellow</u>.<br>"
        },
        {
            question: "In the Kauffmann-White schema, the combined antigens used for serological identification of the Salmonella spp. are:",
            choices: [ "O antigens", "H antigens", "Vi and H antigens", "O, Vi, and H antigens"],
            answer: "O, Vi, and H antigens",
            explanation: "The <strong>Kauffmann-White schema</strong> groups <strong>Salmonellae</strong> on the basis of the <u>somatic O (heat-stable)</u> antigens and subdivides them into serotypes based on their <u>flagellar H (heat-labile)</u> antigens.<br>The <strong>Vi (or K) antigen</strong> is a <u>capsular polysaccharide</u> that may be removed by heating.<br>In the United States, commercially available slide agglutination tests utilize <strong>polyvalent antisera</strong> (A, B, C-1, C-2, D, E, and Vi) to group the <strong>Salmonella spp.</strong> because <u>95% of isolated organisms belong to groups A through E</u> with the Vi antiserum identifying the capsular or “K” antigen of <strong>Salmonella serotype typhi</strong>.<br><strong>Antiserum</strong> is also used against the <u>flagella (“H”) antigens</u>.<br>If the Vi antigen is positive and the O antigen is negative, the isolate must be <strong>heated in boiling water for 15 minutes</strong> to remove the capsule and retested with the antisera.<br>There are over <strong>2,200 serotypes</strong> of <strong>Salmonella</strong>.<br>"
        },
        {
            question: "The drugs of choice for treatment of infections with Enterobacteriaceae are:",
            choices: [ "Aminoglycosides, sulfamethoxazole-trimethoprim, third-generation cephalosporins", "Ampicillin and nalidixic acid", "Streptomycin and isoniazid (isonicotinylhydrazide [INH])", "Chloramphenicol, ampicillin, and colistin"],
            answer: "Aminoglycosides, sulfamethoxazole-trimethoprim, third-generation cephalosporins",
            explanation: "The drugs of choice for the <strong>Enterobacteriaceae</strong> species vary, and several genera display patterns of <u>resistance</u> that aid in their identification.<br><strong>K. pneumoniae</strong> and <strong>Citrobacter diversus</strong> are resistant to <strong>ampicillin and carbenicillin</strong>.<br>Most <strong>Enterobacter spp.</strong> and <strong>Hafnia</strong> are resistant to <u>ampicillin and cephalothin</u>.<br><strong>Proteus, Morganella,</strong> and <strong>Serratia</strong> are resistant to <u>colistin</u>.<br><strong>Providencia</strong> and <strong>Serratia</strong> are resistant to <u>multiple drugs</u>.<br>Several genera are resistant to <u>chloramphenicol</u> and most are resistant to <u>penicillin</u>.<br>"
        },
        {
            question: "The Shiga-like toxin (verotoxin) is produced mainly by which Enterobacteriaceae species?",
            choices: [ "Klebsiella pneumoniae", "Escherichia coli", "Salmonella typhimurium", "Enterobacter cloacae"],
            answer: "Escherichia coli",
            explanation: "Strains of <strong>E. coli</strong> that produce one or both of the <u>Shiga-like toxins (SLT I and SLT II)</u> can cause <strong>bloody diarrhea (hemorrhagic colitis)</strong>.<br>In the United States, <strong>E. coli strain O157:H7</strong> is the serotype most often associated with <strong>hemorrhagic colitis</strong>.<br>"
        },
        {
            question: "Infections caused by Y. pestis are rare in the United States. Those cases that do occur are most frequently located in which region?",
            choices: [ "New Mexico, Arizona, and California", "Alaska, Oregon, and Utah", "North and South Carolina and Virginia", "Ohio, Michigan, and Indiana"],
            answer: "New Mexico, Arizona, and California",
            explanation: "Approximately <strong>15 cases</strong> of <strong>Y. pestis</strong> infection are confirmed in the United States annually.<br>Most originate in the <u>Southwest</u>.<br>It is necessary to be aware of this <strong>regional occurrence</strong> because <u>untreated cases are associated with a mortality rate of approximately 60%</u>.<br><strong>Y. pestis</strong> is not fastidious and grows well on <u>blood agar</u>.<br>It is <u>inactive biochemically</u>, and this helps differentiate it from other <strong>Enterobacteriaceae</strong> species.<br><strong>Y. pestis</strong> is the <strong>only member</strong> of the <strong>Enterobacteriaceae</strong> family that infects humans via an <u>insect vector</u> (animal transmission by a <strong>flea bite</strong>).<br>"
        },
        {
            question: "A leg culture from a nursing home patient grew gram-negative rods on MacConkey agar as pink to dark pink oxidase-negative colonies.<br>Given the following results, which is the most likely organism?",
            image: "images/A4.PNG",
            answerImage: "images/A4.PNG",
            choices: [ "Serratia marcescens", "Proteus vulgaris", "Enterobacter cloacae", "Klebsiella pneumoniae"],
            answer: "Klebsiella pneumoniae",
            explanation: "<strong>K. pneumoniae</strong> and <strong>E. cloacae</strong> display similar <u>IMViC (indole, MR, VP, and citrate)</u> reactions (00++) and TSI results.<br>However, approximately <strong>65% of E. cloacae</strong> strains are <u>urease positive</u> compared with <strong>98%</strong> of those of <strong>K. pneumoniae</strong>.<br><strong>Enterobacter spp.</strong> are <u>motile</u>, and <strong>Klebsiella</strong> are <u>nonmotile</u>.<br>The <u>antibiotic pattern</u> of <strong>resistance to carbenicillin and ampicillin</strong> is characteristic of the <strong>nonmotile Klebsiella spp.</strong><br>"
        },
        {
            question: "Four blood cultures were taken over a 24-hour period from a 20-year-old woman with severe diarrhea.<br>The cultures grew <strong>motile</strong> (room temperature), <strong>gram-negative rods</strong>.<br>A urine specimen obtained via catheterization also showed <u>gram-negative rods (100,000 col/mL)</u>.<br>Given the following results, which is the most likely organism?",
            image: "images/A5.PNG",
            choices: [ "Proteus vulgaris", "Salmonella typhi", "Yersinia enterocolitica", "Escherichia coli"],
            answer: "Escherichia coli",
            explanation: "Typically, the <strong>IMViC reactions</strong> for the organisms listed are:<br><br><u>Note:</u> Indole reaction is variable (V) for <strong>Y. enterocolitica</strong>.<br>",
            answerImage: "images/A5.1.PNG"
        },
        {
            question: "A stool culture from a 30-year-old man suffering from <u>bloody mucoid diarrhea</u> gave the following results on differential enteric media.<br>Which tests are most appropriate for identification of this enteric pathogen?",
            image: "images/A6.PNG",
            choices: [ "TSI, motility, indole, urease, Shigella typing with polyvalent sera", "TSI, motility, indole, lysine, Salmonella typing with polyvalent sera", "TSI, indole, MR, VP, citrate", "TSI, indole, MR, and urease"],
            answer: "TSI, motility, indole, urease, Shigella typing with polyvalent sera",
            explanation: "The most likely organism is a species of <strong>Shigella</strong>.<br>Typically, <strong>Salmonella spp.</strong> produce <u>H₂S-positive</u> colonies that display <u>black centers</u> on the differential media (except on MacConkey agar).<br>The biochemical tests listed are necessary to differentiate <strong>Shigella</strong> from <strong>E. coli</strong> because some <strong>E. coli</strong> strains <u>cross-react</u> with Shigella-typing sera.<br><strong>Shigella spp.</strong> are one of the most common causes of <strong>bacterial diarrhea</strong>; group D (<strong>S. sonnei</strong>) and group B (<strong>S. flexneri</strong>) are the species most often isolated.<br>",
            answerImage: "images/A6.PNG"
        },
        {
            question: "A leg-wound culture from a hospitalized 70-year-old man with diabetes grew <u>motile, lactose-negative colonies</u> on MacConkey agar.<br>Given the following biochemical reactions at 24 hours, what is the most probable organism?",
            image: "images/A7.PNG",
            answerImage: "images/A7.PNG",
            choices: [ "Proteus vulgaris", "Serratia marcescens", "Proteus mirabilis", "Enterobacter cloacae"],
            answer: "Serratia marcescens",
            explanation: "<strong>S. marcescens</strong> has been implicated in numerous <u>nosocomial infections</u> and is recognized as an important pathogen with <u>invasive properties</u>.<br><u>Gelatin hydrolysis</u> and <u>DNase</u> are positive for both the <strong>Proteus spp.</strong> and <strong>Serratia</strong>, but the <u>negative urease</u> and <u>phenylalanine deaminase</u> are differential.<br><strong>E. cloacae</strong> does not produce <u>DNase, gelatinase,</u> or <u>lysine decarboxylase</u> but will display <strong>red-pigmented colonies</strong> on MacConkey agar.<br>"
        },
        {
            question: "Three blood culture specimens taken from a 30-year-old patient with cancer receiving chemotherapy and admitted with a urinary tract infection (UTI) grew <strong>lactose-negative, motile, gram-negative rods</strong> prior to antibiotic therapy.<br>Given the following biochemical reactions, which is the most likely organism?",
            image: "images/A8.PNG",
            choices: [ "Proteus vulgaris", "Proteus mirabilis", "Serratia marcescens", "Klebsiella pneumoniae"],
            answer: "Proteus vulgaris",
            answerImage: "images/A8.PNG",
            explanation: "Although <strong>P. mirabilis</strong> is more frequently recovered from patients with <u>UTIs</u>, <strong>P. vulgaris</strong> is commonly recovered from <strong><u>immunosuppressed patients</u></strong>.<br><strong>P. mirabilis</strong> is <u>indole negative</u> and <u>ornithine decarboxylase positive</u> but otherwise is very similar to <strong>P. vulgaris</strong>.<br>"
        },
        {
            question: "Three consecutive stool cultures from a 25-year-old male patient produced <u>scant normal fecal flora</u> on <strong>MacConkey and Hektoen agars</strong>.<br>However, colonies on <strong>CIN agar</strong> displayed “<u>bull’s eye</u>” colonies after 48 hours of incubation.<br>The patient had been suffering from <strong>enterocolitis</strong> with <u>fever, diarrhea, and abdominal pain</u> for 2 days.<br>What is the most likely identification of this gram-negative rod?",
            choices: [ "Escherichia coli", "Proteus mirabilis", "Yersinia enterocolitica", "Klebsiella pneumoniae"],
            answer: "Yersinia enterocolitica",
            explanation: "Most members of the <strong>Enterobacteriaceae</strong> family produce detectable growth on <u>MacConkey agar</u> within 24 hours.<br><strong>Y. enterocolitica</strong> produces <u>non–lactose-fermenting colonies</u> on MacConkey agar, <strong>salmon-colored colonies</strong> on Hektoen agar, and <u>yellow or colorless colonies</u> on XLD agar.<br>If <strong>Y. enterocolitica</strong> is suspected, <u>specialized agar (CIN)</u> is employed.<br>The typical “<strong><u>bull’s eye</u></strong>” colonies, dark red with a translucent border, can be confused with <strong>Aeromonas spp.</strong> that appear similarly on CIN agar.<br>To differentiate, an <strong>oxidase test</strong> must be performed because <strong>Yersinia spp.</strong> are <u>oxidase negative</u> and <strong>Aeromonas spp.</strong> are <u>oxidase positive</u>.<br>"
        },
        {
            question: "A 6-year-old female patient was admitted to the hospital following 2 days of <strong>severe diarrhea</strong>.<br>Cultures from three consecutive stool samples contained <u>blood and mucus</u>.<br>Patient history revealed that she had eaten a hamburger at a fast-food restaurant 3 days earlier.<br>Which pathogen is most likely responsible for the following results?<br>Growth on:",
            image: "images/A9.PNG",
            choices: [ "Salmonella spp.", "Shigella spp.", "Escherichia coli O157:H7", "Yersinia enterocolitica"],
            answer: "Escherichia coli O157:H7",
            answerImage: "images/A9.PNG",
            explanation: "<strong>Inflammation with bleeding</strong> of the mucosa of the large intestine (<u>hemorrhagic colitis</u>) is a result of an <strong><u>enterohemorrhagic E. coli (EHEC)</u></strong> infection associated with certain serotypes, such as <strong>E. coli O157:H7</strong>.<br>The source of the <strong>E. coli infection</strong> is from ingestion of <u>undercooked ground beef</u> contaminated with <u>fecal matter</u> or drinking <u>raw milk</u>.<br>"
        },
        {
            question: "Following a 2-week camping trip to the southwest United States, a 65-year-old male patient was hospitalized with a high fever and an <u>inflammatory swelling of the axilla and groin lymph nodes</u>.<br>Several blood cultures were obtained, and cultures showed growth of <strong>gram-negative rods</strong> resembling “<u>closed safety pins</u>.”<br>The organism grew on <strong>MacConkey agar</strong> showing <u>non–lactose-fermenting colonies</u>.<br>Testing demonstrated a <strong>nonmotile rod</strong> that was <u>biochemically inert</u>.<br>What is the most likely pathogen identified?",
            choices: [ "Yersinia pestis", "Klebsiella pneumoniae", "Proteus vulgaris", "Morganella morganii"],
            answer: "Yersinia pestis",
            explanation: "<strong>Y. pestis</strong> is the cause of <strong>bubonic and pneumonic plague</strong>.<br><u>Bubonic plague</u> causes swelling of the groin lymph nodes (bubos), whereas <u>pneumonic plague</u> involves the lungs.<br>The infection caused by bubonic plague may result in <strong><u>fulminant bacteremia</u></strong> that is usually fatal.<br>Transmission is from rodents (rats, ground squirrels, or prairie dogs) to humans by the bite of fleas (<u>vectors</u>) or by ingestion of <u>contaminated animal tissues</u>.<br><u>Pneumonic plague</u> is acquired via the <strong>airborne route</strong> when there is close contact with other pneumonic plague victims.<br>"
        },
        {
            question: "The majority of clinical laboratories with a microbiology department should have the capability of serotyping which pathogenic Enterobacteriaceae species?",
            choices: [ "Yersinia enterocolitica, Shigella spp.", "Escherichia coli O157:H7, Salmonella spp., Shigella spp.", "Yersinia pestis, Salmonella spp.", "Edwardsiella spp., Salmonella spp."],
            answer: "Escherichia coli O157:H7, Salmonella spp., Shigella spp.",
            explanation: "Preliminary <strong><u>serological grouping</u></strong> of the <strong>Salmonella spp.</strong> and <strong>Shigella spp.</strong> should be performed because reliable commercial <u>polyvalent antisera</u> are available.<br><u>Sorbitol-negative</u> (MacConkey agar with sorbitol) colonies of <strong>E. coli</strong> should be tested using antisera for <strong><u>O157</u></strong> and <strong><u>H7</u></strong> antigens.<br><strong>Y. pestis</strong> isolates should be sent to a public health laboratory because <u>clinical labs lack the necessary typing sera</u>.<br>"
        },
        {
            question: "Direct spread of pneumonic plague disease occurs by which route?",
            choices: [ "Fecal–oral route", "Rat bite", "Ingestion of contaminated tissue", "Inhalation of contaminated airborne droplets"],
            answer: "Inhalation of contaminated airborne droplets",
            explanation: "<strong>Bubonic plague</strong> involves an <u>inflammatory swelling of the lymph nodes</u> of the axilla and groin.<br><strong>Pneumonic plague</strong> is associated with an <u>airborne route</u> involving the lungs.<br>Both infections are caused by the same member of the <strong>Enterobacteriaceae family</strong>, <u>Y. pestis</u>.<br>"
        },
        {
            question: "Which isolates of the Enterobacteriaceae family most commonly produce extended-spectrum β-lactamase (ESBL)?",
            choices: [ "Escherichia coli and Klebsiella pneumoniae", "Yersinia enterocolitica and Yersinia pestis", "Morganella morganii and Proteus vulgaris", "Salmonella typhi and Shigella sonnei"],
            answer: "Escherichia coli and Klebsiella pneumoniae",
            explanation: "<u>Point mutations</u> occur in many <strong>Enterobacteriaceae</strong> species resulting in the production of a <strong>β-lactamase</strong> that hydrolyzes <u>broad-spectrum antibiotics</u> such as cephalosporins, penicillin, and monobactams.<br>These are known as <strong><u>ESBL (extended-spectrum β-lactamase) producers</u></strong>.<br>The most common ESBL organisms are <strong>K. pneumoniae</strong> and <strong>E. coli</strong>.<br>Detection involves demonstrating their <u>resistance to β-lactam antibiotics</u>.<br>"
        },
        {
            question: "Additional methods of definitive identification for the Enterobacteriaceae family include which of the following?",
            choices: [ "Matrix-assisted laser desorption ionization time-of-flight mass spectrometry (MALDI-TOF-MS)", "Serodiagnosis", "Nucleic acid–based studies", "All of the above"],
            answer: "All of the above",
            explanation: "<strong>Serotyping</strong> for grouping of <strong>Salmonella spp.</strong>, <strong>Shigella spp.</strong>, and <strong>E. coli O157:H7</strong> using <u>slide agglutination test kits</u> is commonly done by clinical labs.<br><strong>Nucleic acid–based studies</strong> are performed in reference labs when local demand is minimal.<br><strong>MALDI-TOF MS</strong> is used to identify Enterobacteriaceae by analyzing <u>mass spectral peaks</u> (often ribosomal proteins) compared with <strong>16S rRNA gene sequencing</strong>.<br>It uses <u>mass spectral libraries and software</u> for microbial identification.<br>One limitation is that <strong>MALDI-TOF MS</strong> <u>cannot differentiate E. coli from Shigella spp.</u><br>"
        },
        {
            question: "Which of the following Shigella spp. serotypes is the most often isolated in the United States?",
            choices: [ "Serotype A (Shigella dysenteriae)", "Serotype B (Shigella flexneri)", "Serotype C (Shigella boydii)", "Serotype D (Shigella sonnei)"],
            answer: "Serotype D (Shigella sonnei)",
            explanation: "<strong>S. sonnei</strong> (<u>Serotype D</u>) is the <u>most isolated species</u> of <strong>Shigella</strong> in the United States.<br>Humans are the <strong>only reservoirs</strong>.<br>Out of an estimated 500,000 shigellosis cases annually in the U.S., <strong><u>85%</u></strong> are due to <strong>S. sonnei</strong>.<br>This is primarily a <u>pediatric infection</u>, with <strong>60%</strong> occurring in children <u>under 10 years old</u>.<br>"
        },
        {
            question: "Which organism is transmitted by ingesting undercooked ground beef or raw milk resulting in inflammation and bleeding of the mucosa of the large intestine (i.e., hemorrhagic colitis), which can also lead to hemolytic uremic syndrome (HUS)?",
            choices: [ "Escherichia coli (STEC)—Shiga toxin", "Escherichia coli (ETEC)—enterotoxigenic", "Escherichia coli (EAEC)—enteroaggregative", "Proteus mirabilis"],
            answer: "Escherichia coli (STEC)—Shiga toxin",
            explanation: "<strong>E. coli (STEC)</strong> refers to <u>enterohemorrhagic E. coli</u> that produces a toxin similar to the <strong>Shiga toxin</strong> made by <strong>S. dysenteriae</strong>.<br>This toxin causes <strong><u>inflammation</u> and <u>bleeding</u> of the intestinal mucosa</strong> and may lead to <strong><u>HUS</u> (hemolytic uremic syndrome)</strong>.<br>HUS results in <u>low platelet counts</u> and <u>hemolytic anemia</u>, requiring <strong>transfusions, dialysis</strong>, and can lead to <strong>death</strong>.<br>The most common serotypes are <strong>O157:H7</strong> and <strong>O157:NM</strong>.<br>Unlike dysentery, <u>WBCs are usually absent</u> on wet prep of stools.<br>"
        },
        {
            question: "This organism is transmitted by ingesting contaminated fresh water and/or shellfish, resulting in watery, dysentery-like stools and chronic diarrhea. Culture on stool media and initial testing show the following results:",
            image: "images/A10.PNG",
            choices: [ "Proteus vulgaris", "Escherichia coli", "Salmonella spp.", "Plesiomonas shigelloides"],
            answer: "Plesiomonas shigelloides",
            answerImage: "images/A10.PNG",
            explanation: "<strong>P. shigelloides</strong>, a <u>new member</u> of the Enterobacteriaceae family, causes <strong>gastrointestinal infections</strong>.<br>It may <u>cross-react</u> with <strong>Shigella Group D antisera</strong>, leading to <u>misidentification</u>.<br>To avoid this, perform an <strong>oxidase test</strong> first: <strong><u>Shigella = oxidase negative</u></strong>, while <strong><u>Plesiomonas = oxidase positive</u></strong>.<br>"
        },
        {
            question: "What are the most appropriate screening tests to presumptively differentiate and identify the nonfermentative gram-negative bacilli (NFB) from the Enterobacteriaceae species?",
            choices: [ "Catalase, decarboxylation of arginine, growth on blood agar", "Motility, urease, morphology on blood agar", "Oxidase, TSI, nitrate reduction, growth on MacConkey agar", "Oxidase, indole, and growth on blood agar"],
            answer: "Oxidase, TSI, nitrate reduction, growth on MacConkey agar",
            explanation: "<strong>Nonfermentative gram-negative bacilli (NFB)</strong> grow only on the <u>slant</u> of <strong>TSI</strong> without acidifying the butt.<br><strong>NFB</strong> may be <strong>oxidase positive</strong> or <strong>negative</strong>, while <u>most Enterobacteriaceae</u> are <strong>oxidase negative</strong>.<br><strong>Enterobacteriaceae</strong> typically <u>reduce nitrate</u> and <u>grow well on MacConkey</u>, while most <strong>NFB do not</strong>.<br>"
        },
        {
            question: "Presumptive tests used for identification of the Pseudomonas spp. are:",
            choices: [ "Oxidase, oxidation–fermentation (OF) glucose (open), OF glucose (sealed), motility, pigment production", "Growth on blood agar plate (BAP) and eosin–methylene blue (EMB) agars, lysine decarboxylation, catalase", "Growth on MacConkey, EMB, and XLD agars and motility", "Growth on mannitol salt agar and flagellar stain"],
            answer: "Oxidase, oxidation–fermentation (OF) glucose (open), OF glucose (sealed), motility, pigment production",
            explanation: "<strong>Pseudomonas spp.</strong> can be presumptively identified by their <u>oxidative glucose metabolism</u> in OF tubes (open = positive, sealed = negative).<br><strong>P. aeruginosa</strong> produces distinct pigments such as <strong><u>pyoverdin</u></strong> and <strong><u>pyocyanin</u></strong>.<br>Growth at <u>42°C</u> and a <strong>grapelike odor</strong> are also distinguishing traits.<br>"
        },
        {
            question: "Which tests are most appropriate to differentiate between Pseudomonas aeruginosa and Pseudomonas putida?",
            choices: [ "Oxidase, motility, pyoverdin", "Oxidase, motility, lactose", "Oxidase, ONPG, DNase", "Mannitol, nitrate reduction, growth at 42°C"],
            answer: "Mannitol, nitrate reduction, growth at 42°C",
            explanation: "<strong>P. aeruginosa</strong> and <strong>P. putida</strong> are both <u>oxidase positive</u> and produce <strong>pyoverdin</strong>.<br>However, <u>mannitol fermentation</u>, <strong>nitrate reduction</strong>, and <u>growth at 42°C</u> help differentiate them.<br>",
            answerImage: "images/A11.PNG"
        },
        {
            question: "Which test group best differentiates Acinetobacter spp. from P. aeruginosa?",
            choices: [ "Oxidase, motility, nitrate reduction", "MacConkey growth, 37°C growth, catalase", "Blood agar growth, oxidase, catalase", "Oxidase, TSI, MacConkey growth"],
            answer: "Oxidase, motility, nitrate reduction",
            explanation: "<strong>Acinetobacter spp.</strong> are <u>oxidase negative</u>, <u>nonmotile</u>, and usually do not reduce nitrate.<br><strong>P. aeruginosa</strong> is <u>oxidase positive</u>, <u>motile</u>, and reduces nitrate.<br>These traits make this test group most effective for differentiation.<br>"
        },
        {
            question: "In addition to motility, which test best differentiates Acinetobacter spp. and Alcaligenes faecalis?",
            choices: [ "Triple sugar iron agar", "Oxidase", "Urease", "Flagellar stain"],
            answer: "Oxidase",
            explanation: "<strong>Acinetobacter spp.</strong> are <u>oxidase negative</u> and <u>nonmotile</u>.<br><strong>Alcaligenes faecalis</strong> is <u>oxidase positive</u> and <u>motile with peritrichous flagella</u>.<br>Both can grow on MacConkey agar, but oxidase test is the key differentiator.<br>"
        },
        {
            question: "The most noted differences between P. aeruginosa and Stenotrophomonas maltophilia are:",
            choices: [ "Oxidase, catalase, and TSI", "Oxidase, catalase, and ONPG", "Oxidase, 42°C growth, and polar tuft of flagella", "Catalase, TSI, and pigment"],
            answer: "Oxidase, 42°C growth, and polar tuft of flagella",
            explanation: "<strong>P. aeruginosa</strong> is <u>oxidase positive</u>, grows at <u>42°C</u>, and is motile by <u>polar monotrichous flagella</u>.<br><strong>S. maltophilia</strong> is <u>oxidase negative</u>, does not grow at 42°C, and is motile with a <strong><u>polar tuft</u></strong> of flagella.<br>"
        },
        {
            question: "Which nonfermentative bacillus is usually associated with a lung infection related to cystic fibrosis (CF)?",
            choices: [ "Pseudomonas fluorescens", "Pseudomonas aeruginosa", "Pseudomonas putida", "Burkholderia pseudomallei"],
            answer: "Pseudomonas aeruginosa",
            explanation: "<strong>P. aeruginosa</strong> is frequently found in <u>respiratory specimens of CF patients</u>.<br>The <u>mucoid strain</u> produces <strong>alginate</strong>, a thick polysaccharide that complicates identification.<br>"
        },
        {
            question: "A nonfermenter recovered from an eye wound is oxidase positive, motile with polar monotrichous flagella, and grows at 42°C. Colonies are dry, wrinkled or smooth, buff to light brown, and are difficult to remove from the agar. In which DNA homology group should this organism be placed?",
            choices: [ "Pseudomonas stutzeri", "Pseudomonas fluorescens", "Pseudomonas putida", "Burkholderia pseudomallei"],
            answer: "Pseudomonas stutzeri",
            explanation: "<strong>P. stutzeri</strong> produces <u>dry or wrinkled colonies</u> that are <strong>difficult to remove</strong> from the agar.<br>They are <u>buff/light brown</u> due to high cytochrome content.<br><strong>B. pseudomallei</strong> appears similar but differs biochemically.<br>"
        },
        {
            question: "Which organism is associated with immunodeficiency syndromes and melioidosis (a glanders-like disease prevalent in Southeast Asia and northern Australia)?",
            choices: [ "Pseudomonas aeruginosa", "Pseudomonas stutzeri", "Pseudomonas putida", "Burkholderia pseudomallei"],
            answer: "Burkholderia pseudomallei",
            explanation: "<strong>B. pseudomallei</strong> causes <strong>melioidosis</strong>, a disease similar to glanders.<br>It resides in <u>soil and water</u> in Southeast Asia and northern Australia.<br>Infection may remain latent for years, known as the <strong>“Vietnamese time bomb.”</strong><br>"
        },
        {
            question: "Which characteristics/biochemical tests are used to differentiate Burkholderia cepacia from S. maltophilia?",
            choices: [ "Pigment on blood agar, oxidase, DNase", "Pigment on MacConkey agar, flagellar stain, motility", "Glucose, maltose, lysine decarboxylase", "Triple-sugar iron agar, motility, oxidase"],
            answer: "Pigment on blood agar, oxidase, DNase",
            explanation: "<strong>B. cepacia</strong> and <strong>S. maltophilia</strong> both have <u>yellow pigment</u> and <u>polar tuft flagella</u>.<br>However, they differ in <strong>oxidase</strong> and <strong>DNase</strong> reactions.<br>",
            answerImage: "images/A13.PNG"
        },
        {
            question: "The following results were obtained from a pure culture of gram-negative rods recovered from the pulmonary secretions of a 10-year-old cystic fibrosis patient with pneumonia: Which is the most likely organism?",
            choices: [ "Burkholderia pseudomallei", "Pseudomonas stutzeri", "Burkholderia cepacia", "Pseudomonas aeruginosa"],
            answer: "Pseudomonas aeruginosa",
            explanation: "<strong>P. aeruginosa</strong> is supported by <u>oxidase positivity</u>, <strong>growth at 42°C</strong>, and production of red pigment like <u>pyorubin</u>.<br>Commonly isolated in CF patients.<br>",
            image: "images/A12.PNG",
            answerImage: "images/A12.PNG"
        },
        {
            question: "Alcaligenes faecalis (formerly A. odorans) is distinguished from Bordetella bronchiseptica with which test?",
            choices: [ "Urease (rapid)", "Oxidase", "Growth on MacConkey agar", "Motility"],
            answer: "Urease (rapid)",
            explanation: "<strong>B. bronchiseptica</strong> is <u>urease positive</u> (rapid), while <strong>Alcaligenes</strong> is not.<br>Both are <u>oxidase positive</u>, <u>motile</u>, and grow on MacConkey.<br>This makes <strong>urease</strong> the key differentiator.<br>"
        },
        {
            question: "Chryseobacterium spp. are easily distinguished from Acinetobacter spp. by which of the following two tests?",
            choices: [ "Oxidase, growth on MacConkey agar", "Oxidase and OF (glucose)", "TSI and urea hydrolysis", "TSI and VP"],
            answer: "Oxidase, growth on MacConkey agar",
            explanation: "<strong>Chryseobacterium spp.</strong> are <u>oxidase positive</u> and <u>do not grow on MacConkey</u>.<br><strong>Acinetobacter spp.</strong> are <u>oxidase negative</u> and <u>grow well on MacConkey</u>.<br>Both produce yellow pigment and are <u>nonmotile</u>.<br>"
        },
        {
            question: "A gram-negative coccobacillus was recovered on chocolate agar from the CSF of an immunosuppressed patient. The organism was nonmotile and positive for indophenol oxidase but failed to grow on MacConkey agar. The organism was highly susceptible to penicillin. The most probable identification is:",
            choices: [ "Acinetobacter spp.", "Pseudomonas aeruginosa", "Pseudomonas stutzeri", "Moraxella lacunata"],
            answer: "Moraxella lacunata",
            explanation: "<strong><u>Moraxella lacunata</u></strong> is an <u>oxidase-positive</u>, <u>nonmotile</u>, <strong>gram-negative coccobacillus</strong> that typically fails to grow on MacConkey agar.<br>It is <u>highly susceptible to penicillin</u> and known for infecting <strong>immunosuppressed patients</strong>.<br>"
        },
        {
            question: "Cetrimide agar is used as a selective isolation agar for which organism?",
            choices: [ "Acinetobacter spp.", "Pseudomonas aeruginosa", "Moraxella spp.", "Stenotrophomonas maltophilia"],
            answer: "Pseudomonas aeruginosa",
            explanation: "<strong><u>Cetrimide agar</u></strong> is selective for <strong>Pseudomonas aeruginosa</strong> and inhibits most other <u>nonfermenters</u>.<br><u>Colonies</u> typically appear <strong>yellow-green to blue-green</strong> due to pigment production such as <u>pyocyanin</u> and <u>pyoverdin</u>.<br>"
        },
    ]
};

let selectedTopic = 'bHem';
let selectedQuestions = [];
let userAnswers = [];
let currentPage = 0;

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}

document.querySelectorAll(".dropdown > a").forEach(menu => {
    menu.addEventListener("click", function (e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            this.parentElement.classList.toggle("active");
        }
    });
});


function loadQuestions(topic) {
    selectedTopic = topic;
    document.getElementById('setup').style.display = 'block';
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('results-container').style.display = 'none';
    document.getElementById('retry-button').style.display = 'none';

    const questionCount = questionSets[selectedTopic].length;
    const btnContainer = document.getElementById("question-options");
    btnContainer.innerHTML = "";

    [10, 20, 30, 40, 50, 60, 70, 80].forEach(num => {
        if (questionCount >= num) {
            const btn = document.createElement("button");
            btn.innerText = `${num} Questions`;
            btn.onclick = () => startQuiz(num);
            btnContainer.appendChild(btn);
        }
    });

    if (questionCount > 80) {
        const allOutBtn = document.createElement("button");
        allOutBtn.innerText = "All-out";
        allOutBtn.onclick = () => startQuiz(questionCount);
        btnContainer.appendChild(allOutBtn);
    }
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function startQuiz(numQuestions) {
    let questions = [...questionSets[selectedTopic]];
    shuffleArray(questions);
    selectedQuestions = questions.slice(0, numQuestions).map(q => ({
        ...q,
        choices: q.choices ? shuffleArray([...q.choices]) : undefined
    }));
    userAnswers = new Array(numQuestions).fill(null);
    currentPage = 0;
    document.getElementById('setup').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    showPage();
}

function showPage() {
    let container = document.getElementById('questions');
    container.innerHTML = '';

    let start = currentPage * 10;
    let end = Math.min(start + 10, selectedQuestions.length);

    for (let i = start; i < end; i++) {
        let q = selectedQuestions[i];
        let qIndex = i;
        let div = document.createElement('div');
        div.classList.add("question-card");

        let imgHTML = q.image ? `<img src="${q.image}" class="question-image">` : "";
        div.innerHTML = `
            <h3>${qIndex + 1}. ${q.question}</h3>
            ${imgHTML}
        `;

        if (q.choices && Array.isArray(q.choices) && q.choices.length > 0) {
            q.choices.forEach(choice => {
                div.innerHTML += `<label>
                    <input type="radio" name="q${qIndex}" value="${choice}" 
                    ${userAnswers[qIndex] === choice ? 'checked' : ''} 
                    onchange="saveAnswer(${qIndex}, this.value)"> 
                    ${choice}
                </label>`;
            });
        } else {
            div.innerHTML += `
                <input type="text" name="q${qIndex}" value="${userAnswers[qIndex] || ''}" 
                oninput="saveAnswer(${qIndex}, this.value)" placeholder="Type your answer here">
            `;
        }

        container.appendChild(div);
    }

    document.getElementById('prev').style.display = currentPage === 0 ? 'none' : 'inline-block';
    document.getElementById('next').innerText = currentPage === Math.ceil(selectedQuestions.length / 10) - 1 ? "Finish" : "Next";
}

function saveAnswer(index, value) {
    userAnswers[index] = value;
}

function nextPage() {
    if (currentPage < Math.ceil(selectedQuestions.length / 10) - 1) {
        currentPage++;
        showPage();
    } else {
        showResults();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage();
    }
}

function showResults() {
    document.getElementById('quiz-container').style.display = 'none';
    let container = document.getElementById('results-container');
    container.innerHTML = '';

    let correctCount = 0;

    selectedQuestions.forEach((q, i) => {
        if (userAnswers[i] === q.answer) {
            correctCount++;
        }
    });

    let percentage = Math.round((correctCount / selectedQuestions.length) * 100);

    // 🎯 Add custom result message based on score
    let resultMessage = "";
    if (percentage < 50) {
        resultMessage = "Abaaa madaya, sumisilip ng tamang sagot AHAHAHAHA... I Love You Always";
    } else if (percentage >= 50 && percentage < 70) {
        resultMessage = "You can made it poooo!!";
    } else if (percentage >= 70 && percentage < 85) {
        resultMessage = "Niiiceee you're getting there pooo!!";
    } else if (percentage >= 85) {
        resultMessage = "WOW!!! Parang ready na ah. I Love You. May Prize ka sakin SS mo to.";
    }

    container.innerHTML += `
        <div class="result-summary">
            <h2>Quiz Completed!</h2>
            <p>Score: ${correctCount} / ${selectedQuestions.length} (${percentage}%)</p>
            <div class="result-message">${resultMessage}</div>
        </div>
    `;

    selectedQuestions.forEach((q, i) => {
        let userAnswer = userAnswers[i] || '';
        let isCorrect = userAnswer.trim().toLowerCase() === q.answer.trim().toLowerCase();

        container.innerHTML += `
            <div class="result-card">
                <h3>${i + 1}. ${q.question}</h3>
                <p class="your-answer">Your Answer: 
                    <span class="${isCorrect ? 'correct-answer' : 'wrong-answer'}">
                        ${userAnswers[i] || 'No Answer'}
                    </span>
                </p>
                <p>Correct Answer: <span class="correct-answer">${q.answer}</span></p>
                ${q.answerImage ? `<img src="${q.answerImage}" class="answer-image">` : ""}
                ${q.explanation ? `<div class="explanation"><strong>Explanation:</strong> <p>${q.explanation}</p></div>` : ""}
            </div>
        `;
    });

    document.getElementById('results-container').style.display = 'block';
    document.getElementById('retry-button').style.display = 'inline-block';
}
