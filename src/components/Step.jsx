import styles from './Step.module.scss'

const Step = ({ step }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <p>{`STEP ${step.id}`}</p>
        <h4>{step.title}</h4>
      </div>

      <p className={styles.content}> {step.content}</p>
    </div>
  )
}

export default Step
