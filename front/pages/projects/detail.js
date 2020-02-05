import Detail from '../../components/Catalog/Detail';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {getOne} from '../../api/projects';
import {useBus} from "react-bus";

const ProjectDetail = () => {
    const bus = useBus();
    const router = useRouter();
    const [project, setProject] = useState(null);
    const { id } = router.query;

    useEffect(() => {
        getOne(id).then(res => {
            setProject(res.data);
            bus.emit('mini-sliders:refresh');
        });
    }, []);

    return (
        <div className="wrapper">
            <h1 className="entry-title">{project && project.name}</h1>
            { project && <Detail item={project} /> }
        </div>
    );
}

export default ProjectDetail;