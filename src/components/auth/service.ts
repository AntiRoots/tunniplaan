import usersService from "../users/service"
import hashService from "../general/hashService";
import jwtService from "../general/jwtService";

const loginService = {
login : async (email:string, password:string) => {
    const user = usersService.getUserByEmail(email);
    if(!user) return false;
    const match =await hashService.match(password, user.password);
    if(!match) return false;
    const token = await jwtService.sign(user);
    return token;
}
}

export default loginService;