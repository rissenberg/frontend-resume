import './LandingPage.css';
import {ProfileCard} from "../../../widgets/ProfileCard";

export const LandingPage = () => {
    const person = {
        'name': 'Константин Горшков',
        'position': 'безработный бомж',
        'image': './images/photo.jpg',
        'tg-link': true,
        'vk-link': true,
        'github-link': true,
    };

    return (
        <div className='page-container'>
            <div className="background-landing">
                <div className="background_white-panel"></div>
            </div>
            <div className="landing-page">
                <ProfileCard person={person}/>
                <div className="landing-page_right-column">
                    <h3 className="landing-page_right-column_title">
                        Привет!
                    </h3>
                    <h3 className="landing-page_right-column_subtitle">
                        Это страница обо мне и о том, чем я занимаюсь
                    </h3>
                    <div className="ButtonContainer">
                        <button>Навыки</button>
                        <button>Проекты</button>
                    </div>
                    <p className="landing-page_right-column_abstract">
                        Я студент третьего курса МГТУ им. Баумана, учусь на факультете информационных технологий, кафедре
                        инфокоммуникационных сетей, и студент 3 семестра Технопарка VK / Mail.ru на курсе Web разработки
                        (и, начиная с текущего семестра, ментор по программе Frontend разработки). Свободное время уделяю
                        большую часть времени освоению веб разработки - пишу небольшие учебные проекты и прохожу учебные курсы
                    </p>
                </div>
            </div>
        </div>
    );
}