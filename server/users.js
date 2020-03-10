const users = [];

const addUser = ( { id, name, room }) => { // Start of addUser
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = users.find((user) => user.room === room && user.name === name); // Finds a user

    if(!name || !room) return { error: 'Username and room are required.'}; // User or room can't be empty
    if(existingUser) return { error: 'Username is taken.'}; // Username is taken

    const user = { id, name, room};

    users.push(user);

    return { user };
} // End of addUser

const removeUser = (id) => { // Start of removeUser 

    const index = users.findIndex((user) => user.id === id); 

    if(index !== -1) return users.splice(index, 1)[0];
}
