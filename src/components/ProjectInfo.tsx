import "./styles/project_info.css"


interface Props {
    icon: string;
    label: string;
    text: string;
}

/**
 * @function ProjectInfo
 * @constructor
 * @param props {Props}
 * @desc a component of information about project for third page
 */
export default function ProjectInfo(props: Props) {
    return (
        <div className={"project-info"}>
            <img src={props.icon} alt={""}/>
            <p className={"project-label"}>{props.label}</p>
            <p className={"project-text"}>{props.text}</p>
        </div>
    )

}