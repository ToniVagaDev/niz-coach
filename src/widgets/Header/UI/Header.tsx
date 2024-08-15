import cls from './Header.module.scss'
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div className={cls.Header}>
            <nav className={cls.nav_bar}>
                <NavLink 
                 className={({ isActive }) => {
                    const linkClasses = [cls.link];
                    if (isActive) linkClasses.push(cls.active);
                    
                    return linkClasses.join(" ");}} 
                to = {'/'}>
                    Главная
                </NavLink>
                <NavLink 
                 className={({ isActive }) => {
                    const linkClasses = [cls.link];
                    if (isActive) linkClasses.push(cls.active);
                    
                    return linkClasses.join(" ");}} 
                to = {'/pump'}>
                    Памптрек
                </NavLink>
                <NavLink 
                 className={({ isActive }) => {
                    const linkClasses = [cls.link];
                    if (isActive) linkClasses.push(cls.active);
                    
                    return linkClasses.join(" ");}} 
                to = {'/&'}>
                    бур гер
                </NavLink>
                
            </nav>
        </div>
    )
}

export default Header;