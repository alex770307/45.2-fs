import MyButton from "../myButtons/MyButton";
import MyInput from "../myInput/MyInput";
import "./LoginForm.css"

function LoginForm() {
    return (
        <div className="login-form">
            <h2>Вход</h2>
            <MyInput
                name="username"
                type="text"
                placeholder="Введите имя пользователя"
                label="Имя пользователя"
            />
            <MyInput
                name="email"
                type="email"
                placeholder="Введите вашу электронную почту"
                label="Электронная почта"
            />
            <MyInput
                name="password"
                type="password"
                placeholder="Введите пароль"
                label="Пароль"
            />
            <MyButton type="submit">Войти</MyButton>
        </div>
    )
}

export default LoginForm;