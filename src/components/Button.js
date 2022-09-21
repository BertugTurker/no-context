import {useTheme} from "../context/ThemeContext";

function Button() {
    const {theme, setTheme} = useTheme()
  return (
    <div>
        active theme: {theme}
        <button onClick={()=> setTheme(theme === "dark" ? "light" : "dark")} >change</button>
    </div>
  )
}

export default Button