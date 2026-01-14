import { Link } from 'react-router';

import { Button } from '@/components/ui/button';

export default function NotFoundPage() {
    return (
        <div className="text-center mt-20">

            <img src="./assets/images/404.svg" alt="" />
            <h1 className="text-4xl font-bold text-foreground/70">Something went wrong</h1>
            <p className="text-xl mt-4 text-foreground/50">Sorry we were unable to find this page</p>
            <Link to="/">
                <Button
                    className="mt-4"
                    onClick={() => window.history.back()}
                >
                    Back to Previous
                </Button>
            </Link>
        </div>
    );
}
