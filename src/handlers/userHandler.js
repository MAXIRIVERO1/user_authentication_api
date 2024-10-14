const { User } = require("../db/db.js");
const bcrypt = require("bcryptjs");




const userPostHandler = async ({ email, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const created = await User.create({ email, password: hashedPassword });
    return created;
};


const userGetAllHandler = async() => {
    const found = await User.findAll();
    return found;
};

const userGetByIdHandler = async(id) => {
    const found = await User.findByPk(id);
    return found;
};

const userUpdateHandler = async(id, email, password) => {
    const found = await User.findByPk(id);
    if(!found){
        return {
            success: false,
            message: "User not found"
        }
    } else{
        const hashedPassword = await bcrypt.hash(password, 10);
        const updated = await found.update({email, password: hashedPassword});
        return updated;
    }
};

const userDeleteHandler = async(id) => {
    const found = await User.findByPk(id);
    if(!found){
        return {
            success: false,
            message: "User not found"
        }
    } else{
        await found.destroy();
        return "Deletion complete"
    }
};




module.exports = {
    userPostHandler,
    userGetAllHandler,
    userGetByIdHandler,
    userUpdateHandler,
    userDeleteHandler
}