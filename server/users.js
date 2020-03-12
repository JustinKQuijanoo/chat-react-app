const users = [];

const addUser = ({ id, name, room }) => { // Start of addUser
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = users.find((user) => user.room === room && user.name === name); // Checks if there's existing user

    if(!name || !room) return { error: 'Username and room are required.'}; // User or room can't be empty

    if(existingUser) {
        return { error: 'Username is taken' }
    }

    const user = { id, name, room }; // Creates user with object of id, name and room

    users.push(user); // Adds the user into array

    return { user };
} // End of addUser

const removeUser = (id) => { // Start of removeUser 

    const index = users.findIndex((user) => user.id === id); // Finds user with id

    if(index !== -1) {
        return users.splice(index, 1)[0]; // Removes user from the array
    }

} // End of removeUser

const getUser = (id) => users.find((user) => user.id === id); //Get the user

const getUsersInRoom = (room) => users.filter((user) => user.room === room); // Gets the users in the room

module.exports = { addUser, removeUser, getUser, getUsersInRoom } 