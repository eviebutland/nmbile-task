// are 7 different user roles, and the logic is implemented using a series of if-else statements
// refactor this code to make it more modular and maintainable? 
var Roles = {
    admin: 'admin',
    editor: 'editor',
    viewer: 'viewer',
    guest: 'guest',
    member: 'member',
    moderator: 'moderator',
    support: 'support'
};
function handleUserRole(role) {
    if (!Roles[role]) {
        return;
    }
    if (role === 'admin') {
        // Admin-specific logic
    }
    else if (role === 'editor') {
        // Editor-specific logic
    }
    else if (role === 'viewer') {
        // Viewer-specific logic
        if ( /* some condition */) {
            // Nested condition for viewer
        }
        else {
            // Another condition for viewer
        }
    }
    else if (role === 'guest') {
        // Guest-specific logic
    }
    else if (role === 'member') {
        // Member-specific logic
        if ( /* some condition */) {
            // Nested condition for member
        }
        else {
            // Another condition for member
        }
    }
    else if (role === 'moderator') {
        // Moderator-specific logic
    }
    else if (role === 'support') {
        // Support-specific logic
    }
}
handleUserRole('admin');
// ways to make more modular
// use switch statement
// add if's that have nested first
