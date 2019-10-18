import Card from './Card';

export default ({ services }) => 
<div>
    {services.map(service => <Card key={service.title} service={service} />)}
</div>