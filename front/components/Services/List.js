import Card from './Card';

export default ({ services }) => 
<div>
    {services.map(service => <Card service={service} />)}
</div>