import {useRouter} from "next/router";
import {Button} from "@nextui-org/react";
import {FaArrowLeft} from "react-icons/fa6";
import Image from "next/image";

export default function Custom404Eggs() {
    const router = useRouter()

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen text-white bg-error-bg bg-center bg-cover">
            <div className="max-w-lg text-center">
                <Image src={'/chad.gif'} width={500} height={500} alt={'404 easter eggs'}/>
                <h1 className="text-4xl font-bold mb-8">Congratulations 🗿, you&apos;ve found an easter egg!</h1>
                <p className="text-lg mb-4">You&apos;ve become a true Chad by discovering this hidden page.</p>
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