let currentStep = 1;
const totalSteps = 4;
const nextButton = document.getElementById('next-button');
const stepContainer = document.getElementById('step-container');

const showStep = (step) => {
  // Hide all steps
  for (let i = 1; i <= totalSteps; i++) {
    document.getElementById(`step-${i}`).classList.add('hidden');
  }

  // Show current step
  document.getElementById(`step-${step}`).classList.remove('hidden');
};

const handleNext = () => {
  if (currentStep < totalSteps) {
    currentStep++;
  } else {
    alert("Form Completed! Display Recommendations...");
    // Logic to display recommendations would go here
  }

  showStep(currentStep);
};

// Event listener for Next button
nextButton.addEventListener('click', handleNext);

// Initially show the first step
showStep(currentStep);
