"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Input,
    Button,
    Spacer,
} from "@nextui-org/react";
import Link from "next/link";

export default function Register() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logique d'inscription en dur, redirection vers la page de login
        router.push("/login");
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <Card>
                <CardHeader>
                    <div>Inscrivez-vous sur Social Quest</div>
                </CardHeader>
                <CardBody>
                    <form onSubmit={handleSubmit}>
                        <Input
                            placeholder="Username"
                            fullWidth
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <Spacer y={1.5} />
                        <Input
                            type="email"
                            placeholder="Email"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Spacer y={1.5} />
                        <Input
                            placeholder="Password"
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Spacer y={1.5} />
                        <Button type="submit" fullWidth color="primary">
                            Inscrivez-vous
                        </Button>
                    </form>
                </CardBody>
                <CardFooter>
                    <div className="">
                        Vous avez déjà un compte ?{" "}
                        <Link
                            href="/"
                            className="text-indigo-600 hover:underline"
                        >
                            Connectez-vous ici !
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
