const placeholderUser = {
    username: "[#]test",
    email: "[#]test@inst.com",
    password: "[#]test"
};
const usersArr = [];
for(let i = 0;i < 10; ++i) {
    let user = JSON.parse(JSON.stringify(placeholderUser));
    user.username = user.username.replace('[#]',`${i+1}`);
    user.email=user.email.replace('[#]',i+1);
    user.password=user.password.replace('[#]',i+1);
    usersArr.push(user);
}
module.exports = usersArr;