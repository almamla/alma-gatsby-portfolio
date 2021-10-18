module.exports = {

    author: "@almayan",
    siteTitle: "alma yan - tech/media project manager",
    siteShortTitle: "🥳", // Used as logo text in header, footer, and splash screen
    siteDescription: "media production graduate with experience in project management, web design, and film technology",
    siteUrl: "https://lipingyan.com/",
    siteLanguage: "en_GB",
    siteIcon: "content/favicon.png", // Relative to gatsby-config file
    seoTitleSuffix: "alma yan", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

    splashScreen: false, // Set this to true if you want to use the splash screen

    // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
    // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
    // mediumRssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konstantinmuenster",
    shownArticles: 6,
    
    // There are icons available for the following platforms: 
    // Medium, GitHub, LinkedIn, XING, Behance
    socialMedia: [
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/alma-liping-yan-78023b133/"
        },
        {
            name: "Work",
            url: "https://linktr.ee/lipingyan"
        },
        {
            name: "CV",
            // url: "https://drive.google.com/file/d/1riIGU925XKAbgg4vVbqfClymGnLdW3xj/view?usp=sharing"
            //url: "https://www.dropbox.com/s/tgzi9v36vfsk1s5/AlmaYan-CV.pdf?dl=0"
            url: "https://www.dropbox.com/s/t92ivbz33thet4y/AlmaYan-CV.pdf?dl=0"
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
            name: `Copyright &copy; ${new Date().getFullYear()} Alma Yan`,
            url: ""
        },
        {
            name: "",
            url: "/imprint"
        }
    ]
}