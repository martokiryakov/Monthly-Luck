// Array of quotes
const quotes = [
"30% love, 40% health, 60% happiness, 70% money. It's a great time to prioritize your well-being and pursue financial opportunitiesness",
"20% love, 70% health, 80% happiness, 50% money. Focus on nurturing your relationships while maintaining a healthy lifestyle for increased happiness",
"40% love, 60% health, 30% happiness, 90% money. Invest your energy into financial endeavors while taking care of your physical well-being",
"50% love, 20% health, 70% happiness, 40% money. Prioritize cultivating loving relationships and finding joy in the simple things",
"10% love, 80% health, 50% happiness, 60% money. Concentrate on self-care and maintaining good health while exploring financial opportunities",
"70% love, 30% health, 20% happiness, 80% money. Dedicate time to nurturing your relationships while keeping an eye on potential financial gains",
"30% love, 60% health, 40% happiness, 50% money. Strive for a balanced lifestyle by focusing on both your relationships and physical well-being",
"60% love, 40% health, 50% happiness, 30% money. Embrace the love in your life and find joy in the little things while being mindful of financial matters",
"40% love, 50% health, 80% happiness, 20% money. Prioritize your emotional well-being and seek happiness while also considering financial stability",
"50% love, 70% health, 60% happiness, 90% money. Take care of your body and pursue financial goals, while also nurturing your relationships and finding joy",
];

// Function to generate a random quote
function generateQuote() {
  // Select a random quote from the array
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  
  // Update the quote text in the HTML
  const quoteElement = document.getElementById("quote");
  quoteElement.textContent = randomQuote;
}

// Attach event listener to the button
const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", generateQuote);