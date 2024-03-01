import './ProfileCard.css'

export const ProfileCard = (props) => {
    const person = props.person ?? {};

    return (
        <div className="profile-card">
            <img src={person.image ?? './images/profile_default.webp'} className="profile-card_image"/>
            <h3 className="profile-card_name">{person.name}</h3>
            <div className="profile-card_strip" />
            <p className="profile-card_position">{person.position}</p>
            <div className="profile-card_icon-container">
                { person["tg-link"] && <button className="Icon">TG</button> }
                { person["vk-link"] && <button className="Icon">VK</button> }
                { person["github-link"] && <button className="Icon">GH</button> }
            </div>
        </div>
    );
}