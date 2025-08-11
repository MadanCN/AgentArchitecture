// This is your first JavaScript file!
console.log("AI Agent Builder is loading...");

// Get form elements
const agentForm = document.getElementById('agentForm');
const agentPreview = document.getElementById('agentPreview');
const agentDisplay = document.getElementById('agentDisplay');

// Handle form submission
agentForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Stop form from refreshing page
    
    // Get form values
    const agentName = document.getElementById('agentName').value;
    const agentPersonality = document.getElementById('agentPersonality').value;
    const agentInstructions = document.getElementById('agentInstructions').value;
    
    // Create agent object
    const newAgent = {
        name: agentName,
        personality: agentPersonality,
        instructions: agentInstructions,
        createdAt: new Date().toLocaleString()
    };
    
    // Display the agent
    displayAgent(newAgent);
    
    // Show success message
    alert(`Agent "${agentName}" created successfully!`);
});

// Function to display agent
function displayAgent(agent) {
    agentDisplay.innerHTML = `
        <div style="border: 2px solid #667eea; padding: 20px; border-radius: 10px;">
            <h3>${agent.name}</h3>
            <p><strong>Personality:</strong> ${agent.personality}</p>
            <p><strong>Instructions:</strong> ${agent.instructions}</p>
            <p><strong>Created:</strong> ${agent.createdAt}</p>
        </div>
    `;
    
    agentPreview.style.display = 'block';
}

// Welcome message when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log("Welcome to AI Agent Builder!");
});
