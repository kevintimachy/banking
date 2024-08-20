import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
    const loggedIn = { firstName: 'Kevin', lastName: 'Timachy', email: 'kt@gmail.com' };

    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                        type='greeting'
                        title='Welcome'
                        user={loggedIn?.firstName || 'Guest'}
                        subtext='Access and manage financials efficiently'


                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1563.93}

                    />
                </header>

            </div>

            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[{}, {}]}
            />
        </section >
    )
}

export default Home