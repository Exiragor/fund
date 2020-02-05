import Projects from '../../components/Catalog/List';
import {getAll} from '../../api/projects';
import {useEffect, useState} from "react";

export default () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getAll('program').then(res => {
            setProjects(res.data);
        });
    }, []);

    return (
        <div className="content" style={{ minHeight: 'calc(100vh - 370px)'}}>
            <div className="wrapper">
                <h3 className="entry-title">Программы</h3>
            </div>
            <Projects services={projects} />
        </div>
    );
}