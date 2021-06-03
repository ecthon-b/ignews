import styles from './styles.module.scss';

export function SubscribButton() {
    return (
        <button
            type="button"
            className={styles.subscribButton}
        >
            Subscribe now
        </button>
    )
}