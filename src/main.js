// window.__projects is our list of projects

function configureState() {
    window.__state = window.__state || {};

    window.__state.projects = [];
    window.__state.revisions = [];
    window.__state.purpose_of_issue = [];
    window.__state.asset_class = [];
    window.__state.information_type = [];
    window.__state.discipline = [];
    window.__state.suitability = [];
    window.__state.security_classification = [];
    window.__state.project_stage = [];
    window.__state.form = document.getElementById('dnrf-form');
}

async function populateDropdowns() {
    const response = await fetch('/fixtures/projects.json');
    const { projects, revisions, purpose_of_issue, asset_class, information_type, discipline, suitability, security_classification, project_stage } = await response.json();

    window.__state.projects = projects;
    window.__state.revisions = revisions;
    window.__state.purpose_of_issue = purpose_of_issue;
    window.__state.asset_class = asset_class;
    window.__state.security_classification = security_classification;
    window.__state.project_stage = project_stage;
    window.__state.suitability = suitability;
    window.__state.information_type = information_type;
    window.__state.discipline = discipline;


    for (const project of projects) {
        const option = document.createElement('option');
        option.value = project.name;
        option.innerText = `${project.name} (${project.number})`;
        window.__state.form.elements['project'].appendChild(option);
    }
}

function onChangeProject(ev) {
    const value = ev.target.value;
    const selectedProject = window.__state.projects.find((p) => p.name === value);

    window.__state.form.elements['project_email'].value = selectedProject?.email ?? '';
}

function submitForm(e) {
    e.preventDefault();
    // Get the form element
    const {form} = window.__state;
    
    const projectTitle = form.elements['project'].value;
    const documentRevision = form.elements['document_revision'].value;
    const documentTitle = form.elements['document_title'].value;
    const reasonForIssue = form.elements['reason_for_issue'].value;
    const assetClass = form.elements['asset_class'].value;
    const informationType = form.elements['information_type'].value;
    const discipline = form.elements['discipline'].value;
    const suitability = form.elements['suitability'].value;
    const securityClassification = form.elements['security_classification'].value;
    const projectStage = form.elements['project_stage'].value;
    const isHandoverInformation = form.elements['handover_information'].value === 'on';
    const isHealthSafetyFile = form.elements['health_and_safety_file'].value === 'on';
    const requestedBy = form.elements['requested_by'].value;
    const projectEmailAddress = form.elements['project_email'].value;

    const body = `
A new document ID has been requested by ${requestedBy} for the ${projectTitle} project.
Information:
  - ${documentRevision}
  - ${documentTitle}
  - ${reasonForIssue}
  - ${assetClass}
  - ${informationType}
  - ${discipline}
  - ${suitability}
  - ${securityClassification}
  - ${projectStage}
  - ${isHandoverInformation ? 'This is a handover' : 'This is not a handover'}
  - ${isHealthSafetyFile ? 'This is a health and safty file' : 'This is not a health and safty file'}
  - ${requestedBy}
  - ${projectEmailAddress}
    `;

    const emailLink = `mailto:${projectEmailAddress}?subject=${encodeURI('New Document Request')}&body=${encodeURI(body)}`;
    console.log(emailLink);
    window.location.replace(emailLink);

    return false;
}
// when document/page loads, set up everything
document.addEventListener('DOMContentLoaded', async function () {
    // Set initial state
    configureState();

    // Fetch data and populate dropdown menus
    await populateDropdowns();

    // Setup our event listeners
    window.__state.form.elements['project'].addEventListener('change', onChangeProject);
    window.__state.form.addEventListener('submit', submitForm);
});

configureState({});

// Adapt the other input fields to select dropdowns where needed.
// When project not listed is selected,
//    display an additional input underneath that allows the user to enter:
//         * project name
//         * project code
// When the user submits the form (clicks button or presses enter)
//     either console.table the information from the form
//     or javascript alert() to show the data.
//         Use: addEventListener on the form.
//         Gotcha: when you submit the form the page will reload,
//                 work out how to stop the browser reloading.
