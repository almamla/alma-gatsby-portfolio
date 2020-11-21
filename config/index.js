module.exports = {

    author: "@almayan",
    siteTitle: "Alma Yan - Portfolio",
    siteShortTitle: "a", // Used as logo text in header, footer, and splash screen
    siteDescription: "Project manager | Film coordinator | Developer",
    siteUrl: "https://gatsby-starter-portfolio-minimal.netlify.app/",
    siteLanguage: "en_US",
    siteIcon: "content/favicon.png", // Relative to gatsby-config file
    seoTitleSuffix: "Alma Yan", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

    splashScreen: false, // Set this to true if you want to use the splash screen

    // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
    // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
    mediumRssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konstantinmuenster",
    shownArticles: 3,
    
    // There are icons available for the following platforms: 
    // Medium, GitHub, LinkedIn, XING, Behance
    socialMedia: [
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/alma-liping-yan-78023b133/"
        },
        {
            name: "Grad project",
            url: "https://konstantinmuenster.medium.com/"
        },
        {
            name: "CV",
            url: "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal"
        },
    ],
  
    navLinks: {
        menu: [
            {
                name: "About Me",
                url: "/#about",
            },
            {   name: "Timeline",
                url: "/#timeline",
            },
            {
                name: "Projects",
                url: "/#projects",
            },
        ],
        button: {
            name: "Contact",
            url: "/#contact",
        }
    },

    footerLinks: [
        {
            name: "Privacy",
            url: "/privacy"
        },
        {
            name: "Imprint",
            url: "/imprint"
        }
    ]
}