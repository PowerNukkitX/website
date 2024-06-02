import {useRouter} from "next/router";
import {Button} from "@nextui-org/react";
import {FaArrowLeft} from "react-icons/fa6";
import {useEffect} from "react";

export default function Custom404() {
    const router = useRouter()

    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        if (randomNumber === 1) {
            router.push('/404-easter-eggs');
        }
    }, [router]);

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen text-white bg-error-bg bg-center bg-cover">
            <div className="max-w-lg text-center">
                <h1 className="text-4xl font-bold mb-8">Oops, this page does not exist</h1>
                <p className="text-lg mb-4">I think you were looking too far and you&apos;ll soon arrive in the nether if you keep looking.</p>
                <Button
                    className="font-bold"
                    variant="faded"
                    color="success"
                    startContent={<FaArrowLeft fontSize={25}/>}
                    onClick={() => router.push('/')}
                >
                    Return to places on earth
                </Button>
            </div>
        </div>
    )
}