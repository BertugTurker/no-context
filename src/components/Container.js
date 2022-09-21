import {useTheme} from "../context/ThemeContext";
import Button from "./Button";
import Header from "./Header";
import Profile from "./Profile";


function Container() {
    const {theme} = useTheme()
  return (
    <div className="flex">
        <div className={`app ${theme}`}>
          <Header/>
          <Button/>
          <Profile />
        </div>
    </div>
  )
}

export default Container