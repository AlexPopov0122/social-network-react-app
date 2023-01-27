import styles from "./Story.module.css"

const Story = (props) => {
    return (
        <div className={styles.blockStory}>
            {props.text}
        </div>
    )
}

export default Story;