import Project from '../components/Project'
const notetakerImage = require(`./images/note-taker.png`);
const dataBaseImage = require(`./images/database.png`);
const weatherImage = require(`./images/weather.png`);

function Portfolio() {

    const data = [
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
        }
    ]
    return (
        <section>
            <h2>Portfolio</h2>
            <div className="row ps-5 row-cols-1  ps-1 row-cols-md-2 g-5">
                {data.map(project => {
                    return (
                        <Project
                            data={project}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default Portfolio;