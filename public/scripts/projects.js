class Project {
  constructor(
    id,
    name,
    overview,
    skills,
    langs,
    heroku,
    github,
    background,
    banner,
    preview1,
    preview2
  ) {
    this.id = id;
    this.name = name;
    this.overview = overview;
    this.skills = skills;
    this.langs = langs;
    this.heroku = heroku;
    this.github = github;
    this.background = background;
    this.banner = banner;
    this.preview1 = preview1;
    this.preview2 = preview2;
  }
}

const scoot = new Project(
  `001`,
  "Scoot",
  `This project entailed using HTML and CSS (Grid) to create a fully responsive web site. I also set up a server to create a functioning contact form.`,
  `Responsive Web Development | Server Side Functionality`,
  `HTML | CSS | JavaScript | Node.js`,
  `https://scoot-website.herokuapp.com/`,
  `https://github.com/adeoyeao/Scoot`,
  `Using CSS Grid, I built a responsive 3 page website using a minimal design layout. I used JavaScript to add functionality such as mobile navigation and modals. <br><br>In order to create a functional contact form, I built the site on a web server using Node.js (Express) and used nodemailer and body-parser middleware to enable the contents of the form to be sent as an email.`,
  `scoot-banner.PNG`,
  `scoot-preview-1.png`,
  `scoot-preview-2.png`
);

const arch = new Project(
  `002`,
  "Arch Studio",
  `For this project I used JavaScript classes to construct objects to enable user interactivity with the displayed content.`,
  `Interactivty | Object Oriented Programming`,
  `HTML | CSS | JavaScript | Node.js`,
  `https://arch-studio-website.herokuapp.com/`,
  `https://github.com/adeoyeao/Arch-Studio`,
  `As part of the hero section I included an automated carousel, along with buttons to skip to specific slides. I built this using JavaScript classes and objects to store the required information and used the Set Interval method to periodically change the contents of the hero section as per the data in the stored objects.`,
  `arch-banner.PNG`,
  `arch-preview-1.png`,
  `arch-preview-2.png`
);

const myteam = new Project(
  `003`,
  "My Team",
  `The focus of this project was to use regular expressions to implement client-side form validation and use CSS to provide negative feedback signals.`,
  `Form Validation`,
  `HTML | CSS | JavaScript | Node.js`,
  `https://myteam-website.herokuapp.com/`,
  `https://github.com/adeoyeao/My-Team`,
  `In order to implement form validation, I used regular expression methods to ensure the input values met certain criteria. If these criteria weren’t met I disabled the submit button’s function, when the click Event Listener was triggered. <br><br>To signal to the user that the validation criteria had not been meet, I used JavaScript to apply classes, corresponding to CSS styles, and display error messages.`,
  `myteam-banner.PNG`,
  `myteam-preview-1.png`,
  `myteam-preview-2.png`
);

const photosnap = new Project(
  `004`,
  "Photosnap",
  `This project focused on integrating Stripe and Mailchimp APIs to enable payments and mailing list subscriptions.`,
  `API Integration`,
  `HTML | CSS | JavaScript | Node.js | APIs | AJAX`,
  `https://photosnap-website.herokuapp.com/`,
  `https://github.com/adeoyeao/Photosnap`,
  `In this project I used a variety of techniques to integrate with external APIs and data sources. I used fetch methods and promises to enable payments via Stripe; POST requests to RESTful enpoints to set up a mailing list using Mailchimp's API; and client-side AJAX requests to extract data from local text files and populate front end UI.`,
  `photosnap-banner.PNG`,
  `photosnap-preview-1.png`,
  `photosnap-preview-2.png`
);

const ipaddress = new Project(
  `005`,
  "IP Address Tracker",
  `This app uses Geolocation and LeafletJS to generate the geographic location of any given IP address.`,
  `API Integration | Form Validation`,
  `HTML | CSS | JavaScript | Node.js | APIs `,
  `https://ip-tracker-app.herokuapp.com/`,
  `https://github.com/adeoyeao/IP-Address-Tracker`,
  `To build this app, I used GET requests to the Geolocation API to return data on the inputted IP address including the location's longitude and latitude. I then used this data to make GET requests to LeafletJS to generate a map showing the exact location of the IP address. I also performed form validation to ensure the inputted IP address met the required format.`,
  `ipaddress-banner.PNG`,
  `ipaddress-preview-1.png`,
  `ipaddress-preview-2.png`
);

const huddle = new Project(
  `006`,
  "Huddle",
  `This is a server side rendered landing page built with Next.js and a custom Express server.`,
  `React Hooks | Form Validation | Restful API`,
  `React | Next.js | Express | MongoDB `,
  `https://huddle-18-10.herokuapp.com/`,
  `https://github.com/adeoyeao/Huddle-18-10`,
  `This landing page was built with Next.js and React and uses React hooks (useState) to change the UI with regards to form validation.`,
  `huddle-banner.PNG`,
  `huddle-preview-1.png`,
  `huddle-preview-2.png`
);

const fylo = new Project(
  `007`,
  "Fylo",
  `This is a server side rendered landing page built with Next.js and a custom Express server.`,
  `React Hooks | Form Validation | Restful API`,
  `React | Next.js | Express | MongoDB `,
  `https://fylo-18-10.herokuapp.com/`,
  `https://github.com/adeoyeao/Fylo-18-10`,
  `This landing page was built with Next.js and React and uses React hooks (useState) to change the UI with regards to form validation.`,
  `fylo-banner.PNG`,
  `fylo-preview-1.png`,
  `fylo-preview-2.png`
);

const clipboard = new Project(
  `008`,
  "Clipboard",
  `This is a server side rendered landing page built with Next.js and a custom Express server.`,
  `React Hooks | Form Validation | Restful API`,
  `React | Next.js | Express | MongoDB `,
  `https://clipboard-19-10.herokuapp.com/`,
  `https://github.com/adeoyeao/Clipboard-19-10`,
  `This landing page was built with Next.js and React and uses React hooks (useState) to change the UI with regards to form validation.`,
  `clipboard-banner.PNG`,
  `clipboard-preview-1.png`,
  `clipboard-preview-2.png`
);

const bookmark = new Project(
  `009`,
  "Bookmark",
  `This is a server side rendered landing page built with Next.js and a custom Express server.`,
  `React Hooks | Form Validation | Restful API`,
  `React | Next.js | Express | MongoDB `,
  `https://bookmark-20-10.herokuapp.com/`,
  `https://github.com/adeoyeao/Bookmark-18-10`,
  `This landing page was built with Next.js and React and uses React hooks (useState) to change the UI with regards to form validation.`,
  `bookmark-banner.PNG`,
  `bookmark-preview-1.png`,
  `bookmark-preview-2.png`
);

const countries = new Project(
  `010`,
  "Countries Info",
  `This app uses the REST Countries API to access and display information on any given country.`,
  `API Integration | Custom Input Components`,
  `React | Next.js | Express | APIs | SWR`,
  `https://countryinfo-21-10.herokuapp.com/`,
  `https://github.com/adeoyeao/Country-Info`,
  `This app uses SWR and Fetch API to dynamically rendered pages displaying country data as provided by the REST Countries API.`,
  `countries-banner.PNG`,
  `countries-preview-1.png`,
  `countries-preview-2.png`
);

const projects = [countries, bookmark, clipboard, fylo, huddle, ipaddress, photosnap, myteam, arch, scoot];

export { projects };
