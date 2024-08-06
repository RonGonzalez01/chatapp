import toast from "react-hot-toast"

const validateInfo = ({fullname,username,password,confirmPassword,gender}) => {

    if(!fullname || !username || !password || !confirmPassword || !gender){
        toast.error("Please fill all fields")
        return false
    }
    if(password !== confirmPassword) {
        toast.error("Passwords do not match")
        return false
    }

    if(password.length < 8){
        toast.error("Passwords must be higher than 8 characters")
        return false

    }

  return true
}

export default validateInfo
