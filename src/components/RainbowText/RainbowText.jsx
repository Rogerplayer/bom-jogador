import styles from './RainbowText.module.css'

function RainbowText({ text }) {
  return (
    <span aria-label={text}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={styles.letter}
          style={{ '--delay': `${index * 0.06}s` }}
          aria-hidden="true"
        >
          {char === ' ' ? ' ' : char}
        </span>
      ))}
    </span>
  )
}

export default RainbowText
