import { useSession, signIn } from 'next-auth/client';
import styles from './styles.module.scss';

interface SubscribeButtonProps {
    priceId: string;
}

export function SubscribButton({ priceId }: SubscribeButtonProps) {]
    const [session] = useSession();

    function handleSubscribe() {
        if(!session) {
            signIn('github')
            return;
        }

        // criação da checkout session
        
    }
    return (
        <button
            type="button"
            className={ styles.subscribButton }
            onClick={ handleSubscribe }
        >
            Subscribe now
        </button>
    )
}