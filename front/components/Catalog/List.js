import Card from './Card';

export default ({ services }) => 
<div>
    {services.map(service => <Card key={service.name} service={service} />)}
</div>