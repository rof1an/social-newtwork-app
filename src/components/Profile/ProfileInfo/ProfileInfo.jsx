import cls from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={cls.mainInfo}>
                <img className={cls.mainImg} src="https://cgmag.net/wp-content/uploads/2015/01/AoTPRDq-1200x1200.jpg"/>
                <div className={cls.mainAbout}>
                    <h2 className={cls.profileTitle}>{props.name}</h2>
                    <hr/>
                    <div className={cls.profileInfo}>
                        <div className={cls.left}>
                            <p>Date of Birth:</p>
                            <p>City:</p>
                            <p>Education:</p>
                            <p>Website:</p>
                        </div>
                        <div className={cls.right}>
                            <p>{props.birthtime}</p>
                            <p>{props.city}</p>
                            <p>{props.education}</p>
                            <a target='_blank' href={'https://github.com/rof1an'}>{props.website}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo
