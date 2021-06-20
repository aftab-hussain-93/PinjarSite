// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    if (req.method === 'POST') {
        // Process a POST request
    } else {
        // Handle any other HTTP method
        return res.status(200).send(JSON.stringify(allArticles))
    }
}

const defaultHtmlContent = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <br />
            <p>kannada text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            `

const allArticles = [
    {
        id: 1,
        name: 'preamble',
        title: 'Preamble',
        text: defaultHtmlContent
    },
    {
        id: 2,
        name: 'association_details',
        title: 'Association Details',
        subheading: 'By Laws'
    },
    {
        id: 3,
        name: 'plan_progress',
        title: 'Plan and Progress Reports',       
    },
    {
        id: 4,
        name: 'benefits',
        title: 'Benefits from State and Central Govt',       
    },
]