function MyInput({ name, type, placeholder, label }) {
    return (
        <div>
             <label htmlFor={name}>{label}</label>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                id={name} // Используйте id для связывания метки с элементом ввода
            />
        </div>
    )
}

export default MyInput;