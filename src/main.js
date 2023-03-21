
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