import Project from '../components/Project'
import notetaker from '../pages/images/note-taker.png'

function Portfolio() {

    const data = [
        {
            name: 'Note Taker',
            imgUrl: {notetaker},
            description: 'This application uses Express.js routing that takes the user from a homepage to a note taking page. On the note taking page, the user is able to write a note with a title and details and save that note to page to reference to later.',
            deployedLink: 'https://shocking-zombie-29357.herokuapp.com/',
        },
        {
            name: 'b',
            imgUrl: 'aa',
            description: 'aa',
            deployedLink: 'aa',
        },
        {
            name: 'b',
            imgUrl: 'aa',
            description: 'aa',
            deployedLink: 'aa',
        }
    ]
    return (
        <section>
            <h2>Portfolio</h2>
            <div class="row ps-5 row-cols-1  ps-1 row-cols-md-2 g-5">
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