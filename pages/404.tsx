import { useRouter } from 'next/router'
import {Button} from "@nextui-org/react";
import {FaArrowLeft} from "react-icons/fa6";

export default function Custom404() {
    const router = useRouter()

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen bg-background text-white bg-hero-pattern bg-no-repeat bg-center bg-cover">
            <div className="max-w-lg text-center">
                <h1 className="text-4xl font-bold mb-8">Oops, this page does not exist</h1>
                <p className="text-lg mb-4">The page you are looking for cannot be found.</p>
                <Button
                    className="font-bold"
                    variant="faded"
                    color="success"
                    startContent={<FaArrowLeft fontSize={25}/>}
                    onClick={() => router.push('/')}
                >
                    Return to the home page
                </Button>
            </div>
        </div>
    )
}
