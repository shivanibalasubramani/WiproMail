function generateResponse() {
    const prompt = document.getElementById("prompt").value;
    fetchAIResponse(prompt);
}

function fetchAIResponse(prompt) {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint URL
    const apiEndpoint = 'https://www.rankedcollege.com/request-letter-to-bank-manager-for-loan/';
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = 'YOUR_API_KEY';

    // Prepare the data to be sent to the API
    const data = {
        prompt: prompt,
        api_key: apiKey
    };

    // Make a POST request to the API
    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        // Display the AI's response on the webpage
        const responseElement = document.getElementById("response");
        responseElement.textContent = result.response;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
