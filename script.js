function calculateFertilizer() {
    // Get input values
    const ph = parseFloat(document.getElementById('ph').value);
    const n = parseFloat(document.getElementById('nitrogen').value);
    const p  = parseFloat(document.getElementById('p').value);
    const k = parseFloat(document.getElementById('k').value);
    const c = parseFloat(document.getElementById('c').value);
    const b = parseFloat(document.getElementById('b').value);
    const fe = parseFloat(document.getElementById('fe').value);
    const mn = parseFloat(document.getElementById('mn').value);
    const zn = parseFloat(document.getElementById('zn').value);
    const mo = parseFloat(document.getElementById('mo').value);
    const cu = parseFloat(document.getElementById('cu').value);
    const cl = parseFloat(document.getElementById('cl').value);
    const s = parseFloat(document.getElementById('s').value);
    const ca = parseFloat(document.getElementById('ca').value);
    const na = parseFloat(document.getElementById('na').value);
    const mg = parseFloat(document.getElementById('mg').value);
    const area = parseFloat(document.getElementById('area').value);
    // Determine soil type
    let soilType;
    if (ph < 5.5) {
        soilType = 'acidic';
    } else if (ph >= 6.3 && ph <= 7.7) {
        soilType = 'neutral';
    } else {
        soilType = 'alkaline';
    }
    // Fertilizer recommendations
    let recommendations = '';

    if (soilType === 'acidic') {
        if (n < 120) {
            recommendations += `For Nitrogen (N): Use Ammonium Sulphate. Required: ${(120*area)/0.21} kg<br>`;
        }
        if (p < 60) {
            recommendations += `For Phosphate (P): Use Diammonium Phosphate (DAP). Required: ${(60*area)/0.46} kg<br>`;
        }
        if (k < 50) {
            recommendations += `For Potassium (K): Use Potassium Chloride. Required: ${(50*area)/0.60} kg<br>`;
        }
        if (c < 3) {
            recommendations += `For Carbon (C): Use Compost (Organic Matter). Required: ${(3*area)/0.21} kg<br>`;
        }
        if (b < 2) {
            recommendations += `For Boron (B): Use Borax. Required: ${(2*area)/0.11} kg<br>`;
        }
        if (fe < 5) {
            recommendations += `For Iron (Fe): Use Ferrous Sulphate. Required: ${(5*area)/0.20} kg<br>`;
        }
        if (mn < 5) {
            recommendations += `For Manganese (Mn): Use Zinc Sulphate. Required: ${(5*area)/0.31} kg<br>`;
        }
        if (zn < 3) {
            recommendations += `For Zinc (Zn): Use Ammonium Molubdate. Required: ${(3*area)/0.35} kg<br>`;
        }
        if (mo < 0.25) {
            recommendations += `For Molybdenum (Mo): Use Ammonium Molybdate. Required: ${(0.25*area)/0.54} kg<br>`;
        }
        if (cu< 2) {
            recommendations += `For Copper (Cu): Use Copper Chloride. Required: ${(2*area)/0.25} kg<br>`;
        }
        if (cl < 25) {
            recommendations += `For Chloride (Cl): Use Magnesium Sulphate. Required: ${(25*area)/0.30} kg<br>`;
        }
        if (s < 20) {
            recommendations += `For Sulphur (S): Use Ammonium Sulphate. Required: ${(20*area)/0.24} kg<br>`; 
        }
        if (ca < 500) {
            recommendations += `For Calcium (Ca): Use Gypsum. Required: ${(500*area)/0.25} kg<br>`;
        }
        if (na < 50) {
            recommendations += `For Sodium (Na): Use Sodium Nitrate. Required: ${(50*area)/0.16} kg<br>`;
        }
        if (mg < 40) {
            recommendations += `For Magnesium (Mg): Use Magnesium Sulphate. Required: ${(40*area)/0.10} kg<br>`;
        }
    
        // Add more nutrient recommendations as needed
    } else if (soilType === 'neutral') {
        if (n < 110) {
            recommendations += `For Nitrogen (N): Use Urea. Required: ${(110*area)/0.46} kg<br>`;
        }
        if (p < 50) {
            recommendations += `For Phosphate (P): Use Monoamonium Phosphate. Required: ${(50*area)/0.20} kg<br>`;
        }
        if (k < 40) {
            recommendations += `For Potassium (K): Use Potassium Chloride. Required: ${(40*area)/0.55} kg<br>`;
        }
        if (c < 1) {
            recommendations += `For Carbon (C): Use humic Acid. Required: ${(1*area)/0.75} kg<br>`;
        }
        if (b < 2) {
            recommendations += `For Boron (B): Use Sodium Tetraborate. Required: ${(2*area)/0.20} kg<br>`;
        }
        if (fe < 2.5) {
            recommendations += `For Iron (Fe): Use Iron Oxide. Required: ${(2.5*area)/0.30} kg<br>`;
        }
        if (mn < 4) {
            recommendations += `For Manganese (Mn): Use MAnganese Sulphate. Required: ${(4*area)/0.24} kg<br>`;
        }
        if (zn < 2) {
            recommendations += `For Zinc (Zn): Use Zinc Sulphate. Required: ${(2*area)/0.35} kg<br>`;
        }
        if (mo < 0.3) {
            recommendations += `For Molybdenum (Mo): Use Ammonium Molybdate. Required: ${(0.3*area)/0.54} kg<br>`;
        }
        if (cu < 1) {
            recommendations += `For Copper (Cu): Use Copper Sulphate. Required: ${(1*area)/0.25} kg<br>`;
        }
        if (cl < 20) {
            recommendations += `For Chloride (Cl): Use Ammonium Chloride. Required: ${(20*area)/0.70} kg<br>`;
        }
        if (s < 30) {
            recommendations += `For Sulphur (S): Use Ammonium Sulphate. Required: ${(30*area)/0.2} kg<br>`; 
        }
        if (ca < 500) {
            recommendations += `For Calcium (Ca): Use Gypsum. Required: ${(500*area)/0.25} kg<br>`;
        }
        if (na < 4) {
            recommendations += `For Sodium (Na): Use Sodium Sulphate. Required: ${(4*area)/0.21} kg<br>`;
        }
        if (mg < 30){
            recommendations += `For Magnesium (Mg): Use Magnesium Sulphate. Required: ${(30*area)/0.16} kg<br>`;
        }
        // Add more nutrient recommendations as needed
    } else if (soilType === 'alkaline') {
        if (n < 110) {
            recommendations += `For Nitrogen (N): Use Urea. Required: ${(110*area)/0.46} kg<br>`;
        }
        if (p < 50) {
            recommendations += `For Phosphate (P): Use Triple Super Phosphate (TSP). Required: ${(50*area)/0.20} kg<br>`;
        }
        if (k < 40) {
            recommendations += `For Potassium (K): Use Potassium Chloride. Required: ${(40*area)/0.55} kg<br>`;
        }
        if (c < 25) {
            recommendations += `For Carbon (C): Use Compost/MAnure/Peat Mass. Required: ${(25*area)/0.21} kg<br>`;
        }
        if (b < 2) {
            recommendations += `For Boron (B): Use Sodium Tetraborate. Required: ${(2*area)/0.20} kg<br>`;
        }
        if (fe < 2.5) {
            recommendations += `For Iron (Fe): Use Iron Sulphate. Required: ${(2.5*area)/0.20} kg<br>`;
        }
        if (mn < 2.5) {
            recommendations += `For Manganese (Mn): Use Manganese Sulphate. Required: ${(2.5*area)/0.31} kg<br>`;
        }
        if (zn < 3) {
            recommendations += `For Zinc (Zn): Use Zinc Sulphate. Required: ${(3*area)/0.35} kg<br>`;
        }
        if (mo < 1.5) {
            recommendations += `For Molybdenum (Mo): Use Ammonium Molybdate. Required: ${(1.5*area)/0.54} kg<br>`;
        }
        if (cu < 2) {
            recommendations += `For Copper (Cu): Use Copper Sulphate. Required: ${(2*area)/0.25} kg<br>`;
        }
        if (cl < 15) {
            recommendations += `For Chloride (Cl): Use Calcium Chloride. Required: ${(15*area)/0.35} kg<br>`;
        }
        if (s < 25) {
            recommendations += `For Sulphur (S): Use Elemental Sulphur (Slow Release). Required: ${(25*area)/0.90} kg<br>`; 
        }
        if (ca < 250) {
            recommendations += `For Calcium (Ca): Use Limesode. Required: ${(250*area)/0.20} kg<br>`;
        }
        if (na < 35) {
            recommendations += `For Sodium (Na): Use Sodium Nitrate. Required: ${(35*area)/0.16} kg<br>`;
        }
        if (mg < 45) {
            recommendations += `For Magnesium (Mg): Use Magnesium Sulphate. Required: ${(45*area)/0.15} kg<br>`;
        }
        // Add more nutrient recommendations as needed
    }

    // Display results
    document.getElementById('results').innerHTML = `<h2>Fertilizer Recommendations for ${soilType.charAt(0).toUpperCase() + soilType.slice(1)} Soil</h2>${recommendations}`;
}
