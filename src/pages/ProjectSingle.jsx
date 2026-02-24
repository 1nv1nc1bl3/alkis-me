import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import ProjectHero from '../components/projects/ProjectHero';

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

    if (loading) return <div>Loading...</div>;

    if (!project) return <div>Project not found</div>;

    return (
        <main>
            <ProjectHero project={project} />
        </main>
    );
}
