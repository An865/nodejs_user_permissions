const {ROLE} = require('../data');

function canViewProject(user, project){
    return(
        user.role === ROLE.ADMIN || project.userId === user.id
    )
}

//define scope of which user has access to which projects when route is /projects
function scopedProjects(user, projects){
    if(user.role === ROLE.ADMIN){
        return projects
    }
    return projects.filter(project => project.userId === user.id);
}

//only user can delete project
function canDeleteProject(user, project){
    return project.userId === user.id;
}

module.exports = {
    canViewProject,
    scopedProjects,
    canDeleteProject
}