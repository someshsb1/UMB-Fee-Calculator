// Define an object to store school-specific fees
const collegeSpecificFee = {
    "College of Management": 950,
    "College of Nursing and Health Sciences": 700,
  };
  
  // Function to calculate total tuition
  function calculateTotalTuition() {
    const tuitionFees = parseFloat(document.getElementById("tuitionFees").value);
    const newStudentFee = 390;
    const selectedSchool = document.getElementById("school").value;
    const collegeSpecificFeeInput = parseFloat(collegeSpecificFee[selectedSchool]) || 0;
    const idFee = 75;
    const TechFee = 187.56;
    const StudActFee = 39.6;
    const minCredits = parseInt(document.getElementById("minCredits").value);
    const selectedTuitionType = document.getElementById("tuitionType").value;
  
    let totalTuition = 0;
  
    if (selectedTuitionType === "NE Regional Discount") {
      totalTuition = 1575.05 * minCredits + newStudentFee + collegeSpecificFeeInput + idFee + TechFee + StudActFee - (minCredits * 162.92);
    } else if (selectedTuitionType === "InState") {
      totalTuition = 806.92 * minCredits + newStudentFee + collegeSpecificFeeInput + idFee + TechFee + StudActFee;
    } else if (selectedTuitionType === "OutState") {
      totalTuition = 1575.05 * minCredits + newStudentFee + collegeSpecificFeeInput + idFee + TechFee + StudActFee;
    }
  
    document.getElementById("totalTuition").textContent = totalTuition.toFixed(2);
  }
  
  // Function to populate the program dropdown based on the selected school
  function populateProgramDropdown() {
    const schoolDropdown = document.getElementById("school");
    const programDropdown = document.getElementById("program");
    const selectedSchool = schoolDropdown.value;
    const programs = schoolPrograms[selectedSchool] || [];
  
    // Clear existing program options
    programDropdown.innerHTML = "";
  
    // Add new program options
    for (const program of programs) {
      const option = document.createElement("option");
      option.value = program;
      option.textContent = program;
      programDropdown.appendChild(option);
    }
  
    // Update college specific fee based on the selected school
    const collegeFeeInput = document.getElementById("collegeSpecificFee");
    collegeFeeInput.value = collegeSpecificFee[selectedSchool] || "";
  }
  
  // Event listener for the "Calculate" button
  document.getElementById("calculateButton").addEventListener("click", calculateTotalTuition);
  
  // Event listener for the school dropdown to update the program dropdown and college fee
  document.getElementById("school").addEventListener("change", function() {
    populateProgramDropdown();
    calculateTotalTuition(); // Calculate the total tuition when school changes
  });
  
  const schoolPrograms = {
    "School for the Environment": ["Environmental Sciences (MS)", "Environmental Sciences (PhD)", "Environmental Sciences: Professional Science (MS)", "Marine Science and Technology (MS)", "Marine Science and Technology (PhD)", "Urban Planning and Community Development (MS)"],
    "College of Education and Human Development": ["Applied Behavioral Analysis (Certificate)", "Counseling (CAGS)", "Counseling (MEd)", "Counseling Psychology (PhD)", "Counseling: Adjustment Counseling (MEd)", "Counseling: Online (MEd)", "Critical and Creative Thinking (Certificate)", "Critical and Creative Thinking (MA)", "Critical and Creative Thinking: Online (Certificate)", "Critical and Creative Thinking: Online (MA)", "Early Childhood Education and Care: Leadership, Policy, and Finance (PhD)", "Early Childhood Education and Care: Learning and Teaching (PhD)", "Early Childhood Education and Care: Urban, Multilingual, and Global Contexts (PhD)", "Early Education Research, Policy, and Practice (Certificate)", "Education: Boston Teacher Residency - Elementary (MEd)", "Education: Boston Teacher Residency - Middle/Secondary (MEd)", "Education: Early Childhood Initial Licensure (MEd)", "Education: Early Childhood Non-Licensure (MEd)", "Education: Elementary Initial Licensure (MEd)", "Education: Middle/Secondary Initial Licensure (MEd)", "Education: Teach Next Year - Elementary Init Lic (MEd)", "Education: Teach Next Year - Middle Secondary Init Lic (MEd)", "Educational Administration (CAGS)", "Educational Administration (MEd)", "Higher Education (EdD)", "Higher Education (PhD)", "Instructional and Learning Design (Certificate)", "Instructional Design (MEd)", "Instructional Technology Design (Certificate)", "Mental Health Counseling (MS)", "Mental Health Counseling: Adjustment Counseling (MS)", "Mental Health Counseling: Online (MS)", "School Psychology (EDS)", "School Psychology (MEd)", "School Psychology (PhD)", "Special Education: Autism Endorsement (Certificate)", "Special Education: Initial Licensure Moderate Disabilities, PreK-8 (Certificate)", "Special Education: Initial Licensure, Moderate Disabilities, 5 -12 (Certificate)", "Special Education: Non-Licensure (MEd)", "Special Education: Successive Licensure, Moderate Disabilities, 5 -12 (MEd)", "Special Education: Successive Licensure, Moderate Disabilities, PreK-8 (MEd)", "Special Education: Transition Leadership (MEd)", "Teaching of Writing K-12 (Certificate)", "Urban Education, Leadership and Policy Studies (EdD)", "Urban Education, Leadership and Policy Studies (PhD)"],
    "College of Liberal Arts": ["American Studies (MA)", "Applied Economics (MA)", "Applied Linguistics (MA)", "Applied Linguistics (PhD)", "Applied Linguistics: Online (MA)", "Clinical Psychology (PhD)", "Creative Writing (MFA)", "Critical Ethnic and Community Studies (MA)", "Developmental and Brain Sciences (PhD)", "Dual Language (Certificate)", "English (MA)", "Historical Archaeology (MA)", "History (MA)", "History: Online (MA)", "History: Public History (MA)", "Latin and Classical Humanities: Applied Linguistics (MA)", "Latin and Classical Humanities: Greek/Latin (MA)", "Latin and Classical Humanities: Initial Licensure (MA)", "Public History (Certificate)", "Sociology (PhD)", "Sociology, Applied (MA)", "Survey Research (Certificate)"],
    "College of Management": ["Accounting (MS)", "Business Administration (MBA)", "Business Administration: Finance (PhD)", "Business Administration: Information Systems for Data Science and Management (PhD)", "Business Administration: Organizations and Social Change (PhD)", "Business Analytics (Certificate)", "Business Analytics: Big Data Analytics (MS)", "Business Analytics: Supply Chain (MS)", "Clean Energy and Sustainability (Certificate)", "Contemporary Marketing (Certificate)", "Cybersecurity Management (Certificate)", "Finance: Investment and Quantitative Analysis (MS)", "Information Technology (MS)", "Investment Management (Certificate)"],
    "College of Nursing and Health Sciences": ["Adult/Gerontological Nurse Practitioner (MS)", "BS-PhD Nursing (PhD)", "Doctor of Nursing Practice Post Master's (DNP)", "Exercise and Health Sciences (MS)", "Exercise and Health Sciences (PhD)", "Family Nurse Practitioner (Certificate)", "Family Nurse Practitioner (MS)", "MS-PhD Nursing (PhD)", "Nurse Educator (Certificate)", "Post-Bachelor's Adult/Gerontological Nurse Practitioner (DNP)", "Post-Bachelor's Family Nurse Practitioner (DNP)"],
    "College of Science and Mathematics": ["Biology (MS)", "Biology: Environmental Biology (PhD)", "Biology: Molecular, Cellular and Organismal Biology (PhD)", "Biomedical Engineering and Biotechnology (PhD)", "Biotechnology and Biomedical Sciences (MS)", "Biotechnology and Biomedical Sciences: Professional Science (MS)", "Chemistry (MS)", "Chemistry: Biological Chemistry (PhD)", "Chemistry: Education Research (PhD)", "Chemistry: Green Chemistry (PhD)", "Chemistry: Inorganic Chemistry (PhD)", "Chemistry: Organic Chemistry (PhD)", "Chemistry: Physical/Analytical Chemistry (PhD)", "Computational Sciences: Bioinformatics (PhD)", "Computational Sciences: Computational Physics (PhD)", "Computational Sciences: Data Analytics (PhD)", "Computer Science (MS)", "Computer Science (PhD)", "Database Technology (Certificate)", "Integrative Biosciences: Biochemistry (PhD)", "Integrative Biosciences: Bioinformatics (PhD)", "Integrative Biosciences: Biophysics (PhD)", "Physics, Applied (MS)"],
    "McCormack Graduate School of Policy and Global Studies": ["Conflict Resolution (Certificate)", "Conflict Resolution (MA)", "Conflict Resolution: Online (Certificate)", "Gender, Leadership and Public Policy (Certificate)", "Gender, Leadership and Public Policy: Online (Certificate)", "Gerontology (Certificate)", "Gerontology (PhD)", "Gerontology: Management of Aging Services (MS)", "Gerontology: Research/Policy (MS)", "Global Governance and Human Security (MA)", "Global Governance and Human Security (PhD)", "International Relations (MA)", "Public Administration (MPA)", "Public Administration (MPA): Gender, Leadership and Public Policy", "Public Policy (PhD)"],
    "School for Global Inclusion and Social Development": ["Global Inclusion and Social Development (MA)", "Global Inclusion and Social Development: Post-Master's (PhD)", "Human Rights (Certificate)", "Rehabilitation Counseling Post-Master's (Certificate)", "Rehabilitation Counseling: Clinical (MS)", "Rehabilitation Counseling: Vocational (MS)", "Transition Leadership (Certificate)", "Vision Studies: Assistive Technology (Certificate)", "Vision Studies: Assistive Technology (MEd)", "Vision Studies: Cortical/Cerebral Visual Impairment (Certificate)", "Vision Studies: Orientation and Mobility (Certificate)", "Vision Studies: Orientation and Mobility (MEd)", "Vision Studies: Teacher of the Visually Impaired (MEd)", "Vision Studies: Vision Rehabilitation Therapy (Certificate)", "Vision Studies: Vision Rehabilitation Therapy (MEd)"],
  };
  
  populateProgramDropdown();
  