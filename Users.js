async function userInfo() {
    try {
        const completeInfoUsers = await fetch('https://jsonplaceholder.typicode.com/users', 
            { method: 'GET' });
        const jsonFresh = await completeInfoUsers.json();
        const arrayInfoUsers = jsonFresh.map((result) => {
            return {
                name: result.name,
                username: result.username,
                email: result.email,
                phone: result.phone,
                id: result.id
            }
        });
        const idUsers = arrayInfoUsers.filter (result => result.id > 5);
        console.log(idUsers);
    }
    catch (error) {
        console.error(error);
    }
}
userInfo();
