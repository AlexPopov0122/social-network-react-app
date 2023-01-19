import styles from "./Story.module.css"

const Story = (prompt) => {
    return (
        <div className={styles.blockStory}>
            {prompt.text}
        </div>
    )
}

export default Story;