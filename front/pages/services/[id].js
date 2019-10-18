import { useRouter } from 'next/router'

const service = {
    title: 'Создание профессиональной песни, гимна, поздравления',
};

export default () => {
    const router = useRouter()
    
    return (
        <div className="wrapper">
            <h1 className="entry-title">{service.title}</h1>
        </div>
    );
}