const Roles = [
    'admin','editor','viewer','guest', 'member', 'moderator','support'
] as const

type Role = typeof Roles[number]

const isNationalViewer = true
const isPremiumMember = true

export function handleUserRole(role: Role| unknown) {
    
    if(!Roles.includes(role as Role)){
        return new Error('not a user role')
    }

    switch(role){
        case 'viewer': 
            return isNationalViewer ? handleNationalViewers() : handleInternationalViewers()
        case 'member': 
            return isPremiumMember ? handlePremiumMembers() : handleStandardMembers()
        case 'admin':
            // Admin-specific logic
            return 'is admin'
        case 'editor': 
            // Editor-specific logic
            return 'is editor'
        case 'guest': 
            // Guest-specific logic
            return 'is guest'
        case 'moderator': 
            // Member-specific logic
            return 'is moderator' 
        case 'support': 
            // Support-specific logic
            return 'is support'
    }
    
}

function handlePremiumMembers(){
    // condition for premium members
    return 'is premium member'
}
function handleStandardMembers(){
    // condition for standard members
    return 'is standard member'
}
function handleNationalViewers() {
    // condition for national viewers
    return 'is national viewer'
}
function handleInternationalViewers() {
    // condition for international viewers
    return 'is international viewer'
}