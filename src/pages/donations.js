import * as React from 'react'
import PageRoot from '../components/PageRoot'

const Donations = () => (
    <PageRoot>
        <div>
            <h1>Donations and Dues</h1>
            <p>
                Hack Manhattan is a nonprofit organization supported by membership dues
                and donations from the community. We exist to build community, spread
                knowledge, and create wonderful things. To contribute financially, either
                become a member or make a one time donation.
            </p>
            <h2>Donations</h2>
            <p>
                Most of our budget goes to paying rent and keeping our lights on, and is
                covered by membership dues. Your donation provides us with an additional
                financial cushion and allows us to buy tools and supplies, and pay for the
                cost of being at events such as Maker Faire.
            </p>
            <h2>Membership</h2>
            <p>
                Find more about membership on <a href='http://wiki.hackmanhattan.com/MembershipInfo' target='_blank' >our wiki</a>
            </p>
        </div>
    </PageRoot>
)

export default Donations