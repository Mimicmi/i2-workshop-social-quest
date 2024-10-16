"use client";

import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import NavbarComponent from "@/app/navbar/navbarComponent";
import { Button } from "@nextui-org/react";
import confetti from 'canvas-confetti';
import { FaRegLightbulb } from 'react-icons/fa'; // Import de l'icône Lightbulb
import "./styles/styles.scss";

export default function Course({ params }: { params: { id: string } }) {
    const router = useRouter(); // Utilisation de Next.js router pour la redirection

    const steps = [
        { 
            type: 'text', 
            content: `<h3 class="title">Introduction au cours</h3>
                      <p class="paragraph">Les <strong>réseaux sociaux</strong> sont un outil puissant pour accéder à l'information. 
                      Mais il est parfois difficile de distinguer le <em>vrai</em> du <em>faux</em>. Dans ce module, nous allons apprendre à 
                      <strong>identifier les fausses informations</strong>, à comprendre comment elles se propagent et à développer des réflexes pour les éviter.</p>`
        },
        { 
            type: 'text', 
            content: `<h3 class="title">Qu'est-ce que la Désinformation ?</h3>
                      <p class="paragraph">La <strong>désinformation</strong> est la diffusion intentionnelle de fausses informations dans le but de tromper. 
                      Contrairement à une <em>simple erreur</em>, la désinformation est souvent planifiée et vise à influencer l'opinion publique, 
                      semer le doute ou provoquer des conflits.</p>`
        },
        { 
            type: 'question', 
            content: `<h4 class="title">Quels éléments vous semblent douteux dans cette image ?</h4>
                      <p>Analysez les éléments suspects de l'image (exemple : une URL suspecte, un logo mal utilisé, ou un titre sensationnaliste).</p>
                      <img src="https://via.placeholder.com/150" alt="Fake Article Example" class="image"/>`,
            answers: [
                "L'URL n'a pas l'air fiable.",
                "Le titre est trop alarmant.",
                "L'article semble venir d'une source non officielle.",
                "Tout semble correct."
            ],
            correctAnswer: "L'URL n'a pas l'air fiable.",
            tip: "Pense à vérifier l'URL et le titre. Souvent, les fausses informations sont accompagnées d'URL douteuses ou de titres sensationnalistes."
        },
        { 
            type: 'text', 
            content: `<h3 class="title">Comment la Désinformation se Propage ?</h3>
                      <p class="paragraph">La désinformation se propage principalement à travers les <strong>partages rapides</strong> et sans vérification 
                      sur les réseaux sociaux. Certains utilisateurs partagent des articles sans les lire entièrement, et d'autres se laissent 
                      manipuler par des titres accrocheurs. Il est crucial de <em>vérifier avant de partager</em>.</p>`
        },
        { 
            type: 'question', 
            content: `<h4 class="title">Quelles sont les bonnes pratiques à suivre avant de partager un contenu en ligne ?</h4>`,
            answers: [
                "Lire l'article entier avant de le partager.",
                "Vérifier la source de l'information.",
                "Partager seulement si le titre vous semble fiable.",
                "Rechercher d'autres sources pour vérifier l'info."
            ],
            correctAnswer: "Lire l'article entier avant de le partager.",
            tip: "Il est essentiel de lire tout l'article, vérifier la source et s'assurer que l'information est fiable avant de la partager."
        },
        { 
            type: 'text', 
            content: `<h3 class="title">Les Types de Désinformation</h3>
                      <p class="paragraph">Il existe plusieurs types de <strong>désinformation</strong>, notamment :</p>
                      <ul>
                        <li><strong>Fake News</strong> : Des articles totalement fabriqués pour manipuler.</li>
                        <li><strong>Clickbait</strong> : Des titres sensationnels conçus pour attirer des clics.</li>
                        <li><strong>Deepfakes</strong> : Des vidéos manipulées où les images et sons sont falsifiés pour créer une situation fausse.</li>
                      </ul>`
        },
        { 
            type: 'question', 
            content: `<h4 class="title">Quel type de désinformation utilise des images ou vidéos manipulées pour faire croire à une fausse réalité ?</h4>`,
            answers: [
                "Clickbait",
                "Fake News",
                "Deepfake"
            ],
            correctAnswer: "Deepfake",
            tip: "Les deepfakes sont des vidéos ou images modifiées qui peuvent paraître réelles, mais qui sont totalement fausses."
        },
        { 
            type: 'text', 
            content: `<h3 class="title">Comment Se Protéger de la Désinformation ?</h3>
                      <p class="paragraph">Apprendre à identifier les sources fiables, vérifier les informations sur plusieurs sites, 
                      et utiliser des outils de <strong>vérification des faits</strong> sont des moyens efficaces pour se protéger de la désinformation.</p>`
        },
        { 
            type: 'question', 
            content: `<h4 class="title">Quels réflexes allez-vous adopter suite à cette formation ?</h4>`,
            answers: [
                "Lire les articles en entier.",
                "Vérifier la source avant de partager.",
                "Rechercher d'autres sources d'information.",
                "Tous les précédents."
            ],
            correctAnswer: "Tous les précédents.",
            tip: "Tous ces réflexes sont importants pour éviter la désinformation : lire les articles, vérifier les sources, et comparer les informations."
        },
        { 
            type: 'text', 
            content: `<h3 class="title">Conclusion du cours</h3>
                      <p class="paragraph">La <strong>désinformation</strong> est un véritable danger pour nos sociétés connectées. Grâce à ces techniques 
                      et outils, vous pouvez désormais mieux naviguer sur les réseaux sociaux, partager des informations fiables et 
                      <em>contribuer à lutter contre les fausses nouvelles</em>.</p>`
        }
    ];
    
    
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [progress, setProgress] = useState(0);
    const [showTip, setShowTip] = useState(true); // État pour afficher ou masquer le tips

    const currentContent = steps[currentStep];

    // Met à jour la progression en pourcentage
    useEffect(() => {
        setProgress(Math.round(((currentStep + 1) / steps.length) * 100));
    }, [currentStep]);

    const handleAnswerClick = (answer: string) => {
        setSelectedAnswer(answer);
        if (answer === currentContent.correctAnswer) {
            setIsCorrect(true);
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
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
            origin: { y: 0.6 }
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
                    <div className="progress" style={{ width: `${progress}%` }}></div>
                </div>

                {/* Pourcentage au centre */}
                <div className="progress-percentage">{progress}%</div>

                {/* Carte de contenu */}
                <div className="card">
                    <div className="content">
                        {currentContent.type === 'text' && (
                            <div
                                dangerouslySetInnerHTML={{ __html: currentContent.content }}
                            />
                        )}

                        {currentContent.type === 'question' && (
                            <div>
                                <div
                                    dangerouslySetInnerHTML={{ __html: currentContent.content }}
                                />
                                <div className="button-column">
                                    {currentContent.answers!.map((answer, index) => (
                                        <Button
                                            key={index}
                                            className="w-full py-4"
                                            color={selectedAnswer === answer ? (isCorrect && selectedAnswer === currentContent.correctAnswer ? 'success' : 'danger') : 'default'}
                                            variant={selectedAnswer === answer && isCorrect === false ? 'ghost' : 'solid'}
                                            onClick={() => handleAnswerClick(answer)}
                                            disabled={isCorrect === true}
                                        >
                                            {answer}
                                        </Button>
                                    ))}
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
                                <button className="tip-close" onClick={() => setShowTip(false)}>×</button>
                            </div>
                        </div>
                    )}

                    {/* Bouton "Terminé" pour la dernière étape avec redirection */}
                    {(currentContent.type === 'text' || isCorrect) && (
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
