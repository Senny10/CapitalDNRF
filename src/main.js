// window.__projects is our list of projects

function configureState() {
    window.__state = window.__state || {};
    window.__state.form = document.getElementById('dnrf-form');
    window.__state.settings_form = document.getElementById('settings');
}

async function populateDropdowns() {
    const response = await fetch('/fixtures/data.json');
    const { options } = await response.json();

    options.project = [
        ...options.project,
        ...pullProjectMappingsFromStorage(),
    ];
    
    window.__state.option_data = options;

    for (const name of Object.keys(options)) {
        for (const option of options[name]) {
            const optionElement = document.createElement('option');
            
            optionElement.value = option.id;
            optionElement.innerText = option.label;
            window.__state.form.elements[name].appendChild(optionElement);
        }
    }
}

function idToLabel(option, id) {
    return window.__state.option_data[option].find(o => o.id === id)?.label;
}

function onChangeProject(ev) {
    const value = ev.target.value;
    const selectedProject = window.__state.option_data.project.find((p) => p.id === value);

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
  - ${idToLabel('information_type', informationType)}
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

function pullProjectMappingsFromStorage() {
    try {
        const projectEmailMappingStored = window.localStorage.getItem('project_email_mappings');
        const {settings_form} = window.__state;
        const parsedMapping = JSON.parse(projectEmailMappingStored);

        settings_form.elements['project_emails_mapping'].value = JSON.stringify(parsedMapping, null, 2);
        return parsedMapping;
    } catch (e) {
        return [];
    }
}

function saveProjectEmailMappings(e) {
    e.preventDefault();
    // Get the form element
    const {settings_form} = window.__state;

    window.localStorage.setItem('project_email_mappings', settings_form.elements['project_emails_mapping'].value);
    return false;
}

// when document/page loads, set up everything
document.addEventListener('DOMContentLoaded', async function () {
    // Set initial state
    configureState();

    // Fetch data and populate dropdown menus
    await populateDropdowns();
    
    pullProjectMappingsFromStorage();

    // Setup our event listeners
    window.__state.form.elements['project'].addEventListener('change', onChangeProject);
    window.__state.form.addEventListener('submit', submitForm);
    window.__state.settings_form.addEventListener('submit', saveProjectEmailMappings);
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
