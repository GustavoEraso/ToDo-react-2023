import './styles.css'

import { ReactComponent as MailImg} from './social-media/mail.svg';
import { ReactComponent as GitHubImg} from './social-media/github.svg';
import { ReactComponent as TwitterImg} from './social-media/twitter.svg';
import { ReactComponent as LinkedinImg} from './social-media/linkedin.svg';


function ToDoFooter (){
    return(
        <footer className='ToDoFooter'>
            <section className='ToDoFooter__section ToDoFooter__section--first'> 
                <p className='ToDoFooter__text'>Desarrolado por <a href="http://gustavoeraso.com" target="_blank" rel="noopener noreferrer">Gustavo Eraso</a> </p>                
            </section>
            <section className='ToDoFooter__section ToDoFooter__section--second'>
                <ul className='ToDoFooter__ul'>
                    <li>
                        <a 
                            href="mailto:contact@gustavoeraso.com" 
                            target="_blank" rel="noopener noreferrer">
                                <MailImg />
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://github.com/GustavoEraso"
                            target="_blank" rel="noopener noreferrer">
                                <GitHubImg />
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://twitter.com/GustavoEraso_uy"
                            target="_blank" rel="noopener noreferrer">
                                <TwitterImg />
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://www.linkedin.com/in/gustavoeraso/"
                            target="_blank" rel="noopener noreferrer">
                                <LinkedinImg />
                        </a>
                    </li>
                </ul>
            </section>

        </footer>
    )
}

export {ToDoFooter}