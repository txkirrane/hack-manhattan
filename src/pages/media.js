import * as React from 'react'

import PageRoot from '../components/PageRoot'

const MediaURLs = [
    {
        title: "1. DIY Freaks Flock to 'Hacker Spaces' Worldwide",
        url: "https://www.wired.com/2009/03/hackerspaces/"
    },
    {
        title: "2. This Volunteer Group Is Making Free PPE for Health Care Workers' Worldwide",
        url: "https://www.health.com/condition/infectious-diseases/coronavirus/unsung-heroes-nyc-makes-ppe"
    },
    {
        title: "3. Downtown NYC artists convert studio into assembly line in coronavirus effort' Worldwide",
        url: "https://www.nydailynews.com/coronavirus/hometown-helpers/ny-coronavirus-covid-damon-hamm-artists-assembly-line-face-shields-20200430-cn6nr3pftnahhgvi3qzdzifveu-story.html"
    },
    {
        title: "4. CUNY Colleges Harness 3D Printers To Provide Crucial Protective Equipment For Frontline Medical Workers' Worldwide",
        url: "http://www1.cuny.edu/mu/forum/2020/04/16/cuny-colleges-harness-3d-printers-to-provide-crucial-protective-equipment-for-frontline-medical-workers/"
    },
    {
        title: "5. CUNY schools 3D-print PPE face shields for NYC health workers",
        url: "https://www.bxtimes.com/cuny-schools-3d-print-ppe-face-shields-for-nyc-health-workers/"
    },
    {
        title: "6. Bond Center Steps Up for PPE Production Effort' Worldwide",
        url: "https://ssa.ccny.cuny.edu/blog/2020/04/17/bond-center-steps-up-for-ppe-production-effort/"
    },
    {
        title: "7. Makers Wanted: Print PPE for NYC Now' Worldwide",
        url: "https://makezine.com/2020/04/03/makers-wanted-print-ppe-for-nyc-now/"
    },
    {
        title: "8. Meet 4 budding designers making face masks for NYC first responders",
        url: "https://nypost.com/2020/04/03/meet-4-budding-designers-making-coronavirus-face-masks-for-nyc-first-responders/"
    },
    {
        title: "9. Lessons Learned by NYC Makers Producing Personal Protective Equipment for Medics",
        url: "https://spectrum.ieee.org/lessons-learned-nyc-makers-producing-personal-protective-equipment-medics"
    },
]

const Media = () => (
    <PageRoot>
        <h1>Hack Manhattan in the Media + Collaborations</h1>
        {MediaURLs.map(({title, url}) => <React.Fragment>
            <a href={url} target='_blank'>{title}</a>
        </React.Fragment>)}
    </PageRoot>
)

export default Media