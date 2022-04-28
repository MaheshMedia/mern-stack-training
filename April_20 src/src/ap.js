export const gatherlist = async() => 
{
    let res = await fetch("https://reqres.in/api/users");
    let users = await res.json();
    // console.log(users);
    return users.data;
} 