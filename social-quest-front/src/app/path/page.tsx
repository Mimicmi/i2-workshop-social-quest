"use client";

import { useRouter } from "next/navigation";
import NavbarComponent from "../navbar/navbarComponent";
import "./style/style.scss";

export default function Path() {
    const router = useRouter();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/course/1");
    };

    const passwordContent = [
        {
            content: "Le Forgeron du Mot de Passe",
        },
        {
            content: `Dans ce jeu, tu sera un forgeron numérique dont la mission est de créer des mots de passe incassables pour protéger des trésors virtuels.
                À chaque niveau, tu rencontrera différents types de "hackers" qui essaient de déchiffrer des mots de passe. 
                Tu pourras combiner des caractères spéciaux, des chiffres, des majuscules, et des mots aléatoires pour créer des mots de passe solides qui résistent aux attaques.`,
        },
    ];
    const profileContent = [
        {
            content: "Gestion du Profil",
        },
        {
            content: "Profil Protecteur",
        },
        {
            content: `Dans ce jeu, tu es chargés de créer et de gérer
                                un profil en ligne dans un univers virtuel tout
                                en veillant à ta sécurité et à ta vie privée. À
                                chaque niveau, tu rencontres des défis où tu
                                dois choisir quelles informations partager ou
                                masquer sur leur profil. Tu apprendras à décider
                                quels détails personnels (comme leur âge, leur
                                localisation, ou leur photo) sont nécessaires ou
                                non, et découvrent les conséquences de la
                                surexposition de ton profil.`,
        },
    ];
    const privateContent = [
        {
            content: "Paramètres de Sécurité",
        },
        {
            content: "Forteresse Privée",
        },
        {
            content: `Découvre comment protéger ton profil en ligne en
                                ajustant correctement les paramètres de sécurité
                                de ton compte. Tu devras te défendre contre des
                                vagues d'intrusions en configurant des mots
                                de passe robustes, en activant
                                l'authentification à deux facteurs, et en
                                bloquant les comptes suspects. Chaque niveau
                                enseigne des astuces de sécurité qui renforcent
                                la forteresse de ton identité en ligne.`,
        },
    ];
    const timeContent = [
        {
            content: "Gestion du Temps d’Écran",
        },
        {
            content: "Chrono Challenge",
        },
        {
            content: `Dans ce jeu de gestion du temps, tu vas devoir
                                équilibrer leur journée en alternant entre les
                                réseaux sociaux et d'autres activités
                                (école, sports, sommeil). Tu découvres comment
                                un temps d'écran excessif affecte ton
                                bien-être général. L’objectif est de maintenir
                                un équilibre en maintenant une barre de santé
                                stable.`,
        },
    ];
    const followContent = [
        {
            content: "Amis",
        },
        {
            content: "Choisir les Bonnes Personnes à Suivre",
        },
        {
            content: `Sur les réseaux, tout le monde n’est pas ton
                                ami. On t’apprend à reconnaître les personnes de
                                confiance pour éviter les mauvaises surprises.
                                Pour cela identifie les personnes de confiance
                                et glisse à droite ou à gauche pour les suivre
                                ou les ignorer.`,
        },
    ];
    const videoContent = [
        {
            content: "Vidéos",
        },
        {
            content: "Poster des Vidéos en Toute Sécurité",
        },
        {
            content: `Dans ce jeu, tu vas prendre le rôle de créateurs
                                de contenu qui souhaitent poster des vidéos tout
                                en protégeant leur vie privée et en respectant
                                les règles de sécurité en ligne. Avant chaque
                                publication, tu devras passer par une série de
                                contrôles et de choix concernant la vidéo, tels
                                que la gestion des paramètres de
                                confidentialité, le choix des personnes pouvant
                                voir la vidéo, et la vérification de l’absence
                                d'informations personnelles.`,
        },
    ];
    const onlineContent = [
        {
            content: "Interactions en ligne",
        },
        {
            content: "Impact",
        },
        {
            content: `Dans ce jeu, tu vas naviguer dans un monde
                                virtuel où chaque action en ligne, comme un
                                commentaire, un partage ou un "like", a des
                                conséquences directes sur l’environnement qui
                                les entoure. En répondant aux différents
                                personnages et situations, tu choisiras entre
                                des actions positives ou négatives, et observent
                                comment leurs choix influencent les autres. Les
                                comportements bienveillants améliorent le monde
                                virtuel, tandis que les interactions négatives,
                                comme le cyberharcèlement, dégradent le paysage
                                et isolent les personnages.`,
        },
    ];
    const fishingContent = [
        {
            content: "Fishing",
        },
        {
            content: "Identifies les arnaques",
        },
        {
            content: `Dans cette partie on va t'apprendre a
                                identifier les arnaques et a ne pas tomber dans
                                le piège. Au travers d'un jeu des 7
                                différences tu pourra identifier les arnaques
                                des vraies messages et ainsi passer ce module
                                aisément.`,
        },
    ];
    const trollContent = [
        {
            content: "Trolls",
        },
        {
            content: "Ne Nourris Pas les Trolls",
        },
        {
            content: `Tu vas incarner un super-héros du web qui combat
                                des "trolls" en ligne. Chaque niveau met en
                                scène différentes formes de cyberharcèlement, et
                                tu dois doit choisir les meilleures stratégies
                                pour stopper les trolls et protéger les
                                victimes. Le jeu enseigne comment réagir face au
                                cyberharcèlement et où trouver de l'aide.`,
        },
    ];

    const deepFake = `Dans ce jeu, tu incarnes un détective numérique
                                chargé de repérer des vidéos manipulées, connues
                                sous le nom de deepfakes. Ils se retrouvent dans
                                une salle de contrôle où différentes vidéos sont
                                projetées sur des écrans. À l’aide d’indices et
                                d’outils d’analyse, tu devras examiner les
                                vidéos pour détecter des signes de manipulation,
                                tels que des mouvements de lèvres incohérents,
                                des ombres anormales ou des expressions faciales
                                qui semblent irréelles.`;

    return (
        <>
            <NavbarComponent />

            <div className="timeline">
                <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
                    <div className="timeline__event__icon ">
                        <i className="lni-sport"></i>
                    </div>
                    <div className="timeline__event__date"> Mot de passe</div>
                    <div className="timeline__event__content ">
                        <div className="timeline__event__title">
                            {passwordContent[0].content}
                        </div>
                        <div className="timeline__event__description">
                            <p>{passwordContent[1].content}</p>
                        </div>
                    </div>
                </div>
                <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type2">
                    <div className="timeline__event__icon ">
                        <i className="lni-sport"></i>
                    </div>
                    <div className="timeline__event__date">
                        {profileContent[0].content}
                    </div>
                    <div className="timeline__event__content ">
                        <div className="timeline__event__title">
                            {profileContent[1].content}
                        </div>
                        <div className="timeline__event__description">
                            <p>{profileContent[2].content}</p>
                        </div>
                    </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-2s timeline__event--type3">
                    <div className="timeline__event__icon">
                        <i className="lni-sport"></i>
                    </div>
                    <div className="timeline__event__date">
                        {privateContent[0].content}
                    </div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            {privateContent[1].content}
                        </div>
                        <div className="timeline__event__description">
                            <p>{privateContent[2].content}</p>
                        </div>
                    </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-1s timeline__event--type1">
                    <div className="timeline__event__icon">
                        <i className="lni-sport"></i>
                    </div>
                    <div className="timeline__event__date">
                        {timeContent[0].content}
                    </div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            {timeContent[1].content}
                        </div>
                        <div className="timeline__event__description">
                            <p>{timeContent[2].content}</p>
                        </div>
                    </div>
                </div>
                <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type2">
                    <div className="timeline__event__icon ">
                        <i className="lni-sport"></i>
                    </div>
                    <div className="timeline__event__date">
                        {followContent[0].content}
                    </div>
                    <div className="timeline__event__content ">
                        <div className="timeline__event__title">
                            {followContent[1].content}
                        </div>
                        <div className="timeline__event__description">
                            <p>{followContent[2].content}</p>
                        </div>
                    </div>
                </div>
                <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type3">
                    <div className="timeline__event__icon ">
                        <i className="lni-sport"></i>
                    </div>
                    <div className="timeline__event__date">
                        {videoContent[0].content}
                    </div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            {videoContent[1].content}
                        </div>
                        <div className="timeline__event__description">
                            <p>{videoContent[2].content}</p>
                        </div>
                    </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-2s timeline__event--type1">
                    <div className="timeline__event__icon">
                        <i className="lni-sport"></i>
                    </div>
                    <div className="timeline__event__date">
                        {onlineContent[0].content}
                    </div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            {onlineContent[1].content}
                        </div>
                        <div className="timeline__event__description">
                            <p>{onlineContent[2].content}</p>
                        </div>
                    </div>
                </div>
                <div className="timeline__event animated fadeInUp timeline__event--type2">
                    <div className="timeline__event__icon">
                        <i className="lni-sport"></i>
                    </div>
                    <div className="timeline__event__date ">
                        {fishingContent[0].content}
                    </div>
                    <div className="timeline__event__content ">
                        <div className="timeline__event__title">
                            {fishingContent[1].content}
                        </div>
                        <div className="timeline__event__description">
                            <p>{fishingContent[2].content}</p>
                        </div>
                    </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-2s timeline__event--type3">
                    <div className="timeline__event__icon">
                        <i className="lni-sport"></i>
                    </div>
                    <div className="timeline__event__date">
                        Fake News et Désinformation
                    </div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            Chasse aux Fakes
                        </div>
                        <div className="timeline__event__description">
                            <p>
                                Ici tu doit examiner des articles, des vidéos et
                                des images, et utiliser des indices pour
                                distinguer le vrai du faux. Tu gagnent des
                                points pour chaque fausse information
                                correctement signalée et apprends les techniques
                                de vérification des sources.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-2s timeline__event--type1">
                    <div className="timeline__event__icon">
                        <i className="lni-sport"></i>
                    </div>
                    <div className="timeline__event__date">
                        {trollContent[0].content}
                    </div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            {trollContent[1].content}
                        </div>
                        <div className="timeline__event__description">
                            <p>{trollContent[2].content}</p>
                        </div>
                    </div>
                </div>
                <div
                    className="timeline__event animated fadeInUp delay-1s timeline__event--type2"
                    onClick={handleSubmit}
                >
                    <div className="timeline__event__icon">
                        <i className="lni-sport"></i>
                    </div>
                    <div className="timeline__event__date">Deepfake</div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            Deepfakes et Manipulation Vidéo
                        </div>
                        <div className="timeline__event__description">
                            <p>{deepFake}</p>
                        </div>
                    </div>
                </div>
                <div className="timeline__event disabled animated fadeInUp delay-1s timeline__event--type3">
                    <div className="timeline__event__icon">
                        <i className="lni-sport"></i>
                    </div>
                    <div className="timeline__event__date">September 2015</div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            Super Mario Maker
                        </div>
                        <div className="timeline__event__description">
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Vel, nam! Nam eveniet ut
                                aliquam ab asperiores, accusamus iure veniam
                                corporis incidunt reprehenderit accusantium id
                                aut architecto harum quidem dolorem in!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline__event disabled animated fadeInUp timeline__event--type1">
                    <div className="timeline__event__icon">
                        <i className="lni-sport"></i>
                    </div>
                    <div className="timeline__event__date">December 2016</div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            Super Mario Run
                        </div>
                        <div className="timeline__event__description">
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Vel, nam! Nam eveniet ut
                                aliquam ab asperiores, accusamus iure veniam
                                corporis incidunt reprehenderit accusantium id
                                aut architecto harum quidem dolorem in!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline__event disabled  animated fadeInUp delay-3s timeline__event--type1">
                    <div className="timeline__event__icon ">
                        <i className="lni-sport"></i>
                    </div>
                    <div className="timeline__event__date">October 2017</div>
                    <div className="timeline__event__content ">
                        <div className="timeline__event__title">
                            Super Mario Odyssey
                        </div>
                        <div className="timeline__event__description">
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Vel, nam! Nam eveniet ut
                                aliquam ab asperiores, accusamus iure veniam
                                corporis incidunt reprehenderit accusantium id
                                aut architecto harum quidem dolorem in!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="timeline__event disabled animated fadeInUp delay-2s timeline__event--type2">
                    <div className="timeline__event__icon">
                        <i className="lni-sport"></i>
                    </div>
                    <div className="timeline__event__date">June 2019</div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            Super Mario Maker 2
                        </div>
                        <div className="timeline__event__description">
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Vel, nam! Nam eveniet ut
                                aliquam ab asperiores, accusamus iure veniam
                                corporis incidunt reprehenderit accusantium id
                                aut architecto harum quidem dolorem in!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline__event disabled animated fadeInUp delay-1s timeline__event--type3">
                    <div className="timeline__event__icon">
                        <i className="lni-sport"></i>
                    </div>
                    <div className="timeline__event__date">February 2021</div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            Super Mario 3D World + Bowser Fury
                        </div>
                        <div className="timeline__event__description">
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Vel, nam! Nam eveniet ut
                                aliquam ab asperiores, accusamus iure veniam
                                corporis incidunt reprehenderit accusantium id
                                aut architecto harum quidem dolorem in!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline__event disabled animated fadeInUp timeline__event--type1">
                    <div className="timeline__event__icon">
                        <i className="lni-sport"></i>
                    </div>
                    <div className="timeline__event__date">December 2016</div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            Super Mario Run
                        </div>
                        <div className="timeline__event__description">
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Vel, nam! Nam eveniet ut
                                aliquam ab asperiores, accusamus iure veniam
                                corporis incidunt reprehenderit accusantium id
                                aut architecto harum quidem dolorem in!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
