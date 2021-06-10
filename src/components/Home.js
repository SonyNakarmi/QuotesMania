import HeaderSection from './HeaderSection';
import CardExampleGroupCentered from './BodySection';
import { Divider } from 'semantic-ui-react';

const Home = () => {
    return (
        <div>
            <div className="header-section">
                <HeaderSection />
            </div>
            <Divider section />
            <div>
                <CardExampleGroupCentered/>
            </div>
        </div>
    );
}

export default Home;