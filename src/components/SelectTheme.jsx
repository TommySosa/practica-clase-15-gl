import { useContext } from "react"
import themeContext from "../context/themeContext"

const SelectTheme = () => {
    const { theme, setTheme } = useContext(themeContext)

    const handleChange = (event) => {
        const selectedTheme = event.target.value
        setTheme(() => selectedTheme)
    }
    return (
        <select onChange={handleChange} className={theme === 'light' ? 'light-select' : 'dark-select'}>
            <option value='dark' className="dark">🌙</option>
            <option value='light' className="light">⭐</option>
        </select>
    )
}

export default SelectTheme