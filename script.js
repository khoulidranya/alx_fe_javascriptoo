// Check for the existence of required files
function checkFileExistence() {
  console.log(document.getElementById('quoteDisplay') ? "quoteDisplay div exists." : "quoteDisplay div is missing.");
  console.log(document.getElementById('newQuote') ? "Show New Quote button exists." : "Show New Quote button is missing.");
}

// Check for the existence of the quotes array
function checkQuotesArray() {
  if (Array.isArray(quotes)) {
    console.log("Quotes array exists.");
    const isCorrectStructure = quotes.every(quote => 
      typeof quote.text === "string" && typeof quote.category === "string"
    );
    console.log(isCorrectStructure ? "Quotes array has correct structure." : "Quotes array is incorrectly structured.");
  } else {
    console.log("Quotes array is missing.");
  }
}

// Check for the displayRandomQuote function
function checkDisplayRandomQuoteFunction() {
  if (typeof showRandomQuote === "function") {
    console.log("showRandomQuote function exists.");

    // Check if the function selects a random quote and updates the DOM
    const initialContent = document.getElementById('quoteDisplay').textContent;
    showRandomQuote();
    const updatedContent = document.getElementById('quoteDisplay').textContent;

    if (initialContent !== updatedContent) {
      console.log("showRandomQuote function updates the DOM with a new quote.");
    } else {
      console.log("showRandomQuote function does not update the DOM.");
    }
  } else {
    console.log("showRandomQuote function is missing.");
  }
}

// Check for the addQuote function
function checkAddQuoteFunction() {
  if (typeof addQuote === "function") {
    console.log("addQuote function exists.");

    // Check if a new quote can be added to the array and the DOM is updated
    const initialLength = quotes.length;
    addQuote();
    const updatedLength = quotes.length;

    if (updatedLength > initialLength) {
      console.log("addQuote function successfully adds a new quote.");
    } else {
      console.log("addQuote function does not add a new quote.");
    }
  } else {
    console.log("addQuote function is missing.");
  }
}

// Check for event listener on the "Show New Quote" button
function checkEventListener() {
  const button = document.getElementById('newQuote');
  const eventListeners = getEventListeners(button);
  const hasClickListener = eventListeners && eventListeners.click;

  console.log(hasClickListener ? "Event listener is attached to the 'Show New Quote' button." : "Event listener is missing on the 'Show New Quote' button.");
}

// Run all checks
checkFileExistence();
checkQuotesArray();
checkDisplayRandomQuoteFunction();
checkAddQuoteFunction();
checkEventListener();
