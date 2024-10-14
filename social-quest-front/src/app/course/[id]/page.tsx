export default function Course({ params }: { params: { id: string } }) {
    // TODO: Affichage d’un module de formation avec le contenu du cours, la vidéo explicative, les quiz interactifs, et un indicateur de progression.

    return (
        <>
            <div>Course page id : {params.id}</div>
        </>
    );
}
