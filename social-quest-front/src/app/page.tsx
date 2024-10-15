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

export default function Home() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/path");
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <Card>
                <CardHeader>
                    <div>Connectez-vous à Social Quest</div>
                </CardHeader>
                <CardBody>
                    <form onSubmit={handleSubmit}>
                        <Input
                            placeholder="Pseudonyme"
                            fullWidth
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <Spacer y={1.5} />
                        <Input
                            placeholder="Mot de passe"
                            type="password"
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Spacer y={1.5} />
                        <Button type="submit" fullWidth color="primary">
                            Connectez-vous
                        </Button>
                    </form>
                </CardBody>
                <CardFooter>
                    <div className="">
                        Vous n'avez pas de compte ?{" "}
                        <Link
                            href="/register"
                            className="text-indigo-600 hover:underline"
                        >
                            Inscrivez-vous ici !
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
