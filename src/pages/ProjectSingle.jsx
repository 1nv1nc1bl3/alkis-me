import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export default function ProjectSingle() {
    const { slug } = useParams();

    const [project, setProject] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data/projects.json')
            .then((res) => res.json())
            .then((data) => {
                const foundProject = data.find((p) => p.slug === slug);

                setProject(foundProject);

                setLoading(false);
            });
    }, [slug]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <h1>{project.title}</h1>

            <h3>{project.subtitle}</h3>

            <p>{project.description}</p>

            <br />

            <a href={project.appUrl} target='_blank'>
                Visit App
            </a>

            <br />

            <a href={project.githubUrl} target='_blank'>
                View Code
            </a>
        </div>
    );
}
