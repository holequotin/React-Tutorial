import { useForm } from "react-hook-form"
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
export const Form = () => {
    const schema = yup.object().shape({
        fullname : yup.string().required("Full name is required"),
        email : yup.string().email().required(),
        age : yup.number().positive().required().min(10),
        password :yup.string().min(4).max(12).required(),
        confirm_password : yup.string().oneOf([yup.ref("password"),null])
    })

    const {register , handleSubmit,formState : {errors} } = useForm(
        {
            resolver: yupResolver(schema)
        }
    )

    return <form>
        <h1>Register form</h1>
        <input type = "text" name="fullname" placeholder="Full name" {...register("fullname")} ></input> <br></br>
        <p>{errors.fullname?.message}</p>
        <input type = "email" name="email" placeholder="Email" {...register("email")}></input> <br></br>
        <input type = "number" name = "age" placeholder="0" {...register("age")}></input> <br></br>
        <input type = "password" name = "password" placeholder="Password" {...register("password")}></input> <br></br>
        <input type = "password" name = "confirm_password" placeholder="Confirm password" {...register("confirm_password")}></input> <br></br>

        <button onClick={handleSubmit((data) => {console.log(data)})} >Submit</button>
    </form>
}