import Link from 'next/link';
import cn from 'classnames';

const Aside = ({ sections }) => {
    return (
        <aside className="widget">
            <nav className="sidebar-mnu">
                <ul>
                    {sections.map(section =>
                            <li className={cn('page_item', { 'current_page_item': section.currentPage })}>
                                <Link prefetch href={section.url}><a>{section.name}</a></Link>
                            </li>
                        )
                    }
                </ul>
            </nav>
        </aside>
    )
};

export default Aside;