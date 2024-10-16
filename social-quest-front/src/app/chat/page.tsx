"use client";

import NavbarComponent from "../navbar/navbarComponent";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Divider,
    Link,
} from "@nextui-org/react";
import { GiCyberEye } from "react-icons/gi";
import { TbMoodCry } from "react-icons/tb";
import { CgDanger } from "react-icons/cg";
import { useState } from "react";

export default function Chat() {
    const [showOptions, setShowOptions] = useState(false);
    const [showSignaler, setShowSignaler] = useState(false);
    const [showAmi, setShowAmi] = useState(false);
    const [showProfessionnel, setShowProfessionnel] = useState(false);
    const [showRessources, setShowRessources] = useState(false);

    const handleButtonClick = () => {
        setShowOptions(!showOptions);
    };

    return (
        <>
            <NavbarComponent />
            <div className="flex gap-4 p-4 h-[calc(100vh-120px)]">
                <Card className="w-[70%] border border-gray-300">
                    <CardHeader className="flex justify-center">
                        <div className="text-xl font-semibold">Chat</div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <div className="flex flex-col gap-4">
                            <Button
                                color="primary"
                                className="hover:bg-blue-600 transition"
                                onClick={handleButtonClick}
                            >
                                On me harcèle en ligne
                            </Button>

                            {showOptions && (
                                <div className="flex flex-col gap-2">
                                    <div className="text-lg">
                                        Il est important d'en parler. Voici ce
                                        que tu peux faire
                                    </div>

                                    <Button
                                        color="success"
                                        className="hover:bg-green-600 transition"
                                        onClick={() =>
                                            setShowSignaler(!showSignaler)
                                        }
                                    >
                                        Signaler le harcèlement
                                    </Button>
                                    {showSignaler && (
                                        <div>
                                            <div className="text-sm mt-2">
                                                Pour signaler le harcèlement,
                                                commence par documenter toutes
                                                les preuves (captures d’écran,
                                                messages, etc.). Ensuite,
                                                contacte la plateforme concernée
                                                et remplis leur formulaire de
                                                signalement.
                                            </div>
                                            <Link href="#" className="text-sm">
                                                www.contre-harcelement.gouv.fr
                                            </Link>
                                        </div>
                                    )}
                                    <Button
                                        color="success"
                                        className="hover:bg-green-600 transition"
                                        onClick={() => setShowAmi(!showAmi)}
                                    >
                                        Parler à un ami
                                    </Button>
                                    {showAmi && (
                                        <div>
                                            <div className="text-sm mt-2">
                                                Parler à un ami de confiance
                                                peut vraiment aider. Choisis
                                                quelqu’un qui te soutient et qui
                                                saura écouter sans juger.
                                            </div>
                                            <Link href="#" className="text-sm">
                                                www.service-public.fr/aide-ami-harcelement.gouv.fr
                                            </Link>
                                        </div>
                                    )}
                                    <Button
                                        color="success"
                                        className="hover:bg-green-600 transition"
                                        onClick={() =>
                                            setShowProfessionnel(
                                                !showProfessionnel
                                            )
                                        }
                                    >
                                        Consulter un professionnel
                                    </Button>
                                    {showProfessionnel && (
                                        <div>
                                            <div className="text-sm mt-2">
                                                Consulter un professionnel peut
                                                te donner des outils pour gérer
                                                la situation. Cherche un
                                                conseiller ou un psychologue qui
                                                a de l’expérience dans ce
                                                domaine.
                                            </div>
                                            <Link href="#" className="text-sm">
                                                www.service-public.fr/consultation-professionnel.gouv.fr
                                            </Link>
                                        </div>
                                    )}
                                    <Button
                                        color="success"
                                        className="hover:bg-green-600 transition"
                                        onClick={() =>
                                            setShowRessources(!showRessources)
                                        }
                                    >
                                        Trouver des ressources en ligne
                                    </Button>
                                    {showRessources && (
                                        <div>
                                            <div className="text-sm mt-2">
                                                Il existe de nombreuses
                                                ressources en ligne, comme des
                                                articles, des forums ou des
                                                groupes de soutien. Fais des
                                                recherches pour trouver ceux qui
                                                te conviennent le mieux.
                                            </div>
                                            <Link href="#" className="text-sm">
                                                www.contre-harcelement.gouv.fr
                                            </Link>
                                            <br />
                                            <Link href="#" className="text-sm">
                                                www.service-public.fr/prevention-harcelement
                                            </Link>
                                            <br />
                                            <Link href="#" className="text-sm">
                                                www.service-public.fr/droits-victimes-harcelement.gouv.fr
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            )}

                            <Button
                                color="primary"
                                className="hover:bg-blue-600 transition"
                            >
                                J'ai vu du contenu sensible en ligne
                            </Button>
                            <Button
                                color="primary"
                                className="hover:bg-blue-600 transition"
                            >
                                Un ami se fait harceler en ligne
                            </Button>
                            <Button
                                color="primary"
                                className="hover:bg-blue-600 transition"
                            >
                                Je connais une personne qui agit mal en ligne
                            </Button>
                        </div>
                    </CardBody>
                </Card>

                <div className="flex justify-center items-center w-[30%]">
                    <Card className="border border-gray-300 w-full">
                        <CardHeader className="flex justify-center">
                            <div className="text-xl font-semibold">
                                Numéros utiles
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <div className="flex flex-col items-start">
                                <div className="flex flex-col items-start border p-3 rounded-lg mb-2">
                                    <div className="flex items-center">
                                        <GiCyberEye
                                            className="text-orange-500 mr-2"
                                            size={24}
                                        />
                                        <span className="text-xl font-semibold">
                                            30 18
                                        </span>
                                    </div>
                                    <div className="italic text-sm mt-1">
                                        Le 30 18 est un numéro d’écoute destiné
                                        aux jeunes victimes et / ou aux témoins
                                        de cyberharcèlement et de toutes formes
                                        de violences sur internet.
                                    </div>
                                </div>
                                <div className="flex flex-col items-start border p-3 rounded-lg mb-2">
                                    <div className="flex items-center">
                                        <TbMoodCry
                                            className="text-orange-500 mr-2"
                                            size={24}
                                        />
                                        <span className="text-xl font-semibold">
                                            30 20
                                        </span>
                                    </div>
                                    <div className="italic text-sm mt-1">
                                        Le numéro s’adresse aux enfants et
                                        adolescents victimes de harcèlement à
                                        l’école.
                                    </div>
                                </div>
                                <div className="flex flex-col items-start border p-3 rounded-lg mb-2">
                                    <div className="flex items-center">
                                        <CgDanger
                                            className="text-orange-500 mr-2"
                                            size={24}
                                        />
                                        <span className="text-xl font-semibold">
                                            119
                                        </span>
                                    </div>
                                    <div className="italic text-sm mt-1">
                                        Tu es victime ou témoin de violences
                                        physiques, psychologiques ou de
                                        négligences sur un autre enfant, appelle
                                        le 119, ouvert 24h/24, 7/7 et gratuit.
                                        Il n’apparaît pas sur la facture
                                        téléphonique.
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </>
    );
}
