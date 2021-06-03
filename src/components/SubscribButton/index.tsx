import styles from './styles.module.scss';

interface SubscribeButtonProps {
    priceId: string;
}

export function SubscribButton({ priceId }: SubscribeButtonProps) {
    return (
        <button
            type="button"
            className={styles.subscribButton}
        >
            Subscribe now
        </button>
    )
}