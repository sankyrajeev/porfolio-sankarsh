import Project from '../components/Project'
const notetakerImage = require(`./images/note-taker.png`);
const dataBaseImage = require(`./images/database.png`);
const weatherImage = require(`./images/weather.png`);
const nsitImage = require(`./images/nsit.jpeg`);
const techbook = require(`./images/techbook.png`)
const Totoro = require(`../img/e.png`)

function Portfolio() {

    const data = [
        {
            name: 'Totoro MERN Stack',
            imgUrl: Totoro,
            description: 'Our Website features a Totoro Themed Interface where the User has secure login to the main site. In the main page there is a To Do List feature inside a Notes web application. Users can login to their profile and retrieve a To-Do List of their preference in a Note taking format. It can be saved, updated, and deleted within the users profile. A Fullstack Website Application featuring the MERN Stack framework.',
            deployedLink: 'https://infinite-cliffs-46127.herokuapp.com/',
        },
        {
            name: 'Note Taker',
            imgUrl: notetakerImage,
            description: 'This application uses Express.js routing that takes the user from a homepage to a note taking page. On the note taking page, the user is able to write a note with a title and details and save that note to page to reference to later.',
            deployedLink: 'https://shocking-zombie-29357.herokuapp.com/',
        },
        {
            name: 'Student Database Management',
            imgUrl: dataBaseImage,
            description: 'Student Database management Syatem is an app that monitors the student grades per class in the backend and processes it on the front end. I have used SQL,HAndleBars Tabulator and PDF maker libraries in my project. Once you login you would be able to login as per credentials and submit data in the system.',
            deployedLink: 'https://peaceful-temple-56068.herokuapp.com/',
        },
        {
            name: 'Weather Dashboard',
            imgUrl: weatherImage,
            description: 'The webpage will populate the weather for the day and give you a five day weather forecast. The webpage will then make a button from the city that you searched for and as the user, you can click on that button to search for that city weather without having to type in the city again',
            deployedLink: 'https://sankyrajeev.github.io/Weather-Dashboard/',
        },
        {
            name: 'New Sounds In Town',
            imgUrl: nsitImage,
            description: 'This application uses APis to gather data from various sources and poplates nearby shows and similar artists based on the input. It also includes the upcoming shows and price for each show.',
            deployedLink: 'https://alejandraquintero018.github.io/New-Sounds-in-Town-/',
        },
        {
            name: 'Tech Book',
            imgUrl: techbook,
            description: 'This is a project that was built using Express, SQl, Sequelize and Handlebars.js. I ejoyed debugging this code throughout and put me through a tough challenge. Thanks to this challenge i was able to understand the use MVC Frameworks and how it can used in the realworld applications.',
            deployedLink: 'https://my-tech-book.herokuapp.com/',
        }
    ]
    return (
        <section>
            <h2 className='portfolio'>Portfolio</h2>
            <div className="row">
                {data.map(project => {
                    return (
                        <div className="col-md-6">
                        <Project
                            data={project}
                        />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Portfolio;