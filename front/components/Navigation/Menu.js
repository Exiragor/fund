import Link from 'next/link';
import cn from 'classnames';
import {mainMenu} from "../../resources/menu";

const Menu = () => 
<div className="menu-mnu-container">
    <ul id="menu-mnu" className="menu">
        {mainMenu.map((item, index) =>
            <li className={ cn("menu-item menu-item-type-post_type menu-item-object-page",
                {'menu-item-has-children': item.children.length > 0}) }
                key={index}
            >
                <Link  href={item.link}><a>{item.name}</a></Link>
                {item.children.length > 0 && <ul className="sub-menu">
                    {item.children.map((subItem, index) =>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page" key={index}>
                            <Link  href={subItem.link}><a>{subItem.name}</a></Link>
                        </li>
                    )}
                </ul>}
            </li>
        )}
    </ul>
</div>;

export default Menu;
