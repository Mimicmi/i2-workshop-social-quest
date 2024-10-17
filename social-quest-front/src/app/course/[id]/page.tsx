"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import NavbarComponent from "@/app/navbar/navbarComponent";
import { Button } from "@nextui-org/react";
import confetti from "canvas-confetti";
import { FaRegLightbulb } from "react-icons/fa"; // Import de l'icône Lightbulb
import "./styles/styles.scss";

export default function Course() {
    const router = useRouter(); // Utilisation de Next.js router pour la redirection

    const steps = [
        {
            type: "text",
            content: `<h3 class="title">Bienvenue dans le cours !</h3>
                      <p class="paragraph">Les <strong>réseaux sociaux</strong> sont super pour trouver des infos. Mais, parfois, il peut être difficile de savoir 
                      ce qui est <em>vrai</em> ou <em>faux</em>. Dans ce module, on va apprendre à <strong>reconnaître les fausses infos</strong>, 
                      comprendre comment elles se répandent, et découvrir des astuces pour les éviter.</p>`,
        },
        {
            type: "text",
            content: `<h3 class="title">C'est quoi la Désinformation ?</h3>
                      <p class="paragraph">La <strong>désinformation</strong>, c'est quand quelqu'un partage exprès des fausses infos pour tromper les gens. 
                      Contrairement à une simple <em>erreur</em>, c'est fait exprès pour influencer les gens, semer le doute, ou créer des disputes.</p>`,
        },
        {
            type: "question",
            content: `<h4 class="title">Qu'est-ce qui te semble bizarre dans cette image ?</h4>
                      <p>Regarde bien les détails (exemple : un lien bizarre, un logo mal fait, ou un titre qui fait peur).</p>
                      <img src="/tik_tok.jpeg" width="200" height="300" alt="Exemple d'article bidon" class="image"/>`,
            answers: [
                "Le lien n'a pas l'air vrai.",
                "Le titre fait trop peur.",
                "L'article ne vient pas d'un site officiel.",
                "Tout a l'air bien.",
            ],
            correctAnswer: "Le lien n'a pas l'air vrai.",
            tip: "Pense à vérifier le lien et le titre. Souvent, les fausses infos utilisent des liens bizarres ou des titres qui font peur.",
        },
        {
            type: "text",
            content: `<h3 class="title">Comment les Fausses Infos se Propagent ?</h3>
                      <p class="paragraph">Les fausses infos se répandent surtout quand on <strong>partage rapidement</strong> sans vérifier. 
                      Parfois, des gens partagent des articles sans même les lire, ou se font avoir par des titres accrocheurs. 
                      Il est super important de <em>vérifier avant de partager</em> !</p>`,
        },
        {
            type: "question",
            content: `<h4 class="title">Quelles sont les bonnes habitudes avant de partager quelque chose en ligne ?</h4>`,
            answers: [
                "Lire tout l'article avant de partager.",
                "Vérifier d'où vient l'info.",
                "Partager si le titre te semble correct.",
                "Chercher d'autres sources pour voir si c'est vrai.",
            ],
            correctAnswer: "Lire tout l'article avant de partager.",
            tip: "Toujours lire l'article, vérifier d'où vient l'info, et être sûr que c'est vrai avant de partager.",
        },
        {
            type: "text",
            content: `<h3 class="title">Les Différents Types de Fausses Infos</h3>
                      <p class="paragraph">Il y a plusieurs types de fausses infos, comme :</p>
                      <ul>
                        <li><strong>Fake News</strong> : Des articles complètement inventés pour manipuler les gens.</li>
                        <li><strong>Clickbait</strong> : Des titres qui font peur ou qui sont exagérés pour attirer les clics.</li>
                        <li><strong>Deepfakes</strong> : Des vidéos ou images trafiquées pour faire croire à des choses qui ne sont pas vraies.</li>
                      </ul>`,
        },
        {
            type: "question",
            content: `<h4 class="title">Quel type de fausse info utilise des images ou des vidéos truquées pour faire croire à des choses fausses ?</h4>`,
            answers: ["Clickbait", "Fake News", "Deepfake"],
            correctAnswer: "Deepfake",
            tip: "Les deepfakes sont des vidéos ou images modifiées pour ressembler à la réalité, mais qui sont complètement fausses.",
        },
        {
            type: "text",
            content: `<h3 class="title">Comment te protéger des Fausses Infos ?</h3>
                      <p class="paragraph">Pour te protéger des fausses infos, apprends à reconnaître les sources fiables, vérifie les infos sur plusieurs sites, 
                      et utilise des outils pour <strong>vérifier les faits</strong>. C'est très utile pour éviter de tomber dans le piège.</p>`,
        },
        {
            type: "question",
            content: `<h4 class="title">Quels gestes vas-tu adopter après ce cours ?</h4>`,
            answers: [
                "Lire les articles en entier.",
                "Vérifier d'où vient l'info avant de partager.",
                "Chercher d'autres sources pour vérifier.",
                "Tout ça à la fois !",
            ],
            correctAnswer: "Tout ça à la fois !",
            tip: "Ces gestes sont très importants : lire les articles, vérifier les sources, et comparer les infos avant de les partager.",
        },
        {
            type: "text",
            content: `<h3 class="title">Bravo, tu as terminé le cours !</h3>
                      <p class="paragraph">La <strong>désinformation</strong> est un gros problème sur Internet. Mais maintenant, grâce à ces techniques, 
                      tu sais comment éviter les fausses infos et <em>aider les autres</em> à ne pas tomber dans le piège non plus.</p>`,
        },
    ];

    const [currentStep, setCurrentStep] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [progress, setProgress] = useState(0);
    const [showTip, setShowTip] = useState(true); // État pour afficher ou masquer le tips

    const currentContent = steps[currentStep];

    // Met à jour la progression en pourcentage
    useEffect(() => {
        if (steps.length)
            setProgress(Math.round(((currentStep + 1) / steps.length) * 100));
    }, [currentStep]);

    const handleAnswerClick = (answer: string) => {
        setSelectedAnswer(answer);
        if (answer === currentContent.correctAnswer) {
            setIsCorrect(true);
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
            });
        } else {
            setIsCorrect(false);
            setShowTip(true); // Affiche le tips en cas de mauvaise réponse
        }
    };

    // Gestion de la redirection pour la dernière étape
    const handleFinish = (e: React.FormEvent) => {
        e.preventDefault();
        // Explosion de confettis sur tout l'écran pour la dernière page
        confetti({
            particleCount: 10000,
            spread: 1600,
            startVelocity: 100,
            ticks: 1000,
            origin: { y: 0.6 },
        });

        setTimeout(() => {
            router.push("/path"); // Redirection après explosion des confettis
        }, 1500); // Attente avant redirection pour laisser les confettis se disperser
    };

    const goToNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
            setSelectedAnswer(null);
            setIsCorrect(null);
            setShowTip(false); // Masque le tips pour la prochaine question
        }
    };

    return (
        <>
            <NavbarComponent />
            <div className="course-container">
                {/* Barre de progression */}
                <div className="progress-bar">
                    <div
                        className="progress"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                {/* Pourcentage au centre */}
                <div className="progress-percentage">{progress}%</div>

                {/* Carte de contenu */}
                <div className="card">
                    <div className="content">
                        {currentContent.type === "text" && (
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: currentContent.content,
                                }}
                            />
                        )}

                        {currentContent.type === "question" && (
                            <div>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: currentContent.content,
                                    }}
                                />
                                <div className="button-column">
                                    {currentContent.answers!.map(
                                        (answer, index) => (
                                            <Button
                                                key={index}
                                                className="w-full py-4"
                                                color={
                                                    selectedAnswer === answer
                                                        ? isCorrect &&
                                                          selectedAnswer ===
                                                              currentContent.correctAnswer
                                                            ? "success"
                                                            : "danger"
                                                        : "default"
                                                }
                                                variant={
                                                    selectedAnswer === answer &&
                                                    isCorrect === false
                                                        ? "ghost"
                                                        : "solid"
                                                }
                                                onClick={() =>
                                                    handleAnswerClick(answer)
                                                }
                                                disabled={isCorrect === true}
                                            >
                                                {answer}
                                            </Button>
                                        )
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Tips affiché en cas de mauvaise réponse */}
                    {isCorrect === false && showTip && (
                        <div className="tip-card">
                            <div className="tip-content">
                                <FaRegLightbulb className="tip-icon" />
                                <p>{currentContent.tip}</p>
                                <button
                                    className="tip-close"
                                    onClick={() => setShowTip(false)}
                                >
                                    ×
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Bouton "Terminé" pour la dernière étape avec redirection */}
                    {(currentContent.type === "text" || isCorrect) && (
                        <div className="next-button-container">
                            {currentStep === steps.length - 1 ? (
                                <Button
                                    onClick={handleFinish}
                                    className="w-full next-button"
                                    color="success"
                                >
                                    Terminé
                                </Button>
                            ) : (
                                <Button
                                    onClick={goToNext}
                                    className="w-full next-button"
                                    color="success"
                                >
                                    Suivant
                                </Button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
