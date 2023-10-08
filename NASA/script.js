const dropdown = document.getElementById('dropdown');
const content = document.getElementById('content');
const descriptionDiv = document.querySelector('.description'); // Select the description div

// Define the content for each option
const optionContent = {
    option1: {
        inputImage: 'Images/ip1.png',
        outputImage: 'Images/op1.png',
    },
    option2: {
        inputImage: 'Images/ip2.png',
        outputImage: 'Images/op2.png',
    },
    option3: {
        inputImage: 'Images/ip3.png',
        outputImage: 'Images/op3.png',
    },
    option4: {
        inputImage: 'Images/ip4.png',
        outputImage: 'Images/op4.png',
    },
    option5: {
        inputImage: 'Images/ip5.png',
        outputImage: 'Images/op5.png',
    },
    option6: {
        inputImage: 'Images/ip6.png',
        outputImage: 'Images/op6.png',
    },
    option7: {
        inputImage: 'Images/ip7.png',
        outputImage: 'Images/op7.png',
    },
    option8: {
        inputImage: 'Images/ip8.png',
        outputImage: 'Images/op8.png',
    },
    // Add content for other options here
};

// Define the description for each option
const optionDescription = {
    option1: `Class 1 (Color: #00FF00): 49.30%
    Class 4 (Color: #FF00FF): 10.15%
    Class 2 (Color: #0000FF): 3.88%
    Class 6 (Color: #888888): 0.99%
    Class 0 (Color: #FF0000): 18.98%
    Class 5 (Color: #00FFFF): 16.57%
    Class 3 (Color: #FFFF00): 0.13% `,

   option2:`Class 0 (Color: #FF0000): 80.82%
   Class 1 (Color: #00FF00): 14.37%
   Class 3 (Color: #FFFF00): 0.05%
   Class 5 (Color: #00FFFF): 0.54%
   Class 6 (Color: #888888): 0.06%
   Class 2 (Color: #0000FF): 1.97%
   Class 4 (Color: #FF00FF): 2.18%`,

   option3:`Class 0 (Color: #FF0000): 39.80%
   Class 5 (Color: #00FFFF): 24.30%
   Class 2 (Color: #0000FF): 17.46%
   Class 1 (Color: #00FF00): 10.73%
   Class 4 (Color: #FF00FF): 6.13%
   Class 6 (Color: #888888): 1.38%
   Class 3 (Color: #FFFF00): 0.19%`,

   option4:`Class 5 (Color: #00FFFF): 2.10%
   Class 1 (Color: #00FF00): 3.59%
   Class 4 (Color: #FF00FF): 2.56%
   Class 6 (Color: #888888): 0.88%
   Class 0 (Color: #FF0000): 90.56%
   Class 2 (Color: #0000FF): 0.23%
   Class 3 (Color: #FFFF00): 0.08%`,

   option5:`Class 4 (Color: #FF00FF): 18.00%
   Class 3 (Color: #FFFF00): 11.62%
   Class 0 (Color: #FF0000): 33.60%
   Class 1 (Color: #00FF00): 20.48%
   Class 6 (Color: #888888): 8.27%
   Class 2 (Color: #0000FF): 5.04%
   Class 5 (Color: #00FFFF): 2.99%`,

   option6:`Class 0 (Color: #FF0000): 73.04%
   Class 1 (Color: #00FF00): 11.54%
   Class 5 (Color: #00FFFF): 8.26%
   Class 2 (Color: #0000FF): 4.59%
   Class 6 (Color: #888888): 1.93%
   Class 4 (Color: #FF00FF): 0.56%
   Class 3 (Color: #FFFF00): 0.08%`,

   option7:`Class 4 (Color: #FF00FF): 33.21%
   Class 0 (Color: #FF0000): 35.30%
   Class 3 (Color: #FFFF00): 18.35%
   Class 2 (Color: #0000FF): 8.96%
   Class 5 (Color: #00FFFF): 2.02%
   Class 6 (Color: #888888): 0.17%
   Class 1 (Color: #00FF00): 2.00%`,

   option8:`Class 1 (Color: #00FF00): 19.96%
   Class 4 (Color: #FF00FF): 16.32%
   Class 3 (Color: #FFFF00): 13.35%
   Class 6 (Color: #888888): 7.46%
   Class 0 (Color: #FF0000): 40.43%
   Class 2 (Color: #0000FF): 2.34%
   Class 5 (Color: #00FFFF): 0.14%`,
};

// Function to update content based on the selected option
function updateContent() {
    const selectedOption = dropdown.value;
    const selectedContent = optionContent[selectedOption];

    if (selectedContent) {
        const inputImage = selectedContent.inputImage;
        const outputImage = selectedContent.outputImage;

        // Create HTML elements for the content
        const inputImageElement = document.createElement('img');
        inputImageElement.src = inputImage;

        const outputImageElement = document.createElement('img');
        outputImageElement.src = outputImage;

        // Clear existing content
        content.innerHTML = '';

        // Append new content to the main element
        content.appendChild(inputImageElement);
        content.appendChild(outputImageElement);
    }
}

// Function to update the description based on the selected option
function updateDescription() {
    const selectedOption = dropdown.value;
    const description = optionDescription[selectedOption];
    
    if (description) {
        // Split the description by lines and create separate <p> elements for each line
        const descriptionLines = description.split('\n');
        descriptionDiv.innerHTML = '';

        descriptionLines.forEach(line => {
            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = line;
            descriptionDiv.appendChild(descriptionElement);
        });
    }
}

// Add event listeners to the dropdown to trigger content and description updates
dropdown.addEventListener('change', updateContent);
dropdown.addEventListener('change', updateDescription);

// Call the updateContent and updateDescription functions initially to display content and description for the default option
updateContent();
updateDescription();
