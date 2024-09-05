import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const HomePage = () =>{
    return(
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500">
            <Card className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg text-center">
                <CardHeader>
                    <CardTitle >
                        <p className="text-2xl font-bold">My Habits (dur)</p>
                    </CardTitle>
                    <CardDescription>
                        Suivez et gérez vos habitudes quotidiennes facilement.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                        Veuillez vous connecter pour accéder à votre compte.
                </CardContent>
                <CardFooter className="flex flex-col items-center space-y-4">
                    <Button className="w-full py-2 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white rounded-md hover:from-fuchsia-600 hover:to-purple-600">
                        <Link href="/sign-in">
                            Login
                        </Link>
                    </Button>
                    <Button className="w-full py-2 bg-gradient-to-r from-blue-800 to-indigo-900 text-white rounded-md hover:from-purple-500 hover:to-purple-900">
                        <Link href="/sign-up">
                            S'inscrire
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default HomePage;

