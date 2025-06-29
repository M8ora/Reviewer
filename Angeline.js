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
        }
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

    [10, 20, 30].forEach(num => {
        if (questionCount >= num) {
            const btn = document.createElement("button");
            btn.innerText = `${num} Questions`;
            btn.onclick = () => startQuiz(num);
            btnContainer.appendChild(btn);
        }
    });

    if (questionCount > 50) {
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

    container.innerHTML += `
        <div class="result-summary">
            <h2>Quiz Completed!</h2>
            <p>Score: ${correctCount} / ${selectedQuestions.length} (${percentage}%)</p>
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
