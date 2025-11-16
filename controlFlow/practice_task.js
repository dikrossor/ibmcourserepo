let personeRole = "Employee";
let isAuthorized;
let serviceAccessLevel;

switch (personeRole) {
    case "Employee":
        isAuthorized = true;
        serviceAccessLevel = "full;"
        break;
    case "Entrolled Member":
        isAuthorized = true;
        serviceAccessLevel = "full";
        break;
    case "Subscriber":
        isAuthorized = true;
        serviceAccessLevel = "partial";
        break;
    default:
        isAuthorized = false;
}
let authorized = isAuthorized ? "Authorized": "Not Authorized";
console.log(`The person is ${authorized} with ${serviceAccessLevel} access level`);