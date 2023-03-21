
// window.__projects is our list of projects

function configureState() {
    window.__state = window.__state || {};

    // in our state we want to keep:
    // - list of fetched projects
    // - references to our dom nodes
    window.__state.projects = [];
    window.__state.projectsSelectEl = document.getElementsByName('project')[0];
    window.__state.projectEmailEl = document.getElementsByName('project_email')[0];
}

async function populateProjects() {
    const response = await fetch('/fixtures/projects.json');
    const { projects } = await response.json();

    window.__state.projects = projects;

    for (const project of projects) {
        const option = document.createElement('option');
        option.value = project.name;
        option.innerText = `${project.name} (${project.number})`;
        window.__state.projectsSelectEl.appendChild(option);
    }
}

function onChangeProject(ev) {
    const value = ev.target.value;
    const selectedProject = window.__state.projects.find((p => p.name === value));

    if (selectedProject) {
        window.__state.projectEmailEl.value = selectedProject.email;
    } else {
        window.__state.projectEmailEl.value = '';
    }
}

// when document/page loads, set up everything
document.addEventListener('DOMContentLoaded', async function () {
    // Set initial state
    configureState();

    // Fetch projects and populate dropdown
    await populateProjects();

    // Setup our event listeners
    window.__state.projectsSelectEl.addEventListener('change', onChangeProject);
});

configureState({

});


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
