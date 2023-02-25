import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function App() {

    const users = []
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange'
    })


    const onSubmit = data => {
        users.push(data)
    }
    // useEffect(() => {
    //     console.log(users);
    // }, [users])


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...(register("name", {
                    required: "Введіть name",
                    maxLength: {
                        value: 10,
                        message: 'Довге імя'
                    }
                }))}
                type="text"
            />
            {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
            <br />
            <input
                {...(register("email", {
                    required: "Введіть e-mail",
                    pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Не вірно набраний mail'
                    }
                }))}
                type="text"
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
            <br />
            <label >
                <input
                    {...(register("checkbox", { required: "Введіть name" }))}
                    type="checkbox"
                />
                <span>Мені 18 років</span>
            </label>

            {errors.checkbox && <p style={{ color: 'red' }}>{errors.checkbox.message}</p>}
            <div>
                <button>Submit</button>
            </div>

        </form>
    )
}