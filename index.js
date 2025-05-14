// kroppsvikten i kg / (kroppslängden i meter * kroppslängden i meter) 
// Resultat från formeln delas in i olika viktklasser.

// BMI	Klassificering
// < 18,5	Undervikt
// 18,5 – 25	Normalvikt
// 25 – 30	Övervikt
// 30 >	Fetma

// STEG 1: en funktion som tar in kroppsvikt och kroppslängd
function calcBMI(weight, length) {
    // STEG 2: gå igenom formeln och returnera summan
    const BMI = weight / (length * length);
    // STEG 3: Jämföra summan (BMI) med de olika BMI-klassificeringarna
    if (BMI < 18.5) {
        console.log("Ditt BMI " + BMI.toFixed(2) + " räknas som undervikt.")
    } else if (BMI >= 18.5 && BMI < 25 ) {
        console.log("Ditt BMI " + BMI.toFixed(2) + " räknas som normalvikt.")
    } else if (BMI >= 25 && BMI < 30) {
        console.log("Ditt BMI " + BMI.toFixed(2) + " räknas som övervikt.")
    } else if (BMI >= 30) {
        console.log("Ditt BMI " + BMI.toFixed(2) + " räknas som fetma.")
    }
};

calcBMI(158, "230");
