import { Card } from 'semantic-ui-react';

const items = [
    {
        header: 'Annonymous',
        description:
            'You never know what you can do, unless you try!',
        meta: 'Author Name',
    },
    {
        header: 'Annonymous',
        description:
            'You never know what you can do, unless you try!',
        meta: 'Author Name',
    },
    {
        header: 'Annonymous',
        description:
            'You never know what you can do, unless you try!',
        meta: 'Author Name',
    },
    {
        header: 'Annonymous',
        description:
            'You never know what you can do, unless you try!',
        meta: 'Author Name',
    },
]

const CardExampleGroupCentered = () => <Card.Group centered items={items} />

export default CardExampleGroupCentered