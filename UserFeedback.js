async function userFeedback() {
    try {
        const usersComment = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments', 
            { method: 'GET' });
        const jsonFresh = await usersComment.json();
        const arrayUsersComment = jsonFresh.map((result) => {
            return {
                name: result.name,
                email: result.email,
                body: result.body,
                id: result.id
            }
        });
        const idUsers = arrayUsersComment.filter (result => result.id > 2);
        console.log(idUsers);
    }
    catch (error) {
        console.error(error);
    }
}
userFeedback();