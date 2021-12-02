class AdvancedMath {
    static squareArea(length){
        return length * length;
    }
    static PI = 22/7;
    static
}
//console.log(AdvancedMath.squareArea(5));
//console.log(AdvancedMath.PI);
class User {
    constructor(id, name, username, email){
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
    }
    // create a method called getPosts 
    // this method should log the posts for the current user
    // example for the user with id 1 we can get the posts from this URL
    // https://jsonplaceholder.typicode.com/users/1/posts

    async getPosts() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${this.id}/posts`)
        const data = await response.json();
        return data;
    }

    static async getAllUsers(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        // console.log(data);
        const resultArr = [];
        for (let i = 0; i < data.length; i++) {
            const user = new User(data[i].id, data[i].name, data[i].username, data[i].email)
            resultArr.push(user)
        }
        // resultArr[6].getPosts();
        return resultArr;
    }


}
// iifi 
(async () => {

    const allUsers = await User.getAllUsers();
    console.log(allUsers); 
    
    for (let i = 0; i < allUsers.length; i++) {
        const posts = await allUsers[i].getPosts();
        console.log(posts);
    }
    

})()






